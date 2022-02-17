import "@grouparoo/spec-helper";
import { destinationOptions as methodToTest } from "../../src/lib/export-contacts/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";

const { newNock } = helper.useNock(__filename, updater);
const appId = "app_d2bb07d8-0c4f-49b5-3039-QWEDf2e8662e8";

describe("hubspot/destinationOptions", () => {
  describe.each([
    { useOAuth: false, description: "with API key" },
    { useOAuth: true, description: "with OAuth" },
  ])("$description", ({ useOAuth }) => {
    const appOptions = loadAppOptions(newNock);

    async function runDestinationOptions({ destinationOptions }) {
      return methodToTest({
        appId,
        destinationOptions,
        appOptions,
        app: null,
        connection: null,
      });
    }

    test("can look up company fields", async () => {
      const destinationOptions = {};
      const result = await runDestinationOptions({ destinationOptions });
      let option = result.companyKey;
      expect(option.type).toEqual("list");
      expect(option.options).toEqual(
        expect.arrayContaining([
          "name",
          "domain",
          "website",
          "phone",
          "hs_object_id",
        ])
      );
    });
  });
});
