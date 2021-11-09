import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Source,
  Schedule,
  App,
  Run,
  GrouparooModel,
  AppRefreshQuery,
} from "../../../src";

describe("tasks/appRefreshQuery:query", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Run.truncate();
  });

  describe("appRefreshQuery:query", () => {
    let model: GrouparooModel;
    let app: App;
    let source: Source;
    let schedule: Schedule;
    let appRefreshQuery: AppRefreshQuery;

    beforeAll(async () => {
      ({ model } = await helper.factories.properties());
      app = await helper.factories.app(model);
      source = await helper.factories.source(app);
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      schedule = await helper.factories.schedule(source);
      await schedule.update({ state: "ready" });

      appRefreshQuery = new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT 'hi' AS name;",
        state: "ready",
      });
      await appRefreshQuery.save();
    });

    test("can be enqueued and run", async () => {
      await task.enqueue("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      }); //does not throw

      await specHelper.runTask("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      });

      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(1);
    });

    test("updates value and timestamps if value is updated", async () => {
      await task.enqueue("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      }); //does not throw

      await specHelper.runTask("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      });

      await appRefreshQuery.reload();

      //test plugin always returns a timestamp
      expect(appRefreshQuery.value.length).toBe(13);
      expect(appRefreshQuery.lastChangedAt).toBeTruthy();
      expect(appRefreshQuery.lastConfirmedAt).toBeTruthy();
    });

    test("does not throw if no appRefreshQueries found", async () => {
      appRefreshQuery.destroy();

      await task.enqueue("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      }); //does not throw

      //also does not enqueue any runs
      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(0);
    });

    test("does not throw if no app or schedules ready for appRefreshQuery", async () => {
      const anotherApp = await helper.factories.app();
      await anotherApp.update({ state: "deleted" });

      new AppRefreshQuery({
        appId: anotherApp.id,
        refreshQuery: "SELECT 'hi' AS name;",
        state: "ready",
      });
      await appRefreshQuery.save();

      await task.enqueue("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      }); //does not throw

      //also does not enqueue any runs
      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(0);
    });

    test("schedules marked 'refreshEnabled=false' are not triggered", async () => {
      await schedule.update({ refreshEnabled: false });

      await specHelper.runTask("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      });

      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(0);
    });

    test("schedules marked 'refreshEnabled=true' are triggered", async () => {
      await schedule.update({ refreshEnabled: true });

      await task.enqueue("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      }); //does not throw
      await specHelper.runTask("appRefreshQuery:query", {
        appRefreshQueryId: appRefreshQuery.id,
      });

      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(0);
    });
  });
});
