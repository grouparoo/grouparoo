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
  GrouparooModel,
} from "../../../src";
import { RecordOps } from "../../../src/modules/ops/record";

describe("tasks/recordProperty:importRecordProperties", () => {
  let model: GrouparooModel;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
  });

  let userIdCounter = 1;
  describe("recordProperty:importRecordProperties", () => {
    let testPluginConnection: PluginConnection;

    beforeAll(async () => {
      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );

      testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );
      testPluginConnection.methods.recordProperties = async ({
        properties,
        records,
      }) => {
        const response: Record<string, Record<string, any>> = {};

        for (const record of records) {
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
            response[record.id][property.id] =
              data[property.key as keyof typeof data];
          }
        }

        return response;
      };
    });

    afterAll(() => {
      delete testPluginConnection.methods.recordProperties;
    });

    test("can be enqueued", async () => {
      await task.enqueue("recordProperty:importRecordProperties", {
        recordIds: ["abc"],
        propertyIds: ["abc"],
      });
      const found = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );
      expect(found.length).toEqual(1);
    });

    test("does not throw if the record or property cannot be found", async () => {
      const property = await Property.findOne();
      const record = await helper.factories.record();

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: ["missing"],
        propertyIds: ["missing"],
      });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [record.id],
        propertyIds: ["missing"],
      });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: ["missing"],
        propertyIds: [property.id],
      });

      await record.destroy();
    });

    test("will import record properties that have no dependencies", async () => {
      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "1" },
      });
      await recordProperty.update({ state: "pending" });

      await RecordProperty.update(
        { startedAt: null },
        { where: { recordId: record.id } }
      );

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [record.id],
        propertyIds: [recordProperty.propertyId],
      });

      // new value and state
      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(`1`);
      expect(recordProperty.startedAt).toBe(null);
      await record.destroy();
    });

    test("will not import record properties that have pending dependencies", async () => {
      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [null],
        email: ["old@example.com"],
      });
      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await recordProperty.update({ state: "pending", startedAt: new Date() });

      const userIdRecordProperty = await RecordProperty.findOne({
        where: {
          recordId: record.id,
          propertyId: userIdProperty.id,
        },
      });
      await userIdRecordProperty.update({ state: "pending" });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [record.id],
        propertyIds: [recordProperty.propertyId],
      });

      // no change
      await recordProperty.reload();
      expect(recordProperty.state).toBe("pending");
      expect(recordProperty.rawValue).toBe(`old@example.com`);
      expect(recordProperty.startedAt).not.toBe(null);

      // sendAt is slightly in the future from (now - 5 minutes) to try again soon
      expect(recordProperty.startedAt.getTime()).toBeGreaterThan(
        new Date().getTime() - 1000 * 60 * 5
      );
      expect(recordProperty.startedAt.getTime()).toBeLessThan(
        new Date().getTime()
      );
      await record.destroy();
    });

    test("will import record properties that have pending dependencies imported at the same time", async () => {
      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: ["2"],
        email: ["old@example.com"],
      });
      const emailRecordProperty = await RecordProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await emailRecordProperty.update({
        state: "pending",
        startedAt: new Date(),
      });

      const userIdRecordProperty = await RecordProperty.findOne({
        where: {
          recordId: record.id,
          propertyId: userIdProperty.id,
        },
      });
      await userIdRecordProperty.update({ state: "pending" });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [record.id],
        propertyIds: [
          emailRecordProperty.propertyId,
          userIdRecordProperty.propertyId,
        ],
      });

      // new value and state
      await emailRecordProperty.reload();
      expect(emailRecordProperty.state).toBe("ready");
      expect(emailRecordProperty.rawValue).toBe(`${record.id}@example.com`);
      expect(emailRecordProperty.startedAt).toBe(null);

      await userIdRecordProperty.reload();
      expect(userIdRecordProperty.state).toBe("ready");
      expect(userIdRecordProperty.rawValue).toBe(`2`);
      expect(emailRecordProperty.startedAt).toBe(null);

      await record.destroy();
    });

    test("will set value to null for record properties that no longer exist", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperties")
        .mockImplementation(() => undefined);

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [99],
        email: ["someoldemail@example.com"],
      });
      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "99" },
      });
      await recordProperty.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [record.id],
        propertyIds: [recordProperty.propertyId],
      });

      // new value and state
      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(null);
      expect(recordProperty.startedAt).toBe(null);
      await record.destroy();

      spy.mockRestore();
    });

    test("will not crash with invalidValues and they will be set on the recordProperties", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperties")
        //@ts-ignore // partial mock
        .mockImplementation(({ records, properties }) => {
          const response: Record<string, Record<string, any>> = {};

          for (const i in records) {
            const record = records[i];
            const data = { email: `not-an-email` };

            response[record.id] = {};
            for (const property of properties) {
              response[record.id][property.id] =
                data[property.key as keyof typeof data];
            }
          }

          return response;
        });

      const recordA = await helper.factories.record();
      await recordA.addOrUpdateProperties({
        userId: [101],
        email: ["a@example.com"], // this old value will be replaced
      });

      const recordB = await helper.factories.record();
      await recordB.addOrUpdateProperties({
        userId: [102],
        email: ["b@example.com"], // this old value will be replaced
      });

      const recordPropertyA = await RecordProperty.findOne({
        where: { rawValue: "a@example.com" },
      });
      await recordPropertyA.update({ state: "pending", startedAt: new Date() });
      const recordPropertyB = await RecordProperty.findOne({
        where: { rawValue: "b@example.com" },
      });
      await recordPropertyB.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [recordA.id, recordB.id],
        propertyIds: [recordPropertyA.propertyId, recordPropertyB.propertyId],
      });

      await recordPropertyA.reload();
      expect(recordPropertyA.state).toBe("ready");
      expect(recordPropertyA.rawValue).toBe(null);
      expect(recordPropertyA.invalidValue).toBe("not-an-email");
      expect(recordPropertyA.startedAt).toBe(null);
      expect(recordPropertyA.invalidReason).toBe("Invalid email value");

      await recordPropertyB.reload();
      expect(recordPropertyB.state).toBe("ready");
      expect(recordPropertyB.rawValue).toBe(null);
      expect(recordPropertyB.invalidValue).toBe("not-an-email");
      expect(recordPropertyB.startedAt).toBe(null);
      expect(recordPropertyB.invalidReason).toBe("Invalid email value");

      await recordA.destroy();
      await recordB.destroy();

      spy.mockRestore();
    });

    test("import errors will be retried one at a time with importRecordProperty", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperties")
        .mockImplementation(() => {
          throw new Error("Oh no!");
        });

      const recordA = await helper.factories.record();
      await recordA.addOrUpdateProperties({ userId: [201] });

      const recordB = await helper.factories.record();
      await recordB.addOrUpdateProperties({ userId: [202] });

      const recordPropertyA = await RecordProperty.findOne({
        where: { rawValue: "201" },
      });
      await recordPropertyA.update({ state: "pending", startedAt: new Date() });
      const recordPropertyB = await RecordProperty.findOne({
        where: { rawValue: "202" },
      });
      await recordPropertyB.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [recordA.id, recordB.id],
        propertyIds: [recordPropertyA.propertyId, recordPropertyB.propertyId],
      });

      await recordPropertyA.reload();
      await recordPropertyB.reload();
      expect(recordPropertyA.state).toBe("pending");
      expect(recordPropertyA.startedAt).not.toBe(null);
      expect(recordPropertyB.state).toBe("pending");
      expect(recordPropertyB.startedAt).not.toBe(null);

      const foundTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );
      expect(foundTasks.length).toBe(2);
      expect(foundTasks.map((t) => t.args[0].recordId).sort()).toEqual(
        [recordA.id, recordB.id].sort()
      );
      expect(foundTasks.map((t) => t.args[0].propertyId).sort()).toEqual(
        [recordPropertyA.propertyId, recordPropertyB.propertyId].sort()
      );

      await recordA.destroy();
      await recordB.destroy();

      spy.mockRestore();
    });

    test("update errors will be retried one at a time with importRecordProperty", async () => {
      const record = await helper.factories.record();
      await record.addOrUpdateProperties({ userId: [301] });

      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "301" },
      });
      await recordProperty.update({ state: "pending" });

      const updateSpy = jest
        .spyOn(RecordOps, "addOrUpdateProperties")
        .mockImplementation(() => {
          throw new Error("nope!");
        });

      await specHelper.runTask("recordProperty:importRecordProperties", {
        recordIds: [record.id],
        propertyIds: [recordProperty.propertyId],
      });

      await recordProperty.reload();
      expect(recordProperty.state).toBe("pending");

      const foundTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].recordId).toEqual(record.id);
      expect(foundTasks[0].args[0].propertyId).toEqual(
        recordProperty.propertyId
      );

      await record.destroy();
      updateSpy.mockRestore();
    });

    describe("with records", () => {
      let recordA: GrouparooRecord;
      let recordB: GrouparooRecord;
      let recordC: GrouparooRecord;

      beforeAll(async () => {
        recordA = await helper.factories.record();
        recordB = await helper.factories.record();
        recordC = await helper.factories.record();
      });

      afterAll(async () => {
        await recordA.destroy();
        await recordB.destroy();
        await recordC.destroy();
      });

      beforeEach(async () => {
        await RecordProperty.update(
          { state: "pending" },
          {
            where: {
              recordId: { [Op.in]: [recordA.id, recordB.id, recordC.id] },
            },
          }
        );
      });

      test("will fan out non-unique recordProperties for multiple properties", async () => {
        plugin.registerPlugin({
          name: "test-plugin",
          apps: [
            {
              name: "test-non-unique-app",
              displayName: "test-non-unique-app",
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
              displayName: "test-non-unique-connection",
              description: "a test app",
              apps: ["test-non-unique-app"],
              direction: "import",
              options: [],
              groupAggregations: [AggregationMethod.Exact],
              methods: {
                propertyOptions: async () => [],
                sourceFilters: async () => [],
                recordProperties: async ({ properties, records }) => {
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
          modelId: model.id,
        });
        await otherSource.setMapping({ word: "lastName" });
        await otherSource.update({ state: "ready" });

        const newPropertyA = await helper.factories.property(otherSource, {
          key: "wordInSpanish",
        });
        const newPropertyB = await helper.factories.property(otherSource, {
          key: "wordInFrench",
        });
        await newPropertyA.update({ state: "ready" });
        await newPropertyB.update({ state: "ready" });
        await recordA.buildNullProperties();
        await recordB.buildNullProperties();
        await recordC.buildNullProperties();

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
        await specHelper.runTask("recordProperty:importRecordProperties", {
          recordIds: [recordA.id, recordB.id, recordC.id],
          propertyIds: [newPropertyA.id, newPropertyB.id],
        });

        const recordPropertiesA = await recordA.getProperties();
        const recordPropertiesB = await recordB.getProperties();
        const recordPropertiesC = await recordC.getProperties();
        expect(recordPropertiesA[newPropertyA.id].values).toEqual(["foo"]);
        expect(recordPropertiesB[newPropertyA.id].values).toEqual(["foo"]);
        expect(recordPropertiesC[newPropertyA.id].values).toEqual(["foo"]);
        expect(recordPropertiesA[newPropertyB.id].values).toEqual(["bar"]);
        expect(recordPropertiesB[newPropertyB.id].values).toEqual(["bar"]);
        expect(recordPropertiesC[newPropertyB.id].values).toEqual(["bar"]);

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
          await specHelper.runTask("recordProperty:importRecordProperties", {
            recordIds: [recordA.id, recordB.id, recordC.id],
            propertyIds: [property.id],
          });
        }

        // run again for other properties
        for (const property of properties) {
          await specHelper.runTask("recordProperty:importRecordProperties", {
            recordIds: [recordA.id, recordB.id, recordC.id],
            propertyIds: [property.id],
          });
        }

        const recordProperties = await recordA.getProperties();
        expect(recordProperties.firstName.values).toEqual(["Mario"]);
        expect(recordProperties.lastName.values).toEqual(["Mario"]);
      });
    });
  });
});
