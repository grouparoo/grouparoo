import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../../../src/modules/plugin";
import { App, Destination, Export } from "../../../../src";
import { api, specHelper } from "actionhero";
import { Op } from "sequelize";

describe("models/destination", () => {
  describe.each(["ready", "deleted"])("with app in %p state", (appState) => {
    helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
    beforeAll(async () => await helper.factories.properties());

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
      let exportProfilesThrow = null;

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
              syncModes: ["sync", "enrich", "additive"],
              options: [],
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
                  if (exportProfilesThrow) {
                    throw exportProfilesThrow;
                  }
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
        await app.update({ state: "ready" });

        destination = await Destination.create({
          name: "test plugin destination",
          type: "export-from-test-template-app",
          syncMode: "sync",
          appId: app.id,
        });
        await destination.update({ state: "ready" });

        await api.resque.queue.connection.redis.flushdb();

        await app.update({ state: appState });
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
        destinationGroupMemberships[groupA.id] = groupA.name + "+";
        destinationGroupMemberships[groupB.id] = groupB.name + "+";
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [1001],
          email: ["newemail@example.com"],
        });
        await groupA.addProfile(profile);
        await groupB.addProfile(profile);

        const oldExport = await helper.factories.export(profile, destination, {
          newProfileProperties: {
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

        await destination.exportProfile(profile);

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

        expect(exportArgs.destination.id).toEqual(destination.id);
        expect(exportArgs.app.id).toEqual(app.id);
        expect(exportArgs.exports.length).toEqual(1);
        expect(exportArgs.exports[0].profile.id).toEqual(profile.id);
        expect(exportArgs.exports[0].oldProfileProperties).toEqual({
          customer_email: "oldmail@example.com",
        });
        expect(exportArgs.exports[0].newProfileProperties).toEqual({
          customer_email: "newemail@example.com",
          uid: 1001,
        });
        expect(exportArgs.exports[0].oldGroups).toEqual([]);
        expect(exportArgs.exports[0].newGroups).toEqual(
          [groupA, groupB].map((g) => `${g.name}+`).sort()
        );
        expect(exportArgs.exports[0].toDelete).toEqual(false);

        const _exports = await Export.findAll({
          where: { destinationId: destination.id },
          order: [["createdAt", "asc"]],
        });
        expect(_exports.length).toBe(2);
        expect(_exports[1].destinationId).toBe(destination.id);
        expect(_exports[1].profileId).toBe(profile.id);
        expect(
          _exports[1].completedAt.getTime() - _exports[0].startedAt.getTime()
        ).toBeGreaterThan(0);
        expect(_exports[1].errorMessage).toBeFalsy();
        expect(_exports[1].oldProfileProperties).toEqual({
          customer_email: "oldmail@example.com",
        });
        expect(_exports[1].newProfileProperties).toEqual({
          customer_email: "newemail@example.com",
          uid: 1001,
        });
        expect(_exports[1].oldGroups).toEqual([]);
        expect(_exports[1].newGroups).toEqual(
          [groupA, groupB].map((g) => `${g.name}+`).sort()
        );

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
        await profile.addOrUpdateProperties({
          userId: [1001],
          email: ["newemail@example.com"],
        });

        // create a previous export
        const _export = await Export.create({
          profileId: profile.id,
          destinationId: destination.id,
          newProfileProperties: {
            customer_email: { type: "email", rawValue: "oldmail@example.com" },
            gender: { type: "string", rawValue: "Male" },
          },
          oldProfileProperties: {},
          oldGroups: [],
          newGroups: [],
          state: "complete",
        });

        await destination.exportProfile(profile);

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
          uid: 1001,
        });

        await profile.destroy();
      });

      test('if a profile is removed from all groups tracked by this destination in "sync" syncMode, toDelete is true', async () => {
        expect(destination.syncMode).toBe("sync");

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

        const profile = await helper.factories.profile();

        const oldExport = await helper.factories.export(profile, destination, {
          newProfileProperties: {},
          newGroups: [groupA.name, groupB.name].sort(),
          startedAt: new Date(),
          completedAt: new Date(),
          state: "complete",
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          id: oldExport.id,
        });

        await destination.exportProfile(profile);

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
        expect(exportArgs.exports[0].profile.id).toEqual(profile.id);
        expect(exportArgs.exports[0].oldGroups).toEqual(
          [groupA, groupB].map((g) => g.name).sort()
        );
        expect(exportArgs.exports[0].newGroups).toEqual([]);
        expect(exportArgs.exports[0].toDelete).toEqual(true);
      });

      test("if profile is removed from destination's tracked group, toDelete is true", async () => {
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

        const profile = await helper.factories.profile();
        await groupA.addProfile(profile);
        await groupB.addProfile(profile);

        const oldExport = await helper.factories.export(profile, destination, {
          newProfileProperties: {},
          newGroups: [groupA.name, groupB.name].sort(),
          startedAt: new Date(),
          completedAt: new Date(),
          state: "complete",
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          id: oldExport.id,
        });

        await destination.trackGroup(groupC);
        await destination.exportProfile(profile);

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
        expect(exportArgs.exports[0].profile.id).toEqual(profile.id);
        expect(exportArgs.exports[0].oldGroups).toEqual(
          [groupA, groupB].map((g) => g.name).sort()
        );
        expect(exportArgs.exports[0].newGroups).toEqual(
          [groupA, groupB].map((g) => g.name).sort() // no change in mapped groups
        );
        expect(exportArgs.exports[0].toDelete).toEqual(true); // delete

        await profile.destroy();
      });

      test.each(["enrich", "additive"])(
        "if profile is removed from destination's tracked group in %p syncMode, toDelete is false and groups are cleared",
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

          const profile = await helper.factories.profile();
          await groupA.addProfile(profile);
          await groupB.addProfile(profile);

          const oldExport = await helper.factories.export(
            profile,
            destination,
            {
              newProfileProperties: {},
              newGroups: [groupA.name, groupB.name].sort(),
              startedAt: new Date(),
              completedAt: new Date(),
              state: "complete",
            }
          );
          await specHelper.deleteEnqueuedTasks("exports:send", {
            id: oldExport.id,
          });

          await destination.trackGroup(groupC);
          await destination.exportProfile(profile);

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
          expect(exportArgs.exports[0].profile.id).toEqual(profile.id);
          expect(exportArgs.exports[0].oldGroups).toEqual(
            [groupA, groupB].map((g) => g.name).sort()
          );
          expect(exportArgs.exports[0].newGroups).toEqual([]); // groups cleared
          expect(exportArgs.exports[0].toDelete).toEqual(false); // no delete

          await profile.destroy();
          await destination.update({ syncMode: "sync" });
        }
      );

      test("if an export has the same data as the previous export, and force=false, it will not be sent to the destination", async () => {
        const profile = await helper.factories.profile();
        const group = await helper.factories.group();
        await group.addProfile(profile);
        await destination.trackGroup(group);

        const oldExport = await Export.create({
          destinationId: destination.id,
          profileId: profile.id,
          startedAt: new Date(),
          completedAt: new Date(),
          oldProfileProperties: {},
          newProfileProperties: {},
          oldGroups: [],
          newGroups: [],
          state: "complete",
        });

        await destination.exportProfile(profile);
        const newExport = await Export.findOne({
          where: {
            destinationId: destination.id,
            id: { [Op.ne]: oldExport.id },
          },
        });

        expect(newExport.toDelete).toBe(false);
        expect(newExport.hasChanges).toBe(false);
        expect(newExport.force).toBe(false);

        await specHelper.runTask("export:enqueue", {});

        const foundTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
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
          destinationId: destination.id,
          profileId: profile.id,
          startedAt: new Date(),
          completedAt: new Date(),
          oldProfileProperties: {},
          newProfileProperties: {},
          oldGroups: [],
          newGroups: [],
          state: "complete",
        });

        await destination.exportProfile(profile, false, true);
        const newExport = await Export.findOne({
          where: {
            destinationId: destination.id,
            id: { [Op.ne]: oldExport.id },
          },
        });

        expect(newExport.toDelete).toBe(false);
        expect(newExport.hasChanges).toBe(true);
        expect(newExport.force).toBe(true);

        await specHelper.runTask("export:enqueue", {});

        const foundTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundTasks.length).toBe(1);
        await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

        expect(exportArgs.exports.length).toBe(1); // plugin#exportProfile was called

        await newExport.reload();
        expect(newExport.completedAt).toBeTruthy();
      });

      test("if there is no previous export, it will be sent to the destination and all data will be new", async () => {
        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          email: ["newEmail@example.com"],
        });
        const group = await helper.factories.group();
        await group.addProfile(profile);
        await destination.trackGroup(group);

        await destination.setMapping({
          customer_email: "email",
        });

        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        await destination.exportProfile(profile);
        const newExport = await Export.findOne({
          where: { destinationId: destination.id },
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

        const foundTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundTasks.length).toBe(1);
        await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

        expect(exportArgs.exports.length).toBe(1); // plugin#exportProfile was called

        await profile.destroy();
      });

      test("exportProfile can handle parallelsims export:sendBatch and the export can be retried", async () => {
        parallelismResponse = 0;

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();

        await destination.exportProfile(profile);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});

        let foundSendBatchTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendBatchTasks.length).toBe(1);

        await specHelper.runTask(
          "export:sendBatch",
          foundSendBatchTasks[0].args[0]
        );

        await _export.reload();
        expect(_export.errorMessage).toBeNull();
        expect(_export.errorLevel).toBeNull();
        expect(_export.completedAt).toBeFalsy();
        expect(_export.state).toBe("pending");
        expect(_export.retryCount).toBe(1);

        // when the parallelism is back to OK...
        parallelismResponse = Infinity;

        await specHelper.runTask(
          "export:sendBatch",
          foundSendBatchTasks[0].args[0]
        );

        await _export.reload();
        expect(_export.completedAt).toBeTruthy();
        expect(_export.state).toBe("complete");
      });

      test("sending an export with sync and producing a parallelism error will throw", async () => {
        parallelismResponse = 0;

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();

        await expect(destination.exportProfile(profile, true)).rejects.toThrow(
          /parallelism limit reached for test-template-app/
        );

        await Export.truncate();
        parallelismResponse = Infinity;
      });

      test("sending an export with sync and throwing an error will throw in task", async () => {
        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        const run = await helper.factories.run(group, { state: "running" });

        exportProfilesThrow = new Error("oh no!");

        let thrownError: Error;
        try {
          await destination.exportProfile(profile, true);
        } catch (error) {
          thrownError = error;
        }

        exportProfilesThrow = null;

        expect(thrownError.message).toEqual("oh no!");
        expect(thrownError["errors"]).toBeUndefined();

        await run.stop();
        await Export.truncate();
      });

      test("sending an export with sync and producing an error will throw combined of all sub errors", async () => {
        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        const run = await helper.factories.run(group, { state: "running" });

        const error = new Error("oh no!");
        error["profileId"] = profile.id;

        exportProfilesResponse = {
          success: false,
          errors: [error],
          retryDelay: undefined,
        };

        let combinedError: Error;
        try {
          await destination.exportProfile(profile, true);
        } catch (error) {
          combinedError = error;
        }

        expect(combinedError.message).toMatch(
          /error exporting 1 profiles to destination test plugin destination/
        );
        expect(combinedError.message).toMatch(/oh no!/);
        expect(combinedError["errors"].map((e) => e.message)).toEqual([
          "oh no!",
        ]);

        await run.stop();
        await Export.truncate();
        exportProfilesResponse = {
          success: true,
          errors: undefined,
          retryDelay: undefined,
        };
      });

      test("the app can be rate-limited and the export:sendBatches can retry the export", async () => {
        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        await destination.exportProfile(profile);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        const profileError = new Error("oh no!");
        profileError["profileId"] = profile.id;
        exportProfilesResponse = {
          success: false,
          errors: [profileError],
          retryDelay: 1000,
        };

        await specHelper.runTask("export:enqueue", {});

        let foundSendBatchTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendBatchTasks.length).toBe(1);

        await specHelper.runTask(
          "export:sendBatch",
          foundSendBatchTasks[0].args[0]
        );

        await _export.reload();
        expect(_export.errorMessage).toMatch(/oh no!/);
        expect(_export.errorLevel).toMatch("error");
        expect(_export.completedAt).toBeFalsy();
        expect(_export.state).toBe("pending");
        expect(_export.retryCount).toBe(1);

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
        await _export.reload();
        expect(_export.completedAt).toBeTruthy();
        expect(_export.state).toBe("complete");
      });

      test("the app have export:sendBatches task with info level", async () => {
        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        await destination.exportProfile(profile);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        const profileError = new Error("oh no!");
        profileError["profileId"] = profile.id;
        profileError["errorLevel"] = "info";
        exportProfilesResponse = {
          success: false,
          errors: [profileError],
          retryDelay: 1000,
        };

        await specHelper.runTask("export:enqueue", {});

        let foundSendBatchTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendBatchTasks.length).toBe(1);

        await specHelper.runTask(
          "export:sendBatch",
          foundSendBatchTasks[0].args[0]
        );
        foundSendBatchTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendBatchTasks.length).toBe(1 + 0); // actually fine!

        await _export.reload();
        expect(_export.errorMessage).toMatch(/oh no!/);
        expect(_export.errorLevel).toMatch("info");
        expect(_export.completedAt).toBeFalsy();

        // when the response is back to success
        exportProfilesResponse = {
          success: true,
          errors: undefined,
          retryDelay: undefined,
        };
      });

      test("the export can be retried for some profiles", async () => {
        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile1 = await helper.factories.profile();
        await destination.exportProfile(profile1);
        const _export1 = await Export.findOne({
          where: {
            destinationId: destination.id,
            profileId: profile1.id,
          },
        });

        const profile2 = await helper.factories.profile();
        await destination.exportProfile(profile2);
        const _export2 = await Export.findOne({
          where: {
            destinationId: destination.id,
            profileId: profile2.id,
          },
        });

        const profile3 = await helper.factories.profile();
        await destination.exportProfile(profile3);
        const _export3 = await Export.findOne({
          where: {
            destinationId: destination.id,
            profileId: profile3.id,
          },
        });

        const profileError1 = new Error("oh no!");
        profileError1["profileId"] = profile1.id;
        const profileError2 = new Error("inform me!");
        profileError2["profileId"] = profile2.id;
        profileError2["errorLevel"] = "info";
        exportProfilesResponse = {
          success: false,
          errors: [profileError1, profileError2],
          retryDelay: 1000,
        };

        await specHelper.runTask("export:enqueue", {});

        let exportIds;
        let foundSendBatchTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendBatchTasks.length).toBe(1);
        exportIds = foundSendBatchTasks[0].args[0].exportIds;
        expect(exportIds.length).toBe(3);
        expect(exportIds.sort()).toEqual(
          [_export1.id, _export2.id, _export3.id].sort()
        );

        await specHelper.runTask(
          "export:sendBatch",
          foundSendBatchTasks[0].args[0]
        );

        await _export1.reload();
        expect(_export1.errorMessage).toMatch(/oh no!/);
        expect(_export1.errorLevel).toMatch("error");
        expect(_export1.completedAt).toBeFalsy();
        expect(_export1.state).toBe("pending");

        await _export2.reload();
        expect(_export2.errorMessage).toMatch(/inform me!/);
        expect(_export2.errorLevel).toMatch("info");
        expect(_export2.completedAt).toBeFalsy();
        expect(_export2.state).toBe("failed");

        await _export3.reload();
        expect(_export3.errorMessage).toBeNull();
        expect(_export3.errorLevel).toBeNull();
        expect(_export3.completedAt).toBeTruthy();
        expect(_export3.state).toBe("complete");

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

        await _export1.reload();
        expect(_export1.errorMessage).toBeNull();
        expect(_export1.errorLevel).toBeNull();
        expect(_export1.completedAt).toBeTruthy();
        expect(_export1.state).toBe("complete");
      });
    });
  });
});
