import { helper } from "@grouparoo/spec-helper";
import { api, Connection, specHelper } from "actionhero";
import {
  Property,
  Profile,
  Option,
  Event,
  EventData,
  ProfileProperty,
} from "../../src";

describe("integration/events", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let connection: Connection;
  let csrfToken: string;
  let appId: string;
  let sourceId: string;
  let propertyId: string;
  let userIdProperty: Property;
  let apiKey: string;
  let eventId: string;
  let profile: Profile;

  beforeAll(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await helper.factories.properties();
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

  test("an events app can be created", async () => {
    connection.params = {
      csrfToken,
      type: "events",
      name: "Grouparoo Events",
    };
    const { app, error } = await specHelper.runAction("app:create", connection);
    expect(error).toBeFalsy();
    expect(app.type).toBe("events");
  });

  test("the events app is present and can be configured", async () => {
    connection.params = {
      csrfToken,
    };
    const { apps } = await specHelper.runAction("apps:list", connection);
    expect(apps.length).toBe(2); // properties + events
    appId = apps.filter((app) => app.type === "events")[0].id;

    userIdProperty = await Property.findOne({
      where: { key: "userId" },
    });

    connection.params = {
      csrfToken,
      id: appId,
      options: { identifyingPropertyId: userIdProperty.id },
      state: "ready",
    };
    const { error, app } = await specHelper.runAction("app:edit", connection);

    expect(error).toBeUndefined();
    expect(app.name).toBe("Grouparoo Events");
    expect(app.state).toBe("ready");
    appId = app.id;
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

    const eventPermissionId = _apiKeyA.permissions.filter(
      (permission) => permission.topic === "event"
    )[0].id;

    connection.params = {
      csrfToken,
      id: _apiKeyA.id,
      permissions: [{ id: eventPermissionId, read: true, write: true }],
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
    expect(event.id).toMatch(/evt_.*/);
    expect(event.type).toBe("pageview");
    expect(event.ipAddress).toBeTruthy();
    expect(event.profileId).toBeFalsy();
    expect(event.anonymousId).toBe("abc123");
    expect(event.data).toEqual({ path: "/", loadTime: "100" });

    const foundTasks = await specHelper.findEnqueuedTasks(
      "event:associateProfile"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0]).toEqual({ eventId: event.id });
    eventId = event.id;
  });

  test("the event can be processed, creating a profile sharing the event anonymousId", async () => {
    let profiles = await Profile.findAll();
    expect(profiles.length).toBe(0);

    await specHelper.runTask("event:associateProfile", { eventId });

    profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);
    profile = profiles[0];

    expect(profile.id).toBeTruthy();
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
      eventId: event.id,
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
      eventId: event.id,
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
      eventId: event.id,
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
      eventId: event1.id,
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
      eventId: event2.id,
    });

    profiles = await Profile.findAll();
    expect(profiles.length).toBe(1);

    const profileEvents = await profile.$get("events");
    expect(profileEvents.length).toBe(6);
  });

  test("an event can be viewed", async () => {
    connection.params = {
      csrfToken,
      id: eventId,
    };
    const { event, error } = await specHelper.runAction(
      "event:view",
      connection
    );
    expect(error).toBeFalsy();

    expect(event.id).toBe(eventId);
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
        appId,
        name: "pageview-events",
        type: "events-table-import",
      };
      const { source, error } = await specHelper.runAction(
        "source:create",
        connection
      );

      expect(error).toBeFalsy();
      expect(source.id).toBeTruthy();
      expect(source.state).toBe("draft");

      sourceId = source.id;
    });

    test("an administrator can enumerate the source connection options", async () => {
      connection.params = {
        csrfToken,
        id: sourceId,
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
        where: { ownerId: sourceId },
      });
      await Promise.all(options.map((o) => o.destroy()));

      connection.params = {
        csrfToken,
        id: sourceId,
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
        id: sourceId,
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
        id: sourceId,
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
        id: sourceId,
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
        id: sourceId,
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
        id: sourceId,
      };
      const { error, source } = await specHelper.runAction(
        "source:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(source.id).toBeTruthy();
      expect(source.app.name).toBe("Grouparoo Events");
    });

    describe("properties", () => {
      test("an administrator can create a new property against events", async () => {
        connection.params = {
          csrfToken,
          sourceId,
          key: "test-rule",
          type: "integer",
          unique: "false",
        };

        const { error, property, pluginOptions } = await specHelper.runAction(
          "property:create",
          connection
        );

        expect(error).toBeUndefined();
        expect(property.id).toBeTruthy();
        expect(property.key).toBe("test-rule");
        expect(property.unique).toBe(false);
        expect(property.state).toBe("draft");
        expect(property.sourceId).toBe(sourceId);
        expect(pluginOptions[0].key).toBe("column");
        expect(pluginOptions[0].options.map((opt) => opt.key)).toEqual([
          "ipAddress",
          "type",
          "userId",
          "occurredAt",
          "[data]-loadTime",
          "[data]-path",
        ]);
        expect(pluginOptions[1].key).toBe("aggregationMethod");
        expect(pluginOptions[1].displayName).toBe("Aggregation Method");
        expect(pluginOptions[1].options.map((opt) => opt.key)).toEqual([
          "all values",
          "most recent value",
          "least recent value",
          "avg",
          "count",
          "sum",
          "min",
          "max",
        ]);

        propertyId = property.id;
      });

      test("an administrator can view the filter options for a property", async () => {
        connection.params = {
          csrfToken,
          id: propertyId,
        };
        const { error, options } = await specHelper.runAction(
          "property:filterOptions",
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

      test("an administrator can set the filters for a property", async () => {
        connection.params = {
          csrfToken,
          id: propertyId,
          filters: [{ key: "[data]-path", op: "does not equal", match: "/" }],
        };
        const { error, property } = await specHelper.runAction(
          "property:edit",
          connection
        );

        expect(error).toBeUndefined();
        expect(property.filters).toEqual([
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

      test("the rule cannot be made ready without an aggregationMethod", async () => {
        connection.params = {
          csrfToken,
          id: propertyId,
          options: { column: "[data]-path" },
          state: "ready",
        };
        const { error, property } = await specHelper.runAction(
          "property:edit",
          connection
        );
        expect(error.message).toMatch(/aggregationMethod is required/);
      });

      test("an administrator can make a rule ready", async () => {
        connection.params = {
          csrfToken,
          id: propertyId,
          options: { column: "[data]-path", aggregationMethod: "count" },
          state: "ready",
        };
        const { error, property } = await specHelper.runAction(
          "property:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(property.state).toBe("ready");
      });

      test("an administrator can test a property", async () => {
        connection.params = {
          csrfToken,
          id: propertyId,
        };
        const { error, test } = await specHelper.runAction(
          "property:test",
          connection
        );

        expect(error).toBeUndefined();
        expect(test).toBeTruthy();
      });

      describe("with profile", () => {
        let profile: Profile;
        let property: Property;

        beforeAll(async () => {
          property = await Property.findById(propertyId);
          await property.setFilters([]);
        });

        beforeAll(async () => {
          const profiles = await Profile.findAll();
          expect(profiles.length).toBe(1);
          profile = profiles[0];
        });

        test("properties will be imported (without filter)", async () => {
          await property.setFilters([]);
          await profile.import();
          const properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([4]);
        });

        test("properties will be imported (with filter)", async () => {
          await property.setFilters([
            { key: "[data]-path", op: "does not equal", match: "/" },
          ]);
          await profile.import();
          let properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([3]);

          await property.setFilters([
            { key: "[data]-path", op: "does not contain", match: "/" },
          ]);
          await profile.import();
          properties = await profile.properties();
          expect(properties["test-rule"].values).toEqual([0]);
        });

        describe("aggregations", () => {
          let property: Property;
          beforeAll(async () => {
            property = await Property.findById(propertyId);
            await property.setFilters([]);
          });

          test("all values", async () => {
            await property.update({ type: "string", isArray: true });
            await property.setOptions({
              column: "[data]-path",
              aggregationMethod: "all values",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([
              "/",
              "/about",
              "/web-sign-in",
              "/mobile-sign-in",
            ]);
            await property.update({ type: "string", isArray: false });
          });

          test("most recent value", async () => {
            await property.update({ type: "string" });
            await property.setOptions({
              column: "[data]-path",
              aggregationMethod: "most recent value",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual(["/mobile-sign-in"]);
          });

          test("least recent value", async () => {
            await property.update({ type: "string" });
            await property.setOptions({
              column: "[data]-path",
              aggregationMethod: "least recent value",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual(["/"]);
          });

          test("avg", async () => {
            await property.update({ type: "float" });
            await property.setOptions({
              column: "[data]-loadTime",
              aggregationMethod: "avg",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([125]);
          });

          test("count", async () => {
            await property.update({ type: "integer" });
            await property.setOptions({
              column: "[data]-path",
              aggregationMethod: "count",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([4]);
          });

          test("sum", async () => {
            await property.update({ type: "integer" });
            await property.setOptions({
              column: "[data]-loadTime",
              aggregationMethod: "sum",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([500]);
          });

          test("min", async () => {
            await property.update({ type: "integer" });
            await property.setOptions({
              column: "[data]-loadTime",
              aggregationMethod: "min",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([100]);
          });

          test("max", async () => {
            await property.update({ type: "integer" });
            await property.setOptions({
              column: "[data]-loadTime",
              aggregationMethod: "max",
            });
            await profile.import();
            const properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([200]);
          });
        });

        describe("filters", () => {
          let property: Property;
          beforeAll(async () => {
            property = await Property.findById(propertyId);
            await property.update({ type: "string", isArray: true });
            await property.setOptions({
              column: "[data]-path",
              aggregationMethod: "all values",
            });
          });

          beforeEach(async () => {
            await property.setFilters([]);
          });

          test("on event properties - userId", async () => {
            await property.setFilters([
              { key: "userId", op: "equals", match: "x" },
            ]);
            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([null]);
          });

          test("on event properties - type", async () => {
            await property.setFilters([
              { key: "type", op: "equals", match: "x" },
            ]);
            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([null]);

            await property.setFilters([
              { key: "type", op: "equals", match: "pageview" },
            ]);
            await profile.import();
            properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([
              "/",
              "/about",
              "/web-sign-in",
              "/mobile-sign-in",
            ]);
          });

          test("on event properties - occurredAt", async () => {
            const event = await Event.findOne({
              where: { profileId: profile.id },
              include: [{ model: EventData, where: { value: "/web-sign-in" } }],
            });

            await property.setFilters([
              {
                key: "occurredAt",
                op: "greater than",
                match: event.createdAt.getTime().toString(),
              },
            ]);

            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual(["/mobile-sign-in"]);

            await property.setFilters([
              { key: "occurredAt", op: "greater than", match: "0" },
            ]);
            await profile.import();
            properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([
              "/",
              "/about",
              "/web-sign-in",
              "/mobile-sign-in",
            ]);
          });

          test("on data properties - equals", async () => {
            await property.setFilters([
              {
                key: "[data]-path",
                op: "equals",
                match: "/about",
              },
            ]);

            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual(["/about"]);
          });

          test("on data properties - does not equal", async () => {
            await property.setFilters([
              {
                key: "[data]-path",
                op: "does not equal",
                match: "/about",
              },
            ]);

            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([
              "/",
              "/web-sign-in",
              "/mobile-sign-in",
            ]);
          });

          test("on data properties - contains", async () => {
            await property.setFilters([
              {
                key: "[data]-path",
                op: "contains",
                match: "a",
              },
            ]);

            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual(["/about"]);
          });

          test("on data properties - does not contain", async () => {
            await property.setFilters([
              {
                key: "[data]-path",
                op: "does not contain",
                match: "a",
              },
            ]);

            await profile.import();
            let properties = await profile.properties();
            expect(properties["test-rule"].values).toEqual([
              "/",
              "/web-sign-in",
              "/mobile-sign-in",
            ]);
          });
        });
      });
    });
  });
});
