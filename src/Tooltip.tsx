import { useState } from "react";

import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./Tooltip.types";

export function Tooltip({
	children,
	content,
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
			className={styles.tooltip_wrapper}
			data-title={typeof content === "string" ? content : ""}
			data-placement={placement}
			aria-label={typeof content === "string" ? content : ""}
			role="tooltip"
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{children}
			{active && (
				<div
					className={`${className ? className : ""} ${styles.tooltip_text} ${
						styles[`${placement ?? "top"}`]
					} ${styles[`${animation ?? ""}`]} ${hasArrow ? styles.arrow : ""}`}
					style={{
						...((backgroundColor && {
							"--tooltip-background-color": backgroundColor,
						}) as React.CSSProperties),
						...((color && { "--tooltip-text-color": color }) as React.CSSProperties),
						...((arrowSize && { "--tooltip-arrow-size": `${arrowSize}px` }) as React.CSSProperties),
						...((distanceFromTarget && {
							"--tooltip-distance": `${distanceFromTarget}px`,
						}) as React.CSSProperties),
						...((padding && { "--tooltip-padding": `${padding}px` }) as React.CSSProperties),
						...((animationDuration && {
							"--tooltip-animation-duration": `${animationDuration}ms`,
						}) as React.CSSProperties),
						...((borderRadius && {
							"--tooltip-border-radius": `${borderRadius}px`,
						}) as React.CSSProperties),
						...((fontSize && { "--tooltip-font-size": `${fontSize}px` }) as React.CSSProperties),
					}}
				>
					{content}
				</div>
			)}
		</div>
	);
}
