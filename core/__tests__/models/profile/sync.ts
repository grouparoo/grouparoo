import { helper } from "@grouparoo/spec-helper";
import {
  Profile,
  Group,
  Destination,
  Export,
  GrouparooPlugin,
  ProfileProperty,
} from "../../../src";
import { api } from "actionhero";

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].values;
  });
  return simpleProfileProperties;
}

describe("profile sync", () => {
  let profile: Profile;
  let group: Group;
  let destination: Destination;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
  });

  afterEach(async () => {
    await Profile.truncate();
    await ProfileProperty.truncate();
    await Group.truncate();
    await Destination.truncate();
    await Export.truncate();
  });

  beforeEach(async () => {
    profile = await helper.factories.profile();
    group = await helper.factories.group();
    await group.update({ type: "calculated" });
    destination = await helper.factories.destination();
  });

  test("syncing a profile will import properties", async () => {
    let properties = await profile.properties();
    expect(simpleProfileValues(properties)).toEqual(
      expect.objectContaining({
        firstName: [null],
        isVIP: [null],
        lastName: [null],
        ltv: [null],
      })
    );

    await profile.sync();

    properties = await profile.properties();
    expect(simpleProfileValues(properties)).toEqual(
      expect.objectContaining({
        firstName: ["Mario"],
        isVIP: [true],
        lastName: ["Mario"],
        ltv: [100],
      })
    );
  });

  test("syncing a profile will update group membership", async () => {
    let groups = await profile.$get("groups");
    expect(groups).toEqual([]);

    await group.setRules([
      { key: "firstName", match: "Mario", operation: { op: "eq" } },
    ]);
    await group.update({ state: "ready" });

    await profile.sync();

    groups = await profile.$get("groups");
    expect(groups.length).toEqual(1);
    expect(groups[0].name).toEqual(group.name);
  });

  describe("with destination tracking group", () => {
    beforeEach(async () => {
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.update({ state: "ready" });
      await destination.trackGroup(group);
    });

    test("syncing will create exports", async () => {
      const createdExports = await profile.sync();
      const foundExports = await profile.$get("exports");

      expect(createdExports.length).toBe(1);
      expect(foundExports.length).toBe(1);
    });

    test("optionally exports can be predicted but not saved", async () => {
      const createdExports = await profile.sync(undefined, false);
      const foundExports = await profile.$get("exports");

      expect(createdExports.length).toBe(1);
      expect(foundExports.length).toBe(0);
    });

    test("exports will be forced by default", async () => {
      await profile.sync();
      const createdExports = await profile.sync();
      expect(createdExports.length).toBe(1);
      expect(createdExports[0].force).toBe(true);
      expect(createdExports[0].hasChanges).toBe(true);
    });

    test("optionally a sync will not force the export", async () => {
      await profile.sync();
      const createdExports = await profile.sync(false);
      expect(createdExports.length).toBe(1);
      expect(createdExports[0].force).toBe(false);
      expect(createdExports[0].hasChanges).toBe(false);
    });

    describe("toDelete exports", () => {
      let otherGroup: Group;
      let otherDestination: Destination;

      beforeEach(async () => {
        otherGroup = await helper.factories.group();
        await otherGroup.update({ type: "calculated" });
        await otherGroup.setRules([
          { key: "grouparooId", match: "pro%", operation: { op: "like" } },
        ]);
        otherDestination = await helper.factories.destination();
        await otherDestination.trackGroup(otherGroup);
      });

      test("profile sync will create a toDelete export if the group's rules remove it from the group", async () => {
        // add to both groups initially
        await profile.sync();
        let groups = await profile.$get("groups");
        expect(groups.length).toBe(2);

        // change the rules
        await group.setRules([
          { key: "firstName", match: "Luigi", operation: { op: "eq" } },
        ]);

        // test
        let exports = await profile.sync();
        groups = await profile.$get("groups");
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
        exports = await profile.sync();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(otherDestination.id);

        // reset
        await group.setRules([
          { key: "firstName", match: "Mario", operation: { op: "eq" } },
        ]);
      });

      test("profile sync will create a toDelete export if the profile's properties remove it from the group", async () => {
        // add to both groups initially
        await profile.sync();

        let groups = await profile.$get("groups");
        expect(groups.length).toBe(2);

        // find and hack the plugin
        const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
          (a) => a.name === "@grouparoo/test-plugin"
        );
        const testPluginConnection = testPlugin.connections.find(
          (c) => c.name === "test-plugin-import"
        );
        const originalMethod = testPluginConnection.methods.profileProperty;
        testPluginConnection.methods.profileProperty = async ({ property }) => {
          const data = {
            firstName: ["Luigi"],
          };

          return data[property.key];
        };

        // test
        let exports = await profile.sync();
        groups = await profile.$get("groups");
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
        exports = await profile.sync();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(otherDestination.id);

        // reset the plugin
        testPluginConnection.methods.profileProperty = originalMethod;
      });

      test("profile sync will create a toDelete export if destination had untracked the group but not yet run", async () => {
        // add to both groups initially
        await profile.sync();
        let groups = await profile.$get("groups");
        expect(groups.length).toBe(2);

        // change the destination
        await destination.unTrackGroup();

        // test
        let exports = await profile.sync();
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
        exports = await profile.sync();
        expect(exports.length).toBe(1);
        expect(exports[0].destinationId).toBe(otherDestination.id);

        // reset
        await destination.trackGroup(group);
      });
    });
  });
});
