import { SvgCircle } from "./SvgCircle";
import { getSvgAttributes } from "./getSvgAttributes";
export function getSvgCircle(attributes: SvgCircle): string {
    const { x, y, radius } = attributes;
    const fa = getSvgAttributes(attributes);
    return `<circle${fa} cx="${x}" cy="${y}" r="${radius}"/>`;
}
