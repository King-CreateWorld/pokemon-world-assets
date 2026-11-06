import React from 'react';
import './native-creation-layout.css';
const h = React.createElement;
// Controlled presentation: no auth, persistence, fixture accounts or map navigation.
export function NativeCreationLayout({ fields, name, onNameChange, onCompositionStart, onCompositionEnd, regions, region, onRegionChange, preview, palette, onClose, onCreate, submitting=false, canCreate=false, status='' }) {
  return h('section', {className:'native-create',role:'dialog','aria-modal':true,'aria-label':'新角色'},
    h('header',null,h('h1',null,'新角色'),h('button',{type:'button',onClick:onClose,'aria-label':'关闭'},'×')),
    palette || h('div',{className:'native-create__body'},
      h('div',{className:'native-create__fields'},fields.map(field => h('div',{className:'native-create__row',key:field.id},
        h('label',{htmlFor:'native-'+field.id},field.label),
        h('select',{id:'native-'+field.id,value:field.value,disabled:field.disabled,onChange:e=>field.onChange(e.target.value)},field.options.map(option=>h('option',{key:option.value,value:option.value,disabled:option.disabled},option.label))),
        field.onColor ? h('button',{type:'button',className:'native-create__color',onClick:field.onColor,'aria-label':field.label+'颜色'}) : h('span',{'aria-hidden':true})
      ))),
      h('div',{className:'native-create__right'},
        h('label',{className:'native-create__identity'},h('span',null,'角色名称:'),h('input',{value:name,onChange:e=>onNameChange(e.target.value),onCompositionStart,onCompositionEnd,autoComplete:'off','aria-label':'角色名称'})),
        h('label',{className:'native-create__identity'},h('span',null,'起始地区:'),h('select',{value:region,onChange:e=>onRegionChange(e.target.value)},regions.map(r=>h('option',{key:r.id,value:r.id,disabled:!r.enabled},r.label+(r.enabled?'':' · 未开放'))))),
        h('div',{className:'native-create__preview'},preview),
        h('div',{className:'native-create__status',role:'status'},status),
        h('button',{type:'button',className:'native-create__submit',disabled:submitting||!canCreate,onClick:onCreate},submitting?'提交中…':'创建新角色')
      )));
}
