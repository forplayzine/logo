import { SvgAttributeFill } from "./SvgAttributeFill";
import { SvgAttributeId } from "./SvgAttributeId";

function getSvgAttribute<T>(attributes: T, key: keyof T & string): string {
    const value = attributes[key];
    if (value === undefined) {
        return "";
    }
    return `${key}="${value}"`;
}

export function getSvgAttributes(attributes: SvgAttributeId & SvgAttributeFill) {
    const all = [getSvgAttribute(attributes, "id"), getSvgAttribute(attributes, "fill")];

    const list = all.filter((x) => x !== "");
    if (list.length === 0) {
        return "";
    }
    const formatted = ` ${list.join(" ")}`;
    return formatted;
}
