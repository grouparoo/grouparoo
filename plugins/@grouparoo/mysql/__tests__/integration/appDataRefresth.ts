import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { App, AppDataRefresh } from "@grouparoo/core";
import { beforeData, afterData, getConfig } from "../utils/data";

const { usersTableName, appOptions } = getConfig();

describe("integration/runs/mysql", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  let app: App;

  beforeAll(async () => {
    await beforeData();
    app = await App.create({
      name: "test app",
      type: "mysql",
    });
    await app.setOptions(appOptions);
    await app.update({ state: "ready" });
  });

  afterAll(async () => {
    await afterData();
  });

  test("I can query using the appDataRefresh query method", async () => {
    const app = await App.findOne();
    const adr = await AppDataRefresh.create({
      appId: app.id,
      refreshQuery: "SELECT 'HI' as name",
    });
    expect(adr.lastChangedAt).toBeInstanceOf(Date);
    expect(adr.value).toEqual(JSON.stringify({ name: "HI" }));
  });

  test.todo("I show a good error with a missing query");
  test.todo(
    "I show a good error with a query that has too many sql statements"
  );
});
