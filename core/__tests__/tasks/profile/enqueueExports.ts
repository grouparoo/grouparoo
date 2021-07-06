import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Import,
  plugin,
  Profile,
  ProfileProperty,
  Property,
} from "../../../src";

describe("tasks/profiles:enqueueExports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  afterEach(async () => {
    await plugin.updateSetting("core", "runs-profile-batch-size", 100);
  });

  describe("profiles:enqueueExports", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profiles:enqueueExports", {
        profileId: "abc123",
      });
      const found = await specHelper.findEnqueuedTasks(
        "profiles:enqueueExports"
      );
      expect(found.length).toEqual(1);
    });

    test("it will not export the profile if it is not ready", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "pending" });

      const _import: Import = await helper.factories.import(
        null,
        {},
        profile.id
      );
      await _import.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("profiles:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toBe(0);

      await profile.destroy();
    });

    test("it will not export the profile if a profile property is not ready", async () => {
      const profile = await helper.factories.profile();
      await profile.import();
      await profile.update({ state: "ready" });

      const _import: Import = await helper.factories.import(
        null,
        {},
        profile.id
      );
      await _import.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      const emailProperty = await Property.findOne({ where: { key: "email" } });
      const profileProperty = await ProfileProperty.findOne({
        where: { profileId: profile.id, propertyId: emailProperty.id },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profiles:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toBe(0);

      await profile.destroy();
    });

    test("it will find profiles that are ready and have an import pending for export", async () => {
      // mario is ready and has an import pending to export
      const mario: Profile = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "ready" });
      const marioImport: Import = await helper.factories.import(
        null,
        {},
        mario.id
      );
      await marioImport.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      // luigi is ready, but his import has not been marked completed yet
      const luigi: Profile = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "ready" });
      const luigiImport: Import = await helper.factories.import(
        null,
        {},
        luigi.id
      );
      await luigiImport.update({
        groupsUpdatedAt: null,
        profileUpdatedAt: null,
        exportedAt: null,
      });

      // toad has a pending import, but is not ready
      const toad = await helper.factories.profile();
      await toad.import();
      await toad.update({ state: "pending" });
      const toadImport: Import = await helper.factories.import(
        null,
        {},
        toad.id
      );
      await toadImport.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("profiles:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toEqual(1);
      expect(foundTasks[0].args[0]).toEqual({
        force: false,
        profileId: mario.id,
      });

      await mario.destroy();
      await luigi.destroy();
      await toad.destroy();
    });

    test("batch size can be configured with a setting", async () => {
      await plugin.updateSetting("core", "runs-profile-batch-size", 1);

      const mario: Profile = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "ready" });
      const marioImport: Import = await helper.factories.import(
        null,
        {},
        mario.id
      );
      await marioImport.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      const luigi: Profile = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "ready" });
      const luigiImport: Import = await helper.factories.import(
        null,
        {},
        luigi.id
      );
      await luigiImport.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("profiles:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toEqual(1);

      await mario.destroy();
      await luigi.destroy();
    });
  });
});
