import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { plugin, Group, Run } from "../../../src";

let group: Group;

describe("tasks/group:updateCalculatedGroups", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeEach(async () => await group.reload());

  describe("profile:updateCalculatedGroups", () => {
    beforeAll(async () => {
      group = await helper.factories.group();
      group.type = "calculated";
      await group.save();
    });

    beforeEach(async () => {
      await Run.truncate();
    });

    test("the setting is present", async () => {
      const setting = await plugin.readSetting(
        "core",
        "groups-calculation-delay-minutes"
      );
      expect(setting.value).toBe("60");
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

    test("groups already calculating will not be calculated again", async () => {
      await group.update({ state: "updating", calculatedAt: new Date(0) }); // ~1970 or so
      await specHelper.runTask("group:updateCalculatedGroups", {});

      const runs = await Run.findAll({ where: { creatorId: group.id } });
      expect(runs.length).toBe(0);
    });
  });
});
