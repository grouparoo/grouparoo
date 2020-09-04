import { helper } from "../../utils/specHelper";
import { api, specHelper } from "actionhero";
import { Log } from "../../../src/models/Log";
import { Profile } from "../../../src/models/Profile";
import { Group } from "../../../src/models/Group";
import { Run } from "../../../src/models/Run";
import { Import } from "../../../src/models/Import";
import { GroupMember } from "../../../src/models/GroupMember";
import { SharedGroupTests } from "../../utils/prepareSharedGroupTest";
import { group } from "console";

let actionhero;

describe("models/group", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

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
        await destination.trackGroup(trackedGroup);
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
        expect(foundTasks[0].args[0]).toEqual({
          destinationGuid: destination.guid,
          groupGuid: trackedGroup.guid,
          force: true,
        });
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
        /Validation error/
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

  describe("calculated groups", () => {
    let run: Run;
    let group: Group;
    let mario: Profile;
    let luigi: Profile;
    let peach: Profile;
    let toad: Profile;

    beforeAll(async () => {
      const response = await SharedGroupTests.beforeAll(false);
      mario = response.mario;
      luigi = response.luigi;
      peach = response.peach;
      toad = response.toad;
    });

    afterAll(async () => {
      await SharedGroupTests.afterAll(false);
    });

    beforeEach(async () => {
      const response = await SharedGroupTests.beforeEach();
      group = response.group;
      run = response.run;
    });

    afterEach(async () => {
      await SharedGroupTests.afterEach();
    });

    test("an empty calculated group can be created", async () => {
      const members = await group.$get("groupMembers");
      expect(members.length).toBe(0);
      expect(group.state).toBe("draft");
    });

    test("changing group rules changes the state to initializing and enquires a run, and then back to ready when complete", async () => {
      await api.resque.queue.connection.redis.flushdb();

      await group.setRules([
        { key: "firstName", match: "nobody", operation: { op: "eq" } },
      ]);
      expect(group.state).toBe("initializing");

      let foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].groupGuid).toBe(group.guid);
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // first run to check additions

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(2);
      expect(foundTasks[1].args[0].groupGuid).toBe(group.guid);
      expect(foundTasks[1].args[0].method).toBe("runRemoveGroupMembers");
      await specHelper.runTask("group:run", foundTasks[1].args[0]); // second run to check subtractions

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(3);
      expect(foundTasks[2].args[0].groupGuid).toBe(group.guid);
      expect(foundTasks[2].args[0].method).toBe(
        "removePreviousRunGroupMembers"
      );
      await specHelper.runTask("group:run", foundTasks[2].args[0]); // third run to check old group members

      await group.reload();
      expect(group.state).toBe("ready");
    });

    test("changing the rules will stop previously running runs", async () => {
      await api.resque.queue.connection.redis.flushdb();

      await group.setRules([
        { key: "firstName", match: "nobody", operation: { op: "eq" } },
      ]);
      let foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await specHelper.runTask("group:run", foundTasks[0].args[0]);
      const firstRun = await Run.findOne({
        where: { creatorGuid: group.guid },
      });
      expect(firstRun.state).toBe("running");

      await group.setRules([
        { key: "lastName", match: "nobody", operation: { op: "eq" } },
      ]);
      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await firstRun.reload();
      expect(firstRun.state).toBe("stopped");
    });

    test("group#runAddGroupMembers will create an import for new members, and touch the updatedAt for existing members", async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      const groupMembersCount = await group.runAddGroupMembers(run);
      expect(groupMembersCount).toBe(1);

      // first time
      const _import = await Import.findOne({
        where: { creatorGuid: run.guid },
      });
      expect(_import.profileGuid).toBe(mario.guid);

      // create the groupMember
      await mario.updateGroupMembership();
      const groupMember = await GroupMember.findOne({
        where: { groupGuid: group.guid, profileGuid: mario.guid },
      });
      const firstTime = groupMember.updatedAt.getTime();

      await helper.sleep(1001);

      // second time
      await group.runAddGroupMembers(run);
      await groupMember.reload();
      expect(groupMember.updatedAt.getTime()).toBeGreaterThan(
        groupMember.createdAt.getTime()
      );
      expect(groupMember.updatedAt.getTime()).toBeGreaterThan(firstTime);
    });

    test("group#runRemoveGroupMembers will create imports for profiles which should no longer be part of the group and mark removedAt on the group member", async () => {
      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
      ]);
      const groupMembersCount = await group.runAddGroupMembers(run);
      expect(groupMembersCount).toBe(2);

      // create the groupMembers
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      const firstGroupMembers = await GroupMember.findAll({
        where: { groupGuid: group.guid },
      });
      expect(firstGroupMembers.length).toBe(2);

      // next run
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      const nextRun = await helper.factories.run();
      await group.runAddGroupMembers(nextRun);
      await group.runRemoveGroupMembers(nextRun);
      const imports = await Import.findAll({
        where: { creatorGuid: nextRun.guid },
      });
      expect(imports.length).toBe(1);
      expect(imports[0].profileGuid).toBe(luigi.guid);

      const luigiGroupMember = await GroupMember.findOne({
        where: { profileGuid: luigi.guid, groupGuid: group.guid },
      });
      expect(luigiGroupMember.removedAt).toBeTruthy();

      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();

      const secondGroupMembers = await GroupMember.findAll({
        where: { groupGuid: group.guid },
      });
      expect(secondGroupMembers.length).toBe(1);

      await nextRun.destroy();
    });

    test("runAddGroupMembers updates calculatedAt", async () => {
      expect(group.calculatedAt).toBeFalsy();
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runAddGroupMembers(run);
      expect(group.calculatedAt).toBeTruthy();
    });

    test("runRemoveGroupMembers updates calculatedAt", async () => {
      expect(group.calculatedAt).toBeFalsy();
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runRemoveGroupMembers(run);
      expect(group.calculatedAt).toBeTruthy();
    });

    test("groups can calculate when they will next be calculated based on the setting", async () => {
      expect(group.calculatedAt).toBeFalsy();
      expect((await group.nextCalculatedAt()).getTime() / 1000).toBeCloseTo(
        new Date().getTime() / 1000
      );
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runAddGroupMembers(run);
      expect((await group.nextCalculatedAt()).getTime()).toBeGreaterThan(
        new Date().getTime()
      );
    });

    test("group#run will create imports for every group member when force=true", async () => {
      await api.resque.queue.connection.redis.flushdb();

      await group.update({ type: "manual", state: "ready" });
      await group.addProfile(mario);
      await group.addProfile(luigi);

      let imports = await Import.findAll();
      expect(imports.length).toBe(2);
      await Import.destroy({ truncate: true });

      const newRun = await helper.factories.run();
      await group.run(true);
      const foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("group:run", foundTasks[0].args[0]);

      imports = await Import.findAll();
      expect(imports.map((i) => i.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
      );

      expect(imports[0].data).toEqual({});
      expect(imports[0].rawData).toEqual({});
      expect(imports[1].data).toEqual({});
      expect(imports[1].rawData).toEqual({});

      await newRun.destroy();
    });

    test("runUpdateMembers will create imports which include a destinationGuid in _meta if provided", async () => {
      await api.resque.queue.connection.redis.flushdb();

      await group.update({ type: "manual", state: "ready" });
      await group.addProfile(mario);
      await group.addProfile(luigi);

      let imports = await Import.findAll();
      expect(imports.length).toBe(2);
      await Import.destroy({ truncate: true });

      const newRun = await helper.factories.run();
      await group.run(true, "abc123");
      const foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("group:run", foundTasks[0].args[0]);

      imports = await Import.findAll();
      expect(imports.map((i) => i.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
      );

      const data = { _meta: { destinationGuid: "abc123" } };
      expect(imports[0].data).toEqual(data);
      expect(imports[0].rawData).toEqual(data);
      expect(imports[1].data).toEqual(data);
      expect(imports[1].rawData).toEqual(data);

      await newRun.destroy();
    });

    test("group rules must have a related profileProperty Ryle", async () => {
      try {
        await group.setRules([
          { key: "a", match: "cool", operation: { op: "eq" } },
        ]);
        throw new Error("should not get here");
      } catch (error) {
        expect(error.toString()).toMatch(/cannot find Profile Property Rule a/);
      }
    });

    test("recalculating group membership will reuse existing groupMembers", async () => {
      await group.update({ matchType: "all" });
      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.runAddGroupMembers(run);
      await mario.updateGroupMembership();
      const members = await group.$get("groupMembers");
      expect(members.length).toBe(1);
      const groupMemberGuid = members[0].guid;

      const secondRun = await helper.factories.run();
      await group.runAddGroupMembers(secondRun);
      await mario.updateGroupMembership();
      const membersAgain = await group.$get("groupMembers");
      expect(membersAgain[0].guid).toBe(groupMemberGuid);
      await secondRun.destroy();
    });

    test("adding and removing members from a calculated group produces log entries", async () => {
      await Log.destroy({ truncate: true });

      await group.update({ matchType: "all" });
      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
      ]);
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      let members = await group.$get("groupMembers");
      expect(members.length).toBe(2);

      let createCount = await Log.count({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(createCount).toBe(2);

      await group.setRules([
        { key: "lastName", match: "Mario", operation: { op: "eq" } },
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      const secondRun = await helper.factories.run();
      await mario.updateGroupMembership();
      await luigi.updateGroupMembership();
      members = await group.$get("groupMembers");
      expect(members.length).toBe(1);

      createCount = await Log.count({
        where: { topic: "groupMember", verb: "create" },
      });
      expect(createCount).toBe(2); // no change

      const destroyCount = await Log.count({
        where: { topic: "groupMember", verb: "destroy" },
      });
      expect(destroyCount).toBe(1);

      await secondRun.destroy();
    });

    test("calculating a group with more than 10 rules produces an error", async () => {
      group.matchType = "all";
      await expect(
        group.setRules([
          { key: "userId", match: "Mario", operation: { op: "eq" } },
          { key: "lastName", match: "Mario", operation: { op: "eq" } },
          { key: "firstName", match: "Mario", operation: { op: "eq" } },
          { key: "email", match: "Mario", operation: { op: "eq" } },
          { key: "isVIP", match: "Mario", operation: { op: "eq" } },
          { key: "ltv", match: "0", operation: { op: "eq" } },
          { key: "ltv", match: "1", operation: { op: "eq" } },
          { key: "ltv", match: "2", operation: { op: "eq" } },
          { key: "ltv", match: "3", operation: { op: "eq" } },
          { key: "ltv", match: "4", operation: { op: "eq" } },
          { key: "ltv", match: "5", operation: { op: "eq" } },
        ])
      ).rejects.toThrow(/too many group rules/);
    });

    describe("group rules", () => {
      test("it returns 0 members when no rules exist on the group", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([]);
        expect(await group.countPotentialMembers()).toBe(0);
      });
    });

    describe("convenientRules", () => {
      test("exists", async () => {
        const convenientRules = [{ key: "email", operation: { op: "exists" } }];
        const rules = [
          { key: "email", match: "null", operation: { op: "ne" } },
        ];

        expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
      });

      test("notExists", async () => {
        const convenientRules = [
          { key: "email", operation: { op: "notExists" } },
        ];
        const rules = [
          { key: "email", match: "null", operation: { op: "eq" } },
        ];

        expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
      });

      test("relative_gt", async () => {
        const convenientRules = [
          {
            key: "lastLoginAt",
            operation: { op: "relative_gt" },
            relativeMatchNumber: 1,
            relativeMatchUnit: "days",
          },
        ];
        const rules = [
          {
            key: "lastLoginAt",
            operation: { op: "gt" },
            relativeMatchDirection: "subtract",
            relativeMatchNumber: 1,
            relativeMatchUnit: "days",
          },
        ];

        expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
      });

      test("relative_lt", async () => {
        const convenientRules = [
          {
            key: "lastLoginAt",
            operation: { op: "relative_lt" },
            relativeMatchNumber: 1,
            relativeMatchUnit: "days",
          },
        ];
        const rules = [
          {
            key: "lastLoginAt",
            operation: { op: "lt" },
            relativeMatchDirection: "add",
            relativeMatchNumber: 1,
            relativeMatchUnit: "days",
          },
        ];

        expect(group.fromConvenientRules(convenientRules)).toEqual(rules);
      });
    });

    describe("#updateProfileMembership", () => {
      describe("manual group", () => {
        test("manual groups leave memberships where they are", async () => {
          await group.update({ type: "manual" });
          await group.addProfile(mario);

          let members = await group.$get("groupMembers");
          expect(members.length).toBe(1);

          let belongs = await group.updateProfileMembership(mario);
          expect(belongs).toBe(true);

          belongs = await group.updateProfileMembership(luigi);
          expect(belongs).toBe(false);
        });

        test("manual groups will remove members if the group is deleted", async () => {
          await group.update({ type: "manual", state: "deleted" });
          await group.addProfile(mario);

          let members = await group.$get("groupMembers");
          expect(members.length).toBe(1);

          let belongs = await group.updateProfileMembership(mario);
          expect(belongs).toBe(false);

          belongs = await group.updateProfileMembership(luigi);
          expect(belongs).toBe(false);

          members = await group.$get("groupMembers");
          expect(members.length).toBe(0);
        });
      });

      describe("calculated group", () => {
        test("groups with no rules will not have members added", async () => {
          await group.setRules([]);
          const belongs = await group.updateProfileMembership(mario);
          expect(belongs).toBe(false);
        });

        test("it will add a profile not yet in the group", async () => {
          let members = await group.$get("groupMembers");
          expect(members.length).toBe(0);

          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          const belongs = await group.updateProfileMembership(mario);
          expect(belongs).toBe(true);

          members = await group.$get("groupMembers");
          expect(members.length).toBe(1);
          expect(members[0].profileGuid).toBe(mario.guid);
        });

        test("it will leave a group member in the group", async () => {
          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          const belongsA = await group.updateProfileMembership(mario);
          expect(belongsA).toBe(true);

          const belongsB = await group.updateProfileMembership(mario);
          expect(belongsB).toBe(true);

          const members = await group.$get("groupMembers");
          expect(members.length).toBe(1);
          expect(members[0].profileGuid).toBe(mario.guid);
        });

        test("it will remove a profile from the group", async () => {
          await group.update({ matchType: "all" });
          await group.setRules([
            { key: "lastName", match: "Mario", operation: { op: "eq" } },
            { key: "firstName", match: "Mario", operation: { op: "eq" } },
          ]);

          let belongs = await group.updateProfileMembership(mario);
          expect(belongs).toBe(true);

          let members = await group.$get("groupMembers");
          expect(members.length).toBe(1);
          expect(members[0].profileGuid).toBe(mario.guid);

          await group.setRules([
            { key: "lastName", match: "Lakitu", operation: { op: "eq" } },
          ]);

          belongs = await group.updateProfileMembership(mario);
          expect(belongs).toBe(false);

          members = await group.$get("groupMembers");
          expect(members.length).toBe(0);
        });
      });
    });

    describe("#countPotentialMembers", () => {
      test("it will count the profiles which would become members at the next run by default", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "gt" },
          },
          { key: "lastName", match: "mario", operation: { op: "iLike" } },
        ]);
        const count = await group.countPotentialMembers();
        expect(count).toBe(3);
      });

      test("it can return a count of profiles which would match an arbitrary rule set", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([]);
        const rules = [
          {
            key: "lastLoginAt",
            match: new Date(100000).getTime(),
            operation: { op: "gte" },
          },
          { key: "lastName", match: "mario", operation: { op: "iLike" } },
        ];
        const count = await group.countPotentialMembers(rules);
        expect(count).toBe(1);
      });
    });

    describe("#countComponentMembersFromRules", () => {
      test("we can count the membership subtotals for each part of the group rule", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([]);

        const rules = [
          {
            key: "firstName",
            match: "%",
            operation: { op: "iLike" },
          },
          {
            key: "lastLoginAt",
            match: new Date(100000).getTime(),
            operation: { op: "gte" },
          },
          {
            key: "lastName",
            match: "mario",
            operation: { op: "iLike" },
          },
        ];

        const count = await group.countPotentialMembers(rules);
        expect(count).toBe(1);

        const {
          componentCounts,
          funnelCounts,
        } = await group.countComponentMembersFromRules(rules);

        // if we just had the rule `firstName: { match: "%", op: "iLike" },` there would be 4 group members
        // if we just had the rule `lastLoginAt: { match: new Date(100000).getTime(), op: "gte" }` there would be 2 group members
        // if we just had the rule `lastName: { match: "mario", op: "iLike" }` there would be 2 group members
        expect(componentCounts).toEqual([4, 2, 2]);

        // checking just the first rule (`firstName`) there would have been 2 group members
        // checking the first & second rule (`firstName` + `lastLoginAt`) there would have been 2 group members
        // checking all 3 rules (`firstName` + `lastLoginAt` + `lastLoginAt`), there would have been 1 group member
        expect(funnelCounts).toEqual([4, 2, 1]);
      });
    });
  });
});
