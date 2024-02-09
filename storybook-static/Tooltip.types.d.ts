/// <reference types="react" />
type ClassName = string | null | undefined | (string | null | undefined)[];
type Animation =
  | "fade"
  | "scale"
  | "flip"
  | "slide"
  | "swing"
  | "bounce"
  | "flicker"
  | undefined;
type Placement = "top" | "bottom" | "left" | "right";
type Variant = "dark" | "light" | "success" | "warning" | "error" | "info";
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
   * <Tooltip content="This is a tooltip">
   *     <button>Hover me</button>
   * </Tooltip>
   */
  content: string | React.ReactNode;
  /**
   * The placement of the tooltip.
   * @type {"top" | "bottom" | "left" | "right"}
   * @optional
   * @default "top"
   * @example
   * <Tooltip placement="bottom" content="This is a tooltip">
   *    <button>Hover me</button>
   * </Tooltip>
   */
  placement?: Placement;
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
   * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @type {boolean}
   * @optional
   * @default false
   * @example
   * <Tooltip interactive content="This is a tooltip">
   *   <button>Hover me</button>
   * </Tooltip>
   *
   **/
  disableInteractive?: boolean;
  /**
   * The offset of the tooltip.
   * @type {number}
   * @optional
   * @default 0
   * @example
   * <Tooltip offset={10} content="This is a tooltip">
   *   <button>Hover me</button>
   * </Tooltip>
   *
   **/
  offset?: number;
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
   * The animation of the tooltip.
   * @type {"fade" | "scale" | "flip" | "slide" | "swing" | "bounce" | "flicker"}
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
  /**
   * The style of the tooltip.
   * @type {"dark" | "light" | "success" | "warning" | "error" | "info"}
   * @optional
   * @default "dark"
   * @example
   * <Tooltip variant="light" content="This is a tooltip">
   *   <button>Hover me</button>
   * </Tooltip>
   * */
  variant?: Variant;
  /**
   * The open state of the tooltip.
   * @type {boolean}
   * @optional
   * @default false
   * @example
   * <Tooltip open content="This is a tooltip">
   *  <button>Hover me</button>
   * </Tooltip>
   * */
  open?: boolean;
}
export {};
