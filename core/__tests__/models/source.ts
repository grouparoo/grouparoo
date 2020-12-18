import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Source } from "./../../src/models/Source";
import { App } from "./../../src/models/App";
import { Property } from "./../../src/models/Property";
import { Log } from "./../../src/models/Log";
import { Profile } from "./../../src/models/Profile";
import { Schedule } from "./../../src/models/Schedule";
import { Option } from "./../../src/models/Option";

let actionhero;
let app: App;

describe("models/source", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    app = await helper.factories.app();
    await helper.factories.properties();
  });

  describe("plugin connections", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("creating a source creates a log entry", async () => {
      const log = await Log.findOne({
        where: { topic: "source", verb: "create", ownerGuid: source.guid },
      });
      expect(log.message).toBe(`source "${source.name}" created`);
    });

    test("scheduleAvailable", async () => {
      expect(await source.scheduleAvailable()).toBe(true);
    });

    test("previewAvailable", async () => {
      expect(await source.previewAvailable()).toBe(true);
    });
  });

  describe("validations", () => {
    test("the app must be in the ready state", async () => {
      const app = await App.create({
        type: "test-plugin-app",
      });

      await expect(
        Source.create({
          type: "test-plugin-import",
          name: "test source",
          appGuid: app.guid,
        })
      ).rejects.toThrow(/app .* not ready/);

      await app.destroy();
    });

    test("a source requires a plugin connection", async () => {
      await expect(
        Source.create({
          type: "missing-source",
          name: "test source",
          appGuid: app.guid,
        })
      ).rejects.toThrow(
        /cannot find an import connection for a source of missing-source/
      );
    });

    test("a new source will have a '' name", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        appGuid: app.guid,
      });

      expect(source.name).toBe("");

      await source.destroy();
    });

    test("draft sources can share the same name, but not with ready sources", async () => {
      const sourceOne = await Source.create({
        type: "test-plugin-import",
        appGuid: app.guid,
      });
      const sourceTwo = await Source.create({
        type: "test-plugin-import",
        appGuid: app.guid,
      });

      expect(sourceOne.name).toBe("");
      expect(sourceTwo.name).toBe("");

      await sourceOne.update({ name: "name" });
      await sourceOne.setOptions({ table: "abc123" });
      await sourceOne.setMapping({ id: "userId" });
      await sourceOne.update({ state: "ready" });

      await expect(sourceTwo.update({ name: "name" })).rejects.toThrow(
        /name "name" is already in use/
      );

      await sourceOne.destroy();
      await sourceTwo.destroy();
    });

    test("a source cannot be changed to to the ready state if there are missing required options", async () => {
      const source = await helper.factories.source();
      await expect(source.update({ state: "ready" })).rejects.toThrow(
        /table is required/
      );
      await source.destroy();
    });

    test("a source cannot be changed to to the ready state if there is not mapping", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "abc" });
      await expect(source.update({ state: "ready" })).rejects.toThrow(
        /mapping not set/
      );
      await source.destroy();
    });

    test("a source that is ready cannot move back to draft", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "abc" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      await expect(source.update({ state: "draft" })).rejects.toThrow(
        /cannot transition source state from ready to draft/
      );
      await source.destroy();
    });

    test("a source cannot be created in the ready state with missing required options", async () => {
      const source = Source.build({
        appGuid: app.guid,
        name: "no opts",
        type: "test-plugin-import",
        state: "ready",
      });

      await expect(source.save()).rejects.toThrow(
        /table is required for a source of type test-plugin-import/
      );
    });

    test("a source with a schedule cannot be deleted", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const schedule = await helper.factories.schedule(source);
      await expect(source.destroy()).rejects.toThrow(
        /cannot delete a source that has a schedule/
      );

      await schedule.destroy();
      await source.destroy();
    });

    test("a source with a property cannot be deleted", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const rule = await Property.create({
        key: "thing",
        type: "string",
        sourceGuid: source.guid,
      });

      await expect(source.destroy()).rejects.toThrow(
        /cannot delete a source that has a property/
      );

      await rule.destroy();
      await source.destroy();
    });

    test("options can be set and retrieved", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });

      await source.setOptions({
        table: "users",
      });
      const options = await source.getOptions();
      expect(options).toEqual({
        table: "users",
      });

      await source.destroy();
    });

    test("providing invalid options will result in an error", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });

      await expect(source.setOptions({ notThing: "abc" })).rejects.toThrow(
        /table is required for a source of type test-plugin-import/
      );

      await expect(
        source.setOptions({
          table: "abc",
          otherThing: "false",
        })
      ).rejects.toThrow(
        /otherThing is not an option for a test-plugin-import source/
      );

      await source.destroy();
    });

    test("deleting a source deleted the options", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });

      await source.setOptions({ table: "abc" });

      await source.destroy(); // doesn't throw

      const optionsCount = await Option.count({
        where: { ownerGuid: source.guid },
      });
      expect(optionsCount).toBe(0);
    });
  });

  describe("options from environment variables", () => {
    beforeAll(() => {
      process.env.GROUPAROO_OPTION__SOURCE__TEST_OPTION = "abc123";
    });

    test("options can be set from an environment variable but not stored in the database", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });

      await source.setOptions({ table: "TEST_OPTION" });
      const options = await source.getOptions();
      expect(options.table).toBe("abc123");

      const option = await Option.findOne({
        where: { ownerGuid: source.guid },
      });
      expect(option.value).toBe("TEST_OPTION");

      await source.destroy();
    });

    afterAll(() => {
      process.env.GROUPAROO_OPTION__SOURCE__TEST_OPTION = undefined;
    });
  });

  describe("sourcePreview", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("a source with no options will get an empty array", async () => {
      const preview = await source.sourcePreview();
      expect(preview).toEqual([]);
    });

    test("when options are set, the preview will return data", async () => {
      await source.setOptions({ table: "users" });
      const preview = await source.sourcePreview();
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });

    test("preview can be run with arbitrary options", async () => {
      const preview = await source.sourcePreview({ table: "something else" });
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });
  });

  describe("sourceConnectionOptions", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("a source can return the options from the plugin", async () => {
      const connectionOptions = await source.sourceConnectionOptions();
      expect(connectionOptions).toEqual({
        table: { options: ["users"], type: "list" },
      });
    });

    test("partial options will be passed to sourceConnectionOptions", async () => {
      const connectionOptions = await source.sourceConnectionOptions({
        options: "true",
      });
      expect(connectionOptions).toEqual({
        table: { options: ["users"], type: "list" },
        receivedOptions: { type: "string", options: ["true"] },
      });
    });

    test("a plugin with a profiles method can have a schedule", async () => {
      const scheduleAvailable = await source.scheduleAvailable();
      expect(scheduleAvailable).toBe(true);
    });
  });

  describe("mapping", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("mappings must map to properties", async () => {
      await source.setMapping({
        local_user_id: "userId",
      });

      const mapping = await source.getMapping();
      expect(mapping).toEqual({
        local_user_id: "userId",
      });
    });

    test("it throws an error if the mapping does not include the key of a profilePropertyRyle", async () => {
      await expect(
        source.setMapping({
          local_user_id: "TheUserID",
        })
      ).rejects.toThrow(/cannot find property TheUserID/);
    });
  });

  describe("bootstrapUniqueProperty", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "some table" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("it can remove identifying from other properties", async () => {
      const rule = await Property.findOne({
        where: { identifying: true },
      });
      rule.identifying = false;
      await rule.save();
    });

    test("bootstrapUniqueProperty will create a new property", async () => {
      const rule = await source.bootstrapUniqueProperty(
        "uniqueId",
        "integer",
        "id"
      );

      expect(rule.key).toBe("uniqueId");
      expect(rule.type).toBe("integer");
      expect(rule.isArray).toBe(false);
      expect(rule.identifying).toBe(true);
      expect(rule.state).toBe("ready");
      expect(rule.unique).toBe(true);

      await rule.destroy();
    });

    test("the plugin provides uniquePropertyBootstrapOptions", async () => {
      const rule = await Property.findOne({
        where: { key: "userId" },
      });
      const options = await rule.getOptions();
      expect(options).toEqual({ column: "__default_column" }); // from the plugin; see specHelper.ts
    });

    test("bootstrapUniqueProperty will fail if the rule cannot be created", async () => {
      await expect(
        source.bootstrapUniqueProperty("userId", "integer", "id")
      ).rejects.toThrow(/already in use/);
    });
  });

  describe("import", () => {
    let source: Source;
    let profile: Profile;
    let lnameRule: Property;
    let originalProfilePropertyMethod;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      lnameRule = await Property.create({
        key: "__fname",
        sourceGuid: source.guid,
        type: "string",
      });

      originalProfilePropertyMethod = api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty;
    });

    afterAll(async () => {
      await profile.destroy();
      await lnameRule.destroy();
      await source.destroy();
    });

    afterEach(() => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = originalProfilePropertyMethod;
    });

    test("it will not import a draft rule (single)", async () => {
      expect(lnameRule.state).toBe("draft");
      const property = await source.importProfileProperty(profile, lnameRule);
      expect(property).toBeUndefined();
    });

    test("it will not import a draft rule (batch)", async () => {
      expect(lnameRule.state).toBe("draft");
      const properties = await source.import(profile);
      expect(properties).toEqual({});
    });

    test("it can import one profile property for a profile", async () => {
      await lnameRule.setOptions({ column: "lname" });
      await lnameRule.update({ state: "ready" });
      const property = await source.importProfileProperty(profile, lnameRule);
      expect(property).toEqual("...mario");
    });

    test("it can import one profile property for a profile with an override of the property options", async () => {
      await expect(
        source.importProfileProperty(profile, lnameRule, {
          something: "else",
        })
      ).rejects.toThrow(/column is required/);

      await source.importProfileProperty(profile, lnameRule, {
        column: "abc",
      }); // does not throw
    });

    test("it can import one profile property for a profile with an override of the property filters", async () => {
      await source.importProfileProperty(profile, lnameRule, null, []); // does not throw
    });

    test("it can import all profile properties for this source, mapped to the keys properly", async () => {
      const properties = await source.import(profile);
      expect(properties).toEqual({ __fname: "...mario" });
    });

    test("if importing returned null, it will not be included in the response hash to set profile properties", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        return null;
      };

      const properties = await source.import(profile);
      expect(properties).toEqual({});
    });

    test("if importing returned undefined, it will not be included in the response hash to set profile properties", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        return undefined;
      };

      const properties = await source.import(profile);
      expect(properties).toEqual({});
    });
  });

  describe("parameterizedOptions", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });

      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    it("replaces mustache template strings with variables", async () => {
      await source.setOptions({
        table: "{{ previousRun.createdAt.sql }}",
      });
      await source.setMapping({ id: "userId" });

      const schedule = await Schedule.create({
        sourceGuid: source.guid,
        name: "test schedule",
      });
      await schedule.setOptions({ maxColumn: "abc" });
      await schedule.update({ state: "ready" });

      const previousRun = await helper.factories.run(schedule, {
        createdAt: new Date(0),
        profilesReadCount: 1,
        state: "complete",
      });
      const run = await helper.factories.run(schedule);

      const parameterizedOptions = await source.parameterizedOptions(run);
      expect(parameterizedOptions.table).toBe(`1970-01-01 00:00:00`);

      await schedule.destroy();
    });
  });
});
