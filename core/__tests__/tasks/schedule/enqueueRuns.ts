import { helper } from "@grouparoo/spec-helper";
import * as actionhero from "actionhero";
import { api, task, specHelper } from "actionhero";
import { Schedule, Run } from "../../../src";
import { Op } from "sequelize";

describe("tasks/schedules:enqueueRuns", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Run.truncate();
  });

  describe("schedules:enqueueRuns", () => {
    let schedule: Schedule;

    beforeAll(async () => {
      await helper.factories.properties();
      schedule = await helper.factories.schedule();
    });

    beforeEach(async () => {
      await Run.truncate();
    });

    test("can be enqueued", async () => {
      await task.enqueue("schedules:enqueueRuns", {}); // does nto throw
    });

    describe("default behavior", () => {
      test("it will not enqueue a run for a non-recurring schedule", async () => {
        await schedule.update({
          recurring: false,
          recurringFrequency: 0,
        });

        await specHelper.runTask("schedules:enqueueRuns", {});

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(0);
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

        await specHelper.runTask("schedules:enqueueRuns", {});

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(0);

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

        await specHelper.runTask("schedules:enqueueRuns", {});

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(1);
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

        await specHelper.runTask("schedules:enqueueRuns", {});

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(1);
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

        await specHelper.runTask("schedules:enqueueRuns", {});

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(0);
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

        await specHelper.runTask("schedules:enqueueRuns", {});

        const runs = await Run.findAll({
          where: { state: "running", id: { [Op.ne]: run.id } },
        });
        expect(runs.length).toBe(0);
      });
    });

    describe("custom inputs", () => {
      test("it can enqueue a run for a non-recurring schedule (runIfNotRecurring)", async () => {
        await schedule.update({
          recurring: false,
          recurringFrequency: 0,
        });

        await specHelper.runTask("schedules:enqueueRuns", {
          runIfNotRecurring: true,
        });

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(1);
      });

      test("it will not enqueue a run for a recurring schedule that ran too recently (ignoreDeltas)", async () => {
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

        await specHelper.runTask("schedules:enqueueRuns", {
          ignoreDeltas: true,
        });

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(1);
      });

      test("it can enqueue runs for specific schedules", async () => {
        const scheduleToRun = await helper.factories.schedule();
        await scheduleToRun.update({
          recurring: true,
          recurringFrequency: 60 * 1000,
        });

        await scheduleToRun.update({ state: "ready" });
        expect(scheduleToRun.state).toBe("ready");

        const scheduleToIgnore = await helper.factories.schedule();
        await scheduleToIgnore.update({
          recurring: true,
          recurringFrequency: 60 * 1000,
        });

        await scheduleToIgnore.update({ state: "ready" });
        expect(scheduleToIgnore.state).toBe("ready");

        await Run.truncate(); // clear initial runs

        await specHelper.runTask("schedules:enqueueRuns", {
          scheduleIds: [scheduleToRun.id],
        });

        const runs = await Run.findAll({ where: { state: "running" } });
        expect(runs.length).toBe(1);
        expect(runs[0].creatorType).toBe("schedule");
        expect(runs[0].creatorId).toBe(scheduleToRun.id);

        await scheduleToRun.destroy();
        await scheduleToIgnore.destroy();
      });
    });

    describe("in cli:run mode", () => {
      let logMsgs: string[] = [];
      let logSpy: jest.SpyInstance;

      beforeAll(async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:run";
      });

      afterAll(() => {
        delete process.env.GROUPAROO_RUN_MODE;
      });

      beforeEach(() => {
        logMsgs = [];
        logSpy = jest
          .spyOn(actionhero, "log")
          .mockImplementation((message) => logMsgs.push(message));
      });

      afterEach(async () => {
        logSpy.mockRestore();
      });

      test("it will log the enqueued schedules", async () => {
        await specHelper.runTask("schedules:enqueueRuns", {});
        expect(logMsgs.join(" ")).toContain(
          `Enqueued runs for Schedules: ${schedule.name} (${schedule.id})`
        );
      });
    });
  });
});
