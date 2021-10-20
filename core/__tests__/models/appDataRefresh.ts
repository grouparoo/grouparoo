import { helper } from "@grouparoo/spec-helper";
import { App, AppDataRefresh, Log } from "../../src";
import { AppDataRefreshOps } from "../../src/modules/ops/appDataRefresh";

describe("appDataRefresh", () => {
  let app: App;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("with app", () => {
    beforeAll(async () => {
      app = await helper.factories.app();
    });

    test("an app data refresh can be created with an app", async () => {
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "test query",
      });

      await appDataRefresh.save();

      expect(appDataRefresh.id.length).toBe(40);
      expect(appDataRefresh.createdAt).toBeTruthy();
      expect(appDataRefresh.updatedAt).toBeTruthy();
      expect(appDataRefresh.value).toBeTruthy();
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

      const spy = jest.spyOn(AppDataRefreshOps, "checkDataRefreshValue");
      await appDataRefresh.update({
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
      });
      expect(spy).toHaveBeenCalledWith(appDataRefresh);

      spy.mockRestore();
    });
  });
});
