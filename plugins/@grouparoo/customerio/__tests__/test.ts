import { helper } from "@grouparoo/spec-helper";
import { test as testMethod } from "../src/lib/test";
import { loadAppOptions, updater } from "./utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

describe("customer.io/exportRecord", () => {
  test("the test command works", async () => {
    const response = await testMethod({
      appOptions,
      app: null,
      appId: null,
      connection: null,
    });

    expect(response).toEqual(expect.objectContaining({ success: true }));
  });
});
