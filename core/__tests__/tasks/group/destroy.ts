import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Group, Import, Profile, Run, plugin } from "./../../../src";

describe("tasks/group:destroy", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("group:run", () => {
    let mario: Profile;
    let luigi: Profile;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.truncate();
    });

    beforeAll(async () => {
      await plugin.updateSetting("core", "runs-profile-batch-size", 100);
    });

    beforeAll(async () => {
      await helper.factories.properties();
      helper.disableTestPluginImport();

      await Profile.truncate();

      mario = await Profile.create();
      luigi = await Profile.create();

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

    it("will remove all members in a manual group and then delete the group", async () => {
      let foundTasks = [];
      let _imports = [];
      let groupMemberCount = 0;

      const group = await Group.create({
        name: "test group",
        type: "manual",
        state: "ready",
      });

      await group.addProfile(mario);
      await group.addProfile(luigi);

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(2);
      _imports = await Import.findAll();
      expect(_imports.length).toBe(2);
      await Import.truncate();

      await task.enqueue("group:destroy", {
        groupId: group.id,
      });

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:destroy", foundTasks[0].args[0]); // remove the profiles

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      _imports = await Import.findAll();
      expect(_imports.length).toBe(2);
      expect(_imports.map((e) => e.profileId).sort()).toEqual(
        [mario, luigi].map((p) => p.id).sort()
      );

      await Promise.all(
        [mario, luigi].map(async (p) => p.updateGroupMembership())
      );

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(0);

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
      const run = await Run.findById(foundTasks[0].args[0].runId);
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runRemoveGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:destroy", foundTasks[0].args[0]); // remove the group and end the run

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(0);
    });

    it("will remove all members in a calculated group and then delete the group", async () => {
      let foundTasks = [];
      let imports = [];
      let groupMemberCount = 0;

      const group = await Group.create({
        name: "test group 2",
        type: "calculated",
        state: "ready",
      });

      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
      ]);
      await Promise.all(
        [mario, luigi].map(async (p) => p.updateGroupMembership())
      );

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(2);

      await task.enqueue("group:destroy", {
        groupId: group.id,
      });

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:destroy", foundTasks[0].args[0]); // remove the profiles

      const reloadedGroup = await Group.findById(group.id);
      expect(reloadedGroup.state).toBe("deleted");

      imports = await Import.findAll();
      expect(imports.length).toBe(2);
      expect(imports.map((e) => e.profileId).sort()).toEqual(
        [mario, luigi].map((p) => p.id).sort()
      );

      await Promise.all(
        [mario, luigi].map(async (p) => p.updateGroupMembership())
      );

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(0);

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:destroy", foundTasks[0].args[0]); // remove the group and end the run

      await expect(group.reload()).rejects.toThrow(/does not exist anymore/);

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(0);
    });
  });
});
