import "@grouparoo/spec-helper";
import { destinationOptions as methodToTest } from "../../src/lib/export-account/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_d2bb07d8-0c4f-49b5-ad42-545f2e8662e8";

// primaryKey

async function runDestinationOptions({ destinationOptions }) {
  return methodToTest({
    appId,
    destinationOptions,
    appOptions,
    app: null,
    connection: null,
  });
}

describe("salesforce/export-account/destinationOptions", () => {
  test("can look up options", async () => {
    const destinationOptions = {};
    const result = await runDestinationOptions({ destinationOptions });
    const primaryKey = result.primaryKey;
    expect(primaryKey.type).toEqual("list");
    expect(primaryKey.options).toEqual(
      expect.arrayContaining(["AccountNumber", "Name"])
    );
  });
});
