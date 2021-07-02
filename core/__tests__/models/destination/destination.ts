import { helper } from "@grouparoo/spec-helper";
import { api, specHelper, cache } from "actionhero";
import {
  App,
  Log,
  Destination,
  Group,
  Export,
  Mapping,
  Option,
  DestinationGroupMembership,
  Run,
} from "../../../src";

describe("models/destination", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

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
        syncMode: "sync",
        appId: app.id,
      });

      expect(destination.id.length).toBe(40);
      expect(destination.createdAt).toBeTruthy();
      expect(destination.updatedAt).toBeTruthy();

      const options = await destination.getOptions();
      expect(options).toEqual({});

      const _app = await destination.$get("app");
      expect(_app.id).toBe(app.id);
    });

    test("a new destination will have a '' name", async () => {
      destination = await Destination.create({
        type: "test-plugin-export",
        appId: app.id,
      });

      expect(destination.name).toBe("");

      await destination.destroy();
    });

    test("draft destination can share the same name, but not with ready destination", async () => {
      const destinationOne = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: app.id,
      });

      const otherApp = await helper.factories.app();
      const destinationTwo = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: otherApp.id,
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
        appId: app.id,
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
        appId: app.id,
      });

      await destination.setOptions({ table: "table" });
      await destination.setMapping({ "primary-id": "userId" });
      await destination.trackGroup(group);
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = "remote-tag";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.unTrackGroup();
      await destination.destroy();

      let count = await DestinationGroupMembership.count({
        where: { destinationId: destination.id },
      });
      expect(count).toBe(0);
      count = await Option.count({
        where: { ownerId: destination.id },
      });
      expect(count).toBe(0);
      count = await Mapping.count({
        where: { ownerId: destination.id },
      });
      expect(count).toBe(0);

      await group.destroy();
    });

    test("deleting a destination does not delete options for other models with the same id", async () => {
      destination = await Destination.create({
        name: "some destination",
        type: "test-plugin-export",
        appId: app.id,
      });

      await destination.setOptions({ table: "table" });

      const foreignOption = await Option.create({
        ownerId: destination.id,
        ownerType: "other",
        key: "someKey",
        value: "someValue",
        type: "string",
      });

      let count = await Option.count({
        where: { ownerId: destination.id },
      });
      expect(count).toBe(2);

      await destination.destroy();
      const options = await Option.findAll({
        where: { ownerId: destination.id },
      });
      expect(options.length).toBe(1);
      expect(options[0].ownerType).toBe("other");
      expect(options[0].key).toBe("someKey");

      await foreignOption.destroy();
    });

    test("destinations can retrieve related export totals", async () => {
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appId: app.id,
      });

      const profile = await helper.factories.profile();
      const _export = await Export.create({
        destinationId: destination.id,
        profileId: profile.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });

      const totals = await destination.getExportTotals();
      expect(totals).toEqual({
        canceled: 0,
        complete: 0,
        draft: 0,
        failed: 0,
        pending: 1,
        processing: 0,
      });

      await _export.destroy();
      await destination.destroy();
      await profile.destroy();
    });

    test.each(["deleted", "ready"])(
      "a destination can get options from a connection with a %p app",
      async (appState) => {
        await app.update({ state: appState });
        const connectionOptions =
          await destination.destinationConnectionOptions();
        expect(connectionOptions).toEqual({
          table: { type: "list", options: ["users_out"] },
        });
      }
    );

    test("partial options will be passed to destinationConnectionOptions", async () => {
      const connectionOptions = await destination.destinationConnectionOptions({
        options: "true",
      });
      expect(connectionOptions).toEqual({
        table: { type: "list", options: ["users_out"] },
        receivedOptions: { type: "string", options: ["true"] },
      });
    });

    describe("options trigger runs", () => {
      const newTable = "__test_table";
      let destination: Destination;
      let group: Group;
      let run: Run;

      beforeAll(async () => {
        destination = await Destination.create({
          name: "incoming destination",
          type: "test-plugin-export",
          appId: app.id,
        });

        group = await helper.factories.group();
        await destination.trackGroup(group);
      });

      afterAll(async () => {
        await destination.unTrackGroup();
        await destination.destroy();
        await group.destroy();
      });

      test("setting a destination's options triggers a group run", async () => {
        await destination.setOptions({ table: newTable });
        const runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });
        expect(runningRuns.length).toBe(1);
        expect(runningRuns[0].destinationId).toBe(destination.id);
        expect(runningRuns[0].force).toBe(true);
        run = runningRuns[0];
      });

      test("re-setting options with the same value will not trigger a group run ", async () => {
        await destination.setOptions({ table: newTable });
        await destination.setOptions({ table: newTable });

        await destination.setOptions({ table: newTable });
        const runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });
        expect(runningRuns.length).toEqual(1);
        expect(runningRuns[0].id).toEqual(run.id);
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
          appId: app.id,
        });

        await destination.setOptions({ table: "TEST_OPTION" });
        const options = await destination.getOptions();
        expect(options.table).toBe("abc123");

        const option = await Option.findOne({
          where: { ownerId: destination.id, key: "table" },
        });
        expect(option.value).toBe("TEST_OPTION");

        await destination.destroy();
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__DESTINATION__TEST_OPTION = undefined;
      });
    });

    describe("validations", () => {
      test("a destination requires a plugin connection", async () => {
        await expect(
          Destination.create({
            type: "missing-destination",
            name: "test destination",
            appId: app.id,
          })
        ).rejects.toThrow(
          /Cannot find a \"missing-destination\" connection available within the installed plugins. Current connections installed are:/
        );
      });

      test("__options only includes options for destinations", async () => {
        const destination = await Destination.create({
          id: "myDestinationId",
          type: "test-plugin-export",
          name: "test property",
          appId: app.id,
        });

        await Option.create({
          ownerId: destination.id,
          ownerType: "destination",
          key: "table",
          value: "users",
          type: "string",
        });

        await Option.create({
          ownerId: destination.id,
          ownerType: "app",
          key: "someOtherProperty",
          value: "someValue",
          type: "string",
        });

        const options = await destination.$get("__options");
        expect(options.length).toBe(1);
        expect(options[0].ownerType).toBe("destination");
        expect(options[0].key).toBe("table");

        await destination.destroy();
      });

      test("options must match the app options (extra options needed by connection)", async () => {
        destination = new Destination({
          name: "incoming destination - too many options",
          type: "test-plugin-export",
          appId: app.id,
        });
        await destination.save();
        expect(destination.id).toBeTruthy();

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
        ).rejects.toThrow(/primary-id requires a property of type integer/);
      });

      test("mappings must map to properties", async () => {
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
        const cacheKey = `destination:${destination.id}:mappingOptions`;
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
        ).rejects.toThrow(/cannot find property TheUserID/);
      });

      test("a destination cannot be created in the ready state with missing required options", async () => {
        const destination = Destination.build({
          appId: app.id,
          type: "test-plugin-export",
          syncMode: "sync",
          state: "ready",
        });

        await expect(destination.save()).rejects.toThrow(/table is required/);
      });

      test("a destination cannot be changed to to the ready state if there are missing required options", async () => {
        destination = await Destination.build({
          appId: app.id,
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
          appId: app.id,
          type: "test-plugin-export",
        });

        await expect(
          Destination.create({
            name: "second destination",
            appId: app.id,
            type: "test-plugin-export",
          })
        ).rejects.toThrow(
          /destination "first destination" .* is already using this app with the same options/
        );

        // but it's ok to have one in another type of connection
        const ok = await Destination.create({
          name: "ok destination",
          appId: app.id,
          type: "test-plugin-export-batch", // different
        });
        expect(ok.state).toEqual("draft");

        await destination.setOptions({ table: "users" });

        const otherDestination = await Destination.create({
          name: "second destination",
          appId: app.id,
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

      test("a destination cannot be created in the ready state with missing syncMode", async () => {
        const destination = Destination.build({
          appId: app.id,
          type: "test-plugin-export",
          state: "ready",
        });

        await expect(destination.save()).rejects.toThrow(
          /Sync mode is required/
        );
      });

      test("a destination can be ready without syncMode if a default has been defined", async () => {
        const destination = await Destination.create({
          appId: app.id,
          type: "test-plugin-export-batch", //has default mode "additive"
        });

        await destination.setOptions({ table: "some table" });
        await destination.update({ state: "ready" });

        const syncMode = await destination.getSyncMode();
        expect(syncMode).toBe("additive");

        await destination.destroy();
      });

      test("destination syncMode must be set on ready", async () => {
        const destination = await Destination.create({
          appId: app.id,
          type: "test-plugin-export",
        });

        await destination.setOptions({ table: "some table" });

        await expect(destination.update({ state: "ready" })).rejects.toThrow(
          /Sync mode is required/
        );

        await destination.destroy();
      });

      test("a destination cannot set an unsupported sync mode", async () => {
        const destination = await Destination.create({
          appId: app.id,
          type: "test-plugin-export",
          syncMode: "RandomSyncMode",
        });

        await destination.setOptions({ table: "some table" });

        await expect(destination.update({ state: "ready" })).rejects.toThrow(
          /does not support sync mode/
        );

        await destination.destroy();
      });
    });

    describe("with groups", () => {
      let destination: Destination;
      let group: Group;

      beforeEach(async () => {
        destination = await Destination.create({
          name: "test destination",
          appId: app.id,
          syncMode: "sync",
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
        expect(_group.id).toBe(group.id);
      });

      test("tracking a group will not enqueue a run", async () => {
        const runs = await Run.findAll({
          where: { creatorId: destination.id },
        });
        expect(runs.length).toBe(0);
      });

      test("a destination can only track a single group", async () => {
        const newGroup = await helper.factories.group();

        await destination.trackGroup(group);
        await destination.trackGroup(newGroup);
        const _group = await destination.$get("group");
        expect(_group.id).toBe(newGroup.id);
        await newGroup.destroy();
      });

      test("a destination cannot track a deleted group", async () => {
        await group.update({ state: "deleted" });

        expect(destination.trackGroup(group)).rejects.toThrow(
          /Cannot track deleted Group/
        );
        const _group = await destination.$get("group");
        expect(_group).toBe(null);
      });

      test("a group can be unTracked", async () => {
        await destination.trackGroup(group);
        let _group = await destination.$get("group");
        expect(_group.id).toBe(group.id);

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
        destinationGroupMemberships[group.id] = "another-group-tag";

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
          expect(destinations.map((d) => d.id).sort()).toEqual(
            [destination.id, otherDestination.id].sort()
          );

          await destination.unTrackGroup();
          await group.removeProfile(profile);
          await otherDestination.unTrackGroup();
          await otherDestination.destroy();
        });

        test("force (reimporting) can be toggled when tracking and un-tracking groups", async () => {
          const trackRunA = await destination.trackGroup(group, false);
          expect(trackRunA.force).toBe(false);
          const unTrackRunA = await destination.unTrackGroup(false);
          expect(unTrackRunA.force).toBe(false);

          const trackRunB = await destination.trackGroup(group, true);
          expect(trackRunB.force).toBe(true);
          const unTrackRunB = await destination.unTrackGroup(true);
          expect(unTrackRunB.force).toBe(true);
        });

        test("when the group being tracked is removed, the previous group should be exported one last time", async () => {
          const runA = await destination.trackGroup(group);
          const runB = await destination.unTrackGroup();
          await runA.reload();

          expect(runA.creatorId).toEqual(runB.creatorId);
          expect(runA.state).toBe("stopped");
          expect(runB.state).toBe("running");
          expect(runB.destinationId).toBe(destination.id);
          expect(runB.force).toBe(false);
        });

        test("when the group being tracked is changed, the previous group should be exported one last time", async () => {
          const otherGroup = await helper.factories.group();
          await otherGroup.update({ state: "ready" });
          const runA = await destination.trackGroup(group);
          const runB = await destination.trackGroup(otherGroup);

          expect(runA.creatorId).toEqual(group.id);
          expect(runB.creatorId).toEqual(otherGroup.id);
          expect(runA.state).toBe("running");
          expect(runB.state).toBe("running");
          expect(runB.destinationId).toBe(destination.id);
          expect(runB.force).toBe(true);

          await otherGroup.destroy();
        });
      });
    });

    describe("parameterizedOptions", () => {
      it("replaces mustache template strings with variables", async () => {
        destination = new Destination({
          name: "outgoing pg destination",
          type: "test-plugin-export",
          appId: app.id,
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
