export type ClassName = string | null | undefined | (string | null | undefined)[];
type Animation = "fade" | "scale" | "flip" | "slide" | "slide-flip" | "bounce";
type Placement = "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
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
     * @type {"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"}
     * @optional
     * @default "top"
     * @example
     * <Tooltip placement="top" content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    placement?: Placement;
    /**
     * Delay to show the tooltip.
     * @type {number}
     * @optional
     * @default 400
     * @example
     * <Tooltip showDelay={1000} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    showDelay?: number;
    /**
     * Delay to hide the tooltip.
     * @type {number}
     * @optional
     * @default 0
     * @example
     * <Tooltip showDelay={1000} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    hideDelay?: number;
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
     * The size of the arrow in pixels.
     * @type {number}
     * @optional
     * @default 6
     * @example
     * <Tooltip arrowSize={8} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    arrowSize?: number;
    /**
     * The animation of the tooltip.
     * @type {"fade" | "scale" | "flip" | "slide" | "slide-flip" | "bounce"}
     * @optional
     * @default undefined
     * @example
     * <Tooltip animation="fade" content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    animation?: Animation;
    /**
     * Animation duration in milliseconds.
     * @type {number}
     * @optional
     * @default 300
     * @example
     * <Tooltip animationDuration={500} content="This is a tooltip">
     *   <button>Hover me</button>
     * </Tooltip>
     *
     * */
    animationDuration?: number;
    /**
     * The class name of the tooltip.
     * @type {ClassName}
     * @optional
     * @example
     * <Tooltip className="tooltip" content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    className?: ClassName;
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
    /**
     * The distance from the target in pixels.
     * @type {number}
     * @optional
     * @default 30
     * @example
     * <Tooltip distanceFromTarget={16} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    distanceFromTarget?: number;
    /**
     * The padding of the tooltip in pixels.
     * @type {number}
     * @optional
     * @default 6
     * @example
     * <Tooltip padding={8} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    padding?: number;
    /**
     * The border radius of the tooltip in pixels.
     * @type {number}
     * @optional
     * @default 4
     * @example
     * <Tooltip borderRadius={8} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    borderRadius?: number;
    /**
     * The font size of the tooltip in pixels.
     * @type {number}
     * @optional
     * @default 11
     * @example
     * <Tooltip fontSize={16} content="This is a tooltip">
     *    <button>Hover me</button>
     * </Tooltip>
     */
    fontSize?: number;
}
export {};
