import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";
import { Profile } from "../../src/models/Profile";

let actionhero, api;

describe("integration/events", () => {
  let connection;
  let csrfToken;
  let appGuid;
  let userIdRule;
  let apiKey;
  let eventGuid;
  let profile;

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

  test("an event with an anonymousId can be created and task enqueued", async () => {
    const { error, event } = await specHelper.runAction("event:create", {
      apiKey,
      type: "pageview",
      anonymousId: "abc123",
      data: { path: "/" },
    });

    expect(error).toBeFalsy();
    expect(event.guid).toMatch(/evt_.*/);
    expect(event.type).toBe("pageview");
    expect(event.ipAddress).toBeTruthy();
    expect(event.profileGuid).toBeFalsy();
    expect(event.anonymousId).toBe("abc123");
    expect(event.data).toEqual({ path: "/" });

    const foundTasks = await specHelper.findEnqueuedTasks(
      "event:associateProfile"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0]).toEqual({ eventGuid: event.guid });
    eventGuid = event.guid;
  });

  test("the event can be processed, creating a profile sharing the event anonymousId", async () => {
    let profiles = await Profile.findAll();
    expect(profiles.length).toBe(0);

    await specHelper.runTask("event:associateProfile", { eventGuid });

    profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);
    profile = profiles[0];

    expect(profile.guid).toBeTruthy();
    expect(profile.anonymousId).toBe("abc123");
  });

  test("another event with the same anonymousId will utilize the existing profile", async () => {
    const { event } = await specHelper.runAction("event:create", {
      apiKey,
      type: "pageview",
      anonymousId: "abc123",
      data: { path: "/about" },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event.guid,
    });

    const profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);

    const profileEvents = await profile.events();
    expect(profileEvents.length).toBe(2);
  });

  test("sending a userId with an event will update the profile", async () => {
    const { event } = await specHelper.runAction("event:create", {
      apiKey,
      type: "pageview",
      anonymousId: "abc123",
      userId: 100,
      data: { path: "/web-sign-in" },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event.guid,
    });

    const profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);
    const properties = await profile.properties();
    expect(properties["userId"].value).toBe(100);

    const profileEvents = await profile.events();
    expect(profileEvents.length).toBe(3);
  });

  test("sending events with a different anonymousId but same userId will utilize the existing profile", async () => {
    const { event } = await specHelper.runAction("event:create", {
      apiKey,
      type: "pageview",
      anonymousId: "def456",
      userId: 100,
      data: { path: "/mobile-sign-in" },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event.guid,
    });

    const profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);
    const properties = await profile.properties();
    expect(properties["userId"].value).toBe(100);

    const profileEvents = await profile.events();
    expect(profileEvents.length).toBe(4);
  });

  test("events creating 2 anonymousId profiles can be merged into one when userId is provided with subsequent events", async () => {
    const { event: event1 } = await specHelper.runAction("event:create", {
      apiKey,
      type: "mobile-sceneview",
      anonymousId: "zzz999",
      data: { path: "/" },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event1.guid,
    });

    let profiles = await Profile.findAll();
    expect(profiles.length).toBe(2);

    const { event: event2 } = await specHelper.runAction("event:create", {
      apiKey,
      type: "mobile-sceneview",
      anonymousId: "zzz999",
      userId: 100,
      data: { path: "/sign-in" },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event2.guid,
    });

    profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);

    const profileEvents = await profile.events();
    expect(profileEvents.length).toBe(6);
  });
});
