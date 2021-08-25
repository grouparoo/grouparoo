process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import {
  PluginConnection,
  ProfilePropertyPluginMethod,
  ProfilePropertiesPluginMethod,
  Property,
  GrouparooPlugin,
  Source,
  Schedule,
} from "../../../../src";

describe("tasks/profileProperties:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  let propertiesCount: number;
  let testPluginConnection: PluginConnection;
  let prevProfilePropertyMethod: ProfilePropertyPluginMethod;
  let prevProfilePropertiesMethod: ProfilePropertiesPluginMethod;

  beforeAll(async () => {
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );

    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );

    prevProfilePropertyMethod = testPluginConnection.methods.profileProperty;
    prevProfilePropertiesMethod =
      testPluginConnection.methods.profileProperties;
  });

  describe("profileProperties:enqueue", () => {
    describe("with properties", () => {
      let source: Source;
      let schedule: Schedule;

      beforeAll(async () => {
        await helper.factories.properties();
        propertiesCount = await Property.scope(null).count();
        source = await Source.findOne();
        schedule = await helper.factories.schedule(source);
      });

      describe("with profileProperties method", () => {
        beforeAll(async () => {
          delete testPluginConnection.methods.profileProperty;
        });

        test("the batch size can be configured via a setting", async () => {
          const run = await helper.factories.run(schedule);
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
            expect(t.args[0].profileIds.length).toBe(1)
          );
        });
      });
    });
  });
});
