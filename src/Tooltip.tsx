import {
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  Root,
} from "@radix-ui/react-tooltip";

import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./Tooltip.types";

const Tooltip = ({
  children,
  content,
  showDelay = 400,
  disableInteractive,
  className,
  placement,
  offset,
  hasArrow = false,
  animation,
  animationDuration,
  backgroundColor,
  color,
  padding,
  borderRadius,
  fontSize,
  variant = "dark",
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
            className={`${styles.tooltip_wrapper} ${className ?? className} ${
              animation ? styles[`${animation}`] : ""
            } ${styles[`${variant}`]}`}
            style={{
              ...((backgroundColor && {
                "--simtip-background-color": backgroundColor,
              }) as React.CSSProperties),
              ...((color && {
                "--simtip-text-color": color,
              }) as React.CSSProperties),
              ...((padding && {
                "--simtip-padding": `${padding}px`,
              }) as React.CSSProperties),
              ...((animationDuration && {
                "--simtip-animation-duration": `${animationDuration}ms`,
              }) as React.CSSProperties),
              ...((borderRadius && {
                "--simtip-border-radius": `${borderRadius}px`,
              }) as React.CSSProperties),
              ...((fontSize && {
                "--simtip-font-size": `${fontSize}px`,
              }) as React.CSSProperties),
              ...((maxWidth && {
                "--simtip-max-width": `${maxWidth}px`,
              }) as React.CSSProperties),
            }}
          >
            {content}
            {hasArrow && <TooltipArrow className={styles.tooltip_arrow} />}
          </TooltipContent>
        </TooltipPortal>
      </Root>
    </TooltipProvider>
  );
};

export { Tooltip };
