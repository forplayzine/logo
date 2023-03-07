import { getLogo } from "../src/index";
test("basic", () => {
    const actual = getLogo();
    expect(actual).toBeDefined();
});
