/* Source-backed renderer for decoded creation-eligible components only.
   Refuses beyond-padding UV sampling instead of silently inventing atlas neighbors. */
window.loadCreationFrameRenderer=async(base,{signal,banks=[0,1,2]}={})=>{
 const [manifest,palette]=await Promise.all(['creation-animation.json','palette.json'].map(n=>fetch(base+n,{signal}).then(r=>{if(!r.ok)throw Error(n+':'+r.status);return r.json()})));
 const requiredRows=manifest.rows.filter(r=>banks.includes(r.view)&&(r.view!==0||r.frame<=26));
 let decodeRetries=0;const decoded=new Map();
 const dispose=()=>{for(const bitmap of decoded.values())bitmap.close();decoded.clear()};
 try{for(const row of requiredRows){signal?.throwIfAborted();if(!row.length||decoded.has(row.path))continue;
 const response=await fetch(base+row.path,{signal});if(!response.ok)throw Error('resource HTTP '+response.status+' '+row.path);
 const bitmap=await createImageBitmap(await response.blob());
 if(signal?.aborted){bitmap.close();signal.throwIfAborted()}
 if(bitmap.width!==row.width||bitmap.height!==row.height){bitmap.close();throw Error('size mismatch '+row.path)}decoded.set(row.path,bitmap);
 }}catch(error){dispose();throw error}

 function draw(canvas,draft,bank,frame){
  if(![0,1,2].includes(bank)||!Number.isInteger(frame))throw Error('invalid mode');
  const eligible=manifest.genders[String(draft.gender)];if(!eligible)throw Error('invalid gender');
  for(const slot of manifest.visibleSlots)if(!eligible[slot].includes(draft.slots[slot]?.item))throw Error('ineligible '+slot);
  const top=manifest.items.find(i=>i.slot==='TOP'&&i.id===draft.slots.TOP.item);
  const order=['FOOTWEAR','LEGGINGS','TOP','BACK','FACIAL_HAIR','EYES','HAIR','HAT','GLOVES'].filter(s=>!(s==='FOOTWEAR'&&(top?.flags&4096))&&!(s==='LEGGINGS'&&(top?.flags&2048)));
  const rows=manifest.rows.filter(r=>r.view===bank&&r.frame===frame);const baseRow=rows.find(r=>r.base===draft.skin);if(!baseRow?.length)throw Error('missing base');
  const plan=[];for(let phase=0;phase<3;phase++){if(phase===1)plan.push({row:baseRow,tint:null});for(const slot of order)for(const ch of [[3,5,4],[0,2,1],[6,8,7]][phase])for(const row of rows.filter(r=>r.slot===slot&&r.id===draft.slots[slot].item&&r.channel===ch&&r.length)){const tint=[2,5,8].includes(ch)?null:palette.colors.find(c=>c.id===draft.slots[slot].color)?.tintRGB;if(![2,5,8].includes(ch)&&!tint)throw Error('invalid tint');plan.push({row,tint})}}
  const uncertain=plan.filter(p=>!p.row.withinVerifiedPadding);if(uncertain.length){canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);return {ok:false,reason:'native-atlas-neighbor-required',references:uncertain.map(p=>({slot:p.row.slot,frame:p.row.frame,delta:p.row.sourceRegionDelta}))};}
  canvas.width=baseRow.width;canvas.height=baseRow.height;const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const {row,tint} of plan){const c=document.createElement('canvas');c.width=row.width;c.height=row.height;const x=c.getContext('2d');x.drawImage(decoded.get(row.path),-row.sourceRegionDelta[0],-row.sourceRegionDelta[1]);if(tint){const px=x.getImageData(0,0,c.width,c.height);for(let i=0;i<px.data.length;i+=4)for(let k=0;k<3;k++)px.data[i+k]=Math.round(px.data[i+k]*tint[k]/255);x.putImageData(px,0,0)}ctx.drawImage(c,0,0)}
  return {ok:true,bank,frame,layers:plan.length,scope:'Decoded eligible parts; no native runtime pixel-parity claim'};
 }
 return {draw,dispose,manifest,decodedCount:decoded.size,decodeRetries,expectedUnique:new Set(requiredRows.filter(r=>r.length).map(r=>r.path)).size};
};
