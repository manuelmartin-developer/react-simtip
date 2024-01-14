import{r as b}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var T={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q=b,C=Symbol.for("react.element"),N=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,V=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function g(e,o,r){var t,n={},a=null,p=null;r!==void 0&&(a=""+r),o.key!==void 0&&(a=""+o.key),o.ref!==void 0&&(p=o.ref);for(t in o)R.call(o,t)&&!E.hasOwnProperty(t)&&(n[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps,o)n[t]===void 0&&(n[t]=o[t]);return{$$typeof:C,type:e,key:a,ref:p,props:n,_owner:V.current}}s.Fragment=N;s.jsx=g;s.jsxs=g;T.exports=s;var v=T.exports;const d=v.jsx,H=v.jsxs,O="_tooltip_wrapper_1irj9_11",A="_tooltip_text_1irj9_16",$="_arrow_1irj9_30",I="_top_1irj9_41",S="_bottom_1irj9_48",B="_left_1irj9_55",D="_right_1irj9_68",P="_fade_1irj9_79",l={tooltip_wrapper:O,tooltip_text:A,arrow:$,top:I,bottom:S,left:B,right:D,fade:P};function c({children:e,content:o,placement:r,delay:t,animation:n,hasArrow:a,backgroundColor:p,color:x}){let m;const[k,f]=b.useState(!1),w=()=>{m=setTimeout(()=>{f(!0)},t??400)},j=()=>{clearInterval(m),f(!1)};return H("div",{className:l.tooltip_wrapper,"data-title":typeof o=="string"?o:"","data-placement":r,"aria-label":typeof o=="string"?o:"",role:"tooltip",onMouseEnter:w,onMouseLeave:j,children:[e,k&&d("div",{className:`${l.tooltip_text} ${l[`${r??"top"}`]} ${l[`${n??""}`]} ${a?l.arrow:""}`,style:{backgroundColor:p??"unset",color:x??"unset"},children:o})]})}try{c.displayName="Tooltip",c.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:`The children of the tooltip.
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
</Tooltip>`,name:"hasArrow",required:!1,type:{name:"{boolean}"}},backgroundColor:{defaultValue:{value:'"rgb(97 97 97 / 92%)"'},description:`The color of the tooltip.
@optional
@example <Tooltip backgroundColor="backgroundColor" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"backgroundColor",required:!1,type:{name:"{string}"}},color:{defaultValue:{value:'"#fff"'},description:`The color of the tooltip.
@optional
@example <Tooltip color="#fff" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"color",required:!1,type:{name:"{string}"}}}}}catch{}const u=({primary:e=!1,size:o="medium",backgroundColor:r,label:t,...n})=>{const a=e?"storybook-button--primary":"storybook-button--secondary";return d("button",{type:"button",className:["storybook-button",`storybook-button--${o}`,a].join(" "),style:{backgroundColor:r},...n,children:t})};try{u.displayName="Button",u.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const z={component:c,tags:["autodocs"],title:"React SimTip",argTypes:{children:{description:"The children of the tooltip"},content:{description:"The content of the tooltip",control:{type:"text"}},placement:{description:"The placement of the tooltip",control:"select",options:["top","right","bottom","left"]},delay:{description:"The delay of the tooltip",control:{type:"number"}},animation:{description:"The animation of the tooltip",control:"select",options:[void 0,"fade"]},hasArrow:{description:"The arrow of the tooltip",control:{type:"boolean"}},backgroundColor:{description:"The background color of the tooltip",control:{type:"color"}},color:{description:"The color of the tooltip",control:{type:"color"}}},parameters:{controls:{include:["content","placement","delay","animation","hasArrow","backgroundColor","color"]},layout:"centered"}},i={args:{children:d(u,{primary:!0,label:"Hover me"}),content:"Tooltip content",placement:"top",delay:400,animation:void 0,hasArrow:!1,backgroundColor:"rgb(97 97 97 / 92%)",color:"#fff"}};i.storyName="Default";var h,_,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Button primary label="Hover me" />,
    content: "Tooltip content",
    placement: "top",
    delay: 400,
    animation: undefined,
    hasArrow: false,
    backgroundColor: "rgb(97 97 97 / 92%)",
    color: "#fff"
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,z as default};
