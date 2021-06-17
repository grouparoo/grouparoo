import { helper } from "@grouparoo/spec-helper";
import { api, config, task, specHelper } from "actionhero";
import { Group, Profile, ProfileProperty, Property } from "../../../src";

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
        operation: {
          op: config.sequelize.dialect === "postgres" ? "iLike" : "like",
        },
      },
    ]);
    await group.update({ state: "ready" });
  });

  describe("profile:completeImport", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profile:completeImport", {
        profileIds: ["abc123"],
        toExport: true,
      });
      const found = await specHelper.findEnqueuedTasks(
        "profile:completeImport"
      );
      expect(found.length).toEqual(1);
    });

    test("it will not export the profile if it is not ready", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "pending" });

      await specHelper.runTask("profile:completeImport", {
        profileIds: [profile.id],
        toExport: true,
      });

      await profile.reload();
      expect(profile.state).toBe("pending");

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toBe(0);

      await profile.destroy();
    });

    test("it will not export the profile if a profile property is not ready", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "ready" });

      const emailProperty = await Property.findOne({ where: { key: "email" } });
      const profileProperty = await ProfileProperty.findOne({
        where: { profileId: profile.id, propertyId: emailProperty.id },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profile:completeImport", {
        profileIds: [profile.id],
        toExport: true,
      });

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toBe(0);

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
        profileIds: [profile.id],
        toExport: true,
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
        importId: _import.id,
      });

      const profile = await Profile.findOne();
      await profile.import();
      await profile.update({ state: "ready" });

      expect(_import.newGroupIds).toEqual([]);
      expect(_import.newProfileProperties).toEqual({});

      expect(run.profilesCreated).toEqual(0);
      expect(run.profilesImported).toEqual(0);

      await specHelper.runTask("profile:completeImport", {
        profileIds: [profile.id],
        toExport: true,
      });

      await _import.reload();
      await run.updateTotals();

      expect(_import.newProfileProperties.email).toEqual(["mario@example.com"]);
      expect(_import.newProfileProperties.firstName).toEqual(["Mario"]);
      expect(_import.newProfileProperties.lastName).toEqual(["Mario"]);
      expect(_import.newGroupIds).toEqual([group.id]);

      expect(run.profilesCreated).toEqual(1);
      expect(run.profilesImported).toEqual(1);
    });

    test("it will enqueue a profile:export task", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "ready" });

      await specHelper.runTask("profile:completeImport", {
        profileIds: [profile.id],
        toExport: true,
      });

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toEqual(1);
      expect(foundTasks[0].args[0]).toEqual({
        force: false,
        profileId: profile.id,
      });
    });

    test("optionally enqueuing a profile:export task can be skipped", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "ready" });

      await specHelper.runTask("profile:completeImport", {
        profileIds: [profile.id],
        toExport: false,
      });

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toEqual(0);
    });
  });
});
