import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { ProfileProperty, Property } from "../../../src";

describe("tasks/profileProperty:importProfileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("profileProperty:importProfileProperty", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:importProfileProperty", {
        profileId: "abc",
        propertyId: "abc",
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperty"
      );
      expect(found.length).toEqual(1);
    });

    test("does not throw if the profile or property cannot be found", async () => {
      const profileProperty = await Property.findOne();
      const profile = await helper.factories.profile();

      await specHelper.runTask("profileProperty:importProfileProperty", {
        profileId: "missing",
        propertyId: "missing",
      });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        profileId: profile.id,
        propertyId: "missing",
      });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        profileId: "missing",
        propertyId: profileProperty.id,
      });

      await profile.destroy();
    });

    test("will import profile properties that have no dependencies", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const profileProperty = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        profileId: profile.id,
        propertyId: profileProperty.propertyId,
      });

      // new value and state
      await profileProperty.reload();
      expect(profileProperty.state).toBe("ready");
      expect(profileProperty.rawValue).toBe(`${profile.id}@example.com`);
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
      const profileProperty = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await profileProperty.update({ state: "pending" });

      const userIdProfileProperty = await ProfileProperty.findOne({
        where: {
          profileId: profile.id,
          propertyId: userIdProperty.id,
        },
      });
      await userIdProfileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperty", {
        profileId: profile.id,
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
