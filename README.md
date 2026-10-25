![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://img.shields.io/npm/v/react-simtip.svg)](https://www.npmjs.com/package/react-simtip) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-simtip?style=flat-square)](https://bundlephobia.com/package/react-simtip@latest) [![install size](https://packagephobia.com/badge?p=react-simtip)](https://packagephobia.com/result?p=react-simtip) [![npm downloads](https://img.shields.io/npm/dt/react-simtip.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-simtip)

<p align="center">
<img src="/public/assets/img/logo.png" alt="Simtip logo" />
</p>

# react-simtip

A simple, zero-dependency tooltip component for React.

## Features

- ⚡️ **Lightweight** (~5 kB gzipped).
- 📦 **Zero dependencies**.
- 🌳 **Tree-shakeable**
- 📝 **Written in TypeScript**.
- 🎨 **Highly customizable** with props, CSS classes, and CSS variables.
- ♿ **Accessible** with `role="tooltip"`, `aria-describedby`, and keyboard support.
- 🎞️ **7 animations**: fade, scale, flip, slide, swing, bounce, flicker.
- 📚 **Storybook** documentation.

## Storybook

You can see the component in action and docs in the [Storybook](https://react-simtip.manuelmartin.dev/).

## Installation

```bash
npm install react-simtip
```

or

```bash
yarn add react-simtip
```

## Usage

```jsx
import Tooltip from "react-simtip";

const App = () => (
  <Tooltip content="Hello World!">
    <button>Hover me!</button>
  </Tooltip>
);
```

## Props

| Prop               | Type                      | Default                  | Description |
| ------------------ | ------------------------- | ------------------------ | ----------- |
| `content`          | `string \| ReactNode`     | —                        | Tooltip content. |
| `children`         | `ReactNode`               | —                        | Trigger element. |
| `placement`        | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Tooltip position relative to trigger. |
| `variant`          | `"dark" \| "light" \| "success" \| "warning" \| "error" \| "info"` | `"dark"` | Color variant. |
| `animation`        | `"fade" \| "scale" \| "flip" \| "slide" \| "swing" \| "bounce" \| "flicker"` | — | Entrance animation. |
| `animationDuration` | `number`                 | `300`                    | Animation duration in ms. |
| `offset`           | `number`                  | `8`                      | Gap between tooltip and trigger in px. |
| `hasArrow`         | `boolean`                 | `false`                  | Show arrow pointing to trigger. |
| `showDelay`        | `number`                  | `100`                    | Delay before showing in ms. |
| `disableInteractive` | `boolean`               | `false`                  | Close tooltip when pointer leaves trigger. |
| `open`             | `boolean`                 | —                        | Controlled open state. |
| `backgroundColor`  | `string`                  | `rgb(97 97 97 / 92%)`    | Background color. |
| `color`            | `string`                  | `#fff`                   | Text color. |
| `border`           | `string`                  | `none`                   | CSS border shorthand (e.g. `"1px solid red"`). |
| `shadow`           | `string`                  | `none`                   | CSS box-shadow (e.g. `"0 2px 8px rgba(0,0,0,0.3)"`). |
| `padding`          | `number`                  | `6`                      | Inner padding in px. |
| `borderRadius`     | `number`                  | `4`                      | Border radius in px. |
| `fontSize`         | `number`                  | `11`                     | Font size in px. |
| `maxWidth`         | `number`                  | `300`                    | Max width in px. |
| `className`        | `string \| (string \| null \| undefined)[]` | — | Additional CSS classes. |

## Styling

### With props

```jsx
<Tooltip
  content="Styled tooltip"
  backgroundColor="#333"
  color="#fff"
  borderRadius={8}
  padding={12}
  fontSize={14}
  border="1px solid #555"
  shadow="0 4px 12px rgba(0,0,0,0.3)"
  hasArrow
>
  <button>Hover me</button>
</Tooltip>
```

### With CSS classes

```css
.my-tooltip {
  background-color: #333;
  border-radius: 8px;
  padding: 12px;
}
```

```jsx
<Tooltip content="Styled" className="my-tooltip">
  <button>Hover me</button>
</Tooltip>
```

### With CSS variables

```css
:root {
  --simtip-background-color: #333;
  --simtip-text-color: #fff;
  --simtip-border-radius: 8px;
  --simtip-font-size: 14px;
  --simtip-padding: 12px;
  --simtip-box-shadow: 0 4px 12px rgb(0 0 0 / 30%);
  --simtip-animation-duration: 300ms;
  --simtip-max-width: 400px;
}
```

The same variables can be set on a container or an instance-specific class.
`--simtip-background-color` and `--simtip-text-color` override any variant.
For variant-specific overrides, use the corresponding token, such as
`--simtip-light-background-color` or `--simtip-light-text-color`. Component
styling props take precedence over CSS variables for that instance.

```css
.my-tooltip {
  --simtip-light-background-color: #333;
  --simtip-light-text-color: white;
}
```

```jsx
<Tooltip content="Custom theme" className="my-tooltip" variant="light">
  <button>Hover me</button>
</Tooltip>
```

Available variables are `--simtip-background-color`, `--simtip-text-color`,
`--simtip-arrow-color`, `--simtip-border`, `--simtip-border-radius`,
`--simtip-box-shadow`, `--simtip-font-size`, `--simtip-max-width`,
`--simtip-padding`, and `--simtip-animation-duration`. Background and text
tokens are also available per variant as `--simtip-{variant}-background-color`
and `--simtip-{variant}-text-color` for `dark`, `light`, `success`, `warning`,
`error`, and `info`. The arrow follows the background color unless
`--simtip-arrow-color` is set explicitly. The `--simtip-default-*` variables
define the defaults in the stylesheet.

## License

The MIT License. See [LICENSE](https://raw.githubusercontent.com/manuelmartin-developer/react-simtip/main/LICENSE) for more information.

## Author

<table>
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/u/75039957?v=4" width="64" height="64" alt="Manuel Martín" style="border-radius: 50%"/>
    </td>
    <td>
      <a href="https://github.com/manuelmartin-developer">Manuel Martín</a>
    </td>
  </tr>
</table>
