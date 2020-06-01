import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";
import { Group } from "./../../../src/models/Group";
import { Import } from "./../../../src/models/Import";
import { Profile } from "./../../../src/models/Profile";

let actionhero;

describe("tasks/group:destroy", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("group:run", () => {
    let mario: Profile;
    let luigi: Profile;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.destroy({ truncate: true });
    });

    beforeAll(async () => {
      await helper.factories.profilePropertyRules();
      helper.disableTestPluginImport();

      await Profile.destroy({ truncate: true });

      mario = await Profile.create();
      luigi = await Profile.create();

      await mario.addOrUpdateProperties({
        userId: 1,
        firstName: "Mario",
        lastName: "Mario",
        email: "mario@example.com",
      });

      await luigi.addOrUpdateProperties({
        userId: 2,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
    });

    test("can be enqueued", async () => {
      await task.enqueue("group:destroy", { groupGuid: "abc123" });
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
      await Import.destroy({ truncate: true });

      await task.enqueue("group:destroy", {
        groupGuid: group.guid,
      });

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:destroy", foundTasks[0].args[0]); // remove the profiles

      const reloadedGroup = await Group.findByGuid(group.guid);
      expect(reloadedGroup.state).toBe("deleted");

      _imports = await Import.findAll();
      expect(_imports.length).toBe(2);
      expect(_imports.map((e) => e.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
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
      foundTasks = await specHelper.findEnqueuedTasks("run:determineState"); // run state
      expect(foundTasks.length).toBe(1);
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

      await group.setRules([{ key: "lastName", match: "Mario", op: "eq" }]);
      await Promise.all(
        [mario, luigi].map(async (p) => p.updateGroupMembership())
      );

      groupMemberCount = await group.$count("groupMembers");
      expect(groupMemberCount).toBe(2);

      await task.enqueue("group:destroy", {
        groupGuid: group.guid,
      });

      foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:destroy", foundTasks[0].args[0]); // remove the profiles

      const reloadedGroup = await Group.findByGuid(group.guid);
      expect(reloadedGroup.state).toBe("deleted");

      imports = await Import.findAll();
      expect(imports.length).toBe(2);
      expect(imports.map((e) => e.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
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
      foundTasks = await specHelper.findEnqueuedTasks("run:determineState"); // run state
      expect(foundTasks.length).toBe(1);
    });
  });
});
