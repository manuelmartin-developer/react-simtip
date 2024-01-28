import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "../Tooltip";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("Tooltip component", () => {
  window.ResizeObserver = ResizeObserver;

  it("Tooltip should not be visible by default", () => {
    render(
      <Tooltip content="Tooltip">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });

  it("Tooltip should be visible when is open", () => {
    render(
      <Tooltip content="Tooltip" open>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
});
