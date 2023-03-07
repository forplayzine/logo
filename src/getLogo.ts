import { getSvg } from "./getSvg";
import { getSvgRect } from "./getSvgRect";
import { getSvgCircle } from "./getSvgCircle";
/**
 * Example Documentation
 * @returns "hello"
 * @beta
 */
export function getLogo(): string {
    // Logo is an overlapping F and P
    // Filled or outlined letters?
    // outlined letters

    const fStartX = 0;
    const fStartY = 0;
    const fHeight = 100;
    const lineWidth = 10;

    const pOffset = 20; // lower P y start compare to F y start
    const pStartY = pOffset;
    const pStartX = 50;
    const pHeight = fHeight - pOffset; // overall he

    const elements: string[] = [];

    // Do via cutouts?

    //
    // P
    //

    // | down
    elements.push(getSvgRect({ x: pStartX, y: pStartY, width: lineWidth, height: pHeight }));

    // = across
    const pAcrossHeight = 20;
    const pAcrossWidth = 40;
    elements.push(
        getSvgRect({ x: pStartX, y: pStartY, width: pAcrossWidth, height: pAcrossHeight })
    );

    // O at end
    // center of circle is
    const pCircleCenterX = pStartX + pAcrossWidth;
    const pCircleCenterY = pStartY + pAcrossHeight / 2;
    elements.push(
        getSvgCircle({ x: pCircleCenterX, y: pCircleCenterY, radius: pAcrossHeight / 2 })
    );

    //
    // F
    //
    /*
        |---
        |--
        |
    */

    // | down
    elements.push(getSvgRect({ x: fStartX, y: fStartY, width: lineWidth, height: fHeight }));

    // - top across
    elements.push(getSvgRect({ x: fStartX, y: fStartY, width: 100, height: lineWidth }));

    // - middle across
    elements.push(getSvgRect({ x: fStartX, y: fStartY + 50, width: 70, height: lineWidth }));

    const svg = getSvg(elements, { width: 100, height: 100 });
    // the name of the function
    return svg;
}
