import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooPlugin,
  RecordProperty,
  Property,
  PluginConnection,
} from "../../../src";
import { InvalidReasons } from "../../../src/models/RecordProperty";

describe("tasks/recordProperty:importRecordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let testPluginConnection: PluginConnection;

  beforeAll(() => {
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );
    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );
  });

  describe("recordProperty:importRecordProperty", () => {
    test("can be enqueued", async () => {
      await task.enqueue("recordProperty:importRecordProperty", {
        recordId: "abc",
        propertyId: "abc",
      });
      const found = await specHelper.findEnqueuedTasks(
        "recordProperty:importRecordProperty"
      );
      expect(found.length).toEqual(1);
    });

    test("does not throw if the record or property cannot be found", async () => {
      const recordProperty = await Property.findOne();
      const record = await helper.factories.record();

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: "missing",
        propertyId: "missing",
      });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: "missing",
      });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: "missing",
        propertyId: recordProperty.id,
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
        where: { rawValue: "old@example.com" },
      });
      await recordProperty.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: recordProperty.propertyId,
      });

      // new value and state
      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(`${record.id}@example.com`);
      expect(recordProperty.startedAt).toBe(null);
    });

    test("will not crash with invalidValues and they will be set on the recordProperties", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        //@ts-ignore // partial mock
        .mockImplementation(() => {
          return "not-an-email";
        });

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [101],
        email: ["a@example.com"], // this old value will be replaced
      });

      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "a@example.com" },
      });
      await recordProperty.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: recordProperty.propertyId,
      });

      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(null);
      expect(recordProperty.invalidValue).toBe("not-an-email");
      expect(recordProperty.startedAt).toBe(null);
      expect(recordProperty.invalidReason).toBe("Invalid email value");

      await record.destroy();

      spy.mockRestore();
    });

    test("will set null on propertyValues when there is a duplicate unique value", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        //@ts-ignore // partial mock
        .mockImplementation(() => {
          return "mario@example.com";
        });

      const recordA = await helper.factories.record();
      await recordA.addOrUpdateProperties({ email: ["mario@example.com"] });

      const recordB = await helper.factories.record();
      const recordPropertyB = await RecordProperty.findOne({
        where: { propertyId: "email", recordId: recordB.id },
      });
      await recordPropertyB.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: recordB.id,
        propertyId: recordPropertyB.propertyId,
      });

      await recordPropertyB.reload();
      expect(recordPropertyB.state).toBe("ready");
      expect(recordPropertyB.rawValue).toBe(null);
      expect(recordPropertyB.invalidValue).toBe("mario@example.com");
      expect(recordPropertyB.startedAt).toBe(null);
      expect(recordPropertyB.invalidReason).toBe(InvalidReasons.Duplicate);
      expect(recordPropertyB.invalidReason).toBe("Duplicate Value");

      await recordA.destroy();
      await recordB.destroy();

      spy.mockRestore();
    });

    test("throwing an error other than UniqueConstraintError will raise a resque error", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(() => {
          throw new Error("oh no!");
        });

      const record = await helper.factories.record();
      const recordProperty = await RecordProperty.findOne({
        where: { propertyId: "email", recordId: record.id },
      });
      await recordProperty.update({ state: "pending", startedAt: new Date() });

      await expect(
        specHelper.runTask("recordProperty:importRecordProperty", {
          recordId: record.id,
          propertyId: recordProperty.propertyId,
        })
      ).rejects.toThrow(/oh no!/);

      await recordProperty.reload();
      expect(recordProperty.state).toBe("pending");
      expect(recordProperty.rawValue).toBe(null);
      expect(recordProperty.invalidValue).toBe(null);
      expect(recordProperty.startedAt).not.toBe(null);
      expect(recordProperty.invalidReason).toBe(null);

      await record.destroy();

      spy.mockRestore();
    });

    test("will set value to null if the record property no longer exists", async () => {
      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(() => undefined);

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [99],
        email: ["someoldemail@example.com"],
      });
      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "someoldemail@example.com", recordId: record.id },
      });
      await recordProperty.update({ state: "pending", startedAt: new Date() });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: recordProperty.propertyId,
      });

      // new value and state
      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(null);
      expect(recordProperty.startedAt).toBe(null);

      spy.mockRestore();

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

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: recordProperty.propertyId,
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
    });
  });
});
