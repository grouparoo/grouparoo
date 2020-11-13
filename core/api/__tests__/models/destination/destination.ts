import { helper } from "@grouparoo/spec-helper";
import { api, specHelper, cache } from "actionhero";
import { App } from "../../../src/models/App";
import { Log } from "../../../src/models/Log";
import { Destination } from "../../../src/models/Destination";
import { Group } from "../../../src/models/Group";
import { Export } from "../../../src/models/Export";
import { Mapping } from "../../../src/models/Mapping";
import { Option } from "../../../src/models/Option";
import { DestinationGroupMembership } from "../../../src/models/DestinationGroupMembership";
import { Run } from "../../../src";
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

      await destination.unTrackGroup();
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

      await group.destroy();
    });

    test("destinations can retrieve related export totals", async () => {
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      });

      const profile = await helper.factories.profile();
      const _export = await Export.create({
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });

      const totals = await destination.getExportTotals();
      expect(totals).toEqual({
        all: 1,
        completed: 0,
        created: 1,
        error: 0,
        started: 0,
      });

      await _export.destroy();
      await destination.destroy();
      await profile.destroy();
    });

    test("a destination can get options from a connection", async () => {
      const connectionOptions = await destination.destinationConnectionOptions();
      expect(connectionOptions).toEqual({
        table: { type: "list", options: ["users_out"] },
      });
    });

    test("partial options will be passed to destinationConnectionOptions", async () => {
      const connectionOptions = await destination.destinationConnectionOptions({
        options: "true",
      });
      expect(connectionOptions).toEqual({
        table: { type: "list", options: ["users_out"] },
        receivedOptions: { type: "string", options: ["true"] },
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

      test("mapping data is cached", async () => {
        destination = await helper.factories.destination();
        const cacheKey = `destination:${destination.guid}:mappingOptions`;
        await expect(cache.load(cacheKey)).rejects.toThrow();

        await destination.setMapping({
          "primary-id": "userId",
          local_first_name: "firstName",
        });
        await destination.getMapping();

        const response = await cache.load(cacheKey);
        expect(response.value).not.toBeFalsy();
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

      test("an app can only have one destination per connection with the same options", async () => {
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
          /destination "first destination" .* is already using this app with the same options/
        );

        // but it's ok to have one in another type of connection
        const ok = await Destination.create({
          name: "ok destination",
          appGuid: app.guid,
          type: "test-plugin-export-batch", // different
        });
        expect(ok.state).toEqual("draft");

        await destination.setOptions({ table: "users" });

        const otherDestination = await Destination.create({
          name: "second destination",
          appGuid: app.guid,
          type: "test-plugin-export",
        }); // does not throw

        await otherDestination.setOptions({ table: "purchases" }); // does not throw

        await expect(
          otherDestination.setOptions({ table: "users" })
        ).rejects.toThrow(
          /destination "first destination" .* is already using this app with the same options/
        );

        await otherDestination.destroy();

        // and it's ok to have the options here
        await ok.setOptions({ table: "users" });
        await ok.destroy();
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
        await destination.destroy();
      });

      test("a group can be tracked", async () => {
        await destination.trackGroup(group);
        const _group = await destination.$get("group");
        expect(_group.guid).toBe(group.guid);
      });

      test("tracking a group will not enqueue a run", async () => {
        const runs = await Run.findAll({
          where: { creatorGuid: destination.guid },
        });
        expect(runs.length).toBe(0);
      });

      test("a destination can only track a single group", async () => {
        const newGroup = await helper.factories.group();

        await destination.trackGroup(group);
        await destination.trackGroup(newGroup);
        const _group = await destination.$get("group");
        expect(_group.guid).toBe(newGroup.guid);
        await newGroup.destroy();
      });

      test("a group can be unTracked", async () => {
        await destination.trackGroup(group);
        let _group = await destination.$get("group");
        expect(_group.guid).toBe(group.guid);

        await destination.unTrackGroup();
        _group = await destination.$get("group");
        expect(_group).toBe(null);
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

      test("destination profile previews will convert the type of the property to match the destination", async () => {
        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
          ltv: [123],
        });
        await group.addProfile(profile);
        await destination.trackGroup(group);

        const mapping = {
          "primary-id": "userId",
          "string-property": "ltv",
        };

        const _profile = await destination.profilePreview(profile, mapping, {});

        expect(_profile.properties["primary-id"].values[0]).toBe(1);
        expect(_profile.properties["primary-id"].type).toBe("integer");

        expect(_profile.properties["string-property"].values[0]).toBe("123");
        expect(_profile.properties["string-property"].type).toBe("string");

        await profile.destroy();
      });

      describe("destinationsForGroups", () => {
        it("determined relevant destinations for a profile", async () => {
          const otherDestination = await helper.factories.destination();
          const profile = await helper.factories.profile();
          await group.addProfile(profile);

          // before the destinations are ready
          await destination.trackGroup(group);
          let destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );
          expect(destinations.length).toBe(0);

          // after the destinations are ready
          await destination.setOptions({ table: "some table" });
          await destination.update({ state: "ready" });
          await otherDestination.setOptions({ table: "some table" });
          await otherDestination.update({ state: "ready" });
          await otherDestination.trackGroup(group);

          destinations = await Destination.destinationsForGroups(
            await profile.$get("groups")
          );
          expect(destinations.length).toBe(2);
          expect(destinations.map((d) => d.guid).sort()).toEqual(
            [destination.guid, otherDestination.guid].sort()
          );

          await destination.unTrackGroup();
          await group.removeProfile(profile);
          await otherDestination.unTrackGroup();
          await otherDestination.destroy();
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
          await destination.unTrackGroup();
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
});
