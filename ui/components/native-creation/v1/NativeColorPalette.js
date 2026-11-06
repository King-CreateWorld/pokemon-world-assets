import React,{useState} from 'react';
const h=React.createElement;
// Mount once per edited slot. Preview never mutates committed appearance.
export function NativeColorPalette({colors,value,onPreview,onConfirm,onCancel,preview}){
 const [selected,setSelected]=useState(value);
 return h('section',{className:'native-palette',role:'dialog','aria-modal':true,'aria-label':'设定颜色'},
 h('div',{className:'native-palette__grid'},colors.map(c=>h('button',{key:c.id,type:'button','aria-label':'颜色'+c.id,'aria-pressed':selected===c.id,style:{background:`rgb(${c.tintRGB.join(',')})`},onClick:()=>{setSelected(c.id);onPreview(c.id)}}))),
 h('div',{className:'native-palette__actions'},h('button',{type:'button',onClick:()=>onConfirm(selected)},'设定颜色'),h('button',{type:'button',onClick:onCancel},'取消')),preview);
}
