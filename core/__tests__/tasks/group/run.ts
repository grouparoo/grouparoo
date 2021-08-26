process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "100";

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper, task } from "actionhero";
import {
  Group,
  Import,
  Profile,
  GroupMember,
  Run,
  ProfileProperty,
} from "../../../src";

describe("tasks/group:run", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("group:run", () => {
    let group: Group;
    let mario: Profile;
    let luigi: Profile;
    let peach: Profile;
    let toad: Profile;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.truncate();
    });

    beforeAll(async () => {
      await helper.factories.properties();
      helper.disableTestPluginImport();

      group = await Group.create({
        name: "test calculated group",
        type: "calculated",
      });
      await group.update({ state: "ready" });

      await Profile.truncate();

      mario = await Profile.create();
      luigi = await Profile.create();
      peach = await Profile.create();
      toad = await Profile.create();

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

      await ProfileProperty.update({ state: "ready" }, { where: {} });
      await Profile.update({ state: "ready" }, { where: {} });
    });

    test("can be enqueued", async () => {
      await task.enqueue("group:run", { runId: "abc123" }); // does not throw
    });

    test("does not throw if the run cannot be found", async () => {
      await specHelper.runTask("group:run", {
        runId: "missing",
      });
    });

    it("can create imports for profiles which should be added", async () => {
      let imports = [];
      await group.setRules([
        { key: "email", match: "%@%", operation: { op: "like" } },
      ]);

      expect(group.state).toBe("updating");
      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      await specHelper.runTask("group:run", { runId: run.id }); // adding profiles (some found, enqueue add again)

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runAddGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id }); // adding profiles (none found, enqueue remove)

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id }); // remove profiles, (none found, enqueue removePreviousRunGroupMembers)

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id }); // remove profiles, (none found)

      imports = await Import.findAll();
      expect(imports.length).toBe(4);
      expect(imports.map((e) => e.profileId).sort()).toEqual(
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
      expect(run.groupMethod).toBe("complete");
      expect(run.state).toBe("complete");
      await group.reload();
      expect(group.state).toBe("ready");

      const groupMembers = await group.$get("groupMembers");
      expect(groupMembers.map((mem) => mem.profileId).sort()).toEqual(
        [mario, luigi, peach, toad].map((p) => p.id).sort()
      );
    });

    it("can create imports for profiles which should be removed", async () => {
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
      expect(imports.length).toBe(0); // no imports to add profiles to the group

      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("runAddGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("runRemoveGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      // complete pending imports
      await ImportWorkflow();

      imports = await Import.findAll();
      expect(imports.length).toBe(2); // only the removals
      expect(imports.map((e) => e.profileId).sort()).toEqual(
        [peach, toad].map((p) => p.id).sort()
      );

      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      await peach.updateGroupMembership();
      await toad.updateGroupMembership();

      await specHelper.runTask("group:run", { runId: run.id }); // run is complete, mark group as ready

      await run.reload();
      expect(run.groupMethod).toBe("complete");
      expect(run.state).toBe("complete");
      await group.reload();
      expect(group.state).toBe("ready");

      const groupMembers = await group.$get("groupMembers");
      expect(groupMembers.map((mem) => mem.profileId).sort()).toEqual(
        [mario, luigi].map((p) => p.id).sort()
      );
    });

    it("can remove profiles which should be removed by a previous run that was stopped", async () => {
      await group.setRules([
        {
          key: "lastName",
          match: "daisy",
          operation: { op: "eq" },
        },
      ]);
      const members = await group.$get("groupMembers");
      for (const i in members) {
        const profile = await members[i].$get("profile");
        await profile.updateGroupMembership();
      }

      const bowser = await helper.factories.profile();
      await GroupMember.create({
        groupId: group.id,
        profileId: bowser.id,
        removedAt: new Date(),
      });

      expect((await group.$get("groupMembers")).length).toBe(1);

      await group.run();

      const run = await Run.findOne({
        where: { state: "running", creatorId: group.id },
      });

      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      expect(run.groupMethod).toBe("removePreviousRunGroupMembers");
      expect(run.state).toBe("running");
      await specHelper.runTask("group:run", { runId: run.id });

      // complete pending imports
      await ImportWorkflow();

      const imports = await Import.findAll();
      expect(imports.length).toBe(1); // only the removal
      await bowser.updateGroupMembership();

      await specHelper.runTask("group:run", { runId: run.id }); // run is complete, mark group as ready

      await run.reload();
      expect(run.groupMethod).toBe("complete");
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
      expect(run.groupMethod).toBe("complete");

      // check again
      await specHelper.runTask("group:run", { runId: run.id });

      await run.reload();
      await group.reload();

      expect(group.state).toBe("updating");
      expect(run.state).toBe("running");
      expect(run.groupMethod).toBe("complete");

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
