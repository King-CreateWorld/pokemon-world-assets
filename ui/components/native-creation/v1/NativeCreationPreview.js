import React,{useEffect,useRef,useState} from 'react';
const h=React.createElement;
// Caller owns the loaded renderer. This component owns only its animation timer.
export function NativeCreationPreview({renderer,draft,cycle}) {
 const refs=useRef([]),[mode,setMode]=useState(0),[error,setError]=useState('');
 useEffect(()=>{let closed=false,timer;const start=performance.now();let previous='';
 const draw=()=>{if(closed)return;try{const spec=cycle.describe(mode,performance.now()-start,{gender:draft.gender,mobile:matchMedia('(max-height:500px)').matches});const key=spec.bank+':'+spec.frames.join(',');if(key!==previous){for(let i=0;i<3;i++){const c=refs.current[i];if(!c)continue;c.hidden=spec.frames.length===1&&i!==1;if(c.hidden)continue;const f=spec.frames.length===1?spec.frames[0]:spec.frames[i];c.style.aspectRatio=spec.width+'/'+spec.height;c.style.width=(spec.width*(matchMedia('(max-height:500px)').matches?1.6:2))+'px';c.style.height='auto';const r=renderer.draw(c,draft,spec.bank,f);if(!r.ok){setError('此动作帧尚未核实');return}}previous=key;setError('')}}catch(e){setError(e.message);return}timer=setTimeout(draw,30)};draw();return()=>{closed=true;clearTimeout(timer)}
 },[renderer,draft,cycle,mode]);
 return h('div',{className:'native-preview', 'data-mode':mode},h('div',{className:'native-demo-views'},[0,1,2].map(i=>h('canvas',{key:i,ref:e=>refs.current[i]=e,width:57,height:56}))),h('div',{className:'native-preview__controls'},h('button',{type:'button','aria-label':'上一个动作',onClick:()=>setMode(m=>cycle.nextState(m,-1))},'◀'),h('button',{type:'button','aria-label':'下一个动作',onClick:()=>setMode(m=>cycle.nextState(m,1))},'▶')),h('span',{role:'status'},error));
}
