import fs from "fs";
import glob from "glob";
import path from "path";
import os from "os";
import faker from "faker";
import * as uuid from "uuid";
import { helper } from "@grouparoo/spec-helper";

import { App } from "../../src/models/App";
import { Destination } from "../../src/models/Destination";
import { Group } from "../../src/models/Group";
import { Property } from "../../src/models/Property";
import { Schedule } from "../../src/models/Schedule";
import { Setting } from "../../src/models/Setting";
import { Source } from "../../src/models/Source";
import { GrouparooModel } from "../../src/models/GrouparooModel";
import { GrouparooRecord } from "../../src/models/GrouparooRecord";

import { ConfigWriter } from "../../src/modules/configWriter";
import { MappingHelper } from "../../src/modules/mappingHelper";

import {
  AnyConfigurationObject,
  ScheduleConfigurationObject,
  SourceConfigurationObject,
} from "../../src/classes/codeConfig";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configWriter`;
const configFilePattern = path.join(configDir, "**/*.{json,js}");

process.env.GROUPAROO_CONFIG_DIR = configDir;

const getClusterNameSetting = async (): Promise<Setting> => {
  const setting = await Setting.findOne({
    where: { key: "cluster-name" },
  });
  return setting;
};

const changeClusterNameSetting = async () => {
  const setting: Setting = await getClusterNameSetting();
  await setting.update({ value: faker.lorem.words(3) });
  return setting;
};

const resetClusterNameSetting = async () => {
  const setting: Setting = await getClusterNameSetting();
  await setting.update({ value: setting.defaultValue });
  return setting;
};

describe("modules/configWriter", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

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
    test("it throws an error when name does not have url-friendly characters", () => {
      expect(() => {
        ConfigWriter.generateId("!");
      }).toThrow("Could not generate ID from name.");
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

    test("provides a url-friendly path from the name in the object", async () => {
      const app: App = await helper.factories.app({ name: "HELLO @#$ WORLD" });
      const configObject = await app.getConfigObject();
      const res = ConfigWriter.generateFilePath(configObject);
      expect(res).toEqual("hello_world.json");
    });
    test("returns undefined if the object has no id value", async () => {
      const res = ConfigWriter.generateFilePath({ name: "Hello World" });
      expect(res).toBeUndefined();
    });
    test("supports objects as arrays, and uses the first one to build the name", async () => {
      const app: App = await helper.factories.app({ name: "HELLO @#$ WORLD" });
      const configObject = await app.getConfigObject();
      const res = ConfigWriter.generateFilePath([configObject]);
      expect(res).toEqual("hello_world.json");
    });
    test("adds a prefix, if specified", async () => {
      const app: App = await helper.factories.app({ name: "HELLO @#$ WORLD" });
      const configObject = await app.getConfigObject();
      const res = ConfigWriter.generateFilePath(configObject, "apps");
      expect(res).toEqual("apps/hello_world.json");
    });
  });

  // ---------------------------------------- | ConfigWriter.run()

  describe("run()", () => {
    afterEach(async () => {
      await GrouparooModel.destroy({ truncate: true });
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Property.destroy({ truncate: true });

      const files = glob.sync(configFilePattern);
      for (let file of files) fs.rmSync(file);

      ConfigWriter.resetConfigFileCache();
    });

    test("does nothing unless in cli:config mode", async () => {
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
      expect(files).toContain(appFilePath);
    });

    test("writes a file for each object", async () => {
      const model: GrouparooModel = await GrouparooModel.create({
        type: "profile",
        name: "Profiles",
        id: "mod_" + uuid.v4(),
      });
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app, {
        modelId: model.id,
      });
      await source.setOptions({ table: "test-table-04" });
      await source.bootstrapUniqueProperty({
        key: "userId_04",
        type: "integer",
        mappedColumn: "id",
      });
      await source.setMapping({ id: "userId_04" });
      await source.update({ state: "ready" });
      const property: Property = await Property.findOne();

      await ConfigWriter.run();

      const files = glob.sync(configFilePattern);
      const expConfigFiles = [
        `models/${model.getConfigId()}.json`,
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

      const sourceConfig = JSON.parse(
        fs.readFileSync(
          expConfigFiles.find((f) => f.includes("sources")),
          { encoding: "utf8" }
        )
      );
      expect(sourceConfig.modelId).toBe("profiles");
    });

    test("does not write objects that are locked", async () => {
      const app: App = await helper.factories.app();
      await app.update({ locked: "config:test" });
      await ConfigWriter.run();
      let files = glob.sync(configFilePattern);
      expect(files).toEqual([]);
    });

    test("deletes an object's file after the record is deleted", async () => {
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

    test("does not delete or duplicate locked (JS) files", async () => {
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

    test("does not delete files when hitting an error while retrieving objects", async () => {
      const app: App = await helper.factories.app();
      await ConfigWriter.run();
      let files = glob.sync(configFilePattern);
      const filename = `${app.getConfigId()}.json`;
      expect(files).toEqual([path.join(configDir, `apps/${filename}`)]);

      await app.update({ name: "$$" }, {});
      expect(app.name).toEqual("$$");
      await expect(ConfigWriter.run()).rejects.toThrow(
        "Could not generate ID from name."
      );
      files = glob.sync(configFilePattern);
      expect(files).toEqual([path.join(configDir, `apps/${filename}`)]);
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
      await resetClusterNameSetting();
      ConfigWriter.resetConfigFileCache();
    });

    test("stores a cache of config objects", async () => {
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

    test("does not store locked files", async () => {
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

    test("is reset-able", async () => {
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
      let configObject: AnyConfigurationObject;

      beforeEach(async () => {
        configObject = await app.getConfigObject();
      });

      afterEach(() => {
        process.env.GROUPAROO_RUN_MODE = undefined;
      });

      test('returns "config:writer" for JS files (LOCKED)', async () => {
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
      });

      test("returns null for JSON files (UNLOCKED)", async () => {
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
      });

      test('returns "code:config" when in start mode', async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:start";
        expect(ConfigWriter.getLockKey(configObject)).toEqual("config:code");
      });
    });
  });

  // ---------------------------------------- | ConfigWriter.getConfigObjects()

  describe("getConfigObjects()", () => {
    afterEach(async () => {
      await GrouparooModel.destroy({ truncate: true });
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Property.destroy({ truncate: true });
    });

    test("returns an empty array when there are no objects", async () => {
      const configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([]);
    });
    test("skips objects without an id", async () => {
      let app: App = await helper.factories.app();
      let configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([
        {
          filePath: `apps/${app.getConfigId()}.json`,
          object: await app.getConfigObject(),
        },
      ]);
      app.name = "";
      await app.save();
      configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([]);
    });
    test("lists the formatted config objects, ready to be written", async () => {
      const model: GrouparooModel = await GrouparooModel.create({
        type: "profile",
        name: "Profiles",
        id: "mod_" + uuid.v4(),
      });
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app);
      await source.setOptions({ table: "test-table-03" });
      await source.bootstrapUniqueProperty({
        key: "userId_03",
        type: "integer",
        mappedColumn: "id",
      });
      await source.setMapping({ id: "userId_03" });
      await source.update({ state: "ready" });
      const property: Property = await Property.findOne();
      const record: GrouparooRecord = await helper.factories.record();
      const record2: GrouparooRecord = await helper.factories.record();
      const setting: Setting = await changeClusterNameSetting();

      const configObjects = await ConfigWriter.getConfigObjects();

      expect(configObjects).toEqual([
        {
          filePath: `models/${model.getConfigId()}.json`,
          object: await model.getConfigObject(),
        },
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
          filePath: `development/${model.getConfigId()}/records.json`,
          object: [
            await record.getConfigObject(),
            await record2.getConfigObject(),
          ],
        },
        {
          filePath: `settings/${setting.getConfigId()}.json`,
          object: await setting.getConfigObject(),
        },
      ]);
    });
  });

  // ---------------------------------------- | Model Config Builders

  describe("Model Config Providers", () => {
    let model: GrouparooModel;
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
      model = await GrouparooModel.create({
        type: "profile",
        name: "Profiles",
        id: "mod_" + uuid.v4(),
      });
      source = await helper.factories.source();
      await source.setOptions(sourceOptions);
      await source.bootstrapUniqueProperty({
        key: bootstrapPropertyKey,
        type: "integer",
        mappedColumn: bootstrapPropertyCol,
        id: bootstrapPropertyId,
      });
      await source.setMapping({ [bootstrapPropertyCol]: bootstrapPropertyKey });
      await source.update({ state: "ready" });

      property = await helper.factories.property(
        source,
        { key: propertyKey },
        { column: propertyCol }
      );

      group = await helper.factories.group();
      await group.setRules([
        { key: propertyKey, match: "nobody", operation: { op: "eq" } },
      ]);
    });

    afterEach(async () => {
      await GrouparooModel.destroy({ truncate: true });
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Schedule.destroy({ truncate: true });
      await Property.destroy({ truncate: true });
      await Destination.destroy({ truncate: true });
      await Group.destroy({ truncate: true });
    });

    // --- Model ---

    test("models should only humanize their ID if it matches default pattern", async () => {
      let newModel: GrouparooModel = await GrouparooModel.create({
        type: "profile",
        name: "People",
      });

      expect(newModel.getConfigId()).toEqual(
        ConfigWriter.generateId(newModel.name)
      );
      expect(newModel.getConfigId()).not.toEqual(newModel.id);

      newModel = await GrouparooModel.create({
        type: "profile",
        name: "People Again",
        id: "id-with-hyphen",
      });
      expect(newModel.id).toEqual("id-with-hyphen");
      expect(newModel.getConfigId()).not.toEqual(
        ConfigWriter.generateId(newModel.name)
      );
      expect(newModel.getConfigId()).toEqual(newModel.id);
    });

    // --- App ---

    test("apps should only humanize their ID if it matches default pattern", async () => {
      let app: App = await helper.factories.app();
      expect(app.getConfigId()).toEqual(ConfigWriter.generateId(app.name));
      expect(app.getConfigId()).not.toEqual(app.id);

      app = await helper.factories.app({ id: "hello-world" });
      expect(app.id).toEqual("hello-world");
      expect(app.getConfigId()).not.toEqual(ConfigWriter.generateId(app.name));
      expect(app.getConfigId()).toEqual(app.id);
    });

    test("apps can provide their config objects", async () => {
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

    test("apps without a name will not provide a config object", async () => {
      const app: App = await helper.factories.app({ name: undefined });
      const config = await app.getConfigObject();
      expect(config).toBeUndefined();
    });

    test("apps don't transform env vars", async () => {
      process.env.GROUPAROO_OPTION__APP__CONFIG_WRITER_ENV_VAR = "my_file_123";
      const app: App = await helper.factories.app({
        options: { fileId: "CONFIG_WRITER_ENV_VAR" },
      });
      const config = await app.getConfigObject();
      expect(config.options.fileId).toEqual("CONFIG_WRITER_ENV_VAR");
      const options = await app.getOptions();
      expect(options.fileId).toEqual("my_file_123");
    });

    // --- Source ---

    test("sources should only humanize their ID if it matches default pattern", async () => {
      let source: Source = await helper.factories.source();
      expect(source.getConfigId()).toEqual(
        ConfigWriter.generateId(source.name)
      );
      expect(source.getConfigId()).not.toEqual(source.id);

      source = await helper.factories.source(undefined, { id: "hello-world" });
      expect(source.id).toEqual("hello-world");
      expect(source.getConfigId()).not.toEqual(
        ConfigWriter.generateId(source.name)
      );
      expect(source.getConfigId()).toEqual(source.id);
    });

    test("sources can provide their config objects", async () => {
      const config =
        (await source.getConfigObject()) as SourceConfigurationObject;

      expect(config.id).toBeTruthy();

      const { name, type } = source;
      const app = await source.$get("app");
      const options = await source.$get("__options");
      expect(options.length).toEqual(1);
      const mappingProperty = await Property.findByPk(bootstrapPropertyId);

      expect(config).toEqual({
        class: "Source",
        id: source.getConfigId(),
        modelId: "profiles",
        name,
        type,
        appId: app.getConfigId(),
        mapping: { [bootstrapPropertyCol]: mappingProperty.getConfigId() },
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
      });
    });

    test("sources without a name will not provide a config object", async () => {
      const source: Source = await helper.factories.source(undefined, {
        name: undefined,
      });
      const config = await source.getConfigObject();
      expect(config).toBeUndefined();
    });

    test("sources without a mapping will not add mappings to the config object", async () => {
      const source: Source = await helper.factories.source();
      const config =
        (await source.getConfigObject()) as SourceConfigurationObject;
      expect(config.mapping).toBeUndefined();
    });

    test("sources will also bring their own schedule", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      const config = (await source.getConfigObject()) as [
        SourceConfigurationObject,
        ScheduleConfigurationObject
      ];
      const scheduleConfig = await schedule.getConfigObject();

      const { name, type } = source;
      const app = await source.$get("app");
      const options = await source.getOptions();
      const mapping = await MappingHelper.getConfigMapping(source);

      expect(config.length).toEqual(2);
      expect(config[0]).toEqual({
        class: "Source",
        id: source.getConfigId(),
        modelId: "profiles",
        name,
        type,
        appId: app.getConfigId(),
        mapping,
        options,
      });
      expect(config[1]).toEqual(scheduleConfig);
    });

    test("sources don't transform env vars", async () => {
      process.env.GROUPAROO_OPTION__SOURCE__CONFIG_WRITER_ENV_VAR =
        "my_table_123";
      await source.setOptions({ table: "CONFIG_WRITER_ENV_VAR" });
      const config =
        (await source.getConfigObject()) as SourceConfigurationObject;
      expect(config.options.table).toEqual("CONFIG_WRITER_ENV_VAR");
      const options = await source.getOptions();
      expect(options.table).toEqual("my_table_123");
    });

    // --- Schedule ---

    test("schedules should only humanize their ID if it matches default pattern", async () => {
      let schedule: Schedule = await helper.factories.schedule(source);
      expect(schedule.getConfigId()).toEqual(
        ConfigWriter.generateId(schedule.name)
      );
      expect(schedule.getConfigId()).not.toEqual(schedule.id);
      await schedule.destroy();
      await source.reload();

      schedule = await helper.factories.schedule(source, {
        id: "hello-world",
      });
      expect(schedule.id).toEqual("hello-world");
      expect(schedule.getConfigId()).not.toEqual(
        ConfigWriter.generateId(schedule.name)
      );
      expect(schedule.getConfigId()).toEqual(schedule.id);
    });

    test("schedules can provide their config objects", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      const filterObj = { key: "id", match: "0", op: "gt" };
      // @ts-ignore
      await schedule.setFilters([filterObj]);
      const config = await schedule.getConfigObject();

      expect(config.id).toBeTruthy();

      const { name, recurring, recurringFrequency, confirmRecords } = schedule;
      const options = await schedule.$get("__options");
      expect(options.length).toEqual(1);

      expect(config).toEqual({
        class: "Schedule",
        id: schedule.getConfigId(),
        name,
        sourceId: source.getConfigId(),
        recurring,
        incremental: true,
        recurringFrequency,
        confirmRecords,
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

    test("schedules without a name will not provide a config object", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      schedule.name = undefined;
      // There's no need to save here because getConfigObject is reading the
      // attributes from memory.
      const config = await schedule.getConfigObject();
      expect(config).toBeUndefined();
    });

    test("sources with a nameless schedule provide a single object", async () => {
      const model: GrouparooModel = await GrouparooModel.create({
        type: "profile",
        name: "People",
        id: "mod_" + uuid.v4(),
      });
      const app = await helper.factories.app();
      const source = await helper.factories.source(app, { modelId: model.id });
      await source.setOptions({ table: "test-table-05" });
      await source.bootstrapUniqueProperty({
        key: "uId05",
        type: "integer",
        mappedColumn: "id",
      });
      await source.setMapping({ id: "uId05" });
      await source.update({ state: "ready" });
      property = await helper.factories.property(
        source,
        { key: "firstName05" },
        { column: "firstName05" }
      );
      const schedule: Schedule = await helper.factories.schedule(source);
      await schedule.update({ name: "" }, { hooks: false });

      const config = await source.getConfigObject();

      const { name, type } = source;
      const options = await source.getOptions();
      const mapping = await MappingHelper.getConfigMapping(source);

      expect(config).toEqual({
        class: "Source",
        id: source.getConfigId(),
        modelId: "people",
        name,
        type,
        appId: app.getConfigId(),
        mapping,
        options,
      });
    });

    test("schedules don't transform env vars", async () => {
      process.env.GROUPAROO_OPTION__SCHEDULE__CONFIG_WRITER_ENV_VAR =
        faker.database.column();
      const schedule: Schedule = await helper.factories.schedule(source, {
        options: { maxColumn: "CONFIG_WRITER_ENV_VAR" },
      });
      const config = await schedule.getConfigObject();
      expect(config.options.maxColumn).toEqual("CONFIG_WRITER_ENV_VAR");
      const options = await schedule.getOptions();
      expect(options.maxColumn).toEqual(
        process.env.GROUPAROO_OPTION__SCHEDULE__CONFIG_WRITER_ENV_VAR
      );
    });

    // --- Property ---

    test("properties should only humanize their ID if it matches default pattern", async () => {
      let property: Property = await helper.factories.property(
        source,
        { key: faker.lorem.word() },
        { column: faker.database.column() }
      );
      expect(property.getConfigId()).toEqual(
        ConfigWriter.generateId(property.key)
      );

      property = await helper.factories.property(
        source,
        {
          id: "hello-world",
          key: faker.lorem.word(),
        },
        { column: faker.database.column() }
      );
      expect(property.id).toEqual("hello-world");
      expect(property.getConfigId()).not.toEqual(
        ConfigWriter.generateId(property.key)
      );
      expect(property.getConfigId()).toEqual(property.id);
    });

    test("properties can provide their config objects", async () => {
      const filterObj = { key: "id", match: "0", op: "gt" };
      // @ts-ignore
      await property.setFilters([filterObj]);

      const config = await property.getConfigObject();
      expect(config.id).toBeTruthy();

      const { key, type, unique, isArray } = property;

      const options = await property.$get("__options");
      expect(options.length).toEqual(1);

      expect(config).toEqual({
        class: "Property",
        id: property.getConfigId(),
        type,
        key,
        sourceId: source.getConfigId(),
        unique,
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

    test("properties without a name will not provide a config object", async () => {
      property.key = undefined;
      const config = await property.getConfigObject();
      expect(config).toBeUndefined();
    });

    // --- Group ---

    test("groups should only humanize their ID if it matches default pattern", async () => {
      let group: Group = await helper.factories.group();
      expect(group.getConfigId()).toEqual(ConfigWriter.generateId(group.name));
      expect(group.getConfigId()).not.toEqual(group.id);

      group = await helper.factories.group({ id: "hello-world" });
      expect(group.id).toEqual("hello-world");
      expect(group.getConfigId()).not.toEqual(
        ConfigWriter.generateId(group.name)
      );
      expect(group.getConfigId()).toEqual(group.id);
      expect((await group.getConfigObject()).modelId).toBe("profiles");
    });

    test("group rules properly set IDs for record column properties", async () => {
      let group: Group = await helper.factories.group();
      await group.setRules([
        { key: "grouparooId", match: "nobody", operation: { op: "eq" } },
      ]);

      const config = await group.getConfigObject();
      expect(config.rules).toEqual([
        {
          propertyId: "grouparooId",
          match: "nobody",
          op: "eq",
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
        },
      ]);
    });

    test("groups can provide their config objects", async () => {
      const config = await group.getConfigObject();

      expect(config.id).toBeTruthy();

      const { name } = group;

      expect(config).toEqual({
        class: "Group",
        id: group.getConfigId(),
        modelId: "profiles",
        name,
        rules: [
          {
            propertyId: property.getConfigId(),
            match: "nobody",
            op: "eq",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ],
      });
    });

    test("properties don't transform env vars", async () => {
      process.env.GROUPAROO_OPTION__PROPERTY__CONFIG_WRITER_ENV_VAR =
        faker.database.column();
      await property.setOptions({ column: "CONFIG_WRITER_ENV_VAR" });
      const config = await property.getConfigObject();
      expect(config.options.column).toEqual("CONFIG_WRITER_ENV_VAR");
      const options = await property.getOptions();
      expect(options.column).toEqual(
        process.env.GROUPAROO_OPTION__PROPERTY__CONFIG_WRITER_ENV_VAR
      );
    });

    test("groups without a name will not provide a config object", async () => {
      group.name = undefined;
      const config = await group.getConfigObject();
      expect(config).toBeUndefined();
    });

    // --- Destination ---

    test("destinations should only humanize their ID if it matches default pattern", async () => {
      let destination: Destination = await helper.factories.destination();
      expect(destination.getConfigId()).toEqual(
        ConfigWriter.generateId(destination.name)
      );
      expect(destination.getConfigId()).not.toEqual(destination.id);

      destination = await helper.factories.destination(undefined, {
        id: "hello-world",
      });
      expect(destination.id).toEqual("hello-world");
      expect(destination.getConfigId()).not.toEqual(
        ConfigWriter.generateId(destination.name)
      );
      expect(destination.getConfigId()).toEqual(destination.id);
      expect((await destination.getConfigObject()).modelId).toBe("profiles");
    });

    test("destinations can provide their config objects", async () => {
      const destination: Destination = await helper.factories.destination(
        undefined,
        { groupId: group.id, collection: "group" }
      );
      const app: App = await destination.$get("app");

      const destinationGroupMemberships: Record<string, string> = {};
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
        collection: "group",
        syncMode,
        options: Object.fromEntries(options.map((o) => [o.key, o.value])),
        mapping: { "primary-id": mappingProperty.getConfigId() },
        modelId: "profiles",
        destinationGroupMemberships: {
          "My Dest Tag": group.getConfigId(),
        },
      });
    });

    test("destinations without a name will not provide a config object", async () => {
      const destination: Destination = await helper.factories.destination(
        undefined,
        { groupId: group.id }
      );
      destination.name = undefined;
      const config = await destination.getConfigObject();
      expect(config).toBeUndefined();
    });

    test("destinations don't transform env vars", async () => {
      process.env.GROUPAROO_OPTION__DESTINATION__CONFIG_WRITER_ENV_VAR =
        "my_table_456";
      const destination: Destination = await helper.factories.destination(
        undefined,
        { groupId: group.id, options: { table: "CONFIG_WRITER_ENV_VAR" } }
      );
      const config = await destination.getConfigObject();
      expect(config.options.table).toEqual("CONFIG_WRITER_ENV_VAR");
      const options = await destination.getOptions();
      expect(options.table).toEqual("my_table_456");
    });

    // --- GrouparooRecord ---

    test("records can provide their config objects", async () => {
      const record: GrouparooRecord = await helper.factories.record();
      const properties = { [bootstrapPropertyId]: [12] };
      const bootstrapProperty = await Property.findByPk(bootstrapPropertyId);

      await record.addOrUpdateProperties({
        ...properties,
        [property.id]: ["some_value"],
      });

      const config = await record.getConfigObject();
      expect(config.id).toBeTruthy();
      expect(config).toEqual({
        class: "Record",
        id: record.id,
        modelId: "profiles",
        properties: {
          [bootstrapProperty.getConfigId()]: [12],
        },
      });
    });

    test("record without a primary key property value will not be persisted", async () => {
      const record: GrouparooRecord = await helper.factories.record();
      const properties = { [bootstrapPropertyId]: [null as string] };
      await record.addOrUpdateProperties(properties);
      const config = await record.getConfigObject();
      expect(config).toBeUndefined();
    });

    // --- Setting ---

    test("settings should only humanize their ID if it matches default pattern", async () => {
      const setting: Setting = await changeClusterNameSetting();
      expect(setting.getConfigId()).toEqual(
        ConfigWriter.generateId(setting.key)
      );
      expect(setting.getConfigId()).not.toEqual(setting.id);
      await setting.update({ key: "cluster-name--bak" });

      await Setting.destroy({ where: { key: "cluster-name" } });
      const newSetting = await Setting.create({
        id: "hello-world",
        pluginName: "core",
        key: "cluster-name",
        value: "My Grouparoo Cluster",
        defaultValue: "My Grouparoo Cluster",
        type: "string",
      });
      expect(newSetting.id).toEqual("hello-world");
      expect(newSetting.getConfigId()).not.toEqual(
        ConfigWriter.generateId(newSetting.key)
      );
      expect(newSetting.getConfigId()).toEqual(newSetting.id);
      await newSetting.destroy();
      await setting.update({ key: "cluster-name" });
    });

    test("settings can provide their config objects", async () => {
      const setting: Setting = await changeClusterNameSetting();
      const config = await setting.getConfigObject();
      expect(config.id).toBeTruthy();

      const { pluginName, key, value } = setting;
      expect(config).toEqual({
        class: "Setting",
        id: setting.getConfigId(),
        pluginName,
        key,
        value,
      });
    });
  });
});
