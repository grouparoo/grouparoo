import { helper } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Group,
  Destination,
  Export,
  GrouparooPlugin,
  RecordProperty,
} from "../../../src";
import { api } from "actionhero";

function simpleRecordValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleRecordProperties = {};
  keys.forEach((key) => {
    simpleRecordProperties[key] = complexProfileValues[key].values;
  });
  return simpleRecordProperties;
}

describe("record sync", () => {
  let record: GrouparooRecord;
  let group: Group;
  let destination: Destination;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
  });

  afterEach(async () => {
    await GrouparooRecord.truncate();
    await RecordProperty.truncate();
    await Group.truncate();
    await Destination.truncate();
    await Export.truncate();
  });

  beforeEach(async () => {
    record = await helper.factories.record();
    group = await helper.factories.group();
    destination = await helper.factories.destination();
  });

  test("syncing a record will import properties", async () => {
    let properties = await record.getProperties();
    expect(simpleRecordValues(properties)).toEqual(
      expect.objectContaining({
        firstName: [null],
        isVIP: [null],
        lastName: [null],
        ltv: [null],
      })
    );

    await record.sync();

    properties = await record.getProperties();
    expect(simpleRecordValues(properties)).toEqual(
      expect.objectContaining({
        firstName: ["Mario"],
        isVIP: [true],
        lastName: ["Mario"],
        ltv: [100],
      })
    );
  });

  test("syncing a record will update group membership", async () => {
    let groups = await record.$get("groups");
    expect(groups).toEqual([]);

    await group.setRules([
      { key: "firstName", match: "Mario", operation: { op: "eq" } },
    ]);
    await group.update({ state: "ready" });

    await record.sync();

    groups = await record.$get("groups");
    expect(groups.length).toEqual(1);
    expect(groups[0].name).toEqual(group.name);
  });

  describe("with destination tracking group", () => {
    beforeEach(async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.update({ state: "ready" });
      await destination.updateTracking("group", group.id);
    });

    test("syncing will create exports", async () => {
      const createdExports = await record.sync();
      const foundExports = await record.$get("exports");

      expect(createdExports.length).toBe(1);
      expect(foundExports.length).toBe(1);
    });

    test("optionally exports can be predicted but not saved", async () => {
      const createdExports = await record.sync(undefined, false);
      const foundExports = await record.$get("exports");

      expect(createdExports.length).toBe(1);
      expect(foundExports.length).toBe(0);
    });

    test("exports will be forced by default", async () => {
      await record.sync();
      const createdExports = await record.sync();
      expect(createdExports.length).toBe(1);
      expect(createdExports[0].force).toBe(true);
      expect(createdExports[0].hasChanges).toBe(true);
    });

    test("optionally a sync will not force the export", async () => {
      await record.sync();
      const createdExports = await record.sync(false);
      expect(createdExports.length).toBe(1);
      expect(createdExports[0].force).toBe(false);
      expect(createdExports[0].hasChanges).toBe(false);
    });

    describe("toDelete exports", () => {
      let otherGroup: Group;
      let otherDestination: Destination;

      beforeEach(async () => {
        otherGroup = await helper.factories.group();
        await otherGroup.setRules([
          { key: "grouparooId", match: "rec%", operation: { op: "like" } },
        ]);
        await otherGroup.update({ state: "ready" });
        otherDestination = await helper.factories.destination();
        await otherDestination.updateTracking("group", otherGroup.id);
        await otherDestination.update({ state: "ready" });
      });

      test("record sync will create a toDelete export if the group's rules remove it from the group", async () => {
        // add to both groups initially
        await record.sync();
        let groups = await record.$get("groups");
        expect(groups.length).toBe(2);

        // change the rules
        await group.setRules([
          { key: "firstName", match: "Luigi", operation: { op: "eq" } },
        ]);

        // test
        let exports = await record.sync();
        groups = await record.$get("groups");
        expect(groups.length).toBe(1);
        expect(groups[0].id).toBe(otherGroup.id);
        expect(exports.length).toBe(2);
        const destinationExport = exports.find(
          (e) => e.destinationId === destination.id
        );
        const otherDestinationExport = exports.find(
          (e) => e.destinationId === otherDestination.id
        );
        expect(destinationExport.toDelete).toBe(true);
        expect(otherDestinationExport.toDelete).toBe(false);

        // sync again and ensure that there is only one export next time
        exports = await record.sync();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(otherDestination.id);

        // reset
        await group.setRules([
          { key: "firstName", match: "Mario", operation: { op: "eq" } },
        ]);
      });

      test("record sync will create a toDelete export if the record's properties remove it from the group", async () => {
        // add to both groups initially
        await record.sync();

        let groups = await record.$get("groups");
        expect(groups.length).toBe(2);

        // find and hack the plugin
        const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
          (a) => a.name === "@grouparoo/test-plugin"
        );
        const testPluginConnection = testPlugin.connections.find(
          (c) => c.name === "test-plugin-import"
        );
        const originalMethod = testPluginConnection.methods.recordProperty;
        testPluginConnection.methods.recordProperty = async ({ property }) => {
          const data = {
            firstName: ["Luigi"],
          };

          return data[property.key];
        };

        // test
        let exports = await record.sync();
        groups = await record.$get("groups");
        expect(groups.length).toBe(1);
        expect(groups[0].id).toBe(otherGroup.id);
        expect(exports.length).toBe(2);
        const destinationExport = exports.find(
          (e) => e.destinationId === destination.id
        );
        const otherDestinationExport = exports.find(
          (e) => e.destinationId === otherDestination.id
        );
        expect(destinationExport.toDelete).toBe(true);
        expect(otherDestinationExport.toDelete).toBe(false);

        // sync again and ensure that there is only one export next time
        exports = await record.sync();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(otherDestination.id);

        // reset the plugin
        testPluginConnection.methods.recordProperty = originalMethod;
      });

      test("record sync will create a toDelete export if destination had untracked the group but not yet run", async () => {
        // add to both groups initially
        await record.sync();
        let groups = await record.$get("groups");
        expect(groups.length).toBe(2);

        // change the destination
        await destination.updateTracking("none");

        // test
        let exports = await record.sync();
        expect(exports.length).toBe(2);
        const destinationExport = exports.find(
          (e) => e.destinationId === destination.id
        );
        const otherDestinationExport = exports.find(
          (e) => e.destinationId === otherDestination.id
        );
        expect(destinationExport.toDelete).toBe(true);
        expect(otherDestinationExport.toDelete).toBe(false);

        // sync again and ensure that there is only one export next time
        exports = await record.sync();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(otherDestination.id);

        // reset
        await destination.updateTracking("group", group.id);
      });
    });
  });
});
