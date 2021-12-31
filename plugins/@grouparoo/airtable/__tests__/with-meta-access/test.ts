import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater } from "../utils/nockHelper";
import { appTest } from "../../src/lib/appTest";
import { connect } from "../../src/lib/connect";

helper.useNock(__filename, getUpdater("META"));
const appOptions = loadAppOptions("META");

describe("META Plugin Test Connection Scenarios", () => {
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
      "Meta API access confirmed. Tables found: 5"
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

    expect(response.success).toEqual(false);
    expect(response.message).toEqual(
      "NOT_FOUND. Base Id not found in list of known base ids"
    );
  });
});
