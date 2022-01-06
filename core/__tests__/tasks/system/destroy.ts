import { helper } from "@grouparoo/spec-helper";
import {
  Property,
  Source,
  App,
  Destination,
  Group,
  GrouparooRecord,
  RecordProperty,
  GrouparooModel,
} from "../../../src";
import { api, task, specHelper } from "actionhero";

describe("tasks/destroy", () => {
  let model: GrouparooModel;
  let source: Source;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("destroy", () => {
    beforeAll(async () => {
      ({ model, source } = await helper.factories.properties());
    });

    beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

    test("it can be enqueued", async () => {
      await task.enqueue("destroy", {});
      const found = await specHelper.findEnqueuedTasks("destroy");
      expect(found.length).toEqual(1);
    });

    test("it will enqueue destroy tasks for deleted properties", async () => {
      const newSource = await helper.factories.source();
      await newSource.setOptions({ table: "some_table" });
      await newSource.setMapping({ id: "userId" });
      await newSource.update({ state: "ready" });

      const property: Property = await helper.factories.property(
        newSource,
        {},
        { column: "col" }
      );
      await property.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("property:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].propertyId).toBe(property.id);
    });

    test("it will enqueue destroy tasks for deleted groups", async () => {
      const group: Group = await helper.factories.group();
      await group.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("group:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].groupId).toBe(group.id);
    });

    test("it will enqueue destroy tasks for deleted sources", async () => {
      const newSource = await helper.factories.source(undefined, {
        state: "deleted",
      });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("source:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].sourceId).toBe(newSource.id);
    });

    test("it will enqueue destroy tasks for deleted destinations", async () => {
      const destination: Destination = await helper.factories.destination();
      await destination.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("destination:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].destinationId).toBe(destination.id);
    });
    test("it will enqueue destroy tasks for deleted models", async () => {
      const model: GrouparooModel = await helper.factories.model({
        name: "test_model",
      });
      await model.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("model:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].modelId).toBe(model.id);

      await model.destroy();
    });
    test("it will enqueue destroy tasks for deleted apps", async () => {
      const app: App = await helper.factories.app();
      await app.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("app:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].appId).toBe(app.id);
    });

    describe.each(["ready", "deleted"] as const)(
      `records (%s)`,
      (recordState) => {
        let userIdProperty: Property;
        beforeAll(async () => {
          userIdProperty = await Property.findOne({ where: { key: "userId" } });
          expect(userIdProperty.isPrimaryKey).toBe(true);
        });

        test("it will enqueue destroy task for records with a primary key property set to null", async () => {
          const record: GrouparooRecord = await helper.factories.record();
          await record.addOrUpdateProperties({
            userId: [null],
            isVIP: [true],
            ltv: [213],
          });

          await RecordProperty.update(
            { state: "ready" },
            { where: { recordId: record.id } }
          );
          await record.update({ state: recordState });

          await specHelper.runTask("destroy", {});

          const found = await specHelper.findEnqueuedTasks("record:destroy");
          expect(found.length).toEqual(1);
          expect(found[0].args[0].recordId).toBe(record.id);

          await record.destroy();
        });

        test("does not enqueue destroy task for records that aren't done importing", async () => {
          const record: GrouparooRecord = await helper.factories.record();
          await record.addOrUpdateProperties({
            userId: [null],
            isVIP: [true],
            ltv: [213],
          });

          await RecordProperty.update(
            { state: "pending" },
            { where: { recordId: record.id } }
          );
          await record.update({ state: "pending" });

          await specHelper.runTask("destroy", {});

          const found = await specHelper.findEnqueuedTasks("record:destroy");
          expect(found.length).toEqual(0);

          await record.destroy();
        });

        describe("with multiple models", () => {
          let model2: GrouparooModel;
          let source2: Source;

          beforeAll(async () => {
            model2 = await helper.factories.model({ name: "admins" });

            source2 = await helper.factories.source(null, {
              modelId: model2.id,
            });
            await source2.setOptions({ table: "test table" });
            await source2.bootstrapUniqueProperty({
              key: "adminId",
              type: "integer",
              mappedColumn: "id",
            });
            await source2.setMapping({ id: "adminId" });
            await source2.update({ state: "ready" });
          });

          afterAll(async () => {
            await source2.destroy();
            await model2.destroy();
          });

          test("it will only destroy records from the correct model when there is a null primary key property", async () => {
            const record: GrouparooRecord = await helper.factories.record({
              modelId: "mod_profiles",
            });

            await record.addOrUpdateProperties({
              userId: [null],
              isVIP: [true],
              ltv: [213],
            });

            await RecordProperty.update(
              { state: "ready" },
              { where: { recordId: record.id } }
            );
            await record.update({ state: recordState });

            const foreignRecord = await helper.factories.record({
              modelId: model2.id,
            });
            await foreignRecord.addOrUpdateProperties({ adminId: [1000] });

            await specHelper.runTask("destroy", {});

            const found = await specHelper.findEnqueuedTasks("record:destroy");
            expect(found.length).toEqual(1);
            expect(found[0].args[0].recordId).toBe(record.id);
            await foreignRecord.reload();

            await record.destroy();
            await foreignRecord.destroy();
          });

          describe("delete user_id property", () => {
            afterAll(async () => {
              userIdProperty = await source.bootstrapUniqueProperty({
                key: "userId",
                type: "integer",
                mappedColumn: "id",
              });
              await userIdProperty.update({ isPrimaryKey: true });
            });

            test("it will enqueue destroy task by model for records when there is no primary key property", async () => {
              const record: GrouparooRecord = await helper.factories.record({
                modelId: model.id,
              });
              await record.addOrUpdateProperties({
                userId: [1000],
                isVIP: [true],
                ltv: [213],
              });

              const foreignRecord = await helper.factories.record({
                modelId: model2.id,
              });
              await foreignRecord.addOrUpdateProperties({ adminId: [1000] });

              await RecordProperty.update(
                { state: "ready" },
                { where: { recordId: record.id } }
              );
              await record.update({ state: recordState });

              await specHelper.runTask("destroy", {});

              let found = await specHelper.findEnqueuedTasks("record:destroy");
              expect(found.length).toEqual(0);

              // now remove the directly mapped property
              // @ts-ignore
              await userIdProperty.destroy({ hooks: false });

              await specHelper.runTask("destroy", {});

              found = await specHelper.findEnqueuedTasks("record:destroy");
              expect(found.length).toEqual(1);
              expect(found[0].args[0].recordId).toBe(record.id);

              await record.destroy();
              await foreignRecord.destroy();
            });
          });
        });
      }
    );
  });
});
