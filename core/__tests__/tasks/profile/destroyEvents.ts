import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Event } from "./../../../src";

describe("tasks/profile:destroyEvents", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  describe("profile:destroyEvents", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profile:destroyEvents", { profileId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("profile:destroyEvents");
      expect(found.length).toEqual(1);
    });

    test("it will destroy the profile's events", async () => {
      const profile = await helper.factories.profile();
      const event = await helper.factories.event();
      await event.update({ profileId: profile.id });
      const otherEvent = await helper.factories.event();

      let count = await Event.count();
      expect(count).toBe(2);

      await specHelper.runTask("profile:destroyEvents", {
        profileId: profile.id,
      });

      count = await Event.count();
      expect(count).toBe(1);
    });
  });
});
