import { helper } from "./../utils/specHelper";
import { specHelper, config } from "actionhero";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
import { Permission } from "../../src/models/Permission";
import { ApiKey } from "../../src/models/ApiKey";
import fetch from "isomorphic-fetch";
let actionhero, api;

// enable the web server
process.env.WEB_SERVER = "true";

describe("session", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Peach",
      lastName: "Toadstool",
      password: "P@ssw0rd!",
      email: "peach@example.com",
    });
  });

  describe("session:create", () => {
    test("can log in", async () => {
      const { success, teamMember, error } = await specHelper.runAction(
        "session:create",
        {
          email: "peach@example.com",
          password: "P@ssw0rd!",
        }
      );

      expect(error).toBeUndefined();
      expect(success).toEqual(true);
      expect(teamMember.guid).toBeTruthy();
    });

    test("cannot log in with unknown user", async () => {
      const { success, teamMember, error } = await specHelper.runAction(
        "session:create",
        {
          email: "fff@example.com",
          password: "x",
        }
      );

      expect(error.message).toMatch(/team member not found/);
      expect(success).toEqual(false);
      expect(teamMember).toBeUndefined();
    });

    test("cannot log in with bad password", async () => {
      const { success, teamMember, error } = await specHelper.runAction(
        "session:create",
        {
          email: "peach@example.com",
          password: "x",
        }
      );

      expect(error.message).toMatch(/password does not match/);
      expect(success).toEqual(false);
      expect(teamMember).toBeUndefined();
    });
  });

  describe("session:view", () => {
    test("can view session details", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = { email: "peach@example.com", password: "P@ssw0rd!" };
      const signInResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      expect(signInResponse.error).toBeUndefined();
      expect(signInResponse.success).toBe(true);
      const csrfToken = signInResponse.csrfToken;

      connection.params = { csrfToken };
      const {
        csrfToken: newCsrfToken,
        teamMember,
        error,
      } = await specHelper.runAction("session:view", connection);

      expect(error).toBeUndefined();
      expect(newCsrfToken).toBe(csrfToken);
      expect(teamMember.guid).toBeTruthy();
    });
  });

  describe("session:destroy", () => {
    test("can log out", async () => {
      const { success, error, csrfToken } = await specHelper.runAction(
        "session:create",
        {
          email: "peach@example.com",
          password: "P@ssw0rd!",
        }
      );

      expect(error).toBeUndefined();
      expect(success).toEqual(true);

      const {
        successAgain = success,
        errorAgain = error,
      } = await specHelper.runAction("session:destroy", {
        csrfToken,
      });

      expect(errorAgain).toBeUndefined();
      expect(successAgain).toEqual(true);
    });
  });

  describe("permissions", () => {
    beforeAll(() => {
      api.actions.versions.appReadAction = [1];
      api.actions.versions.appWriteAction = [1];
      api.actions.versions.systemReadAction = [1];

      api.actions.actions.appReadAction = {
        1: {
          name: "appReadAction",
          description: "I am a test",
          version: 1,
          outputExample: {},
          middleware: ["authenticated-action"],
          permission: { topic: "app", mode: "read" },
          run: (data) => {
            data.response.success = true;
          },
        },
      };

      api.actions.actions.appWriteAction = {
        1: {
          name: "appWriteAction",
          description: "I am a test",
          version: 1,
          outputExample: {},
          middleware: ["authenticated-action"],
          permission: { topic: "app", mode: "write" },
          run: (data) => {
            data.response.success = true;
          },
        },
      };

      api.actions.actions.systemReadAction = {
        1: {
          name: "systemReadAction",
          description: "I am a test",
          version: 1,
          outputExample: {},
          middleware: ["authenticated-action"],
          permission: { topic: "system", mode: "read" },
          run: (data) => {
            data.response.success = true;
          },
        },
      };

      api.routes.loadRoutes();
    });

    afterAll(() => {
      delete api.actions.actions.appReadAction;
      delete api.actions.versions.appReadAction;
      delete api.actions.actions.appWriteAction;
      delete api.actions.versions.appWriteAction;
      delete api.actions.versions.systemReadAction;
      delete api.actions.versions.systemReadAction;
    });

    describe("session", () => {
      let toad: TeamMember;
      let team: Team;
      let connection;
      let csrfToken: string;

      beforeAll(async () => {
        team = await helper.factories.team();

        // start with no read or write permissions
        const permissions = await team.$get("permissions");
        for (const i in permissions) {
          await permissions[i].update({ read: false, write: false });
        }

        toad = new TeamMember({
          teamGuid: team.guid,
          firstName: "Toad",
          lastName: "Toadstool",
          email: "toad@example.com",
        });

        await toad.save();
        await toad.updatePassword("mushrooms");

        connection = await specHelper.buildConnection();
        connection.params = {
          email: "toad@example.com",
          password: "mushrooms",
        };
        const sessionResponse = await specHelper.runAction(
          "session:create",
          connection
        );
        csrfToken = sessionResponse.csrfToken;
      });

      test("without a csrfToken or grouparoo header, actions are not authenticated", async () => {
        let response = await specHelper.runAction("appReadAction", connection);
        expect(response.error.message).toBe("CSRF error");
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("a member of an authenticated team cannot view any action", async () => {
        connection.params = { csrfToken };
        let response = await specHelper.runAction("appReadAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("appWriteAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("systemReadAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("changing the permission topic to read authorizes only the actions of that topic - read", async () => {
        const permission = await Permission.findOne({
          where: { ownerGuid: team.guid, topic: "app" },
        });
        await permission.update({ read: true, write: false });

        connection.params = { csrfToken };
        let response = await specHelper.runAction("appReadAction", connection);
        expect(response.error).toBeFalsy();
        expect(response.success).toBe(true);

        response = await specHelper.runAction("appWriteAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("systemReadAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("changing the permission topic to read authorizes only the actions of that topic - write", async () => {
        const permission = await Permission.findOne({
          where: { ownerGuid: team.guid, topic: "app" },
        });
        await permission.update({ read: false, write: true });

        connection.params = { csrfToken };
        let response = await specHelper.runAction("appReadAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("appWriteAction", connection);
        expect(response.error).toBeFalsy();
        expect(response.success).toBe(true);

        response = await specHelper.runAction("systemReadAction", connection);
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });
    });

    describe("header, cookie, and csrf authentication", () => {
      let url: string;
      let csrfToken: string;
      let cookie: string;

      beforeAll(() => {
        url = `http://localhost:${config.servers.web.port}`;
      });

      test("a user can log in with email and password to obtain a csrf token and a session cookie", async () => {
        let response = await fetch(`${url}/api/v1/session`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "toad@example.com",
            password: "mushrooms",
          }),
        }).then((r) => {
          const setCookie = r.headers.get("set-cookie");
          cookie = setCookie.substr(0, setCookie.indexOf(";"));
          return r.json();
        });
        expect(response.csrfToken).toBeTruthy();
        expect(cookie).toMatch(/grouparooSessionId=/);
        csrfToken = response.csrfToken;
      });

      test("actions can be authenticated with the CSRF token + cookie", async () => {
        const response = await fetch(
          `${url}/api/v1/account?csrfToken=${csrfToken}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json", Cookie: cookie },
          }
        ).then((r) => r.json());
        expect(response.teamMember.guid).toBeTruthy();
      });

      test("actions cannot be authenticated with the cookie without the CSRF token", async () => {
        const response = await fetch(`${url}/api/v1/account`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json", Cookie: cookie },
        }).then((r) => r.json());
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.teamMember).toBeFalsy();
      });

      test("actions cannot be authenticated without the cookie and with the CSRF token", async () => {
        const response = await fetch(
          `${url}/api/v1/account?csrfToken=${csrfToken}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        ).then((r) => r.json());
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.teamMember).toBeFalsy();
      });

      test("actions cannot be authenticated with the x-grouparoo-server_token header and without the cookie", async () => {
        const response = await fetch(`${url}/api/v1/account`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "X-GROUPAROO-SERVER_TOKEN": config.general.serverToken,
          },
        }).then((r) => r.json());
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.teamMember).toBeFalsy();
      });

      test("actions can be authenticated with the x-grouparoo-server_token header and the cookie", async () => {
        const response = await fetch(`${url}/api/v1/account`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookie,
            "X-GROUPAROO-SERVER_TOKEN": config.general.serverToken,
          },
        }).then((r) => r.json());
        expect(response.teamMember.guid).toBeTruthy();
      });
    });

    describe("apiKey", () => {
      let apiKey: ApiKey;

      beforeAll(async () => {
        apiKey = await helper.factories.apiKey();

        // start with no read or write permissions
        const permissions = await apiKey.$get("permissions");
        for (const i in permissions) {
          await permissions[i].update({ read: false, write: false });
        }
      });

      test("without an apiKey, actions are not authenticated", async () => {
        let response = await specHelper.runAction("appReadAction", {});
        expect(response.error.message).toBe("Please log in to continue");
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("with an invalid apiKey, actions are not authorized", async () => {
        let response = await specHelper.runAction("appReadAction", {
          apiKey: "abc123",
        });
        expect(response.error.message).toBe("apiKey not found");
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("an apiKey with no permissions can not run any actions", async () => {
        let response = await specHelper.runAction("appReadAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("appWriteAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("systemReadAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("changing the permission topic to read authorizes only the actions of that topic - read", async () => {
        const permission = await Permission.findOne({
          where: { ownerGuid: apiKey.guid, topic: "app" },
        });
        await permission.update({ read: true, write: false });

        let response = await specHelper.runAction("appReadAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error).toBeFalsy();
        expect(response.success).toBe(true);

        response = await specHelper.runAction("appWriteAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("systemReadAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });

      test("changing the permission topic to read authorizes only the actions of that topic - write", async () => {
        const permission = await Permission.findOne({
          where: { ownerGuid: apiKey.guid, topic: "app" },
        });
        await permission.update({ read: false, write: true });

        let response = await specHelper.runAction("appReadAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();

        response = await specHelper.runAction("appWriteAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error).toBeFalsy();
        expect(response.success).toBe(true);

        response = await specHelper.runAction("systemReadAction", {
          apiKey: apiKey.apiKey,
        });
        expect(response.error.code).toBe("AUTHENTICATION_ERROR");
        expect(response.success).toBeFalsy();
      });
    });
  });
});
