import "@grouparoo/spec-helper";
import { destinationOptions as methodToTest } from "../../src/lib/export-objects/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_d2bb07d8-0c4f-49b5-3039-545f2e8662e8";

// recordObject
// recordMatchField
// groupObject
// groupNameField

async function runDestinationOptions({ destinationOptions }) {
  return methodToTest({
    appId,
    destinationOptions,
    appOptions,
    app: null,
    connection: null,
  });
}

describe("hubspot/destinationOptions", () => {
  test("can look up objects", async () => {
    const destinationOptions = {};

    const result = await runDestinationOptions({ destinationOptions });
    console.log(result);
  });
});
