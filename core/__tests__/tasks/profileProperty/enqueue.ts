import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  PluginConnection,
  plugin,
  Property,
  GrouparooPlugin,
  Source,
  App,
  Profile,
  ProfileProperty,
} from "../../../src";

describe("tasks/profileProperties:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  let propertiesCount: number;

  afterEach(async () => {
    await plugin.updateSetting(
      "core",
      "imports-profile-properties-batch-size",
      50
    );
  });

  describe("profileProperties:enqueue", () => {
    describe("when bootstrapping", () => {
      afterAll(async () => {
        await Property.truncate();
        await Source.truncate();
        await App.truncate();
      });

      it("will not crash when there is a property without a ready source", async () => {
        const source = await helper.factories.source();
        const property = await source.bootstrapUniqueProperty(
          "userId",
          "integer",
          "user-id"
        );
        expect(source.state).toBe("draft");
        expect(property.state).toBe("ready");
        await specHelper.runTask("profileProperties:enqueue", {}); // does not throw
      });
    });

    describe("with properties", () => {
      beforeAll(async () => {
        await helper.factories.properties();
        propertiesCount = await Property.scope(null).count();
      });

      test("can be enqueued", async () => {
        await task.enqueue("profileProperties:enqueue", {});
        const found = await specHelper.findEnqueuedTasks(
          "profileProperties:enqueue"
        );
        expect(found.length).toEqual(1);
      });

      describe("with profiles", () => {
        let mario: Profile;
        let luigi: Profile;

        beforeAll(async () => {
          mario = await helper.factories.profile();
          luigi = await helper.factories.profile();

          await mario.addOrUpdateProperties({ email: ["mario@example.com"] });
          await luigi.addOrUpdateProperties({ email: ["luigi@example.com"] });

          await mario.import();
          await luigi.import();
        });

        test("it will enqueue batches of profile properties in the pending state and a null startedAt", async () => {
          await mario.markPending();
          await luigi.markPending();
          const start = new Date();

          const pendingProfileProperties = await ProfileProperty.findAll({
            where: { state: "pending" },
          });
          expect(pendingProfileProperties.length).toBe(
            (propertiesCount - 1) * 2
          );
          for (const p of pendingProfileProperties) {
            expect(p.startedAt).toBe(null);
            await p.update({ startedAt: null });
          }

          await specHelper.runTask("profileProperties:enqueue", {});

          const importProfilePropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "profileProperty:importProfileProperties"
            );
          const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
            "profileProperty:importProfileProperty"
          );

          expect(importProfilePropertiesTasks.length).toBe(0);
          expect(importProfilePropertyTasks.length).toBe(
            (propertiesCount - 1) * 2
          );

          for (const p of pendingProfileProperties) {
            await p.reload();
            expect(p.startedAt.getTime()).toBeGreaterThanOrEqual(
              start.getTime()
            );
          }
        });

        test("it will enqueue batches of profile properties in the pending state and an old startedAt (stuck)", async () => {
          await mario.markPending();
          await luigi.markPending();
          const start = new Date();

          const pendingProfileProperties = await ProfileProperty.findAll({
            where: { state: "pending" },
          });
          expect(pendingProfileProperties.length).toBe(
            (propertiesCount - 1) * 2
          );
          for (const p of pendingProfileProperties) {
            expect(p.startedAt).toBe(null);
            await p.update({ startedAt: new Date(0) });
          }

          await specHelper.runTask("profileProperties:enqueue", {});

          const importProfilePropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "profileProperty:importProfileProperties"
            );
          const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
            "profileProperty:importProfileProperty"
          );

          expect(importProfilePropertiesTasks.length).toBe(0);
          expect(importProfilePropertyTasks.length).toBe(
            (propertiesCount - 1) * 2
          );

          for (const p of pendingProfileProperties) {
            await p.reload();
            expect(p.startedAt.getTime()).toBeGreaterThanOrEqual(
              start.getTime()
            );
          }
        });

        test("it will not enqueue batches of profile properties in the pending state and a recent startedAt", async () => {
          await mario.markPending();
          await luigi.markPending();

          const pendingProfileProperties = await ProfileProperty.findAll({
            where: { state: "pending" },
          });
          expect(pendingProfileProperties.length).toBe(
            (propertiesCount - 1) * 2
          );
          for (const p of pendingProfileProperties) {
            expect(p.startedAt).toBe(null);
            await p.update({ startedAt: new Date() });
          }

          await specHelper.runTask("profileProperties:enqueue", {});

          const importProfilePropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "profileProperty:importProfileProperties"
            );
          const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
            "profileProperty:importProfileProperty"
          );

          expect(importProfilePropertiesTasks.length).toBe(0);
          expect(importProfilePropertyTasks.length).toBe(0);
        });
      });

      describe("with profileProperties method", () => {
        let testPluginConnection: PluginConnection;

        beforeAll(async () => {
          const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
            (a) => a.name === "@grouparoo/test-plugin"
          );

          testPluginConnection = testPlugin.connections.find(
            (c) => c.name === "test-plugin-import"
          );
          testPluginConnection.methods.profileProperties = async () => {
            return {};
          };
        });

        afterAll(() => {
          delete testPluginConnection.methods.profileProperties;
        });

        test("if there is an importProfileProperties it will be preferred", async () => {
          const run = await helper.factories.run();
          const marioImport = await helper.factories.import(run, {
            email: "mario@example.com",
            firstName: "Mario",
          });
          const luigiImport = await helper.factories.import(run, {
            email: "luigi@example.com",
          });

          await specHelper.runTask("import:associateProfile", {
            importId: marioImport.id,
          });
          await specHelper.runTask("import:associateProfile", {
            importId: luigiImport.id,
          });

          await specHelper.runTask("profileProperties:enqueue", {});

          const importProfilePropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "profileProperty:importProfileProperties"
            );
          const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
            "profileProperty:importProfileProperty"
          );

          expect(importProfilePropertyTasks.length).toBe(0);
          expect(importProfilePropertiesTasks.length).toBe(propertiesCount);
          importProfilePropertiesTasks.forEach((t) =>
            expect(t.args[0].profileIds.length).toBe(2)
          );
        });

        test("the batch size can be configured via a setting", async () => {
          await plugin.updateSetting(
            "core",
            "imports-profile-properties-batch-size",
            1
          );

          const run = await helper.factories.run();
          const marioImport = await helper.factories.import(run, {
            email: "mario@example.com",
            firstName: "Mario",
          });
          const luigiImport = await helper.factories.import(run, {
            email: "luigi@example.com",
          });

          await specHelper.runTask("import:associateProfile", {
            importId: marioImport.id,
          });
          await specHelper.runTask("import:associateProfile", {
            importId: luigiImport.id,
          });

          await specHelper.runTask("profileProperties:enqueue", {});

          const importProfilePropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "profileProperty:importProfileProperties"
            );
          const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
            "profileProperty:importProfileProperty"
          );

          expect(importProfilePropertyTasks.length).toBe(0);
          expect(importProfilePropertiesTasks.length).toBe(propertiesCount - 1);
          importProfilePropertiesTasks.forEach((t) =>
            expect(t.args[0].profileIds.length).toBe(1)
          );
        });
      });
    });
  });
});
