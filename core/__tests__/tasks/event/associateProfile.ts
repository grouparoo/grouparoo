import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile } from "../../../src/models/Profile";
import { App } from "../../../src/models/App";
import { Property } from "../../../src/models/Property";

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
      identifyingPropertyGuid: userIdProperty.guid,
    });
    await eventApp.update({ state: "ready" });
  });

  describe("event:associateProfile", () => {
    test("can be enqueued", async () => {
      await task.enqueue("event:associateProfile", { eventGuid: "abc123" });
      const foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfile"
      );
      expect(foundTasks.length).toEqual(1);
    });

    test("it will create a new profile from provided event data", async () => {
      const event = await helper.factories.event({
        anonymousId: "abc123",
      });

      await specHelper.runTask("event:associateProfile", {
        eventGuid: event.guid,
      });

      await event.reload();
      const profile = await Profile.findOne();
      expect(profile).toBeTruthy();
      expect(event.profileGuid).toBe(profile.guid);
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

      await task.enqueue("event:associateProfile", { eventGuid: event.guid });
      await task.enqueue("event:associateProfile", { eventGuid: event.guid });
      await task.enqueue("event:associateProfile", { eventGuid: event.guid });

      foundTasks = await specHelper.findEnqueuedTasks("event:associateProfile");
      expect(foundTasks.length).toEqual(1);
    });
  });
});
