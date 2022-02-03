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
        const destinationGroupMemberships: Record<string, string> = {};
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
        expect(records[0].state).toBe("pending");
        expect(records[0].readyToExport).toBe(false);

        await ImportWorkflow();

        await records[0].reload();
        expect(records[0].state).toBe("ready");
        expect(records[0].readyToExport).toBe(true);
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
        expect(importA.state).toBe("complete");
        expect(importA.importedAt).toBeTruthy();
        expect(importA.processedAt).toBeTruthy();
        expect(importB.state).toBe("complete");
        expect(importB.importedAt).toBeTruthy();
        expect(importB.processedAt).toBeTruthy();

        await records[0].reload();
        expect(records[0].state).toBe("ready");
        expect(records[0].readyToExport).toBe(false);
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

      it.only("does not consider already complete imports", async () => {
        const start = new Date();
        const record = await GrouparooRecord.findOne();
        const runA = await helper.factories.run(null, { state: "running" });

        const importA = await helper.factories.import(runA, {
          email: "mario@example.com",
          firstName: "Mario",
          lastName: "Mario",
        });
        await specHelper.runTask("import:associateRecord", {
          importId: importA.id,
          attempts: 0,
        });

        // import B is already completed and won't be considered
        const importB = await helper.factories.import(runA, {
          email: "mario@example.com",
          firstName: "Bowser",
          lastName: "Koopa",
          _meta: {
            destinationId: "bogus-destination",
          },
        });
        await importB.update({ state: "importing" });
        await importB.update({ state: "processing" });
        await importB.update({
          state: "complete",
          recordId: record.id,
          recordAssociatedAt: new Date(0),
          processedAt: new Date(0),
          importedAt: new Date(0),
        });

        expect(record.state).toBe("pending");
        await ImportWorkflow();

        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "record:export"
        );
        expect(foundExportTasks.length).toEqual(1);
        await specHelper.runTask("record:export", foundExportTasks[0].args[0]);

        await record.reload();
        const properties = await record.simplifiedProperties();
        expect(properties.email).toEqual(["mario@example.com"]);
        expect(properties.firstName).toEqual(["Mario"]);
        expect(properties.lastName).toEqual(["Mario"]);

        await importA.reload();
        await importB.reload();
        expect(importA.processedAt.getTime()).toBeGreaterThanOrEqual(
          start.getTime()
        );
        expect(importB.processedAt.getTime()).toEqual(new Date(0).getTime());

        const exports = await Export.findAll();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(destination.id);
      });

      describe("with exportRecord", () => {
        let counter = 0;

        beforeEach(async () => {
          await Export.truncate();
          await record.reload();
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

        it("will not export records not yet in the ready state", async () => {
          await record.update({ state: "pending" });

          await specHelper.runTask("record:export", {
            recordId: record.id,
          }); // does not throw because it did not run

          expect(counter).toBe(0);
        });
      });
    });
  });
});
