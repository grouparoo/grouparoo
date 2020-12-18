import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Run } from "../../../src/models/Run";
import { Setting } from "../../../src/models/Setting";
import { Op } from "sequelize";

let actionhero;

describe("tasks/run:recurringInternalRun", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.properties();
  }, helper.setupTime);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("run:recurringInternalRun", () => {
    let setting: Setting;

    beforeAll(async () => {
      setting = await Setting.findOne({
        where: { key: "runs-recurring-internal-run-frequency" },
      });
    });

    beforeEach(async () => {
      await setting.update({ value: setting.defaultValue });
      await Run.truncate();
    });

    test("the task will create a run when the frequency is set and no previous runs exist", async () => {
      await setting.update({ value: 1000 * 60 * 10 });
      await specHelper.runTask("run:recurringInternalRun", {});
      const run = await Run.findOne({
        where: { creatorType: "task" },
      });
      expect(run.creatorGuid).toBe("run:recurringInternalRun");
    });

    test("the task will not create a run when the frequency is set and a previous run exists (too soon)", async () => {
      await setting.update({ value: 1000 * 60 * 10 });
      const firstRun = await Run.create({
        creatorType: "task",
        creatorGuid: "run:recurringInternalRun",
        state: "complete",
      });
      await firstRun.reload();
      await specHelper.runTask("run:recurringInternalRun", {});
      const secondRun = await Run.findOne({
        where: { creatorType: "task", guid: { [Op.ne]: firstRun.guid } },
      });

      expect(secondRun).toBeNull();
    });

    test("the task will not create a run when the frequency is set and a previous run exists (currently running and is old)", async () => {
      await setting.update({ value: 1000 * 60 * 10 });
      const firstRun = await Run.create({
        creatorType: "task",
        creatorGuid: "run:recurringInternalRun",
        state: "running",
        createdAt: new Date("2019-01-01"),
      });
      await firstRun.reload();
      await specHelper.runTask("run:recurringInternalRun", {});
      const secondRun = await Run.findOne({
        where: { creatorType: "task", guid: { [Op.ne]: firstRun.guid } },
      });

      expect(secondRun).toBeNull();
    });

    test("the task will create a run when the frequency is set and a previous run exists (old enough to run again)", async () => {
      await setting.update({ value: 1000 * 60 * 10 });
      const firstRun = await Run.create({
        creatorType: "task",
        creatorGuid: "run:recurringInternalRun",
        state: "complete",
        createdAt: new Date("2019-01-01"),
      });
      await firstRun.reload();
      await specHelper.runTask("run:recurringInternalRun", {});
      const secondRun = await Run.findOne({
        where: { creatorType: "task", guid: { [Op.ne]: firstRun.guid } },
      });

      expect(secondRun.creatorGuid).toBe("run:recurringInternalRun");
    });

    test("the task will not create a run when the frequency is zero", async () => {
      await setting.update({ value: 0 });
      await specHelper.runTask("run:recurringInternalRun", {});
      const run = await Run.findOne({
        where: { creatorType: "task" },
      });

      expect(run).toBeNull();
    });
  });
});
