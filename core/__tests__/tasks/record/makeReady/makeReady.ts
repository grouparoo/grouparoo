import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, config, task, specHelper } from "actionhero";
import { Op } from "sequelize";
import { GrouparooModel } from "../../../../dist";
import {
  Import,
  Export,
  Group,
  Property,
  GrouparooRecord,
  RecordProperty,
  Schedule,
  Source,
  App,
  Destination,
  plugin,
} from "../../../../src";

describe("tasks/record:makeReady", () => {
  let source: Source;
  let schedule: Schedule;
  let group: Group;
  let model: GrouparooModel;

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
    source = await Source.findOne();
    schedule = await helper.factories.schedule(source);
  });

  beforeAll(async () => {
    group = await helper.factories.group();
    await group.setRules([
      {
        key: "lastName",
        match: "Mario",
        operation: {
          op: config.sequelize.dialect === "postgres" ? "iLike" : "like",
        },
      },
    ]);
    await group.update({ state: "ready" });
  });

  test("can be enqueued", async () => {
    await task.enqueue("records:makeReady", {});
    const found = await specHelper.findEnqueuedTasks("records:makeReady");
    expect(found.length).toEqual(1);
  });

  test("enqueuing more than one tasks will de-duplicate", async () => {
    await task.enqueue("records:makeReady", {});
    await task.enqueue("records:makeReady", {});

    const found = await specHelper.findEnqueuedTasks("records:makeReady");
    expect(found.length).toEqual(1);
  });

  test("it will find records which are not ready but have all properties ready", async () => {
    const mario = await helper.factories.record();
    await mario.import();
    await mario.update({ state: "pending" });

    const luigi = await helper.factories.record();
    await luigi.import();
    await luigi.update({ state: "pending" });

    // toad is ready already
    const toad = await helper.factories.record();
    await toad.import();
    await toad.update({ state: "ready" });

    // peach has 1 pending record property
    const peach = await helper.factories.record();
    await peach.import();
    const peachProperty = await RecordProperty.findOne({
      where: { recordId: peach.id },
    });
    await peachProperty.update({ state: "pending" });
    await peach.update({ state: "pending" });

    // bowser has all pending record properties
    const bowser = await helper.factories.record();
    await bowser.import();
    const bowserProperties = await RecordProperty.findAll({
      where: { recordId: bowser.id },
    });
    for (const p of bowserProperties) {
      await p.update({ state: "pending" });
    }
    await bowser.update({ state: "pending" });

    await specHelper.runTask("records:makeReady", {});

    await mario.reload();
    await luigi.reload();
    await toad.reload();
    await peach.reload();
    await bowser.reload();

    expect(mario.state).toBe("ready");
    expect(luigi.state).toBe("ready");
    expect(toad.state).toBe("ready");
    expect(peach.state).toBe("pending");
    expect(bowser.state).toBe("pending");

    await mario.destroy();
    await luigi.destroy();
    await toad.destroy();
    await peach.destroy();
    await bowser.destroy();
  });

  test("it updates the group memberships", async () => {
    const record = await helper.factories.record();
    await record.addOrUpdateProperties({ lastName: ["Mario"] });
    await record.import();
    await record.update({ state: "pending" });

    let groups = await record.$get("groups");
    expect(groups.length).toBe(0);

    await specHelper.runTask("records:makeReady", {});

    await record.reload();
    expect(record.state).toBe("ready");

    groups = await record.$get("groups");
    expect(groups.length).toBe(1);

    await record.destroy();
  });

  test("it updates the imports new data and updates the run counts", async () => {
    const run = await helper.factories.run(schedule);

    const _importA = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Mario",
      noExist: "here",
    });
    const _importB = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Super",
      lastName: "Mario",
    });

    await specHelper.runTask("import:associateRecords", {});

    const record = await GrouparooRecord.findOne();
    await record.import();
    await record.update({ state: "pending" });

    await _importA.reload();
    await _importB.reload();
    expect(_importA.importedAt).toBeFalsy();
    expect(_importA.state).toBe("importing");
    expect(_importB.importedAt).toBeFalsy();
    expect(_importB.state).toBe("importing");

    expect(run.recordsCreated).toEqual(0);
    expect(run.recordsImported).toEqual(0);

    await specHelper.runTask("records:makeReady", {});

    await record.reload();
    expect(record.state).toBe("ready");

    await _importA.reload();
    await _importB.reload();
    await run.updateTotals();

    expect(_importA.importedAt).toBeTruthy();
    expect(_importA.processedAt).toBeTruthy();
    expect(_importA.state).toBe("complete");

    expect(_importB.importedAt).toBeTruthy();
    expect(_importB.processedAt).toBeTruthy();
    expect(_importB.state).toBe("complete");

    expect(run.recordsCreated).toEqual(1);
    expect(run.recordsImported).toEqual(1);
  });

  test("it will optionally mark the imports as exported to complete the lifecycle", async () => {
    const run = await helper.factories.run(schedule);

    const _importA = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Mario",
      noExist: "here",
    });

    await specHelper.runTask("import:associateRecords", {});

    const record = await GrouparooRecord.findOne();
    await record.import();
    await record.update({ state: "pending" });

    process.env.GROUPAROO_DISABLE_EXPORTS = "true";
    await specHelper.runTask("records:makeReady", {});

    await record.reload();
    expect(record.state).toBe("ready");

    await _importA.reload();
    expect(_importA.importedAt).toBeTruthy();
    expect(_importA.processedAt).toBeTruthy();
    expect(_importA.state).toBe("complete");

    const exportsCount = await Export.count();
    expect(exportsCount).toBe(0);

    process.env.GROUPAROO_DISABLE_EXPORTS = "false";
  });

  describe("with multiple destinations and imports", () => {
    let record: GrouparooRecord;
    let app: App;
    let destination: Destination;

    beforeAll(async () => {
      helper.disableTestPluginImport();

      await GrouparooRecord.truncate();
      await RecordProperty.truncate();
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
        lastName: "Mario",
      });

      const importB = await helper.factories.import(runB, {
        email: "mario@example.com",
        firstName: "Super",
      });

      await specHelper.runTask("import:associateRecords", {});

      records = await GrouparooRecord.findAll();
      expect(records.length).toBe(1);
      expect(records[0].state).toBe("pending");

      await ImportWorkflow();

      await records[0].reload();
      expect(records[0].state).toBe("ready");
      const properties = await records[0].simplifiedProperties();
      expect(properties.email).toEqual(["mario@example.com"]);
      expect(properties.firstName).toEqual(["Super"]);
      expect(properties.lastName).toEqual(["Mario"]);

      await specHelper.runTask("export:enqueue", {});
      const foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
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
    });

    test("it will append destinationIds from imports", async () => {
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

      await specHelper.runTask("import:associateRecords", {});

      const records = await GrouparooRecord.findAll();
      expect(records.length).toBe(2);

      await ImportWorkflow();

      await specHelper.runTask("export:enqueue", {});
      const foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
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

    it("does not consider already complete imports", async () => {
      const start = new Date();
      const record = await GrouparooRecord.findOne();
      const runA = await helper.factories.run(null, { state: "running" });

      const importA = await helper.factories.import(runA, {
        email: "mario@example.com",
        firstName: "Mario",
        lastName: "Mario",
      });
      await specHelper.runTask("import:associateRecords", {});

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

      await record.markPending();
      await ImportWorkflow();

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

      it("will not export records already in the ready state", async () => {
        await record.update({ state: "ready" });

        await specHelper.runTask("records:makeReady", {}); // does not throw because it did not run

        expect(counter).toBe(0);
      });
    });
  });
});
