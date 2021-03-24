import { helper } from "@grouparoo/spec-helper";
import { Run, Log, Import, Export, plugin } from "../../../src";
import { api, task, specHelper } from "actionhero";

describe("tasks/sweeper", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  describe("sweeper", () => {
    beforeAll(async () => {
      await helper.factories.properties();
      await Log.truncate();
    });

    test("settings are loaded at boot", async () => {
      const setting = await plugin.readSetting(
        "core",
        "sweeper-delete-old-logs-days"
      );
      expect(setting.value).toBe("31");
    });

    test("it can be enqueued", async () => {
      await task.enqueue("sweeper", {});
      const found = await specHelper.findEnqueuedTasks("sweeper");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("it will delete old runs", async () => {
      await Run.truncate();
      await helper.factories.run();
      const oldRun = await helper.factories.run();

      oldRun.set({ createdAt: new Date(0) }, { raw: true });
      oldRun.changed("createdAt", true);
      await oldRun.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await Run.count();
      expect(count).toBe(2);

      await specHelper.runTask("sweeper", {});

      count = await Run.count();
      expect(count).toBe(1);
    });

    test("it will delete old imports", async () => {
      await helper.factories.log();
      const oldImport = await helper.factories.import();

      oldImport.set({ createdAt: new Date(0) }, { raw: true });
      oldImport.changed("createdAt", true);
      await oldImport.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await Import.count();
      expect(count).toBe(1);

      await specHelper.runTask("sweeper", {});

      count = await Import.count();
      expect(count).toBe(0);
    });

    test("it will delete old exports", async () => {
      const oldExport = await helper.factories.export();

      oldExport.set({ createdAt: new Date(0) }, { raw: true });
      oldExport.changed("createdAt", true);
      await oldExport.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await Export.count();
      expect(count).toBe(1);

      await specHelper.runTask("sweeper", {});

      count = await Export.count();
      expect(count).toBe(0);
    });

    test("it will delete old logs", async () => {
      await Log.truncate();
      await helper.factories.log();
      const oldLog = await helper.factories.log();

      oldLog.set({ createdAt: new Date(0) }, { raw: true });
      oldLog.changed("createdAt", true);
      await oldLog.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await Log.count();
      expect(count).toBe(2);

      await specHelper.runTask("sweeper", {});

      count = await Log.count();
      expect(count).toBe(1);
    });
  });
});
