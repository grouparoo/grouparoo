import { helper } from "@grouparoo/spec-helper";

import { SimpleAppOptions } from "@grouparoo/core";
import { test as testConnection } from "../src/lib/test";
import { loadAppOptions, updater } from "./utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);

describe("hubspot/test", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("can connect with an API Key", async () => {
    const appOptions: SimpleAppOptions = loadAppOptions(newNock, {
      useOAuth: false,
    });

    const { success } = await testConnection({
      app: null,
      appId: null,
      connection: null,
      appOptions,
    });

    expect(success).toBe(true);
  });

  test("can connect with an OAuth Token", async () => {
    const appOptions: SimpleAppOptions = loadAppOptions(newNock, {
      useOAuth: true,
    });

    const { success } = await testConnection({
      app: null,
      appId: null,
      connection: null,
      appOptions,
    });

    expect(success).toBe(true);
  });
});
