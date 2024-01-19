import{r as A}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var E={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=A,W=Symbol.for("react.element"),U=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,J=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function O(n,o,e){var t,i={},r=null,c=null;e!==void 0&&(r=""+e),o.key!==void 0&&(r=""+o.key),o.ref!==void 0&&(c=o.ref);for(t in o)M.call(o,t)&&!Y.hasOwnProperty(t)&&(i[t]=o[t]);if(n&&n.defaultProps)for(t in o=n.defaultProps,o)i[t]===void 0&&(i[t]=o[t]);return{$$typeof:W,type:n,key:r,ref:c,props:i,_owner:J.current}}m.Fragment=U;m.jsx=O;m.jsxs=O;E.exports=m;var L=E.exports;const a=L.jsx,B=L.jsxs,G="_tooltip_wrapper_1g4uy_14",K="_tooltip_text_1g4uy_20",X="_arrow_1g4uy_34",Z="_top_1g4uy_45",oo="_bottom_1g4uy_52",to="_left_1g4uy_59",eo="_right_1g4uy_72",no="_fade_1g4uy_131",io="_scale_1g4uy_135",ao="_flip_1g4uy_139",ro="_slide_1g4uy_143",lo="_bounce_1g4uy_151",l={tooltip_wrapper:G,tooltip_text:K,arrow:X,top:Z,bottom:oo,left:to,right:eo,"top-right":"_top-right_1g4uy_83","top-left":"_top-left_1g4uy_95","bottom-right":"_bottom-right_1g4uy_107","bottom-left":"_bottom-left_1g4uy_119",fade:no,scale:io,flip:ao,slide:ro,"slide-flip":"_slide-flip_1g4uy_147",bounce:lo};function s({children:n,content:o,trigger:e,placement:t,showDelay:i,hideDelay:r,animation:c,className:h,hasArrow:I,backgroundColor:b,color:g,arrowSize:T,distanceFromTarget:y,padding:_,animationDuration:v,borderRadius:x,fontSize:w}){let q;const[P,k]=A.useState(!1),S=()=>{q=setTimeout(()=>{k(!0)},i??400)},D=()=>{clearTimeout(q),setTimeout(()=>{k(!1)},r??0)};return B("div",{"data-testid":"tooltip",className:l.tooltip_wrapper,"data-title":typeof o=="string"?o:"","data-placement":t,"aria-label":typeof o=="string"?o:"",role:"tooltip",onMouseEnter:!e||e==="hover"?S:void 0,onMouseLeave:!e||e==="hover"?D:void 0,onClick:e==="click"?S:void 0,onBlur:e==="click"?D:void 0,children:[n,P&&a("div",{"data-testid":"tooltip-content",className:`${h||""} ${l.tooltip_text} ${l[`${t??"top"}`]} ${l[`${c??""}`]} ${I?l.arrow:""}`,style:{...b&&{"--simtip-background-color":b},...g&&{"--simtip-text-color":g},...T&&{"--simtip-arrow-size":`${T}px`},...y&&{"--simtip-distance":`${y}px`},..._&&{"--simtip-padding":`${_}px`},...v&&{"--simtip-animation-duration":`${v}ms`},...x&&{"--simtip-border-radius":`${x}px`},...w&&{"--simtip-font-size":`${w}px`}},children:o})]})}try{s.displayName="Tooltip",s.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:`The children of the tooltip.
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
</Tooltip>`,name:"placement",required:!1,type:{name:'{"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"}'}},trigger:{defaultValue:{value:'"hover"'},description:`The trigger event of the tooltip.
@optional
@example <Tooltip trigger="click" content="This is a tooltip">
   <button>Hover me</button>
</Tooltip>`,name:"trigger",required:!1,type:{name:'{"hover" | "click"}'}},showDelay:{defaultValue:{value:"400"},description:`Delay to show the tooltip.
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
</Tooltip>`,name:"fontSize",required:!1,type:{name:"{number}"}}}}}catch{}const f=({primary:n=!1,size:o="medium",backgroundColor:e,label:t,...i})=>{const r=n?"storybook-button--primary":"storybook-button--secondary";return a("button",{type:"button",className:["storybook-button",`storybook-button--${o}`,r].join(" "),style:{backgroundColor:e},...i,children:t})};try{f.displayName="Button",f.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const co={component:s,tags:["autodocs"],title:"React SimTip",argTypes:{children:{description:"The children of the tooltip"},content:{description:"The content of the tooltip",control:{type:"text"}},placement:{description:"The placement of the tooltip",control:"select",options:["top","right","bottom","left","top-left","top-right","bottom-left","bottom-right"]},trigger:{description:"The trigger of the tooltip",control:"select",options:["hover","click"]},showDelay:{description:"The delay of the tooltip",control:{type:"number"}},hideDelay:{description:"The delay of the tooltip",control:{type:"number"}},animation:{description:"The animation of the tooltip",control:"select",options:[void 0,"fade","scale","flip","slide","slide-flip","bounce"]},animationDuration:{description:"The animation duration of the tooltip",control:{type:"number"}},hasArrow:{description:"The arrow of the tooltip",control:{type:"boolean"}},backgroundColor:{description:"The background color of the tooltip",control:{type:"color"}},color:{description:"The color of the tooltip",control:{type:"color"}},arrowSize:{description:"The size of the arrow",control:{type:"number"}},distanceFromTarget:{description:"The distance from the target",control:{type:"number"}},padding:{description:"The padding of the tooltip",control:{type:"number"}},borderRadius:{description:"The border radius of the tooltip",control:{type:"number"}},fontSize:{description:"The font size of the tooltip",control:{type:"number"}}},parameters:{controls:{include:["content","placement","trigger","showDelay","hideDelay","animation","animationDuration","hasArrow","backgroundColor","color","arrowSize","distanceFromTarget","padding","borderRadius","fontSize"]},layout:"centered"}},p={args:{children:a(f,{primary:!0,label:"Hover me"}),content:"Tooltip content",placement:"top",showDelay:400,hideDelay:0,animation:void 0,animationDuration:300,hasArrow:!1,backgroundColor:void 0,color:void 0,arrowSize:6,distanceFromTarget:30,padding:6,borderRadius:4,fontSize:11}},u={args:{children:B("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,"," ",a(s,{content:"Tooltip content",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"#fff",arrowSize:6,distanceFromTarget:30,padding:6,borderRadius:10,fontSize:12,animation:"flip",children:a("span",{style:{fontWeight:"bold"},children:"consequatur"})})," ","voluptate. Quisquam,"," ",a(s,{content:"Tooltip content",backgroundColor:"rgba(125, 125, 125, 0.8)",color:"#fff",arrowSize:6,distanceFromTarget:30,padding:6,borderRadius:10,fontSize:12,animation:"scale",placement:"bottom",children:a("span",{style:{fontWeight:"bold"},children:"consequatur"})})," ","voluptate."]}),backgroundColor:"rgba(0, 0, 0, 0)"}},d={args:{children:a("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequatur voluptate."}),content:"Tooltip content",placement:"top",showDelay:400,animation:"slide-flip",distanceFromTarget:20}};p.storyName="Default";var z,R,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var C,H,N;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,{" "}
                <Tooltip content="Tooltip content" backgroundColor="rgba(0, 0, 0, 0.8)" color="#fff" arrowSize={6} distanceFromTarget={30} padding={6} borderRadius={10} fontSize={12} animation="flip">
                    <span style={{
          fontWeight: "bold"
        }}>
                        consequatur
                    </span>
                </Tooltip>{" "}
                voluptate. Quisquam,{" "}
                <Tooltip content="Tooltip content" backgroundColor="rgba(125, 125, 125, 0.8)" color="#fff" arrowSize={6} distanceFromTarget={30} padding={6} borderRadius={10} fontSize={12} animation="scale" placement="bottom">
                    <span style={{
          fontWeight: "bold"
        }}>
                        consequatur
                    </span>
                </Tooltip>{" "}
                voluptate.
            </p>,
    backgroundColor: "rgba(0, 0, 0, 0)"
  }
}`,...(N=(H=u.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var $,F,j;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequatur voluptate.
            </p>,
    content: "Tooltip content",
    placement: "top",
    showDelay: 400,
    animation: "slide-flip",
    distanceFromTarget: 20
  }
}`,...(j=(F=d.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const uo=["Default","Text","Paragraph"];export{p as Default,d as Paragraph,u as Text,uo as __namedExportsOrder,co as default};
