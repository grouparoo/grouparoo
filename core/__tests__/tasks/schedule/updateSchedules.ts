import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Schedule, Run } from "../../../src";

describe("tasks/schedule:updateSchedules", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Run.truncate();
  });

  describe("schedule:run", () => {
    let schedule: Schedule;

    beforeAll(async () => {
      await helper.factories.properties();
      schedule = await helper.factories.schedule();
    });

    test("can be enqueued", async () => {
      await task.enqueue("schedule:updateSchedules", {});
      const found = await specHelper.findEnqueuedTasks(
        "schedule:updateSchedules"
      );
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("it will not enqueue a run for a non-recurring schedule", async () => {
      await schedule.update({
        recurring: false,
        recurringFrequency: 0,
      });

      await specHelper.runTask("schedule:updateSchedules", {});

      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toBe(0);
    });

    test("it will not enqueue a run for a recurring schedule that has never run but is a draft", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "users" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const schedule = await Schedule.create({
        sourceId: source.id,
        name: "tmp",
        recurring: true,
        recurringFrequency: 60 * 1000,
      });
      expect(schedule.state).toBe("draft");

      await specHelper.runTask("schedule:updateSchedules", {});

      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toBe(0);

      await schedule.destroy();
      await source.destroy();
    });

    test("it will enqueue a run for a recurring schedule that has never run and is ready", async () => {
      await schedule.update({
        recurring: true,
        recurringFrequency: 60 * 1000,
      });

      await schedule.update({ state: "ready" });
      expect(schedule.state).toBe("ready");

      await specHelper.runTask("schedule:updateSchedules", {});

      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toBe(1);
    });

    test("it will enqueue a run for a recurring schedule that ran in the past", async () => {
      await schedule.update({
        recurring: true,
        recurringFrequency: 60 * 1000,
      });

      const run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "complete",
        completedAt: new Date(0),
      });

      await specHelper.runTask("schedule:updateSchedules", {});

      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toBe(1);

      await run.destroy();
    });

    test("it will not enqueue a run for a recurring schedule that ran too recently", async () => {
      await schedule.update({
        recurring: true,
        recurringFrequency: 60 * 1000,
      });

      const run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "complete",
        completedAt: new Date(),
      });

      await specHelper.runTask("schedule:updateSchedules", {});

      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toBe(0);

      await run.destroy();
    });

    test("it will not enqueue a run for a recurring schedule that is running", async () => {
      await schedule.update({
        recurring: true,
        recurringFrequency: 60 * 1000,
      });

      const run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });

      await specHelper.runTask("schedule:updateSchedules", {});

      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toBe(0);

      await run.destroy();
    });
  });
});
