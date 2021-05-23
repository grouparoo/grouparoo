import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { plugin, ProfileProperty } from "../../../src";

describe("tasks/profile:checkReady", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  afterEach(async () => {
    await plugin.updateSetting("core", "runs-profile-batch-size", 100);
  });

  describe("profiles:checkReady", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profiles:checkReady", {});
      const found = await specHelper.findEnqueuedTasks("profiles:checkReady");
      expect(found.length).toEqual(1);
    });

    test("it will find profiles which are not ready but have all properties ready", async () => {
      const mario = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "pending" });

      const luigi = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "pending" });

      // toad is ready already
      const toad = await helper.factories.profile();
      await toad.import();
      await toad.update({ state: "ready" });

      // peach has 1 pending profile property
      const peach = await helper.factories.profile();
      await peach.import();
      const peachProperty = await ProfileProperty.findOne({
        where: { profileId: peach.id },
      });
      await peachProperty.update({ state: "pending" });
      await peach.update({ state: "pending" });

      // bowser has all pending profile properties
      const bowser = await helper.factories.profile();
      await bowser.import();
      const bowserProperties = await ProfileProperty.findAll({
        where: { profileId: bowser.id },
      });
      for (const p of bowserProperties) {
        await p.update({ state: "pending" });
      }
      await bowser.update({ state: "pending" });

      await specHelper.runTask("profiles:checkReady", {});

      const found = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );

      await mario.reload();
      await luigi.reload();
      await toad.reload();
      await peach.reload();
      await bowser.reload();

      expect(mario.state).toBe("ready");
      expect(luigi.state).toBe("ready");
      expect(toad.state).toBe("ready");
      expect(peach.state).toBe("pending");
      expect(bowser.state).toBe("pending");

      expect(found.map((t) => t.args[0].profileId).sort()).toEqual(
        [mario.id, luigi.id].sort() // no toad, no peach, no bowser
      );

      await mario.destroy();
      await luigi.destroy();
      await toad.destroy();
      await peach.destroy();
      await bowser.destroy();
    });

    test("batch size can be configured with a setting", async () => {
      await plugin.updateSetting("core", "runs-profile-batch-size", 1);

      const mario = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "pending" });

      const luigi = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "pending" });

      await specHelper.runTask("profiles:checkReady", {});

      const found = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );
      expect(found.length).toBe(1);

      await mario.reload();
      await luigi.reload();

      expect([mario.state, luigi.state].sort()).toEqual(["pending", "ready"]);
    });
  });
});
