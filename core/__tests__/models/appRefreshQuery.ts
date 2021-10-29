import { helper } from "@grouparoo/spec-helper";
import { Schedule } from "../../dist";
import { App, AppRefreshQuery, Log, Run, Source } from "../../src";
import { AppRefreshQueryOps } from "../../src/modules/ops/appRefreshQuery";
import { RunOps } from "../../src/modules/ops/runs";

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
      expect(appRefreshQuery.value).toBeTruthy();
    });

    test("creating an app data refresh creates a log entry", async () => {
      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "appRefreshQuery" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(latestLog).toBeTruthy();
    });

    test("deleting an appRefreshQuery creates a log entry", async () => {
      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });
      await appRefreshQuery.save();
      await appRefreshQuery.destroy();
      const latestLog = await Log.findOne({
        where: { verb: "destroy", topic: "appRefreshQuery" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(latestLog).toBeTruthy();
    });

    test("updating a refreshQuery on a ready instance triggers an appRefreshQuery check", async () => {
      Run.truncate();
      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT MAX(updated_at) FROM users;",
        state: "ready",
      });
      await appRefreshQuery.save();

      const spy = jest.spyOn(AppRefreshQueryOps, "checkRefreshQueryValue");
      await appRefreshQuery.update({
        refreshQuery: "SELECT 'hi' AS name;",
      });
      expect(spy).toHaveBeenCalledWith(appRefreshQuery);

      spy.mockRestore();
    });

    test("schedules marked refreshEnabled are enqueued if a new 'value' is found from the query", async () => {
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
      const source2 = await Source.create({
        name: "test source 2",
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });

      await source2.setOptions({ table: "test table" });
      await source2.setMapping({ id: "userId" });
      await source2.update({ state: "ready" });

      //two schedules, only one has refreshEnabled
      const schedule = await helper.factories.schedule(source);
      await schedule.update({
        recurring: "true",
        recurringFrequency: 6000000,
      });
      const schedule2 = await helper.factories.schedule(source2);
      await schedule2.update({
        recurring: "true",
        recurringFrequency: 6000000,
        refreshEnabled: false,
      });

      //stop their initial runs
      const runsToStop = await Run.findAll({
        where: { creatorType: "schedule", state: "running" },
      });
      for (const run of runsToStop) run.stop();

      //make an appRefreshQuery
      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
        state: "ready",
      });
      await appRefreshQuery.save();

      //only one should have started a run
      const runs = await Run.findAll({
        where: { creatorType: "schedule", state: "running" },
      });

      expect(runs.length).toBe(1);
      expect(runs[0].creatorId).toBe(schedule.id);
    });

    test("an appRefreshQuery in the draft state will not run its query", async () => {
      const spy = jest.spyOn(AppRefreshQueryOps, "triggerSchedules");

      const appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
      });
      await appRefreshQuery.save();

      expect(spy).toHaveBeenCalledTimes(0);
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
