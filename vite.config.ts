/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: "./src/index.ts",
      name: "vite-library-template",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      input: {
        Tooltip: "./src/Tooltip.tsx",
        TooltipProps: "./src/Tooltip.types.ts",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
