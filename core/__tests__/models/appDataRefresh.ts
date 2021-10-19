import { helper } from "@grouparoo/spec-helper";
import { api, redis, utils } from "actionhero";
import { plugin, App, AppDataRefresh, GrouparooModel, Log } from "../../src";

describe("appDataRefresh", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("with app", () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });
    app.save();
    beforeAll(async () => {});

    test("an app data refresh can be created with an app", async () => {
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "test query",
      });
      await appDataRefresh.save();

      expect(appDataRefresh.id.length).toBe(40);
      expect(appDataRefresh.createdAt).toBeTruthy();
      expect(appDataRefresh.updatedAt).toBeTruthy();
      expect(appDataRefresh.value).toBeFalsy();
    });

    test("creating an app data refresh creates a log entry", async () => {
      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "appDataRefresh" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(latestLog).toBeTruthy();
    });

    test("updating a refreshQuery triggers an appDataRefresh check", async () => {
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "test query",
      });
      await appDataRefresh.save();
      await appDataRefresh.update({
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
      });
      await appDataRefresh.save();
      expect(AppDataRefresh.runCheckIfNewQuery).toHaveBeenCalledWith(
        appDataRefresh
      );
    });
  });
});
