import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { ProfileProperty, Property } from "../../..";

describe("tasks/profileProperty:importProfileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("profileProperty:importProfileProperty", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:importProfileProperty", {
        profileGuid: "abc",
        propertyGuid: "abc",
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperty"
      );
      expect(found.length).toEqual(1);
    });

    test("will import profile properties that have no dependencies", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const property = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await property.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        profileGuid: profile.guid,
        propertyGuid: property.propertyGuid,
      });

      // new value and state
      await property.reload();
      expect(property.state).toBe("ready");
      expect(property.rawValue).toBe(`${profile.guid}@example.com`);
    });

    test("will not import profile properties that have pending dependencies", async () => {
      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [null],
        email: ["old@example.com"],
      });
      const property = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await property.update({ state: "pending" });

      const userIdProfileProperty = await ProfileProperty.findOne({
        where: {
          profileGuid: profile.guid,
          propertyGuid: userIdProperty.guid,
        },
      });
      await userIdProfileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileGuids: [profile.guid],
        propertyGuid: property.propertyGuid,
      });

      // no change
      await property.reload();
      expect(property.state).toBe("pending");
      expect(property.rawValue).toBe(`old@example.com`);
    });
  });
});
