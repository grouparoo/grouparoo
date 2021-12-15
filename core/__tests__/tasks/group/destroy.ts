process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "100";

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Destination,
  Group,
  Import,
  GrouparooRecord,
  Run,
  GrouparooModel,
  GroupMember,
} from "./../../../src";
import { GroupDestroy } from "../../../src/tasks/group/destroy";

describe("tasks/group:destroy", () => {
  let model: GrouparooModel;

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
      ({ model } = await helper.factories.properties());
      helper.disableTestPluginImport();

      await GrouparooRecord.truncate();

      mario = await GrouparooRecord.create({ modelId: model.id });
      luigi = await GrouparooRecord.create({ modelId: model.id });

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
        state: "ready",
        modelId: model.id,
      });

      let run: Run = await specHelper.runTask<GroupDestroy>("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeFalsy();

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("ready");
    });

    it("will immediately delete the group if it has no members and there are no existing runs", async () => {
      const group = await Group.create({
        name: "test group",
        state: "ready",
        modelId: model.id,
      });

      await group.update({ state: "deleted" }); // mark group as deleted

      let run: Run = await specHelper.runTask<GroupDestroy>("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeFalsy();

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);
    });

    it("will make a new run to clear remaining group members if there is not an existing run", async () => {
      const group = await Group.create({
        name: "test group 2",
        state: "ready",
        modelId: model.id,
      });
      const setRun = await group.setRules([
        { key: "grouparooId", operation: { op: "exists" } },
      ]);
      await setRun.destroy();

      await GroupMember.create({ groupId: group.id, recordId: mario.id });
      await GroupMember.create({ groupId: group.id, recordId: luigi.id });

      await group.update({ state: "deleted" }); // mark group as deleted

      let run: Run = await specHelper.runTask<GroupDestroy>("group:destroy", {
        groupId: group.id,
      });

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      expect(run).toBeTruthy();
      expect(run.state).toBe("running");
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(0);
      expect(run.method).toBe("runRemoveGroupMembers");
    });

    it("will remove all members in a calculated group and then delete the group", async () => {
      let groupMemberCount = 0;

      const group = await Group.create({
        name: "test group 3",
        type: "calculated",
        state: "ready",
        modelId: model.id,
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
      let run: Run = await specHelper.runTask<GroupDestroy>("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeNull();

      let reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      await group.stopPreviousRuns(); // force stop it to continue tests...

      // remove the records
      run = await specHelper.runTask<GroupDestroy>("group:destroy", {
        groupId: group.id,
      });

      reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      expect(run).toBeTruthy();
      expect(run.state).toBe("running");
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(0);
      expect(run.method).toBe("runRemoveGroupMembers");

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
      run = await specHelper.runTask<GroupDestroy>("group:destroy", {
        groupId: group.id,
      });
      expect(run).toBeNull();

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);
    });

    test.each(["ready", "deleted"])(
      "will not delete the group if a destination in %p state is tracking it",
      async (destinationState) => {
        const group = await Group.create({
          name: "test group 4",
          state: "ready",
          modelId: model.id,
        });

        const destination: Destination = await helper.factories.destination();
        await destination.updateTracking("group", group.id);
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

        await destination.updateTracking("none");
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
