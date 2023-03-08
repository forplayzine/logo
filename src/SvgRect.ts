import { SvgAttributeId } from "./SvgAttributeId";
import { SvgAttributeFill } from "./SvgAttributeFill";
export interface SvgRect extends SvgAttributeId, SvgAttributeFill {
    /**
     * The x position of the top left corner of the rectangle.
     */
    x: number;
    /**
     * The y position of the top left corner of the rectangle.
     */
    y: number;
    /**
     * The width of the rectangle.
     */
    width: number;
    /**
     * The height of the rectangle.
     */
    height: number;
}
