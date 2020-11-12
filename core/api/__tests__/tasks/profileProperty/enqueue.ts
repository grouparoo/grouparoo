import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  PluginConnection,
  plugin,
  ProfilePropertyRule,
  GrouparooPlugin,
} from "../../../src";

let actionhero;

describe("tasks/profileProperties:enqueue", () => {
  let profilePropertyRulesCount: number;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, helper.setupTime);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterEach(async () => {
    await plugin.updateSetting(
      "core",
      "imports-profile-properties-batch-size",
      50
    );
  });

  beforeAll(async () => {
    profilePropertyRulesCount = await ProfilePropertyRule.scope(null).count();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profileProperties:enqueue", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profileProperties:enqueue", {});
      const found = await specHelper.findEnqueuedTasks(
        "profileProperties:enqueue"
      );
      expect(found.length).toEqual(1);
    });

    test("it will enqueue batches of profile properties in the pending state", async () => {
      const run = await helper.factories.run();
      const marioImport = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Mario",
      });
      const luigiImport = await helper.factories.import(run, {
        email: "luigi@example.com",
      });

      await specHelper.runTask("import:associateProfile", {
        importGuid: marioImport.guid,
      });
      await specHelper.runTask("import:associateProfile", {
        importGuid: luigiImport.guid,
      });

      await specHelper.runTask("profileProperties:enqueue", {});

      const importProfilePropertiesTasks = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperties"
      );
      const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperty"
      );

      expect(importProfilePropertiesTasks.length).toBe(0);
      expect(importProfilePropertyTasks.length).toBe(
        (profilePropertyRulesCount - 1) * 2
      );
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
          importGuid: marioImport.guid,
        });
        await specHelper.runTask("import:associateProfile", {
          importGuid: luigiImport.guid,
        });

        await specHelper.runTask("profileProperties:enqueue", {});

        const importProfilePropertiesTasks = await specHelper.findEnqueuedTasks(
          "profileProperty:importProfileProperties"
        );
        const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
          "profileProperty:importProfileProperty"
        );

        expect(importProfilePropertyTasks.length).toBe(0);
        expect(importProfilePropertiesTasks.length).toBe(
          profilePropertyRulesCount - 1
        );
        importProfilePropertiesTasks.forEach((t) =>
          expect(t.args[0].profileGuids.length).toBe(2)
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
          importGuid: marioImport.guid,
        });
        await specHelper.runTask("import:associateProfile", {
          importGuid: luigiImport.guid,
        });

        await specHelper.runTask("profileProperties:enqueue", {});

        const importProfilePropertiesTasks = await specHelper.findEnqueuedTasks(
          "profileProperty:importProfileProperties"
        );
        const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
          "profileProperty:importProfileProperty"
        );

        expect(importProfilePropertyTasks.length).toBe(0);
        expect(importProfilePropertiesTasks.length).toBe(
          profilePropertyRulesCount - 1
        );
        importProfilePropertiesTasks.forEach((t) =>
          expect(t.args[0].profileGuids.length).toBe(1)
        );
      });
    });
  });
});
