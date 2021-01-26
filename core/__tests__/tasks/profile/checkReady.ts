import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { plugin } from "../../../src";

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

      const toad = await helper.factories.profile();
      await toad.import();
      await toad.update({ state: "ready" });

      await specHelper.runTask("profiles:checkReady", {});

      const found = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );

      await mario.reload();
      await luigi.reload();

      expect(mario.state).toBe("ready");
      expect(luigi.state).toBe("ready");

      expect(found.map((t) => t.args[0].profileGuid).sort()).toEqual(
        [mario.guid, luigi.guid].sort() // no toad
      );

      await mario.destroy();
      await luigi.destroy();
      await toad.destroy();
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
