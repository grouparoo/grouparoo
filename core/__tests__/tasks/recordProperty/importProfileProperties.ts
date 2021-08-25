import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Op } from "sequelize";
import {
  GrouparooPlugin,
  PluginConnection,
  GrouparooRecord,
  RecordProperty,
  Property,
  Source,
  plugin,
  App,
  AggregationMethod,
} from "../../../src";

describe("tasks/profileProperty:importProfileProperties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let userIdCounter = 1;
  describe("profileProperty:importProfileProperties", () => {
    let testPluginConnection: PluginConnection;

    beforeAll(async () => {
      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );

      testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );
      testPluginConnection.methods.profileProperties = async ({
        properties,
        records,
      }) => {
        const response = {};

        for (const i in records) {
          const record = records[i];
          const data = {
            userId: userIdCounter++,
            isVIP: true,
            email: `${record.id}@example.com`,
            firstName: "Mario",
            lastName: "Mario",
            ltv: 100.0,
            lastLoginAt: new Date(),
          };

          response[record.id] = {};
          for (const property of properties) {
            response[record.id][property.id] = data[property.key];
          }
        }

        return response;
      };
    });

    afterAll(() => {
      delete testPluginConnection.methods.profileProperties;
    });

    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:importProfileProperties", {
        profileIds: ["abc"],
        propertyIds: ["abc"],
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperties"
      );
      expect(found.length).toEqual(1);
    });

    test("does not throw if the record or property cannot be found", async () => {
      const property = await Property.findOne();
      const record = await helper.factories.record();

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: ["missing"],
        propertyIds: ["missing"],
      });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [record.id],
        propertyIds: ["missing"],
      });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: ["missing"],
        propertyIds: [property.id],
      });

      await record.destroy();
    });

    test("will import record properties that have no dependencies", async () => {
      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const profileProperty = await RecordProperty.findOne({
        where: { rawValue: "1" },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [record.id],
        propertyIds: [profileProperty.propertyId],
      });

      // new value and state
      await profileProperty.reload();
      expect(profileProperty.state).toBe("ready");
      expect(profileProperty.rawValue).toBe(`1`);
      await record.destroy();
    });

    test("will not import record properties that have pending dependencies", async () => {
      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [null],
        email: ["old@example.com"],
      });
      const profileProperty = await RecordProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await profileProperty.update({ state: "pending" });

      const userIdProfileProperty = await RecordProperty.findOne({
        where: {
          recordId: record.id,
          propertyId: userIdProperty.id,
        },
      });
      await userIdProfileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [record.id],
        propertyIds: [profileProperty.propertyId],
      });

      // no change
      await profileProperty.reload();
      expect(profileProperty.state).toBe("pending");
      expect(profileProperty.rawValue).toBe(`old@example.com`);

      // sendAt is slightly in the future from (now - 5 minutes) to try again soon
      expect(profileProperty.startedAt.getTime()).toBeGreaterThan(
        new Date().getTime() - 1000 * 60 * 5
      );
      expect(profileProperty.startedAt.getTime()).toBeLessThan(
        new Date().getTime()
      );
      await record.destroy();
    });

    test("will import record properties that have pending dependencies imported at the same time", async () => {
      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: ["2"],
        email: ["old@example.com"],
      });
      const emailProfileProperty = await RecordProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await emailProfileProperty.update({ state: "pending" });

      const userIdProfileProperty = await RecordProperty.findOne({
        where: {
          recordId: record.id,
          propertyId: userIdProperty.id,
        },
      });
      await userIdProfileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [record.id],
        propertyIds: [
          emailProfileProperty.propertyId,
          userIdProfileProperty.propertyId,
        ],
      });

      // new value and state
      await emailProfileProperty.reload();
      expect(emailProfileProperty.state).toBe("ready");
      expect(emailProfileProperty.rawValue).toBe(`${record.id}@example.com`);

      await userIdProfileProperty.reload();
      expect(userIdProfileProperty.state).toBe("ready");
      expect(userIdProfileProperty.rawValue).toBe(`2`);
      await record.destroy();
    });

    test("will set value to null for record properties that no longer exist", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "profileProperties")
        .mockImplementation(() => undefined);

      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [99],
        email: ["someoldemail@example.com"],
      });
      const profileProperty = await RecordProperty.findOne({
        where: { rawValue: "99" },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [record.id],
        propertyIds: [profileProperty.propertyId],
      });

      // new value and state
      await profileProperty.reload();
      expect(profileProperty.state).toBe("ready");
      expect(profileProperty.rawValue).toBe(null);
      await record.destroy();

      spy.mockRestore();
    });

    describe("with records", () => {
      let profileA: GrouparooRecord;
      let profileB: GrouparooRecord;
      let profileC: GrouparooRecord;

      beforeAll(async () => {
        profileA = await helper.factories.record();
        profileB = await helper.factories.record();
        profileC = await helper.factories.record();
      });

      afterAll(async () => {
        await profileA.destroy();
        await profileB.destroy();
        await profileC.destroy();
      });

      beforeEach(async () => {
        await RecordProperty.update(
          { state: "pending" },
          {
            where: {
              recordId: { [Op.in]: [profileA.id, profileB.id, profileC.id] },
            },
          }
        );
      });

      test("will fan out non-unique profileProperties for multiple properties", async () => {
        plugin.registerPlugin({
          name: "test-plugin",
          apps: [
            {
              name: "test-non-unique-app",
              options: [],
              methods: {
                test: async () => {
                  return { success: true };
                },
              },
            },
          ],
          connections: [
            {
              name: "test-non-unique-connection",
              description: "a test app",
              app: "test-non-unique-app",
              direction: "import",
              options: [],
              groupAggregations: [AggregationMethod.Exact],
              methods: {
                propertyOptions: async () => [],
                sourceFilters: async () => [],
                profileProperties: async ({ properties, records }) => {
                  // only returns data for the first record
                  return {
                    [records[0].id]: {
                      [properties[0].id]: ["foo"],
                      [properties[1].id]: ["bar"],
                    },
                  };
                },
              },
            },
          ],
        });

        const app = await App.create({
          type: "test-non-unique-app",
          name: "test app",
        });
        await app.update({ state: "ready" });

        const otherSource = await Source.create({
          type: "test-non-unique-connection",
          name: "translations source",
          appId: app.id,
        });
        await otherSource.setMapping({ word: "lastName" });
        await otherSource.update({ state: "ready" });

        const newPropertyA: Property = await helper.factories.property(
          otherSource,
          { key: "wordInSpanish" }
        );
        const newPropertyB: Property = await helper.factories.property(
          otherSource,
          { key: "wordInFrench" }
        );
        await newPropertyA.update({ state: "ready" });
        await newPropertyB.update({ state: "ready" });
        await profileA.buildNullProperties();
        await profileB.buildNullProperties();
        await profileC.buildNullProperties();

        await RecordProperty.update(
          { state: "ready" },
          {
            where: {
              [Op.and]: [
                { propertyId: { [Op.ne]: newPropertyA.id } },
                { propertyId: { [Op.ne]: newPropertyB.id } },
              ],
            },
          }
        );
        await RecordProperty.update(
          { rawValue: "Mario" },
          { where: { propertyId: "lastName" } }
        );

        // import
        await specHelper.runTask("profileProperty:importProfileProperties", {
          profileIds: [profileA.id, profileB.id, profileC.id],
          propertyIds: [newPropertyA.id, newPropertyB.id],
        });

        const profilePropertiesA = await profileA.getProperties();
        const profilePropertiesB = await profileB.getProperties();
        const profilePropertiesC = await profileC.getProperties();
        expect(profilePropertiesA[newPropertyA.id].values).toEqual(["foo"]);
        expect(profilePropertiesB[newPropertyA.id].values).toEqual(["foo"]);
        expect(profilePropertiesC[newPropertyA.id].values).toEqual(["foo"]);
        expect(profilePropertiesA[newPropertyB.id].values).toEqual(["bar"]);
        expect(profilePropertiesB[newPropertyB.id].values).toEqual(["bar"]);
        expect(profilePropertiesC[newPropertyB.id].values).toEqual(["bar"]);

        // cleanup
        await newPropertyA.destroy();
        await newPropertyB.destroy();
        await otherSource.destroy();
        await app.destroy();
      });

      test("can be run for the same record more than once without deadlock", async () => {
        const properties = await Property.findAll();

        // run once to set userId
        for (const property of properties) {
          await specHelper.runTask("profileProperty:importProfileProperties", {
            profileIds: [profileA.id, profileB.id, profileC.id],
            propertyIds: [property.id],
          });
        }

        // run again for other properties
        for (const property of properties) {
          await specHelper.runTask("profileProperty:importProfileProperties", {
            profileIds: [profileA.id, profileB.id, profileC.id],
            propertyIds: [property.id],
          });
        }

        const profileProperties = await profileA.getProperties();
        expect(profileProperties.firstName.values).toEqual(["Mario"]);
        expect(profileProperties.lastName.values).toEqual(["Mario"]);
      });
    });
  });
});
