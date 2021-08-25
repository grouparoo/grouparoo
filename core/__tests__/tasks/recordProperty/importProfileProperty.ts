import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooPlugin,
  GrouparooRecord,
  RecordProperty,
  Property,
} from "../../../src";

describe("tasks/profileProperty:importProfileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("profileProperty:importProfileProperty", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:importProfileProperty", {
        recordId: "abc",
        propertyId: "abc",
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperty"
      );
      expect(found.length).toEqual(1);
    });

    test("does not throw if the record or property cannot be found", async () => {
      const profileProperty = await Property.findOne();
      const record = await helper.factories.record();

      await specHelper.runTask("profileProperty:importProfileProperty", {
        recordId: "missing",
        propertyId: "missing",
      });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        recordId: record.id,
        propertyId: "missing",
      });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        recordId: "missing",
        propertyId: profileProperty.id,
      });

      await record.destroy();
    });

    test("will import record properties that have no dependencies", async () => {
      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const profileProperty = await RecordProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        recordId: record.id,
        propertyId: profileProperty.propertyId,
      });

      // new value and state
      await profileProperty.reload();
      expect(profileProperty.state).toBe("ready");
      expect(profileProperty.rawValue).toBe(`${record.id}@example.com`);
    });

    test("will set value to null if the record property no longer exists", async () => {
      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );

      let testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );

      const spy = jest
        .spyOn(testPluginConnection.methods, "profileProperty")
        .mockImplementation(() => undefined);

      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({
        userId: [99],
        email: ["someoldemail@example.com"],
      });
      const profileProperty = await RecordProperty.findOne({
        where: { rawValue: "someoldemail@example.com", recordId: record.id },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        recordId: record.id,
        propertyId: profileProperty.propertyId,
      });

      // new value and state
      await profileProperty.reload();
      expect(profileProperty.state).toBe("ready");
      expect(profileProperty.rawValue).toBe(null);

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

      await specHelper.runTask("profileProperty:importProfileProperty", {
        recordId: record.id,
        propertyId: profileProperty.propertyId,
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
    });
  });
});
