import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { appTest } from "../../src/lib/appTest";
import { connect } from "../../src/lib/connect";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

describe("Plugin Test Connection Scenarios", () => {
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
    expect(response.message).toEqual(
      "API key valid, but account does not have meta API access. Verify base id manually."
    );
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
    expect(response.success).toBe(true);
    expect(response.message).toEqual(
      "API key valid, but account does not have meta API access. Verify base id manually."
    );
  });
});
