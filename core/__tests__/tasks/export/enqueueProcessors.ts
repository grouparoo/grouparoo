import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper, utils } from "actionhero";
import { Destination, ExportProcessor } from "../../../src";

describe("tasks/export:enqueueProcessors", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("can be enqueued", async () => {
    await task.enqueue("export:enqueueProcessors", {});
    const found = await specHelper.findEnqueuedTasks(
      "export:enqueueProcessors"
    );
    expect(found.length).toEqual(1);
  });

  describe("with export processors", () => {
    let destination: Destination;
    let pendingProcessorA: ExportProcessor,
      pendingProcessorB: ExportProcessor,
      recentStartedProcessor: ExportProcessor,
      stuckStartedProcessor: ExportProcessor,
      newCompleteProcessor: ExportProcessor,
      oldCompleteProcessor: ExportProcessor,
      erroredProcessor: ExportProcessor,
      newlyErroredProcessor: ExportProcessor,
      oldErroredProcessor: ExportProcessor,
      infoErroredProcessor: ExportProcessor;

    beforeEach(async () => {
      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });

      pendingProcessorA = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        state: "pending",
      });

      pendingProcessorB = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        state: "pending",
      });

      recentStartedProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        startedAt: new Date(),
        state: "pending",
      });

      stuckStartedProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(0),
        startedAt: new Date(0),
        state: "pending",
      });

      newCompleteProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        startedAt: new Date(),
        completedAt: new Date(),
        state: "complete",
      });

      oldCompleteProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(0),
        startedAt: new Date(1),
        completedAt: new Date(2),
        state: "complete",
      });

      erroredProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "pending",
        retryCount: 1,
      });

      newlyErroredProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        startedAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "pending",
        retryCount: 1,
      });

      oldErroredProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(0),
        startedAt: new Date(1),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "failed",
        retryCount: 1,
      });

      infoErroredProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        processAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "info",
        state: "failed",
        retryCount: 1,
      });
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await utils.sleep(1001);
    });

    afterAll(async () => {
      await destination.destroy();
    });

    test("export processors not yet exported or with an error will be enqueued", async () => {
      await specHelper.runTask("export:enqueueProcessors", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(4);
      const processorIds = foundTasks.map((t) => t.args[0].exportProcessorId);

      expect(processorIds).toContain(pendingProcessorA.id);
      expect(processorIds).toContain(pendingProcessorB.id);
      expect(processorIds).toContain(stuckStartedProcessor.id);
      expect(processorIds).toContain(erroredProcessor.id);

      expect(processorIds).not.toContain(recentStartedProcessor.id);
      expect(processorIds).not.toContain(newCompleteProcessor.id);
      expect(processorIds).not.toContain(oldCompleteProcessor.id);
      expect(processorIds).not.toContain(newlyErroredProcessor.id);
      expect(processorIds).not.toContain(oldErroredProcessor.id);
      expect(processorIds).not.toContain(infoErroredProcessor.id);
    });

    test("checking again will find no results as the export processors should now have a startedAt", async () => {
      await specHelper.runTask("export:enqueueProcessors", {}); // call first time
      let foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(4);

      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("export:enqueueProcessors", {}); // call second time

      foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(0);
    });
  });
});
