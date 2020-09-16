import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Event } from "./../../../src/models/Event";

let actionhero;

describe("tasks/profile:destroyEvents", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profile:destroyEvents", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profile:destroyEvents", { guid: "abc123" });
      const found = await specHelper.findEnqueuedTasks("profile:destroyEvents");
      expect(found.length).toEqual(1);
    });

    test("it will destroy the profile's events", async () => {
      const profile = await helper.factories.profile();
      const event = await helper.factories.event();
      await event.update({ profileGuid: profile.guid });
      const otherEvent = await helper.factories.event();

      let count = await Event.count();
      expect(count).toBe(2);

      await specHelper.runTask("profile:destroyEvents", { guid: profile.guid });

      count = await Event.count();
      expect(count).toBe(1);
    });
  });
});
