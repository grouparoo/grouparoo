import { helper } from "../utils/specHelper";
import { specHelper, api } from "actionhero";
import { createFactory } from "react";
let actionhero;
let guid;

describe("actions/events", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;
    let apiKey;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;

      const apiKeyModel = await helper.factories.apiKey();
      apiKey = apiKeyModel.apiKey;
      const permissions = await apiKeyModel.$get("permissions", {
        where: { topic: "event" },
      });
      await permissions[0].update({ write: true, read: true });
    });

    test("an event cannot be created without a valid apiKey", async () => {
      const { error } = await specHelper.runAction("event:create", {
        apiKey: "apiKey",
        type: "pageview",
        anonymousId: "abc123",
        data: { path: "/" },
      });
      expect(error.code).toBe("AUTHENTICATION_ERROR");
    });

    test("an event can be created and task enqueued", async () => {
      const { error, event } = await specHelper.runAction("event:create", {
        apiKey,
        type: "pageview",
        anonymousId: "abc123",
        data: { path: "/" },
      });

      expect(error).toBeFalsy();
      expect(event.guid).toMatch(/evt_.*/);
      expect(event.type).toBe("pageview");
      expect(event.anonymousId).toBe("abc123");
      expect(event.ipAddress).toBeTruthy();
      expect(event.profileGuid).toBeFalsy();
      expect(event.data).toEqual({ path: "/" });

      guid = event.guid;

      const foundTasks = await specHelper.findEnqueuedTasks(
        "event:associateProfile"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ eventGuid: guid });
    });

    test("an administrator can view an event", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, event } = await specHelper.runAction(
        "event:view",
        connection
      );

      expect(error).toBeFalsy();
      expect(event.guid).toMatch(/evt_.*/);
      expect(event.type).toBe("pageview");
      expect(event.ipAddress).toBeTruthy();
      expect(event.profileGuid).toBeFalsy();
      expect(event.data).toEqual({ path: "/" });
    });

    test("an administrator can list events (no filter)", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, events, total } = await specHelper.runAction(
        "events:list",
        connection
      );
      expect(error).toBeFalsy();
      expect(events.length).toEqual(1);
      expect(events[0].guid).toEqual(guid);
      expect(events[0].type).toEqual("pageview");
      expect(events[0].data).toEqual({ path: "/" });
      expect(total).toBe(1);
    });

    test("an administrator can list events (with type filter)", async () => {
      connection.params = {
        csrfToken,
        type: "something-else",
      };
      const { error, events, total } = await specHelper.runAction(
        "events:list",
        connection
      );
      expect(error).toBeFalsy();
      expect(events.length).toEqual(0);
      expect(total).toBe(0);
    });

    test("an administrator can list events (with profileGuid filter)", async () => {
      connection.params = {
        csrfToken,
        profileGuid: "000",
      };
      const { error, events, total } = await specHelper.runAction(
        "events:list",
        connection
      );
      expect(error).toBeFalsy();
      expect(events.length).toEqual(0);
      expect(total).toBe(0);
    });

    test("an administrator can list events (with data filter)", async () => {
      connection.params = {
        csrfToken,
        data: {
          path: "/",
        },
      };
      const { error, events, total } = await specHelper.runAction(
        "events:list",
        connection
      );
      expect(error).toBeFalsy();
      expect(events.length).toEqual(1);
      expect(total).toBe(1);
    });

    test("an administrator can autocomplete the types of events (no filter)", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction(
        "events:autocompleteType",
        connection
      );
      expect(error).toBeFalsy();
      expect(types).toEqual(["pageview"]);
    });

    test("an administrator can autocomplete the types of events (with type filter)", async () => {
      connection.params = {
        csrfToken,
        match: "thing",
      };
      const { error, types } = await specHelper.runAction(
        "events:autocompleteType",
        connection
      );
      expect(error).toBeFalsy();
      expect(types).toEqual([]);
    });

    test("an administrator can destroy an event", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, success } = await specHelper.runAction(
        "event:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });

    describe("destroy multiple events", () => {
      beforeEach(async () => {
        await api.events.model.destroyFor();

        await helper.factories.event({
          profileGuid: "abc",
          type: "pageview",
          occurredAt: new Date(0),
        });
        await helper.factories.event({ profileGuid: "abc", type: "pageview" });
        await helper.factories.event({ profileGuid: "abc", type: "purchase" });
        await helper.factories.event({
          profileGuid: "def",
          type: "pageview",
          occurredAt: new Date(0),
        });
        await helper.factories.event({ profileGuid: "def", type: "pageview" });
        await helper.factories.event({ profileGuid: "def", type: "purchase" });
      });

      test("an administrator can destroy events for a profile", async () => {
        connection.params = {
          csrfToken,
          profileGuid: "abc",
        };
        const { error, count } = await specHelper.runAction(
          "events:destroy",
          connection
        );
        expect(error).toBeFalsy();
        expect(count).toBe(3);
        const remainingEvents = await api.events.model.count();
        expect(remainingEvents).toBe(3);
      });

      test("an administrator can destroy events for a topic", async () => {
        connection.params = {
          csrfToken,
          type: "pageview",
        };
        const { error, count } = await specHelper.runAction(
          "events:destroy",
          connection
        );
        expect(error).toBeFalsy();
        expect(count).toBe(4);
        const remainingEvents = await api.events.model.count();
        expect(remainingEvents).toBe(2);
      });

      test("an administrator can destroy events for a profile + topic", async () => {
        connection.params = {
          csrfToken,
          profileGuid: "abc",
          type: "pageview",
        };
        const { error, count } = await specHelper.runAction(
          "events:destroy",
          connection
        );
        expect(error).toBeFalsy();
        expect(count).toBe(2);
        const remainingEvents = await api.events.model.count();
        expect(remainingEvents).toBe(4);
      });

      test("an administrator can destroy events before a date", async () => {
        connection.params = {
          csrfToken,
          before: new Date(1000).getTime(),
        };
        const { error, count } = await specHelper.runAction(
          "events:destroy",
          connection
        );
        expect(error).toBeFalsy();
        expect(count).toBe(2);
        const remainingEvents = await api.events.model.count();
        expect(remainingEvents).toBe(4);
      });
    });
  });
});
