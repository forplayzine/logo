import { SvgRect } from "./SvgRect";

import { getSvgAttributes } from "./getSvgAttributes";
export function getSvgRect(attributes: SvgRect): string {
    const { x, y, width, height } = attributes;

    const fa = getSvgAttributes(attributes);
    return `<rect${fa} x="${x}" y="${y}" width="${width}" height="${height}"/>`;
}
