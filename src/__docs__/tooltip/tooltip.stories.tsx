import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from "../../Tooltip";
import { TooltipProps } from "../../Tooltip.types";
import React from "react";
import pkg from "../../../package.json" with { type: "json" };

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
    border: {
      description:
        "The border of the tooltip (CSS shorthand, e.g. '1px solid red')",
      control: {
        type: "text",
      },
    },
    shadow: {
      description:
        "The box shadow of the tooltip (e.g. '0 2px 8px rgba(0,0,0,0.3)')",
      control: {
        type: "text",
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
  border: undefined,
  shadow: undefined,
};

Playground.parameters = {
  cssprops: {
    "simtip-animation-duration": {
      category: "Wrapper",
      control: "text",
      description: "Animation duration (for example, 300ms)",
      value: "300ms",
    },
    "simtip-background-color": {
      category: "Wrapper",
      control: "color",
      description: "Background color; overrides the selected variant",
      value: "",
    },
    "simtip-arrow-color": {
      category: "Wrapper",
      control: "color",
      description: "Arrow color; defaults to the tooltip background",
      value: "",
    },
    "simtip-border-radius": {
      category: "Wrapper",
      control: "text",
      description: "The border radius of the tooltip",
      value: "4px",
    },
    "simtip-border": {
      category: "Wrapper",
      control: "text",
      description: "The border of the tooltip",
      value: "",
    },
    "simtip-box-shadow": {
      category: "Wrapper",
      control: "text",
      description: "The box shadow of the tooltip",
      value: "",
    },
    "simtip-font-size": {
      category: "Wrapper",
      control: "text",
      description: "Font size (for example, 14px)",
      value: "11px",
    },
    "simtip-max-width": {
      category: "Wrapper",
      control: "text",
      description: "The max width of the tooltip",
      value: "300px",
    },
    "simtip-padding": {
      category: "Wrapper",
      control: "text",
      description: "The padding of the tooltip",
      value: "6px",
    },
    "simtip-text-color": {
      category: "Wrapper",
      control: "color",
      description: "The text color of the tooltip",
      value: "",
    },
    "simtip-dark-background-color": {
      category: "Variants",
      control: "color",
      description: "Background override for the dark variant",
      value: "",
    },
    "simtip-dark-text-color": {
      category: "Variants",
      control: "color",
      description: "Text override for the dark variant",
      value: "",
    },
    "simtip-light-background-color": {
      category: "Variants",
      control: "color",
      description: "Background override for the light variant",
      value: "",
    },
    "simtip-light-text-color": {
      category: "Variants",
      control: "color",
      description: "Text override for the light variant",
      value: "",
    },
    "simtip-success-background-color": {
      category: "Variants",
      control: "color",
      description: "Background override for the success variant",
      value: "",
    },
    "simtip-success-text-color": {
      category: "Variants",
      control: "color",
      description: "Text override for the success variant",
      value: "",
    },
    "simtip-warning-background-color": {
      category: "Variants",
      control: "color",
      description: "Background override for the warning variant",
      value: "",
    },
    "simtip-warning-text-color": {
      category: "Variants",
      control: "color",
      description: "Text override for the warning variant",
      value: "",
    },
    "simtip-error-background-color": {
      category: "Variants",
      control: "color",
      description: "Background override for the error variant",
      value: "",
    },
    "simtip-error-text-color": {
      category: "Variants",
      control: "color",
      description: "Text override for the error variant",
      value: "",
    },
    "simtip-info-background-color": {
      category: "Variants",
      control: "color",
      description: "Background override for the info variant",
      value: "",
    },
    "simtip-info-text-color": {
      category: "Variants",
      control: "color",
      description: "Text override for the info variant",
      value: "",
    },
  },
};

export const Welcome: StoryObj<TooltipProps> = () => {
  return (
    <h1>
      <Tooltip
        content="👋 Hi there!"
        offset={8}
        fontSize={16}
        backgroundColor="rgba(39, 125, 161, 0.92)"
        color="white"
        animation="bounce"
        hasArrow
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
