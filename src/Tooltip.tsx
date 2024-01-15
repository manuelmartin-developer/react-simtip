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
						// @ts-ignore
						"--tooltip-background-color": backgroundColor ?? "unset",
						// @ts-ignore
						"--tooltip-text-color": color ?? "unset",
						// @ts-ignore
						"--tooltip-arrow-size": `${arrowSize}px` ?? "unset",
						// @ts-ignore
						"--tooltip-distance": `${distanceFromTarget}px` ?? "unset",
						// @ts-ignore
						"--tooltip-padding": `${padding}px` ?? "unset",
						// @ts-ignore
						"--tooltip-animation-duration": `${animationDuration}ms` ?? "unset",
						// @ts-ignore
						"--tooltip-border-radius": `${borderRadius}px` ?? "unset",
						// @ts-ignore
						"--tooltip-font-size": `${fontSize}px` ?? "unset",
					}}
				>
					{content}
				</div>
			)}
		</div>
	);
}
