import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Group } from "./../../../src/models/Group";
import { Import } from "./../../../src/models/Import";
import { Profile } from "./../../../src/models/Profile";
import { GroupMember } from "./../../../src/models/GroupMember";
import { Run } from "../../../src/models/Run";

describe("tasks/group:run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

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
    });

    test("can be enqueued", async () => {
      await group.run();
      const found = await specHelper.findEnqueuedTasks("group:run");
      expect(found.length).toEqual(1);
    });

    test("if the run has not yet exported all profiles, the task will be re-enqueued", async () => {
      const run = await helper.factories.run(group, { state: "running" });
      await run.update({ exportsCreated: 1 });

      await specHelper.runTask("group:run", {
        groupGuid: group.guid,
        runGuid: run.guid,
      });

      const found = await specHelper.findEnqueuedTasks("group:run");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeGreaterThan(0);
    });

    it("can create imports for profiles which should be added", async () => {
      let foundTasks = [];
      let imports = [];
      await group.setRules([
        { key: "email", match: "%@%", operation: { op: "like" } },
      ]);

      expect(group.state).toBe("updating");

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBeUndefined();
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // adding profiles (some found, enqueue add again)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runAddGroupMembers");
      const run = await Run.findByGuid(foundTasks[0].args[0].runGuid);
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runAddGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // adding profiles (none found, enqueue remove)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runRemoveGroupMembers");
      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runAddGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, (none found, enqueue removePreviousRunGroupMembers)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe(
        "removePreviousRunGroupMembers"
      );
      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("runRemoveGroupMembers");

      // complete pending imports
      await ImportWorkflow();

      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, (none found, enqueue run state)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(0);

      imports = await Import.findAll();
      expect(imports.length).toBe(4);
      expect(imports.map((e) => e.profileGuid).sort()).toEqual(
        [mario, luigi, peach, toad].map((p) => p.guid).sort()
      );

      await group.reload();
      expect(group.state).toBe("ready");

      await Promise.all(
        [mario, luigi, peach, toad].map(async (p) => p.updateGroupMembership())
      );

      const groupMembers = await group.$get("groupMembers");
      expect(groupMembers.map((mem) => mem.profileGuid).sort()).toEqual(
        [mario, luigi, peach, toad].map((p) => p.guid).sort()
      );
    });

    it("can create imports for profiles which should be removed", async () => {
      let foundTasks = [];
      let imports = [];
      await group.setRules([
        {
          key: "lastName",
          match: "Mario",
          operation: { op: "eq" },
        },
      ]);

      expect(group.state).toBe("updating");

      imports = await Import.findAll();
      expect(imports.length).toBe(0); // no imports to add profiles to the group

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBeUndefined();
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // adding profiles (some found, enqueue add again)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runAddGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // adding profiles (none found, enqueue remove)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runRemoveGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // removing profiles (found some, enqueue remove)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runRemoveGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, (none found, enqueue removePreviousRunGroupMembers

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe(
        "removePreviousRunGroupMembers"
      );

      // complete pending imports
      await ImportWorkflow();

      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, (none found, enqueue run state)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(0);

      imports = await Import.findAll();
      expect(imports.length).toBe(2); // only the removals
      expect(imports.map((e) => e.profileGuid).sort()).toEqual(
        [peach, toad].map((p) => p.guid).sort()
      );

      await group.reload();
      expect(group.state).toBe("ready");

      await Promise.all(
        [mario, luigi, peach, toad].map(async (p) => p.updateGroupMembership())
      );

      const groupMembers = await group.$get("groupMembers");
      expect(groupMembers.map((mem) => mem.profileGuid).sort()).toEqual(
        [mario, luigi].map((p) => p.guid).sort()
      );
    });

    it("can remove profiles which should be removed by a previous run that was stopped", async () => {
      let foundTasks = [];
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
        groupGuid: group.guid,
        profileGuid: bowser.guid,
        removedAt: new Date(),
      });

      expect((await group.$get("groupMembers")).length).toBe(1);

      await api.resque.queue.connection.redis.flushdb();
      await group.run();

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBeUndefined();
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // none found, enqueue remove

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runRemoveGroupMembers");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // none found, enqueue removePreviousRunGroupMembers

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe(
        "removePreviousRunGroupMembers"
      );
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, found some, enqueue again

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe(
        "removePreviousRunGroupMembers"
      );

      // complete pending imports
      await ImportWorkflow();

      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // found none, enqueue state

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(0);

      const imports = await Import.findAll();
      expect(imports.length).toBe(1); // only the removal
      await bowser.updateGroupMembership();

      expect((await group.$get("groupMembers")).length).toBe(0);
      await bowser.destroy();
    });

    it("will pass destinationGuid to all run steps", async () => {
      let foundTasks = [];
      await group.run(false, "abc123");

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].destinationGuid).toBe("abc123");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // none found, enqueue remove

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe("runRemoveGroupMembers");
      expect(foundTasks[0].args[0].destinationGuid).toBe("abc123");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // none found, enqueue removePreviousRunGroupMembers

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].method).toBe(
        "removePreviousRunGroupMembers"
      );
      expect(foundTasks[0].args[0].destinationGuid).toBe("abc123");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // found none, enqueue state

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      expect(foundTasks.length).toBe(0);
      foundTasks = await specHelper.findEnqueuedTasks("run:determineState"); // run state
    });

    it("will set run.force if that option is provided to the task", async () => {
      const group = await helper.factories.group();
      await group.run(true);
      const foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await specHelper.runTask("group:run", foundTasks[0].args[0]);
      const run = await Run.findOne({ where: { creatorGuid: group.guid } });
      expect(run.state).toBe("running");
      expect(run.force).toBe(true);
    });

    it("the group run will not complete until all imports are complete", async () => {
      await group.setRules([
        { key: "email", match: "%@%", operation: { op: "like" } },
      ]);

      expect(group.state).toBe("updating");

      let foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // adding profiles (some found, enqueue add again)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");

      const run = await Run.findByGuid(foundTasks[0].args[0].runGuid);
      expect(run.state).toBe("running");

      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // adding profiles (none found, enqueue remove)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, (none found, enqueue removePreviousRunGroupMembers)

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]); // remove profiles, (none found, enqueue run state)

      await run.reload();
      await group.reload();

      expect(group.state).toBe("updating");
      expect(run.state).toBe("running");

      // check again

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]);

      await run.reload();
      await group.reload();

      expect(group.state).toBe("updating");
      expect(run.state).toBe("running");

      // complete pending imports
      await ImportWorkflow();

      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await api.resque.queue.connection.redis.flushdb();
      await specHelper.runTask("group:run", foundTasks[0].args[0]);

      await run.reload();
      await group.reload();

      expect(group.state).toBe("ready");
      expect(run.state).toBe("complete");
    });
  });
});
