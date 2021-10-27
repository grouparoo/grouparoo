import { helper } from "@grouparoo/spec-helper";
import { App, AppDataRefresh, Log, Run, Source } from "../../src";
import { AppDataRefreshOps } from "../../src/modules/ops/appDataRefresh";
import { RunOps } from "../../src/modules/ops/runs";

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
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
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

    test("deleting an appDataRefresh creates a log entry", async () => {
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });
      await appDataRefresh.save();
      await appDataRefresh.destroy();
      const latestLog = await Log.findOne({
        where: { verb: "destroy", topic: "appDataRefresh" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(latestLog).toBeTruthy();
    });

    test("updating a refreshQuery on a ready instance triggers an appDataRefresh check", async () => {
      Run.truncate();
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });
      await appDataRefresh.save();

      const spy = jest.spyOn(AppDataRefreshOps, "checkDataRefreshValue");
      await appDataRefresh.update({
        refreshQuery: "SELECT 'hi' AS name;",
      });
      expect(spy).toHaveBeenCalledWith(appDataRefresh);

      spy.mockRestore();
    });

    test("schedules are enqueued if a new 'value' is found from the query", async () => {
      let model;
      ({ model } = await helper.factories.properties());
      const source = await Source.create({
        name: "test source",
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      const schedule = await helper.factories.schedule(source);

      await schedule.update({ recurring: "true", recurringFrequency: 6000000 });

      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
        state: "ready",
      });
      await appDataRefresh.save();

      await appDataRefresh.update({
        refreshQuery: "SELECT 'hi' AS name;",
      });

      const runs = await Run.findAll({ where: { creatorType: "schedule" } });
      //current behavior does not stop existing runs... one run is from the initial creation, and one from the update
      expect(runs.length).toBe(2);

      await schedule.destroy();
      await source.destroy();
    });
    test("an appDataRefresh in the draft state will not run its query", async () => {
      const spy = jest.spyOn(AppDataRefreshOps, "triggerSchedules");

      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
      });
      await appDataRefresh.save();

      expect(spy).toHaveBeenCalledTimes(0);
    });

    //this test should be last, it destroys the app
    test("deleting an app deletes its appDataRefresh", async () => {
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
        state: "ready",
      });
      await appDataRefresh.save();
      await app.destroy();

      const appDataRefreshes = await AppDataRefresh.findAll();

      expect(appDataRefreshes.length).toEqual(0);
    });
  });
});
