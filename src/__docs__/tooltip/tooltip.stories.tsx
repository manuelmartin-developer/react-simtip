import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../../Tooltip";
import { TooltipProps } from "../../Tooltip.types";
import React from "react";
import pkg from "../../../package.json";

const meta: Meta<TooltipProps> = {
  argTypes: {
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
    borderRadius: {
      description: "The border radius of the tooltip",
      control: {
        type: "number",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    color: {
      description: "The color of the tooltip",
      control: {
        type: "color",
      },
    },
    content: {
      description: "The content of the tooltip",
      control: {
        type: "text",
      },
    },
    disableInteractive: {
      description:
        "When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
      control: {
        type: "boolean",
      },
    },
    fontSize: {
      description: "The font size of the tooltip",
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
    maxWidth: {
      description: "The max width of the tooltip in pixels",
      control: {
        type: "number",
      },
    },
    offset: {
      description: "The offset of the tooltip",
      control: {
        type: "number",
      },
    },
    open: {
      description: "The open state of the tooltip",
      control: {
        type: "boolean",
      },
    },
    padding: {
      description: "The padding of the tooltip",
      control: {
        type: "number",
      },
    },
    placement: {
      description: "The placement of the tooltip",
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    showDelay: {
      description: "Delay to show the tooltip",
      control: {
        type: "number",
      },
    },
    variant: {
      description: "The variant of the tooltip",
      control: "select",
      options: ["dark", "light", "error", "warning", "success", "info"],
    },
  },
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  title: "Documentation/Tooltip",
};

export default meta;

export const Playground: StoryObj<typeof Tooltip> = (args: TooltipProps) => {
  return (
    <Tooltip {...args}>
      <span
        style={{
          padding: "0.5rem",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: "rgb(39 125 161 / 92%)",
          color: "#fff",
        }}
      >
        Hover me
      </span>
    </Tooltip>
  );
};

Playground.argTypes = {
  ...meta.argTypes,
};

Playground.args = {
  content: "I am a tooltip",
  placement: undefined,
  disableInteractive: undefined,
  offset: undefined,
  hasArrow: undefined,
  showDelay: undefined,
  animation: undefined,
  animationDuration: undefined,
  backgroundColor: undefined,
  color: undefined,
  padding: undefined,
  borderRadius: undefined,
  fontSize: undefined,
  variant: undefined,
  maxWidth: undefined,
};

Playground.parameters = {
  cssprops: {
    "simtip-padding": {
      category: "Spacing",
      control: "text",
      description: "The padding of the tooltip",
      value: "6px",
    },
    "simtip-border-radius": {
      category: "Layout",
      control: "text",
      description: "The border radius of the tooltip",
      value: "4px",
    },
    "simtip-font-size": {
      category: "Typography",
      control: "text",
      description: "The font size of the tooltip",
      value: "11px",
    },
    "simtip-background-color": {
      category: "Color",
      control: "color",
      description: "The background color of the tooltip",
      value: "rgb(97 97 97 / 92%)",
    },
    "simtip-text-color": {
      category: "Color",
      control: "color",
      description: "The color of the tooltip",
      value: "#fff",
    },
    "simtip-animation-duration": {
      category: "Animation",
      control: "text",
      description: "The animation duration of the tooltip",
      value: "300ms",
    },
    "simtip-max-width": {
      category: "Layout",
      control: "text",
      description: "The max width of the tooltip in pixels",
      value: "300px",
    },
  },
};

export const Welcome: StoryObj<TooltipProps> = () => {
  return (
    <h1>
      <Tooltip
        content="👋 Hi there!"
        offset={10}
        fontSize={16}
        backgroundColor="rgba(39, 125, 161, 0.92)"
        color="white"
        animation="bounce"
      >
        <span
          style={{
            color: "rgb(39 125 161 / 92%)",
            textDecoration: "underline",
          }}
        >
          Welcome
        </span>
      </Tooltip>{" "}
      to React SimTip v{pkg.version}!
    </h1>
  );
};
Welcome.tags = ["auto-docs", "!dev"];
