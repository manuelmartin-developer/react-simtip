import{r as _}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var y={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=_,j=Symbol.for("react.element"),A=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,O=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function g(o,t,i){var e,n={},a=null,r=null;i!==void 0&&(a=""+i),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(e in t)E.call(t,e)&&!F.hasOwnProperty(e)&&(n[e]=t[e]);if(o&&o.defaultProps)for(e in t=o.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:j,type:o,key:a,ref:r,props:n,_owner:O.current}}s.Fragment=A;s.jsx=g;s.jsxs=g;y.exports=s;var w=y.exports;const c=w.jsx,I=w.jsxs,B="_tooltip_wrapper_1w9kz_14",P="_tooltip_text_1w9kz_19",L="_arrow_1w9kz_33",U="_top_1w9kz_44",M="_bottom_1w9kz_51",W="_left_1w9kz_58",J="_right_1w9kz_71",Y="_fade_1w9kz_130",G="_scale_1w9kz_134",K="_flip_1w9kz_138",Q="_slide_1w9kz_142",X="_bounce_1w9kz_150",l={tooltip_wrapper:B,tooltip_text:P,arrow:L,top:U,bottom:M,left:W,right:J,"top-right":"_top-right_1w9kz_82","top-left":"_top-left_1w9kz_94","bottom-right":"_bottom-right_1w9kz_106","bottom-left":"_bottom-left_1w9kz_118",fade:Y,scale:G,flip:K,slide:Q,"slide-flip":"_slide-flip_1w9kz_146",bounce:X};function u({children:o,content:t,placement:i,showDelay:e,hideDelay:n,animation:a,className:r,hasArrow:v,backgroundColor:x,color:k,arrowSize:z,distanceFromTarget:D,padding:q,animationDuration:S,borderRadius:V,fontSize:R}){let m;const[H,f]=_.useState(!1),N=()=>{m=setTimeout(()=>{f(!0)},e??400)},$=()=>{clearTimeout(m),setTimeout(()=>{f(!1)},n??0)};return I("div",{className:l.tooltip_wrapper,"data-title":typeof t=="string"?t:"","data-placement":i,"aria-label":typeof t=="string"?t:"",role:"tooltip",onMouseEnter:N,onMouseLeave:$,children:[o,H&&c("div",{className:`${r||""} ${l.tooltip_text} ${l[`${i??"top"}`]} ${l[`${a??""}`]} ${v?l.arrow:""}`,style:{"--tooltip-background-color":x??"unset","--tooltip-text-color":k??"unset","--tooltip-arrow-size":`${z}px`??"unset","--tooltip-distance":`${D}px`??"unset","--tooltip-padding":`${q}px`??"unset","--tooltip-animation-duration":`${S}ms`??"unset","--tooltip-border-radius":`${V}px`??"unset","--tooltip-font-size":`${R}px`??"unset"},children:t})]})}try{u.displayName="Tooltip",u.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:`The children of the tooltip.
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
</Tooltip>`,name:"placement",required:!1,type:{name:'{"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"}'}},showDelay:{defaultValue:{value:"400"},description:`Delay to show the tooltip.
@optional
@example <Tooltip showDelay={1000} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"showDelay",required:!1,type:{name:"{number}"}},hideDelay:{defaultValue:{value:"0"},description:`Delay to hide the tooltip.
@optional
@example <Tooltip showDelay={1000} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"hideDelay",required:!1,type:{name:"{number}"}},hasArrow:{defaultValue:{value:"false"},description:`The arrow of the tooltip.
@optional
@example <Tooltip hasArrow content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"hasArrow",required:!1,type:{name:"{boolean}"}},arrowSize:{defaultValue:{value:"6"},description:`The size of the arrow in pixels.
@optional
@example <Tooltip arrowSize={8} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"arrowSize",required:!1,type:{name:"{number}"}},animation:{defaultValue:{value:"undefined"},description:`The animation of the tooltip.
@optional
@example <Tooltip animation="fade" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"animation",required:!1,type:{name:'{"fade" | "scale" | "flip" | "slide" | "slide-flip" | "bounce"}'}},animationDuration:{defaultValue:{value:"300"},description:`Animation duration in milliseconds.
@optional
@example <Tooltip animationDuration={500} content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>`,name:"animationDuration",required:!1,type:{name:"{number}"}},className:{defaultValue:null,description:`The class name of the tooltip.
@optional
@example <Tooltip className="tooltip" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"className",required:!1,type:{name:"{ClassName}"}},backgroundColor:{defaultValue:{value:'"rgb(97 97 97 / 92%)"'},description:`The color of the tooltip.
@optional
@example <Tooltip backgroundColor="backgroundColor" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"backgroundColor",required:!1,type:{name:"{string}"}},color:{defaultValue:{value:'"#fff"'},description:`The color of the tooltip.
@optional
@example <Tooltip color="#fff" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"color",required:!1,type:{name:"{string}"}},distanceFromTarget:{defaultValue:{value:"30"},description:`The distance from the target in pixels.
@optional
@example <Tooltip distanceFromTarget={16} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"distanceFromTarget",required:!1,type:{name:"{number}"}},padding:{defaultValue:{value:"6"},description:`The padding of the tooltip in pixels.
@optional
@example <Tooltip padding={8} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"padding",required:!1,type:{name:"{number}"}},borderRadius:{defaultValue:{value:"4"},description:`The border radius of the tooltip in pixels.
@optional
@example <Tooltip borderRadius={8} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"borderRadius",required:!1,type:{name:"{number}"}},fontSize:{defaultValue:{value:"11"},description:`The font size of the tooltip in pixels.
@optional
@example <Tooltip fontSize={16} content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"fontSize",required:!1,type:{name:"{number}"}}}}}catch{}const d=({primary:o=!1,size:t="medium",backgroundColor:i,label:e,...n})=>{const a=o?"storybook-button--primary":"storybook-button--secondary";return c("button",{type:"button",className:["storybook-button",`storybook-button--${t}`,a].join(" "),style:{backgroundColor:i},...n,children:e})};try{d.displayName="Button",d.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const et={component:u,tags:["autodocs"],title:"React SimTip",argTypes:{children:{description:"The children of the tooltip"},content:{description:"The content of the tooltip",control:{type:"text"}},placement:{description:"The placement of the tooltip",control:"select",options:["top","right","bottom","left","top-left","top-right","bottom-left","bottom-right"]},showDelay:{description:"The delay of the tooltip",control:{type:"number"}},hideDelay:{description:"The delay of the tooltip",control:{type:"number"}},animation:{description:"The animation of the tooltip",control:"select",options:[void 0,"fade","scale","flip","slide","slide-flip","bounce"]},animationDuration:{description:"The animation duration of the tooltip",control:{type:"number"}},hasArrow:{description:"The arrow of the tooltip",control:{type:"boolean"}},backgroundColor:{description:"The background color of the tooltip",control:{type:"color"}},color:{description:"The color of the tooltip",control:{type:"color"}},arrowSize:{description:"The size of the arrow",control:{type:"number"}},distanceFromTarget:{description:"The distance from the target",control:{type:"number"}},padding:{description:"The padding of the tooltip",control:{type:"number"}},borderRadius:{description:"The border radius of the tooltip",control:{type:"number"}},fontSize:{description:"The font size of the tooltip",control:{type:"number"}}},parameters:{controls:{include:["content","placement","showDelay","hideDelay","animation","animationDuration","hasArrow","backgroundColor","color","arrowSize","distanceFromTarget","padding","borderRadius","fontSize"]},layout:"centered"}},p={args:{children:c(d,{primary:!0,label:"Hover me"}),content:"Tooltip content",placement:"top",showDelay:400,hideDelay:0,animation:void 0,animationDuration:300,hasArrow:!1,backgroundColor:void 0,color:void 0,arrowSize:6,distanceFromTarget:30,padding:6,borderRadius:4,fontSize:11}};p.storyName="Default";var h,b,T;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Button primary label="Hover me" />,
    content: "Tooltip content",
    placement: "top",
    showDelay: 400,
    hideDelay: 0,
    animation: undefined,
    animationDuration: 300,
    hasArrow: false,
    backgroundColor: undefined,
    color: undefined,
    arrowSize: 6,
    distanceFromTarget: 30,
    padding: 6,
    borderRadius: 4,
    fontSize: 11
  }
}`,...(T=(b=p.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const ot=["Default"];export{p as Default,ot as __namedExportsOrder,et as default};
