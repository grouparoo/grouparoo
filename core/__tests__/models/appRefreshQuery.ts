import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import { App, AppRefreshQuery, Run, Schedule, Source } from "../../src";
import { AppRefreshQueryOps } from "../../src/modules/ops/appRefreshQuery";

describe("appRefreshQuery", () => {
  let app: App;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("with app", () => {
    beforeAll(async () => {
      app = await helper.factories.app();
    });

    test("an app refresh query can be created with an app", async () => {
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

    test("an app refresh query's recurring frequency must be > 6000", async () => {
      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        recurringFrequency: 20,
        state: "ready",
      });
      await expect(appRefreshQuery.save()).rejects.toThrow(
        /recurring frequency is required to be one minute or greater/
      );
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

    test("an updated query on a ready appRefreshQuery clears values and enqueues a run", async () => {
      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });
      await appRefreshQuery.save();

      await api.resque.queue.connection.redis.flushdb();

      await appRefreshQuery.update({ refreshQuery: "SELECT 'hi' AS name;" });

      await appRefreshQuery.reload();
      expect(appRefreshQuery.lastChangedAt).toBeFalsy();
      expect(appRefreshQuery.lastConfirmedAt).toBeFalsy();
      expect(appRefreshQuery.value).toBeFalsy();

      let foundTasks = await specHelper.findEnqueuedTasks(
        "appRefreshQuery:run"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        appRefreshQueryId: appRefreshQuery.id,
      });
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
