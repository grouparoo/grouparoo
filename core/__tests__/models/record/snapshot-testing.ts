import { helper, relaxedSnapshot } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Group,
  Destination,
  GrouparooPlugin,
} from "../../../src";
import { api } from "actionhero";
import { RecordOps } from "../../../src/modules/ops/record";

describe("test grouparoo records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // we need to ensure that we have static results for the import to snapshot
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );
    const testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );
    testPluginConnection.methods.recordProperty = async ({ property }) => {
      const data = {
        userId: [100],
        isVIP: [true],
        email: [`example@example.com`],
        firstName: ["Mario"],
        lastName: ["Mario"],
        ltv: [100.0],
        lastLoginAt: [new Date(0)],
        purchases: ["hat", "mushroom"],
        purchaseAmounts: [100, 200],
      };

      return data[property.key];
    };
  });

  describe("within a mock environment", () => {
    let record: GrouparooRecord;
    let group: Group;
    let destination: Destination;

    beforeAll(async () => {
      // make properties
      await helper.factories.properties();

      // make a group
      group = await helper.factories.group();
      await group.update({ name: "test group" });
      await group.setRules([
        { key: "email", match: "%@example.com", operation: { op: "like" } },
      ]);

      // make a destination
      destination = await helper.factories.destination();
      await destination.update({ name: "test destination" });
      await destination.setOptions({ table: "users" });
      await destination.setMapping({
        "primary-id": "userId",
        email: "email",
        ltv: "ltv",
        isVIP: "isVIP",
      });
      await destination.setDestinationGroupMemberships({
        [group.id]: "remote_group_name",
      });
      await destination.updateTracking("group", group.id);

      // make ready
      await group.update({ state: "ready" });
      await destination.update({ state: "ready" });

      // make the record
      const response = await RecordOps.findOrCreateByUniqueRecordProperties(
        { userId: ["person1@example.com"] },
        true
      );
      record = response.record;

      // import & export the record
      await record.sync();
    });

    test("record properties match the snapshot", async () => {
      const properties = await record.simplifiedProperties();
      expect(properties).toMatchSnapshot();
    });

    test("groups match the snapshot", async () => {
      const groups = await record.$get("groups");
      let groupApiData = [];
      for (const g of groups) groupApiData.push(await g.apiData());

      expect(groupApiData.length).toEqual(1);

      expect(groupApiData[0]).toMatchSnapshot({
        id: expect.stringMatching(/^grp_/),
        createdAt: expect.any(Number),
        updatedAt: expect.any(Number),
        nextCalculatedAt: null,
      });
    });

    test("potential exports match the snapshot", async () => {
      const _exports = await record.export(true, [], false);
      const exportApiData = [];
      for (const e of _exports) exportApiData.push(await e.apiData(false));
      expect(exportApiData.length).toEqual(1);

      expect(exportApiData[0]).toMatchSnapshot({
        recordId: expect.stringMatching(/^rec_/),
        startedAt: expect.any(Number),
        sendAt: expect.any(Number),
        state: "pending",
        destinationName: "test destination",
        newRecordProperties: expect.objectContaining({
          email: expect.stringMatching(/@example.com/),
          "primary-id": expect.any(Number),
          isVIP: true,
          ltv: 100,
        }),
        oldRecordProperties: expect.objectContaining({
          email: expect.stringMatching(/@example.com/),
          "primary-id": expect.any(Number),
          isVIP: true,
          ltv: 100,
        }),
      });
    });

    test("the record can be snapshot-ed", async () => {
      const snapshot = await record.snapshot();
      expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));
    });
  });
});
