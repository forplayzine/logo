import { SvgAttributeId } from "./SvgAttributeId";
import { SvgAttributeFill } from "./SvgAttributeFill";
export interface SvgCircle extends SvgAttributeId, SvgAttributeFill {
    /**
     * The x-axis coordinate of the center of the circle
     */
    x: number;
    /**
     * The y-axis coordinate of the center of the circle.
     */
    y: number;
    /**
     * The radius of the circle. A value lower or equal to zero disables rendering of the circle.
     */
    radius: number;
}
