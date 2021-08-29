import { helper } from "@grouparoo/spec-helper";
import { api, config, task, specHelper } from "actionhero";
import {
  Group,
  Profile,
  ProfileProperty,
  Schedule,
  Source,
} from "../../../../src";

describe("tasks/profile:checkReady", () => {
  let source: Source;
  let schedule: Schedule;
  let group: Group;

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    source = await Source.findOne();
    schedule = await helper.factories.schedule(source);
  });

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

  describe("profiles:checkReady", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profiles:checkReady", {});
      const found = await specHelper.findEnqueuedTasks("profiles:checkReady");
      expect(found.length).toEqual(1);
    });

    test("it will find profiles which are not ready but have all properties ready", async () => {
      const mario = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "pending" });

      const luigi = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "pending" });

      // toad is ready already
      const toad = await helper.factories.profile();
      await toad.import();
      await toad.update({ state: "ready" });

      // peach has 1 pending profile property
      const peach = await helper.factories.profile();
      await peach.import();
      const peachProperty = await ProfileProperty.findOne({
        where: { profileId: peach.id },
      });
      await peachProperty.update({ state: "pending" });
      await peach.update({ state: "pending" });

      // bowser has all pending profile properties
      const bowser = await helper.factories.profile();
      await bowser.import();
      const bowserProperties = await ProfileProperty.findAll({
        where: { profileId: bowser.id },
      });
      for (const p of bowserProperties) {
        await p.update({ state: "pending" });
      }
      await bowser.update({ state: "pending" });

      await specHelper.runTask("profiles:checkReady", {});

      await mario.reload();
      await luigi.reload();
      await toad.reload();
      await peach.reload();
      await bowser.reload();

      expect(mario.state).toBe("ready");
      expect(luigi.state).toBe("ready");
      expect(toad.state).toBe("ready");
      expect(peach.state).toBe("pending");
      expect(bowser.state).toBe("pending");

      await mario.destroy();
      await luigi.destroy();
      await toad.destroy();
      await peach.destroy();
      await bowser.destroy();
    });

    test("it updates the group memberships", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ lastName: ["Mario"] });
      await profile.import();
      await profile.update({ state: "pending" });

      let groups = await profile.$get("groups");
      expect(groups.length).toBe(0);

      await specHelper.runTask("profiles:checkReady", {});

      await profile.reload();
      expect(profile.state).toBe("ready");

      groups = await profile.$get("groups");
      expect(groups.length).toBe(1);

      await profile.destroy();
    });

    test("it updates the imports new data and updates the run counts", async () => {
      const run = await helper.factories.run(schedule);

      const _importA = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Mario",
        noExist: "here",
      });
      const _importB = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Super",
        lastName: "Mario",
      });

      await specHelper.runTask("import:associateProfile", {
        importId: _importA.id,
      });
      await specHelper.runTask("import:associateProfile", {
        importId: _importB.id,
      });

      const profile = await Profile.findOne();
      await profile.import();
      await profile.update({ state: "pending" });

      expect(_importA.newGroupIds).toEqual([]);
      expect(_importA.newProfileProperties).toEqual({});
      expect(_importB.newGroupIds).toEqual([]);
      expect(_importB.newProfileProperties).toEqual({});

      expect(run.profilesCreated).toEqual(0);
      expect(run.profilesImported).toEqual(0);

      await specHelper.runTask("profiles:checkReady", {});

      await profile.reload();
      expect(profile.state).toBe("ready");

      await _importA.reload();
      await _importB.reload();
      await run.updateTotals();

      expect(_importA.newProfileProperties.email).toEqual([
        "mario@example.com",
      ]);
      expect(_importA.newProfileProperties.firstName).toEqual(["Super"]);
      expect(_importA.newProfileProperties.lastName).toEqual(["Mario"]);
      expect(_importA.newGroupIds).toEqual([group.id]);
      expect(_importA.groupsUpdatedAt).toBeTruthy();
      expect(_importA.exportedAt).toBeNull();

      expect(_importB.newProfileProperties.email).toEqual([
        "mario@example.com",
      ]);
      expect(_importB.newProfileProperties.firstName).toEqual(["Super"]);
      expect(_importB.newProfileProperties.lastName).toEqual(["Mario"]);
      expect(_importB.newGroupIds).toEqual([group.id]);
      expect(_importB.groupsUpdatedAt).toBeTruthy();
      expect(_importB.exportedAt).toBeNull();

      expect(run.profilesCreated).toEqual(1);
      expect(run.profilesImported).toEqual(1);
    });

    test("it will optionally mark the imports as exported to complete the lifecycle", async () => {
      const run = await helper.factories.run(schedule);

      const _importA = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Mario",
        noExist: "here",
      });

      await specHelper.runTask("import:associateProfile", {
        importId: _importA.id,
      });

      const profile = await Profile.findOne();
      await profile.import();
      await profile.update({ state: "pending" });

      process.env.GROUPAROO_DISABLE_EXPORTS = "true";
      await specHelper.runTask("profiles:checkReady", {});

      await profile.reload();
      expect(profile.state).toBe("ready");

      await _importA.reload();
      expect(_importA.groupsUpdatedAt).toBeTruthy();
      expect(_importA.profileUpdatedAt).toBeTruthy();
      expect(_importA.exportedAt).toBeTruthy();

      process.env.GROUPAROO_DISABLE_EXPORTS = "false";
    });
  });
});
