import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import {
  Source,
  Property,
  GrouparooRecord,
  RecordProperty,
  PluginConnection,
  RecordPropertyPluginMethod,
  RecordPropertiesPluginMethod,
  GrouparooPlugin,
} from "../../../src";
import { RecordPropertyOps } from "../../../src/modules/ops/recordProperty";

describe("models/source/processPendingRecordProperties", () => {
  let recordA: GrouparooRecord;
  let recordB: GrouparooRecord;
  let source: Source;

  let userId: Property;
  let email: Property;
  let firstName: Property;
  let lastName: Property;
  let purchaseAmounts: Property;
  let purchases: Property;
  let ltv: Property;
  let isVIP: Property;
  let lastLoginAt: Property;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let testPluginConnection: PluginConnection;
  let prevRecordPropertyMethod: RecordPropertyPluginMethod;
  let prevRecordPropertiesMethod: RecordPropertiesPluginMethod;

  beforeAll(async () => {
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );

    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );

    prevRecordPropertyMethod = testPluginConnection.methods.recordProperty;
    prevRecordPropertiesMethod = testPluginConnection.methods.recordProperties;
  });

  function resetPlugin() {
    testPluginConnection.methods.recordProperty = prevRecordPropertyMethod;
    testPluginConnection.methods.recordProperties = prevRecordPropertiesMethod;
  }

  afterAll(() => {
    resetPlugin();
  });

  beforeAll(async () => {
    source = await Source.findOne();
    recordA = await helper.factories.record();
    recordB = await helper.factories.record();

    userId = await Property.findOne({ where: { key: "userId" } });
    email = await Property.findOne({ where: { key: "email" } });
    firstName = await Property.findOne({ where: { key: "firstName" } });
    lastName = await Property.findOne({ where: { key: "lastName" } });
    purchaseAmounts = await Property.findOne({
      where: { key: "purchaseAmounts" },
    });
    purchases = await Property.findOne({ where: { key: "purchases" } });
    ltv = await Property.findOne({ where: { key: "ltv" } });
    isVIP = await Property.findOne({ where: { key: "isVIP" } });
    lastLoginAt = await Property.findOne({ where: { key: "lastLoginAt" } });
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await RecordProperty.update(
      { state: "pending", startedAt: null },
      { where: {} }
    );
  });

  test("there are 9 properties", async () => {
    expect(await Property.count()).toBe(9);
  });

  describe("plugin has both importRecordProperty and importRecordProperties methods", () => {
    test("a blend of exact and non-exact properties from the same source will be properly grouped", async () => {
      await makeExact(["userId", "email", "firstName", "lastName"]); // 4 exact properties

      await RecordPropertyOps.processPendingRecordProperties(source);
      const propertiesTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );
      const propertyTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );

      const comboPropertiesTasks = propertiesTasks.filter(
        (t) => t.args[0].propertyIds.length > 1
      );
      const singlePropertiesTasks = propertiesTasks.filter(
        (t) => t.args[0].propertyIds.length === 1
      );

      expect(propertyTasks.length).toEqual(0);

      expect(comboPropertiesTasks.length).toBe(1);
      expect(singlePropertiesTasks.length).toBe(5); // 5 non-grouped properties

      expect(comboPropertiesTasks[0].args[0].propertyIds.sort()).toEqual(
        [userId.id, email.id, firstName.id, lastName.id].sort()
      );
      expect(comboPropertiesTasks[0].args[0].recordIds.sort()).toEqual(
        [recordA.id, recordB.id].sort()
      );
    });

    test("all exact properties, but some exclusions based on other types", async () => {
      await makeExact([
        "userId",
        "email",
        "firstName",
        "lastName",
        "purchaseAmounts",
        "purchases",
        "ltv",
        "isVIP",
        "lastLoginAt",
      ]); // 9 exact properties

      await RecordPropertyOps.processPendingRecordProperties(source);
      const propertiesTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );
      const propertyTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );

      const comboPropertiesTasks = propertiesTasks.filter(
        (t) => t.args[0].propertyIds.length > 1
      );
      const singlePropertiesTasks = propertiesTasks.filter(
        (t) => t.args[0].propertyIds.length === 1
      );

      expect(propertyTasks.length).toEqual(0);

      expect(comboPropertiesTasks.length).toBe(1);
      expect(singlePropertiesTasks.length).toBe(2); // 2 non-grouped properties (isArray)

      expect(comboPropertiesTasks[0].args[0].propertyIds.sort()).toEqual(
        [
          userId.id,
          email.id,
          firstName.id,
          lastName.id,
          ltv.id,
          isVIP.id,
          lastLoginAt.id,
          // purchaseAmounts.id, -- array property
          // purchases.id, -- array property
        ].sort()
      );
      expect(comboPropertiesTasks[0].args[0].recordIds.sort()).toEqual(
        [recordA.id, recordB.id].sort()
      );
    });

    test("no exact properties", async () => {
      await makeExact([]); // 0 exact properties

      await RecordPropertyOps.processPendingRecordProperties(source);
      const propertiesTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );
      const propertyTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );

      const comboPropertiesTasks = propertiesTasks.filter(
        (t) => t.args[0].propertyIds.length > 1
      );
      const singlePropertiesTasks = propertiesTasks.filter(
        (t) => t.args[0].propertyIds.length === 1
      );

      expect(propertyTasks.length).toEqual(0);
      expect(comboPropertiesTasks.length).toBe(0);
      expect(singlePropertiesTasks.length).toBe(9); // 9 non-grouped properties
    });
  });

  describe("plugin has only importRecordProperty method", () => {
    beforeAll(() => {
      resetPlugin();
      delete testPluginConnection.methods.recordProperties;
    });

    test("a blend of exact and non-exact properties from the same source will be properly grouped", async () => {
      await makeExact(["userId", "email", "firstName", "lastName"]); // 4 exact properties

      await RecordPropertyOps.processPendingRecordProperties(source);
      const propertiesTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );
      const propertyTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );

      expect(propertyTasks.length).toEqual(9 * 2); // 9 properties * 2 records
      expect(propertiesTasks.length).toBe(0);
    });

    test("no exact properties", async () => {
      await makeExact([]); // 0 exact properties

      await RecordPropertyOps.processPendingRecordProperties(source);
      const propertiesTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperties"
      );
      const propertyTasks = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );

      expect(propertyTasks.length).toEqual(9 * 2); // 9 properties * 2 records
      expect(propertiesTasks.length).toBe(0);
    });
  });
});

async function makeExact(propertyKeys: string[]) {
  const properties = await Property.findAll();

  for (const property of properties) {
    const options = await property.getOptions();
    if (propertyKeys.includes(property.key)) {
      options.aggregationMethod = "exact";
    } else {
      options.aggregationMethod = "min";
    }
    await property.setOptions(options);
  }
}
