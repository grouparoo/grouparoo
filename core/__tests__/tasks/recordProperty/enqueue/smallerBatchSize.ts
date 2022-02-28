process.env.GROUPAROO_RECORDS_BATCH_SIZE = "1";
process.env.GROUPAROO_INTERNAL_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import {
  PluginConnection,
  RecordPropertyPluginMethod,
  RecordPropertiesPluginMethod,
  Property,
  GrouparooPlugin,
  Source,
  Schedule,
} from "../../../../src";

describe("tasks/recordProperties:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  let propertiesCount: number;
  let testPluginConnection: PluginConnection;
  let prevRecordPropertyMethod: RecordPropertyPluginMethod;
  let prevRecordPropertiesMethod: RecordPropertiesPluginMethod;

  beforeAll(async () => {
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );

    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );

    prevRecordPropertyMethod = testPluginConnection.methods.recordProperty;
    prevRecordPropertiesMethod = testPluginConnection.methods.recordProperties;
  });

  describe("recordProperties:enqueue", () => {
    describe("with properties", () => {
      let source: Source;
      let schedule: Schedule;

      beforeAll(async () => {
        await helper.factories.properties();
        propertiesCount = await Property.scope(null).count();
        source = await Source.findOne();
        schedule = await helper.factories.schedule(source);
      });

      describe("with recordProperties method", () => {
        beforeAll(async () => {
          delete testPluginConnection.methods.recordProperty;
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

          await specHelper.runTask("import:associateRecords", {});
          await specHelper.runTask("recordProperties:enqueue", {});

          const importRecordPropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "recordProperty:importRecordProperties"
            );
          const importRecordPropertyTasks = await specHelper.findEnqueuedTasks(
            "recordProperty:importRecordProperty"
          );

          expect(importRecordPropertyTasks.length).toBe(0);
          expect(importRecordPropertiesTasks.length).toBe(propertiesCount);
          importRecordPropertiesTasks.forEach((t) =>
            expect(t.args[0].recordIds.length).toBe(1)
          );
        });
      });
    });
  });
});
