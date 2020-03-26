import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
import { App } from "../../src/models/App";
import { Log } from "../../src/models/Log";
import { Destination } from "../../src/models/Destination";
import { Group } from "../../src/models/Group";
import { Export } from "../../src/models/Export";
import { plugin } from "../../src/modules/plugin";
let actionhero;
let api;

describe("models/destination", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
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
      app = await App.create({
        name: "test app",
        type: "test-plugin-app",
        options: { database: "db" },
      });
    });

    afterEach(async () => {
      if (destination) {
        await destination.destroy();
      }
    });

    test("a destination can be created with a source, and it can find the related app", async () => {
      destination = new Destination({
        name: "test destination",
        type: "export-test",
        appGuid: app.guid,
      });

      await destination.save();

      expect(destination.guid.length).toBe(40);
      expect(destination.createdAt).toBeTruthy();
      expect(destination.updatedAt).toBeTruthy();

      const options = await destination.getOptions();
      expect(options).toEqual({});

      const _app = await destination.$get("app");
      expect(_app.guid).toBe(app.guid);
    });

    test("creating a destination creates a log entry", async () => {
      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "destination" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();
    });

    test("deleting a destination creates a log entry and enqueued a destroyExports task", async () => {
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-app",
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

    describe("validations", () => {
      test("options must match the app options (extra options needed by connection)", async () => {
        destination = new Destination({
          name: "incoming destination - too many options",
          type: "test-plugin-app",
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
          /something is not an option for a test-plugin-app destination/
        );
      });

      test("mappings must map to profilePropertyRules", async () => {
        destination = await helper.factories.destination();
        await destination.setMapping({
          local_user_id: "userId",
          local_first_name: "firstName",
        });
        const mapping = await destination.getMapping();
        expect(mapping).toEqual({
          local_user_id: "userId",
          local_first_name: "firstName",
        });
      });

      test("it throws an error if the mapping does not include the key of a profilePropertyRyle", async () => {
        destination = await helper.factories.destination();
        await expect(
          destination.setMapping({
            local_user_id: "TheUserID",
          })
        ).rejects.toThrow(/cannot find profile property rule TheUserID/);
      });

      test("an app can only have one destination", async () => {
        destination = await Destination.create({
          name: "first destination",
          appGuid: app.guid,
        });

        await expect(
          Destination.create({
            name: "second destination",
            appGuid: app.guid,
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
        });

        group = await helper.factories.group();
      });

      afterEach(async () => {
        await destination.destroy();
        await group.destroy();
      });

      test("a group can be tracked", async () => {
        await destination.trackGroup(group);
        const groups = await destination.$get("groups");
        expect(groups.length).toBe(1);
        expect(groups[0].guid).toBe(group.guid);
      });

      test("a group cannot be added twice", async () => {
        await destination.trackGroup(group);
        const groups = await destination.$get("groups");
        await expect(destination.trackGroup(group)).rejects.toThrow(
          /Validation error/
        );
      });

      test("a group can be unTracked", async () => {
        await destination.trackGroup(group);
        let groups = await destination.$get("groups");
        expect(groups.length).toBe(1);

        await destination.unTrackGroup(group);
        groups = await destination.$get("groups");
        expect(groups.length).toBe(0);
      });

      test("if the destination mapping changes, a group#updateMembers task will be enqueued", async () => {
        await api.resque.queue.connection.redis.flushdb();

        await destination.trackGroup(group);
        let foundTasks = await specHelper.findEnqueuedTasks(
          "group:updateMembers"
        );
        expect(foundTasks.length).toBe(1);

        await api.resque.queue.connection.redis.flushdb();
        await destination.setMapping({
          local_user_id_: "userId",
          local_first_name_: "firstName",
        });

        foundTasks = await specHelper.findEnqueuedTasks("group:updateMembers");
        expect(foundTasks.length).toBe(1);
      });

      describe("trackAllGroups", () => {
        test("no groups can be added or removed if the destination is tracking all groups", async () => {
          await destination.update({ trackAllGroups: true });
          await expect(destination.trackGroup(group)).rejects.toThrow(
            /Validation error/
          );
          await expect(destination.unTrackGroup(group)).rejects.toThrow(
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

          const destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );

          expect(destinations.length).toBe(1);
          expect(destinations[0].guid).toBe(destination.guid);

          await destination.unTrackGroup(group);
          await group.removeProfile(profile);
        });

        it("informs all destinations if trackAllGroups is set", async () => {
          await destination.update({ trackAllGroups: true });
          const otherDestination = await helper.factories.destination();
          await otherDestination.update({ trackAllGroups: true });

          const profile = await helper.factories.profile();
          await group.addProfile(profile);

          const destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );

          expect(destinations.length).toEqual(2);

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
      plugin.registerPlugin({
        name: "test-import-only-plugin",
        apps: [
          {
            name: "test-template-app",
            options: [],
            test: async () => {
              return true;
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            description: "a test app connection",
            app: "test-template-app",
            direction: "import",
            options: [],
            methods: {},
          },
        ],
      });

      app = await App.create({
        name: "test app with temp methods",
        type: "test-template-app",
      });
    });

    afterAll(async () => {
      await app.destroy();
    });

    test("you are prevented from making a destination against an app with no export methods", async () => {
      await expect(
        Destination.create({
          name: "test plugin destination app missing data",
          type: "test-template-app",
          appGuid: app.guid,
        })
      ).rejects.toThrow(/this app cannot be used for this type of destination/);
    });
  });

  describe("with custom plugin", () => {
    let app: App;
    let exportArgs = {
      dest: null,
      app: null,
      options: null,
      profile: null,
      oldProfileProperties: null,
      newProfileProperties: null,
      oldGroups: null,
      newGroups: null,
      toDelete: null,
    };

    beforeEach(() => {
      exportArgs = {
        dest: null,
        app: null,
        options: null,
        profile: null,
        oldProfileProperties: null,
        newProfileProperties: null,
        oldGroups: null,
        newGroups: null,
        toDelete: null,
      };
    });

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            options: [{ key: "test_key", required: true }],
            test: async () => {
              return true;
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
              columns: async (destination, app) => {
                return {
                  columns: ["name", "email"],
                  rows: [{ name: "test person", email: "test@example.com" }],
                };
              },
              exportProfile: async (
                dest,
                app,
                options,
                profile,
                oldProfileProperties,
                newProfileProperties,
                oldGroups,
                newGroups,
                toDelete
              ) => {
                exportArgs = {
                  dest,
                  app,
                  options,
                  profile,
                  oldProfileProperties,
                  newProfileProperties,
                  oldGroups,
                  newGroups,
                  toDelete,
                };
                return true;
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test with real methods",
        type: "test-template-app",
      });
    });

    test("asking for columns checks the app options", async () => {
      const destination = await Destination.create({
        name: "test plugin destination app missing data",
        type: "test-template-app",
        appGuid: app.guid,
      });

      try {
        await destination.columns();
        throw new Error("should not get here");
      } catch (error) {
        expect(error.toString()).toMatch(
          /test_key is required for a app of type test-template-app/
        );

        await destination.destroy();
      }
    });

    test("the destination can get the columns from an attached app", async () => {
      await app.setOptions({
        test_key: "abc123",
      });

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "test-template-app",
        appGuid: app.guid,
      });

      const { columns, rows } = await destination.columns();
      expect(columns).toEqual(["name", "email"]);
      expect(rows).toEqual([
        { name: "test person", email: "test@example.com" },
      ]);

      await destination.destroy();
    });

    test("the app exportProfiles method can be called by the destination and exports will be created and mappings followed", async () => {
      await app.setOptions({
        test_key: "abc123",
      });

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "test-template-app",
        appGuid: app.guid,
      });

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      await destination.trackGroup(groupA);
      await destination.trackGroup(groupB);

      const profile = await helper.factories.profile();
      const oldProfileProperties = { email: "oldEmail" };
      const newProfileProperties = { email: "newEmail" };
      const oldGroups = [];
      const newGroups = [groupA, groupB];

      const _import = await helper.factories.import();

      const response = await destination.exportProfile(
        profile,
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      expect(response).toEqual(true);
      expect(exportArgs.dest.guid).toEqual(destination.guid);
      expect(exportArgs.app.guid).toEqual(app.guid);
      expect(exportArgs.profile.guid).toEqual(profile.guid);
      expect(exportArgs.oldProfileProperties).toEqual({
        customer_email: "oldEmail",
      });
      expect(exportArgs.newProfileProperties).toEqual({
        customer_email: "newEmail",
      });
      expect(exportArgs.oldGroups).toEqual([]);
      expect(exportArgs.newGroups).toEqual(newGroups.map((g) => g.name).sort());
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
        newGroups.map((g) => g.name).sort()
      );
      expect(_exports[0].mostRecent).toBe(true);

      const exportedImports = await _exports[0].$get("imports");
      expect(exportedImports.length).toBe(1);
      expect(exportedImports[0].guid).toBe(_import.guid);

      await destination.unTrackGroup(groupA);
      await destination.unTrackGroup(groupB);
      await destination.destroy();
    });

    test("if a profile is removed from all groups tracked by this destination, toDelete is true", async () => {
      await app.setOptions({
        test_key: "abc123",
      });

      const destination = await Destination.create({
        name: "test plugin destination",
        type: "test-template-app",
        appGuid: app.guid,
      });

      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      const groupB = await helper.factories.group();

      const profile = await helper.factories.profile();
      const oldProfileProperties = { email: "oldEmail" };
      const newProfileProperties = { email: "newEmail" };
      const oldGroups = [groupA, groupB];
      const newGroups = [];

      const _import = await helper.factories.import();

      const response = await destination.exportProfile(
        profile,
        [_import],
        oldProfileProperties,
        newProfileProperties,
        oldGroups,
        newGroups
      );

      expect(response).toBe(true);
      expect(exportArgs.profile.guid).toEqual(profile.guid);
      expect(exportArgs.oldGroups).toEqual(oldGroups.map((g) => g.name).sort());
      expect(exportArgs.newGroups).toEqual([]);
      expect(exportArgs.toDelete).toEqual(true);

      await destination.destroy();
    });
  });
});
