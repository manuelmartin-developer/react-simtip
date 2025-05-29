import{j as e}from"./index-7uxZUkkO.js";import{useMDXComponents as s}from"./index-fMOWcjb7.js";import{M as r,S as l,a}from"./blocks-CVuPsv_n.js";import{T as c,W as d,a as t}from"./tooltip.stories-DODNveyV.js";import"./iframe-DlqPq70Q.js";import"./index-DrXLGBEd.js";function o(i){const n={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.p,{children:"React SimTip is a simple tooltip component that can be used to display additional information when a user hovers over an element. The tooltip component is highly customizable and can be used to display text, images, or any other content."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To install the tooltip component, run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install react-simtip
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"To use the tooltip component, import it into your project and add it to your component. Here is an example of how to use the tooltip component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from "react";
import Tooltip from "react-simtip";

const App = () => {
  return (
    <Tooltip content="👋 Hi there!">
      <button>Hover over me</button>
    </Tooltip>
  );
};

export default App;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:"The tooltip component accepts the following props:"}),`
`,e.jsx(a,{children:`
| Prop Name       | Type     | Default Value | Description |
| --------------- | -------- | ------------- | ----------- |
| animation       | enum     | undefined     | The animation to use when showing the tooltip. Possible values are "fade", "scale", "flip", "slide", "swing", "bounce" and "flicker". |
| animationDuration | number | 300ms           | The duration of the animation in milliseconds. |
| backgroundColor | string   | rgb(97 97 97 / 92%)       | The background color of the tooltip. |
| borderRadius    | number   | 4           | The border radius of the tooltip in pixels. |
| className       | string   | undefined   | The class name of the tooltip. |
| color          | string   | #fff        | The text color of the tooltip. |
| content        | string or JSX element | undefined | The content to display in the tooltip. |
| disableInteractive | boolean | false     | Whether the tooltip should be interactive. |
| fontSize       | string   | 11px        | The font size of the tooltip. |
| hasArrow       | boolean  | false        | Whether the tooltip should have an arrow. |
| maxWidth       | number   | 300px       | The maximum width of the tooltip in pixels. |
| offset         | number   | 8          | The offset of the tooltip from the target element in pixels. |
| open           | boolean  | false       | Whether the tooltip is open. |
| padding        | number   | 6          | The padding of the tooltip in pixels. |
| placement      | enum     | top         | The placement of the tooltip relative to the target element. Possible values are "top", "right", "bottom", and "left". |
| showDelay      | number   | 100ms          | The delay in milliseconds before showing the tooltip. |
| variant        | enum     | dark        | The variant of the tooltip. Possible values are "light", "dark", "error", "warning", "info", and "success". |
`}),`
`,e.jsx("br",{}),`
`,e.jsx("hr",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"animation",children:e.jsx(n.code,{children:"animation"})}),`
`,e.jsx(n.p,{children:'The animation prop is used to specify the animation that will be used when showing the tooltip. The possible values are "fade", "scale", "flip", "slide", "swing", "bounce", and "flicker".'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" animation="fade">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",animation:"fade",children:e.jsx("span",{className:"tooltip-children",children:"Fade"})}),e.jsx(t,{content:"👋 Hi there!",animation:"scale",children:e.jsx("span",{className:"tooltip-children",children:"Scale"})}),e.jsx(t,{content:"👋 Hi there!",animation:"flip",children:e.jsx("span",{className:"tooltip-children",children:"Flip"})}),e.jsx(t,{content:"👋 Hi there!",animation:"slide",children:e.jsx("span",{className:"tooltip-children",children:"Slide"})}),e.jsx(t,{content:"👋 Hi there!",animation:"swing",children:e.jsx("span",{className:"tooltip-children",children:"Swing"})}),e.jsx(t,{content:"👋 Hi there!",animation:"bounce",children:e.jsx("span",{className:"tooltip-children",children:"Bounce"})}),e.jsx(t,{content:"👋 Hi there!",animation:"flicker",children:e.jsx("span",{className:"tooltip-children",children:"Flicker"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"animationduration",children:e.jsx(n.code,{children:"animationDuration"})}),`
`,e.jsx(n.p,{children:"The animationDuration prop is used to specify the duration of the animation in milliseconds."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" animation="flicker" animationDuration={500}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",animation:"flicker",animationDuration:500,children:e.jsx("span",{className:"tooltip-children",children:"500ms"})}),e.jsx(t,{content:"👋 Hi there!",animation:"flicker",animationDuration:1e3,children:e.jsx("span",{className:"tooltip-children",children:"1000ms"})}),e.jsx(t,{content:"👋 Hi there!",animation:"flicker",animationDuration:1500,children:e.jsx("span",{className:"tooltip-children",children:"1500ms"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"backgroundcolor",children:e.jsx(n.code,{children:"backgroundColor"})}),`
`,e.jsx(n.p,{children:"The backgroundColor prop is used to specify the background color of the tooltip."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" backgroundColor="red">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",backgroundColor:"red",children:e.jsx("span",{className:"tooltip-children",children:"Red"})}),e.jsx(t,{content:"👋 Hi there!",backgroundColor:"blue",children:e.jsx("span",{className:"tooltip-children",children:"Blue"})}),e.jsx(t,{content:"👋 Hi there!",backgroundColor:"green",children:e.jsx("span",{className:"tooltip-children",children:"Green"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"borderradius",children:e.jsx(n.code,{children:"borderRadius"})}),`
`,e.jsx(n.p,{children:"The borderRadius prop is used to specify the border radius of the tooltip in pixels."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" borderRadius={8}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",borderRadius:0,children:e.jsx("span",{className:"tooltip-children",children:"0px"})}),e.jsx(t,{content:"👋 Hi there!",borderRadius:8,children:e.jsx("span",{className:"tooltip-children",children:"8px"})}),e.jsx(t,{content:"👋 Hi there!",borderRadius:24,children:e.jsx("span",{className:"tooltip-children",children:"24px"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"classname",children:e.jsx(n.code,{children:"className"})}),`
`,e.jsx(n.p,{children:"The className prop is used to specify the class name of the tooltip."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" className="my-tooltip">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-tooltip {
  background-color: red;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  max-width: 200px;
  padding: 12px;
}
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"color",children:e.jsx(n.code,{children:"color"})}),`
`,e.jsx(n.p,{children:"The color prop is used to specify the text color of the tooltip."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" color="red">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",color:"red",backgroundColor:"lightgray",children:e.jsx("span",{className:"tooltip-children",children:"Red"})}),e.jsx(t,{content:"👋 Hi there!",color:"blue",backgroundColor:"lightgray",children:e.jsx("span",{className:"tooltip-children",children:"Blue"})}),e.jsx(t,{content:"👋 Hi there!",color:"green",backgroundColor:"lightgray",children:e.jsx("span",{className:"tooltip-children",children:"Green"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"content",children:e.jsx(n.code,{children:"content"})}),`
`,e.jsx(n.p,{children:"The content prop is used to specify the content that will be displayed in the tooltip. The content can be a string, JSX element, or any other valid React element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",children:e.jsx("span",{className:"tooltip-children",children:"Some text"})}),e.jsx(t,{content:e.jsx(n.img,{fetchpriority:"high",src:"/assets/img/logo.png",alt:"placeholder",style:{width:"150px",height:"auto"}}),backgroundColor:"transparent",children:e.jsx("span",{className:"tooltip-children",children:"A image"})}),e.jsx(t,{content:e.jsxs(n.div,{children:[e.jsx(n.h1,{children:"Heading"}),e.jsx(n.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),padding:10,children:e.jsx("span",{className:"tooltip-children",children:"HTML content"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"disableinteractive",children:e.jsx(n.code,{children:"disableInteractive"})}),`
`,e.jsx(n.p,{children:"The disableInteractive prop is used to specify whether the tooltip should be interactive. If set to true, the tooltip will not be interactive and will not be able to receive focus or be clicked."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" disableInteractive>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",disableInteractive:!0,children:e.jsx("span",{className:"tooltip-children",children:"Disable Interactive"})}),e.jsx(t,{content:"👋 Hi there!",children:e.jsx("span",{className:"tooltip-children",children:"Enable Interactive"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"fontsize",children:e.jsx(n.code,{children:"fontSize"})}),`
`,e.jsx(n.p,{children:"The fontSize prop is used to specify the font size of the tooltip."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" fontSize={16}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",fontSize:12,children:e.jsx("span",{className:"tooltip-children",children:"12px"})}),e.jsx(t,{content:"👋 Hi there!",fontSize:16,children:e.jsx("span",{className:"tooltip-children",children:"16px"})}),e.jsx(t,{content:"👋 Hi there!",fontSize:20,children:e.jsx("span",{className:"tooltip-children",children:"20px"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"hasarrow",children:e.jsx(n.code,{children:"hasArrow"})}),`
`,e.jsx(n.p,{children:"The hasArrow prop is used to specify whether the tooltip should have an arrow."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" hasArrow>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",hasArrow:!0,children:e.jsx("span",{className:"tooltip-children",children:"Has Arrow"})}),e.jsx(t,{content:"👋 Hi there!",children:e.jsx("span",{className:"tooltip-children",children:"No Arrow"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"maxwidth",children:e.jsx(n.code,{children:"maxWidth"})}),`
`,e.jsx(n.p,{children:"The maxWidth prop is used to specify the maximum width of the tooltip in pixels."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" maxWidth={200}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`,maxWidth:200,children:e.jsx("span",{className:"tooltip-children",children:"200px"})}),e.jsx(t,{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`,maxWidth:300,children:e.jsx("span",{className:"tooltip-children",children:"300px"})}),e.jsx(t,{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`,maxWidth:400,children:e.jsx("span",{className:"tooltip-children",children:"400px"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"offset",children:e.jsx(n.code,{children:"offset"})}),`
`,e.jsx(n.p,{children:"The offset prop is used to specify the offset of the tooltip from the target element in pixels."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" offset={16}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",offset:8,children:e.jsx("span",{className:"tooltip-children",children:"8px"})}),e.jsx(t,{content:"👋 Hi there!",offset:16,children:e.jsx("span",{className:"tooltip-children",children:"16px"})}),e.jsx(t,{content:"👋 Hi there!",offset:24,children:e.jsx("span",{className:"tooltip-children",children:"24px"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"open",children:e.jsx(n.code,{children:"open"})}),`
`,e.jsx(n.p,{children:"The open prop is used to specify whether the tooltip is open."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" open>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",open:!0,children:e.jsx("span",{className:"tooltip-children",children:"Open"})}),e.jsx(t,{content:"👋 Hi there!",children:e.jsx("span",{className:"tooltip-children",children:"Closed"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"padding",children:e.jsx(n.code,{children:"padding"})}),`
`,e.jsx(n.p,{children:"The padding prop is used to specify the padding of the tooltip in pixels."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" padding={12}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",padding:6,children:e.jsx("span",{className:"tooltip-children",children:"6px"})}),e.jsx(t,{content:"👋 Hi there!",padding:12,children:e.jsx("span",{className:"tooltip-children",children:"12px"})}),e.jsx(t,{content:"👋 Hi there!",padding:18,children:e.jsx("span",{className:"tooltip-children",children:"18px"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"placement",children:e.jsx(n.code,{children:"placement"})}),`
`,e.jsx(n.p,{children:'The placement prop is used to specify the placement of the tooltip relative to the target element. The possible values are "top", "right", "bottom", and "left".'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" placement="right">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",placement:"top",children:e.jsx("span",{className:"tooltip-children",children:"Top"})}),e.jsx(t,{content:"👋 Hi there!",placement:"right",children:e.jsx("span",{className:"tooltip-children",children:"Right"})}),e.jsx(t,{content:"👋 Hi there!",placement:"bottom",children:e.jsx("span",{className:"tooltip-children",children:"Bottom"})}),e.jsx(t,{content:"👋 Hi there!",placement:"left",children:e.jsx("span",{className:"tooltip-children",children:"Left"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"showdelay",children:e.jsx(n.code,{children:"showDelay"})}),`
`,e.jsx(n.p,{children:"The showDelay prop is used to specify the delay in milliseconds before showing the tooltip."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" showDelay={200}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",showDelay:100,children:e.jsx("span",{className:"tooltip-children",children:"100ms"})}),e.jsx(t,{content:"👋 Hi there!",showDelay:200,children:e.jsx("span",{className:"tooltip-children",children:"200ms"})}),e.jsx(t,{content:"👋 Hi there!",showDelay:300,children:e.jsx("span",{className:"tooltip-children",children:"300ms"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variant",children:e.jsx(n.code,{children:"variant"})}),`
`,e.jsx(n.p,{children:'The variant prop is used to specify the variant of the tooltip. The possible values are "light", "dark", "error", "warning", "info", and "success".'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" variant="error">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsxs("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"2rem"},children:[e.jsx(t,{content:"👋 Hi there!",variant:"light",children:e.jsx("span",{className:"tooltip-children",children:"Light"})}),e.jsx(t,{content:"👋 Hi there!",variant:"dark",children:e.jsx("span",{className:"tooltip-children",children:"Dark"})}),e.jsx(t,{content:"👋 Hi there!",variant:"error",children:e.jsx("span",{className:"tooltip-children",children:"Error"})}),e.jsx(t,{content:"👋 Hi there!",variant:"warning",children:e.jsx("span",{className:"tooltip-children",children:"Warning"})}),e.jsx(t,{content:"👋 Hi there!",variant:"info",children:e.jsx("span",{className:"tooltip-children",children:"Info"})}),e.jsx(t,{content:"👋 Hi there!",variant:"success",children:e.jsx("span",{className:"tooltip-children",children:"Success"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:"The tooltip component can be styled in several ways:"}),`
`,e.jsx(n.h3,{id:"with-provided-props",children:"With provided props"}),`
`,e.jsx(n.p,{children:"The mentioned props can be used to style the tooltip component."}),`
`,e.jsxs(n.p,{children:["If you want to style a ",e.jsx(n.strong,{children:"specific"})," tooltip, this way is the best."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip
  content="👋 Hi there!"
  backgroundColor="red"
  borderRadius={8}
  color="white"
  fontSize={16}
  hasArrow
  maxWidth={200}
  offset={16}
  padding={12}
  placement="right"
  variant="error"
>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsx(n.h3,{id:"with-css-classes",children:"With CSS classes"}),`
`,e.jsxs(n.p,{children:["This is the way to style ",e.jsx(n.strong,{children:"several"})," tooltips at once."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-tooltip {
  background-color: red;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  max-width: 200px;
  padding: 12px;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Tooltip content="👋 Hi there!" className="my-tooltip">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,e.jsx(n.h3,{id:"with-css-variables",children:"With CSS variables"}),`
`,e.jsxs(n.p,{children:["This is the way to style ",e.jsx(n.strong,{children:"all"})," tooltips at once."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --simtip-animation-duration: 300ms;
  --simtip-background-color: red;
  --simtip-border-radius: 8px;
  --simtip-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  --simtip-color: white;
  --simtip-font-size: 16px;
  --simtip-max-width: 200px;
  --simtip-padding: 12px;
  --simtip-text-color: white;
}
`})})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{g as default};
