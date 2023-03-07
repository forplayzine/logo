import { SvgRect } from "./SvgRect";

export function getSvgRect({ x, y, width, height }: SvgRect): string {
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}"/>`;
}
