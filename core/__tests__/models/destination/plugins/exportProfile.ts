import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../../../src/modules/plugin";
import { App } from "../../../../src/models/App";
import { Destination } from "../../../../src/models/Destination";
import { Export } from "../../../../src/models/Export";
import { Group } from "../../../../src/models/Group";
import { Profile } from "../../../../src/models/Profile";
import { api, specHelper } from "actionhero";
import { Op } from "sequelize";
let actionhero;

describe("models/destination", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("with custom exportProfile plugin", () => {
    let app: App;
    let destination: Destination;
    let exportArgs = {
      app: null,
      appOptions: null,
      destination: null,
      destinationOptions: null,
      profile: null,
      oldProfileProperties: null,
      newProfileProperties: null,
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

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-export-plugin",
        apps: [
          {
            name: "test-template-app",
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
              exportProfile: async ({
                app,
                appOptions,
                destination,
                destinationOptions,
                export: {
                  profile,
                  oldProfileProperties,
                  newProfileProperties,
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
                  profile,
                  oldProfileProperties,
                  newProfileProperties,
                  oldGroups,
                  newGroups,
                  toDelete,
                };
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

    beforeEach(async () => {
      exportArgs = {
        app: null,
        appOptions: null,
        destination: null,
        destinationOptions: null,
        profile: null,
        oldProfileProperties: null,
        newProfileProperties: null,
        oldGroups: null,
        newGroups: null,
        toDelete: null,
      };
    });

    beforeEach(async () => {
      destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
      await destination.update({ state: "ready" });

      await api.resque.queue.connection.redis.flushdb();
    });

    afterEach(async () => {
      await destination.unTrackGroup();
      await destination.destroy();
    });

    test("the app exportProfile method can be called by the destination and exports will be created and mappings followed", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      await destination.trackGroup(groupA);

      // modify the membership name
      const destinationGroupMemberships = {};
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

      await destination.exportProfile(profile);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.destination.guid).toEqual(destination.guid);
      expect(exportArgs.app.guid).toEqual(app.guid);
      expect(exportArgs.profile.guid).toEqual(profile.guid);
      expect(exportArgs.oldProfileProperties).toEqual({
        customer_email: "oldmail@example.com",
      });
      expect(exportArgs.newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: null,
      });
      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual(
        [groupA, groupB].map((g) => `${g.name}+`).sort()
      );
      expect(exportArgs.toDelete).toEqual(false);

      const _exports = await Export.findAll({
        where: { destinationGuid: destination.guid },
        order: [["createdAt", "asc"]],
      });
      expect(_exports.length).toBe(2);
      expect(_exports[1].destinationGuid).toBe(destination.guid);
      expect(_exports[1].profileGuid).toBe(profile.guid);
      expect(
        _exports[0].completedAt.getTime() - _exports[0].startedAt.getTime()
      ).toBeGreaterThanOrEqual(0);
      expect(_exports[1].errorMessage).toBeFalsy();
      expect(_exports[1].oldProfileProperties).toEqual({
        customer_email: "oldmail@example.com",
      });
      expect(_exports[1].newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: null,
      });
      expect(_exports[1].oldGroups).toEqual([]);
      expect(_exports[1].newGroups).toEqual(
        [groupA, groupB].map((g) => `${g.name}+`).sort()
      );
      expect(_exports[1].mostRecent).toBe(true);

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
      await groupA.addProfile(profile);

      // create a previous export
      const _export = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        newProfileProperties: {
          gender: { type: "string", rawValue: "Male" },
          customer_email: { type: "email", rawValue: "oldmail@example.com" },
        },
        oldProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      await destination.exportProfile(profile);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(2);
      await Promise.all(
        foundTasks.map((t) => specHelper.runTask("export:send", t.args[0]))
      );

      expect(exportArgs.oldProfileProperties).toEqual({
        customer_email: "oldmail@example.com",
        gender: "Male",
      });
      expect(exportArgs.newProfileProperties).toEqual({
        customer_email: "newemail@example.com",
        uid: null,
      });

      await profile.destroy();
    });

    test("newly tagged groups will appear new in next export", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const group = await helper.factories.group();
      await destination.trackGroup(group);

      const profile = await helper.factories.profile();
      await group.addProfile(profile);

      // create a previous export
      const _export = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        newProfileProperties: {},
        oldProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.exportProfile(profile);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(2);
      await Promise.all(
        foundTasks.map((t) => specHelper.runTask("export:send", t.args[0]))
      );

      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual([group.name]);

      await profile.destroy();
    });

    test("newly un-tagged groups will be removed from the next export", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const group = await helper.factories.group();
      await destination.trackGroup(group);

      const profile = await helper.factories.profile();
      await group.addProfile(profile);

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      // create a previous export
      const _export = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        newProfileProperties: {},
        oldProfileProperties: {},
        oldGroups: [group.name],
        newGroups: [group.name],
        mostRecent: true,
      });

      const _import = await helper.factories.import();

      await destination.setDestinationGroupMemberships({});

      await destination.exportProfile(profile);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(2);
      await Promise.all(
        foundTasks.map((t) => specHelper.runTask("export:send", t.args[0]))
      );

      expect(exportArgs.oldGroups).toEqual([group.name]);
      expect(exportArgs.newGroups).toEqual([]);

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

      await destination.exportProfile(profile);

      await specHelper.runTask("export:enqueue", {});
      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.profile.guid).toEqual(profile.guid);
      expect(exportArgs.oldGroups).toEqual(
        [groupA, groupB].map((g) => g.name).sort()
      );
      expect(exportArgs.newGroups).toEqual([]);
      expect(exportArgs.toDelete).toEqual(true);

      await profile.destroy();
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
        completedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      await destination.exportProfile(profile);
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(false);
      expect(newExport.force).toBe(false);

      await destination.sendExport(newExport, true);
      expect(exportArgs.profile).toBeNull(); // plugin#exportProfile not called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();

      await profile.destroy();
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
        completedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      await destination.exportProfile(profile, false, true);
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await destination.sendExport(newExport, true);
      expect(exportArgs.profile).not.toBeNull(); // plugin#exportProfile was called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();
      expect(newExport.force).toBe(true);

      await profile.destroy();
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

      await destination.exportProfile(profile);
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

      await destination.sendExport(newExport, true);
      expect(exportArgs.profile).not.toBeNull(); // plugin#exportProfile was called

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
      await destination.exportProfile(profile);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);

      // the task should be re-enqueued with no error
      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1 + 1);
      await _export.reload();
      expect(_export.completedAt).toBeFalsy();

      // when the parallelism is back to OK...
      parallelismResponse = Infinity;

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1 + 1);
      await _export.reload();
      expect(_export.completedAt).toBeTruthy();

      await profile.destroy();
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
      await expect(destination.exportProfile(profile, true)).rejects.toThrow(
        /parallelism limit reached for test-template-app/
      );

      await Export.truncate();
      parallelismResponse = Infinity;
    });

    test("the app can be rate-limited and the export:send task will be re-enqueued", async () => {
      exportProfileResponse = {
        success: false,
        error: new Error("oh no!"),
        retryDelay: 1000,
      };

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await destination.exportProfile(profile);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      await specHelper.runTask("export:enqueue", {});

      let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);

      // the task should be re-enqueued with no error
      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1 + 1);
      expect(foundSendTasks[1].timestamp).toBeGreaterThan(new Date().getTime());
      await _export.reload();
      expect(_export.completedAt).toBeFalsy();

      // when the response is back to success
      exportProfileResponse = {
        success: true,
        error: undefined,
        retryDelay: undefined,
      };

      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);
      foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1 + 1);
      await _export.reload();
      expect(_export.completedAt).toBeTruthy();
    });

    test("sending an export with sync and producing a retry error will throw", async () => {
      exportProfileResponse = {
        success: false,
        error: new Error("oh no!"),
        retryDelay: 1000,
      };

      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await expect(destination.exportProfile(profile, true)).rejects.toThrow(
        /Error: oh no!/
      );

      await Export.truncate();
      exportProfileResponse = {
        success: true,
        error: undefined,
        retryDelay: undefined,
      };
    });

    describe("deletion validations with pending exports", () => {
      let group: Group;
      let profile: Profile;

      beforeAll(async () => {
        group = await helper.factories.group();

        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        profile = await helper.factories.profile();
        await group.addProfile(profile);
      });

      afterAll(async () => {
        await destination.destroy();
        await group.destroy();
        await profile.destroy();
      });

      test("a destination cannot be destroyed until all exports are complete", async () => {
        const _export = await Export.create({
          destinationGuid: destination.guid,
          profileGuid: profile.guid,
          startedAt: new Date(),
          completedAt: null,
          oldProfileProperties: {},
          newProfileProperties: {},
          oldGroups: [],
          newGroups: [],
          mostRecent: true,
        });

        await expect(destination.destroy()).rejects.toThrow(
          /cannot delete destination until all pending exports have been sent/
        );

        await _export.update({ completedAt: new Date() });
        await destination.destroy(); // does not throw
      });
    });

    describe("array exports", () => {
      afterAll(() => {
        exportArrayProperties = [];
      });

      test("mappings cannot use array profile properties if they are not allowed by exportArrayProperties", async () => {
        await expect(
          destination.setMapping({ purchases: "purchases" })
        ).rejects.toThrow(
          /purchases is an array profile property that .* cannot support/
        );
      });

      test("exportArrayProperties can ask for an array profile property", async () => {
        exportArrayProperties = ["purchases"];

        await destination.setMapping({ purchases: "purchases" });

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          purchases: ["hat", "mushroom", "star"],
        });

        const oldExport = await helper.factories.export(profile, destination, {
          newProfileProperties: {
            purchases: { type: "string", rawValue: ["hat", "mushroom"] },
          },
          newGroups: [group.name],
          startedAt: new Date(),
          completedAt: new Date(),
          mostRecent: true,
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          guid: oldExport.guid,
        });

        await destination.exportProfile(profile);

        const _exports = await profile.$get("exports", {
          order: [["createdAt", "asc"]],
        });
        expect(_exports.length).toBe(2);
        expect(_exports[1].oldProfileProperties).toEqual({
          purchases: ["hat", "mushroom"],
        });
        expect(_exports[1].newProfileProperties).toEqual({
          purchases: ["hat", "mushroom", "star"],
        });

        await Export.truncate();
      });

      test("exportArrayProperties can ask for all properties with *", async () => {
        exportArrayProperties = ["*"];

        await destination.setMapping({ purchases: "purchases" });

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          purchases: ["hat", "mushroom", "star"],
        });

        const oldExport = await helper.factories.export(profile, destination, {
          newProfileProperties: {
            purchases: { type: "string", rawValue: ["hat", "mushroom"] },
          },
          newGroups: [group.name],
          startedAt: new Date(),
          completedAt: new Date(),
          mostRecent: true,
        });
        await specHelper.deleteEnqueuedTasks("exports:send", {
          guid: oldExport.guid,
        });

        await destination.exportProfile(profile);

        const _exports = await profile.$get("exports", {
          order: [["createdAt", "asc"]],
        });
        expect(_exports.length).toBe(2);
        expect(_exports[1].oldProfileProperties).toEqual({
          purchases: ["hat", "mushroom"],
        });
        expect(_exports[1].newProfileProperties).toEqual({
          purchases: ["hat", "mushroom", "star"],
        });

        await Export.truncate();
      });
    });
  });
});
