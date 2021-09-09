process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "100";

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Destination,
  Group,
  Import,
  GrouparooRecord,
  Run,
  plugin,
} from "./../../../src";

describe("tasks/group:destroy", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("group:run", () => {
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.truncate();
    });

    beforeAll(async () => {
      await helper.factories.properties();
      helper.disableTestPluginImport();

      await GrouparooRecord.truncate();

      mario = await GrouparooRecord.create();
      luigi = await GrouparooRecord.create();

      await mario.addOrUpdateProperties({
        userId: [1],
        firstName: ["Mario"],
        lastName: ["Mario"],
        email: ["mario@example.com"],
      });

      await luigi.addOrUpdateProperties({
        userId: [2],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        email: ["luigi@example.com"],
      });
    });

    test("can be enqueued", async () => {
      await task.enqueue("group:destroy", { groupId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("group:destroy");
      expect(found.length).toEqual(1);
    });

    it("will leave the group alone if it is not in the deleted state", async () => {
      const group = await Group.create({
        name: "test group 0",
        type: "manual",
        state: "ready",
      });

      let run: Run = await specHelper.runTask("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeFalsy();

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("ready");
    });

    it("will immediately delete the group if it has no members and there are no existing runs", async () => {
      const group = await Group.create({
        name: "test group",
        type: "manual",
        state: "ready",
      });

      await group.update({ state: "deleted" }); // mark group as deleted

      let run: Run = await specHelper.runTask("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeFalsy();

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);
    });

    it("will make a new run to clear remainig group members if there is not an existing run", async () => {
      const group = await Group.create({
        name: "test group 2",
        type: "manual",
        state: "ready",
      });

      await group.addRecord(mario);
      await group.addRecord(luigi);

      await group.update({ state: "deleted" }); // mark group as deleted

      let run: Run = await specHelper.runTask("group:destroy", {
        groupId: group.id,
      });

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      expect(run).toBeTruthy();
      expect(run.state).toBe("running");
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runRemoveGroupMembers");
    });

    it("will remove all members in a manual group and then delete the group", async () => {
      let _imports = [];
      let groupMemberCount = 0;

      const group = await Group.create({
        name: "test group",
        type: "manual",
        state: "ready",
      });

      await group.addRecord(mario);
      await group.addRecord(luigi);

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(2);
      _imports = await Import.findAll();
      expect(_imports.length).toBe(2);
      await Import.truncate();

      await group.update({ state: "deleted" }); // mark group as deleted

      // remove the records
      let run: Run = await specHelper.runTask("group:destroy", {
        groupId: group.id,
      });

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      expect(run).toBeTruthy();
      expect(run.state).toBe("running");
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runRemoveGroupMembers");

      // process the run
      await specHelper.runTask("group:run", { runId: run.id }); // runRemoveGroupMembers
      await specHelper.runTask("group:run", { runId: run.id }); // removePreviousRunGroupMembers
      await specHelper.runTask("group:run", { runId: run.id }); // wait for imports...
      await ImportWorkflow();
      await specHelper.runTask("group:run", { runId: run.id }); // mark done
      await run.reload();
      expect(run.state).toBe("complete");

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(0);

      // remove the group
      run = await specHelper.runTask("group:destroy", { groupId: group.id });
      expect(run).toBeNull();

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);
    });

    it("will remove all members in a calculated group and then delete the group", async () => {
      let groupMemberCount = 0;

      const group = await Group.create({
        name: "test group 3",
        type: "calculated",
        state: "ready",
      });

      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
      ]);
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(2);

      await group.update({ state: "deleted" }); // mark group as deleted

      // wait for run kicked off by setRules to complete
      let run: Run = await specHelper.runTask("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeNull();

      let reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      await group.stopPreviousRuns(); // force stop it to continue tests...

      // remove the records
      run = await specHelper.runTask("group:destroy", { groupId: group.id });

      reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      expect(run).toBeTruthy();
      expect(run.state).toBe("running");
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runRemoveGroupMembers");

      // process the run
      await specHelper.runTask("group:run", { runId: run.id }); // runRemoveGroupMembers
      await specHelper.runTask("group:run", { runId: run.id }); // removePreviousRunGroupMembers
      await specHelper.runTask("group:run", { runId: run.id }); // wait for imports...
      await ImportWorkflow();
      await specHelper.runTask("group:run", { runId: run.id }); // mark done
      await run.reload();
      expect(run.state).toBe("complete");

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(0);

      // remove the group and end the run
      run = await specHelper.runTask("group:destroy", { groupId: group.id });
      expect(run).toBeNull();

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);
    });

    test.each(["ready", "deleted"])(
      "will not delete the group if a destination in %p state is tracking it",
      async (destinationState) => {
        const group = await Group.create({
          name: "test group 4",
          type: "manual",
          state: "ready",
        });

        const destination: Destination = await helper.factories.destination();
        await destination.trackGroup(group);
        await group.stopPreviousRuns();

        await destination.update({ state: destinationState });
        expect(destination.state).toBe(destinationState);

        // try to delete
        await group.update({ state: "deleted" });
        let run = await specHelper.runTask("group:destroy", {
          groupId: group.id,
        });
        expect(run).toBeNull(); // run should not be created

        let reloadedGroup = await Group.findById(group.id);
        expect(reloadedGroup.state).toBe("deleted"); // still waiting

        await destination.unTrackGroup(true);
        await group.stopPreviousRuns();

        // try to delete again
        await specHelper.runTask("group:destroy", {
          groupId: group.id,
        });

        await expect(Group.findById(group.id)).rejects.toThrow(
          /cannot find Group/
        );
      }
    );
  });
});
