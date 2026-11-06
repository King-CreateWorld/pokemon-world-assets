/* Shared system configuration. Availability is not an assertion of implemented content. */
(function(root){
 const regions=Object.freeze([
  {id:'kanto',label:'关都',enabled:true,spawnMap:'MAP_PALLET_TOWN'},
  {id:'hoenn',label:'丰缘',enabled:false,spawnMap:null},
  {id:'sinnoh',label:'神奥',enabled:false,spawnMap:null},
  {id:'unova',label:'合众',enabled:false,spawnMap:null},
  {id:'johto',label:'城都',enabled:false,spawnMap:null}
 ].map(Object.freeze));
 const api=Object.freeze({regions,available:()=>regions.filter(r=>r.enabled),isAvailable:id=>regions.some(r=>r.id===id&&r.enabled)});
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.localRegionCatalog=api;
})(globalThis);
