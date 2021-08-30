import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  PluginConnection,
  RecordPropertyPluginMethod,
  RecordPropertiesPluginMethod,
  Property,
  GrouparooPlugin,
  Source,
  App,
  GrouparooRecord,
  RecordProperty,
  Schedule,
} from "../../../../src";

describe("tasks/profileProperties:enqueue", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  let propertiesCount: number;
  let testPluginConnection: PluginConnection;
  let prevProfilePropertyMethod: RecordPropertyPluginMethod;
  let prevProfilePropertiesMethod: RecordPropertiesPluginMethod;
  beforeAll(async () => {
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );

    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );

    prevProfilePropertyMethod = testPluginConnection.methods.recordProperty;
    prevProfilePropertiesMethod = testPluginConnection.methods.recordProperties;
  });

  function resetPlugin() {
    testPluginConnection.methods.recordProperty = prevProfilePropertyMethod;
    testPluginConnection.methods.recordProperties = prevProfilePropertiesMethod;
  }

  afterAll(() => {
    resetPlugin();
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
      let source: Source;
      let schedule: Schedule;

      beforeAll(async () => {
        await helper.factories.properties();
        propertiesCount = await Property.scope(null).count();
        source = await Source.findOne();
        schedule = await helper.factories.schedule(source);
      });

      test("can be enqueued", async () => {
        await task.enqueue("profileProperties:enqueue", {});
        const found = await specHelper.findEnqueuedTasks(
          "profileProperties:enqueue"
        );
        expect(found.length).toEqual(1);
      });

      describe("with records", () => {
        let mario: GrouparooRecord;
        let luigi: GrouparooRecord;

        beforeAll(async () => {
          resetPlugin();
          delete testPluginConnection.methods.recordProperties;

          mario = await helper.factories.record();
          luigi = await helper.factories.record();

          await mario.addOrUpdateProperties({ email: ["mario@example.com"] });
          await luigi.addOrUpdateProperties({ email: ["luigi@example.com"] });

          await mario.import();
          await luigi.import();
        });

        test("it will enqueue batches of record properties in the pending state and a null startedAt", async () => {
          await mario.markPending();
          await luigi.markPending();
          const start = new Date();

          const pendingProfileProperties = await RecordProperty.findAll({
            where: { state: "pending" },
          });
          expect(pendingProfileProperties.length).toBe(propertiesCount * 2);
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
          expect(importProfilePropertyTasks.length).toBe(propertiesCount * 2);

          for (const p of pendingProfileProperties) {
            await p.reload();
            expect(p.startedAt.getTime()).toBeGreaterThanOrEqual(
              start.getTime()
            );
          }
        });

        test("it will enqueue batches of record properties in the pending state and an old startedAt (stuck)", async () => {
          await mario.markPending();
          await luigi.markPending();
          const start = new Date();

          const pendingProfileProperties = await RecordProperty.findAll({
            where: { state: "pending" },
          });
          expect(pendingProfileProperties.length).toBe(propertiesCount * 2);
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
          expect(importProfilePropertyTasks.length).toBe(propertiesCount * 2);

          for (const p of pendingProfileProperties) {
            await p.reload();
            expect(p.startedAt.getTime()).toBeGreaterThanOrEqual(
              start.getTime()
            );
          }
        });

        test("it will not enqueue batches of record properties in the pending state and a recent startedAt", async () => {
          await mario.markPending();
          await luigi.markPending();

          const pendingProfileProperties = await RecordProperty.findAll({
            where: { state: "pending" },
          });
          expect(pendingProfileProperties.length).toBe(propertiesCount * 2);
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
        beforeAll(async () => {
          resetPlugin();
          delete testPluginConnection.methods.recordProperty;
        });

        test("if there is an importProfileProperties it will be preferred", async () => {
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
            expect(t.args[0].profileIds.length).toBe(2)
          );
        });
      });

      describe("without a profileProperty or profileProperties method", () => {
        beforeAll(async () => {
          resetPlugin();
          delete testPluginConnection.methods.recordProperty;
          delete testPluginConnection.methods.recordProperties;
        });

        test("if there is no import method, it will just mark properties as ready", async () => {
          const daisy: GrouparooRecord = await helper.factories.record();
          const peach: GrouparooRecord = await helper.factories.record();

          await daisy.addOrUpdateProperties({
            email: ["daisy@example.com"],
            firstName: ["Daisy"],
            isVIP: [true],
          });

          await peach.addOrUpdateProperties({
            email: ["peach@example.com"],
            firstName: ["Peach"],
            isVIP: [false],
          });

          const run = await helper.factories.run(schedule);
          const daisyImport = await helper.factories.import(run, {
            email: "daisy@example.com",
          });
          const peachImport = await helper.factories.import(run, {
            email: "peach@example.com",
          });

          await specHelper.runTask("import:associateProfile", {
            importId: daisyImport.id,
          });
          await specHelper.runTask("import:associateProfile", {
            importId: peachImport.id,
          });

          const pendingProperties = await RecordProperty.findAll({
            where: {
              state: "pending",
              recordId: [daisy.id, peach.id],
            },
          });
          expect(pendingProperties.length).toBe(propertiesCount * 2);

          await specHelper.runTask("profileProperties:enqueue", {});

          const importProfilePropertiesTasks =
            await specHelper.findEnqueuedTasks(
              "profileProperty:importProfileProperties"
            );
          const importProfilePropertyTasks = await specHelper.findEnqueuedTasks(
            "profileProperty:importProfileProperty"
          );

          expect(importProfilePropertyTasks.length).toBe(0);
          expect(importProfilePropertiesTasks.length).toBe(0);

          const newPendingProperties = await RecordProperty.findAll({
            where: {
              state: "pending",
              recordId: [daisy.id, peach.id],
            },
          });
          expect(newPendingProperties.length).toBe(0);

          const oldValues = pendingProperties.map((p) => p.rawValue);
          const newValues = (
            await RecordProperty.findAll({
              where: {
                id: pendingProperties.map((p) => p.id),
                state: "ready",
              },
            })
          ).map((p) => p.rawValue);
          expect(oldValues.sort()).toEqual(newValues.sort());
        });
      });
    });
  });
});
