import { createElement, throwerMonitor } from "../src/thrower-monitor";
import styles from "../src/styles/styleClassNames";

describe("[HTML FUNCTIONS]:", () => {
  it("Should return HTMLElement", () => {
    expect(createElement("div")).toBeInstanceOf(HTMLElement);
    expect(createElement("div")).not.toBeInstanceOf(Error);
    expect(createElement("div")).not.toBeNull();
  });
  it("If the parameter was not specified, throw an error", () => {
    expect(createElement()).toBeInstanceOf(Error);
    expect(createElement()).not.toBeInstanceOf(HTMLElement);
  });
});

describe("[STYLES]:", () => {
  it(`Check object "styles" exists`, () => {
    expect(styles).toBeInstanceOf(Object);
    expect(styles).not.toBeNull();
    expect(styles).not.toBeUndefined();
  });
});

describe("[THROWER-MONITOR]:", () => {
  it("sometg", () => {});
});
