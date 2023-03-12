import { SvgRect } from "./SvgRect";
import { getSvgRect } from "./getSvgRect";

export interface LetterF {
    /**
     * x coordinate of the top left corner of the letter
     */
    x: number;
    /**
     * y coordinate of the top left corner of the letter
     */
    y: number;

    /**
     * total height of the letter
     */
    height: number;

    /**
     * total width of the letter
     */
    width: number;

    /**
     * total width of the staff
     */
    stemWidth: number;

    /**
     * distance between the edge and the cutout
     */
    borderSize: number;

    /**
     * height of both arms
     */
    armHeight: number;

    /**
     * y distance from top of letter to top of lower arm
     */
    lowerArmOffset: number;

    /**
     * width of the lower arm
     */
    lowerArmWidth: number;
}

export function getLetterF(dimensions: LetterF): string {
    const { x, y, height, width, stemWidth, borderSize, armHeight, lowerArmOffset, lowerArmWidth } =
        dimensions;
    //
    // F
    //
    /*
        |---
        |--
        |
    */

    // | down
    const stem: SvgRect = { x, y, width: stemWidth, height };

    const stemCutout: SvgRect = {
        x: x + borderSize,
        y: y + borderSize,
        width: stemWidth - borderSize * 2,
        height: height - borderSize * 2,
        fill: "white",
    };

    // - top across
    const topWidth = width;
    const topHeight = armHeight;
    const top: SvgRect = { x, y, width: topWidth, height: topHeight };

    const topCutout: SvgRect = {
        x: x + borderSize,
        y: y + borderSize,
        width: topWidth - borderSize * 2,
        height: topHeight - borderSize * 2,
        fill: "white",
    };

    // - middle across
    const middleY = y + lowerArmOffset;
    const middleWidth = lowerArmWidth;
    const middleHeight = armHeight;
    const middle = { x, y: middleY, width: middleWidth, height: middleHeight };

    const middleCutout: SvgRect = {
        x: x + borderSize,
        y: middleY + borderSize,
        width: middleWidth - borderSize * 2,
        height: middleHeight - borderSize * 2,
        fill: "white",
    };

    return [stem, top, middle, topCutout, middleCutout, stemCutout].map(getSvgRect).join("    \n");
}
