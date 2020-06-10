import * as _Export from "../dist/index";
// require("../dist/index");

describe("export", () => {
  it("the module exports the class directly", () => {
    // @ts-ignore
    expect(() => GrouparooWebClient()).toThrow(/no arguments provided/);
  });
});
