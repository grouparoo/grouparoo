import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooRecord,
  Import,
  App,
  Group,
  Destination,
  Export,
  plugin,
  Source,
  Property,
  GrouparooModel,
  GroupMember,
} from "../../../src";
import { Op } from "sequelize";

describe("tasks/record:export", () => {
  let model: GrouparooModel;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  describe("record:export", () => {
    test("can be enqueued", async () => {
      await task.enqueue("record:export", { recordId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("record:export");
      expect(found.length).toEqual(1);
    });

    test("does not throw if the record cannot be found", async () => {
      await specHelper.runTask("record:export", {
        recordId: "missing",
      });
    });

    test("enqueuing more than one tasks for the same record will de-duplicate", async () => {
      await task.enqueue("record:export", { recordId: "abc123" });
      await task.enqueue("record:export", { recordId: "abc123" });

      const found = await specHelper.findEnqueuedTasks("record:export");
      expect(found.length).toEqual(1);
    });

    test("enqueuing more tasks for different records is OK", async () => {
      await task.enqueue("record:export", { recordId: "abc123" });
      await task.enqueue("record:export", { recordId: "cde456" });

      const found = await specHelper.findEnqueuedTasks("record:export");
      expect(found.length).toEqual(2);
    });

    describe("with multiple destinations and imports", () => {
      let record: GrouparooRecord;
      let group: Group;
      let app: App;
      let destination: Destination;

      beforeAll(async () => {
        ({ model } = await helper.factories.properties());
        helper.disableTestPluginImport();

        record = await helper.factories.record();
        await record.addOrUpdateProperties({ email: ["mario@example.com"] });

        group = await helper.factories.group({
          name: "test group",
          matchType: "all",
        });
        await group.setRules([
          { key: "grouparooId", operation: { op: "exists" } },
        ]);

        plugin.registerPlugin({
          name: "test-plugin",
          apps: [
            {
              name: "test-template-app",
              displayName: "test-template-app",
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
              name: "export-from-test-template-app",
              displayName: "export-from-test-template-app",
              description: "a test app connection",
              apps: ["test-template-app"],
              direction: "export",
              syncModes: ["sync", "additive", "enrich"],
              options: [],
              methods: {
                exportRecord: async () => {
                  return { success: true };
                },
                exportArrayProperties: async () => [],
                destinationMappingOptions: async () => {
                  return {
                    labels: {
                      group: {
                        singular: "list",
                        plural: "lists",
                      },
                      property: {
                        singular: "var",
                        plural: "vars",
                      },
                    },
                    properties: {
                      required: [],
                      known: [],
                      allowOptionalFromProperties: true,
                    },
                  };
                },
              },
            },
          ],
        });

        app = await App.create({
          name: "test app",
          type: "test-template-app",
          state: "ready",
        });

        destination = await Destination.create({
          name: "test destination",
          type: "export-from-test-template-app",
          syncMode: "sync",
          appId: app.id,
          modelId: model.id,
        });
        await destination.setMapping({
          email: "email",
          firstName: "firstName",
          lastName: "lastName",
        });
        await destination.updateTracking("group", group.id);
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );
        await destination.update({ state: "ready" });

        await api.resque.queue.connection.redis.flushdb();
      });

      beforeEach(async () => {
        await api.resque.queue.connection.redis.flushdb();
        await Import.truncate();
        await Export.truncate();
      });

      it("updates the run and imports", async () => {
        let records = await GrouparooRecord.findAll();
        expect(records.length).toBe(1);

        const runA = await helper.factories.run(null, { state: "running" });
        const runB = await helper.factories.run(null, { state: "running" });

        const importA = await helper.factories.import(runA, {
          email: "mario@example.com",
          firstName: "Mario",
          lastName: "Mario",
        });

        const importB = await helper.factories.import(runB, {
          email: "mario@example.com",
          firstName: "Super",
        });

        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateRecord"
        );
        expect(foundAssociateTasks.length).toEqual(2);
        expect(
          foundAssociateTasks.map((t) => t.args[0].importId).sort()
        ).toEqual([importA.id, importB.id].sort());

        await specHelper.runTask("import:associateRecord", {
          importId: importA.id,
          attempts: 0,
        });
        await specHelper.runTask("import:associateRecord", {
          importId: importB.id,
          attempts: 0,
        });

        records = await GrouparooRecord.findAll();
        expect(records.length).toBe(1);

        await ImportWorkflow();

        await records[0].reload();
        const properties = await records[0].simplifiedProperties();
        expect(properties.email).toEqual(["mario@example.com"]);
        expect(properties.firstName).toEqual(["Super"]);
        expect(properties.lastName).toEqual(["Mario"]);

        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "record:export"
        );
        expect(foundExportTasks.length).toEqual(1);

        await specHelper.runTask("record:export", foundExportTasks[0].args[0]);
        await specHelper.runTask("export:enqueue", {});
        const foundSendTasks = await specHelper.findEnqueuedTasks(
          "export:send"
        );
        expect(foundSendTasks.length).toBe(1);
        await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

        const _exports = await Export.findAll();
        expect(_exports.length).toBe(1);
        const _export = _exports[0];

        expect(_export.destinationId).toBe(destination.id);
        expect(_export.recordId).toBe(record.id);
        expect(_export.completedAt).toBeTruthy();
        expect(_export.oldRecordProperties).toEqual({});
        expect(_export.newRecordProperties).toEqual({
          email: "mario@example.com",
          firstName: "Super",
          lastName: "Mario",
        });
        expect(_export.oldGroups).toEqual([]);
        expect(_export.newGroups).toEqual(["test group"]);

        await importA.reload();
        await importB.reload();
        expect(importA.exportedAt).toBeTruthy();
        expect(importB.exportedAt).toBeTruthy();
      });

      test("it will append destinationIds from imports", async () => {
        const property = await Property.findOne({ where: { key: "email" } });
        const source = await Source.findOne({
          where: { id: property.sourceId },
        });
        const schedule = await helper.factories.schedule(source);
        const run = await helper.factories.run(schedule);
        const _import = await helper.factories.import(run, {
          userId: 123,
          email: "bowser@example.com", // create a new record, not in the group
          firstName: "Bowser",
          lastName: "Koopa",
          _meta: {
            destinationId: destination.id,
          },
        });

        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateRecord"
        );
        expect(foundAssociateTasks.length).toEqual(1);

        await Promise.all(
          foundAssociateTasks.map(async (t) =>
            specHelper.runTask("import:associateRecord", t.args[0])
          )
        );

        const records = await GrouparooRecord.findAll();
        expect(records.length).toBe(2);

        await ImportWorkflow();

        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "record:export"
        );
        expect(foundExportTasks.length).toEqual(1);

        await specHelper.runTask("record:export", foundExportTasks[0].args[0]);
        await specHelper.runTask("export:enqueue", {});
        const foundSendTasks = await specHelper.findEnqueuedTasks(
          "export:send"
        );
        expect(foundSendTasks.length).toBe(1);
        await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

        const _exports = await Export.findAll();
        expect(_exports.length).toBe(1);
        const _export = _exports[0];

        expect(_export.destinationId).toBe(destination.id);
        expect(_export.recordId).not.toBe(record.id);
        expect(_export.completedAt).toBeTruthy();
        expect(_export.oldRecordProperties).toEqual({});
        expect(_export.newRecordProperties).toEqual({
          email: "bowser@example.com",
          firstName: "Bowser",
          lastName: "Koopa",
        });
        expect(_export.oldGroups).toEqual([]);
        expect(_export.newGroups).toEqual(["test group"]);
      });

      describe("with exportRecord", () => {
        let counter = 0;

        beforeEach(() => {
          counter = 0;
        });

        beforeAll(async () => {
          await GrouparooRecord.destroy({
            where: { id: { [Op.ne]: record.id } },
          });

          Destination.prototype.exportRecord = jest.fn(() => {
            counter++;
            throw new Error("oh no");
          });
        });

        it("will not records not yet in the ready state", async () => {
          await record.update({ state: "pending" });

          await specHelper.runTask("record:export", {
            recordId: record.id,
          }); // does not throw because it did not run

          expect(counter).toBe(0);
        });

        it("applies errors to the imports and export", async () => {
          const run = await helper.factories.run();
          const _import = await Import.create({
            creatorType: "run",
            creatorId: run.id,
            recordId: record.id,
            recordUpdatedAt: new Date(),
            groupsUpdatedAt: new Date(),
            data: {},
            oldGroupIds: [],
            newGroupIds: [group.id],
          });

          await record.import();
          await record.updateGroupMembership();

          expect(_import.errorMessage).toBeFalsy();

          // I don't throw, but append the error to the Export
          await specHelper.runTask("record:export", {
            recordId: record.id,
          });

          expect(counter).toBe(1);

          await _import.reload();
          expect(_import.errorMessage).toMatch(/oh no/);
          const errorMetadata = JSON.parse(_import.errorMetadata);
          expect(errorMetadata.message).toMatch(/oh no/);
          expect(errorMetadata.step).toBe("record:export");
          expect(errorMetadata.stack).toMatch(/RecordExport/);

          await _import.destroy();
        });
      });
    });
  });
});
