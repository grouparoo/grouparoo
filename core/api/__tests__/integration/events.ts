import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";

let actionhero, api;

describe("integration/events", () => {
  let connection;
  let csrfToken;
  let appGuid;
  let userIdRule;
  let apiKey;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
    await api.resque.queue.connection.redis.flushdb();
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("the first user can create an account and the first team", async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;
  });

  test("the events app is present and can be configured", async () => {
    connection.params = {
      csrfToken,
    };
    const { apps } = await specHelper.runAction("apps:list", connection);
    expect(apps.length).toBe(2); // profile property rules + events
    appGuid = apps.filter((app) => app.type === "events")[0].guid;

    userIdRule = await ProfilePropertyRule.findOne({
      where: { key: "userId" },
    });

    connection.params = {
      csrfToken,
      guid: appGuid,
      options: { identifyingProfilePropertyRuleGuid: userIdRule.guid },
      state: "ready",
    };
    const { error, app } = await specHelper.runAction("app:edit", connection);

    expect(error).toBeUndefined();
    expect(app.name).toBe("events");
    expect(app.state).toBe("ready");
    appGuid = app.guid;
  });

  test("an api key can be created for events", async () => {
    connection.params = {
      csrfToken,
      name: "events-api-key",
    };
    const { apiKey: _apiKeyA, errorA } = await specHelper.runAction(
      "apiKey:create",
      connection
    );

    expect(errorA).toBeUndefined();
    apiKey = _apiKeyA.apiKey;
    _apiKeyA.permissions.map((permission) => {
      expect(permission.read).toBe(false);
      expect(permission.write).toBe(false);
    });

    const eventPermissionGuid = _apiKeyA.permissions.filter(
      (permission) => permission.topic === "event"
    )[0].guid;

    connection.params = {
      csrfToken,
      guid: _apiKeyA.guid,
      permissions: [{ guid: eventPermissionGuid, read: true, write: true }],
    };
    const { apiKey: _apiKeyB, errorB } = await specHelper.runAction(
      "apiKey:edit",
      connection
    );

    expect(errorB).toBeUndefined();
    const eventPermission = _apiKeyB.permissions.filter(
      (permission) => permission.topic === "event"
    )[0];
    expect(eventPermission.topic).toBe("event");
    expect(eventPermission.read).toBe(true);
    expect(eventPermission.write).toBe(true);
  });

  test.todo("an event with an anonymousId can be created");

  test.todo("the event can be processed, creating a profile");

  test.todo(
    "another event with the same anonymousId will utilize the existing profile"
  );

  test.todo("sending a userId with an event will update the profile");

  test.todo(
    "sending events with a different anonymousId but same userId will utilize the existing profile"
  );

  test.todo(
    "events creating 2 anonymousId profiles can be merged into one when userId is provided with subsequent events"
  );

  // describe("event:associateProfile", () => {
  //   test("can be enqueued", async () => {
  //     await task.enqueue("event:associateProfile", { eventGuid: "abc123" });
  //     const foundTasks = await specHelper.findEnqueuedTasks(
  //       "event:associateProfile"
  //     );
  //     expect(foundTasks.length).toEqual(1);
  //     expect(foundTasks[0].timestamp).toBeNull();
  //   });

  //   test("it will create a new profile from provided event data", async () => {
  //     const event = await helper.factories.event({
  //       anonymousId: "abc123",
  //     });

  //     await specHelper.runTask("event:associateProfile", {
  //       eventGuid: event.guid,
  //     });

  //     await event.reload();
  //     const profile = await Profile.findOne();
  //     expect(profile).toBeTruthy();
  //     expect(event.profileGuid).toBe(profile.guid);
  //     expect(event.profileAssociatedAt).toBeTruthy();
  //   });
  // });
});
