import { helper } from "@grouparoo/spec-helper";
import {
  Destination,
  Group,
  GroupMember,
  GrouparooRecord,
  Import,
  Log,
  Run,
  GrouparooModel,
} from "../../../src";
import { GroupOps } from "../../../src/modules/ops/group";

describe("models/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;

  beforeAll(async () => {
    model = await helper.factories.model();
  });

  test("a group can be created", async () => {
    const group = new Group({
      name: "test group",
      modelId: model.id,
    });

    await group.save();

    expect(group.id.length).toBe(40);
    expect(group.createdAt).toBeTruthy();
    expect(group.updatedAt).toBeTruthy();
    expect(group.state).toBe("draft");
  });

  test("groups can be created in the ready state", async () => {
    const group = new Group({
      name: "test group ready",
      state: "ready",
      modelId: model.id,
    });
    await group.save();
    expect(group.state).toBe("ready");
  });

  test("a group cannot be created with a deleted state model", async () => {
    await model.update({ state: "deleted" });

    const group = new Group({
      name: "test group",
      modelId: model.id,
    });

    await expect(group.save()).rejects.toThrow(
      /cannot find ready model with id/
    );

    await model.update({ state: "ready" });
  });

  test("a deleted group can be saved with a deleted state model", async () => {
    const group = new Group({
      name: "test group",
      modelId: model.id,
    });

    await group.save();
    await model.update({ state: "deleted" });
    await group.update({ name: "abc", state: "deleted" });
    expect(group.name).toBe("abc");
    await model.update({ state: "ready" });
  });

  test("creating a group creates a log entry with a relevant message", async () => {
    const log = await Log.findOne({
      where: { verb: "create", topic: "group" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(log).toBeTruthy();
    expect(log.message).toBe('group "test group" created');
  });

  test("deleting a group creates a log entry with a relevant message", async () => {
    const group = await Group.create({
      name: "doomed group",
      modelId: model.id,
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
        modelId: "foo",
      })
    ).rejects.toThrow(/cannot find model with id "foo"/);
  });

  test("groups cannot change models", async () => {
    const group = await Group.create({
      name: "doomed group",
      modelId: model.id,
    });
    await expect(group.update({ modelId: "foo" })).rejects.toThrow(
      /cannot change models/
    );

    await group.destroy();
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
        modelId: model.id,
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
        modelId: model.id,
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
        modelId: model.id,
      });

      expect(group.name).toBe("");

      await group.destroy();
    });

    test("draft groups can share the same name, but not with ready groups", async () => {
      const groupOne = await Group.create({
        modelId: model.id,
      });
      const groupTwo = await Group.create({
        modelId: model.id,
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
        modelId: model.id,
        name: "1",
        state: "ready",
      });
      const groupTwo = await Group.create({
        modelId: model.id,
        name: "2",
        state: "deleted",
      });
      const groupThree = await Group.create({
        modelId: model.id,
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
        modelId: model.id,
        name: "calc-group",
        type: "calculated",
        state: "bla",
      });
      await expect(group.save()).rejects.toThrow(
        /cannot transition group state from draft to bla/
      );
    });

    test("deleting a group creates a log entry", async () => {
      const group = await Group.create({
        name: "bye group",
        modelId: model.id,
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
          modelId: model.id,
        });

        const destination = await helper.factories.destination();
        await destination.updateTracking("group", group.id);
        await destination.update({ state: "ready" });

        await expect(group.destroy()).rejects.toThrow(
          /this group still in use by 1 destinations, cannot delete/
        );

        await destination.updateTracking("none");
        await group.destroy(); // does not throw
      });

      test("a group cannot be deleted if a deleted destination is tracking it", async () => {
        const group = await Group.create({
          name: "tracked group",
          modelId: model.id,
        });

        const destination = await helper.factories.destination();
        await destination.updateTracking("group", group.id);
        await destination.update({ state: "deleted" });

        await expect(group.destroy()).rejects.toThrow(
          /this group still in use by 1 destinations, cannot delete/
        );

        await destination.updateTracking("none");
        await group.destroy(); // does not throw
      });

      test.each(["ready", "deleted"])(
        "a group can be deleted even if a %p destination membership is using it",
        async (destinationState) => {
          const group = await Group.create({
            name: "tracked group",
            modelId: model.id,
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
          modelId: model.id,
          state: "ready",
        });

        const taggedGroup = await Group.create({
          name: "taged group",
          modelId: model.id,
          state: "ready",
        });

        const destination: Destination = await helper.factories.destination();
        const { newRun } = await destination.updateTracking(
          "group",
          trackedGroup.id
        );
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
        expect(runningRuns[0].id).not.toBe(newRun.id);

        await destination.updateTracking("none");
        await trackedGroup.destroy();
        await taggedGroup.destroy();
      });

      test("deleting a group that a deleted destination had as a membership will not enqueue a run", async () => {
        const trackedGroup = await Group.create({
          name: "tracked group",
          modelId: model.id,
          state: "ready",
        });

        const taggedGroup = await Group.create({
          name: "taged group",
          modelId: model.id,
          state: "ready",
        });

        const destination = await helper.factories.destination();
        await destination.updateTracking("group", trackedGroup.id);
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

      await GroupOps.updateRecords([record.id], "group", group.id); // make an import
      const groupMember = await GroupMember.create({
        recordId: record.id,
        groupId: group.id,
      });

      let log = await Log.findOne({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(log.message).toMatch(/added to group/);

      await groupMember.destroy();
      await GroupOps.updateRecords([record.id], "group", group.id); // make an import

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
    let group: Group;
    let record: GrouparooRecord;
    let anotherProfile: GrouparooRecord;
    beforeAll(async () => {
      group = new Group({
        name: "the group",
        modelId: model.id,
      });
      await group.save();
      record = new GrouparooRecord({ modelId: model.id });
      await record.save();
      anotherProfile = new GrouparooRecord({ modelId: model.id });
      await anotherProfile.save();
    });

    test("it can add a member", async () => {
      await GroupMember.create({ recordId: record.id, groupId: group.id });

      const records = await group.$get("records");
      expect(records.length).toBe(1);
      const recordIds = records.map((p) => p.id);
      expect(recordIds).toContain(record.id);
    });

    test("it cannot add a member a second time", async () => {
      await expect(
        GroupMember.create({ recordId: record.id, groupId: group.id })
      ).rejects.toThrow(/There is already a GroupMember/);

      const records = await group.$get("records");
      expect(records.length).toBe(1);
    });

    test("it can list members", async () => {
      await GroupMember.create({
        recordId: anotherProfile.id,
        groupId: group.id,
      });

      const records = await group.$get("records");
      expect(records.length).toBe(2);
    });

    test("it can count members", async () => {
      const count = await group.recordsCount();
      expect(count).toBe(2);
    });

    test("it can remove a member", async () => {
      await GroupMember.destroy({ where: { recordId: anotherProfile.id } });

      const records = await group.$get("records");
      expect(records.length).toBe(1);
      const recordIds = records.map((p) => p.id);
      expect(recordIds).toContain(record.id);
      expect(recordIds).not.toContain(anotherProfile.id);
    });
  });
});
