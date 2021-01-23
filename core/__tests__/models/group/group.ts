import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Log } from "../../../src/models/Log";
import { Profile } from "../../../src/models/Profile";
import { Group } from "../../../src/models/Group";
import { Import } from "../../../src/models/Import";
import { GroupMember } from "../../../src/models/GroupMember";

describe("models/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a group can be created", async () => {
    const group = new Group({ name: "test group", type: "manual" });

    await group.save();

    expect(group.guid.length).toBe(40);
    expect(group.type).toBe("manual");
    expect(group.createdAt).toBeTruthy();
    expect(group.updatedAt).toBeTruthy();
    expect(group.state).toBe("draft");
  });

  test("groups can be created in the ready state", async () => {
    const group = new Group({
      name: "test group ready",
      type: "manual",
      state: "ready",
    });
    await group.save();
    expect(group.state).toBe("ready");
  });

  test("creating a group creates a log entry with a relevant message", async () => {
    const log = await Log.findOne({
      where: { verb: "create", topic: "group" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(log).toBeTruthy();
    expect(log.message).toBe('group "test group ready" created');
  });

  test("deleting a group creates a log entry with a relevant message", async () => {
    const group = await Group.create({ name: "doomed group", type: "manual" });
    await group.destroy();

    const log = await Log.findOne({
      where: { verb: "destroy", topic: "group" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(log).toBeTruthy();
    expect(log.message).toBe('group "doomed group" destroyed');
  });

  describe("validations", () => {
    test("a new group will have a '' name", async () => {
      const group = await Group.create({
        type: "manual",
      });

      expect(group.name).toBe("");

      await group.destroy();
    });

    test("draft groups can share the same name, but not with ready groups", async () => {
      const groupOne = await Group.create({ type: "manual" });
      const groupTwo = await Group.create({ type: "manual" });

      expect(groupOne.name).toBe("");
      expect(groupTwo.name).toBe("");

      await groupOne.update({ name: "name" });
      await groupOne.update({ state: "ready" });

      await expect(groupTwo.update({ name: "name" })).rejects.toThrow(
        /name "name" is already in use/
      );

      await groupOne.destroy();
      await groupTwo.destroy();
    });

    test("group state must be of a valid type", async () => {
      const group = new Group({
        name: "calc-group",
        type: "calculated",
        state: "bla",
      });
      await expect(group.save()).rejects.toThrow(
        /cannot transition group state from draft to bla/
      );
    });

    test("groups can only be of types manual and calculated", async () => {
      const group = new Group({
        name: "a new group",
        type: "mysterious",
      });
      await expect(group.save()).rejects.toThrow(
        /type must be one of: manual, calculated/
      );
    });

    test("manual groups cannot have rules set", async () => {
      const group = new Group({
        name: "a manual group with rules",
        type: "manual",
      });
      await group.save();
      await expect(group.setRules([])).rejects.toThrow(
        /group type not calculated/
      );
    });

    test("deleting a group creates a log entry", async () => {
      const group = await Group.create({
        name: "bye group",
        type: "manual",
      });
      await group.destroy();

      const latestLog = await Log.findOne({
        where: { verb: "destroy", topic: "group" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();
    });

    describe("with destinations", () => {
      test("a group cannot be deleted if a destination is tracking it", async () => {
        const group = await Group.create({
          name: "tracked group",
          type: "manual",
        });

        const destination = await helper.factories.destination();
        await destination.trackGroup(group);
        await destination.update({ state: "ready" });

        await expect(group.destroy()).rejects.toThrow(
          /this group still in use by 1 destinations, cannot delete/
        );

        await destination.unTrackGroup();
        await group.destroy(); // does not throw
      });

      test("a group can be deleted even if a destination membership is using it", async () => {
        const group = await Group.create({
          name: "tracked group",
          type: "manual",
          state: "ready",
        });

        const destination = await helper.factories.destination();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = "remote-tag";
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        await group.destroy(); // does not throw
      });

      test("deleting a group that a destination had as a membership will enqueue a run for that destinations group", async () => {
        const trackedGroup = await Group.create({
          name: "tracked group",
          type: "manual",
          state: "ready",
        });

        const taggedGroup = await Group.create({
          name: "taged group",
          type: "manual",
          state: "ready",
        });

        const destination = await helper.factories.destination();
        const run = await destination.trackGroup(trackedGroup);
        const destinationGroupMemberships = {};
        destinationGroupMemberships[taggedGroup.guid] = "remote-tagged-group";
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );
        await destination.update({ state: "ready" });

        await api.resque.queue.connection.redis.flushdb();
        await taggedGroup.destroy(); // does not throw

        const foundTasks = await specHelper.findEnqueuedTasks("group:run");
        expect(foundTasks.length).toBe(1);
        expect(foundTasks[0].args[0]).toEqual(
          expect.objectContaining({
            destinationGuid: destination.guid,
            groupGuid: trackedGroup.guid,
            force: false,
          })
        );
        expect(foundTasks[0].args[0].runGuid).toBeTruthy();
        expect(foundTasks[0].args[0].runGuid).not.toEqual(run.guid);
      });
    });
  });

  describe("with members", () => {
    test("adding and removing a group member creates a custom log message and imports", async () => {
      const group = await helper.factories.group();
      const profile = await helper.factories.profile();
      await group.addProfile(profile);

      let log = await Log.findOne({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(log.message).toMatch(/added to group/);

      await group.removeProfile(profile);

      log = await Log.findOne({
        where: { topic: "groupMember", verb: "destroy" },
      });
      expect(log.message).toMatch(/removed from group/);

      const imports = await Import.findAll();
      expect(imports.length).toBe(2);
      // import#profileGuid is set directly
      expect(imports[0].profileGuid).toBe(profile.guid);
      expect(imports[1].profileGuid).toBe(profile.guid);
    });

    test("a group with members cannot be deleted", async () => {
      const group = await helper.factories.group();
      const profile = await helper.factories.profile();
      const groupMember = await GroupMember.create({
        profileGuid: profile.guid,
        groupGuid: group.guid,
      });

      await expect(group.destroy()).rejects.toThrow(
        /this group still has 1 members, cannot delete/
      );

      await groupMember.destroy();
      await group.destroy(); // does not throw

      const memberCount = await GroupMember.count({
        where: { groupGuid: group.guid },
      });
      expect(memberCount).toBe(0);
    });
  });

  describe("profile helpers", () => {
    let group;
    let profile;
    let anotherProfile;
    beforeAll(async () => {
      group = new Group({ name: "the group", type: "manual" });
      await group.save();
      profile = new Profile();
      await profile.save();
      anotherProfile = new Profile();
      await anotherProfile.save();
    });

    test("it can add a member", async () => {
      await group.addProfile(profile);
      const profiles = await group.$get("profiles");
      expect(profiles.length).toBe(1);
      const profileGuids = profiles.map((p) => p.guid);
      expect(profileGuids).toContain(profile.guid);
    });

    test("it cannot add a member a second time", async () => {
      await expect(group.addProfile(profile)).rejects.toThrow(
        /There is already a GroupMember/
      );

      const profiles = await group.$get("profiles");
      expect(profiles.length).toBe(1);
    });

    test("it can list members", async () => {
      await group.addProfile(anotherProfile);
      const profiles = await group.$get("profiles");
      expect(profiles.length).toBe(2);
    });

    test("it can count members", async () => {
      const count = await group.profilesCount();
      expect(count).toBe(2);
    });

    test("it can remove a member", async () => {
      await group.removeProfile(anotherProfile);
      const profiles = await group.$get("profiles");
      expect(profiles.length).toBe(1);
      const profileGuids = profiles.map((p) => p.guid);
      expect(profileGuids).toContain(profile.guid);
      expect(profileGuids).not.toContain(anotherProfile.guid);
    });

    test("it cannot remove a non-member", async () => {
      await expect(group.removeProfile(anotherProfile)).rejects.toThrow(
        /profile is not a member of this group/
      );
    });
  });
});
