export interface TooltipProps {
	/**
	 * The children of the tooltip.
	 * @type {React.ReactNode}
	 * @required
	 * @example
	 * <Tooltip content="This is a tooltip">
	 *     <button>Hover me</button>
	 * </Tooltip>
	 */
	children: React.ReactNode;
	/**
	 * The content of the tooltip.
	 * @type {string | React.ReactNode}
	 * @required
	 * @example
	 * content="This is a tooltip"
	 * @example
	 * content={<div>This is a tooltip</div>}
	 */
	content: string | React.ReactNode;
	/**
	 * The placement of the tooltip.
	 * @type {"top" | "bottom" | "left" | "right"}
	 * @optional
	 * @default "top"
	 * @example
	 * <Tooltip placement="top" content="This is a tooltip">
	 *    <button>Hover me</button>
	 * </Tooltip>
	 */
	placement?: "top" | "bottom" | "left" | "right";
	/**
	 * The delay of the tooltip.
	 * @type {number}
	 * @optional
	 * @default 400
	 * @example
	 * <Tooltip delay={1000} content="This is a tooltip">
	 *    <button>Hover me</button>
	 * </Tooltip>
	 */
	delay?: number;
	/**
	 * The animation of the tooltip.
	 * @type {"fade"}
	 * @optional
	 * @default undefined
	 * @example
	 * <Tooltip animation="fade" content="This is a tooltip">
	 *    <button>Hover me</button>
	 * </Tooltip>
	 */
	animation?: "fade";
	/**
	 * The arrow of the tooltip.
	 * @type {boolean}
	 * @optional
	 * @default false
	 * @example
	 * <Tooltip hasArrow content="This is a tooltip">
	 *    <button>Hover me</button>
	 * </Tooltip>
	 */
	hasArrow?: boolean;
	/**
	 * The color of the tooltip.
	 * @type {string}
	 * @optional
	 * @default "rgb(97 97 97 / 92%)"
	 * @example
	 * <Tooltip backgroundColor="backgroundColor" content="This is a tooltip">
	 *    <button>Hover me</button>
	 * </Tooltip>
	 */
	backgroundColor?: string;
	/**
	 * The color of the tooltip.
	 * @type {string}
	 * @optional
	 * @default "#fff"
	 * @example
	 * <Tooltip color="#fff" content="This is a tooltip">
	 *    <button>Hover me</button>
	 * </Tooltip>
	 */
	color?: string;
}
