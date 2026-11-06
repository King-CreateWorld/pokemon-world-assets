'use strict';
// Independent project schema. Native protocol IDs are deliberately not accepted.
const regionCatalog=typeof module!=='undefined'&&module.exports?require('./region-catalog.js'):globalThis.localRegionCatalog;
function validateDraft(value, manifest, palette) {
 const errors=[];
 const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 const exact=(v,keys,path)=>{if(!object(v)){errors.push(path+':object-required');return false}for(const k of Object.keys(v))if(!keys.includes(k))errors.push(path+':unknown-field:'+k);for(const k of keys)if(!Object.hasOwn(v,k))errors.push(path+':missing-field:'+k);return true};
 if(!exact(value,['schemaVersion','name','region','gender','skin','slots'],'draft'))return {ok:false,errors};
 if(value.schemaVersion!==1)errors.push('schemaVersion:unsupported');
 // Empty names cannot be committed. This is our draft rule, not a claim about official server minimum length.
 if(typeof value.name!=='string'||[...value.name].length<1||[...value.name].length>16||/[^A-Za-z\p{Script=Han}]/u.test(value.name))errors.push('name:invalid');
 if(!regionCatalog?.isAvailable(value.region))errors.push('region:unsupported');
 if(!Number.isInteger(value.gender)||![0,1].includes(value.gender))errors.push('gender:invalid');
 if(!Number.isInteger(value.skin)||value.skin<0||value.skin>4)errors.push('skin:invalid');
 if(exact(value.slots,manifest.visibleSlots,'slots'))for(const slot of manifest.visibleSlots){
  const part=value.slots[slot];if(!exact(part,['item','color','variant'],'slots.'+slot))continue;
  const eligible=manifest.genders[String(value.gender)]?.[slot]||[];
  if(!Number.isInteger(part.item)||!eligible.includes(part.item))errors.push(slot+':item-not-eligible');
  const item=manifest.items.find(i=>i.slot===slot&&i.id===part.item);
  if(part.item!==-1&&!item)errors.push(slot+':item-definition-missing');
  if(!Number.isInteger(part.color)||!palette.colors.some(c=>c.id===part.color))errors.push(slot+':color-invalid');
  if((part.item===-1||!item||!(item.flags&16))&&part.color!==0)errors.push(slot+':color-not-supported');
  // Only variant0 has been decoded and verified for this draft; do not invent additional variants.
  if(part.variant!==0)errors.push(slot+':variant-unverified');
 }
 if(errors.length)return {ok:false,errors};
 return {ok:true,draft:JSON.parse(JSON.stringify(value))};
}
if(typeof module!=='undefined'&&module.exports)module.exports={validateDraft};
else globalThis.localRoleDraft={validateDraft};
