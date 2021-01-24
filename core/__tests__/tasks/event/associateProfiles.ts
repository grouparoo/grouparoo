import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";

describe("tasks/event:associateProfiles", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  describe("event:associateProfile", () => {
    test("can be enqueued", async () => {
      await task.enqueue("event:associateProfiles", {});
      const foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfiles"
      );
      expect(foundTasks.length).toEqual(1);
    });

    test("it will enqueue new tasks to associate not-yet associated events", async () => {
      const event = await helper.factories.event({
        anonymousId: "abc123",
      });

      // delete the associate task that was created along with the event
      await api.resque.queue.connection.redis.flushdb();

      await specHelper.runTask("event:associateProfiles", {});

      const foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfile"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].eventGuid).toBe(event.guid);
    });
  });
});
