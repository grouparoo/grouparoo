import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile, App, Property } from "../../../src";

describe("tasks/event:associateProfile", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    const userIdProperty = await Property.findOne({
      where: { key: "userId" },
    });
    const eventApp = await App.create({ type: "events", name: "events" });
    await eventApp.setOptions({
      identifyingPropertyId: userIdProperty.id,
    });
    await eventApp.update({ state: "ready" });
  });

  describe("event:associateProfile", () => {
    test("can be enqueued", async () => {
      await task.enqueue("event:associateProfile", { eventId: "abc123" });
      const foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfile"
      );
      expect(foundTasks.length).toEqual(1);
    });

    test("does not throw if the event cannot be found", async () => {
      await specHelper.runTask("event:associateProfile", {
        eventId: "missing",
      });
    });

    test("it will create a new profile from provided event data", async () => {
      const event = await helper.factories.event({
        anonymousId: "abc123",
      });

      await specHelper.runTask("event:associateProfile", {
        eventId: event.id,
      });

      await event.reload();
      const profile = await Profile.findOne();
      expect(profile).toBeTruthy();
      expect(event.profileId).toBe(profile.id);
      expect(event.profileAssociatedAt).toBeTruthy();
    });

    test("enqueuing this task multiple times for the same event will be de-duplicated", async () => {
      const event = await helper.factories.event({
        anonymousId: "abc123",
      });

      let foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfile"
      );
      expect(foundTasks.length).toEqual(1);

      await task.enqueue("event:associateProfile", { eventId: event.id });
      await task.enqueue("event:associateProfile", { eventId: event.id });
      await task.enqueue("event:associateProfile", { eventId: event.id });

      foundTasks = await specHelper.findEnqueuedTasks("event:associateProfile");
      expect(foundTasks.length).toEqual(1);
    });
  });
});
