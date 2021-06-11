import fs from "fs";
import glob from "glob";
import path from "path";
import os from "os";
import faker from "faker";
import { helper } from "@grouparoo/spec-helper";

import { App } from "../../src/models/App";
import { Destination } from "../../src/models/Destination";
import { Group } from "../../src/models/Group";
import { Property } from "../../src/models/Property";
import { Schedule } from "../../src/models/Schedule";
import { Source } from "../../src/models/Source";
import { Profile } from "../../src/models/Profile";

import { ConfigWriter } from "../../src/modules/configWriter";
import { MappingHelper } from "../../src/modules/mappingHelper";

import { ConfigurationObject } from "../../src/classes/codeConfig";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configWriter`;
const configFilePattern = path.join(configDir, "**/*.{json,js}");

process.env.GROUPAROO_CONFIG_DIR = configDir;

describe("modules/configWriter", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
  });

  // ---------------------------------------- | ConfigWriter.generateId()

  describe("generateId()", () => {
    test("it returns a slugified, lowercase name", () => {
      let res = ConfigWriter.generateId("Hello World");
      expect(res).toEqual("hello_world");
      res = ConfigWriter.generateId("!@#$%^&*(){}[]:\";'<>,./? Hello  World");
      expect(res).toEqual("hello_world");
    });
    test("it returns undefined when no name is passed", () => {
      expect(ConfigWriter.generateId(null)).toBeUndefined();
    });
    test("it returns undefined when name is an empty string", () => {
      expect(ConfigWriter.generateId("")).toBeUndefined();
    });
    test("it returns undefined when name does not have url-friendly characters", () => {
      expect(ConfigWriter.generateId("!")).toBeUndefined();
    });
    test("it preserves hyphens", () => {
      expect(ConfigWriter.generateId("hello-world")).toEqual("hello-world");
    });
    test("it replaces multiple word boundaries with a single underscore", () => {
      expect(ConfigWriter.generateId("Hello  - World")).toEqual("hello_world");
    });
  });

  // ---------------------------------------- | ConfigWriter.generateFilePath()

  describe("generateFilePath()", () => {
    afterEach(async () => {
      await App.destroy({ truncate: true });
    });

    test.skip("provides a url-friendly path from the name in the object", async () => {
      const app: App = await helper.factories.app({ name: "HELLO @#$ WORLD" });
      const configObject = await app.getConfigObject();
      const res = ConfigWriter.generateFilePath(configObject);
      expect(res).toEqual("hello_world.json");
    });
    test.skip("adds a prefix, if specified", async () => {
      const app: App = await helper.factories.app({ name: "HELLO @#$ WORLD" });
      const configObject = await app.getConfigObject();
      const res = ConfigWriter.generateFilePath(configObject, "apps");
      expect(res).toEqual("apps/hello_world.json");
    });
  });

  // ---------------------------------------- | ConfigWriter.run()

  describe("run()", () => {
    afterEach(async () => {
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Property.destroy({ truncate: true });

      const files = glob.sync(configFilePattern);
      for (let file of files) fs.rmSync(file);
    });

    test.skip("does nothing unless in cli:config mode", async () => {
      const app: App = await helper.factories.app();
      const appFilePath = path.join(
        configDir,
        `apps/${app.getConfigId()}.json`
      );

      process.env.GROUPAROO_RUN_MODE = "x";
      await ConfigWriter.run();
      let files = glob.sync(configFilePattern);
      expect(files).toEqual([]);

      process.env.GROUPAROO_RUN_MODE = "cli:config";
      await ConfigWriter.run();
      files = glob.sync(configFilePattern);
      expect(files).toEqual([appFilePath]);
    });

    test.skip("writes a file for each object", async () => {
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app);
      await source.setOptions({ table: "test-table-04" });
      await source.bootstrapUniqueProperty("userId_04", "integer", "id");
      await source.setMapping({ id: "userId_04" });
      await source.update({ state: "ready" });
      const property: Property = await Property.findOne();

      await ConfigWriter.run();

      const files = glob.sync(configFilePattern);
      const expConfigFiles = [
        `apps/${app.getConfigId()}.json`,
        `sources/${source.getConfigId()}.json`,
        `properties/${property.getConfigId()}.json`,
      ].map((configFilePath) => path.join(configDir, configFilePath));

      // Verify all expected files exist.
      expect(files.sort()).toEqual(expConfigFiles.sort());
      // Check the app's config file contents
      const appConfig = JSON.parse(
        fs.readFileSync(expConfigFiles[0]).toString()
      );
      expect(appConfig).toEqual(await app.getConfigObject());
    });

    test.skip("does not write objects that are locked", async () => {
      const app: App = await helper.factories.app();
      await app.update({ locked: "config:test" });
      await ConfigWriter.run();
      let files = glob.sync(configFilePattern);
      expect(files).toEqual([]);
    });

    test.skip("deletes an object's file after the record is deleted", async () => {
      const app: App = await helper.factories.app();
      await ConfigWriter.run();
      let files = glob.sync(configFilePattern);
      expect(files).toEqual([
        path.join(configDir, `apps/${app.getConfigId()}.json`),
      ]);

      await app.destroy();
      await ConfigWriter.run();
      files = glob.sync(configFilePattern);
      expect(files).toEqual([]);
    });

    test.skip("does not delete or duplicate locked (JS) files", async () => {
      const app: App = await helper.factories.app();
      await app.update({ locked: "config:test" });
      const configObject = await app.getConfigObject();
      // Create a dummy file just to ensure it is not deleted.
      const configFilePath = path.join(
        configDir,
        `apps/${app.getConfigId()}.js`
      );
      fs.mkdirSync(path.dirname(configFilePath), { recursive: true });
      fs.writeFileSync(configFilePath, "");
      // Check to make sure the file is there.
      let files = glob.sync(configFilePattern);
      expect(files).toEqual([configFilePath]);
      // Store the reference to the file (mimics what configLoader does).
      await ConfigWriter.cacheConfigFile({
        absFilePath: configFilePath,
        objects: [configObject],
      });
      // Run the writer, which calls deleteFiles()
      await ConfigWriter.run();
      files = glob.sync(configFilePattern);
      expect(files).toEqual([configFilePath]);
    });
  });

  // ---------------------------------------- | ConfigWriter -> File Cache

  describe("File Cache", () => {
    let app: App;

    beforeEach(async () => {
      app = await helper.factories.app();
    });

    afterEach(async () => {
      await App.destroy({ truncate: true });
      ConfigWriter.resetConfigFileCache();
    });

    test.skip("stores a cache of config objects", async () => {
      const configObject = await app.getConfigObject();
      const absFilePath = path.join(
        configDir,
        `apps/${app.getConfigId()}.json`
      );
      await ConfigWriter.cacheConfigFile({
        absFilePath,
        objects: [configObject],
      });

      const cache = await ConfigWriter.getConfigFileCache();
      expect(cache.length).toEqual(1);
      expect(cache[0].absFilePath).toEqual(absFilePath);
      expect(cache[0].objects[0]).toEqual(configObject);
    });

    test.skip("does not store locked files", async () => {
      const configObject = await app.getConfigObject();
      const absFilePath = path.join(configDir, `apps/${app.getConfigId()}.js`);
      const res = await ConfigWriter.cacheConfigFile({
        absFilePath,
        objects: [configObject],
      });
      expect(res).toEqual(null);

      const cache = await ConfigWriter.getConfigFileCache();
      expect(cache.length).toEqual(0);
    });

    test.skip("is reset-able", async () => {
      const configObject = await app.getConfigObject();
      const absFilePath = path.join(
        configDir,
        `apps/${app.getConfigId()}.json`
      );
      await ConfigWriter.cacheConfigFile({
        absFilePath,
        objects: [configObject],
      });

      let cache = await ConfigWriter.getConfigFileCache();
      expect(cache.length).toEqual(1);

      ConfigWriter.resetConfigFileCache();
      cache = await ConfigWriter.getConfigFileCache();
      expect(cache.length).toEqual(0);
    });

    describe("getLockKey()", () => {
      let configObject: ConfigurationObject;

      beforeEach(async () => {
        configObject = await app.getConfigObject();
      });

      test.skip('returns "config:writer" for JS files (LOCKED)', async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:config";
        const absFilePath = path.join(
          configDir,
          `apps/${app.getConfigId()}.js`
        );
        await ConfigWriter.cacheConfigFile({
          absFilePath,
          objects: [configObject],
        });
        expect(ConfigWriter.getLockKey(configObject)).toEqual("config:writer");
        process.env.GROUPAROO_RUN_MODE = undefined;
      });
      test.skip("returns null for JSON files (UNLOCKED)", async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:config";
        const absFilePath = path.join(
          configDir,
          `apps/${app.getConfigId()}.json`
        );
        await ConfigWriter.cacheConfigFile({
          absFilePath,
          objects: [configObject],
        });
        expect(ConfigWriter.getLockKey(configObject)).toEqual(null);
        process.env.GROUPAROO_RUN_MODE = undefined;
      });
      test.skip('returns "code:config" when in start mode', async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:start";
        expect(ConfigWriter.getLockKey(configObject)).toEqual("config:code");
        process.env.GROUPAROO_RUN_MODE = undefined;
      });
    });
  });

  // ---------------------------------------- | ConfigWriter.getConfigObjects()

  describe("getConfigObjects()", () => {
    afterEach(async () => {
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Property.destroy({ truncate: true });
    });

    test.skip("returns an empty array when there are no objects", async () => {
      const configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([]);
    });
    test.skip("skips objects without an id", async () => {
      let app: App = await helper.factories.app();
      let configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([
        {
          filePath: `apps/${app.getConfigId()}.json`,
          object: await app.getConfigObject(),
        },
      ]);
      app.name = "$";
      await app.save();
      configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([]);
    });
    test.skip("lists the formatted config objects, ready to be written", async () => {
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app);
      await source.setOptions({ table: "test-table-03" });
      await source.bootstrapUniqueProperty("userId_03", "integer", "id");
      await source.setMapping({ id: "userId_03" });
      await source.update({ state: "ready" });
      const property: Property = await Property.findOne();
      const profile: Profile = await helper.factories.profile();
      const profile2: Profile = await helper.factories.profile();

      const configObjects = await ConfigWriter.getConfigObjects();

      expect(configObjects).toEqual([
        {
          filePath: `apps/${app.getConfigId()}.json`,
          object: await app.getConfigObject(),
        },
        {
          filePath: `sources/${source.getConfigId()}.json`,
          object: await source.getConfigObject(),
        },
        {
          filePath: `properties/${property.getConfigId()}.json`,
          object: await property.getConfigObject(),
        },
        {
          filePath: `development/profiles.json`,
          object: [
            await profile.getConfigObject(),
            await profile2.getConfigObject(),
          ],
        },
      ]);
    });
  });

  // ---------------------------------------- | Model Config Builders

  describe("Model Config Providers", () => {
    let source: Source;
    let property: Property;
    let group: Group;

    let sourceOptions = { table: "test-table-02" };
    let bootstrapPropertyCol: string = faker.database.column();
    let bootstrapPropertyKey: string = faker.random.alphaNumeric(12);
    let bootstrapPropertyId: string = faker.datatype.uuid();
    let propertyKey: string = faker.random.alphaNumeric(8);
    let propertyCol: string = faker.database.column();

    beforeEach(async () => {
      source = await helper.factories.source();
      await source.setOptions(sourceOptions);
      await source.bootstrapUniqueProperty(
        bootstrapPropertyKey,
        "integer",
        bootstrapPropertyCol,
        bootstrapPropertyId
      );
      await source.setMapping({ [bootstrapPropertyCol]: bootstrapPropertyKey });
      await source.update({ state: "ready" });

      property = await helper.factories.property(
        source,
        { key: propertyKey },
        { column: propertyCol }
      );

      group = await helper.factories.group({ type: "calculated" });
      await group.setRules([
        { key: propertyKey, match: "nobody", operation: { op: "eq" } },
      ]);
    });

    afterEach(async () => {
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Schedule.destroy({ truncate: true });
      await Property.destroy({ truncate: true });
      await Destination.destroy({ truncate: true });
      await Group.destroy({ truncate: true });
    });

    test.skip("apps can provide their config objects", async () => {
      const app: App = await helper.factories.app();
      const config = await app.getConfigObject();

      expect(config.id).toBeTruthy();
      const options = await app.$get("__options");
      expect(options.length).toEqual(1);

      const { name, type } = app;
      expect(config).toEqual({
        class: "App",
        id: app.getConfigId(),
        name,
        type,
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
      });
    });

    test.skip("apps without a name will not provide a config object", async () => {
      const app: App = await helper.factories.app({ name: undefined });
      const config = await app.getConfigObject();
      expect(config).toBeUndefined();
    });

    test.skip("sources can provide their config objects", async () => {
      const config = await source.getConfigObject();

      expect(config.id).toBeTruthy();

      const { name, type } = source;
      const app = await source.$get("app");
      const options = await source.$get("__options");
      expect(options.length).toEqual(1);
      const mappingProperty = await Property.findByPk(bootstrapPropertyId);

      expect(config).toEqual({
        class: "Source",
        id: source.getConfigId(),
        name,
        type,
        appId: app.getConfigId(),
        mapping: { [bootstrapPropertyCol]: mappingProperty.getConfigId() },
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
      });
    });

    test.skip("sources without a name will not provide a config object", async () => {
      const source: Source = await helper.factories.source(undefined, {
        name: undefined,
      });
      const config = await source.getConfigObject();
      expect(config).toBeUndefined();
    });

    test.skip("sources will also bring their own schedule", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      const config = await source.getConfigObject();
      const scheduleConfig = await schedule.getConfigObject();

      const { name, type } = source;
      const app = await source.$get("app");
      const options = await source.getOptions();
      const mapping = await MappingHelper.getConfigMapping(source);

      expect(config.length).toEqual(2);
      expect(config[0]).toEqual({
        class: "Source",
        id: source.getConfigId(),
        name,
        type,
        appId: app.getConfigId(),
        mapping,
        options,
      });
      expect(config[1]).toEqual(scheduleConfig);
    });

    test.skip("schedules can provide their config objects", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      const config = await schedule.getConfigObject();

      expect(config.id).toBeTruthy();

      const { name, recurring, recurringFrequency } = schedule;
      const options = await schedule.$get("__options");
      expect(options.length).toEqual(1);

      expect(config).toEqual({
        class: "Schedule",
        id: schedule.getConfigId(),
        name,
        sourceId: source.getConfigId(),
        recurring,
        recurringFrequency,
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
      });
    });

    test.skip("schedules without a name will not provide a config object", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      schedule.name = undefined;
      // There's no need to save here because getConfigObject is reading the
      // attributes from memory.
      const config = await schedule.getConfigObject();
      expect(config).toBeUndefined();
    });

    test.skip("sources with a nameless schedule provide a single object", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "test-table-05" });
      await source.bootstrapUniqueProperty("uId05", "integer", "id", "uid05");
      await source.setMapping({ id: "uId05" });
      await source.update({ state: "ready" });
      property = await helper.factories.property(
        source,
        { key: "firstName05" },
        { column: "firstName05" }
      );
      await helper.factories.schedule(source, { name: "!" });
      const config = await source.getConfigObject();

      const { name, type } = source;
      const app = await source.$get("app");
      const options = await source.getOptions();
      const mapping = await MappingHelper.getConfigMapping(source);

      expect(config).toEqual({
        class: "Source",
        id: source.getConfigId(),
        name,
        type,
        appId: app.getConfigId(),
        mapping,
        options,
      });
    });

    test.skip("properties can provide their config objects", async () => {
      const filterObj = { key: "id", match: "0", op: "greater than" };
      await property.setFilters([filterObj]);

      const config = await property.getConfigObject();
      expect(config.id).toBeTruthy();

      const { key, type, unique, identifying, isArray } = property;

      const options = await property.$get("__options");
      expect(options.length).toEqual(1);

      expect(config).toEqual({
        class: "Property",
        id: property.getConfigId(),
        type,
        name: key,
        sourceId: source.getConfigId(),
        unique,
        identifying,
        isArray,
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
        filters: [
          {
            ...filterObj,
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ],
      });
    });

    test.skip("properties without a name will not provide a config object", async () => {
      property.key = undefined;
      const config = await property.getConfigObject();
      expect(config).toBeUndefined();
    });

    test.skip("groups can provide their config objects", async () => {
      const config = await group.getConfigObject();

      expect(config.id).toBeTruthy();

      const { name, type } = group;

      expect(config).toEqual({
        class: "Group",
        id: group.getConfigId(),
        type,
        name,
        rules: [
          {
            propertyId: property.getConfigId(),
            match: "nobody",
            operation: { op: "eq" },
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ],
      });
    });

    test.skip("groups without a name will not provide a config object", async () => {
      group.name = undefined;
      const config = await group.getConfigObject();
      expect(config).toBeUndefined();
    });

    test.skip("destinations can provide their config objects", async () => {
      const destination: Destination = await helper.factories.destination(
        undefined,
        { groupId: group.id }
      );
      const app: App = await destination.$get("app");

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = "My Dest Tag";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      await destination.setMapping({ "primary-id": bootstrapPropertyKey });
      const mappingProperty = await Property.findByPk(bootstrapPropertyId);
      await MappingHelper.getConfigMapping(destination);

      const config = await destination.getConfigObject();

      const { name, type, syncMode } = destination;

      const options = await destination.$get("__options");
      expect(options.length).toEqual(1);

      expect(config.id).toBeTruthy();
      expect(config).toEqual({
        class: "Destination",
        id: destination.getConfigId(),
        name,
        type,
        appId: app.getConfigId(),
        groupId: group.getConfigId(),
        syncMode,
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
        mapping: { "primary-id": mappingProperty.getConfigId() },
        destinationGroupMemberships: {
          "My Dest Tag": group.getConfigId(),
        },
      });
    });

    test.skip("destinations without a name will not provide a config object", async () => {
      const destination: Destination = await helper.factories.destination(
        undefined,
        { groupId: group.id }
      );
      destination.name = undefined;
      const config = await destination.getConfigObject();
      expect(config).toBeUndefined();
    });

    test.skip("profiles can provide their config objects", async () => {
      const profile: Profile = await helper.factories.profile();
      const properties = { [bootstrapPropertyId]: [12] };

      await profile.addOrUpdateProperties({
        ...properties,
        [property.id]: ["some_value"],
      });

      const config = await profile.getConfigObject();
      expect(config.id).toBeTruthy();
      expect(config).toEqual({
        class: "Profile",
        id: profile.id,
        properties,
      });
    });
  });
});
