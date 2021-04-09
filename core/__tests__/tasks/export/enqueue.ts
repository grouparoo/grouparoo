import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile, Destination, Export, Run, plugin } from "../../../src";

describe("tasks/export:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  test("can be enqueued", async () => {
    await task.enqueue("export:enqueue", {});
    const found = await specHelper.findEnqueuedTasks("export:enqueue");
    expect(found.length).toEqual(1);
  });

  describe("with exports", () => {
    let run: Run, profile: Profile, destination: Destination;
    let pendingExportA: Export,
      pendingExportB: Export,
      recentStartedExport: Export,
      stuckStartedExport: Export,
      newCompleteExport: Export,
      oldCompleteExport: Export,
      newErrorExport: Export,
      oldErrorExport: Export,
      infoExport: Export;

    beforeEach(async () => {
      run = await helper.factories.run(null, { state: "running" });
      profile = await helper.factories.profile();
      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });

      pendingExportA = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
      });

      pendingExportB = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
      });

      recentStartedExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(),
      });

      stuckStartedExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(0),
      });

      newCompleteExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(),
        completedAt: new Date(),
      });

      oldCompleteExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(0),
        completedAt: new Date(1),
      });

      newErrorExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
      });

      oldErrorExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(0),
        errorMessage: "Oh No!",
        errorLevel: "error",
      });

      infoExport = await Export.create({
        profileId: profile.id,
        destinationId: destination.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "info",
      });
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    afterAll(async () => {
      await profile.destroy();
      await destination.destroy();
    });

    afterEach(async () => {
      await plugin.updateSetting("core", "exports-profile-batch-size", 100);
    });

    test("exports not yet exported or with an error will be enqueued", async () => {
      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      const exportIds = foundTasks[0].args[0].exportIds;

      expect(exportIds.length).toBe(3);
      expect(exportIds).toContain(pendingExportA.id);
      expect(exportIds).toContain(pendingExportB.id);
      expect(exportIds).toContain(stuckStartedExport.id);
      expect(exportIds).not.toContain(recentStartedExport.id);
      expect(exportIds).not.toContain(newCompleteExport.id);
      expect(exportIds).not.toContain(oldCompleteExport.id);
      expect(exportIds).not.toContain(newErrorExport.id);
      expect(exportIds).not.toContain(oldErrorExport.id);
      expect(exportIds).not.toContain(infoExport.id);
    });

    test("checking again will find no results as the exports should have a startedAt", async () => {
      await specHelper.runTask("export:enqueue", {}); // call first time
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("export:enqueue", {}); // call second time

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);
    });

    test("batch size is variable", async () => {
      await plugin.updateSetting("core", "exports-profile-batch-size", 1);
      await specHelper.runTask("export:enqueue", {}); // first batch

      // another instance of the task should have been enqueued
      let foundTasks = await specHelper.findEnqueuedTasks("export:enqueue");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ count: 1 });

      await specHelper.runTask("export:enqueue", {}); // second batch
      await specHelper.runTask("export:enqueue", {}); // no one

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(3); // 1 + 2
    });
  });
});
