import { helper } from "@grouparoo/spec-helper";
import { api, specHelper, rebuildConfig } from "actionhero";
import {
  Property,
  Source,
  plugin,
  AggregationMethod,
  App,
  RecordProperty,
  GrouparooPlugin,
} from "../../../../src";

describe("tasks/recordProperties:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  let userId: Property;
  let email: Property;

  const testPlugin: GrouparooPlugin = {
    name: "test-plugin",
    apps: [
      {
        name: "test-app",
        displayName: "test-app",
        options: [],
        methods: {
          test: async () => {
            return { success: true };
          },
        },
      },
    ],
    connections: [
      {
        name: "test-connection",
        displayName: "test-connection",
        description: "a test connection",
        apps: ["test-app"],
        direction: "import",
        options: [],
        groupAggregations: [AggregationMethod.Exact],
        methods: {
          propertyOptions: async () => [
            {
              key: "aggregationMethod",
              required: true,
              description: "aggregationMethod",
              type: "text",
              options: async () => [
                { key: AggregationMethod.Exact, default: true },
              ],
            },
          ],
          uniquePropertyBootstrapOptions: async () => {
            return { aggregationMethod: AggregationMethod.Exact };
          },
          sourceFilters: async () => [],
          sourcePreview: async () => {
            return [{ id: 1, email: "foo@example.com" }];
          },
          recordProperties: async () => {
            // doesn't matter for this test
            return {};
          },
        },
      },
      {
        name: "test-connection-no-agg-option",
        displayName: "test-connection-no-agg-option",
        description: "a test connection with no aggregationMethod option",
        apps: ["test-app"],
        direction: "import",
        options: [],
        defaultAggregationMethod: AggregationMethod.Exact,
        groupAggregations: [AggregationMethod.Exact],
        methods: {
          propertyOptions: async () => [],
          uniquePropertyBootstrapOptions: async () => {
            return {};
          },
          sourceFilters: async () => [],
          sourcePreview: async () => {
            return [{ id: 1, email: "foo@example.com" }];
          },
          recordProperties: async () => {
            // doesn't matter for this test
            return {};
          },
        },
      },
    ],
  };

  beforeAll(async () => {
    plugin.registerPlugin(testPlugin);
  });

  describe("recordProperties:enqueue", () => {
    describe("with aggregationMethod option", () => {
      beforeAll(async () => {
        const model = await helper.factories.model();
        const app = await App.create({
          type: "test-app",
          name: "test app",
        });
        await app.update({ state: "ready" });

        const source = await Source.create({
          type: "test-connection",
          name: "test connection",
          appId: app.id,
          modelId: model.id,
        });

        userId = await source.bootstrapUniqueProperty({ mappedColumn: "id" });
        await source.setMapping({ id: "profiles_id" });
        await source.update({ state: "ready" });

        email = await helper.factories.property(
          source,
          { key: "email" },
          { aggregationMethod: AggregationMethod.Exact }
        );
        await email.update({ state: "ready" });
      });

      test("large batches will be broken up", async () => {
        process.env.GROUPAROO_RECORDS_BATCH_SIZE = "2";
        rebuildConfig();

        const mario = await helper.factories.record();
        const luigi = await helper.factories.record();
        const toad = await helper.factories.record();
        const peach = await helper.factories.record();
        await mario.markPending();
        await luigi.markPending();
        await toad.markPending();
        await peach.markPending();

        const recordProperties = await RecordProperty.findAll({
          where: {
            propertyId: email.id,
            recordId: [mario, luigi, toad, peach].map((r) => r.id),
          },
        });
        await helper.changeTimestamps(recordProperties, false, true);

        await specHelper.runTask("recordProperties:enqueue", {});
        await specHelper.runTask("recordProperties:enqueue", {});
        const importRecordPropertiesTasks = await specHelper.findEnqueuedTasks(
          "recordProperty:importRecordProperties"
        );

        let seenRecordIds: string[] = [];

        expect(
          importRecordPropertiesTasks[0].args[0].propertyIds.sort()
        ).toEqual([userId.id, email.id].sort());
        expect(importRecordPropertiesTasks[0].args[0].recordIds.length).toEqual(
          2
        );
        seenRecordIds = seenRecordIds.concat(
          importRecordPropertiesTasks[0].args[0].recordIds
        );
        expect(
          importRecordPropertiesTasks[1].args[0].propertyIds.sort()
        ).toEqual([userId.id, email.id].sort());
        expect(importRecordPropertiesTasks[1].args[0].recordIds.length).toEqual(
          2
        );
        seenRecordIds = seenRecordIds.concat(
          importRecordPropertiesTasks[1].args[0].recordIds
        );

        expect(seenRecordIds.sort()).toEqual(
          [mario, luigi, toad, peach].map((r) => r.id).sort()
        );
      });
    });

    describe("with no aggregationMethod option", () => {
      beforeAll(async () => {
        await helper.truncate();

        const model = await helper.factories.model();
        const app = await App.create({
          type: "test-app",
          name: "test app",
        });
        await app.update({ state: "ready" });

        const source = await Source.create({
          type: "test-connection-no-agg-option",
          name: "test-connection-no-agg-option",
          appId: app.id,
          modelId: model.id,
        });

        userId = await source.bootstrapUniqueProperty({ mappedColumn: "id" });
        await source.setMapping({ id: "profiles_id" });
        await source.update({ state: "ready" });

        email = await helper.factories.property(source, { key: "email" }, {});
        await email.update({ state: "ready" });
      });

      beforeEach(async () => {
        await api.resque.queue.connection.redis.flushdb();
      });

      test("a plugin with a defaultAggregationMethod and no aggregationMethod option can group", async () => {
        const mario = await helper.factories.record();
        const luigi = await helper.factories.record();
        await mario.markPending();
        await luigi.markPending();

        const recordProperties = await RecordProperty.findAll({
          where: {
            propertyId: email.id,
            recordId: [mario, luigi].map((r) => r.id),
          },
        });
        await helper.changeTimestamps(recordProperties, false, true);

        await specHelper.runTask("recordProperties:enqueue", {});
        const importRecordPropertiesTasks = await specHelper.findEnqueuedTasks(
          "recordProperty:importRecordProperties"
        );

        expect(importRecordPropertiesTasks.length).toBe(1);
        expect(
          importRecordPropertiesTasks[0].args[0].propertyIds.sort()
        ).toEqual([userId.id, email.id].sort());
        expect(importRecordPropertiesTasks[0].args[0].recordIds.sort()).toEqual(
          [mario.id, luigi.id].sort()
        );
      });

      test("a plugin with a no defaultAggregationMethod and no aggregationMethod option will not group", async () => {
        const connection = testPlugin.connections.find(
          (c) => c.name === "test-connection-no-agg-option"
        );
        delete connection.defaultAggregationMethod;

        const mario = await helper.factories.record();
        const luigi = await helper.factories.record();
        await mario.markPending();
        await luigi.markPending();

        const recordProperties = await RecordProperty.findAll({
          where: {
            propertyId: email.id,
            recordId: [mario, luigi].map((r) => r.id),
          },
        });
        await helper.changeTimestamps(recordProperties, false, true);

        await specHelper.runTask("recordProperties:enqueue", {});
        const importRecordPropertiesTasks = await specHelper.findEnqueuedTasks(
          "recordProperty:importRecordProperties"
        );

        const seenPropertyIds: string[] = [];

        expect(importRecordPropertiesTasks.length).toBe(2);
        expect(importRecordPropertiesTasks[0].args[0].propertyIds.length).toBe(
          1
        );
        seenPropertyIds.push(
          importRecordPropertiesTasks[0].args[0].propertyIds[0]
        );
        expect(importRecordPropertiesTasks[0].args[0].recordIds.sort()).toEqual(
          [mario.id, luigi.id].sort()
        );

        expect(importRecordPropertiesTasks[1].args[0].propertyIds.length).toBe(
          1
        );
        seenPropertyIds.push(
          importRecordPropertiesTasks[1].args[0].propertyIds[0]
        );
        expect(importRecordPropertiesTasks[1].args[0].recordIds.sort()).toEqual(
          [mario.id, luigi.id].sort()
        );

        expect(seenPropertyIds.sort()).toEqual([userId.id, email.id].sort());
      });
    });
  });
});
