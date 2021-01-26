import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Source, Schedule } from "../../..";

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
        scheduleGuid: "abc123",
        runGuid: "abc123",
      });
      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("throws without a scheduleGuid", async () => {
      await expect(
        task.enqueue("schedule:run", {
          runGuid: "abc123",
        })
      ).rejects.toThrow(/scheduleGuid is a required input/);
    });

    test("throws without a runGuid", async () => {
      await expect(
        task.enqueue("schedule:run", {
          scheduleGuid: "abc123",
        })
      ).rejects.toThrow(/runGuid is a required input/);
    });

    test("doesn't throw when scheduleGuid is **found** in DB", async () => {
      const run = await helper.factories.run(schedule);

      specHelper.runTask("schedule:run", {
        scheduleGuid: schedule.guid,
        runGuid: run.guid,
      }); // doesn't throw
    });

    test("doesn't throw when scheduleGuid is **not found** in DB", async () => {
      specHelper.runTask("schedule:run", {
        scheduleGuid: "abc123",
        runGuid: "abc123",
      }); // doesn't throw
    });
  });
});
