import { getSvgRect } from "./getSvgRect";
import { SvgRect } from "./SvgRect";
import { SvgCircle } from "./SvgCircle";
import { getSvgCircle } from "./getSvgCircle";

export interface LetterP {
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
     * total height of the arm
     */
    armHeight: number;

    /**
     * total width of the staff
     */
    stemWidth: number;

    /**
     * distance between the edge and the cutout
     */
    borderSize: number;
}

export function getLetterP(dimensions: LetterP): string {
    const { x, y, height, width, armHeight, stemWidth, borderSize } = dimensions;

    const rectStaff: SvgRect = {
        x,
        y,
        width: stemWidth,
        height,
    };

    const rectStaffCutout: SvgRect = {
        x: x + borderSize,
        y: y + borderSize,
        width: stemWidth - borderSize * 2,
        height: height - borderSize * 2,
        fill: "white",
    };

    const circleR = armHeight / 2;
    const circleCutoutR = circleR - borderSize;

    // from x, y to end circle
    const rectArm: SvgRect = {
        x,
        y,
        width: width - circleR,
        height: armHeight,
    };

    const rectArmCutout: SvgRect = {
        x: x + borderSize,
        y: y + borderSize,
        width: width - circleR,
        height: armHeight - borderSize * 2,
        fill: "white",
    };

    const circleCenterX = x + width - circleR;
    const circleCenterY = y + circleR;

    const circleArm: SvgCircle = {
        x: circleCenterX,
        y: circleCenterY,
        radius: circleR,
    };

    const circleArmCutout: SvgCircle = {
        x: circleCenterX,
        y: circleCenterY,
        radius: circleCutoutR,
        fill: "white",
    };

    // P Hole

    /**
     * distance between the edge of the hole and the edge of the letter
     */
    const holeBorder = 4;

    const holeR = circleCutoutR - holeBorder;
    const holeH = circleCenterX - x - stemWidth + borderSize;
    const hole: SvgRightArch = {
        id: "hole",
        x: circleCenterX,
        y: circleCenterY,
        r: holeR,
        h: holeH,
        fill: "black",
    };
    const holeCutout: SvgRightArch = {
        id: "holeCutout",
        x: circleCenterX,
        y: circleCenterY,
        r: holeR - borderSize,
        h: holeH - borderSize,
        fill: "white",
    };

    const elements: string[] = [
        getSvgRect(rectStaff),
        getSvgRect(rectArm),
        getSvgCircle(circleArm),

        // cutouts
        getSvgRect(rectStaffCutout),
        getSvgRect(rectArmCutout),
        getSvgCircle(circleArmCutout),

        // hole
        ...getSvgRightArch(hole),
        ...getSvgRightArch(holeCutout),
    ];

    return elements.join("    \n");
}

/**
 * looks like a D
 */
interface SvgRightArch {
    id: string;
    /**
     * x coordinate of center of arch circle
     */
    x: number;
    /**
     * y coordinate of center of arch circle
     */
    y: number;

    /**
     * radius of the arch circle
     */
    r: number;

    /**
     * h from bottom to x
     */
    h: number;

    fill?: string;
}

function getSvgRightArch(parameters: SvgRightArch): string[] {
    const { x, y, h, r, fill, id } = parameters;

    const circle: SvgCircle = {
        id: `${id}-circle`,
        x,
        y,
        radius: r,
        fill,
    };

    const rect: SvgRect = {
        id: `${id}-rect`,
        x: x - h,
        y: y - r,
        width: h,
        height: r * 2,
        fill,
    };

    return [getSvgCircle(circle), getSvgRect(rect)];
}
