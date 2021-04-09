import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile, Group, Destination, Export, Run } from "../../../src";

describe("tasks/export:send", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  test("can be enqueued", async () => {
    await task.enqueue("export:send", {
      destinationId: "abc123",
      exportId: "abc123",
    });
    const found = await specHelper.findEnqueuedTasks("export:send");
    expect(found.length).toEqual(1);
  });

  test("does not throw if the destination or export cannot be found", async () => {
    await specHelper.runTask("export:send", {
      destinationId: "missing",
      exportId: "missing",
    });

    const destination = await helper.factories.destination();
    await specHelper.runTask("export:send", {
      destinationId: destination.id,
      exportId: "missing",
    });

    await destination.destroy();
  });

  describe("within an export workflow", () => {
    let destination: Destination, group: Group, profile: Profile, run: Run;

    beforeAll(async () => {
      profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });

      group = await helper.factories.group({ type: "manual" });
      await group.addProfile(profile);

      destination = await helper.factories.destination();
      await destination.trackGroup(group);

      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );
      await destination.update({ state: "ready" });

      await destination.exportGroupMembers(true);

      run = await Run.findOne({
        where: { creatorId: group.id },
      });
      await specHelper.runTask("group:run", { runId: run.id });

      await run.updateTotals();

      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(0);
    });

    test("the profile can be imported and exported", async () => {
      await ImportWorkflow();
    });

    test("export:send will be enqueued into a custom queue with the app type", async () => {
      const foundExportTasks = await specHelper.findEnqueuedTasks(
        "profile:export"
      );
      expect(foundExportTasks.length).toBe(1);
      await specHelper.runTask("profile:export", foundExportTasks[0].args[0]);
      await specHelper.runTask("export:enqueue", {});
      const foundExportSendTasks = await specHelper.findEnqueuedTasks(
        "export:send"
      );
      expect(foundExportSendTasks.length).toBe(1);
      expect(foundExportSendTasks[0].queue).toBe("exports:test-plugin-app");
    });

    test("without the export being sent, the run cannot be completed", async () => {
      await run.afterBatch();
      await run.reload();
      expect(run.state).toEqual("running");
    });

    test("the export can be sent", async () => {
      const foundExportSendTasks = await specHelper.findEnqueuedTasks(
        "export:send"
      );
      await specHelper.runTask("export:send", foundExportSendTasks[0].args[0]);

      const _exports = await Export.findAll({
        where: {
          destinationId: destination.id,
        },
      });

      expect(_exports.length).toBe(1);
      expect(_exports[0].startedAt).toBeTruthy();
      expect(_exports[0].completedAt).toBeTruthy();
    });
  });
});
