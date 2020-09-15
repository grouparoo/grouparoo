import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { App } from "../../../src/models/App";
import { Profile } from "../../../src/models/Profile";
import { Group } from "../../../src/models/Group";
import { Destination } from "../../../src/models/Destination";
import { Export } from "../../../src/models/Export";
import { Run } from "../../../src/models/Run";

let actionhero;

describe("tasks/export:sendBatch", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("can be enqueued", async () => {
    await task.enqueue("export:sendBatch", {
      destinationGuid: "abc123",
      exportGuids: ["abc123"],
    });
    const found = await specHelper.findEnqueuedTasks("export:sendBatch");
    expect(found.length).toEqual(1);
  });

  describe("within an export workflow", () => {
    let destination: Destination, group: Group, profile: Profile, run: Run;

    beforeAll(async () => {
      profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });

      group = await helper.factories.group({ type: "manual" });
      await group.addProfile(profile);

      await api.resque.queue.connection.redis.flushdb();

      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });
      await destination.trackGroup(group);
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );
      await destination.update({ state: "ready" });

      await destination.exportGroupMembers(true);
      const foundGroupRunTasks = await specHelper.findEnqueuedTasks(
        "group:run"
      );
      expect(foundGroupRunTasks.length).toBe(1);
      await specHelper.runTask("group:run", foundGroupRunTasks[0].args[0]);

      run = await Run.findOne({
        where: { creatorGuid: group.guid },
      });

      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(0);
      expect(run.profilesExported).toBe(0);
      expect(run.exportsCreated).toBe(0);

      const foundImportTasks = await specHelper.findEnqueuedTasks(
        "profile:importAndUpdate"
      );
      expect(foundImportTasks.length).toBe(1);
      await specHelper.runTask(
        "profile:importAndUpdate",
        foundImportTasks[0].args[0]
      );
    });

    test("export:sendBatch will be enqueued after a batch from the run", async () => {
      const foundExportTasks = await specHelper.findEnqueuedTasks(
        "profile:export"
      );
      expect(foundExportTasks.length).toBe(1);
      await specHelper.runTask("profile:export", foundExportTasks[0].args[0]);
      let foundExportSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundExportTasks.length).toBe(1);
      expect(foundExportSendBatchTasks.length).toBe(0);

      await specHelper.runTask("export:enqueue", {});

      foundExportSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundExportSendBatchTasks.length).toBe(1);
    });

    test("the run will track the export being created separately than the export being sent", async () => {
      await run.reload();

      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(1);
      expect(run.exportsCreated).toBe(1);
      expect(run.profilesExported).toBe(0);
    });

    test("without the export being sent, the run cannot be completed", async () => {
      await run.determineState();
      await run.reload();
      expect(run.state).toEqual("running");
    });

    test("the export can be sent", async () => {
      const foundExportSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      await specHelper.runTask(
        "export:sendBatch",
        foundExportSendBatchTasks[0].args[0]
      );

      const _exports = await Export.findAll({
        where: {
          destinationGuid: destination.guid,
        },
      });

      expect(_exports.length).toBe(1);
      expect(_exports[0].startedAt).toBeTruthy();
      expect(_exports[0].completedAt).toBeTruthy();
    });

    test("the run can be completed", async () => {
      await run.determineState();
      await run.reload();
      expect(run.state).toEqual("complete");
    });
  });
});
