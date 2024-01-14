import { useState } from "react";

import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./Tooltip.types";

export function Tooltip({
	children,
	content,
	placement,
	delay,
	animation,
	hasArrow,
}: TooltipProps) {
	// Component variables
	let timeout: NodeJS.Timeout;

	// Component states
	const [active, setActive] = useState<boolean>(false);

	// Methods
	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, delay ?? 400);
	};

	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
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
					className={`${styles.tooltip_text} ${styles[`${placement ?? "top"}`]} ${
						styles[`${animation ?? ""}`]
					} ${hasArrow ? styles.arrow : ""}`}
				>
					{content}
				</div>
			)}
		</div>
	);
}
