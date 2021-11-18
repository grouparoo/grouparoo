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

describe("tasks/appRefreshQueries:check", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {});

  describe("appRefreshQueries:check", () => {
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
      await task.enqueue("appRefreshQueries:check", {}); //does not throw

      await specHelper.runTask("appRefreshQueries:check", {});

      const found = await specHelper.findEnqueuedTasks(
        "appRefreshQueries:check"
      );
      expect(found.length).toEqual(1);
    });

    test("enqueues appRefreshQuery:run", async () => {
      await task.enqueue("appRefreshQueries:check", {}); //does not throw

      await specHelper.runTask("appRefreshQueries:check", {});

      const foundChildren = await specHelper.findEnqueuedTasks(
        "appRefreshQuery:run"
      );
      expect(foundChildren.length).toEqual(1);
    });

    test("does not throw if no appRefreshQueries found", async () => {
      appRefreshQuery.destroy();

      await task.enqueue("appRefreshQueries:check", {}); //does not throw

      //also does not enqueue any runs
      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(0);
    });

    test("does not throw if no app or schedules ready for appRefreshQueries", async () => {
      const anotherApp = await helper.factories.app();
      await anotherApp.update({ state: "deleted" });

      new AppRefreshQuery({
        appId: app.id,
        refreshQuery: "SELECT 'hi' AS name;",
        state: "ready",
      });
      await appRefreshQuery.save();

      await task.enqueue("appRefreshQueries:check", {}); //does not throw

      //also does not enqueue any runs
      const enqueuedRuns = await Run.findAll({
        where: { creatorId: schedule.id, state: "running" },
      });
      expect(enqueuedRuns.length).toBe(0);
    });
  });
});
