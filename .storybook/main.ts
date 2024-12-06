import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/__docs__/**/*.docs.mdx",
    "../src/__docs__/**/*.stories.tsx",
  ],

  addons: [
    "@storybook/addon-a11y",
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-essentials",
    "@storybook/blocks",
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
