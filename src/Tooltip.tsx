import { useState } from "react";

import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./Tooltip.types";

export function Tooltip({
	children,
	content,
	trigger,
	placement,
	showDelay,
	hideDelay,
	animation,
	className,
	hasArrow,
	backgroundColor,
	color,
	arrowSize,
	distanceFromTarget,
	padding,
	animationDuration,
	borderRadius,
	fontSize,
}: TooltipProps) {
	// Component variables
	let timeout: NodeJS.Timeout;

	// Component states
	const [active, setActive] = useState<boolean>(false);

	// Methods
	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, showDelay ?? 400);
	};

	const hideTip = () => {
		clearTimeout(timeout);
		setTimeout(() => {
			setActive(false);
		}, hideDelay ?? 0);
	};

	return (
		<div
			data-testid="tooltip"
			className={styles.tooltip_wrapper}
			data-title={typeof content === "string" ? content : ""}
			data-placement={placement}
			aria-label={typeof content === "string" ? content : ""}
			role="tooltip"
			onMouseEnter={!trigger || trigger === "hover" ? showTip : undefined}
			onMouseLeave={!trigger || trigger === "hover" ? hideTip : undefined}
			onClick={trigger === "click" ? showTip : undefined}
			onBlur={trigger === "click" ? hideTip : undefined}
		>
			{children}
			{active && (
				<div
					data-testid="tooltip-content"
					className={`${className ? className : ""} ${styles.tooltip_text} ${
						styles[`${placement ?? "top"}`]
					} ${styles[`${animation ?? ""}`]} ${hasArrow ? styles.arrow : ""}`}
					style={{
						...((backgroundColor && {
							"--simtip-background-color": backgroundColor,
						}) as React.CSSProperties),
						...((color && { "--simtip-text-color": color }) as React.CSSProperties),
						...((arrowSize && { "--simtip-arrow-size": `${arrowSize}px` }) as React.CSSProperties),
						...((distanceFromTarget && {
							"--simtip-distance": `${distanceFromTarget}px`,
						}) as React.CSSProperties),
						...((padding && { "--simtip-padding": `${padding}px` }) as React.CSSProperties),
						...((animationDuration && {
							"--simtip-animation-duration": `${animationDuration}ms`,
						}) as React.CSSProperties),
						...((borderRadius && {
							"--simtip-border-radius": `${borderRadius}px`,
						}) as React.CSSProperties),
						...((fontSize && { "--simtip-font-size": `${fontSize}px` }) as React.CSSProperties),
					}}
				>
					{content}
				</div>
			)}
		</div>
	);
}
