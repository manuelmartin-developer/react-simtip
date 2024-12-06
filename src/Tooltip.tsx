import {
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  Root,
} from "@radix-ui/react-tooltip";
import "./Tooltip.css";
import { TooltipProps } from "./Tooltip.types";

const Tooltip = ({
  children,
  content,
  showDelay = 100,
  disableInteractive,
  className,
  placement,
  offset = 8,
  hasArrow = false,
  animation,
  animationDuration,
  backgroundColor,
  color,
  padding,
  borderRadius,
  fontSize,
  variant,
  open,
  maxWidth,
}: TooltipProps) => {
  return (
    <TooltipProvider
      delayDuration={showDelay}
      disableHoverableContent={disableInteractive}
    >
      <Root open={open}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            side={placement}
            data-testid="tooltip"
            sideOffset={offset}
            className={`tooltip_wrapper ${className ?? className} ${
              animation ? `${animation}` : ""
            } ${`${variant}`}`}
            style={{
              ...((backgroundColor && {
                "--simtip-background-color": backgroundColor,
              }) as React.CSSProperties),
              ...((color && {
                "--simtip-text-color": color,
              }) as React.CSSProperties),
              ...((typeof padding === "number" &&
                padding !== undefined && {
                  "--simtip-padding": `${padding}px`,
                }) as unknown as React.CSSProperties),
              ...((animationDuration && {
                "--simtip-animation-duration": `${animationDuration}ms`,
              }) as React.CSSProperties),
              ...((typeof borderRadius === "number" &&
                borderRadius !== undefined && {
                  "--simtip-border-radius": `${borderRadius}px`,
                }) as unknown as React.CSSProperties),
              ...((fontSize && {
                "--simtip-font-size": `${fontSize}px`,
              }) as React.CSSProperties),
              ...((maxWidth && {
                "--simtip-max-width": `${maxWidth}px`,
              }) as React.CSSProperties),
              zIndex: 9999,
            }}
          >
            {content}
            {hasArrow && <TooltipArrow className="tooltip_arrow" />}
          </TooltipContent>
        </TooltipPortal>
      </Root>
    </TooltipProvider>
  );
};

export default Tooltip;
