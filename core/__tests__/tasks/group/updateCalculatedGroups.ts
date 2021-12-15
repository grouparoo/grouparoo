import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { plugin, Group, Run, Property } from "../../../src";
import { Op } from "sequelize";

let group: Group;

describe("tasks/group:updateCalculatedGroups", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeEach(async () => await group.reload());

  describe("record:updateCalculatedGroups", () => {
    beforeAll(async () => {
      group = await helper.factories.group();
    });

    beforeEach(async () => {
      await Run.truncate();
    });

    test("the setting is present", async () => {
      const setting = await plugin.readSetting(
        "core",
        "groups-calculation-delay-minutes"
      );
      expect(setting.value).toBe("1440");
    });

    describe("calculated groups with relative rules", () => {
      beforeAll(async () => {
        await group.update({ type: "calculated" });
        await group.setRules([
          {
            key: "lastLoginAt",
            operation: { op: "gt" },
            relativeMatchDirection: "subtract",
            relativeMatchNumber: 1,
            relativeMatchUnit: "days",
          },
        ]);
      });

      test("running it will enqueue an update for groups that have never been calculated", async () => {
        await group.update({ state: "ready", calculatedAt: null });
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({ where: { creatorId: group.id } });
        expect(runs.length).toBe(1);
      });

      test("running it will enqueue an update for groups that were last recalculated in the far past", async () => {
        await group.update({ state: "ready", calculatedAt: new Date(0) }); // ~1970 or so
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({ where: { creatorId: group.id } });
        expect(runs.length).toBe(1);
      });

      test("running it will not enqueue an update for groups that were last recalculated recently", async () => {
        await group.update({ state: "ready", calculatedAt: new Date() }); // now
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({ where: { creatorId: group.id } });
        expect(runs.length).toBe(0);
      });

      test("groups already calculating will not be calculated again if they have been checked recently", async () => {
        await group.update({ state: "updating", calculatedAt: new Date() }); // now
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({ where: { creatorId: group.id } });
        expect(runs.length).toBe(0);
      });

      test("groups already calculating will not be calculated again if it is time but they have a running run (old)", async () => {
        await group.update({ state: "updating", calculatedAt: new Date(0) }); // ~1970 or so
        const runningRun = await Run.create({
          creatorId: group.id,
          creatorType: "group",
          state: "running",
        });
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({
          where: { creatorId: group.id, id: { [Op.ne]: runningRun.id } },
        });
        expect(runs.length).toBe(0);
      });

      test("groups already calculating will not be calculated again if it is time but they have a running run (null)", async () => {
        await group.update({ state: "updating", calculatedAt: null }); // ~1970 or so
        const runningRun = await Run.create({
          creatorId: group.id,
          creatorType: "group",
          state: "running",
        });
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({
          where: { creatorId: group.id, id: { [Op.ne]: runningRun.id } },
        });
        expect(runs.length).toBe(0);
      });

      test("groups already calculating will be calculated again if it is time and they don't have a related run (old)", async () => {
        await group.update({ state: "updating", calculatedAt: new Date(0) }); // ~1970 or so
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({
          where: { creatorId: group.id },
        });
        expect(runs.length).toBe(1);
      });

      test("groups already calculating will be calculated again if it is time and they don't have a related run (null)", async () => {
        await group.update({ state: "updating", calculatedAt: null }); // null
        await specHelper.runTask("group:updateCalculatedGroups", {});

        const runs = await Run.findAll({
          where: { creatorId: group.id },
        });
        expect(runs.length).toBe(1);
      });
    });

    describe("calculated groups without relative rules", () => {
      beforeAll(async () => {
        await group.update({ type: "calculated" });
        await group.setRules([
          {
            key: "ltv",
            operation: { op: "gt" },
            match: "3",
          },
        ]);
      });

      test("running it will not enqueue an update for groups that have never been calculated", async () => {
        await group.update({ state: "ready", calculatedAt: null });
        await specHelper.runTask("group:updateCalculatedGroups", {});
        const runs = await Run.findAll({ where: { creatorId: group.id } });
        expect(runs.length).toBe(0);
      });

      test("running it will not enqueue an update for groups that were last recalculated in the far past", async () => {
        await group.update({ state: "ready", calculatedAt: new Date(0) }); // ~1970 or so
        await specHelper.runTask("group:updateCalculatedGroups", {});
        const runs = await Run.findAll({ where: { creatorId: group.id } });
        expect(runs.length).toBe(0);
      });
    });
  });
});
