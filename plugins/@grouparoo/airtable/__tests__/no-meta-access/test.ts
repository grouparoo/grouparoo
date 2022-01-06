import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater } from "../utils/nockHelper";
import { appTest } from "../../src/lib/appTest";
import { connect } from "../../src/lib/connect";

helper.useNock(__filename, getUpdater("BASIC"));
const appOptions = loadAppOptions("BASIC");

describe("BASIC Plugin Test Connection Scenarios", () => {
  test("Successful Health Check", async () => {
    const connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
    const response = await appTest({
      app: undefined,
      appId: null,
      appOptions: null,
      connection,
    });
    expect(response.success).toBe(true);
    expect([
      "API key valid and base found, but base does not have meta API access.",
      "API key valid, but account does not have meta API access. Verify base id manually.",
    ]).toContain(response.message);
  });

  test("Bad API Key", async () => {
    const badOptions = Object.assign({}, appOptions, { apiKey: "junk" });

    const connection = await connect({
      app: undefined,
      appId: null,
      appOptions: badOptions,
    });
    const response = await appTest({
      app: undefined,
      appId: null,
      appOptions: null,
      connection,
    });
    expect(response.success).toBe(false);
    expect(response.message).toEqual(
      "Authentication required. Invalid API Key"
    );
  });

  test("Bad Base Id", async () => {
    const badOptions = Object.assign({}, appOptions, { baseId: "junk" });

    const connection = await connect({
      app: undefined,
      appId: null,
      appOptions: badOptions,
    });
    const response = await appTest({
      app: undefined,
      appId: null,
      appOptions: null,
      connection,
    });

    switch (response.success) {
      case true:
        expect(response.message).toEqual(
          "API key valid, but account does not have meta API access. Verify base id manually."
        );
        break;
      case false:
        expect(response.message).toEqual(
          "NOT_FOUND. Base Id not found in list of known base ids"
        );
        break;
      default:
        expect([true, false]).toContain(response.success);
    }
  });
});
