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
import { MappingHelper } from "../../src/modules/mappingHelper";

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
      const property: Property = await Property.findOne();

      await ConfigWriter.run();

      const files = glob.sync(configFilePattern);
      const expConfigFiles = [
        `apps/${app.id}.json`,
        `sources/${source.id}.json`,
        `properties/${property.id}.json`,
      ].map((configFilePath) =>
        path.join(process.env.GROUPAROO_CONFIG_DIR, configFilePath)
      );

      // Verify all expected files exist.
      expect(files.sort()).toEqual(expConfigFiles.sort());
      // Check the app's config file contents
      const appConfig = JSON.parse(
        fs.readFileSync(expConfigFiles[0]).toString()
      );
      expect(appConfig).toEqual(await app.getConfigObject());
    });

    test("deletes an object's file after the record is deleted", async () => {
      const app: App = await helper.factories.app();
      await ConfigWriter.run();
      let files = glob.sync(configFilePattern);
      expect(files).toEqual([
        path.join(process.env.GROUPAROO_CONFIG_DIR, `apps/${app.id}.json`),
      ]);

      await app.destroy();
      await ConfigWriter.run();
      files = glob.sync(configFilePattern);
      expect(files).toEqual([]);
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
      const property: Property = await Property.findOne();

      const configObjects = await ConfigWriter.getConfigObjects();

      expect(configObjects).toEqual([
        {
          filePath: `apps/${app.id}.json`,
          object: await app.getConfigObject(),
        },
        {
          filePath: `sources/${source.id}.json`,
          object: await source.getConfigObject(),
        },
        {
          filePath: `properties/${property.id}.json`,
          object: await property.getConfigObject(),
        },
      ]);
    });
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
        class: "App",
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
      const mapping = await MappingHelper.getMapping(source, "id");

      expect(config).toEqual({
        class: "Source",
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
        class: "Schedule",
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

      const { id, key, type, sourceId, unique, identifying, isArray } =
        property;

      const options = await property.getOptions();
      const filters = await property.getFilters();

      expect(config).toEqual({
        class: "Property",
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
        class: "Group",
        id,
        type,
        name,
        rules: [
          {
            propertyId: property.id,
            match: "nobody",
            operation: { op: "eq" },
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
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
      const mapping = await MappingHelper.getMapping(destination, "id");

      expect(config.id).toBeTruthy();
      expect(config).toEqual({
        class: "Destination",
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
