![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://img.shields.io/npm/v/react-simtip.svg)](https://www.npmjs.com/package/react-simtip) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-simtip?style=flat-square)](https://bundlephobia.com/package/react-simtip@latest) [![install size](https://packagephobia.com/badge?p=react-simtip)](https://packagephobia.com/result?p=react-simtip) [![npm downloads](https://img.shields.io/npm/dm/react-simtip.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-simtip)

# ⚠️ WARNING: This package is under development and is not ready for production use. ⚠️

# react-simtip

A simple tooltip component for React.

<!-- Add unordened list -->

## Features

- ⚡️ **Lightweight** (less than 1.6kb gzipped).
- 📦 **No dependencies**.
- 📝 **Written in TypeScript**.
<!-- Test coverage -->
- 📖 **Easy to use**.
- 🎨 **Highly customizable**.
- 📚 **Storybook**.

## Storybook

You can see the component in action in the [Storybook](https://react-simtip.manuelmartin.dev/).

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

### Required

| Name       | Type                    | Default | Description                                |
| ---------- | ----------------------- | ------- | ------------------------------------------ |
| `content`  | `string` or `ReactNode` | null    | The content of the tooltip.                |
| `children` | `ReactNode`             | null    | The element that will trigger the tooltip. |

### Optional

#### Position

| Name                 | Type      | Default | Description                                                  | Values                                                                                   |
| -------------------- | --------- | ------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `placement`          | `string`  | "top"   | The position of the tooltip.                                 | "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right" |
| `showDelay`          | `number`  | 400     | The delay before the tooltip appears (in milliseconds).      | Any number                                                                               |
| `hideDelay`          | `number`  | 0       | The delay before the tooltip disappears (in milliseconds).   | Any number                                                                               |
| `hasArrow`           | `boolean` | false   | Whether the tooltip has an arrow or not.                     | true, false                                                                              |
| `arrowSize`          | `number`  | 6       | The size of the arrow (in pixels).                           | Any number                                                                               |
| `distanceFromTarget` | `number`  | 30      | The distance between the tooltip and the anchor (in pixels). | Any number                                                                               |

#### Appearance

| Name              | Type     | Default | Description                                   | Values                  |
| ----------------- | -------- | ------- | --------------------------------------------- | ----------------------- |
| `fontSize`        | `string` | "1rem"  | The font size of the tooltip.                 | Any valid CSS font size |
| `padding`         | `number` | 6       | The padding of the tooltip (in pixels).       | Any number              |
| `borderRadius`    | `number` | 4       | The border radius of the tooltip (in pixels). | Any number              |
| `backgroundColor` | `string` | "#000"  | The background color of the tooltip.          | Any valid CSS color     |
| `color`           | `string` | "#fff"  | The text color of the tooltip.                | Any valid CSS color     |

#### Animation

| Name                | Type     | Default | Description                                      | Values                                                   |
| ------------------- | -------- | ------- | ------------------------------------------------ | -------------------------------------------------------- |
| `animation`         | `string` | "fade"  | The animation of the tooltip.                    | "fade", "scale", "flip", "slide", "slide-flip", "bounce" |
| `animationDuration` | `number` | 300     | The duration of the animation (in milliseconds). | Any number                                               |

#### Classes

| Name        | Type     | Default | Description                    | Values                   |
| ----------- | -------- | ------- | ------------------------------ | ------------------------ |
| `className` | `string` | null    | The class name of the tooltip. | Any valid CSS class name |

## Styling

There are three ways to style the tooltip:

### 1. Using the `className` prop

```jsx
import React from "react";
import { Tooltip } from "react-simtip";

const App = () => {
	return (
		<Tooltip content="Hello World!" className="my-tooltip">
			<button>Hover me!</button>
		</Tooltip>
	);
};

export default App;
```

```css
.my-tooltip {
	background-color: #000;
	color: #fff;
	font-size: 1rem;
	padding: 6px;
	border-radius: 4px;
}
```

### 2. Using the provided CSS variables

You can override the default CSS variables by adding the following code to your CSS file (**This is the easiest way to apply same styles to all the tooltips**):

```css
:root {
	--tooltip-text-color: #fff;
	--tooltip-background-color: rgb(97 97 97 / 92%);
	--tooltip-distance: 30px;
	--tooltip-arrow-size: 6px;
	--tooltip-padding: 6px;
	--tooltip-animation-duration: 0.3s;
	--tooltip-border-radius: 4px;
	--tooltip-font-size: 11px;
}
```

### 3. Using provided props

This way styles will be applied only to the tooltip that has the prop.

```jsx
import React from "react";
import { Tooltip } from "react-simtip";

const App = () => {
	return (
		<Tooltip
			content="Hello World!"
			backgroundColor="#000"
			color="#fff"
			fontSize="1rem"
			padding={6}
			borderRadius={4}
		>
			<button>Hover me!</button>
		</Tooltip>
	);
};

export default App;
```

<!-- ## TODO

- [x] Fix the position in HTML content tooltips.
- [x] Check bundle size.
- [x] Add more animations.
- [ ] Add more positions (top-left, top-right, bottom-left, bottom-right).
- [x] Add offset (distance between the tooltip and the anchor).
- [ ] Add some trigger options (click, focus, etc.).
- [ ] Add some options to control the tooltip's size (width, height, etc.).
- [x] Add more options to delay the tooltip's appearance and disappearance (enterDelay, leaveDelay, etc.)
- [ ] Add tests.
- [x] Add more customization options (colors, sizes, etc.).
- [ ] Add more examples. -->

## License

The MIT License. See [LICENSE]("https://raw.githubusercontent.com/manuelmartin-developer/react-simtip/main/LICENSE") for more information.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/75039957?v=4" width="64" height="64" alt="Manuel Martín" style="border-radius: 50%"/>
    </td>
    <td>
      <a href="https://github.com/manuelmartin-developer">Manuel Martín</a>
    </td>
  </tr>
</table>
