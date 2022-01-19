import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Source,
  Schedule,
  App,
  Run,
  plugin,
  GrouparooModel,
} from "../../../src";

describe("tasks/schedule:run", () => {
  let model: GrouparooModel;
  let source: Source;
  let schedule: Schedule;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source);
    await schedule.update({ state: "ready" });
  });

  describe("schedule:run", () => {
    test("can be enqueued", async () => {
      await task.enqueue("schedule:run", { runId: "12345" }); // does not throw
    });

    test("does not throw if the run cannot be found", async () => {
      await specHelper.runTask("schedule:run", {
        runId: "missing",
      });
    });

    test("throws without a runId", async () => {
      await expect(
        task.enqueue("schedule:run", {
          scheduleId: "abc123",
        })
      ).rejects.toThrow(/runId is a required input/);
    });

    test("doesn't throw when scheduleId is **found** in DB", async () => {
      const run = await helper.factories.run(schedule);

      specHelper.runTask("schedule:run", {
        scheduleId: schedule.id,
        runId: run.id,
      }); // doesn't throw
    });

    test("doesn't throw when scheduleId is **not found** in DB", async () => {
      const run = await helper.factories.run(schedule);

      specHelper.runTask("schedule:run", {
        scheduleId: "abc123",
        runId: run.id,
      }); // doesn't throw
    });
  });

  describe("with custom plugin", () => {
    let app: App;
    let source: Source;

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            displayName: "test-template-app",
            options: [],
            methods: {
              test: async () => {
                return { success: true };
              },
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            displayName: "import-from-test-template-app",
            supportIncrementalSchedule: true,
            description: "a test app connection",
            apps: ["test-template-app"],
            direction: "import" as "import",
            options: [],
            methods: {
              scheduleOptions: async () => [
                {
                  key: "maxColumn",
                  required: true,
                  description: "the column to choose",
                  type: "list",
                  options: async () => {
                    return [
                      { key: "created_at", examples: [1, 2, 3] },
                      { key: "updated_at", examples: [1, 2, 3] },
                    ];
                  },
                },
              ],
              records: async () => {
                return {
                  highWaterMark: { updated_at: 200 },
                  sourceOffset: 100,
                  importsCount: 100,
                };
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app with real methods",
        type: "test-template-app",
        state: "ready",
      });

      source = await Source.create({
        name: "test source from plugin",
        type: "import-from-test-template-app",
        appId: app.id,
        modelId: model.id,
      });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    test("running a schedule will save the highWaterMark sourceOffset on the run", async () => {
      const schedule = await Schedule.create({
        name: "test plugin schedule",
        sourceId: source.id,
      });
      await schedule.setOptions({ maxColumn: "col" });
      await schedule.update({ state: "ready" });

      const run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });

      await specHelper.runTask("schedule:run", {
        scheduleId: schedule.id,
        runId: run.id,
      });

      await run.reload();
      expect(run.highWaterMark).toEqual({ updated_at: 200 });
      expect(run.sourceOffset).toBe("100");
    });
  });
});
