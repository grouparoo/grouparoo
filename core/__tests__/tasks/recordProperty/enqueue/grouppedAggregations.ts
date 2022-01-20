import { helper } from "@grouparoo/spec-helper";
import { api, specHelper, rebuildConfig } from "actionhero";
import {
  Property,
  Source,
  plugin,
  AggregationMethod,
  App,
  RecordProperty,
} from "../../../../src";

describe("tasks/recordProperties:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  let userId: Property;
  let email: Property;

  beforeAll(async () => {
    plugin.registerPlugin({
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
      ],
    });

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

  describe("recordProperties:enqueue", () => {
    test("large batches will be broken up", async () => {
      process.env.GROUPAROO_INTERNAL_BATCH_SIZE = "2";
      rebuildConfig();

      const mario = await helper.factories.record();
      const luigi = await helper.factories.record();
      const toad = await helper.factories.record();
      const peach = await helper.factories.record();
      await mario.markPending();
      await luigi.markPending();
      await toad.markPending();
      await peach.markPending();

      // shuffle the order of things so all the updated properties will be found in the first group
      const recordProperties = await RecordProperty.findAll({
        where: {
          propertyId: email.id,
          recordId: [mario, luigi, toad, peach].map((r) => r.id),
        },
      });

      await helper.changeTimestamps(recordProperties, false, true);
      await specHelper.runTask("recordProperties:enqueue", {});
      const importRecordPropertiesTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );

      expect(importRecordPropertiesTasks[0].args[0].propertyIds.sort()).toEqual(
        ["profiles_id", "email"].sort()
      );
      expect(importRecordPropertiesTasks[0].args[0].recordIds.sort()).toEqual(
        [mario.id, luigi.id].sort()
      );
      expect(importRecordPropertiesTasks[1].args[0].propertyIds.sort()).toEqual(
        ["profiles_id", "email"].sort()
      );
      expect(importRecordPropertiesTasks[1].args[0].recordIds.sort()).toEqual(
        [toad.id, peach.id].sort()
      );
    });
  });
});
