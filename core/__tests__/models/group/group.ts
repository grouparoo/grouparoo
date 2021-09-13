import { helper } from "@grouparoo/spec-helper";
import {
  Destination,
  Group,
  GroupMember,
  GrouparooRecord,
  Import,
  Log,
  Run,
} from "../../../src";
import { GroupOps } from "../../../src/modules/ops/group";

describe("models/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a group can be created", async () => {
    const group = new Group({
      name: "test group",
      type: "manual",
      modelId: "mod_profiles",
    });

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
      modelId: "mod_profiles",
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
    const group = await Group.create({
      name: "doomed group",
      type: "manual",
      modelId: "mod_profiles",
    });
    await group.destroy();

    const log = await Log.findOne({
      where: { verb: "destroy", topic: "group" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(log).toBeTruthy();
    expect(log.message).toBe('group "doomed group" destroyed');
  });

  test("groups require a valid modelId", async () => {
    expect(
      Group.create({
        name: "doomed group",
        type: "manual",
        modelId: "foo",
      })
    ).rejects.toThrow(/cannot find model with id foo/);
  });

  describe("run()", () => {
    const getRuns = async (group) => {
      const runs = await Run.findAll({
        where: { creatorId: group.id, creatorType: "group" },
      });
      return runs;
    };

    afterEach(async () => {
      process.env.GROUPAROO_RUN_MODE = undefined;
    });
    test("creates a run and sets state to initialized", async () => {
      const group = await Group.create({
        name: "group that will create a run",
        type: "manual",
        modelId: "mod_profiles",
      });
      let runs = await getRuns(group);
      expect(runs.length).toEqual(0);
      await group.run();
      runs = await getRuns(group);
      expect(runs.length).toEqual(1);
      expect(runs[0].state).toEqual("running");
    });
    test("does not create a run when in config mode", async () => {
      process.env.GROUPAROO_RUN_MODE = "cli:config";

      const group = await Group.create({
        name: "group that will not create a run",
        type: "manual",
        modelId: "mod_profiles",
      });
      let runs = await getRuns(group);
      expect(runs.length).toEqual(0);
      await group.run();
      runs = await getRuns(group);
      expect(runs.length).toEqual(0);
    });
  });

  describe("validations", () => {
    test("a new group will have a '' name", async () => {
      const group = await Group.create({
        type: "manual",
        modelId: "mod_profiles",
      });

      expect(group.name).toBe("");

      await group.destroy();
    });

    test("draft groups can share the same name, but not with ready groups", async () => {
      const groupOne = await Group.create({
        type: "manual",
        modelId: "mod_profiles",
      });
      const groupTwo = await Group.create({
        type: "manual",
        modelId: "mod_profiles",
      });

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

    test("deleted groups can share the same name, but not with ready groups", async () => {
      const groupOne = await Group.create({
        type: "manual",
        modelId: "mod_profiles",
        name: "1",
        state: "ready",
      });
      const groupTwo = await Group.create({
        type: "manual",
        modelId: "mod_profiles",
        name: "2",
        state: "deleted",
      });
      const groupThree = await Group.create({
        type: "manual",
        modelId: "mod_profiles",
        name: "3",
        state: "deleted",
      });

      expect(groupOne.name).toBe("1");
      expect(groupOne.state).toBe("ready");
      expect(groupTwo.name).toBe("2");
      expect(groupTwo.state).toBe("deleted");
      expect(groupThree.name).toBe("3");
      expect(groupThree.state).toBe("deleted");

      await groupThree.update({ name: "2" });

      await expect(groupTwo.update({ name: "1" })).rejects.toThrow(
        /name "1" is already in use/
      );

      await groupOne.update({ name: "2" });

      await groupOne.destroy();
      await groupTwo.destroy();
      await groupThree.destroy();
    });

    test("group state must be of a valid type", async () => {
      const group = new Group({
        modelId: "mod_profiles",
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
        modelId: "mod_profiles",
      });
      await expect(group.save()).rejects.toThrow(
        /type must be one of: manual, calculated/
      );
    });

    test("manual groups cannot have rules set", async () => {
      const group = new Group({
        name: "a manual group with rules",
        type: "manual",
        modelId: "mod_profiles",
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
        modelId: "mod_profiles",
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
          modelId: "mod_profiles",
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
          modelId: "mod_profiles",
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
            modelId: "mod_profiles",
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
          modelId: "mod_profiles",
          type: "manual",
          state: "ready",
        });

        const taggedGroup = await Group.create({
          name: "taged group",
          modelId: "mod_profiles",
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
          modelId: "mod_profiles",
          type: "manual",
          state: "ready",
        });

        const taggedGroup = await Group.create({
          name: "taged group",
          modelId: "mod_profiles",
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
      const group: Group = await helper.factories.group();
      const record: GrouparooRecord = await helper.factories.record();
      await group.addRecord(record);

      let log = await Log.findOne({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(log.message).toMatch(/added to group/);

      await group.removeRecord(record);

      log = await Log.findOne({
        where: { topic: "groupMember", verb: "destroy" },
      });
      expect(log.message).toMatch(/removed from group/);

      const imports = await Import.findAll();
      expect(imports.length).toBe(2);
      // import#recordId is set directly
      expect(imports[0].recordId).toBe(record.id);
      expect(imports[1].recordId).toBe(record.id);
    });

    test("#newestGroupMembers", async () => {
      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();
      const record = await helper.factories.record();
      await GroupMember.create({
        recordId: record.id,
        groupId: groupA.id,
      });
      await helper.sleep(100);
      await GroupMember.create({
        recordId: record.id,
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

      await record.destroy();
      await groupA.destroy();
      await groupB.destroy();
    });

    test("a group with members cannot be deleted", async () => {
      const group = await helper.factories.group();
      const record = await helper.factories.record();
      const groupMember = await GroupMember.create({
        recordId: record.id,
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

  describe("record helpers", () => {
    let group;
    let record;
    let anotherProfile;
    beforeAll(async () => {
      group = new Group({
        name: "the group",
        type: "manual",
        modelId: "mod_profiles",
      });
      await group.save();
      record = new GrouparooRecord({ modelId: "mod_profiles" });
      await record.save();
      anotherProfile = new GrouparooRecord({ modelId: "mod_profiles" });
      await anotherProfile.save();
    });

    test("it can add a member", async () => {
      await group.addRecord(record);
      const records = await group.$get("records");
      expect(records.length).toBe(1);
      const recordIds = records.map((p) => p.id);
      expect(recordIds).toContain(record.id);
    });

    test("it cannot add a member a second time", async () => {
      await expect(group.addRecord(record)).rejects.toThrow(
        /There is already a GroupMember/
      );

      const records = await group.$get("records");
      expect(records.length).toBe(1);
    });

    test("it can list members", async () => {
      await group.addRecord(anotherProfile);
      const records = await group.$get("records");
      expect(records.length).toBe(2);
    });

    test("it can count members", async () => {
      const count = await group.recordsCount();
      expect(count).toBe(2);
    });

    test("it can remove a member", async () => {
      await group.removeRecord(anotherProfile);
      const records = await group.$get("records");
      expect(records.length).toBe(1);
      const recordIds = records.map((p) => p.id);
      expect(recordIds).toContain(record.id);
      expect(recordIds).not.toContain(anotherProfile.id);
    });

    test("it cannot remove a non-member", async () => {
      await expect(group.removeRecord(anotherProfile)).rejects.toThrow(
        /record is not a member of this group/
      );
    });
  });
});
