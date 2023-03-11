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
}

export function getLetterF(dimensions: LetterF): string {
    const { x, y, height, width, stemWidth } = dimensions;
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

    // - top across
    const top: SvgRect = { x, y, width, height: stemWidth };

    // - middle across
    const middle = { x, y: y + 50, width, height: stemWidth };

    return [stem, top, middle].map(getSvgRect).join("    \n");
}
