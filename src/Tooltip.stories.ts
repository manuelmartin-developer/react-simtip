import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const meta = {
	title: "React Simple Tooltip",
	component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "React Simple Tooltip",
		children: "Simple tooltip",
		animation: undefined,
		hasArrow: undefined,
		placement: undefined,
		delay: undefined,
	},
};
