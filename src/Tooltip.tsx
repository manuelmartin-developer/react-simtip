import { useState, useRef, useEffect } from "react";
import "./Tooltip.css";
import { TooltipProps } from "./Tooltip.types";

const ARROW_SIZE = 8;

const extractBorderColor = (border: string): string | null => {
  if (!border || border === "none") return null;
  const parts = border.trim().split(/\s+/);
  const color = parts[parts.length - 1];
  if (/^(#|rgb|hsl|lab|oklch|color\()/i.test(color)) return color;
  return color;
};

let tooltipIdCounter = 0;

const Tooltip = ({
  children,
  content,
  showDelay = 100,
  disableInteractive = false,
  className,
  placement = "top",
  offset = 8,
  hasArrow = false,
  animation,
  animationDuration,
  backgroundColor,
  color,
  padding,
  borderRadius,
  fontSize,
  variant = "dark",
  open: controlledOpen,
  maxWidth,
  border,
  shadow,
}: TooltipProps) => {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = isControlled ? controlledOpen : internalOpen;

  const tooltipId = `simtip-${++tooltipIdCounter}`;
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const gap = hasArrow ? offset + ARROW_SIZE : offset;

  const positionStyle: React.CSSProperties = (() => {
    const g = `${gap}px`;

    switch (placement) {
      case "top":
        return {
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateY(-100%) translateX(-50%)",
          marginTop: `calc(-1 * ${g})`,
          perspective: 400,
          zIndex: 9999,
        };
      case "bottom":
        return {
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: g,
          perspective: 400,
          zIndex: 9999,
        };
      case "left":
        return {
          position: "absolute",
          top: "50%",
          right: "100%",
          transform: "translateY(-50%)",
          marginRight: g,
          perspective: 400,
          zIndex: 9999,
        };
      case "right":
        return {
          position: "absolute",
          top: "50%",
          left: "100%",
          transform: "translateY(-50%)",
          marginLeft: g,
          perspective: 400,
          zIndex: 9999,
        };
    }
  })();

  const clearTimeouts = () => {
    if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };

  const handleShow = () => {
    if (isControlled) return;
    clearTimeouts();
    showTimeoutRef.current = setTimeout(() => {
      setInternalOpen(true);
    }, showDelay);
  };

  const handleHide = () => {
    if (isControlled) return;
    clearTimeouts();
    if (disableInteractive) {
      setInternalOpen(false);
    } else {
      hideTimeoutRef.current = setTimeout(() => {
        setInternalOpen(false);
      }, 100);
    }
  };

  const handleKeepOpen = () => {
    if (isControlled || disableInteractive) return;
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isControlled) return;
        setInternalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, isControlled]);

  useEffect(() => clearTimeouts, []);

  const resolvedClassName = Array.isArray(className)
    ? className.filter(Boolean).join(" ")
    : className || "";

  const tooltipClasses = [
    "tooltip_wrapper",
    variant,
    animation,
    resolvedClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const borderColor = border ? extractBorderColor(border) : null;

  const cssVars = {
    ...(backgroundColor && { "--simtip-background-color": backgroundColor }),
    ...(color && { "--simtip-text-color": color }),
    ...(typeof padding === "number" && {
      "--simtip-padding": `${padding}px`,
    }),
    ...(animationDuration && {
      "--simtip-animation-duration": `${animationDuration}ms`,
    }),
    ...(typeof borderRadius === "number" && {
      "--simtip-border-radius": `${borderRadius}px`,
    }),
    ...(fontSize && { "--simtip-font-size": `${fontSize}px` }),
    ...(maxWidth && { "--simtip-max-width": `${maxWidth}px` }),
    ...(border !== undefined && { "--simtip-border": border }),
    ...(shadow !== undefined && { "--simtip-box-shadow": shadow }),
    ...(borderColor && { "--simtip-arrow-color": borderColor }),
  } as unknown as React.CSSProperties;

  return (
    <span
      aria-describedby={isOpen ? tooltipId : undefined}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "flex-start",
      }}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
    >
      {children}
      {isOpen && (
        <div style={positionStyle}>
          <div
            id={tooltipId}
            role="tooltip"
            data-testid="tooltip"
            className={tooltipClasses}
            style={{
              opacity: 1,
              zIndex: 9999,
              fontSize: "var(--simtip-font-size, 11px)",
              ...cssVars,
            }}
            onMouseEnter={handleKeepOpen}
            onMouseLeave={handleHide}
          >
            {content}
            {hasArrow && (
              <div className={`tooltip_arrow tooltip_arrow--${placement}`} />
            )}
          </div>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
