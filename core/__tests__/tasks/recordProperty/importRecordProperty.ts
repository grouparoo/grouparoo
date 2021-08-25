import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooPlugin,
  GrouparooRecord,
  RecordProperty,
  Property,
} from "../../../src";

describe("tasks/recordProperty:importRecordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

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
      await recordProperty.update({ state: "pending" });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: recordProperty.propertyId,
      });

      // new value and state
      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(`${record.id}@example.com`);
    });

    test("will set value to null if the record property no longer exists", async () => {
      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );

      let testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );

      const spy = jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(() => undefined);

      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [99],
        email: ["someoldemail@example.com"],
      });
      const recordProperty = await RecordProperty.findOne({
        where: { rawValue: "someoldemail@example.com", recordId: record.id },
      });
      await recordProperty.update({ state: "pending" });

      await specHelper.runTask("recordProperty:importRecordProperty", {
        recordId: record.id,
        propertyId: recordProperty.propertyId,
      });

      // new value and state
      await recordProperty.reload();
      expect(recordProperty.state).toBe("ready");
      expect(recordProperty.rawValue).toBe(null);

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
      await recordProperty.update({ state: "pending" });

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
