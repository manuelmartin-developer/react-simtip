import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "../Tooltip";

describe("Tooltip component", () => {
  it("should not be visible by default", () => {
    render(
      <Tooltip content="Tooltip">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });

  it("should be visible when controlled open", () => {
    render(
      <Tooltip content="Tooltip" open>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });

  it("should render content text", () => {
    render(
      <Tooltip content="Hello world" open>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toHaveTextContent("Hello world");
  });

  it("should render ReactNode content", () => {
    render(
      <Tooltip content={<strong>Bold</strong>} open>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toContainHTML("<strong>Bold</strong>");
  });

  it("should set role='tooltip'", () => {
    render(
      <Tooltip content="Tooltip" open>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("should set aria-describedby on wrapper when open", () => {
    render(
      <Tooltip content="Tooltip" open>
        <span>Hover me</span>
      </Tooltip>,
    );

    const wrapper = screen.getByText("Hover me").parentElement;
    const tooltip = screen.getByTestId("tooltip");
    expect(wrapper).toHaveAttribute("aria-describedby", tooltip.id);
  });

  it("should apply variant class", () => {
    render(
      <Tooltip content="Tooltip" open variant="error">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toHaveClass("error");
  });

  it("should apply animation class", () => {
    render(
      <Tooltip content="Tooltip" open animation="fade">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toHaveClass("fade");
  });

  it("should apply className from string", () => {
    render(
      <Tooltip content="Tooltip" open className="my-tip">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId("tooltip")).toHaveClass("my-tip");
  });

  it("should apply className from array", () => {
    render(
      <Tooltip content="Tooltip" open className={["a", "b"]}>
        <span>Hover me</span>
      </Tooltip>,
    );

    const el = screen.getByTestId("tooltip");
    expect(el).toHaveClass("a");
    expect(el).toHaveClass("b");
  });

  it("should filter falsy values from className array", () => {
    render(
      <Tooltip content="Tooltip" open className={["a", null, undefined, "b"]}>
        <span>Hover me</span>
      </Tooltip>,
    );

    const el = screen.getByTestId("tooltip");
    expect(el).toHaveClass("a");
    expect(el).toHaveClass("b");
  });

  describe("placement", () => {
    const placements = ["top", "bottom", "left", "right"] as const;

    placements.forEach((p) => {
      it(`should render arrow with placement class for ${p}`, () => {
        render(
          <Tooltip content="Tooltip" open placement={p} hasArrow>
            <span>Hover me</span>
          </Tooltip>,
        );

        expect(
          document.querySelector(`.tooltip_arrow--${p}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("should not render arrow when hasArrow is false", () => {
    render(
      <Tooltip content="Tooltip" open hasArrow={false}>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(document.querySelector(".tooltip_arrow")).not.toBeInTheDocument();
  });

  it("should render arrow when hasArrow is true", () => {
    render(
      <Tooltip content="Tooltip" open hasArrow>
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(document.querySelector(".tooltip_arrow")).toBeInTheDocument();
  });

  it("should set CSS vars from props", () => {
    render(
      <Tooltip
        content="Tooltip"
        open
        backgroundColor="red"
        color="blue"
        padding={10}
        borderRadius={8}
        fontSize={14}
        maxWidth={200}
        animationDuration={500}
      >
        <span>Hover me</span>
      </Tooltip>,
    );

    const el = screen.getByTestId("tooltip");
    expect(el).toHaveStyle("--simtip-background-color: red");
    expect(el).toHaveStyle("--simtip-text-color: blue");
    expect(el).toHaveStyle("--simtip-padding: 10px");
    expect(el).toHaveStyle("--simtip-border-radius: 8px");
    expect(el).toHaveStyle("--simtip-font-size: 14px");
    expect(el).toHaveStyle("--simtip-max-width: 200px");
    expect(el).toHaveStyle("--simtip-animation-duration: 500ms");
  });

  it("should set border and shadow CSS vars", () => {
    render(
      <Tooltip
        content="Tooltip"
        open
        border="2px solid red"
        shadow="0 2px 4px rgba(0,0,0,0.2)"
      >
        <span>Hover me</span>
      </Tooltip>,
    );

    const el = screen.getByTestId("tooltip");
    expect(el).toHaveStyle("--simtip-border: 2px solid red");
    expect(el).toHaveStyle("--simtip-box-shadow: 0 2px 4px rgba(0,0,0,0.2)");
  });

  it("should set arrow color CSS var from border", () => {
    render(
      <Tooltip content="Tooltip" open border="1px solid #e74c3c" hasArrow>
        <span>Hover me</span>
      </Tooltip>,
    );

    const el = screen.getByTestId("tooltip");
    expect(el).toHaveStyle("--simtip-arrow-color: #e74c3c");
  });

  it("should show on hover and hide on leave", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Tooltip" showDelay={0} disableInteractive>
        <span>Hover me</span>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();

    await user.hover(trigger);
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();

    await user.unhover(trigger);
    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });

  it("should show on focus and hide on blur", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Tooltip" showDelay={0} disableInteractive>
        <span>Hover me</span>
      </Tooltip>,
    );

    const trigger = screen.getByText("Hover me");
    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();

    await user.click(trigger);
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();

    await user.click(document.body);
    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });

  it("should have unique tooltip ids across instances", () => {
    render(
      <div>
        <Tooltip content="First" open>
          <span>One</span>
        </Tooltip>
        <Tooltip content="Second" open>
          <span>Two</span>
        </Tooltip>
      </div>,
    );

    const tips = screen.getAllByTestId("tooltip");
    expect(tips[0].id).not.toBe(tips[1].id);
  });
});
