import { SvgCircle } from "./SvgCircle";

export function getSvgCircle({ x, y, radius }: SvgCircle): string {
    return `<circle cx="${x}" cy="${y}" r="${radius}"/>`;
}
