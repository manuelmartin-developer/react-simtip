![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://img.shields.io/npm/v/react-simtip.svg)](https://www.npmjs.com/package/react-simtip) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-simtip?style=flat-square)](https://bundlephobia.com/package/react-simtip@latest) [![install size](https://packagephobia.com/badge?p=react-simtip)](https://packagephobia.com/result?p=react-simtip) [![npm downloads](https://img.shields.io/npm/dm/react-simtip.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-simtip)

# ⚠️ WARNING: This package is under development and is not ready for production use. ⚠️

# react-simtip

A simple tooltip component for React.

- No dependencies.
- Written in TypeScript.
  <!-- - Test coverage with Jest and React Testing Library. -->
  <!-- - Lightweight (less than 1kb gzipped). -->
- Easy to use.
- Customizable.

## Storybook

[https://react-simtip.manuelmartin.dev/](https://react-simtip.manuelmartin.dev/)

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
import React from "react";
import { Tooltip } from "react-simtip";

const App = () => {
	return (
		<Tooltip content="Hello World!">
			<button>Hover me!</button>
		</Tooltip>
	);
};

export default App;
```

## Props

| Name              | Type                    | Default | Description                                                                |
| ----------------- | ----------------------- | ------- | -------------------------------------------------------------------------- |
| `content`         | `string` or `ReactNode` | null    | The content of the tooltip.                                                |
| `position`        | `string`                | `top`   | The position of the tooltip. Can be `top`, `bottom`, `left` or `right`.    |
| `delay`           | `number`                | `400`   | The delay in milliseconds before the tooltip appears.                      |
| `animation`       | `fade`                  | null    | The animation of the tooltip. Can be `fade` (more animations coming soon). |
| `hasArrow`        | `boolean`               | null    | Whether the tooltip has an arrow or not.                                   |
| `backgroundColor` | `string`                | null    | The background color of the tooltip.                                       |
| `color`           | `string`                | null    | The color of the tooltip.                                                  |

<!-- ## TODO

- [ ] Fix the position in HTML content tooltips.
- [ ] Check bundle size.
- [ ] Add more animations.
- [ ] Add more positions (top-left, top-right, bottom-left, bottom-right).
- [ ] Add offset (distance between the tooltip and the anchor).
- [ ] Add some trigger options (click, focus, etc.).
- [ ] Add some options to control the tooltip's size (width, height, etc.).
- [ ] Add more options to delay the tooltip's appearance and disappearance (enterDelay, leaveDelay, etc.)
- [ ] Add tests.
- [ ] Add more customization options (colors, sizes, etc.).
- [ ] Add more examples. -->

## License

The MIT License. See [LICENSE]("https://raw.githubusercontent.com/manuelmartin-developer/react-simtip/main/LICENSE") for more information.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/75039957?v=4" width="64" height="64" alt="Manuel Martín">
    </td>
    <td>
      <a href="https://github.com/manuelmartin-developer">Manuel Martín</a>
    </td>
  </tr>
</table>
