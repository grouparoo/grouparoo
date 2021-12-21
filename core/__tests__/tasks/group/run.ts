process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "100";

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper, task } from "actionhero";
import {
  Group,
  Import,
  GrouparooRecord,
  GroupMember,
  Run,
  RecordProperty,
  GrouparooModel,
} from "../../../src";

describe("tasks/group:run", () => {
  let model: GrouparooModel;

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("group:run", () => {
    let group: Group;
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;
    let peach: GrouparooRecord;
    let toad: GrouparooRecord;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.truncate();
    });

    beforeAll(async () => {
      ({ model } = await helper.factories.properties());
      helper.disableTestPluginImport();

      group = await Group.create({
        name: "test group",
        modelId: model.id,
      });
      await group.update({ state: "ready" });

      await GrouparooRecord.truncate();

      mario = await GrouparooRecord.create({ modelId: model.id });
      luigi = await GrouparooRecord.create({ modelId: model.id });
      peach = await GrouparooRecord.create({ modelId: model.id });
      toad = await GrouparooRecord.create({ modelId: model.id });

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

      await peach.addOrUpdateProperties({
        userId: [3],
        firstName: ["Peach"],
        lastName: ["Toadstool"],
        email: ["peach@example.com"],
      });

      await toad.addOrUpdateProperties({
        userId: [4],
        firstName: ["Toad"],
        lastName: ["Toadstool"],
        email: ["toad@example.com"],
      });

      await RecordProperty.update({ state: "ready" }, { where: {} });
      await GrouparooRecord.update({ state: "ready" }, { where: {} });
    });

    test("can be enqueued", async () => {
      await task.enqueue("group:run", { runId: "abc123" }); // does not throw
    });

    test("does not throw if the run cannot be found", async () => {
      await specHelper.runTask("group:run", {
        runId: "missing",
      });
    });

    it("can create imports for records which should be added", async () => {
      let imports = [];
      await group.setRules([
        { key: "email", match: "%@%", operation: { op: "like" } },
      ]);

      expect(group.state).toBe("updating");
      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      await specHelper.runTask("group:run", { runId: run.id }); // adding records (some found, enqueue add again)

      await run.reload();
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(0);
      expect(run.method).toBe("runAddGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id }); // adding records (none found, enqueue remove)

      await run.reload();
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(0);
      expect(run.method).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id }); // remove records, (none found, enqueue removePreviousRunGroupMembers)

      await run.reload();
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(0);
      expect(run.method).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id }); // remove records, (none found)

      imports = await Import.findAll();
      expect(imports.length).toBe(4);
      expect(imports.map((e) => e.recordId).sort()).toEqual(
        [mario, luigi, peach, toad].map((p) => p.id).sort()
      );

      // complete pending imports
      await ImportWorkflow();
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      await peach.updateGroupMembership();
      await toad.updateGroupMembership();

      await specHelper.runTask("group:run", { runId: run.id }); // run is complete, mark group as ready

      await run.reload();
      expect(run.method).toBe("complete");
      expect(run.state).toBe("complete");
      await group.reload();
      expect(group.state).toBe("ready");

      const groupMembers = await group.$get("groupMembers");
      expect(groupMembers.map((mem) => mem.recordId).sort()).toEqual(
        [mario, luigi, peach, toad].map((p) => p.id).sort()
      );
    });

    it("can create imports for records which should be removed", async () => {
      let imports = [];
      await group.setRules([
        {
          key: "lastName",
          match: "Mario",
          operation: { op: "eq" },
        },
      ]);

      expect(group.state).toBe("updating");
      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      imports = await Import.findAll();
      expect(imports.length).toBe(0); // no imports to add records to the group

      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("runAddGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("runRemoveGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      // complete pending imports
      await ImportWorkflow();

      imports = await Import.findAll();
      expect(imports.length).toBe(2); // only the removals
      expect(imports.map((e) => e.recordId).sort()).toEqual(
        [peach, toad].map((p) => p.id).sort()
      );

      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      await peach.updateGroupMembership();
      await toad.updateGroupMembership();

      await specHelper.runTask("group:run", { runId: run.id }); // run is complete, mark group as ready

      await run.reload();
      expect(run.method).toBe("complete");
      expect(run.state).toBe("complete");
      await group.reload();
      expect(group.state).toBe("ready");

      const groupMembers = await group.$get("groupMembers");
      expect(groupMembers.map((mem) => mem.recordId).sort()).toEqual(
        [mario, luigi].map((p) => p.id).sort()
      );
    });

    it("can remove records which should be removed by a previous run that was stopped", async () => {
      await group.setRules([
        {
          key: "lastName",
          match: "daisy",
          operation: { op: "eq" },
        },
      ]);
      const members = await group.$get("groupMembers");
      for (const i in members) {
        const record = await members[i].$get("record");
        await record.updateGroupMembership();
      }

      const bowser = await helper.factories.record();
      await GroupMember.create({
        groupId: group.id,
        recordId: bowser.id,
        removedAt: new Date(),
      });

      expect((await group.$get("groupMembers")).length).toBe(1);

      await group.run();

      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.method).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      // complete pending imports
      await ImportWorkflow();

      const imports = await Import.findAll();
      expect(imports.length).toBe(1); // only the removal
      await bowser.updateGroupMembership();

      await specHelper.runTask("group:run", { runId: run.id }); // run is complete, mark group as ready

      await run.reload();
      expect(run.method).toBe("complete");
      expect(run.state).toBe("complete");
      await group.reload();
      expect(group.state).toBe("ready");

      expect((await group.$get("groupMembers")).length).toBe(0);
      await bowser.destroy();
    });

    it("the group run will not complete until all imports are complete", async () => {
      await group.setRules([
        { key: "email", match: "%@%", operation: { op: "like" } },
      ]);

      expect(group.state).toBe("updating");

      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      await specHelper.runTask("group:run", { runId: run.id });
      await specHelper.runTask("group:run", { runId: run.id });
      await specHelper.runTask("group:run", { runId: run.id });
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      await group.reload();

      expect(group.state).toBe("updating");
      expect(run.state).toBe("running");
      expect(run.method).toBe("complete");

      // check again
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      await group.reload();

      expect(group.state).toBe("updating");
      expect(run.state).toBe("running");
      expect(run.method).toBe("complete");

      // complete pending imports
      await ImportWorkflow();
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      await group.reload();

      expect(group.state).toBe("ready");
      expect(run.state).toBe("complete");
    });
  });
});
