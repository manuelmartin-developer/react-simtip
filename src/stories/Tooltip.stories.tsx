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
			options: [
				"top",
				"right",
				"bottom",
				"left",
				"top-left",
				"top-right",
				"bottom-left",
				"bottom-right",
			],
		},
		trigger: {
			description: "The trigger of the tooltip",
			control: "select",
			options: ["hover", "click"],
		},
		showDelay: {
			description: "The delay of the tooltip",
			control: {
				type: "number",
			},
		},
		hideDelay: {
			description: "The delay of the tooltip",
			control: {
				type: "number",
			},
		},
		animation: {
			description: "The animation of the tooltip",
			control: "select",
			options: [undefined, "fade", "scale", "flip", "slide", "slide-flip", "bounce"],
		},
		animationDuration: {
			description: "The animation duration of the tooltip",
			control: {
				type: "number",
			},
		},
		hasArrow: {
			description: "The arrow of the tooltip",
			control: {
				type: "boolean",
			},
		},
		backgroundColor: {
			description: "The background color of the tooltip",
			control: {
				type: "color",
			},
		},
		color: {
			description: "The color of the tooltip",
			control: {
				type: "color",
			},
		},
		arrowSize: {
			description: "The size of the arrow",
			control: {
				type: "number",
			},
		},
		distanceFromTarget: {
			description: "The distance from the target",
			control: {
				type: "number",
			},
		},
		padding: {
			description: "The padding of the tooltip",
			control: {
				type: "number",
			},
		},
		borderRadius: {
			description: "The border radius of the tooltip",
			control: {
				type: "number",
			},
		},
		fontSize: {
			description: "The font size of the tooltip",
			control: {
				type: "number",
			},
		},
	},
	parameters: {
		controls: {
			include: [
				"content",
				"placement",
				"trigger",
				"showDelay",
				"hideDelay",
				"animation",
				"animationDuration",
				"hasArrow",
				"backgroundColor",
				"color",
				"arrowSize",
				"distanceFromTarget",
				"padding",
				"borderRadius",
				"fontSize",
			],
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
		fontSize: 11,
	},
};

export const Text: Story = {
	args: {
		children: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,{" "}
				<Tooltip
					content="Tooltip content"
					backgroundColor="rgba(0, 0, 0, 0.8)"
					color="#fff"
					arrowSize={6}
					distanceFromTarget={30}
					padding={6}
					borderRadius={10}
					fontSize={12}
					animation="flip"
				>
					<span
						style={{
							fontWeight: "bold",
						}}
					>
						consequatur
					</span>
				</Tooltip>{" "}
				voluptate. Quisquam,{" "}
				<Tooltip
					content="Tooltip content"
					backgroundColor="rgba(125, 125, 125, 0.8)"
					color="#fff"
					arrowSize={6}
					distanceFromTarget={30}
					padding={6}
					borderRadius={10}
					fontSize={12}
					animation="scale"
					placement="bottom"
				>
					<span
						style={{
							fontWeight: "bold",
						}}
					>
						consequatur
					</span>
				</Tooltip>{" "}
				voluptate.
			</p>
		),
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
};

export const Paragraph: Story = {
	args: {
		children: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequatur voluptate.
			</p>
		),
		content: "Tooltip content",
		placement: "top",
		showDelay: 400,
		animation: "slide-flip",
		distanceFromTarget: 20,
	},
};

Default.storyName = "Default";
