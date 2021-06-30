import { uniquePropertyBootstrapOptions } from "../../src/lib/sheet-import/uniquePropertyBootstrapOptions";

describe("google-sheets/uniquePropertyBootstrapOptions", () => {
  test("sets column mapping as a default option", async () => {
    const opts = await uniquePropertyBootstrapOptions({
      connection: null,
      app: null,
      appId: null,
      appOptions: null,
      source: null,
      sourceId: null,
      sourceOptions: null,
      mappedColumn: "userId",
    });

    expect(opts).toEqual({ column: "userId" });
  });
});
