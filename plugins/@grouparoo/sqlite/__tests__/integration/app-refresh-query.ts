import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/sqlite": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { App, AppRefreshQuery } from "@grouparoo/core";
import { beforeData, afterData, getConfig } from "../utils/data";

const { usersTableName, appOptions } = getConfig();

describe("integration/refreshQuery/sqlite", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  let app: App;

  beforeAll(async () => {
    await beforeData();
    app = await App.create({
      name: "test app",
      type: "sqlite",
    });
    await app.setOptions(appOptions);
    await app.update({ state: "ready" });
  });

  afterEach(async () => {
    await AppRefreshQuery.truncate();
  });

  afterAll(async () => {
    await afterData();
  });

  it("can query using the appRefreshQuery query method", async () => {
    const app = await App.findOne();
    const appRefreshQuery = await AppRefreshQuery.create({
      appId: app.id,
      refreshQuery: "SELECT 'HI' as name",
      state: "ready",
    });
    appRefreshQuery.save(); // does not throw
  });

  it("shows a good error with a missing query", async () => {
    const app = await App.findOne();
    await expect(
      AppRefreshQuery.create({
        appId: app.id,
        refreshQuery: "",
        state: "ready",
      })
    ).rejects.toThrow(
      /query should start with SELECT, INSERT, UPDATE, or DELETE/
    );
  });
});
