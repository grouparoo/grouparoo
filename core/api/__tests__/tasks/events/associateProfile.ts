import { helper } from "../../utils/specHelper";
import { task, specHelper } from "actionhero";
import { Profile } from "../../../src/models/Profile";
import { App } from "../../../src/models/App";
import { ProfilePropertyRule } from "../../../src/models/ProfilePropertyRule";

let actionhero, api;

describe("tasks/event:associateProfile", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  beforeAll(async () => {
    const userIdRule = await ProfilePropertyRule.findOne({
      where: { key: "userId" },
    });
    const eventApp = await App.scope(null).findOne({
      where: { type: "events" },
    });
    await eventApp.setOptions({
      identifyingProfilePropertyRuleGuid: userIdRule.guid,
    });
    await eventApp.update({ state: "ready" });
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  describe("event:associateProfile", () => {
    test("can be enqueued", async () => {
      await task.enqueue("event:associateProfile", { eventGuid: "abc123" });
      const foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfile"
      );
      expect(foundTasks.length).toEqual(1);
      expect(foundTasks[0].timestamp).toBeNull();
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
  });
});
