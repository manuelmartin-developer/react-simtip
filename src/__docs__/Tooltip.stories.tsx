import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
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
      options: ["top", "bottom", "left", "right"],
    },
    disableInteractive: {
      description:
        "When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
      control: {
        type: "boolean",
      },
    },
    offset: {
      description: "The offset of the tooltip",
      control: {
        type: "number",
      },
    },
    hasArrow: {
      description: "When true, the tooltip will have an arrow",
      control: {
        type: "boolean",
      },
    },
    showDelay: {
      description: "Delay to show the tooltip",
      control: {
        type: "number",
      },
    },
    animation: {
      description: "The animation of the tooltip",
      control: "select",
      options: [
        undefined,
        "fade",
        "scale",
        "flip",
        "slide",
        "swing",
        "bounce",
        "flicker",
      ],
    },
    animationDuration: {
      description: "The animation duration of the tooltip",
      control: {
        type: "number",
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
    variant: {
      description: "The variant of the tooltip",
      control: "select",
      options: ["dark", "light", "error", "warning", "success", "info"],
    },
    maxWidth: {
      description: "The max width of the tooltip in pixels",
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
        "disableInteractive",
        "offset",
        "hasArrow",
        "showDelay",
        "animation",
        "animationDuration",
        "backgroundColor",
        "color",
        "padding",
        "borderRadius",
        "fontSize",
        "variant",
        "maxWidth",
      ],
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: (
      <span
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        Hover me
      </span>
    ),
    content: "This is a tooltip",
  },
};
