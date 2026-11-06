(function(){
// Retained C0848Te.m1418Qb/NZ1, AX1, AbstractC1296f0 and C3893r90.
// Resource-bank indices are not facing directions. No renderer or backend writes.
const sequences=[[0,3,0,4],[1,5,1,6],[2,7,2,8],[9,10,9,11],[12,13,12,14],[15,16,15,17],[18,21,18,22],[19,23,19,24],[20,25,20,26]];
const animated80=[0,0,0,0,0,0,0,0,0,1,2,3,4,4,4,4,4,0,0,0];
function nextState(state,step){if(!Number.isInteger(state)||state<0||state>4||![-1,1].includes(step))throw Error('Invalid cycle state/step');return (state+step+5)%5}
function describe(state,time=0,options={}){
 if(!Number.isInteger(state)||state<0||state>4||!Number.isFinite(time)||time<0)throw Error('Invalid state/time');
 const mobile=!!options.mobile;
 if(state<3){const tick=Math.floor(time/160)%4;return {state,bank:0,width:57,height:56,scale:mobile?5:4,frames:sequences.slice(state*3,state*3+3).map(s=>s[tick]),placement:mobile?'horizontal-three':'vertical-three'}}
 if(state===3){if(![0,1].includes(options.gender))throw Error('Native bank2 frame requires explicit gender index 0 or 1');return {state,bank:2,width:80,height:80,scale:mobile?4:3,frames:[options.gender],placement:'single-middle'}}
 return {state,bank:1,width:80,height:80,scale:mobile?4:3,frames:[animated80[Math.floor(time/150)%20]],placement:'single-middle'}
}
if(typeof module==='object'&&module.exports)module.exports={nextState,describe};else window.nativeCreationCycle={nextState,describe};

})();
(function(){
// Controller uses the retained native sequence contract; owns no timers after stop.
const {describe,nextState}=(typeof module==='object'&&module.exports?require('./official-comparison/native-creation-cycle.cjs'):window.nativeCreationCycle);
function createPlayer({draw,onStatus=()=>{},clock=()=>performance.now(),schedule=cb=>setTimeout(cb,30),cancel=clearTimeout,visible=()=>true,gender=0}){
 let state=0,running=false,handle=null,start=0,lastKey='';
 function sample(elapsed){const spec=describe(state,elapsed,{gender});const key=spec.bank+':'+spec.frames.join(',');if(key===lastKey)return;let result;try{result=draw(spec)}catch(error){stop();onStatus({state,status:"blocked-frame",reason:"render-error",message:String(error?.message||error)});return}if(result?.ok===false){stop();onStatus({state,status:'blocked-frame',reason:result.reason});return}lastKey=key;onStatus({state,status:'rendered',frames:spec.frames})}
 function tick(){handle=null;if(!running)return;if(visible())sample(clock()-start);if(running)handle=schedule(tick)}
 function stop(){running=false;if(handle!==null)cancel(handle);handle=null}
 function play(){if(running)return;running=true;start=clock();lastKey='';tick()}
 function step(direction){state=nextState(state,direction);lastKey='';start=clock();if(running)sample(0);return state}
 return {play,stop,step,getState:()=>({state,running})};
}
if(typeof module==='object'&&module.exports)module.exports={createPlayer};else window.creationAnimationPlayer={createPlayer};

})();
