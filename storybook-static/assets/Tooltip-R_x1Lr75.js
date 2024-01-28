import{j as n,T as s,D as r}from"./Tooltip.stories-ce3Jqh_b.js";import{M as l,C as h}from"./index-zJxmC0ZF.js";import{useMDXComponents as i}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./index-gMreU1aJ.js";import"./iframe-iRIIgyrZ.js";import"../sb-preview/runtime.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function o(e){const t=Object.assign({h1:"h1",p:"p",h4:"h4",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},i(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:s,title:"Tooltip"}),`
`,n.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,n.jsx(t.p,{children:"A tooltip component."}),`
`,n.jsx(t.h4,{id:"example",children:"Example"}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-ts",children:`import {Tooltip} from "react-simtip";

const Example = () => {
  return (
      <Tooltip
        content="Tooltip content"
      >
        <span>Hover me</span>
      </Tooltip>
  );
};

export default Example;
`})}),`
`,n.jsx(t.h4,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"children"})," - ReactNode - The content to be wrapped by the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"content"})," - string | ReactNode - The content of the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"placement"}),' - "top" | "bottom" | "left" | "right" - The placement of the tooltip.']}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"className"})," - string - The class name to be applied to the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"showDelay"})," - number - The delay in milliseconds before the tooltip is shown."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"disableInteractive"}),` - boolean - Whether the tooltip should be interactive.
offset - string - The offset of the tooltip.`]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"hasArrow"})," - boolean - Whether the tooltip should have an arrow."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"animation"}),' - "fade" | "scale" | "flip" | "slide" | "swing" | "bounce" "flicker" - The animation of the tooltip.']}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"animationDuration"})," - number - The duration of the animation in milliseconds."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"backgroundColor"})," - string - The background color of the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"color"})," - string - The text color of the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"padding"})," - string - The padding of the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"borderRadius"})," - string - The border radius of the tooltip."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"fontSize"})," - string - The font size of the tooltip."]}),`
`]})]})}function w(e={}){const{wrapper:t}=Object.assign({},i(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{w as default};
