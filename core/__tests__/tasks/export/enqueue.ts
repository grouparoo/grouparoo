import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper, utils } from "actionhero";
import { GrouparooRecord, Destination, Export, Run } from "../../../src";

describe("tasks/export:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  test("can be enqueued", async () => {
    await task.enqueue("export:enqueue", {});
    const found = await specHelper.findEnqueuedTasks("export:enqueue");
    expect(found.length).toEqual(1);
  });

  describe("with exports", () => {
    let run: Run,
      record: GrouparooRecord,
      destination: Destination,
      deletedDestination: Destination;
    let pendingExportA: Export,
      pendingExportB: Export,
      pendingExportC: Export,
      recentStartedExport: Export,
      stuckStartedExport: Export,
      newCompleteExport: Export,
      oldCompleteExport: Export,
      newErrorExportNow: Export,
      newErrorExportTooSoon: Export,
      oldErrorExport: Export,
      infoExport: Export;

    beforeEach(async () => {
      run = await helper.factories.run(null, { state: "running" });
      record = await helper.factories.record();
      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });

      const deletedApp = await helper.factories.app({ state: "deleted" });
      deletedDestination = await helper.factories.destination(deletedApp, {
        type: "test-plugin-export-batch",
      });

      await deletedDestination.update({ state: "deleted" });
      await deletedApp.update({ state: "deleted" });

      pendingExportA = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        state: "pending",
      });

      pendingExportB = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        state: "pending",
      });

      pendingExportC = await Export.create({
        recordId: record.id,
        destinationId: deletedDestination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        state: "pending",
      });

      recentStartedExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        startedAt: new Date(),
        state: "pending",
      });

      stuckStartedExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(0),
        startedAt: new Date(0),
        state: "pending",
      });

      newCompleteExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        startedAt: new Date(),
        completedAt: new Date(),
        state: "complete",
      });

      oldCompleteExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(0),
        startedAt: new Date(1),
        completedAt: new Date(2),
        state: "complete",
      });

      newErrorExportNow = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "pending",
        retryCount: 1,
      });

      newErrorExportTooSoon = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        startedAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "pending",
        retryCount: 1,
      });

      oldErrorExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(0),
        startedAt: new Date(1),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "failed",
        retryCount: 1,
      });

      infoExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "info",
        state: "pending",
        retryCount: 1,
      });
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await utils.sleep(1001);
    });

    afterAll(async () => {
      await record.destroy();
      await destination.destroy();
      await deletedDestination.destroy();
    });

    test("exports not yet exported or with an error will be enqueued", async () => {
      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(2);
      const exportIds = foundTasks[0].args[0].exportIds;

      expect(exportIds).toContain(pendingExportA.id);
      expect(exportIds).toContain(pendingExportB.id);
      expect(exportIds).toContain(stuckStartedExport.id);
      expect(exportIds).toContain(newErrorExportNow.id);
      expect(exportIds).toContain(infoExport.id);

      expect(exportIds).not.toContain(recentStartedExport.id);
      expect(exportIds).not.toContain(newCompleteExport.id);
      expect(exportIds).not.toContain(oldCompleteExport.id);
      expect(exportIds).not.toContain(newErrorExportTooSoon.id);
      expect(exportIds).not.toContain(oldErrorExport.id);
    });

    test("pending exports for deleted destinations/apps will be enqueued", async () => {
      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(2);
      const exportIds = foundTasks[1].args[0].exportIds;
      expect(exportIds).toContain(pendingExportC.id);
    });

    test("checking again will find no results as the exports should now have a startedAt", async () => {
      await specHelper.runTask("export:enqueue", {}); // call first time
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("export:enqueue", {}); // call second time

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);
    });
  });
});
