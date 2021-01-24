import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile } from "../../../src/models/Profile";
import { Group } from "../../../src/models/Group";
import { Destination } from "../../../src/models/Destination";
import { Export } from "../../../src/models/Export";
import { Run } from "../../../src/models/Run";

describe("tasks/export:sendBatch", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

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

      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });
      await destination.trackGroup(group);

      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();

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

      await run.updateTotals();

      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(0);
    });

    test("the profile can be imported and exported", async () => {
      await ImportWorkflow();
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

    test("without the export being sent, the run cannot be completed", async () => {
      await run.afterBatch();
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
  });
});
