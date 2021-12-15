import { helper } from "@grouparoo/spec-helper";
import { cache } from "actionhero";
import { DestinationOps } from "../../../src/modules/ops/destination";
import {
  App,
  Destination,
  DestinationGroupMembership,
  Export,
  Group,
  GrouparooModel,
  GroupMember,
  Log,
  Mapping,
  Option,
  Run,
} from "../../../src";

describe("models/destination", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("with apps", () => {
    let model: GrouparooModel;
    let app: App;
    let destination: Destination;

    beforeAll(async () => {
      ({ model } = await helper.factories.properties());
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
        modelId: model.id,
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
        modelId: model.id,
      });

      expect(destination.name).toBe("");

      await destination.destroy();
    });

    test("draft destination can share the same name, but not with ready destination", async () => {
      const destinationOne = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });

      const otherApp = await helper.factories.app();
      const destinationTwo = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: otherApp.id,
        modelId: model.id,
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

    test("deleted destination can share the same name, but not with ready destination", async () => {
      const destinationOne = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });

      const otherApp = await helper.factories.app();
      const destinationTwo = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: otherApp.id,
        modelId: model.id,
      });

      const otherOtherApp = await helper.factories.app();
      const destinationThree = await Destination.create({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: otherOtherApp.id,
        modelId: model.id,
      });

      expect(destinationOne.name).toBe("");
      expect(destinationTwo.name).toBe("");
      expect(destinationThree.name).toBe("");

      await destinationOne.setOptions({ table: "abc123" });
      await destinationOne.update({ state: "ready" });

      await destinationTwo.update({ state: "deleted", name: "asdf" });
      await destinationThree.update({ state: "deleted", name: "asdf" });
      await destinationOne.update({ name: "asdf" });

      await expect(destinationTwo.update({ name: "asdf" })).rejects.toThrow(
        /name "asdf" is already in use/
      );

      await destinationOne.destroy();
      await destinationTwo.destroy();
      await otherApp.destroy();
      await destinationThree.destroy();
      await otherOtherApp.destroy();
    });

    test("a destination cannot be created with a deleted state model", async () => {
      await model.update({ state: "deleted" });

      const destination = new Destination({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });

      await expect(destination.save()).rejects.toThrow(
        /cannot find ready model with id/
      );

      await model.update({ state: "ready" });
    });

    test("a deleted destination can be saved with a deleted state model", async () => {
      const destination = new Destination({
        type: "test-plugin-export",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });

      await destination.save();
      await model.update({ state: "deleted" });
      await destination.update({ name: "abc", state: "deleted" });
      expect(destination.name).toBe("abc");
      await model.update({ state: "ready" });
    });

    test("creating a destination creates a log entry", async () => {
      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "destination" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();
    });

    test("deleting a destination deletes related models", async () => {
      const group = await helper.factories.group();
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appId: app.id,
        modelId: model.id,
      });

      await destination.setOptions({ table: "table" });
      await destination.setMapping({ "primary-id": "userId" });
      await destination.updateTracking("group", group.id);
      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = "remote-tag";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.updateTracking("none");
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

    test("destinations require a valid modelId", async () => {
      expect(
        Destination.create({
          name: "bye destination",
          type: "test-plugin-export",
          appId: app.id,
          modelId: "foo",
        })
      ).rejects.toThrow(/cannot find model with id "foo"/);
    });

    test("destinations cannot change models", async () => {
      destination = await Destination.create({
        name: "bye destination",
        type: "test-plugin-export",
        appId: app.id,
        modelId: model.id,
      });
      await expect(destination.update({ modelId: "foo" })).rejects.toThrow(
        /cannot change models/
      );

      await destination.destroy();
    });

    test("deleting a destination does not delete options for other models with the same id", async () => {
      destination = await Destination.create({
        name: "some destination",
        type: "test-plugin-export",
        appId: app.id,
        modelId: model.id,
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
        modelId: model.id,
      });

      const record = await helper.factories.record();
      const _export = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        oldRecordProperties: {},
        newRecordProperties: {},
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
      await record.destroy();
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
        receivedOptions: { type: "text", options: ["true"] },
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
          modelId: model.id,
        });

        group = await helper.factories.group();
        await destination.updateTracking("group", group.id);
      });

      afterAll(async () => {
        await destination.updateTracking("none");
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
          modelId: model.id,
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
            modelId: model.id,
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
          modelId: model.id,
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
          modelId: model.id,
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

      test("required mappings with a type can only use record properties that match the type", async () => {
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

      test("it throws an error if the mapping does not include the key of a recordPropertyRyle", async () => {
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
          modelId: model.id,
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

      test("an app can only have one destination per connection with the same options and group tracking", async () => {
        destination = await Destination.create({
          name: "first destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export",
          groupId: "abc123",
          collection: "group",
        });

        await expect(
          Destination.create({
            name: "second destination",
            appId: app.id,
            modelId: model.id,
            type: "test-plugin-export",
            groupId: "abc123",
            collection: "group",
          })
        ).rejects.toThrow(
          /destination "first destination" .* is already using this app with the same options/
        );

        // but it's ok to have the same app track a different group
        const differentGroupDestination = await Destination.create({
          name: "different group destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export", // same
          groupId: "def456", // different
          collection: "group",
        });
        expect(differentGroupDestination.state).toEqual("draft");

        // but it's ok to have one in another type of connection
        const ok = await Destination.create({
          name: "ok destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export-batch", // different
          groupId: "abc123", // same group
          collection: "group",
        });
        expect(ok.state).toEqual("draft");

        await destination.setOptions({ table: "users" });

        const otherDestination = await Destination.create({
          name: "second destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export", // same
          groupId: "abc123", // same
          collection: "group",
        }); // does not throw, as first destination now has new options

        await otherDestination.setOptions({ table: "purchases" }); // does not throw

        await expect(
          otherDestination.setOptions({ table: "users" })
        ).rejects.toThrow(
          /destination "first destination" .* is already using this app with the same options/
        );

        await differentGroupDestination.destroy();
        await otherDestination.destroy();

        // and it's ok to have the options here
        await ok.setOptions({ table: "users" });
        await ok.destroy();
      });

      test("an app can only have one destination per connection with the same options and model tracking", async () => {
        destination = await Destination.create({
          name: "first destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export",
          collection: "model",
        });

        await expect(
          Destination.create({
            name: "second destination",
            appId: app.id,
            modelId: model.id,
            type: "test-plugin-export",
            collection: "model",
          })
        ).rejects.toThrow(
          /destination "first destination" .* is already using this app with the same options/
        );

        // but it's ok to have one in another type of connection
        const ok = await Destination.create({
          name: "ok destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export-batch", // different
          collection: "model",
        });
        expect(ok.state).toEqual("draft");

        await destination.setOptions({ table: "users" });

        const otherDestination = await Destination.create({
          name: "second destination",
          appId: app.id,
          modelId: model.id,
          type: "test-plugin-export", // same
          collection: "model",
        }); // does not throw, as first destination now has new options

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
          modelId: model.id,
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
          modelId: model.id,
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
          modelId: model.id,
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
          modelId: model.id,
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

    describe("tracking a model", () => {
      let destination: Destination;
      let model: GrouparooModel;

      beforeEach(async () => {
        model = await GrouparooModel.findOne();

        destination = await Destination.create({
          name: "test destination",
          appId: app.id,
          modelId: "mod_profiles",
          syncMode: "sync",
          type: "test-plugin-export",
        });
      });

      afterEach(async () => {
        await destination.destroy();
      });

      test("a model can be tracked", async () => {
        const { newRun } = await destination.updateTracking("model");
        expect(newRun.destinationId).toEqual(destination.id);
        expect(destination.collection).toBe("model");
        expect(destination.modelId).toBe(model.id);
      });

      test("tracking a model will enqueue runs", async () => {
        const { newRun, oldRun } = await destination.updateTracking("model");
        expect(oldRun).toBeFalsy();
        expect(newRun).toBeTruthy();
      });

      test("a destination cannot track an unrelated model", async () => {
        const otherModel = await helper.factories.model({
          id: "otherModel",
          name: "Other Model",
          type: "profile",
        });

        const otherGroup = await helper.factories.group({
          modelId: otherModel.id,
        });

        await expect(
          destination.updateTracking("group", otherGroup.id)
        ).rejects.toThrow(/do not share the same modelId/);

        await otherGroup.destroy();
        await otherModel.destroy();
      });

      test("a model can be unTracked", async () => {
        await destination.updateTracking("model");
        const { oldRun, newRun } = await destination.updateTracking("none");
        expect(oldRun.destinationId).toEqual(destination.id);
        expect(newRun).toBeFalsy();
        expect(destination.collection).toBe("none");
        expect(destination.groupId).toBe(null);
      });

      test("recordPreview - without updates - with model", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
        });
        await destination.updateTracking("model");

        const mapping = {
          "primary-id": "userId",
          email: "email",
        };

        const destinationGroupMemberships = {};

        const _record = await destination.recordPreview(
          record,
          mapping,
          destinationGroupMemberships
        );
        expect(_record.properties["primary-id"].values[0]).toBe(1);
        expect(_record.properties["email"].values[0]).toBe("yoshi@example.com");

        await record.destroy();
      });

      test("destination record previews will convert the type of the property to match the destination", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
          ltv: [123],
        });
        await destination.updateTracking("model");

        const mapping = {
          "primary-id": "userId",
          "string-property": "ltv",
        };

        const _record = await destination.recordPreview(record, mapping, {});

        expect(_record.properties["primary-id"].values[0]).toBe(1);
        expect(_record.properties["primary-id"].type).toBe("integer");

        expect(_record.properties["string-property"].values[0]).toBe("123");
        expect(_record.properties["string-property"].type).toBe("string");

        await record.destroy();
      });
    });

    describe("with groups", () => {
      let destination: Destination;
      let group: Group;

      beforeEach(async () => {
        destination = await Destination.create({
          name: "test destination",
          appId: app.id,
          modelId: model.id,
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
        await destination.updateTracking("group", group.id);
        const _group = await destination.$get("group");
        expect(_group.id).toBe(group.id);
      });

      test("a group cannot be tracked in any other collection", async () => {
        await expect(
          destination.updateTracking("none", group.id)
        ).rejects.toThrow(/cannot track/);
        await expect(
          destination.updateTracking("model", group.id)
        ).rejects.toThrow(/cannot track/);
      });

      test("tracking a group will enqueue runs", async () => {
        const { oldRun, newRun } = await destination.updateTracking(
          "group",
          group.id
        );
        expect(oldRun).toBeFalsy();
        expect(newRun).toBeTruthy();
      });

      test("a destination can only track a single group", async () => {
        const newGroup = await helper.factories.group();

        await destination.updateTracking("group", group.id);
        await destination.updateTracking("group", newGroup.id);
        const _group = await destination.$get("group");
        expect(_group.id).toBe(newGroup.id);
        await newGroup.destroy();
      });

      test("a destination cannot track a deleted group", async () => {
        await group.update({ state: "deleted" });

        await expect(
          destination.updateTracking("group", group.id)
        ).rejects.toThrow(/cannot track deleted Group/);
        const _group = await destination.$get("group");
        expect(_group).toBe(null);
      });

      test("a group can be unTracked", async () => {
        await destination.updateTracking("group", group.id);
        let _group = await destination.$get("group");
        expect(_group.id).toBe(group.id);

        await destination.updateTracking("none");
        _group = await destination.$get("group");
        expect(_group).toBe(null);
      });

      test("recordPreview - without updates - with group", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
        });
        await GroupMember.create({ recordId: record.id, groupId: group.id });
        await destination.updateTracking("group", group.id);

        const mapping = {
          "primary-id": "userId",
          email: "email",
        };

        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = "another-group-tag";

        const _record = await destination.recordPreview(
          record,
          mapping,
          destinationGroupMemberships
        );
        expect(_record.properties["primary-id"].values[0]).toBe(1);
        expect(_record.properties["email"].values[0]).toBe("yoshi@example.com");
        expect(_record.groupNames).toEqual(["another-group-tag"]);

        await record.destroy();
      });

      test("destination record previews will convert the type of the property to match the destination", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
          ltv: [123],
        });
        await GroupMember.create({ recordId: record.id, groupId: group.id });
        await destination.updateTracking("group", group.id);

        const mapping = {
          "primary-id": "userId",
          "string-property": "ltv",
        };

        const _record = await destination.recordPreview(record, mapping, {});

        expect(_record.properties["primary-id"].values[0]).toBe(1);
        expect(_record.properties["primary-id"].type).toBe("integer");

        expect(_record.properties["string-property"].values[0]).toBe("123");
        expect(_record.properties["string-property"].type).toBe("string");

        await record.destroy();
      });

      describe("relevantFor", () => {
        it("determined relevant destinations for a record", async () => {
          const otherGroupDestination = await helper.factories.destination();
          const modelDestination = await helper.factories.destination();
          const otherGroup = await helper.factories.group();
          const irrelevantDestination = await helper.factories.destination();
          await irrelevantDestination.updateTracking("group", otherGroup.id);

          const record = await helper.factories.record();
          await GroupMember.create({ recordId: record.id, groupId: group.id });

          // before the destinations are ready
          await destination.updateTracking("group", group.id);
          let destinations = await DestinationOps.relevantFor(
            record,
            await record.$get("groups")
          );
          expect(destinations.length).toBe(0);

          // after the destinations are ready
          await destination.setOptions({ table: "some table" });
          await destination.update({ state: "ready" });
          await otherGroupDestination.setOptions({ table: "some table" });
          await otherGroupDestination.updateTracking("group", group.id);
          await modelDestination.updateTracking("model");

          destinations = await DestinationOps.relevantFor(
            record,
            await record.$get("groups")
          );
          expect(destinations.length).toBe(3);
          expect(destinations.map((d) => d.id).sort()).toEqual(
            [
              destination.id,
              otherGroupDestination.id,
              modelDestination.id,
            ].sort()
          );
          expect(destinations.map((d) => d.id).sort()).not.toContain(
            irrelevantDestination.id
          );

          await destination.updateTracking("none");
          await GroupMember.destroy({ where: { recordId: record.id } });

          await otherGroupDestination.updateTracking("none");
          await otherGroupDestination.destroy();
          await modelDestination.updateTracking("none");
          await modelDestination.destroy();
          await irrelevantDestination.updateTracking("none");
          await irrelevantDestination.destroy();
          await otherGroup.destroy();
        });

        test("when the group being tracked is removed, the previous group should be exported one last time", async () => {
          const { newRun: runA } = await destination.updateTracking(
            "group",
            group.id
          );

          const { oldRun: runB } = await destination.updateTracking("none");
          await runA.reload();
          await runB.reload();

          expect(runA.creatorId).toEqual(runB.creatorId);
          expect(runA.state).toBe("stopped");
          expect(runB.state).toBe("running");
          expect(runA.destinationId).toBe(destination.id);
          expect(runB.destinationId).toBe(destination.id);
        });

        test("when the model being tracked is removed, the previous records should be exported one last time", async () => {
          const { newRun: runA } = await destination.updateTracking("model");
          const { oldRun: runB } = await destination.updateTracking("none");
          await runA.reload();
          await runB.reload();

          expect(runA.creatorId).toEqual(runB.creatorId);
          expect(runA.state).toBe("stopped");
          expect(runB.state).toBe("running");
          expect(runA.destinationId).toBe(destination.id);
          expect(runB.destinationId).toBe(destination.id);
        });

        test("when the group being tracked is changed, the previous group should be exported one last time", async () => {
          const otherGroup = await helper.factories.group();
          await otherGroup.update({ state: "ready" });
          const { newRun: runA } = await destination.updateTracking(
            "group",
            group.id
          );
          const { newRun: runB } = await destination.updateTracking(
            "group",
            otherGroup.id
          );

          expect(runA.creatorId).toEqual(group.id);
          expect(runB.creatorId).toEqual(otherGroup.id);
          expect(runA.state).toBe("running");
          expect(runB.state).toBe("running");
          expect(runB.destinationId).toBe(destination.id);

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
          modelId: model.id,
        });
        await destination.save();

        await destination.setOptions({
          table: "thing-{{{ now.sql }}}",
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
