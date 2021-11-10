import { helper } from "@grouparoo/spec-helper";
import { Schedule } from "../../dist";
import { App, AppRefreshQuery, Log, Run, Source } from "../../src";
import { AppRefreshQueryOps } from "../../src/modules/ops/appRefreshQuery";

describe("appRefreshQuery", () => {
  let app: App;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("with app", () => {
    beforeAll(async () => {
      app = await helper.factories.app();
    });

    test("an app data refresh can be created with an app", async () => {
      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });

      await appRefreshQuery.save();

      expect(appRefreshQuery.id.length).toBe(40);
      expect(appRefreshQuery.createdAt).toBeTruthy();
      expect(appRefreshQuery.updatedAt).toBeTruthy();
      appRefreshQuery.destroy();
    });

    test("creating an app data refresh creates a log entry", async () => {
      const latestCreateLog = await Log.findOne({
        where: { verb: "create", topic: "appRefreshQuery" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(latestCreateLog).toBeTruthy();
    });

    test("deleting an appRefreshQuery creates a log entry", async () => {
      const latestDestroyLog = await Log.findOne({
        where: { verb: "destroy", topic: "appRefreshQuery" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(latestDestroyLog).toBeTruthy();
    });

    test("an updated query is checked", async () => {
      Run.truncate();

      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });
      await appRefreshQuery.save();

      const spy = jest.spyOn(AppRefreshQueryOps, "runAppQuery");
      await appRefreshQuery.update({
        refreshQuery: "SELECT 'hi' AS name;",
      });
      expect(spy).toHaveBeenCalledWith(appRefreshQuery);

      spy.mockRestore();
      appRefreshQuery.destroy();
    });

    test("an appRefreshQuery in the draft state will not run its query", async () => {
      const spy = jest.spyOn(AppRefreshQueryOps, "triggerSchedules");

      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
      });
      await appRefreshQuery.save();

      expect(spy).toHaveBeenCalledTimes(0);
      appRefreshQuery.destroy();
    });

    //this test should be last, it destroys the app
    test("deleting an app deletes its appRefreshQuery", async () => {
      await Schedule.truncate();
      await Source.truncate();

      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
        state: "ready",
      });
      await appRefreshQuery.save();

      await app.destroy();

      const appRefreshQueries = await AppRefreshQuery.findAll();

      expect(appRefreshQueries.length).toEqual(0);
    });
  });
});
