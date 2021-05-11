import { helper } from "@grouparoo/spec-helper";

import { App } from "../../src/models/App";
import { Destination } from "../../src/models/Destination";
import { Group } from "../../src/models/Group";
import { Property } from "../../src/models/Property";
import { Schedule } from "../../src/models/Schedule";
import { Source } from "../../src/models/Source";

import { ConfigWriter } from "../../src/modules/configWriter";

describe("modules/configWriter", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let source: Source;
  let property: Property;
  let group: Group;

  beforeAll(async () => {
    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.bootstrapUniqueProperty("userId", "integer", "id");
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    property = await helper.factories.property(
      source,
      { key: "firstName" },
      { column: "firstName" }
    );

    group = await helper.factories.group({ type: "calculated" });
    await group.setRules([
      { key: "firstName", match: "nobody", operation: { op: "eq" } },
    ]);
  });

  describe("Model Config Providers", () => {
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
