import { helper } from "@grouparoo/spec-helper";
import {
  Log,
  Profile,
  Group,
  Import,
  GroupMember,
  Run,
  Destination,
} from "../../../src";
import { GroupOps } from "../../../src/modules/ops/group";

describe("models/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a group can be created", async () => {
    const group = new Group({ name: "test group", type: "manual" });

    await group.save();

    expect(group.id.length).toBe(40);
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

      test("a group cannot be deleted if a deleted destination is tracking it", async () => {
        const group = await Group.create({
          name: "tracked group",
          type: "manual",
        });

        const destination = await helper.factories.destination();
        await destination.trackGroup(group);
        await destination.update({ state: "deleted" });

        await expect(group.destroy()).rejects.toThrow(
          /this group still in use by 1 destinations, cannot delete/
        );

        await destination.unTrackGroup();
        await group.destroy(); // does not throw
      });

      test.each(["ready", "deleted"])(
        "a group can be deleted even if a %p destination membership is using it",
        async (destinationState) => {
          const group = await Group.create({
            name: "tracked group",
            type: "manual",
            state: "ready",
          });

          const destination = await helper.factories.destination();
          const destinationGroupMemberships = {};
          destinationGroupMemberships[group.id] = "remote-tag";
          await destination.setDestinationGroupMemberships(
            destinationGroupMemberships
          );

          await destination.update({ state: destinationState });

          await group.destroy(); // does not throw
        }
      );

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

        const destination: Destination = await helper.factories.destination();
        const run = await destination.trackGroup(trackedGroup);
        const destinationGroupMemberships = {};
        destinationGroupMemberships[taggedGroup.id] = "remote-tagged-group";
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        await trackedGroup.stopPreviousRuns();

        await destination.update({ state: "ready" });
        await taggedGroup.destroy(); // does not throw

        const runningRuns = await Run.findAll({
          where: { state: "running", creatorId: trackedGroup.id },
        });
        expect(runningRuns.length).toBe(1);
        expect(runningRuns[0].destinationId).toBe(destination.id);
        expect(runningRuns[0].force).toBe(false);
        expect(runningRuns[0].id).not.toBe(run.id);

        await destination.unTrackGroup();
        await trackedGroup.destroy();
        await taggedGroup.destroy();
      });

      test("deleting a group that a deleted destination had as a membership will not enqueue a run", async () => {
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
        destinationGroupMemberships[taggedGroup.id] = "remote-tagged-group";
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        await trackedGroup.stopPreviousRuns();
        await destination.update({ state: "deleted" });
        await taggedGroup.destroy(); // does not throw

        const runningRuns = await Run.findAll({
          where: { state: "running", creatorId: trackedGroup.id },
        });
        expect(runningRuns.length).toBe(0);
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
      // import#profileId is set directly
      expect(imports[0].profileId).toBe(profile.id);
      expect(imports[1].profileId).toBe(profile.id);
    });

    test("#newestGroupMembers", async () => {
      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();
      const profile = await helper.factories.profile();
      await GroupMember.create({
        profileId: profile.id,
        groupId: groupA.id,
      });
      await helper.sleep(100);
      await GroupMember.create({
        profileId: profile.id,
        groupId: groupB.id,
      });

      const { groups, newestMembersAdded } =
        await GroupOps.newestGroupMembers();
      expect(groups.length).toBeGreaterThan(0);
      expect(newestMembersAdded[groupA.id]).toBeLessThanOrEqual(
        new Date().getTime()
      );
      expect(newestMembersAdded[groupB.id]).toBeLessThanOrEqual(
        new Date().getTime()
      );
      expect(newestMembersAdded[groupB.id]).toBeGreaterThan(
        newestMembersAdded[groupA.id]
      );

      await profile.destroy();
      await groupA.destroy();
      await groupB.destroy();
    });

    test("a group with members cannot be deleted", async () => {
      const group = await helper.factories.group();
      const profile = await helper.factories.profile();
      const groupMember = await GroupMember.create({
        profileId: profile.id,
        groupId: group.id,
      });

      await expect(group.destroy()).rejects.toThrow(
        /this group still has 1 members, cannot delete/
      );

      await groupMember.destroy();
      await group.destroy(); // does not throw

      const memberCount = await GroupMember.count({
        where: { groupId: group.id },
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
      const profileIds = profiles.map((p) => p.id);
      expect(profileIds).toContain(profile.id);
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
      const profileIds = profiles.map((p) => p.id);
      expect(profileIds).toContain(profile.id);
      expect(profileIds).not.toContain(anotherProfile.id);
    });

    test("it cannot remove a non-member", async () => {
      await expect(group.removeProfile(anotherProfile)).rejects.toThrow(
        /profile is not a member of this group/
      );
    });
  });
});
