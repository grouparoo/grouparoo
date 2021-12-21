import { helper } from "@grouparoo/spec-helper";
import {
  plugin,
  App,
  Destination,
  Export,
  Group,
  GrouparooRecord,
  Property,
  GroupMember,
  GrouparooModel,
} from "../../../../src";
import { api, specHelper } from "actionhero";
import { Op } from "sequelize";

const mockLog = jest.fn();
const logSpy = jest
  .spyOn(require("actionhero"), "log", "get")
  .mockImplementation(() => mockLog);

describe("models/destination - with custom exportRecord plugin", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let model: GrouparooModel;
  let app: App;
  let destination: Destination;
  let exportArgs = {
    app: null,
    appOptions: null,
    destination: null,
    destinationOptions: null,
    syncOperations: null,
    record: null,
    oldRecordProperties: null,
    newRecordProperties: null,
    oldGroups: null,
    newGroups: null,
    toDelete: null,
  };
  let exportArrayProperties = [];
  let parallelismResponse = Infinity;
  let exportProfileResponse = {
    success: true,
    error: undefined,
    retryDelay: undefined,
  };
  let exportProfileThrow = null;

  afterEach(() => {
    mockLog.mockReset();
  });
  afterAll(() => {
    logSpy.mockRestore();
  });

  beforeAll(async () => {
    await helper.truncate();
    ({ model } = await helper.factories.properties());
    plugin.registerPlugin({
      name: "test-export-plugin",
      apps: [
        {
          name: "test-template-app",
          displayName: "test-template-app",
          options: [{ key: "test_key", required: true }],
          methods: {
            test: async () => {
              return { success: true };
            },
            parallelism: async () => {
              return parallelismResponse;
            },
          },
        },
      ],
      connections: [
        {
          name: "export-from-test-app",
          displayName: "export-from-test-app",
          description: "a test app connection",
          apps: ["test-template-app"],
          direction: "export",
          options: [],
          syncModes: ["sync", "enrich", "additive"],
          methods: {
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
            exportArrayProperties: async () => exportArrayProperties,
            exportRecord: async ({
              app,
              appOptions,
              destination,
              destinationOptions,
              syncOperations,
              export: {
                record,
                oldRecordProperties,
                newRecordProperties,
                oldGroups,
                newGroups,
                toDelete,
              },
            }) => {
              exportArgs = {
                app,
                appOptions,
                destination,
                destinationOptions,
                syncOperations,
                record,
                oldRecordProperties,
                newRecordProperties,
                oldGroups,
                newGroups,
                toDelete,
              };
              if (exportProfileThrow) {
                throw exportProfileThrow;
              }
              return exportProfileResponse;
            },
          },
        },
      ],
    });

    app = await App.create({
      name: "test with real methods",
      type: "test-template-app",
    });
    await app.setOptions({ test_key: "abc" });
    await app.update({ state: "ready" });
  });

  describe.each(["ready", "deleted"])("with app in %p state", (appState) => {
    beforeEach(async () => {
      exportArgs = {
        app: null,
        appOptions: null,
        destination: null,
        destinationOptions: null,
        syncOperations: null,
        record: null,
        oldRecordProperties: null,
        newRecordProperties: null,
        oldGroups: null,
        newGroups: null,
        toDelete: null,
      };
    });

    beforeEach(async () => {
      await app.update({ state: "ready" });

      destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });
      await destination.update({ state: "ready" });
      await api.resque.queue.connection.redis.flushdb();

      await app.update({ state: appState });
    });

    afterEach(async () => {
      await destination.updateTracking("none");
      await destination.destroy();
    });

    test("the app exportRecord method can be called by the destination and exports will be created and mappings followed", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      await destination.updateTracking("group", groupA.id);

      // modify the membership name
      const destinationGroupMemberships = {};
      destinationGroupMemberships[groupA.id] = groupA.name + "+";
      destinationGroupMemberships[groupB.id] = groupB.name + "+";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [1001],
        email: ["newemail@example.com"],
      });
      await GroupMember.create({ recordId: record.id, groupId: groupA.id });
      await GroupMember.create({ recordId: record.id, groupId: groupB.id });

      const oldExport = await helper.factories.export(record, destination, {
        newRecordProperties: {
          customer_email: { type: "email", rawValue: "oldmail@example.com" },
        },
        state: "complete",
        newGroups: [],
        startedAt: new Date(),
        completedAt: new Date(),
      });
      await specHelper.deleteEnqueuedTasks("exports:send", {
        id: oldExport.id,
      });

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.destination.id).toEqual(destination.id);
      expect(exportArgs.app.id).toEqual(app.id);
      expect(exportArgs.record.id).toEqual(record.id);
      expect(exportArgs.oldRecordProperties).toEqual({
        customer_email: "oldmail@example.com",
      });
      expect(exportArgs.newRecordProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: 1001,
      });
      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual(
        [groupA, groupB].map((g) => `${g.name}+`).sort()
      );
      expect(exportArgs.toDelete).toEqual(false);

      const _exports = await Export.findAll({
        where: { destinationId: destination.id },
        order: [["createdAt", "asc"]],
      });
      expect(_exports.length).toBe(2);
      expect(_exports[1].destinationId).toBe(destination.id);
      expect(_exports[1].recordId).toBe(record.id);
      expect(
        _exports[0].completedAt.getTime() - _exports[0].startedAt.getTime()
      ).toBeGreaterThanOrEqual(0);
      expect(_exports[1].errorMessage).toBeFalsy();
      expect(_exports[1].oldRecordProperties).toEqual({
        customer_email: "oldmail@example.com",
      });
      expect(_exports[1].newRecordProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: 1001,
      });
      expect(_exports[1].oldGroups).toEqual([]);
      expect(_exports[1].newGroups).toEqual(
        [groupA, groupB].map((g) => `${g.name}+`).sort()
      );

      await record.destroy();
    });

    test("record properties previously mapped but now removed will be included as oldRecordProperties in the export", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();

      await destination.updateTracking("group", groupA.id);

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [1001],
        email: ["newemail@example.com"],
      });
      await GroupMember.create({ recordId: record.id, groupId: groupA.id });

      // create a previous export
      const _export = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        newRecordProperties: {
          gender: { type: "string", rawValue: "Male" },
          customer_email: { type: "email", rawValue: "oldmail@example.com" },
        },
        oldRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      for (const i in foundTasks) {
        await specHelper.runTask("export:send", foundTasks[i].args[0]);
      }

      expect(exportArgs.oldRecordProperties).toEqual({
        customer_email: "oldmail@example.com",
        gender: "Male",
      });
      expect(exportArgs.newRecordProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: 1001,
      });

      await record.destroy();
    });

    test("if the primary key property has been removed, newRecordProperties will use oldRecordProperties values in the export", async () => {
      await destination.setMapping({
        is_vip: "isVIP",
        customer_email: "email",
        lifetime: "ltv",
      });

      const groupA = await helper.factories.group();
      await destination.updateTracking("group", groupA.id);

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [null],
        email: [null],
        isVIP: [null],
        ltv: [null],
      });

      // create a previous export
      await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        newRecordProperties: {
          customer_email: { type: "email", rawValue: "oldmail@example.com" },
          is_vip: { type: "boolean", rawValue: "false" },
          first_name: { type: "string", rawValue: "Joe" },
        },
        oldRecordProperties: {},
        oldGroups: [],
        newGroups: ["someGroup"],
        state: "complete",
      });

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      for (const i in foundTasks) {
        await specHelper.runTask("export:send", foundTasks[i].args[0]);
      }

      expect(exportArgs.toDelete).toBe(true);

      // Old properties that are still mapped stay the same
      expect(exportArgs.oldRecordProperties).toEqual({
        customer_email: "oldmail@example.com",
        is_vip: false,
        first_name: "Joe", // will not be set since it's no longer a mapping
      });
      expect(exportArgs.newRecordProperties).toEqual({
        customer_email: "oldmail@example.com",
        is_vip: false,
      });

      // Groups are cleared
      expect(exportArgs.oldGroups).toEqual(["someGroup"]);
      expect(exportArgs.newGroups).toEqual([]);

      await record.destroy();
    });

    test("properties in deleted state can be exported", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const emailProp = await Property.findOne({ where: { key: "email" } });
      await emailProp.update({ state: "deleted" });

      const groupA = await helper.factories.group();
      await destination.updateTracking("group", groupA.id);

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [1002],
        email: ["newemail@example.com"],
      });
      await GroupMember.create({ recordId: record.id, groupId: groupA.id });

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      for (const i in foundTasks) {
        await specHelper.runTask("export:send", foundTasks[i].args[0]);
      }

      expect(exportArgs.newRecordProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: 1002,
      });

      await record.destroy();
      await emailProp.update({ state: "ready" });
    });

    test("newly tagged groups will appear new in next export", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const group = await helper.factories.group();
      await destination.updateTracking("group", group.id);

      const record = await helper.factories.record();
      await GroupMember.create({ recordId: record.id, groupId: group.id });

      // create a previous export
      const _export = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        newRecordProperties: {},
        oldRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      for (const i in foundTasks) {
        await specHelper.runTask("export:send", foundTasks[i].args[0]);
      }

      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual([group.name]);

      await record.destroy();
    });

    test("newly un-tagged groups will be removed from the next export", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const group = await helper.factories.group();
      await destination.updateTracking("group", group.id);

      const record = await helper.factories.record();
      await GroupMember.create({ recordId: record.id, groupId: group.id });

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      // create a previous export
      const _export = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        newRecordProperties: {},
        oldRecordProperties: {},
        oldGroups: [group.name],
        newGroups: [group.name],
        state: "complete",
      });

      const _import = await helper.factories.import();

      await destination.setDestinationGroupMemberships({});

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      for (const i in foundTasks) {
        await specHelper.runTask("export:send", foundTasks[i].args[0]);
      }

      expect(exportArgs.oldGroups).toEqual([group.name]);
      expect(exportArgs.newGroups).toEqual([]);

      await record.destroy();
    });

    test("if a record is removed from all groups tracked by this destination, toDelete is true", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      const destinationGroupMemberships = {};
      destinationGroupMemberships[groupA.id] = groupA.name;
      destinationGroupMemberships[groupB.id] = groupB.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();

      const oldExport = await helper.factories.export(record, destination, {
        newRecordProperties: {},
        newGroups: [groupA.name, groupB.name].sort(),
        startedAt: new Date(),
        completedAt: new Date(),
        state: "complete",
      });
      await specHelper.deleteEnqueuedTasks("exports:send", {
        id: oldExport.id,
      });

      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.record.id).toEqual(record.id);
      expect(exportArgs.oldGroups).toEqual(
        [groupA, groupB].map((g) => g.name).sort()
      );
      expect(exportArgs.newGroups).toEqual([]);
      expect(exportArgs.toDelete).toEqual(true);

      await record.destroy();
    });

    test("if a destination is no longer tracking a model, toDelete is true", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const record = await helper.factories.record();

      const oldExport = await helper.factories.export(record, destination, {
        newRecordProperties: {},
        startedAt: new Date(),
        completedAt: new Date(),
        state: "complete",
      });
      await specHelper.deleteEnqueuedTasks("exports:send", {
        id: oldExport.id,
      });

      await destination.updateTracking("none");
      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.record.id).toEqual(record.id);
      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual([]);
      expect(exportArgs.toDelete).toEqual(true);

      await record.destroy();
    });

    test('if record is removed from destination\'s tracked group in "sync" syncMode, toDelete is true', async () => {
      expect(destination.syncMode).toBe("sync");

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();
      const groupC = await helper.factories.group();

      const destinationGroupMemberships = {};
      destinationGroupMemberships[groupA.id] = groupA.name;
      destinationGroupMemberships[groupB.id] = groupB.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      await GroupMember.create({ recordId: record.id, groupId: groupA.id });
      await GroupMember.create({ recordId: record.id, groupId: groupB.id });

      const oldExport = await helper.factories.export(record, destination, {
        newRecordProperties: {},
        newGroups: [groupA.name, groupB.name].sort(),
        startedAt: new Date(),
        completedAt: new Date(),
        state: "complete",
      });
      await specHelper.deleteEnqueuedTasks("exports:send", {
        id: oldExport.id,
      });

      await destination.updateTracking("group", groupC.id);
      await destination.exportRecord(record);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.record.id).toEqual(record.id);
      expect(exportArgs.oldGroups).toEqual(
        [groupA, groupB].map((g) => g.name).sort()
      );
      expect(exportArgs.newGroups).toEqual(
        [groupA, groupB].map((g) => g.name).sort()
      );
      expect(exportArgs.toDelete).toEqual(true);

      await record.destroy();
    });

    test.each(["additive", "enrich"])(
      "if record is removed from destination's tracked group in %p syncMode, toDelete is false and groups are cleared",
      async (syncMode) => {
        await destination.update({ syncMode });
        await destination.setMapping({
          uid: "userId",
          customer_email: "email",
        });

        const groupA = await helper.factories.group();
        const groupB = await helper.factories.group();
        const groupC = await helper.factories.group();

        const destinationGroupMemberships = {};
        destinationGroupMemberships[groupA.id] = groupA.name;
        destinationGroupMemberships[groupB.id] = groupB.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const record = await helper.factories.record();
        await GroupMember.create({ recordId: record.id, groupId: groupA.id });
        await GroupMember.create({ recordId: record.id, groupId: groupB.id });

        const oldExport = await helper.factories.export(record, destination, {
          newRecordProperties: {},
          newGroups: [groupA.name, groupB.name].sort(),
          startedAt: new Date(),
          completedAt: new Date(),
          state: "complete",
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          id: oldExport.id,
        });

        await destination.updateTracking("group", groupC.id);
        await destination.exportRecord(record);

        await specHelper.runTask("export:enqueue", {});
        const foundTasks = await specHelper.findEnqueuedTasks("export:send");
        expect(foundTasks.length).toBe(1);
        await specHelper.runTask("export:send", foundTasks[0].args[0]);

        expect(exportArgs.record.id).toEqual(record.id);
        expect(exportArgs.oldGroups).toEqual(
          [groupA, groupB].map((g) => g.name).sort()
        );
        expect(exportArgs.toDelete).toEqual(false); // toDelete false
        expect(exportArgs.newGroups).toEqual([]); // Groups cleared

        await record.destroy();

        await destination.update({ syncMode: "sync" });
      }
    );

    test("if an export has the same data as the previous export, and force=false, it will not be sent to the destination", async () => {
      const record = await helper.factories.record();
      const group = await helper.factories.group();
      await GroupMember.create({ recordId: record.id, groupId: group.id });
      await destination.updateTracking("group", group.id);

      const oldExport = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        startedAt: new Date(),
        completedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });

      await destination.exportRecord(record);
      const newExport = await Export.findOne({
        where: {
          destinationId: destination.id,
          id: { [Op.ne]: oldExport.id },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(false);
      expect(newExport.force).toBe(false);

      await destination.sendExport(newExport, true);
      expect(exportArgs.record).toBeNull(); // plugin#exportRecord not called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();

      await record.destroy();
    });

    test("if an export has the same data as the previous export, and force=true, it will be sent to the destination", async () => {
      const record = await helper.factories.record();
      const group = await helper.factories.group();
      await GroupMember.create({ recordId: record.id, groupId: group.id });
      await destination.updateTracking("group", group.id);

      const oldExport = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        startedAt: new Date(),
        completedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });

      await destination.exportRecord(record, false, true);
      const newExport = await Export.findOne({
        where: {
          destinationId: destination.id,
          id: { [Op.ne]: oldExport.id },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await destination.sendExport(newExport, true);
      expect(exportArgs.record).not.toBeNull(); // plugin#exportRecord was called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();
      expect(newExport.force).toBe(true);

      await record.destroy();
    });

    test("if there is no previous export, it will be sent to the destination and all data will be new", async () => {
      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        email: ["newEmail@example.com"],
      });
      const group = await helper.factories.group();
      await GroupMember.create({ recordId: record.id, groupId: group.id });
      await destination.updateTracking("group", group.id);

      await destination.setMapping({
        customer_email: "email",
      });

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.exportRecord(record);
      const newExport = await Export.findOne({
        where: { destinationId: destination.id },
      });

      expect(newExport.oldRecordProperties).toEqual({});
      expect(newExport.newRecordProperties).toEqual({
        customer_email: "newemail@example.com",
      });
      expect(newExport.oldGroups).toEqual([]);
      expect(newExport.newGroups).toEqual([group.name]);
      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await destination.sendExport(newExport, true);
      expect(exportArgs.record).not.toBeNull(); // plugin#exportRecord was called

      await record.destroy();
    });

    describe("sync mode operations", () => {
      let record = null;
      let _export = null;

      beforeEach(async () => {
        record = await helper.factories.record();
        await record.addOrUpdateProperties({
          email: ["newEmail@example.com"],
        });
        const group = await helper.factories.group();
        await GroupMember.create({ recordId: record.id, groupId: group.id });
        await destination.updateTracking("group", group.id);

        await destination.setMapping({
          customer_email: "email",
        });

        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        await destination.exportRecord(record);
        _export = await Export.findOne({
          where: { destinationId: destination.id },
        });
      });

      afterEach(async () => {
        await record.destroy();
      });

      test("Sync syncMode allows creating, updating and deleting records", async () => {
        await destination.update({ syncMode: "sync" });

        await destination.sendExport(_export, true);
        expect(exportArgs.syncOperations.create).toBe(true);
        expect(exportArgs.syncOperations.update).toBe(true);
        expect(exportArgs.syncOperations.delete).toBe(true);
      });

      test("Enrich syncMode only allows updating records", async () => {
        await destination.update({ syncMode: "enrich" });

        await destination.sendExport(_export, true);
        expect(exportArgs.syncOperations.create).toBe(false);
        expect(exportArgs.syncOperations.update).toBe(true);
        expect(exportArgs.syncOperations.delete).toBe(false);

        await record.destroy();
      });

      test("Additive syncMode only allows creating and updating records", async () => {
        await destination.update({ syncMode: "additive" });

        await destination.sendExport(_export, true);
        expect(exportArgs.syncOperations.create).toBe(true);
        expect(exportArgs.syncOperations.update).toBe(true);
        expect(exportArgs.syncOperations.delete).toBe(false);

        await record.destroy();
      });
    });

    test("exportRecord can return that it is rate limited and the export will have a sendAt in the future", async () => {
      // when the parallelism is not OK
      parallelismResponse = 0;

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      await destination.exportRecord(record);
      const _export = await Export.findOne({
        where: { destinationId: destination.id },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

      await _export.reload();
      expect(_export.state).toBe("pending");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.errorMessage).toBeFalsy();
      expect(_export.sendAt.getTime()).toBeGreaterThan(new Date().getTime());
      expect(_export.retryCount).toBe(0);

      await _export.update({ sendAt: new Date() });

      // when the parallelism is back to OK...
      parallelismResponse = Infinity;
      await api.resque.queue.connection.redis.flushdb();

      await specHelper.runTask("export:enqueue", {});
      foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

      await _export.reload();
      expect(_export.completedAt).toBeTruthy();
      expect(_export.state).toBe("complete");

      await record.destroy();
    });

    test("sending an export with sync and producing a parallelism error will throw", async () => {
      parallelismResponse = 0;

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      await expect(destination.exportRecord(record, true)).rejects.toThrow(
        /parallelism limit reached for test-template-app/
      );

      await Export.truncate();
      parallelismResponse = Infinity;
    });

    test("the app can be rate-limited with an error and the export will have a sendAt in the future", async () => {
      exportProfileResponse = {
        success: false,
        error: new Error("oh no!"),
        retryDelay: 1000,
      };

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      await destination.exportRecord(record);
      const _export = await Export.findOne({
        where: { destinationId: destination.id },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

      await _export.reload();
      expect(_export.startedAt).toBeFalsy();
      expect(_export.sendAt.getTime()).toBeGreaterThan(new Date().getTime());
      expect(_export.errorMessage).toMatch(/oh no!/);
      expect(_export.errorLevel).toBe("error");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.state).toBe("pending");
      expect(_export.retryCount).toBe(0);

      // when the response is back to success
      exportProfileResponse = {
        success: true,
        error: undefined,
        retryDelay: undefined,
      };

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      await _export.reload();
      expect(_export.completedAt).toBeTruthy();
      expect(_export.state).toBe("complete");
    });

    test("export:send task will be be retried on record id error", async () => {
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      const error = new Error("oh no!");
      error["recordId"] = record.id;
      exportProfileResponse = {
        success: false,
        error,
        retryDelay: 1000,
      };

      await destination.exportRecord(record);
      const _export = await Export.findOne({
        where: { destinationId: destination.id },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);

      // the task should be re-enqueued with no error
      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      foundSendTasks = await specHelper.findEnqueuedTasks("export:send");

      await _export.reload();
      expect(_export.completedAt).toBeFalsy();
      expect(_export.errorMessage).toMatch(/oh no!/);
      expect(_export.errorLevel).toBe("error");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.state).toBe("pending");
      expect(_export.sendAt.getTime()).toBeGreaterThan(new Date().getTime());
      expect(_export.retryCount).toBe(0);

      // when the response is back to success
      exportProfileResponse = {
        success: true,
        error: undefined,
        retryDelay: undefined,
      };

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      await _export.reload();
      expect(_export.completedAt).toBeTruthy();
      expect(_export.state).toBe("complete");
    });

    test("export:send task will complete the export with an info error", async () => {
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      const error = new Error("oh no!");
      error["recordId"] = record.id;
      error["errorLevel"] = "info";
      exportProfileResponse = {
        success: false,
        error,
        retryDelay: 1000,
      };

      await destination.exportRecord(record);
      const _export = await Export.findOne({
        where: { destinationId: destination.id },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

      await _export.reload();
      expect(_export.completedAt).toBeFalsy();
      expect(_export.errorMessage).toMatch(/oh no!/);
      expect(_export.errorLevel).toBe("info");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.state).toBe("failed");
    });

    test("sending an export with sync and producing a retry error will throw", async () => {
      exportProfileResponse = {
        success: false,
        error: new Error("oh no!"),
        retryDelay: 1000,
      };

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();
      await expect(destination.exportRecord(record, true)).rejects.toThrow(
        /: oh no!/
      );

      await Export.truncate();
      exportProfileResponse = {
        success: true,
        error: undefined,
        retryDelay: undefined,
      };
    });

    test("sending an export with sync and throwing an error will throw", async () => {
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();

      exportProfileThrow = new Error("oh no!");
      await expect(destination.exportRecord(record, true)).rejects.toThrow(
        /: oh no!/
      );
      expect(
        mockLog.mock.calls.find((call) => call[0].includes("ExportError"))
          .length
      ).toBe(3);
      exportProfileThrow = null;

      const newExport = await Export.findOne({
        where: { recordId: record.id, destinationId: destination.id },
      });
      expect(newExport.errorMessage).toMatch(/oh no!/);
      expect(newExport.errorLevel).toBe("error");
      expect(newExport.completedAt).toBeFalsy();

      await Export.truncate();
    });

    test("sending an export and throwing an error with record id will record it", async () => {
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();

      exportProfileThrow = new Error("oh no!");
      exportProfileThrow["recordId"] = record.id;

      await expect(destination.exportRecord(record, true)).rejects.toThrow(
        /: oh no!/
      );
      exportProfileThrow = null;

      const newExport = await Export.findOne({
        where: { recordId: record.id, destinationId: destination.id },
      });
      expect(newExport.errorMessage).toMatch(/oh no!/);
      expect(newExport.errorLevel).toBe("error");
      expect(newExport.completedAt).toBeFalsy();

      await Export.truncate();
      exportProfileThrow = null;
    });

    test("sending an export and throwing an error with info level will record it and have success", async () => {
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const record = await helper.factories.record();

      exportProfileThrow = new Error("oh no!");
      exportProfileThrow["recordId"] = record.id;
      exportProfileThrow["errorLevel"] = "info";

      await destination.exportRecord(record, true);
      exportProfileThrow = null;

      const newExport = await Export.findOne({
        where: { recordId: record.id, destinationId: destination.id },
      });
      expect(newExport.errorMessage).toMatch(/oh no!/);
      expect(newExport.errorLevel).toBe("info");
      expect(newExport.completedAt).toBeFalsy();

      await Export.truncate();
      exportProfileThrow = null;
    });

    describe("deletion validations with pending exports", () => {
      let group: Group;
      let record: GrouparooRecord;

      beforeAll(async () => {
        group = await helper.factories.group();

        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        record = await helper.factories.record();
        await GroupMember.create({ recordId: record.id, groupId: group.id });
      });

      afterAll(async () => {
        await destination.destroy();
        await GroupMember.destroy({ where: { groupId: group.id } });
        await group.destroy();
        await record.destroy();
      });

      test("a destination cannot be destroyed until all exports are complete", async () => {
        const _export = await Export.create({
          destinationId: destination.id,
          recordId: record.id,
          startedAt: new Date(),
          completedAt: null,
          oldRecordProperties: {},
          newRecordProperties: {},
          oldGroups: [],
          newGroups: [],
          state: "pending",
        });

        await expect(destination.destroy()).rejects.toThrow(
          /cannot delete destination until all pending exports have been processed/
        );

        await _export.update({ state: "complete" });
        await destination.destroy(); // does not throw
      });

      test("a destination cannot be destroyed until all exports are processed", async () => {
        const _export = await Export.create({
          destinationId: destination.id,
          recordId: record.id,
          startedAt: new Date(),
          completedAt: null,
          oldRecordProperties: {},
          newRecordProperties: {},
          oldGroups: [],
          newGroups: [],
          state: "processing",
        });

        await expect(destination.destroy()).rejects.toThrow(
          /cannot delete destination until all pending exports have been processed/
        );

        await _export.update({ state: "complete" });
        await destination.destroy(); // does not throw
      });
    });

    describe("array exports", () => {
      afterAll(() => {
        exportArrayProperties = [];
      });

      test("mappings cannot use array record properties if they are not allowed by exportArrayProperties", async () => {
        await expect(
          destination.setMapping({ purchases: "purchases" })
        ).rejects.toThrow(
          /purchases is an array record property that .* cannot support/
        );
      });

      test("exportArrayProperties can ask for an array record property", async () => {
        exportArrayProperties = ["purchases"];

        await destination.setMapping({ purchases: "purchases" });

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const record = await helper.factories.record();
        await record.addOrUpdateProperties({
          purchases: ["hat", "mushroom", "star"],
        });

        const oldExport = await helper.factories.export(record, destination, {
          newRecordProperties: {
            purchases: { type: "string", rawValue: ["hat", "mushroom"] },
          },
          newGroups: [group.name],
          startedAt: new Date(),
          completedAt: new Date(),
          state: "complete",
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          id: oldExport.id,
        });

        await destination.exportRecord(record);

        const _exports = await record.$get("exports", {
          order: [["createdAt", "asc"]],
        });
        expect(_exports.length).toBe(2);
        expect(_exports[1].oldRecordProperties).toEqual({
          purchases: ["hat", "mushroom"],
        });
        expect(_exports[1].newRecordProperties).toEqual({
          purchases: ["hat", "mushroom", "star"],
        });

        await Export.truncate();
      });

      test("exportArrayProperties can ask for all properties with *", async () => {
        exportArrayProperties = ["*"];

        await destination.setMapping({ purchases: "purchases" });

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const record = await helper.factories.record();
        await record.addOrUpdateProperties({
          purchases: ["hat", "mushroom", "star"],
        });

        const oldExport = await helper.factories.export(record, destination, {
          newRecordProperties: {
            purchases: { type: "string", rawValue: ["hat", "mushroom"] },
          },
          newGroups: [group.name],
          startedAt: new Date(),
          completedAt: new Date(),
          state: "complete",
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          id: oldExport.id,
        });

        await destination.exportRecord(record);

        const _exports = await record.$get("exports", {
          order: [["createdAt", "asc"]],
        });
        expect(_exports.length).toBe(2);
        expect(_exports[1].oldRecordProperties).toEqual({
          purchases: ["hat", "mushroom"],
        });
        expect(_exports[1].newRecordProperties).toEqual({
          purchases: ["hat", "mushroom", "star"],
        });

        await Export.truncate();
      });
    });
  });
});
