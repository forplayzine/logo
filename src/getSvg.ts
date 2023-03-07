export function getSvg(
    elements: string[],
    { width, height }: { width: number; height: number }
): string {
    return `<?xml version="1.0" standalone="no"?>
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${elements.join("\n    ")}
</svg>
`;
}
