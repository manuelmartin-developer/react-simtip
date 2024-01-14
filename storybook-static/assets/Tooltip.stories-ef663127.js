import{r as y}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var b={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=y,k=Symbol.for("react.element"),q=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,R=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function T(o,e,r){var t,n={},a=null,i=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)N.call(e,t)&&!V.hasOwnProperty(t)&&(n[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:k,type:o,key:a,ref:i,props:n,_owner:R.current}}s.Fragment=q;s.jsx=T;s.jsxs=T;b.exports=s;var v=b.exports;const d=v.jsx,E=v.jsxs,O="_tooltip_wrapper_1irj9_11",A="_tooltip_text_1irj9_16",$="_arrow_1irj9_30",H="_top_1irj9_41",I="_bottom_1irj9_48",S="_left_1irj9_55",B="_right_1irj9_68",C="_fade_1irj9_79",l={tooltip_wrapper:O,tooltip_text:A,arrow:$,top:H,bottom:I,left:S,right:B,fade:C};function c({children:o,content:e,placement:r,delay:t,animation:n,hasArrow:a}){let i;const[x,m]=y.useState(!1),g=()=>{i=setTimeout(()=>{m(!0)},t??400)},w=()=>{clearInterval(i),m(!1)};return E("div",{className:l.tooltip_wrapper,"data-title":typeof e=="string"?e:"","data-placement":r,"aria-label":typeof e=="string"?e:"",role:"tooltip",onMouseEnter:g,onMouseLeave:w,children:[o,x&&d("div",{className:`${l.tooltip_text} ${l[`${r??"top"}`]} ${l[`${n??""}`]} ${a?l.arrow:""}`,children:e})]})}try{c.displayName="Tooltip",c.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:`The children of the tooltip.
@required
@example <Tooltip content="This is a tooltip">
    <button>Hover me</button>
</Tooltip>`,name:"children",required:!0,type:{name:"{React.ReactNode}"}},content:{defaultValue:null,description:`The content of the tooltip.
@required
@example content="This is a tooltip"
@example content={<div>This is a tooltip</div>}`,name:"content",required:!0,type:{name:"{string | React.ReactNode}"}},placement:{defaultValue:{value:'"top"'},description:`The placement of the tooltip.
@optional
@example <Tooltip placement="top" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"placement",required:!1,type:{name:'{"top" | "bottom" | "left" | "right"}'}},delay:{defaultValue:{value:"400"},description:`The delay of the tooltip.
@optional
@example <Tooltip delay={1000} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"delay",required:!1,type:{name:"{number}"}},animation:{defaultValue:{value:'"fade"'},description:`The animation of the tooltip.
@optional
@example <Tooltip animation="fade" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"animation",required:!1,type:{name:'{"fade"}'}},hasArrow:{defaultValue:{value:"false"},description:`The arrow of the tooltip.
@optional
@example <Tooltip hasArrow content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"hasArrow",required:!1,type:{name:"{boolean}"}}}}}catch{}const u=({primary:o=!1,size:e="medium",backgroundColor:r,label:t,...n})=>{const a=o?"storybook-button--primary":"storybook-button--secondary";return d("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,a].join(" "),style:{backgroundColor:r},...n,children:t})};try{u.displayName="Button",u.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const L={component:c,tags:["autodocs"],title:"React SimTip",argTypes:{children:{description:"The children of the tooltip"},content:{description:"The content of the tooltip",control:{type:"text"}},placement:{description:"The placement of the tooltip",control:"select",options:["top","right","bottom","left"]},delay:{description:"The delay of the tooltip",control:{type:"number"}},animation:{description:"The animation of the tooltip",control:"select",options:[void 0,"fade"]},hasArrow:{description:"The arrow of the tooltip",control:{type:"boolean"}}},parameters:{controls:{include:["content","placement","delay","animation","hasArrow"]},layout:"centered"}},p={args:{children:d(u,{primary:!0,label:"Hover me"}),content:"Tooltip content",placement:"top",delay:400,animation:void 0,hasArrow:!1}};p.storyName="Default";var f,_,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <Button primary label="Hover me" />,
    content: "Tooltip content",
    placement: "top",
    delay: 400,
    animation: undefined,
    hasArrow: false
  }
}`,...(h=(_=p.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const U=["Default"];export{p as Default,U as __namedExportsOrder,L as default};
