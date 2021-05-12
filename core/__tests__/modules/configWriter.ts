import fs from "fs";
import glob from "glob";
import path from "path";
import os from "os";
import { helper } from "@grouparoo/spec-helper";

import { App } from "../../src/models/App";
import { Destination } from "../../src/models/Destination";
import { Group } from "../../src/models/Group";
import { Property } from "../../src/models/Property";
import { Schedule } from "../../src/models/Schedule";
import { Source } from "../../src/models/Source";

import { ConfigWriter } from "../../src/modules/configWriter";
// import { getConfigDir } from "../../src/modules/configLoaders";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configWriter`;
const configFilePattern = path.join(configDir, "**/*.json");

process.env.GROUPAROO_CONFIG_DIR = configDir;

describe("modules/configWriter", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  // ---------------------------------------- | ConfigWriter.run()

  describe("run()", () => {
    afterEach(async () => {
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Property.destroy({ truncate: true });

      const files = glob.sync(configFilePattern);
      for (let file of files) fs.rmSync(file);
    });

    test("writes a file for each object", async () => {
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app);
      await source.setOptions({ table: "test-table-04" });
      await source.bootstrapUniqueProperty("userId_04", "integer", "id");
      await source.setMapping({ id: "userId_04" });
      await source.update({ state: "ready" });

      await ConfigWriter.run();

      // Reload so we can grab the configFilePath attributes, which have been
      // set while running this method (that test is below).
      await app.reload();
      await source.reload();
      const property: Property = await Property.findOne();

      const files = glob.sync(configFilePattern);
      const expConfigFiles = [app, source, property].map((instance) =>
        path.join(process.env.GROUPAROO_CONFIG_DIR, instance.configFilePath)
      );
      // Verify all expected files exist.
      expect(files.sort()).toEqual(expConfigFiles.sort());
      // Check the app's config file contents
      const appConfig = JSON.parse(
        fs.readFileSync(expConfigFiles[0]).toString()
      );
      expect(appConfig).toEqual(await app.getConfigObject());
    });
  });

  // ---------------------------------------- | ConfigWriter.getConfigObjects()

  describe("getConfigObjects()", () => {
    afterEach(async () => {
      await App.destroy({ truncate: true });
      await Source.destroy({ truncate: true });
      await Property.destroy({ truncate: true });
    });

    test("returns an empty array when there are no objects", async () => {
      const configObjects = await ConfigWriter.getConfigObjects();
      expect(configObjects).toEqual([]);
    });
    test("lists the formatted config objects, ready to be written", async () => {
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app);
      await source.setOptions({ table: "test-table-03" });
      await source.bootstrapUniqueProperty("userId_03", "integer", "id");
      await source.setMapping({ id: "userId_03" });
      await source.update({ state: "ready" });

      const configObjects = await ConfigWriter.getConfigObjects();

      // Reload so we can grab the configFilePath attributes, which have been
      // set while running this method (that test is below).
      await app.reload();
      await source.reload();
      const property: Property = await Property.findOne();

      expect(configObjects).toEqual([
        {
          filePath: app.configFilePath,
          object: await app.getConfigObject(),
        },
        {
          filePath: source.configFilePath,
          object: await source.getConfigObject(),
        },
        {
          filePath: property.configFilePath,
          object: await property.getConfigObject(),
        },
      ]);
    });
    test("sets the configFilePath attribute on objects", async () => {
      const app: App = await helper.factories.app();
      await app.reload();
      expect(app.configFilePath).toEqual(null);
      await ConfigWriter.getConfigObjects();
      await app.reload();
      expect(app.configFilePath).not.toEqual(null);
      expect(app.configFilePath).toContain(app.id);
    });
  });

  // ---------------------------------------- | Model Config File Refs

  describe("Model config file references", () => {
    let testObjects = {};

    const tests: Array<{ type: string; plural?: string }> = [
      { type: "app" },
      { type: "source" },
      { type: "schedule" },
      { type: "property", plural: "properties" },
      { type: "group" },
      { type: "destination" },
    ];

    beforeAll(async () => {
      const app: App = await helper.factories.app();

      const source: Source = await helper.factories.source(app);
      await source.setOptions({ table: "test-table-01" });
      await source.bootstrapUniqueProperty("userId_01", "integer", "id");
      await source.setMapping({ id: "userId_01" });
      await source.update({ state: "ready" });

      const property = await helper.factories.property(
        source,
        { key: "fistName01" },
        { column: "fistName01" }
      );

      const schedule: Schedule = await helper.factories.schedule(source);

      const group = await helper.factories.group({ type: "calculated" });
      await group.setRules([
        { key: "fistName01", match: "nobody", operation: { op: "eq" } },
      ]);

      const destination: Destination = await helper.factories.destination();

      testObjects = { app, source, schedule, property, group, destination };
    });

    for (let testConfig of tests) {
      let { type, plural } = testConfig;
      if (!plural) plural = `${testConfig.type}s`;

      test(`${plural} can set a config file path reference`, async () => {
        const obj = testObjects[type];
        expect(obj.configFilePath).toBe(null);
        await obj.setConfigFilePath("file/path/override.js");
        expect(obj.configFilePath).toBe("file/path/override.js");
      });
      test(`${plural} can override a config file path ref when set`, async () => {
        const obj = testObjects[type];
        obj.configFilePath = `${plural}/my_${type}.js`;
        await obj.save();
        expect(obj.configFilePath).toBe(`${plural}/my_${type}.js`);
        await obj.setConfigFilePath("file/path/override.js");
        expect(obj.configFilePath).toBe("file/path/override.js");
      });
      test(`${plural} can be prompted to set a default config file path reference`, async () => {
        const obj = testObjects[type];
        await obj.setConfigFilePath();
        expect(obj.configFilePath).toBe(`${plural}/${obj.id}.json`);
      });
    }
  });

  // ---------------------------------------- | Model Config Builders

  describe("Model Config Providers", () => {
    let source: Source;
    let property: Property;
    let group: Group;

    beforeAll(async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "test-table-02" });
      await source.bootstrapUniqueProperty("userId_02", "integer", "id");
      await source.setMapping({ id: "userId_02" });
      await source.update({ state: "ready" });

      property = await helper.factories.property(
        source,
        { key: "firstName02" },
        { column: "firstName02" }
      );

      group = await helper.factories.group({ type: "calculated" });
      await group.setRules([
        { key: "firstName02", match: "nobody", operation: { op: "eq" } },
      ]);
    });

    test("apps can provide their config objects", async () => {
      const app: App = await helper.factories.app();
      const config = await app.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, type } = app;
      const options = await app.getOptions();
      expect(config).toEqual({
        class: "app",
        id,
        name,
        type,
        options,
      });
    });

    test("sources can provide their config objects", async () => {
      const config = await source.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, type, appId } = source;
      const options = await source.getOptions();
      const mapping = await source.getMapping();

      expect(config).toEqual({
        class: "source",
        id,
        name,
        type,
        appId,
        mapping,
        options,
      });
    });

    test("schedules can provide their config objects", async () => {
      const schedule: Schedule = await helper.factories.schedule(source);
      const config = await schedule.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, sourceId, recurring, recurringFrequency } = schedule;
      const options = await schedule.getOptions();

      expect(config).toEqual({
        class: "schedule",
        id,
        name,
        sourceId,
        recurring,
        recurringFrequency,
        options,
      });
    });

    test("properties can provide their config objects", async () => {
      const config = await property.getConfigObject();

      expect(config.id).toBeTruthy();

      const {
        id,
        key,
        type,
        sourceId,
        unique,
        identifying,
        isArray,
      } = property;

      const options = await property.getOptions();
      const filters = await property.getFilters();

      expect(config).toEqual({
        class: "property",
        id,
        type,
        name: key,
        sourceId,
        unique,
        identifying,
        isArray,
        options,
        filters,
      });
    });

    test("groups can provide their config objects", async () => {
      const config = await group.getConfigObject();

      expect(config.id).toBeTruthy();

      const { id, name, type } = group;

      expect(config).toEqual({
        class: "group",
        id,
        type,
        name,
        rules: [
          { propertyId: property.id, match: "nobody", operation: { op: "eq" } },
        ],
      });
    });

    test("destinations can provide their config objects", async () => {
      const destination: Destination = await helper.factories.destination();

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = "My Dest Tag";
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );

      const config = await destination.getConfigObject();

      const { id, name, type, appId, groupId, syncMode } = destination;

      const options = await destination.getOptions();
      const mapping = await destination.getMapping();

      expect(config.id).toBeTruthy();
      expect(config).toEqual({
        class: "destination",
        id,
        name,
        type,
        appId,
        groupId,
        syncMode,
        options,
        mapping,
        destinationGroupMemberships,
      });
    });
  });
});
