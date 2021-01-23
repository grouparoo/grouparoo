import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile } from "../../../src/models/Profile";
import { Destination } from "../../../src/models/Destination";
import { Export } from "../../../src/models/Export";
import { Run } from "../../../src/models/Run";
import { plugin } from "../../../src";

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
      completeExport: Export,
      errorExport: Export,
      infoExport: Export;

    beforeEach(async () => {
      run = await helper.factories.run(null, { state: "running" });
      profile = await helper.factories.profile();
      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });

      pendingExportA = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
      });

      pendingExportB = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
      });

      completeExport = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(),
        completedAt: new Date(),
      });

      errorExport = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        oldProfileProperties: {},
        newProfileProperties: {},
        newGroups: [],
        oldGroups: [],
        startedAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
      });

      infoExport = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
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
      expect(foundTasks[0].args[0].exportGuids.length).toBe(2);
      expect(foundTasks[0].args[0].exportGuids).toContain(pendingExportA.guid);
      expect(foundTasks[0].args[0].exportGuids).toContain(pendingExportB.guid);
      expect(foundTasks[0].args[0].exportGuids).not.toContain(
        completeExport.guid
      );
      expect(foundTasks[0].args[0].exportGuids).not.toContain(errorExport.guid);
      expect(foundTasks[0].args[0].exportGuids).not.toContain(infoExport.guid);
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
      expect(foundTasks.length).toBe(2);
    });
  });
});
