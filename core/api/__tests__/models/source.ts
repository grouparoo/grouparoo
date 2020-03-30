import { helper } from "./../utils/specHelper";
import { Source } from "./../../src/models/Source";
import { App } from "./../../src/models/App";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { Log } from "./../../src/models/Log";
import { Profile } from "./../../src/models/Profile";
import { Schedule } from "./../../src/models/Schedule";
import { Option } from "./../../src/models/Option";

let actionhero, api;
let app: App;

describe("models/source", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    app = await helper.factories.app();
    await helper.factories.profilePropertyRules();
  });

  test("creating a source creates a log entry", async () => {
    const source = await Source.create({
      type: "test-plugin-import",
      name: "test source",
      appGuid: app.guid,
    });

    const log = await Log.findOne({
      where: { topic: "source", verb: "create", ownerGuid: source.guid },
    });
    expect(log.message).toBe(`source "${source.name}" created`);
    await source.destroy();
  });

  describe("validations", () => {
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

    test("a source with a schedule cannot be deleted", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });

      const schedule = await helper.factories.schedule(source);
      await expect(source.destroy()).rejects.toThrow(
        /cannot delete a source that has a schedule/
      );

      await schedule.destroy();
      await source.destroy();
    });

    test("a source with a profile property rule cannot be deleted", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });

      const rule = await ProfilePropertyRule.create({
        key: "thing",
        type: "string",
        sourceGuid: source.guid,
      });

      await expect(source.destroy()).rejects.toThrow(
        /cannot delete a source that has profile property rules/
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

    test("a plugin with a profiles method can have a schedule", async () => {
      const scheduleAvailable = source.scheduleAvailable();
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

    test("mappings must map to profilePropertyRules", async () => {
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
      ).rejects.toThrow(/cannot find profile property rule TheUserID/);
    });
  });

  describe("import", () => {
    let source: Source;
    let profile: Profile;
    let lnameRule: ProfilePropertyRule;
    let originalProfilePropertyMethod;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appGuid: app.guid,
      });
      await source.setOptions({ table: "test table" });

      profile = await helper.factories.profile();

      lnameRule = await ProfilePropertyRule.create({
        key: "__fname",
        sourceGuid: source.guid,
        type: "string",
        passive: false,
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

    test("it can import one profile property for a profile", async () => {
      const property = await source.importProfileProperty(profile, lnameRule);
      expect(property).toEqual("mario...");
    });

    test("it can import one profile property for a profile with an override of the profile property rule options", async () => {
      const property = await source.importProfileProperty(profile, lnameRule, {
        something: "else",
      });
      expect(property).toEqual("mario...");
    });

    test("it can import all profile property rules for this source, mapped to the keys properly", async () => {
      const properties = await source.import(profile);
      expect(properties).toEqual({ __fname: "mario..." });
    });

    test("when returning only one property, the row mapping does not matter (object)", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        return { something: "last name" };
      };

      const properties = await source.import(profile);
      expect(properties).toEqual({ __fname: "last name" });
    });

    test("when returning only one property, the row mapping does not matter (array)", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        return ["last name"];
      };

      const properties = await source.import(profile);
      expect(properties).toEqual({ __fname: "last name" });
    });

    test("when returning only one property, the row mapping does not matter (literal)", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        return "last name";
      };

      const properties = await source.import(profile);
      expect(properties).toEqual({ __fname: "last name" });
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

    test("when returning multiple properties that do not match the rule keys, an error will be thrown", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        return { a: 1, b: 2 };
      };

      await expect(source.import(profile)).rejects.toThrow(
        /source response contains multiple properties but none match __fname/
      );
    });

    test("it will check properties for each profilePropertyRule with a query and try to reuse query responses", async () => {
      let counter = 0;
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.profileProperty = async () => {
        counter++;
        return "value";
      };

      const newRule = await ProfilePropertyRule.create({
        key: "__newProp",
        sourceGuid: source.guid,
        type: "string",
        passive: false,
      });

      counter = 0; // it was incremented to validate the new rule

      const properties = await source.import(profile);
      expect(properties).toEqual({ __fname: "value", __newProp: "value" });
      expect(counter).toBe(1);

      await newRule.destroy();
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
    });

    afterAll(async () => {
      await source.destroy();
    });

    it("replaces mustache template strings with variables", async () => {
      await source.setOptions({
        table: "{{ previousRun.createdAt.sql }}",
      });

      const schedule = await Schedule.create({
        sourceGuid: source.guid,
        name: "test schedule",
      });

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
