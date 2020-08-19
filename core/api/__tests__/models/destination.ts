import { helper } from "../utils/specHelper";
import { api, specHelper } from "actionhero";
import { App } from "../../src/models/App";
import { Log } from "../../src/models/Log";
import { Destination } from "../../src/models/Destination";
import { Profile } from "../../src/models/Profile";
import { Group } from "../../src/models/Group";
import { Export } from "../../src/models/Export";
import { Mapping } from "../../src/models/Mapping";
import { Option } from "../../src/models/Option";
import { DestinationGroupMembership } from "../../src/models/DestinationGroupMembership";
import { plugin } from "../../src/modules/plugin";
import { DestinationGroup } from "../../src/models/DestinationGroup";
import { Run } from "../../src";
import { Op } from "sequelize";
let actionhero;

describe("models/destination", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
  });

  describe("with apps", () => {
    let app: App;
    let destination: Destination;

    beforeAll(async () => {
      app = await helper.factories.app();
    });

    afterEach(async () => {
      if (destination) {
        await destination.destroy();
      }
    });

    test("a destination can be created, and it can find the related app", async () => {
      destination = await Destination.create({
        name: "test destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      });

      expect(destination.guid.length).toBe(40);
      expect(destination.createdAt).toBeTruthy();
      expect(destination.updatedAt).toBeTruthy();

      const options = await destination.getOptions();
      expect(options).toEqual({});

      const _app = await destination.$get("app");
      expect(_app.guid).toBe(app.guid);
    });

    test("a new destination will have a '' name", async () => {
      destination = await Destination.create({
        type: "test-plugin-export",
        appGuid: app.guid,
      });

      expect(destination.name).toBe("");

      await destination.destroy();
    });

    test("draft destination can share the same name, but not with ready destination", async () => {
      const destinationOne = await Destination.create({
        type: "test-plugin-export",
        appGuid: app.guid,
      });

      const otherApp = await helper.factories.app();
      const destinationTwo = await Destination.create({
        type: "test-plugin-export",
        appGuid: otherApp.guid,
      });

      expect(destinationOne.name).toBe("");
      expect(destinationTwo.name).toBe("");

      await destinationOne.update({ name: "name" });
      await destinationOne.setOptions({ table: "abc123" });
      await destinationOne.update({ state: "ready" });

      await expect(destinationTwo.update({ name: "name" })).rejects.toThrow(
        /name "name" is already in use/
      );

      await destinationOne.destroy();
      await destinationTwo.destroy();
      await otherApp.destroy();
    });

    test("creating a destination creates a log entry", async () => {
      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "destination" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();
    });

    test("a destination tracking a group cannot be deleted", async () => {
      const group = await helper.factories.group();
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      });
      await destination.trackGroup(group);
      await expect(destination.destroy()).rejects.toThrow(
        /cannot delete a destination that is tracking a group/
      );

      await group.destroy();
      await destination.destroy();
    });

    test("a destination tracking all groups cannot be deleted", async () => {
      const group = await helper.factories.group();
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      });
      await destination.update({ trackAllGroups: true });
      await expect(destination.destroy()).rejects.toThrow(
        /cannot delete a destination that is tracking a group/
      );

      await group.destroy();

      await expect(destination.destroy()).rejects.toThrow(
        /cannot delete a destination that is tracking a group/
      );

      await destination.update({ trackAllGroups: false });
      await destination.destroy(); // does not throw
    });

    test("deleting a destination deletes related models", async () => {
      const group = await helper.factories.group();
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      });

      await destination.setOptions({ table: "table" });
      await destination.setMapping({ "primary-id": "userId" });
      await destination.trackGroup(group);
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = "remote-tag";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.unTrackGroups();
      await destination.destroy();

      let count = await DestinationGroupMembership.count({
        where: { destinationGuid: destination.guid },
      });
      expect(count).toBe(0);
      count = await Option.count({
        where: { ownerGuid: destination.guid },
      });
      expect(count).toBe(0);
      count = await Mapping.count({
        where: { ownerGuid: destination.guid },
      });
      expect(count).toBe(0);
      count = await DestinationGroup.count({
        where: { destinationGuid: destination.guid },
      });
      expect(count).toBe(0);

      await group.destroy();
    });

    test("deleting a destination creates a log entry and enqueued a destroyExports task", async () => {
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      });

      await destination.destroy();

      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "destination" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();

      const foundTasks = await specHelper.findEnqueuedTasks(
        "destination:destroyExports"
      );
      expect(foundTasks.length).toBeGreaterThanOrEqual(1);
      expect(foundTasks[foundTasks.length - 1].args[0]).toEqual({
        destinationGuid: destination.guid,
      });
    });

    test("a destination can get options from a connection", async () => {
      const connectionOptions = await destination.destinationConnectionOptions();
      expect(connectionOptions).toEqual({
        table: { type: "list", options: ["users_out"] },
      });
    });

    test("partial options will be passed to destinationConnectionOptions", async () => {
      const connectionOptions = await destination.destinationConnectionOptions({
        options: true,
      });
      expect(connectionOptions).toEqual({
        table: { type: "list", options: ["users_out"] },
        receivedOptions: true,
      });
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__DESTINATION__TEST_OPTION = "abc123";
      });

      test("options can be set from an environment variable but not stored in the database", async () => {
        const destination = await Destination.create({
          name: "incoming destination",
          type: "test-plugin-export",
          appGuid: app.guid,
        });

        await destination.setOptions({ table: "TEST_OPTION" });
        const options = await destination.getOptions();
        expect(options.table).toBe("abc123");

        const option = await Option.findOne({
          where: { ownerGuid: destination.guid, key: "table" },
        });
        expect(option.value).toBe("TEST_OPTION");

        await destination.destroy();
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__DESTINATION__TEST_OPTION = undefined;
      });
    });

    describe("validations", () => {
      test("options must match the app options (extra options needed by connection)", async () => {
        destination = new Destination({
          name: "incoming destination - too many options",
          type: "test-plugin-export",
          appGuid: app.guid,
        });
        await destination.save();
        expect(destination.guid).toBeTruthy();

        await expect(
          destination.setOptions({
            something: "abc123",
            table: "abc",
            primaryKey: "userID",
            groupsTable: "groups",
            groupForeignKey: "userId",
            groupColumnName: "groupName",
          })
        ).rejects.toThrow(
          /something is not an option for a test-plugin-export destination/
        );
      });

      test("required mappings must be included in the mappings", async () => {
        destination = await helper.factories.destination();
        await expect(
          destination.setMapping({
            local_first_name: "firstName",
          })
        ).rejects.toThrow(/primary-id is a required/);
      });

      test("required mappings with a type can only use profile properties that match the type", async () => {
        destination = await helper.factories.destination();
        await expect(
          destination.setMapping({
            "primary-id": "email",
          })
        ).rejects.toThrow(
          /primary-id requires a profile property rule of type integer/
        );
      });

      test("mappings must map to profilePropertyRules", async () => {
        destination = await helper.factories.destination();
        await destination.setMapping({
          "primary-id": "userId",
          local_first_name: "firstName",
        });
        const mapping = await destination.getMapping();
        expect(mapping).toEqual({
          "primary-id": "userId",
          local_first_name: "firstName",
        });
      });

      test("it throws an error if the mapping does not include the key of a profilePropertyRyle", async () => {
        destination = await helper.factories.destination();
        await expect(
          destination.setMapping({
            "primary-id": "TheUserID",
          })
        ).rejects.toThrow(/cannot find profile property rule TheUserID/);
      });

      test("a destination cannot be created in the ready state with missing required options", async () => {
        const destination = Destination.build({
          appGuid: app.guid,
          type: "test-plugin-export",
          state: "ready",
        });

        await expect(destination.save()).rejects.toThrow(/table is required/);
      });

      test("a destination cannot be changed to to the ready state if there are missing required options", async () => {
        destination = await Destination.build({
          appGuid: app.guid,
          name: "missing options",
          type: "test-plugin-export",
        });
        await expect(destination.update({ state: "ready" })).rejects.toThrow();
      });

      test("a destination that is ready cannot move back to draft", async () => {
        destination = await helper.factories.destination();
        await destination.setOptions({ table: "users" });
        await destination.update({ state: "ready" });

        await expect(destination.update({ state: "draft" })).rejects.toThrow(
          /cannot transition destination state from ready to draft/
        );
      });

      test("an app can only have one destination", async () => {
        destination = await Destination.create({
          name: "first destination",
          appGuid: app.guid,
          type: "test-plugin-export",
        });

        await expect(
          Destination.create({
            name: "second destination",
            appGuid: app.guid,
            type: "test-plugin-export",
          })
        ).rejects.toThrow(
          /destination "first destination" is already using this app/
        );
      });
    });

    describe("with groups", () => {
      let destination: Destination;
      let group: Group;

      beforeEach(async () => {
        destination = await Destination.create({
          name: "test destination",
          appGuid: app.guid,
          type: "test-plugin-export",
        });

        group = await helper.factories.group();
      });

      afterEach(async () => {
        await group.destroy();
        await destination.update({ trackAllGroups: false });
        await destination.destroy();
      });

      test("a group can be tracked", async () => {
        await destination.trackGroup(group);
        const groups = await destination.$get("groups");
        expect(groups.length).toBe(1);
        expect(groups[0].guid).toBe(group.guid);
      });

      test("tracking a group will not enqueue a run", async () => {
        const runs = await Run.findAll({
          where: { creatorGuid: destination.guid },
        });
        expect(runs.length).toBe(0);
      });

      test("a group cannot be added twice", async () => {
        await destination.trackGroup(group);
        await destination.trackGroup(group);
        const groups = await destination.$get("groups");
        expect(groups.length).toBe(1);
      });

      test("a destination can only track a single group", async () => {
        const newGroup = await helper.factories.group();

        await destination.trackGroup(group);
        await destination.trackGroup(newGroup);
        const groups = await destination.$get("groups");
        expect(groups.length).toBe(1);
        expect(groups[0].guid).toBe(newGroup.guid);
        await newGroup.destroy();
      });

      test("a group can be unTracked", async () => {
        await destination.trackGroup(group);
        let groups = await destination.$get("groups");
        expect(groups.length).toBe(1);

        await destination.unTrackGroups();
        groups = await destination.$get("groups");
        expect(groups.length).toBe(0);
      });

      test("profilePreview - without updates - with group", async () => {
        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
        });
        await group.addProfile(profile);
        await destination.trackGroup(group);

        const mapping = {
          "primary-id": "userId",
          email: "email",
        };

        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = "another-group-tag";

        const _profile = await destination.profilePreview(
          profile,
          mapping,
          destinationGroupMemberships
        );
        expect(_profile.properties["primary-id"].values[0]).toBe(1);
        expect(_profile.properties["email"].values[0]).toBe(
          "yoshi@example.com"
        );
        expect(_profile.groupNames).toEqual(["another-group-tag"]);

        await profile.destroy();
      });

      describe("trackAllGroups", () => {
        test("no groups can be added or removed if the destination is tracking all groups", async () => {
          await destination.update({ trackAllGroups: true });
          await expect(destination.trackGroup(group)).rejects.toThrow(
            /destination is tracking all groups/
          );
          await expect(destination.unTrackGroups()).rejects.toThrow(
            /destination is tracking all groups/
          );
        });

        test("adding a new destination that tracks all groups will build a destinationGroup for all groups", async () => {
          let destinationGroups = await group.$get("destinationGroups");
          expect(destinationGroups.length).toBe(0);

          await destination.update({ trackAllGroups: true });

          destinationGroups = await group.$get("destinationGroups");
          expect(destinationGroups.length).toBe(1);
          expect(destinationGroups[0].destinationGuid).toBe(destination.guid);
        });

        test("removing trackAllGroups from a destination will remove all destinationGroups", async () => {
          await destination.update({ trackAllGroups: true });
          let destinationGroups = await group.$get("destinationGroups");
          expect(destinationGroups.length).toBe(1);

          await destination.update({ trackAllGroups: false });
          await destination.destroy();

          destinationGroups = await group.$get("destinationGroups");
          expect(destinationGroups.length).toBe(0);
        });
      });

      describe("destinationsForGroups", () => {
        it("determined relevant destinations for a profile", async () => {
          await destination.trackGroup(group);
          const otherDestination = await helper.factories.destination();
          const profile = await helper.factories.profile();
          await group.addProfile(profile);

          // before the destinations are ready
          let destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );
          expect(destinations.length).toBe(0);

          // after the destinations are ready
          await destination.setOptions({ table: "some table" });
          await destination.update({ state: "ready" });
          await otherDestination.setOptions({ table: "some table" });
          await otherDestination.update({ state: "ready" });

          destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );
          expect(destinations.length).toBe(1);
          expect(destinations[0].guid).toBe(destination.guid);

          await destination.unTrackGroups();
          await group.removeProfile(profile);
        });

        test("when the group being tracked is removed, the previous group should be exported one last time", async () => {
          await api.resque.queue.connection.redis.flushdb();

          await destination.trackGroup(group);
          let foundTasks = await specHelper.findEnqueuedTasks("group:run");
          expect(foundTasks.length).toBe(1);
          expect(foundTasks[0].args[0]).toEqual({
            force: true,
            destinationGuid: destination.guid,
            groupGuid: group.guid,
          });

          await api.resque.queue.connection.redis.flushdb();
          await destination.unTrackGroups();
          foundTasks = await specHelper.findEnqueuedTasks("group:run");
          expect(foundTasks.length).toBe(1);
          expect(foundTasks[0].args[0]).toEqual({
            force: true,
            destinationGuid: destination.guid,
            groupGuid: group.guid,
          });
        });

        test("when the group being tracked is changed, the previous group should be exported one last time", async () => {
          const otherGroup = await helper.factories.group();
          await otherGroup.update({ state: "ready" });
          await destination.trackGroup(group);
          await api.resque.queue.connection.redis.flushdb();

          await destination.trackGroup(otherGroup);

          let foundTasks = await specHelper.findEnqueuedTasks("group:run");
          expect(foundTasks.length).toBe(2);
          expect(foundTasks[0].args[0]).toEqual({
            force: true,
            destinationGuid: destination.guid,
            groupGuid: group.guid,
          });
          expect(foundTasks[1].args[0]).toEqual({
            force: true,
            destinationGuid: destination.guid,
            groupGuid: otherGroup.guid,
          });

          await otherGroup.destroy();
        });

        it("informs all destinations if trackAllGroups is set", async () => {
          await destination.update({ trackAllGroups: true });

          const otherApp = await helper.factories.app();
          const otherDestination = await Destination.create({
            name: "other destination",
            appGuid: otherApp.guid,
            type: "test-plugin-export",
          });
          await otherDestination.update({ trackAllGroups: true });

          const profile = await helper.factories.profile();
          await group.addProfile(profile);

          // before the destinations are ready
          let destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );
          expect(destinations.length).toEqual(0);

          // after the destinations are ready
          await destination.setOptions({ table: "some table" });
          await destination.update({ state: "ready" });
          await otherDestination.setOptions({ table: "some table" });
          await otherDestination.update({ state: "ready" });

          destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );
          expect(destinations.length).toEqual(2);

          await otherDestination.update({ trackAllGroups: false });
          await otherDestination.destroy();
          await otherApp.destroy();
          await group.removeProfile(profile);
        });
      });
    });

    describe("parameterizedOptions", () => {
      it("replaces mustache template strings with variables", async () => {
        destination = new Destination({
          name: "outgoing pg destination",
          type: "test-plugin-export",
          appGuid: app.guid,
        });
        await destination.save();

        await destination.setOptions({
          table: "thing-{{ now.sql }}",
        });

        const parameterizedOptions = await destination.parameterizedOptions();
        const now = new Date();
        expect(parameterizedOptions.table).toMatch(
          `thing-${now.getFullYear()}`
        );
      });
    });
  });

  describe("with a connection that cannot export", () => {
    let app: App;
    let exportArgs = {
      app: null,
      options: null,
      profile: null,
      oldProfileProperties: null,
      newProfileProperties: null,
      oldGroups: null,
      newGroups: null,
    };

    beforeAll(async () => {
      plugin.registerPlugin(
        {
          name: "test-import-only-plugin",
          apps: [
            {
              name: "test-template-app",
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
              name: "import-from-test-template-app",
              description: "a test app connection",
              app: "test-template-app",
              direction: "export",
              options: [],
              methods: {},
            },
          ],
        },
        false // skip validation as we need an invalid plugin here
      );

      app = await App.create({
        name: "test app with temp methods",
        type: "test-template-app",
      });
      await app.update({ state: "ready" });
    });

    afterAll(async () => {
      await app.destroy();
    });

    test("you are prevented from making a destination against an app with no export methods", async () => {
      await expect(
        Destination.create({
          name: "test plugin destination app missing methods",
          type: "import-from-test-template-app",
          appGuid: app.guid,
        })
      ).rejects.toThrow(
        /cannot be created as there are no profile export methods/
      );
    });
  });

  describe("with custom exportProfile plugin", () => {
    let app: App;
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

    beforeEach(() => {
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
      await api.resque.queue.connection.redis.flushdb();
    });

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

    test("the app exportProfiles method can be called by the destination and exports will be created and mappings followed", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });

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
      const oldProfileProperties = { email: ["oldEmail"] };
      const newProfileProperties = { email: ["newEmail"] };
      const oldGroups = [];
      const newGroups = [groupA, groupB];

      const _import = await helper.factories.import();

      await destination.exportProfile(
        profile,
        [],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.destination.guid).toEqual(destination.guid);
      expect(exportArgs.app.guid).toEqual(app.guid);
      expect(exportArgs.profile.guid).toEqual(profile.guid);
      expect(exportArgs.oldProfileProperties).toEqual({
        customer_email: "oldEmail",
      });
      expect(exportArgs.newProfileProperties).toEqual({
        customer_email: "newEmail",
      });
      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual(
        newGroups.map((g) => `${g.name}+`).sort()
      );
      expect(exportArgs.toDelete).toEqual(false);

      const _exports = await Export.findAll({
        where: { destinationGuid: destination.guid },
      });
      expect(_exports.length).toBe(1);
      expect(_exports[0].destinationGuid).toBe(destination.guid);
      expect(_exports[0].profileGuid).toBe(profile.guid);
      expect(
        _exports[0].completedAt.getTime() - _exports[0].startedAt.getTime()
      ).toBeGreaterThan(0);
      expect(_exports[0].errorMessage).toBeFalsy();
      expect(_exports[0].oldProfileProperties).toEqual({
        customer_email: "oldEmail",
      });
      expect(_exports[0].newProfileProperties).toEqual({
        customer_email: "newEmail",
      });
      expect(_exports[0].oldGroups).toEqual([]);
      expect(_exports[0].newGroups).toEqual(
        newGroups.map((g) => `${g.name}+`).sort()
      );
      expect(_exports[0].mostRecent).toBe(true);

      const exportedImports = await _exports[0].$get("imports");
      expect(exportedImports.length).toBe(1);
      expect(exportedImports[0].guid).toBe(_import.guid);

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("profile properties previously mapped but now removed will be included as oldProfileProperties in the export", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();

      await destination.trackGroup(groupA);

      const profile = await helper.factories.profile();
      const oldProfileProperties = { email: ["oldEmail"] };
      const newProfileProperties = { email: ["newEmail"] };
      const oldGroups = [];
      const newGroups = [groupA];

      // create a previous export
      const _export = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        newProfileProperties: { gender: "Male" },
        oldProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      const _import = await helper.factories.import();

      await destination.exportProfile(
        profile,
        [],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.oldProfileProperties).toEqual({
        customer_email: "oldEmail",
        gender: "unknown",
      });
      expect(exportArgs.newProfileProperties).toEqual({
        customer_email: "newEmail",
      });

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("newly tagged groups will appear new in next export", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const group = await helper.factories.group();
      await destination.trackGroup(group);

      const profile = await helper.factories.profile();
      group.addProfile(profile);

      const oldProfileProperties = {};
      const newProfileProperties = {};
      const oldGroups = [];
      const newGroups = [group];

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

      const _import = await helper.factories.import();

      await destination.exportProfile(
        profile,
        [],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual([group.name]);

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("newly un-tagged groups will be removed from the next export", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const group = await helper.factories.group();
      await destination.trackGroup(group);

      const profile = await helper.factories.profile();
      group.addProfile(profile);

      const oldProfileProperties = {};
      const newProfileProperties = {};
      const oldGroups = [];
      const newGroups = [group];

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

      await destination.exportProfile(
        profile,
        [],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      const foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundTasks[0].args[0]);

      expect(exportArgs.oldGroups).toEqual([group.name]);
      expect(exportArgs.newGroups).toEqual([]);

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if a profile is removed from all groups tracked by this destination, toDelete is true", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });

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
      const oldProfileProperties = { email: ["oldEmail"] };
      const newProfileProperties = { email: ["newEmail"] };
      const oldGroups = [groupA, groupB];
      const newGroups = [];

      const _import = await helper.factories.import();

      await destination.exportProfile(
        profile,
        [],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      const foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(1);
      await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

      expect(exportArgs.profile.guid).toEqual(profile.guid);
      expect(exportArgs.oldGroups).toEqual(oldGroups.map((g) => g.name).sort());
      expect(exportArgs.newGroups).toEqual([]);
      expect(exportArgs.toDelete).toEqual(true);

      await destination.destroy();
    });

    test("if an export has the same data as the previous export, and force=false, it will not be sent to the destination", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
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

      await destination.exportProfile(
        profile,
        [],
        [],
        {},
        {},
        [group],
        [group]
      );
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(false);

      await destination.sendExport(newExport, true);
      expect(exportArgs.profile).toBeNull(); // plugin#exportProfile not called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if an export has the same data as the previous export, and force=true, it will be sent to the destination", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
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

      await destination.exportProfile(
        profile,
        [],
        [],
        {},
        {},
        [group],
        [group],
        false,
        true
      );
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

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if there is no previous export, it will be sent to the destination", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
      const profile = await helper.factories.profile();
      const group = await helper.factories.group();
      await group.addProfile(profile);
      await destination.trackGroup(group);

      await destination.exportProfile(
        profile,
        [],
        [],
        {},
        {},
        [group],
        [group]
      );
      const newExport = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await destination.sendExport(newExport, true);
      expect(exportArgs.profile).not.toBeNull(); // plugin#exportProfile was called

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("exportProfile can return that it is rate limited and the export:send task will be re-enqueued", async () => {
      parallelismResponse = 0;

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await destination.exportProfile(profile, [], [], {}, {}, [], []);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

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

      await destination.destroy();
    });

    test("sending an export with sync and producing a parallelism error will throw", async () => {
      parallelismResponse = 0;

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await expect(
        destination.exportProfile(profile, [], [], {}, {}, [], [], true)
      ).rejects.toThrow(/parallelism limit reached for test-template-app/);

      await destination.destroy();
      parallelismResponse = Infinity;
    });

    test("the app can be rate-limited and the export:send task will be re-enqueued", async () => {
      exportProfileResponse = {
        success: false,
        error: new Error("oh no!"),
        retryDelay: 1000,
      };

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await destination.exportProfile(profile, [], [], {}, {}, [], []);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

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

      await destination.destroy();
    });

    test("sending an export with sync and producing a retry error will throw", async () => {
      exportProfileResponse = {
        success: false,
        error: new Error("oh no!"),
        retryDelay: 1000,
      };

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      await expect(
        destination.exportProfile(profile, [], [], {}, {}, [], [], true)
      ).rejects.toThrow(/Error: oh no!/);

      await destination.destroy();
      exportProfileResponse = {
        success: true,
        error: undefined,
        retryDelay: undefined,
      };
    });

    describe("deletion validations with running runs", () => {
      let destination: Destination;
      let group: Group;
      let profile: Profile;

      beforeAll(async () => {
        destination = await Destination.create({
          name: "test plugin destination",
          type: "export-from-test-app",
          appGuid: app.guid,
        });

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

      it("can find runs related to the destination though the groups being tracked", async () => {
        const run = await Run.create({
          creatorType: "group",
          creatorGuid: group.guid,
          state: "running",
        });
        await destination.exportProfile(profile, [run], [], {}, {}, [], []);

        const foundRuns = await destination.getRuns();
        expect(foundRuns.length).toBe(1);
        expect(foundRuns[0].guid).toBe(run.guid);

        await run.destroy();
      });

      test("a destination not tracking any group, but that has a running run, cannot be deleted", async () => {
        const run = await Run.create({
          creatorType: "group",
          creatorGuid: group.guid,
          state: "running", // this run is running
        });
        await destination.exportProfile(profile, [run], [], {}, {}, [], []);

        await expect(destination.destroy()).rejects.toThrow(
          /cannot delete destination until all runs are complete/
        );

        await run.destroy();
      });

      test("a destination not tracking any group, but the last group exported is updating, cannot be deleted", async () => {
        const run = await Run.create({
          creatorType: "group",
          creatorGuid: group.guid,
          state: "complete", // the run is complete, so we can reference it later
        });
        await destination.exportProfile(profile, [run], [], {}, {}, [], []);
        await group.update({ state: "updating" });
        await expect(destination.destroy()).rejects.toThrow(
          /cannot delete destination until previous exported groups are done updating/
        );

        await run.destroy();
      });
    });

    describe("array exports", () => {
      afterAll(() => {
        exportArrayProperties = [];
      });

      test("mappings cannot use array profile properties if they are not allowed by exportArrayProperties", async () => {
        const destination = await Destination.create({
          name: "test plugin destination",
          type: "export-from-test-app",
          appGuid: app.guid,
        });

        await expect(
          destination.setMapping({ purchases: "purchases" })
        ).rejects.toThrow(
          /purchases is an array profile property that .* cannot support/
        );

        await destination.destroy();
      });

      test("exportArrayProperties can ask for an array profile property", async () => {
        exportArrayProperties = ["purchases"];

        const destination = await Destination.create({
          name: "test plugin destination",
          type: "export-from-test-app",
          appGuid: app.guid,
        });

        await destination.setMapping({ purchases: "purchases" });

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        const oldProfileProperties = { purchases: ["hat", "mushroom"] };
        const newProfileProperties = { purchases: ["hat", "mushroom", "star"] };
        const oldGroups = [group];
        const newGroups = [];

        const _import = await helper.factories.import();

        await destination.exportProfile(
          profile,
          [],
          [_import],
          oldProfileProperties,
          newProfileProperties,
          oldGroups,
          newGroups
        );

        const _exports = await profile.$get("exports");
        expect(_exports.length).toBe(1);
        expect(_exports[0].oldProfileProperties).toEqual({
          purchases: ["hat", "mushroom"],
        });
        expect(_exports[0].newProfileProperties).toEqual({
          purchases: ["hat", "mushroom", "star"],
        });

        await destination.destroy();
      });

      test("exportArrayProperties can ask for all properties with *", async () => {
        exportArrayProperties = ["*"];

        const destination = await Destination.create({
          name: "test plugin destination",
          type: "export-from-test-app",
          appGuid: app.guid,
        });

        await destination.setMapping({ purchases: "purchases" });

        const group = await helper.factories.group();
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = group.name;
        await destination.setDestinationGroupMemberships(
          destinationGroupMemberships
        );

        const profile = await helper.factories.profile();
        const oldProfileProperties = { purchases: ["hat", "mushroom"] };
        const newProfileProperties = { purchases: ["hat", "mushroom", "star"] };
        const oldGroups = [group];
        const newGroups = [];

        const _import = await helper.factories.import();

        await destination.exportProfile(
          profile,
          [],
          [_import],
          oldProfileProperties,
          newProfileProperties,
          oldGroups,
          newGroups
        );

        const _exports = await profile.$get("exports");
        expect(_exports.length).toBe(1);
        expect(_exports[0].oldProfileProperties).toEqual({
          purchases: ["hat", "mushroom"],
        });
        expect(_exports[0].newProfileProperties).toEqual({
          purchases: ["hat", "mushroom", "star"],
        });

        await destination.destroy();
      });
    });
  });

  describe("with custom exportProfiles plugin", () => {
    let app: App;
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

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
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

    test("the app exportProfiles method can be called by the destination and exports will be created and mappings followed", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });

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
      const oldProfileProperties = { email: ["oldEmail"] };
      const newProfileProperties = { email: ["newEmail"] };
      const oldGroups = [];
      const newGroups = [groupA, groupB];

      const _import = await helper.factories.import();
      const run = await helper.factories.run(groupA, { state: "running" });

      await destination.exportProfile(
        profile,
        [run],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      // there should be no export:send tasks
      let foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(0);

      // there should be no export:sendBatch tasks until the run has completed
      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);

      await run.afterBatch();

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.destination.guid).toEqual(destination.guid);
      expect(exportArgs.app.guid).toEqual(app.guid);
      expect(exportArgs.exports.length).toEqual(1);
      expect(exportArgs.exports[0].profile.guid).toEqual(profile.guid);
      expect(exportArgs.exports[0].oldProfileProperties).toEqual({
        customer_email: "oldEmail",
      });
      expect(exportArgs.exports[0].newProfileProperties).toEqual({
        customer_email: "newEmail",
      });
      expect(exportArgs.exports[0].oldGroups).toEqual([]);
      expect(exportArgs.exports[0].newGroups).toEqual(
        newGroups.map((g) => `${g.name}+`).sort()
      );
      expect(exportArgs.exports[0].toDelete).toEqual(false);

      const _exports = await Export.findAll({
        where: { destinationGuid: destination.guid },
      });
      expect(_exports.length).toBe(1);
      expect(_exports[0].destinationGuid).toBe(destination.guid);
      expect(_exports[0].profileGuid).toBe(profile.guid);
      expect(
        _exports[0].completedAt.getTime() - _exports[0].startedAt.getTime()
      ).toBeGreaterThan(0);
      expect(_exports[0].errorMessage).toBeFalsy();
      expect(_exports[0].oldProfileProperties).toEqual({
        customer_email: "oldEmail",
      });
      expect(_exports[0].newProfileProperties).toEqual({
        customer_email: "newEmail",
      });
      expect(_exports[0].oldGroups).toEqual([]);
      expect(_exports[0].newGroups).toEqual(
        newGroups.map((g) => `${g.name}+`).sort()
      );
      expect(_exports[0].mostRecent).toBe(true);

      const exportedImports = await _exports[0].$get("imports");
      expect(exportedImports.length).toBe(1);
      expect(exportedImports[0].guid).toBe(_import.guid);

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("profile properties previously mapped but now removed will be included as oldProfileProperties in the export", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();

      await destination.trackGroup(groupA);

      const profile = await helper.factories.profile();
      const oldProfileProperties = { email: ["oldEmail"] };
      const newProfileProperties = { email: ["newEmail"] };
      const oldGroups = [];
      const newGroups = [groupA];

      // create a previous export
      const _export = await Export.create({
        profileGuid: profile.guid,
        destinationGuid: destination.guid,
        newProfileProperties: { gender: "Male" },
        oldProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        mostRecent: true,
      });

      const _import = await helper.factories.import();
      const run = await helper.factories.run(groupA, { state: "running" });

      await destination.exportProfile(
        profile,
        [run],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      // there should be no export:send tasks
      let foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(0);

      // there should be no export:sendBatch tasks until the run has completed
      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);

      await run.afterBatch();

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1);
      expect(exportArgs.exports[0].oldProfileProperties).toEqual({
        customer_email: "oldEmail",
        gender: "unknown",
      });
      expect(exportArgs.exports[0].newProfileProperties).toEqual({
        customer_email: "newEmail",
      });

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if a profile is removed from all groups tracked by this destination, toDelete is true", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });

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
      const oldProfileProperties = { email: ["oldEmail"] };
      const newProfileProperties = { email: ["newEmail"] };
      const oldGroups = [groupA, groupB];
      const newGroups = [];

      const _import = await helper.factories.import();
      const run = await helper.factories.run(groupA, { state: "running" });

      await destination.exportProfile(
        profile,
        [run],
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      // there should be no export:send tasks
      let foundTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundTasks.length).toBe(0);

      // there should be no export:sendBatch tasks until the run has completed
      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(0);

      await run.afterBatch();

      foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1);
      expect(exportArgs.exports[0].profile.guid).toEqual(profile.guid);
      expect(exportArgs.exports[0].oldGroups).toEqual(
        oldGroups.map((g) => g.name).sort()
      );
      expect(exportArgs.exports[0].newGroups).toEqual([]);
      expect(exportArgs.exports[0].toDelete).toEqual(true);

      await run.determineState();

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if an export has the same data as the previous export, and force=false, it will not be sent to the destination", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
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

      await destination.exportProfile(
        profile,
        [run],
        [],
        {},
        {},
        [group],
        [group]
      );
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(false);

      await run.afterBatch();

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(0); // plugin#exportProfile not called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if an export has the same data as the previous export, and force=true, it will be sent to the destination", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
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

      await destination.exportProfile(
        profile,
        [run],
        [],
        {},
        {},
        [group],
        [group],
        false,
        true
      );
      const newExport = await Export.findOne({
        where: {
          destinationGuid: destination.guid,
          guid: { [Op.ne]: oldExport.guid },
        },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await run.afterBatch();

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1); // plugin#exportProfile was called

      await newExport.reload();
      expect(newExport.completedAt).toBeTruthy();

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("if there is no previous export, it will be sent to the destination", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
      const profile = await helper.factories.profile();
      const group = await helper.factories.group();
      await group.addProfile(profile);
      await destination.trackGroup(group);

      const run = await helper.factories.run(group, { state: "running" });

      await destination.exportProfile(
        profile,
        [run],
        [],
        {},
        {},
        [group],
        [group]
      );
      const newExport = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      expect(newExport.toDelete).toBe(false);
      expect(newExport.hasChanges).toBe(true);

      await run.afterBatch();

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.exports.length).toBe(1); // plugin#exportProfile was called

      await destination.unTrackGroups();
      await destination.destroy();
    });

    test("exportProfile can return that it is rate limited and the export:send task will be re-enqueued", async () => {
      parallelismResponse = 0;

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });
      await destination.exportProfile(profile, [run], [], {}, {}, [], []);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      await run.afterBatch();

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
      await destination.destroy();
    });

    test("sending an export with sync and producing a parallelism error will throw", async () => {
      parallelismResponse = 0;

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });
      await expect(
        destination.exportProfile(profile, [run], [], {}, {}, [], [], true)
      ).rejects.toThrow(/parallelism limit reached for test-template-app/);

      await run.stop();
      await destination.destroy();
      parallelismResponse = Infinity;
    });

    test("the app can be rate-limited and the export:sendBatches task will be re-enqueued", async () => {
      exportProfilesResponse = {
        success: false,
        errors: [new Error("oh no!")],
        retryDelay: 1000,
      };

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
      const group = await helper.factories.group();
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.guid] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const profile = await helper.factories.profile();
      const run = await helper.factories.run(group, { state: "running" });
      await destination.exportProfile(profile, [run], [], {}, {}, [], []);
      const _export = await Export.findOne({
        where: { destinationGuid: destination.guid },
      });

      await run.afterBatch();

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
      await destination.destroy();
    });

    test("sending an export with sync and producing a retry error will throw combined of all sub errors", async () => {
      const destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        appGuid: app.guid,
      });
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
        await destination.exportProfile(
          profile,
          [run],
          [],
          {},
          {},
          [],
          [],
          true
        );
      } catch (error) {
        combinedError = error;
      }

      expect(combinedError.message).toMatch(
        /error exporting a batch of 1 profiles to destination test plugin destination/
      );
      expect(combinedError.message).toMatch(/oh no!/);
      expect(combinedError["errors"].map((e) => e.message)).toEqual(["oh no!"]);

      await run.stop();
      await destination.destroy();
      exportProfilesResponse = {
        success: true,
        errors: undefined,
        retryDelay: undefined,
      };
    });
  });
});
