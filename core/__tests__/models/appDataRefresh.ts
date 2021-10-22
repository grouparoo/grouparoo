import { helper } from "@grouparoo/spec-helper";
import { App, AppDataRefresh, Log, Run } from "../../src";
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

    test("updating a refreshQuery on a ready instance triggers an appDataRefresh check", async () => {
      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "test query",
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

    test("associated schedules are run if a new value is saved", async () => {
      const source = await helper.factories.source(app);
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      const schedule = await helper.factories.schedule(source);

      const appDataRefresh = new AppDataRefresh({
        appId: app.id,
        refreshQuery: "SELECT * FROM test;",
      });
      await appDataRefresh.save();
      console.info(appDataRefresh);

      let runs = await Run.findAll({
        where: { state: "running", creatorId: schedule.id },
      });
      console.info(runs);
      expect(runs.length).toBe(0);

      const spy = jest.spyOn(AppDataRefreshOps, "triggerSchedules");
      await appDataRefresh.update({
        refreshQuery: "SELECT 'hi' AS name;",
        state: "ready",
      });
      expect(spy).toHaveBeenCalledWith(appDataRefresh);

      runs = await Run.findAll({
        where: { state: "running", creatorId: schedule.id },
      });
      expect(runs.length).toBe(1);
    });
    test.todo(
      "an appDataRefresh in the draft state will not trigger schedules"
    );
    test.todo("deleting an appDataRefresh creates a log entry");
  });
});
