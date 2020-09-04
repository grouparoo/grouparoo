import { helper } from "../../../utils/specHelper";
import { plugin } from "../../../../src/modules/plugin";
import { App } from "../../../../src/models/App";
import { Destination } from "../../../../src/models/Destination";
import { Export } from "../../../../src/models/Export";
import { api, specHelper } from "actionhero";
import { Op } from "sequelize";
let actionhero;

describe("models/destination", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("with custom exportProfiles plugin", () => {
    let app: App;
    let destination: Destination;
    let exportArgs = {
      app: null,
      appOptions: null,
      destination: null,
      destinationOptions: null,
      exports: null,
    };
    let exportArrayProperties = [];
    let parallelismResponse = Infinity;
    let exportProfilesResponse = {
      success: true,
      errors: undefined,
      retryDelay: undefined,
    };

    beforeEach(() => {
      exportArgs = {
        app: null,
        appOptions: null,
        destination: null,
        destinationOptions: null,
        exports: [],
      };
    });

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            options: [{ key: "test_key", required: true }],
            methods: {
              test: async () => {
                return { success: true, errors: [] };
              },
              parallelism: async () => {
                return parallelismResponse;
              },
            },
          },
        ],
        connections: [
          {
            name: "export-from-test-template-app",
            description: "a test app connection",
            app: "test-template-app",
            direction: "export",
            options: [],
            methods: {
              destinationMappingOptions: async () => {
                return {
                  labels: {
                    group: {
                      singular: "list",
                      plural: "lists",
                    },
                    profilePropertyRule: {
                      singular: "var",
                      plural: "vars",
                    },
                  },
                  profilePropertyRules: {
                    required: [],
                    known: [],
                    allowOptionalFromProfilePropertyRules: true,
                  },
                };
              },
              exportArrayProperties: async () => exportArrayProperties,
              exportProfiles: async ({
                app,
                appOptions,
                destination,
                destinationOptions,
                exports,
              }) => {
                exportArgs = {
                  app,
                  appOptions,
                  destination,
                  destinationOptions,
                  exports,
                };
                return exportProfilesResponse;
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test with real methods - batch",
        type: "test-template-app",
      });
      await app.setOptions({ test_key: "abc" });
      await app.update({ state: "ready" });
    });

    beforeEach(async () => {
      destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
      await destination.update({ state: "ready" });

      await api.resque.queue.connection.redis.flushdb();
    });

    afterEach(async () => {
      await destination.unTrackGroup();
      await destination.destroy();
    });

    test("the app exportProfiles method can be called by the destination and exports will be created and mappings followed", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      await destination.trackGroup(groupA);

      const destinationGroupMemberships = {};
      // modify the membership name
      destinationGroupMemberships[groupA.guid] = groupA.name + "+";
      destinationGroupMemberships[groupB.guid] = groupB.name + "+";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["newemail@example.com"] });
      await groupA.addProfile(profile);
      await groupB.addProfile(profile);

      const oldExport = await helper.factories.export(profile, destination, {
        newProfileProperties: {
          customer_email: { type: "email", rawValue: "oldmail@example.com" },
        },
        newGroups: [],
        startedAt: new Date(),
        completedAt: new Date(),
        mostRecent: true,
      });
      await specHelper.deleteEnqueuedTasks("exports:send", {
        guid: oldExport.guid,
      });

      const _import = await helper.factories.import();
      const run = await helper.factories.run(groupA, { state: "running" });

      await destination.exportProfile(profile, [run], [_import]);

      // there should be no export:send tasks
      let foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(0);

      // there should be no export:sendBatch tasks until the run has completed
      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueue", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.destination.guid).toEqual(destination.guid);
      expect(exportArgs.app.guid).toEqual(app.guid);
      expect(exportArgs.exports.length).toEqual(1);
      expect(exportArgs.exports[0].profile.guid).toEqual(profile.guid);
      expect(exportArgs.exports[0].oldProfileProperties).toEqual({
        customer_email: "oldmail@example.com",
      });
      expect(exportArgs.exports[0].newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
      });
      expect(exportArgs.exports[0].oldGroups).toEqual([]);
      expect(exportArgs.exports[0].newGroups).toEqual(
        [groupA, groupB].map((g) => `${g.name}+`).sort()
      );
      expect(exportArgs.exports[0].toDelete).toEqual(false);

      const _exports = await Export.findAll({
        where: { destinationGuid: destination.guid },
        order: [["createdAt", "asc"]],
      });
      expect(_exports.length).toBe(2);
      expect(_exports[1].destinationGuid).toBe(destination.guid);
      expect(_exports[1].profileGuid).toBe(profile.guid);
      expect(
        _exports[1].completedAt.getTime() - _exports[0].startedAt.getTime()
      ).toBeGreaterThan(0);
      expect(_exports[1].errorMessage).toBeFalsy();
      expect(_exports[1].oldProfileProperties).toEqual({
        customer_email: "oldmail@example.com",
      });
      expect(_exports[1].newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
      });
      expect(_exports[1].oldGroups).toEqual([]);
      expect(_exports[1].newGroups).toEqual(
        [groupA, groupB].map((g) => `${g.name}+`).sort()
      );
      expect(_exports[1].mostRecent).toBe(true);

      const exportedImports = await _exports[1].$get("imports");
      expect(exportedImports.length).toBe(1);
      expect(exportedImports[0].guid).toBe(_import.guid);

      await profile.destroy();
    });

    test("profile properties previously mapped but now removed will be included as oldProfileProperties in the export", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();

      await destination.trackGroup(groupA);

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["newemail@example.com"] });

      // create a previous export
      const _export = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        newProfileProperties: {
          customer_email: { type: "email", rawValue: "oldmail@example.com" },
          gender: { type: "string", rawValue: "Male" },
        },
        oldProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      const _import = await helper.factories.import();
      const run = await helper.factories.run(groupA, { state: "running" });

      await destination.exportProfile(profile, [run], [_import]);

      // there should be no export:send tasks
      let foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(0);

      // there should be no export:sendBatch tasks until the run has completed
      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueue", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1);
      expect(exportArgs.exports[0].oldProfileProperties).toEqual({
        customer_email: "oldmail@example.com",
        gender: "Male",
      });
      expect(exportArgs.exports[0].newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
      });

      await profile.destroy();
    });

    test("if a profile is removed from all groups tracked by this destination, toDelete is true", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      const destinationGroupMemberships = {};
      destinationGroupMemberships[groupA.guid] = groupA.name;
      destinationGroupMemberships[groupB.guid] = groupB.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();

      const oldExport = await helper.factories.export(profile, destination, {
        newProfileProperties: {},
        newGroups: [groupA.name, groupB.name].sort(),
        startedAt: new Date(),
        completedAt: new Date(),
        mostRecent: true,
      });
      await specHelper.deleteEnqueuedTasks("exports:send", {
        guid: oldExport.guid,
      });

      const _import = await helper.factories.import();
      const run = await helper.factories.run(groupA, { state: "running" });

      await destination.exportProfile(profile, [run], [_import]);

      // there should be no export:send tasks
      let foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(0);

      // there should be no export:sendBatch tasks until the run has completed
      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueue", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1);
      expect(exportArgs.exports[0].profile.guid).toEqual(profile.guid);
      expect(exportArgs.exports[0].oldGroups).toEqual(
        [groupA, groupB].map((g) => g.name).sort()
      );
      expect(exportArgs.exports[0].newGroups).toEqual([]);
      expect(exportArgs.exports[0].toDelete).toEqual(true);

      await run.determineState();
    });

    test("if an export has the same data as the previous export, and force=false, it will not be sent to the destination", async () => {
      const profile = await helper.factories.profile();
      const group = await helper.factories.group();
      await group.addProfile(profile);
      await destination.trackGroup(group);

      const oldExport = await Export.create({
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      const run = await helper.factories.run(group, { state: "running" });

      await destination.exportProfile(profile, [run], []);
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(false);

      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(0); // plugin#exportProfile not called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();
    });

    test("if an export has the same data as the previous export, and force=true, it will be sent to the destination", async () => {
      const profile = await helper.factories.profile();
      const group = await helper.factories.group();
      await group.addProfile(profile);
      await destination.trackGroup(group);

      const oldExport = await Export.create({
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      const run = await helper.factories.run(group, { state: "running" });

      await destination.exportProfile(profile, [run], [], false, true);
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1); // plugin#exportProfile was called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();
    });

    test("if there is no previous export, it will be sent to the destination and all data will be new", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["newEmail@example.com"] });
      const group = await helper.factories.group();
      await group.addProfile(profile);
      await destination.trackGroup(group);

      await destination.setMapping({
        customer_email: "email",
      });

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const run = await helper.factories.run(group, { state: "running" });

      await destination.exportProfile(profile, [run], []);
      const newExport = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      expect(newExport.oldProfileProperties).toEqual({});
      expect(newExport.newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
      });
      expect(newExport.oldGroups).toEqual([]);
      expect(newExport.newGroups).toEqual([group.name]);
      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1); // plugin#exportProfile was called

      await profile.destroy();
    });

    test("exportProfile can return that it is rate limited and the export:send task will be re-enqueued", async () => {
      parallelismResponse = 0;

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });
      await destination.exportProfile(profile, [run], []);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundSendBatchTasks.length).toBe(1);

      // the task should be re-enqueued with no error
      await specHelper.runTask(
        "export:sendBatch",
        foundSendBatchTasks[0].args[0]
      );
      foundSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundSendBatchTasks.length).toBe(1 + 1);
      await _export.reload();
      expect(_export.completedAt).toBeFalsy();

      // when the parallelism is back to OK...
      parallelismResponse = Infinity;

      await specHelper.runTask(
        "export:sendBatch",
        foundSendBatchTasks[0].args[0]
      );
      foundSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundSendBatchTasks.length).toBe(1 + 1);
      await _export.reload();
      expect(_export.completedAt).toBeTruthy();
      await run.determineState();
    });

    test("sending an export with sync and producing a parallelism error will throw", async () => {
      parallelismResponse = 0;

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });
      await expect(
        destination.exportProfile(profile, [run], [], true)
      ).rejects.toThrow(/parallelism limit reached for test-template-app/);

      await run.stop();
      parallelismResponse = Infinity;
    });

    test("the app can be rate-limited and the export:sendBatches task will be re-enqueued", async () => {
      exportProfilesResponse = {
        success: false,
        errors: [new Error("oh no!")],
        retryDelay: 1000,
      };

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });
      await destination.exportProfile(profile, [run], []);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundSendBatchTasks.length).toBe(1);

      // the task should be re-enqueued with no error
      await specHelper.runTask(
        "export:sendBatch",
        foundSendBatchTasks[0].args[0]
      );
      foundSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundSendBatchTasks.length).toBe(1 + 1);
      expect(foundSendBatchTasks[1].timestamp).toBeGreaterThan(
        new Date().getTime()
      );
      await _export.reload();
      expect(_export.completedAt).toBeFalsy();

      // when the response is back to success
      exportProfilesResponse = {
        success: true,
        errors: undefined,
        retryDelay: undefined,
      };

      await specHelper.runTask(
        "export:sendBatch",
        foundSendBatchTasks[0].args[0]
      );
      foundSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundSendBatchTasks.length).toBe(1 + 1);
      await _export.reload();
      expect(_export.completedAt).toBeTruthy();

      await run.determineState();
    });

    test("sending an export with sync and producing a retry error will throw combined of all sub errors", async () => {
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });

      const error = new Error("oh no!");
      error["profileGuid"] = profile.guid;

      exportProfilesResponse = {
        success: false,
        errors: [error],
        retryDelay: 1000,
      };

      let combinedError: Error;
      try {
        await destination.exportProfile(profile, [run], [], true);
      } catch (error) {
        combinedError = error;
      }

      expect(combinedError.message).toMatch(
        /error exporting a batch of 1 profiles to destination test plugin destination/
      );
      expect(combinedError.message).toMatch(/oh no!/);
      expect(combinedError["errors"].map((e) => e.message)).toEqual(["oh no!"]);

      await run.stop();

      exportProfilesResponse = {
        success: true,
        errors: undefined,
        retryDelay: undefined,
      };
    });
  });
});
