import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Run, Setting } from "../../..";
import { Op } from "sequelize";

describe("tasks/run:recurringInternalRun", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("run:recurringInternalRun", () => {
    let setting: Setting;

    beforeAll(async () => {
      setting = await Setting.findOne({
        where: { key: "runs-recurring-internal-run-frequency-hours" },
      });
    });

    beforeEach(async () => {
      await setting.update({ value: setting.defaultValue });
      await Run.truncate();
    });

    test("the task will create a run when the frequency is set and no previous runs exist", async () => {
      await setting.update({ value: 1 });
      await specHelper.runTask("run:recurringInternalRun", {});
      const run = await Run.findOne({
        where: { creatorType: "task" },
      });
      expect(run.creatorGuid).toBe("run:recurringInternalRun");
    });

    test("the task will not create a run when the frequency is set and a previous run exists (too soon)", async () => {
      await setting.update({ value: 1 });
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
      await setting.update({ value: 1 });
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
      await setting.update({ value: 1 });
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
