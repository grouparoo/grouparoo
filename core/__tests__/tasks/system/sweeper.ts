import { helper } from "@grouparoo/spec-helper";
import {
  Run,
  Log,
  Import,
  Export,
  ExportProcessor,
  plugin,
  Session,
  OAuthRequest,
} from "../../../src";
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
      expect(setting.value).toBe("7");
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

    test("it will delete old exports but not the newest one for each record or all exports if none is complete", async () => {
      await Export.truncate();
      const destination = await helper.factories.destination();

      const recordA = await helper.factories.record();
      const oldExportA = await helper.factories.export(recordA, destination);
      const newerExportA = await helper.factories.export(recordA, destination);
      const recordB = await helper.factories.record();
      const newerExportB = await helper.factories.export(recordB, destination);
      const recordC = await helper.factories.record();
      const oldExportC = await helper.factories.export(recordC, destination);
      const oldExportD = await helper.factories.export(recordC, destination);

      await oldExportA.update({ state: "complete" });
      oldExportA.set({ createdAt: new Date(0) }, { raw: true });
      oldExportA.changed("createdAt", true);
      await oldExportA.save({
        silent: true,
        fields: ["createdAt"],
      });

      await newerExportA.update({ state: "complete" });
      newerExportA.set({ createdAt: new Date(1000 * 60 * 60) }, { raw: true });
      newerExportA.changed("createdAt", true);
      await newerExportA.save({
        silent: true,
        fields: ["createdAt"],
      });

      await newerExportB.update({ state: "canceled" });
      newerExportB.set({ createdAt: new Date() }, { raw: true });
      newerExportB.changed("createdAt", true);
      await newerExportB.save({
        silent: true,
        fields: ["createdAt"],
      });

      await oldExportC.update({ state: "failed" });
      oldExportC.set({ createdAt: new Date(1000 * 60 * 60) }, { raw: true });
      oldExportC.changed("createdAt", true);
      await oldExportC.save({
        silent: true,
        fields: ["createdAt"],
      });

      await oldExportD.update({ state: "canceled" });
      oldExportD.set({ createdAt: new Date(1000 * 60 * 60) }, { raw: true });
      oldExportD.changed("createdAt", true);
      await oldExportD.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await Export.count();
      expect(count).toBe(5);

      await specHelper.runTask("sweeper", {});

      await newerExportA.reload();
      await newerExportB.reload();
      exports = await Export.findAll();
      expect(exports.length).toBe(4);
      expect(exports.map((e) => e.id).sort()).toEqual(
        [newerExportA.id, newerExportB.id, oldExportC.id, oldExportD.id].sort()
      );
    });

    test("it will delete export processors without exports", async () => {
      await ExportProcessor.truncate();
      await Export.truncate();

      await helper.factories.exportProcessor(null, { state: "complete" });
      await helper.factories.exportProcessor(null, { state: "failed" });
      const pendingProcessor = await helper.factories.exportProcessor(null, {
        state: "pending",
      });

      const completeWithExports = await helper.factories.exportProcessor(null, {
        state: "complete",
      });
      await helper.factories.export(null, null, {
        exportProcessorId: completeWithExports.id,
      });

      const failedWithExports = await helper.factories.exportProcessor(null, {
        state: "failed",
      });
      await helper.factories.export(null, null, {
        exportProcessorId: failedWithExports.id,
      });

      await specHelper.runTask("sweeper", {});

      const exportProcessors = await ExportProcessor.findAll();
      expect(exportProcessors.length).toBe(3);
      expect(exportProcessors.map((e) => e.id).sort()).toEqual(
        [
          pendingProcessor.id,
          completeWithExports.id,
          failedWithExports.id,
        ].sort()
      );
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

    test("it will delete old sessions", async () => {
      await Session.truncate();
      const session = await Session.create({
        teamMemberId: "foo",
        fingerprint: "foo",
        expiresAt: new Date().getTime(),
      });

      session.set({ createdAt: new Date(0) }, { raw: true });
      session.changed("createdAt", true);
      await session.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await Session.count();
      expect(count).toBe(1);

      await specHelper.runTask("sweeper", {});

      count = await Session.count();
      expect(count).toBe(0);
    });

    test("it will delete old oAuthRequests", async () => {
      await OAuthRequest.truncate();
      const oAuthRequest = await OAuthRequest.create({
        provider: "github",
        type: "user",
        token: "foo",
      });

      oAuthRequest.set({ createdAt: new Date(0) }, { raw: true });
      oAuthRequest.changed("createdAt", true);
      await oAuthRequest.save({
        silent: true,
        fields: ["createdAt"],
      });

      let count = await OAuthRequest.count();
      expect(count).toBe(1);

      await specHelper.runTask("sweeper", {});

      count = await OAuthRequest.count();
      expect(count).toBe(0);
    });
  });
});
