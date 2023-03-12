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

    // For F and P
    const stemWidth = 20;
    const borderSize = 2;

    const fStartX = 0;
    const fStartY = 0;
    const fHeight = 100;
    const fWidth = 50;
    const fArmHeight = 20;

    // P x y from F x y
    const pOffsetY = 23;
    const pOffsetX = fWidth - stemWidth; // aligns with Arm F

    const pStartY = fStartY + pOffsetY;
    const pStartX = fStartX + pOffsetX;
    const pHeight = fHeight - pOffsetY; // still goes to same baseline
    const pArmHeight = fArmHeight * 2;

    const fLowerArmOffset = pStartY - fStartY + pArmHeight - fArmHeight; // align with P lower

    const letterP = getLetterP({
        x: pStartX,
        y: pStartY,
        height: pHeight,
        width: 45,
        armHeight: pArmHeight,
        stemWidth,
        borderSize,
    });

    const letterF = getLetterF({
        x: fStartX,
        y: fStartY,
        height: fHeight,
        width: fWidth,
        stemWidth,
        borderSize,
        armHeight: fArmHeight,
        lowerArmOffset: fLowerArmOffset,
        lowerArmWidth: 40,
    });

    const elements: string[] = [letterP, letterF];
    const svg = getSvg(elements, { width: 100, height: 100 });
    // the name of the function
    return svg;
}
