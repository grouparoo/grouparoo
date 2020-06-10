import GrouparooWebClient from "..";

describe("export", () => {
  it("the module exports the class directly", () => {
    expect(() => {
      new GrouparooWebClient({});
    }).toThrow(/apiKey is a required argument/);
  });
});
