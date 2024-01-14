![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://img.shields.io/npm/v/react-simtip.svg)](https://www.npmjs.com/package/react-simtip) [![npm downloads](https://img.shields.io/npm/dm/react-simtip.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-simtip)

# ⚠️ WARNING: This package is under development and is not ready for production use. ⚠️

# react-simtip

A simple tooltip component for React.

- No dependencies.
- Written in TypeScript.
  <!-- - Test coverage with Jest and React Testing Library. -->
  <!-- - Lightweight (less than 1kb gzipped). -->
- Easy to use.
- Customizable.

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

| Name        | Type                    | Default | Description                                                                |
| ----------- | ----------------------- | ------- | -------------------------------------------------------------------------- |
| `content`   | `string` or `ReactNode` | null    | The content of the tooltip.                                                |
| `position`  | `string`                | `top`   | The position of the tooltip. Can be `top`, `bottom`, `left` or `right`.    |
| `delay`     | `number`                | `400`   | The delay in milliseconds before the tooltip appears.                      |
| `animation` | `fade`                  | null    | The animation of the tooltip. Can be `fade` (more animations coming soon). |
| `hasArrow`  | `boolean`               | null    | Whether the tooltip has an arrow or not.                                   |

## License

The MIT License.

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
