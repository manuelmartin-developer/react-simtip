import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-rTBBE96Z.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{a as i,c as a,o,s}from"./blocks-BJHJHjzE.js";import{a as c,i as l,n as u,r as d,t as f}from"./tooltip.stories-C6eJVZeI.js";function p(e){let n={code:`code`,div:`div`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(n.p,{children:`React SimTip is a simple tooltip component that can be used to display additional information when a user hovers over an element. The tooltip component is highly customizable and can be used to display text, images, or any other content.`}),`
`,(0,h.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,h.jsx)(n.p,{children:`To install the tooltip component, run the following command:`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-bash`,children:`npm install react-simtip
`})}),`
`,(0,h.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(n.p,{children:`To use the tooltip component, import it into your project and add it to your component. Here is an example of how to use the tooltip component:`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`import React from "react";
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
`,(0,h.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(n.p,{children:`The tooltip component accepts the following props:`}),`
`,(0,h.jsx)(i,{children:`
| Prop Name       | Type     | Default Value | Description |
| --------------- | -------- | ------------- | ----------- |
| animation       | enum     | undefined     | The animation to use when showing the tooltip. Possible values are "fade", "scale", "flip", "slide", "swing", "bounce" and "flicker". |
| animationDuration | number | 300ms           | The duration of the animation in milliseconds. |
| backgroundColor | string   | rgb(97 97 97 / 92%)       | The background color of the tooltip. |
| border          | string   | none           | The border of the tooltip (CSS shorthand, e.g. "1px solid red"). |
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
| shadow          | string   | none           | The box shadow of the tooltip (e.g. "0 2px 8px rgba(0,0,0,0.3)"). |
| showDelay      | number   | 100ms          | The delay in milliseconds before showing the tooltip. |
| variant        | enum     | dark        | The variant of the tooltip. Possible values are "light", "dark", "error", "warning", "info", and "success". |
`}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(`hr`,{}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`animation`,children:(0,h.jsx)(n.code,{children:`animation`})}),`
`,(0,h.jsx)(n.p,{children:`The animation prop is used to specify the animation that will be used when showing the tooltip. The possible values are "fade", "scale", "flip", "slide", "swing", "bounce", and "flicker".`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" animation="fade">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`fade`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Fade`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`scale`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Scale`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`flip`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Flip`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`slide`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Slide`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`swing`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Swing`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`bounce`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Bounce`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`flicker`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Flicker`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`animationduration`,children:(0,h.jsx)(n.code,{children:`animationDuration`})}),`
`,(0,h.jsx)(n.p,{children:`The animationDuration prop is used to specify the duration of the animation in milliseconds.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" animation="flicker" animationDuration={500}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`flicker`,animationDuration:500,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`500ms`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`flicker`,animationDuration:1e3,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`1000ms`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,animation:`flicker`,animationDuration:1500,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`1500ms`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`backgroundcolor`,children:(0,h.jsx)(n.code,{children:`backgroundColor`})}),`
`,(0,h.jsx)(n.p,{children:`The backgroundColor prop is used to specify the background color of the tooltip.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" backgroundColor="red">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,backgroundColor:`red`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Red`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,backgroundColor:`blue`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Blue`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,backgroundColor:`green`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Green`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`border`,children:(0,h.jsx)(n.code,{children:`border`})}),`
`,(0,h.jsx)(n.p,{children:`The border prop is used to specify the border of the tooltip using CSS shorthand. The arrow color adapts to match the border color.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" border="1px solid red">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,border:`1px solid #e74c3c`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`1px solid`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,border:`2px dashed #3498db`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`2px dashed`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,border:`2px dotted #2ecc71`,hasArrow:!0,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`2px dotted + arrow`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`borderradius`,children:(0,h.jsx)(n.code,{children:`borderRadius`})}),`
`,(0,h.jsx)(n.p,{children:`The borderRadius prop is used to specify the border radius of the tooltip in pixels.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" borderRadius={8}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,borderRadius:0,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`0px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,borderRadius:8,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`8px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,borderRadius:24,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`24px`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`classname`,children:(0,h.jsx)(n.code,{children:`className`})}),`
`,(0,h.jsx)(n.p,{children:`The className prop is used to specify the class name of the tooltip.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" className="my-tooltip">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-css`,children:`.my-tooltip {
  background-color: red;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  max-width: 200px;
  padding: 12px;
}
`})}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`color`,children:(0,h.jsx)(n.code,{children:`color`})}),`
`,(0,h.jsx)(n.p,{children:`The color prop is used to specify the text color of the tooltip.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" color="red">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,color:`red`,backgroundColor:`lightgray`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Red`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,color:`blue`,backgroundColor:`lightgray`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Blue`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,color:`green`,backgroundColor:`lightgray`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Green`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`content`,children:(0,h.jsx)(n.code,{children:`content`})}),`
`,(0,h.jsx)(n.p,{children:`The content prop is used to specify the content that will be displayed in the tooltip. The content can be a string, JSX element, or any other valid React element.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Some text`})}),(0,h.jsx)(l,{content:(0,h.jsx)(n.img,{fetchPriority:`high`,src:`/assets/img/logo.png`,alt:`placeholder`,style:{width:`150px`,height:`auto`}}),backgroundColor:`transparent`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`A image`})}),(0,h.jsx)(l,{content:(0,h.jsxs)(n.div,{children:[(0,h.jsx)(n.h1,{children:`Heading`}),(0,h.jsx)(n.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]}),padding:10,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`HTML content`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`disableinteractive`,children:(0,h.jsx)(n.code,{children:`disableInteractive`})}),`
`,(0,h.jsx)(n.p,{children:`The disableInteractive prop is used to specify whether the tooltip should be interactive. If set to true, the tooltip will not be interactive and will not be able to receive focus or be clicked.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" disableInteractive>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,disableInteractive:!0,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Disable Interactive`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Enable Interactive`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`fontsize`,children:(0,h.jsx)(n.code,{children:`fontSize`})}),`
`,(0,h.jsx)(n.p,{children:`The fontSize prop is used to specify the font size of the tooltip.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" fontSize={16}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,fontSize:12,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`12px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,fontSize:16,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`16px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,fontSize:20,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`20px`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`hasarrow`,children:(0,h.jsx)(n.code,{children:`hasArrow`})}),`
`,(0,h.jsx)(n.p,{children:`The hasArrow prop is used to specify whether the tooltip should have an arrow.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" hasArrow>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,hasArrow:!0,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Has Arrow`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`No Arrow`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`maxwidth`,children:(0,h.jsx)(n.code,{children:`maxWidth`})}),`
`,(0,h.jsx)(n.p,{children:`The maxWidth prop is used to specify the maximum width of the tooltip in pixels.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" maxWidth={200}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`,maxWidth:200,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`200px`})}),(0,h.jsx)(l,{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`,maxWidth:300,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`300px`})}),(0,h.jsx)(l,{content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`,maxWidth:400,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`400px`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`offset`,children:(0,h.jsx)(n.code,{children:`offset`})}),`
`,(0,h.jsx)(n.p,{children:`The offset prop is used to specify the offset of the tooltip from the target element in pixels.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" offset={16}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,offset:8,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`8px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,offset:16,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`16px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,offset:24,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`24px`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`open`,children:(0,h.jsx)(n.code,{children:`open`})}),`
`,(0,h.jsx)(n.p,{children:`The open prop is used to specify whether the tooltip is open.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" open>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,open:!0,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Open`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Closed`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`padding`,children:(0,h.jsx)(n.code,{children:`padding`})}),`
`,(0,h.jsx)(n.p,{children:`The padding prop is used to specify the padding of the tooltip in pixels.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" padding={12}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,padding:6,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`6px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,padding:12,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`12px`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,padding:18,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`18px`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`placement`,children:(0,h.jsx)(n.code,{children:`placement`})}),`
`,(0,h.jsx)(n.p,{children:`The placement prop is used to specify the placement of the tooltip relative to the target element. The possible values are "top", "right", "bottom", and "left".`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" placement="right">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,placement:`top`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Top`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,placement:`right`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Right`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,placement:`bottom`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Bottom`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,placement:`left`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Left`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`shadow`,children:(0,h.jsx)(n.code,{children:`shadow`})}),`
`,(0,h.jsx)(n.p,{children:`The shadow prop is used to specify the box shadow of the tooltip.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" shadow="0 2px 8px rgba(0,0,0,0.3)">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,shadow:`0 2px 4px rgba(0,0,0,0.2)`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Small`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,shadow:`0 4px 12px rgba(0,0,0,0.3)`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Medium`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,shadow:`0 8px 24px rgba(0,0,0,0.4)`,hasArrow:!0,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Large + arrow`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`showdelay`,children:(0,h.jsx)(n.code,{children:`showDelay`})}),`
`,(0,h.jsx)(n.p,{children:`The showDelay prop is used to specify the delay in milliseconds before showing the tooltip.`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" showDelay={200}>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,showDelay:100,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`100ms`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,showDelay:200,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`200ms`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,showDelay:300,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`300ms`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h3,{id:`variant`,children:(0,h.jsx)(n.code,{children:`variant`})}),`
`,(0,h.jsx)(n.p,{children:`The variant prop is used to specify the variant of the tooltip. The possible values are "light", "dark", "error", "warning", "info", and "success".`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" variant="error">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-around`,alignItems:`center`,gap:`2rem`},children:[(0,h.jsx)(l,{content:`👋 Hi there!`,variant:`light`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Light`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,variant:`dark`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Dark`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,variant:`error`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Error`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,variant:`warning`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Warning`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,variant:`info`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Info`})}),(0,h.jsx)(l,{content:`👋 Hi there!`,variant:`success`,children:(0,h.jsx)(`span`,{className:`tooltip-children`,children:`Success`})})]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(n.h2,{id:`styling`,children:`Styling`}),`
`,(0,h.jsx)(n.p,{children:`The tooltip component can be styled in several ways:`}),`
`,(0,h.jsx)(n.h3,{id:`with-provided-props`,children:`With provided props`}),`
`,(0,h.jsx)(n.p,{children:`The mentioned props can be used to style the tooltip component.`}),`
`,(0,h.jsxs)(n.p,{children:[`If you want to style a `,(0,h.jsx)(n.strong,{children:`specific`}),` tooltip, this way is the best.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip
  content="👋 Hi there!"
  backgroundColor="red"
  border="1px solid #c0392b"
  borderRadius={8}
  color="white"
  fontSize={16}
  hasArrow
  maxWidth={200}
  offset={16}
  padding={12}
  placement="right"
  shadow="0 4px 12px rgba(0,0,0,0.3)"
  variant="error"
>
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsx)(n.h3,{id:`with-css-classes`,children:`With CSS classes`}),`
`,(0,h.jsxs)(n.p,{children:[`This is the way to style `,(0,h.jsx)(n.strong,{children:`several`}),` tooltips at once.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-css`,children:`.my-tooltip {
  background-color: red;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  max-width: 200px;
  padding: 12px;
}
`})}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="👋 Hi there!" className="my-tooltip">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsx)(n.h3,{id:`with-css-variables`,children:`With CSS variables`}),`
`,(0,h.jsxs)(n.p,{children:[`CSS variables can provide theme defaults for all tooltips or style a group or
single instance. The `,(0,h.jsx)(n.code,{children:`--simtip-*`}),` variables are the customization API; they
override the selected variant's defaults. Variables passed as component props
take precedence over CSS variables for that instance.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-css`,children:`:root {
  --simtip-background-color: #252a34;
  --simtip-text-color: #fff;
  --simtip-border: 1px solid #526078;
  --simtip-border-radius: 8px;
  --simtip-box-shadow: 0 4px 12px rgb(0 0 0 / 30%);
  --simtip-font-size: 14px;
  --simtip-max-width: 320px;
  --simtip-padding: 10px 12px;
  --simtip-animation-duration: 300ms;
}
`})}),`
`,(0,h.jsx)(i,{children:"\n| CSS variable | Default | Description |\n| --- | --- | --- |\n| `--simtip-background-color` | Depends on `variant` | Tooltip background; also colors the arrow unless `--simtip-arrow-color` is set. |\n| `--simtip-text-color` | Depends on `variant` | Tooltip text color. |\n| `--simtip-arrow-color` | Tooltip background | Arrow color. |\n| `--simtip-border` | `none` | CSS border shorthand. |\n| `--simtip-border-radius` | `4px` | Corner radius. |\n| `--simtip-box-shadow` | `none` | CSS box shadow. |\n| `--simtip-font-size` | `11px` | Text size. |\n| `--simtip-max-width` | `300px` | Maximum tooltip width. |\n| `--simtip-padding` | `6px` | Inner spacing. |\n| `--simtip-animation-duration` | `300ms` | Duration used by the entrance animations. |\n"}),`
`,(0,h.jsxs)(n.p,{children:[`The variants have their own background and text color tokens. For example,
`,(0,h.jsx)(n.code,{children:`--simtip-light-background-color`}),` overrides the light variant's default
`,(0,h.jsx)(n.code,{children:`--simtip-default-light-background-color`}),`. This pattern is available for
`,(0,h.jsx)(n.code,{children:`dark`}),`, `,(0,h.jsx)(n.code,{children:`light`}),`, `,(0,h.jsx)(n.code,{children:`success`}),`, `,(0,h.jsx)(n.code,{children:`warning`}),`, `,(0,h.jsx)(n.code,{children:`error`}),`, and `,(0,h.jsx)(n.code,{children:`info`}),`:`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-css`,children:`:root {
  --simtip-light-background-color: #f0f4ff;
  --simtip-light-text-color: #172554;
  --simtip-error-background-color: #7f1d1d;
  --simtip-error-text-color: white;
}
`})}),`
`,(0,h.jsxs)(n.p,{children:[`Generic color tokens (`,(0,h.jsx)(n.code,{children:`--simtip-background-color`}),` and `,(0,h.jsx)(n.code,{children:`--simtip-text-color`}),`)
take precedence over variant-specific tokens. Component styling props take
precedence over both.`]}),`
`,(0,h.jsxs)(n.p,{children:[`To customize only selected instances, set variables in a class and pass it
through `,(0,h.jsx)(n.code,{children:`className`}),`:`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-css`,children:`.my-tooltip {
  --simtip-light-background-color: #252a34;
  --simtip-light-text-color: white;
}
`})}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-jsx`,children:`<Tooltip content="Custom theme" className="my-tooltip" variant="light">
  <button>Hover over me</button>
</Tooltip>
`})}),`
`,(0,h.jsxs)(n.p,{children:[`The theme variables are inherited, so they can also be set on any ancestor
container instead of `,(0,h.jsx)(n.code,{children:`:root`}),`. The `,(0,h.jsx)(n.code,{children:`--simtip-default-*`}),` variables define the
default values in the component stylesheet; use `,(0,h.jsx)(n.code,{children:`--simtip-*`}),` to override them.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),a(),u(),c()})))()}g();export{m as default};