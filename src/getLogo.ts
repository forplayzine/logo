import { getSvg } from "./getSvg";
// import { getSvgRect } from "./getSvgRect";
//import { getSvgCircle } from "./getSvgCircle";
import { getLetterP } from "./getLetterP";
import { getLetterF } from "./getLetterF";
/**
 * Example Documentation
 * @returns "hello"
 * @beta
 */
export function getLogo(): string {
    // Logo is an overlapping F and P
    // Filled or outlined letters?
    // outlined letters

    const stemWidth = 20;

    const fStartX = 0;
    const fStartY = 0;
    const fHeight = 100;
    const fWidth = 50;

    const pOffset = 20; // lower P y start compare to F y start
    const pStartY = pOffset;
    const pStartX = 50;
    const pHeight = fHeight - pOffset; // still goes to same baseline

    const letterP = getLetterP({
        x: pStartX,
        y: pStartY,
        height: pHeight,
        width: 50,
        armHeight: 30,
        stemWidth,
        borderSize: 2,
    });

    const letterF = getLetterF({
        x: fStartX,
        y: fStartY,
        height: fHeight,
        width: fWidth,
        stemWidth,
    });

    const elements: string[] = [letterP, letterF];
    const svg = getSvg(elements, { width: 100, height: 100 });
    // the name of the function
    return svg;
}
