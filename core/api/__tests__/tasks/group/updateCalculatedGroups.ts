import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { plugin } from "./../../../src/modules/plugin";

let actionhero;
let group;

describe("tasks/group:updateCalculatedGroups", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profile:updateCalculatedGroups", () => {
    beforeAll(async () => {
      group = await helper.factories.group();
      group.type = "calculated";
      await group.save();
    });

    test("the setting is present", async () => {
      const setting = await plugin.readSetting(
        "core",
        "groups-calculation-delay-minutes"
      );
      expect(setting.value).toBe("60");
    });

    test("running it will enqueue an update for groups that have never been calculated", async () => {
      group.calculatedAt = null;
      await group.save();

      await specHelper.runTask("group:updateCalculatedGroups", {});
      const enqueuedTasks = await specHelper.findEnqueuedTasks("group:run");

      expect(enqueuedTasks.length).toBe(1);
    });

    test("running it will enqueue an update for groups that were last recalculated in the far past", async () => {
      group.calculatedAt = new Date(0); // ~1970 or so
      await group.save();

      await specHelper.runTask("group:updateCalculatedGroups", {});
      const enqueuedTasks = await specHelper.findEnqueuedTasks("group:run");

      expect(enqueuedTasks.length).toBe(1);
    });

    test("running it will not enqueue an update for groups that were last recalculated recently", async () => {
      group.calculatedAt = new Date(); // now
      await group.save();

      await specHelper.runTask("group:updateCalculatedGroups", {});
      const enqueuedTasks = await specHelper.findEnqueuedTasks("group:run");

      expect(enqueuedTasks.length).toBe(0);
    });
  });
});
