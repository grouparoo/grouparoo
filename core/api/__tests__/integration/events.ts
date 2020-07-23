import { helper } from "../utils/specHelper";
import { api, specHelper } from "actionhero";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";
import { Profile } from "../../src/models/Profile";
import { Option } from "../../src/models/Option";

let actionhero;

describe("integration/events", () => {
  let connection;
  let csrfToken;
  let appGuid;
  let sourceGuid;
  let profilePropertyRuleGuid;
  let userIdRule;
  let apiKey;
  let eventGuid;
  let profile: Profile;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
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
      data: { path: "/", loadTime: 100 },
    });

    expect(error).toBeFalsy();
    expect(event.guid).toMatch(/evt_.*/);
    expect(event.type).toBe("pageview");
    expect(event.ipAddress).toBeTruthy();
    expect(event.profileGuid).toBeFalsy();
    expect(event.anonymousId).toBe("abc123");
    expect(event.data).toEqual({ path: "/", loadTime: "100" });

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
      data: { path: "/about", loadTime: 100 },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event.guid,
    });

    const profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);

    const profileEvents = await profile.$get("events");
    expect(profileEvents.length).toBe(2);
  });

  test("sending a userId with an event will update the profile", async () => {
    const { event } = await specHelper.runAction("event:create", {
      apiKey,
      type: "pageview",
      anonymousId: "abc123",
      userId: 100,
      data: { path: "/web-sign-in", loadTime: 100 },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event.guid,
    });

    const profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);
    const properties = await profile.properties();
    expect(properties["userId"].values).toEqual([100]);

    const profileEvents = await profile.$get("events");
    expect(profileEvents.length).toBe(3);
  });

  test("sending events with a different anonymousId but same userId will utilize the existing profile", async () => {
    const { event } = await specHelper.runAction("event:create", {
      apiKey,
      type: "pageview",
      anonymousId: "def456",
      userId: 100,
      data: { path: "/mobile-sign-in", loadTime: 200 },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event.guid,
    });

    const profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);
    const properties = await profile.properties();
    expect(properties["userId"].values).toEqual([100]);

    const profileEvents = await profile.$get("events");
    expect(profileEvents.length).toBe(4);
  });

  test("events creating 2 anonymousId profiles can be merged into one when userId is provided with subsequent events", async () => {
    const { event: event1 } = await specHelper.runAction("event:create", {
      apiKey,
      type: "mobile-sceneview",
      anonymousId: "zzz999",
      data: { path: "/", loadTime: 200 },
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
      data: { path: "/sign-in", loadTime: 100 },
    });
    await specHelper.runTask("event:associateProfile", {
      eventGuid: event2.guid,
    });

    profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);

    const profileEvents = await profile.$get("events");
    expect(profileEvents.length).toBe(6);
  });

  test("an event can be viewed", async () => {
    connection.params = {
      csrfToken,
      guid: eventGuid,
    };
    const { event, error } = await specHelper.runAction(
      "event:view",
      connection
    );
    expect(error).toBeFalsy();

    expect(event.guid).toBe(eventGuid);
    expect(event.data).toEqual({
      loadTime: "100",
      path: "/",
    });

    // timestamps should be numbers
    expect(event.createdAt).toBeGreaterThan(0);
    expect(event.updatedAt).toBeGreaterThan(0);
    expect(event.occurredAt).toBeGreaterThan(0);
    expect(event.profileAssociatedAt).toBeGreaterThan(0);
  });

  describe("source", () => {
    test("a source for an event can be created into draft mode", async () => {
      connection.params = {
        csrfToken,
        appGuid,
        name: "pageview-events",
        type: "events-table-import",
      };
      const { source, error } = await specHelper.runAction(
        "source:create",
        connection
      );

      expect(error).toBeFalsy();
      expect(source.guid).toBeTruthy();
      expect(source.state).toBe("draft");

      sourceGuid = source.guid;
    });

    test("an administrator can enumerate the source connection options", async () => {
      connection.params = {
        csrfToken,
        guid: sourceGuid,
      };
      const { error, options } = await specHelper.runAction(
        "source:connectionOptions",
        connection
      );
      expect(error).toBeUndefined();
      expect(options).toEqual({
        type: { options: ["mobile-sceneview", "pageview"], type: "list" },
      });
    });

    test("a source with no options will see an empty preview", async () => {
      const options = await Option.findAll({
        where: { ownerGuid: sourceGuid },
      });
      await Promise.all(options.map((o) => o.destroy()));

      connection.params = {
        csrfToken,
        guid: sourceGuid,
      };
      const { error, preview } = await specHelper.runAction(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview).toEqual([]);
    });

    test("a source can provide options to a preview", async () => {
      connection.params = {
        csrfToken,
        guid: sourceGuid,
        options: { type: "pageview" },
      };
      const { error, preview } = await specHelper.runAction(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview.length).toEqual(4);
      expect(preview[0].type).toEqual("pageview");
    });

    test("a source can have options set", async () => {
      connection.params = {
        csrfToken,
        guid: sourceGuid,
        options: { type: "pageview" },
      };
      const { error, source } = await specHelper.runAction(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.options).toEqual({ type: "pageview" });
    });

    test("a source with options set will return a preview", async () => {
      connection.params = {
        csrfToken,
        guid: sourceGuid,
      };
      const { error, preview } = await specHelper.runAction(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview.length).toEqual(4);
      expect(preview[0].type).toEqual("pageview");
    });

    test("a source can be made active", async () => {
      connection.params = {
        csrfToken,
        guid: sourceGuid,
        state: "ready",
      };
      const { error, source } = await specHelper.runAction(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.state).toBe("ready");
    });

    test("an administrator can view a source", async () => {
      connection.params = {
        csrfToken,
        guid: sourceGuid,
      };
      const { error, source } = await specHelper.runAction(
        "source:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(source.guid).toBeTruthy();
      expect(source.app.name).toBe("events");
    });

    describe("profilePropertyRules", () => {
      test("an administrator can create a new profilePropertyRule", async () => {
        connection.params = {
          csrfToken,
          sourceGuid,
          key: "test-rule",
          type: "integer",
          unique: "false",
        };

        const {
          error,
          profilePropertyRule,
          pluginOptions,
        } = await specHelper.runAction(
          "profilePropertyRule:create",
          connection
        );

        expect(error).toBeUndefined();
        expect(profilePropertyRule.guid).toBeTruthy();
        expect(profilePropertyRule.key).toBe("test-rule");
        expect(profilePropertyRule.unique).toBe(false);
        expect(profilePropertyRule.state).toBe("draft");
        expect(profilePropertyRule.source.guid).toBe(sourceGuid);
        expect(pluginOptions[0].key).toBe("column");
        expect(pluginOptions[0].options.map((opt) => opt.key)).toEqual([
          "ipAddress",
          "type",
          "userId",
          "occurredAt",
          "[data]-loadTime",
          "[data]-path",
        ]);
        expect(pluginOptions[1].key).toBe("aggregation method");
        expect(pluginOptions[1].options.map((opt) => opt.key)).toEqual([
          "most recent value",
          "least recent value",
          "avg",
          "count",
          "sum",
          "min",
          "max",
        ]);

        profilePropertyRuleGuid = profilePropertyRule.guid;
      });

      test("an administrator can view the filter options for a profile property rule", async () => {
        connection.params = {
          csrfToken,
          guid: profilePropertyRuleGuid,
        };
        const { error, options } = await specHelper.runAction(
          "profilePropertyRule:filterOptions",
          connection
        );

        expect(error).toBeUndefined();
        expect(options).toEqual([
          {
            key: "ipAddress",
            ops: ["equals", "does not equal", "contains", "does not contain"],
            canHaveRelativeMatch: false,
          },
          {
            key: "type",
            ops: ["equals", "does not equal", "contains", "does not contain"],
            canHaveRelativeMatch: false,
          },
          {
            key: "userId",
            ops: ["equals", "does not equal", "contains", "does not contain"],
            canHaveRelativeMatch: false,
          },
          {
            key: "occurredAt",
            ops: ["equals", "does not equal", "greater than", "less than"],
            canHaveRelativeMatch: false,
          },
          {
            key: "[data]-loadTime",
            ops: ["equals", "does not equal", "greater than", "less than"],
            canHaveRelativeMatch: false,
          },
          {
            key: "[data]-path",
            ops: ["equals", "does not equal", "contains", "does not contain"],
            canHaveRelativeMatch: false,
          },
        ]);
      });

      test("an administrator can set the filters for a profile property rule", async () => {
        connection.params = {
          csrfToken,
          guid: profilePropertyRuleGuid,
          filters: [{ key: "[data]-path", op: "does not equal", match: "/" }],
        };
        const { error, profilePropertyRule } = await specHelper.runAction(
          "profilePropertyRule:edit",
          connection
        );

        expect(error).toBeUndefined();
        expect(profilePropertyRule.filters).toEqual([
          {
            key: "[data]-path",
            match: "/",
            op: "does not equal",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ]);
      });

      test("the rule cannot be made ready without an aggregation method", async () => {
        connection.params = {
          csrfToken,
          guid: profilePropertyRuleGuid,
          options: { column: "[data]-path" },
          state: "ready",
        };
        const { error, profilePropertyRule } = await specHelper.runAction(
          "profilePropertyRule:edit",
          connection
        );
        expect(error.message).toMatch(/aggregation method is required/);
      });

      test("an administrator can make a rule ready", async () => {
        connection.params = {
          csrfToken,
          guid: profilePropertyRuleGuid,
          options: { column: "[data]-path", "aggregation method": "count" },
          state: "ready",
        };
        const { error, profilePropertyRule } = await specHelper.runAction(
          "profilePropertyRule:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(profilePropertyRule.state).toBe("ready");
      });

      test("an administrator can test a profile property rule", async () => {
        connection.params = {
          csrfToken,
          guid: profilePropertyRuleGuid,
        };
        const { error, test } = await specHelper.runAction(
          "profilePropertyRule:test",
          connection
        );

        expect(error).toBeUndefined();
        expect(test).toBeTruthy();
      });

      describe("with profile", () => {
        let profile: Profile;
        let rule: ProfilePropertyRule;

        beforeAll(async () => {
          rule = await ProfilePropertyRule.findByGuid(profilePropertyRuleGuid);
          await rule.setFilters([]);
        });

        beforeAll(async () => {
          const profiles = await Profile.findAll();
          expect(profiles.length).toBe(1);
          profile = profiles[0];
        });

        test("profile properties will be imported (without filter)", async () => {
          await rule.setFilters([]);
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([4]);
        });

        test("profile properties will be imported (with filter)", async () => {
          await rule.setFilters([
            { key: "[data]-path", op: "does not equal", match: "/" },
          ]);
          await profile.import();
          let properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([3]);

          await rule.setFilters([
            { key: "[data]-path", op: "does not contain", match: "/" },
          ]);
          await profile.import();
          properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([0]);
        });
      });

      describe("aggregations", () => {
        let rule: ProfilePropertyRule;
        beforeAll(async () => {
          rule = await ProfilePropertyRule.findByGuid(profilePropertyRuleGuid);
          await rule.setFilters([]);
        });

        test("most recent value", async () => {
          await rule.update({ type: "string" });
          await rule.setOptions({
            column: "[data]-path",
            "aggregation method": "most recent value",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual(["/mobile-sign-in"]);
        });

        test("least recent value", async () => {
          await rule.update({ type: "string" });
          await rule.setOptions({
            column: "[data]-path",
            "aggregation method": "least recent value",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual(["/"]);
        });

        test("avg", async () => {
          await rule.update({ type: "float" });
          await rule.setOptions({
            column: "[data]-loadTime",
            "aggregation method": "avg",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([125]);
        });

        test("count", async () => {
          await rule.update({ type: "integer" });
          await rule.setOptions({
            column: "[data]-path",
            "aggregation method": "count",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([4]);
        });

        test("sum", async () => {
          await rule.update({ type: "integer" });
          await rule.setOptions({
            column: "[data]-loadTime",
            "aggregation method": "sum",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([500]);
        });

        test("min", async () => {
          await rule.update({ type: "integer" });
          await rule.setOptions({
            column: "[data]-loadTime",
            "aggregation method": "min",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([100]);
        });

        test("max", async () => {
          await rule.update({ type: "integer" });
          await rule.setOptions({
            column: "[data]-loadTime",
            "aggregation method": "max",
          });
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([200]);
        });
      });
    });
  });
});
