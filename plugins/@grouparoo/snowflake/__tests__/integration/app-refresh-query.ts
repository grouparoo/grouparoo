import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/snowflake": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { App, AppRefreshQuery } from "@grouparoo/core";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

describe("integration/refreshQuery/snowflake", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  let app: App;

  beforeAll(async () => {
    app = await App.create({
      name: "test app",
      type: "snowflake",
    });
    await app.setOptions(appOptions);
    await app.update({ state: "ready" });
  });

  afterEach(async () => {
    await AppRefreshQuery.truncate();
  });

  test("I can query using the appRefreshQuery query method", async () => {
    const app = await App.findOne();
    const appRefreshQuery = await AppRefreshQuery.create({
      appId: app.id,
      refreshQuery: "SELECT 'HI' as name",
      state: "ready",
    }); // does not throw
  });

  test("I show a good error with a missing query", async () => {
    const app = await App.findOne();
    await expect(
      AppRefreshQuery.create({
        appId: app.id,
        refreshQuery: "",
        state: "ready",
      })
    ).rejects.toThrow(/Request to Snowflake failed./);
  });
  test("I show a good error with a query that has too many sql statements", async () => {
    const app = await App.findOne();
    await expect(
      AppRefreshQuery.create({
        appId: app.id,
        refreshQuery: "SELECT 'hi' as name; SELECT id FROM demo.users LIMIT 1;",
        state: "ready",
      })
    ).rejects.toThrow(
      /Multiple SQL statements in a single API call are not supported; use one API call per statement instead./
    );
  });
});
