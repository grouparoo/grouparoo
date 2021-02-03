import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Source, Schedule } from "../../../src";

describe("tasks/schedule:run", () => {
  let source: Source;
  let schedule: Schedule;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    await helper.factories.properties();
    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source);
    await schedule.update({ state: "ready" });
  });

  describe("schedule:run", () => {
    test("can be enqueued", async () => {
      await task.enqueue("schedule:run", {
        scheduleId: "abc123",
        runId: "abc123",
      });
      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("throws without a scheduleId", async () => {
      await expect(
        task.enqueue("schedule:run", {
          runId: "abc123",
        })
      ).rejects.toThrow(/scheduleId is a required input/);
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
      specHelper.runTask("schedule:run", {
        scheduleId: "abc123",
        runId: "abc123",
      }); // doesn't throw
    });
  });
});
