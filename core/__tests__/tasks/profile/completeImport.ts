import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Group, Profile, ProfileProperty, Property } from "../../..";

describe("tasks/profile:completeImport", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let group: Group;

  beforeAll(async () => {
    group = await helper.factories.group();
    await group.update({ type: "calculated" });
    await group.setRules([
      {
        key: "lastName",
        match: "Mario",
        operation: { op: "iLike" },
      },
    ]);
    await group.update({ state: "ready" });
  });

  describe("profile:completeImport", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profile:completeImport", { profileGuid: "abc123" });
      const found = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );
      expect(found.length).toEqual(1);
    });

    test("it re-enqueues the task if the profile is not ready", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "pending" });

      await specHelper.runTask("profile:completeImport", {
        profileGuid: profile.guid,
      });

      await profile.reload();
      expect(profile.state).toBe("pending");

      const foundTasks = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        profileGuid: profile.guid,
      });

      await profile.destroy();
    });

    test("it re-enqueues the task if a profile property becomes pending", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "ready" });

      const emailProperty = await Property.findOne({ where: { key: "email" } });
      const profileProperty = await ProfileProperty.findOne({
        where: { profileGuid: profile.guid, propertyGuid: emailProperty.guid },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profile:completeImport", {
        profileGuid: profile.guid,
      });

      const foundTasks = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        profileGuid: profile.guid,
      });

      await profile.destroy();
    });

    test("it updates the group memberships", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ lastName: ["Mario"] });
      await profile.import();
      await profile.update({ state: "ready" });

      let groups = await profile.$get("groups");
      expect(groups.length).toBe(0);

      await specHelper.runTask("profile:completeImport", {
        profileGuid: profile.guid,
      });

      groups = await profile.$get("groups");
      expect(groups.length).toBe(1);

      await profile.destroy();
    });

    test("it updates the imports new data and updates the run counts", async () => {
      const run = await helper.factories.run();

      const _import = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Mario",
        noExist: "here",
      });

      await specHelper.runTask("import:associateProfile", {
        importGuid: _import.guid,
      });

      const profile = await Profile.findOne();
      await profile.import();
      await profile.update({ state: "ready" });

      expect(_import.newGroupGuids).toEqual([]);
      expect(_import.newProfileProperties).toEqual({});

      expect(run.profilesCreated).toEqual(0);
      expect(run.profilesImported).toEqual(0);

      await specHelper.runTask("profile:completeImport", {
        profileGuid: profile.guid,
      });

      await _import.reload();
      await run.updateTotals();

      expect(_import.newProfileProperties.email).toEqual(["mario@example.com"]);
      expect(_import.newProfileProperties.firstName).toEqual(["Mario"]);
      expect(_import.newProfileProperties.lastName).toEqual(["Mario"]);
      expect(_import.newGroupGuids).toEqual([group.guid]);

      expect(run.profilesCreated).toEqual(1);
      expect(run.profilesImported).toEqual(1);
    });

    test("it will enqueue a profile:export task", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "ready" });

      await specHelper.runTask("profile:completeImport", {
        profileGuid: profile.guid,
      });

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toEqual(1);
      expect(foundTasks[0].args[0]).toEqual({
        force: false,
        profileGuid: profile.guid,
      });
    });
  });
});
