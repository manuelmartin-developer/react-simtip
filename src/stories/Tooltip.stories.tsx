import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../Tooltip";
import { Button } from "./Button";

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	//👇 Enables auto-generated documentation for the component story
	tags: ["autodocs"],
	title: "React SimTip",
	argTypes: {
		children: {
			description: "The children of the tooltip",
		},

		content: {
			description: "The content of the tooltip",
			control: {
				type: "text",
			},
		},
		placement: {
			description: "The placement of the tooltip",
			control: "select",
			options: ["top", "right", "bottom", "left"],
		},
		delay: {
			description: "The delay of the tooltip",
			control: {
				type: "number",
			},
		},
		animation: {
			description: "The animation of the tooltip",
			control: "select",
			options: [undefined, "fade"],
		},
		hasArrow: {
			description: "The arrow of the tooltip",
			control: {
				type: "boolean",
			},
		},
	},
	parameters: {
		controls: {
			include: ["content", "placement", "delay", "animation", "hasArrow"],
		},
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		children: <Button primary label="Hover me" />,
		content: "Tooltip content",
		placement: "top",
		delay: 400,
		animation: undefined,
		hasArrow: false,
	},
};
Default.storyName = "Default";
