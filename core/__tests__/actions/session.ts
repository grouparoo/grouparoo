import { helper } from "@grouparoo/spec-helper";
import { specHelper, api, config } from "actionhero";
import { Team, TeamMember, Permission, ApiKey, OAuthRequest } from "../../src";
import fetch from "isomorphic-fetch";
import {
  SessionCreate,
  SessionDestroy,
  SessionView,
} from "../../src/actions/session";
import { PrivateStatus } from "../../src/actions/status";

// enable the web server
process.env.WEB_SERVER = "true";

describe("session", () => {
  helper.grouparooTestServer({ truncate: true });

  describe("without team", () => {
    test("authenticated methods called without valid session before a team exists throw a specific error", async () => {
      const { error } = await specHelper.runAction<PrivateStatus>(
        "status:private"
      );
      expect(error.code).toBe("NO_TEAMS_ERROR");
    });
  });

  describe("with team", () => {
    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Peach",
        lastName: "Toadstool",
        password: "P@ssw0rd!",
        email: "peach@example.com",
      });
    });

    test("authenticated methods called without valid session after a team exists throw a specific error", async () => {
      const { error } = await specHelper.runAction<PrivateStatus>(
        "status:private"
      );
      expect(error.code).toBe("AUTHENTICATION_ERROR");
    });

    describe("session:create", () => {
      test("a password or request id is required", async () => {
        const { error } = await specHelper.runAction<SessionCreate>(
          "session:create",
          { email: "peach@example.com" }
        );

        expect(error.message).toEqual(
          "password or an oAuth requestId is required"
        );
      });

      describe("email and password", () => {
        test("can log in", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "peach@example.com",
              password: "P@ssw0rd!",
            });

          expect(error).toBeUndefined();
          expect(success).toEqual(true);
          expect(teamMember.id).toBeTruthy();
        });

        test("can log in with email not in lowercase", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "PEACH@example.COM",
              password: "P@ssw0rd!",
            });

          expect(error).toBeUndefined();
          expect(success).toEqual(true);
          expect(teamMember.id).toBeTruthy();
        });

        test("cannot log in with unknown user", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "fff@example.com",
              password: "x",
            });

          expect(error.message).toMatch(/team member not found/);
          expect(error.code).toMatch("AUTHENTICATION_ERROR");
          expect(success).toBeUndefined();
          expect(teamMember).toBeUndefined();
        });

        test("cannot log in with bad password", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "peach@example.com",
              password: "x",
            });

          expect(error.message).toMatch(/password does not match/);
          expect(error.code).toMatch("AUTHENTICATION_ERROR");
          expect(success).toBeUndefined();
          expect(teamMember).toBeUndefined();
        });
      });

      describe("with an oAuth request", () => {
        let oAuthRequest: OAuthRequest;
        beforeAll(async () => {
          oAuthRequest = await OAuthRequest.create({
            provider: "github",
            type: "user",
            token: "foo",
            identities: [
              {
                email: "mario@example.com",
                name: "mario",
                description: "mario",
              },
              {
                email: "peach@example.com",
                name: "peach",
                description: "peach",
              },
            ],
          });
        });

        test("can log in", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "peach@example.com",
              requestId: oAuthRequest.id,
            });

          expect(error).toBeUndefined();
          expect(success).toEqual(true);
          expect(teamMember.id).toBeTruthy();
        });

        test("can log in with email not in lowercase", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "PEACH@example.COM",
              requestId: oAuthRequest.id,
            });

          expect(error).toBeUndefined();
          expect(success).toEqual(true);
          expect(teamMember.id).toBeTruthy();
        });

        test("cannot log in with unknown user", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "fff@example.com",
              requestId: oAuthRequest.id,
            });

          expect(error.message).toMatch(/team member not found/);
          expect(error.code).toMatch("AUTHENTICATION_ERROR");
          expect(success).toBeUndefined();
          expect(teamMember).toBeUndefined();
        });

        test("cannot log in with bad requestId", async () => {
          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "peach@example.com",
              requestId: "foo",
            });
          expect(error.message).toMatch(/cannot find OAuthRequest foo/);
          expect(error.code).toMatch("AUTHENTICATION_ERROR");
          expect(success).toBeUndefined();
          expect(teamMember).toBeUndefined();
        });

        test("cannot log in as a user that is not included within the oAuth request identities", async () => {
          await oAuthRequest.update({
            identities: [
              {
                email: "mario@example.com",
                name: "mario",
                description: "mario",
              },
            ],
          });

          const { success, teamMember, error } =
            await specHelper.runAction<SessionCreate>("session:create", {
              email: "peach@example.com",
              requestId: oAuthRequest.id,
            });
          expect(error.message).toMatch(
            /peach@example.com was not returned in oAuth request/
          );
          expect(error.code).toMatch("AUTHENTICATION_ERROR");
          expect(success).toBeUndefined();
          expect(teamMember).toBeUndefined();
        });
      });
    });

    describe("session:view", () => {
      test("can view session details", async () => {
        const connection = await specHelper.buildConnection();
        connection.params = {
          email: "peach@example.com",
          password: "P@ssw0rd!",
        };
        const signInResponse = await specHelper.runAction<SessionCreate>(
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
        } = await specHelper.runAction<SessionView>("session:view", connection);

        expect(error).toBeUndefined();
        expect(newCsrfToken).toBe(csrfToken);
        expect(teamMember.id).toBeTruthy();
      });
    });

    describe("session:destroy", () => {
      test("can log out", async () => {
        const { success, error, csrfToken } =
          await specHelper.runAction<SessionCreate>("session:create", {
            email: "peach@example.com",
            password: "P@ssw0rd!",
          });

        expect(error).toBeUndefined();
        expect(success).toEqual(true);

        const destroyResponse = await specHelper.runAction<SessionDestroy>(
          "session:destroy",
          {
            csrfToken,
          }
        );

        expect(destroyResponse.error).toBeUndefined();
        expect(destroyResponse.success).toEqual(true);
      });
    });

    describe("permissions", () => {
      beforeAll(() => {
        api.actions.versions.appReadAction = [1];
        api.actions.versions.appWriteAction = [1];
        api.actions.versions.systemReadAction = [1];
        api.actions.versions.optionallyAuthenticatedAction = [1];

        api.actions.actions.appReadAction = {
          1: {
            name: "appReadAction",
            description: "I am a test",
            version: 1,
            outputExample: {},
            middleware: ["authenticated-action"],
            //@ts-ignore
            permission: { topic: "app", mode: "read" },
            run: async (data) => {
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
            //@ts-ignore
            permission: { topic: "app", mode: "write" },
            run: async (data) => {
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
            //@ts-ignore
            permission: { topic: "system", mode: "read" },
            run: async (data) => {
              data.response.success = true;
            },
          },
        };

        api.actions.actions.optionallyAuthenticatedAction = {
          1: {
            name: "systemReadAction",
            description: "I am a test",
            version: 1,
            outputExample: {},
            middleware: ["optionally-authenticated-action"],
            //@ts-ignore
            permission: { topic: "*", mode: "read" },
            run: async (data) => {
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
        delete api.actions.actions.systemReadAction;
        delete api.actions.versions.systemReadAction;
        delete api.actions.actions.optionallyAuthenticatedAction;
        delete api.actions.versions.optionallyAuthenticatedAction;
      });

      describe("session", () => {
        let toad: TeamMember;
        let team: Team;
        let connection;
        let csrfToken: string;

        async function signIn() {
          connection.params = {
            email: "toad@example.com",
            password: "mushrooms",
          };
          const sessionResponse = await specHelper.runAction<SessionCreate>(
            "session:create",
            connection
          );
          csrfToken = sessionResponse.csrfToken;
        }

        beforeAll(async () => {
          team = await helper.factories.team();

          // start with no read or write permissions
          const permissions = await team.$get("permissions");
          for (const i in permissions) {
            //@ts-ignore
            await permissions[i].update(
              { read: false, write: false },
              { hooks: false }
            );
          }

          toad = new TeamMember({
            teamId: team.id,
            firstName: "Toad",
            lastName: "Toadstool",
            email: "toad@example.com",
          });

          await toad.save();
          await toad.updatePassword("mushrooms");

          connection = await specHelper.buildConnection();

          await signIn();
        });

        test("without a csrfToken or grouparoo header, actions are not authenticated", async () => {
          let response = await specHelper.runAction(
            "appReadAction",
            connection
          );
          expect(response.error.message).toBe("CSRF error");
          expect(response.error.code).toBe("AUTHENTICATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("once a CSRF token error occurs, the session is destroyed", async () => {
          await signIn();
          let firstResponse = await specHelper.runAction(
            "appReadAction",
            Object.assign({}, connection, {
              params: { csrfToken: "not-the-token" },
            })
          );
          expect(firstResponse.error.code).toBe("AUTHENTICATION_ERROR");
          expect(firstResponse.error.message).toBe("CSRF error");
          expect(firstResponse["success"]).toBeFalsy();

          let secondResponse = await specHelper.runAction(
            "appReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(secondResponse.error.code).toBe("AUTHENTICATION_ERROR");
          expect(secondResponse.error.message).toBe(
            "Please log in to continue"
          );
          expect(secondResponse["success"]).toBeFalsy();
        });

        test("a member of an authenticated team cannot view any action", async () => {
          await signIn();
          let response = await specHelper.runAction(
            "appReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          await signIn();
          response = await specHelper.runAction(
            "appWriteAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          await signIn();
          response = await specHelper.runAction(
            "systemReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("changing the permission topic to read authorizes only the actions of that topic - read", async () => {
          const permission = await Permission.findOne({
            where: { ownerId: team.id, topic: "app" },
          });
          //@ts-ignore
          await permission.update(
            { read: true, write: false },
            { hooks: false }
          );

          await signIn();
          let response = await specHelper.runAction(
            "appReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error).toBeFalsy();
          expect(response["success"]).toBe(true);

          await signIn();
          response = await specHelper.runAction(
            "appWriteAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          await signIn();
          response = await specHelper.runAction(
            "systemReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("changing the permission topic to read authorizes only the actions of that topic - write", async () => {
          const permission = await Permission.findOne({
            where: { ownerId: team.id, topic: "app" },
          });
          //@ts-ignore
          await permission.update(
            { read: false, write: true },
            { hooks: false }
          );

          await signIn();
          connection.params = { csrfToken };
          let response = await specHelper.runAction(
            "appReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          await signIn();
          response = await specHelper.runAction(
            "appWriteAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error).toBeFalsy();
          expect(response["success"]).toBe(true);

          await signIn();
          response = await specHelper.runAction(
            "systemReadAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("optionally authenticated actions can be read by logged out users", async () => {
          let response = await specHelper.runAction(
            "optionallyAuthenticatedAction"
            // no connection
          );
          expect(response.error).toBeFalsy();
          expect(response["success"]).toBe(true);
        });

        test("optionally authenticated actions can be read by logged out users, but require proper credentials", async () => {
          let response = await specHelper.runAction(
            "optionallyAuthenticatedAction",
            Object.assign({}, connection, { params: { csrfToken } })
          );
          expect(response.error).toBeFalsy();
          expect(response["success"]).toBe(true);

          response = await specHelper.runAction(
            "optionallyAuthenticatedAction",
            Object.assign({}, connection, {
              params: { csrfToken: "BAD TOKEN" },
            })
          );
          expect(response.error.code).toBe("AUTHENTICATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });
      });

      describe("header, cookie, and csrf authentication", () => {
        let url: string;
        let csrfToken: string;
        let cookie: string;

        beforeAll(() => {
          url = `http://localhost:${config.web.port}`;
        });

        async function buildSessionAndCookie() {
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
          csrfToken = response.csrfToken;
        }

        test("a user can log in with email and password to obtain a csrf token and a session cookie", async () => {
          await buildSessionAndCookie();
          expect(cookie).toMatch(/grouparooSessionId=/);
          expect(csrfToken).toBeTruthy();
        });

        test("actions can be authenticated with the CSRF token + cookie", async () => {
          await buildSessionAndCookie();
          const response = await fetch(
            `${url}/api/v1/account?csrfToken=${csrfToken}`,
            {
              method: "GET",
              credentials: "include",
              headers: { "Content-Type": "application/json", Cookie: cookie },
            }
          ).then((r) => r.json());
          expect(response.teamMember.id).toBeTruthy();
        });

        test("actions cannot be authenticated with the cookie without the CSRF token", async () => {
          await buildSessionAndCookie();
          const response = await fetch(`${url}/api/v1/account`, {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json", Cookie: cookie },
          }).then((r) => r.json());
          expect(response.error.code).toBe("AUTHENTICATION_ERROR");
          expect(response.teamMember).toBeFalsy();
        });

        test("actions cannot be authenticated without the cookie and with the CSRF token", async () => {
          await buildSessionAndCookie();
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

        test("actions cannot be authenticated with the x-grouparoo-server-token header and without the cookie", async () => {
          await buildSessionAndCookie();
          const response = await fetch(`${url}/api/v1/account`, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-GROUPAROO-SERVER-TOKEN": config.general.serverToken as string,
            },
          }).then((r) => r.json());
          expect(response.error.code).toBe("AUTHENTICATION_ERROR");
          expect(response.teamMember).toBeFalsy();
        });

        test("actions can be authenticated with the x-grouparoo-server-token header and the cookie", async () => {
          const response = await fetch(`${url}/api/v1/account`, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Cookie: cookie,
              "X-GROUPAROO-SERVER-TOKEN": config.general.serverToken as string,
            },
          }).then((r) => r.json());
          expect(response.teamMember.id).toBeTruthy();
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
          expect(response["success"]).toBeFalsy();
        });

        test("with an invalid apiKey, actions are not authorized", async () => {
          let response = await specHelper.runAction("appReadAction", {
            apiKey: "abc123",
          });
          expect(response.error.message).toBe("apiKey not found");
          expect(response.error.code).toBe("AUTHENTICATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("an apiKey with no permissions can not run any actions", async () => {
          let response = await specHelper.runAction("appReadAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          response = await specHelper.runAction("appWriteAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          response = await specHelper.runAction("systemReadAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("changing the permission topic to read authorizes only the actions of that topic - read", async () => {
          const permission = await Permission.findOne({
            where: { ownerId: apiKey.id, topic: "app" },
          });
          await permission.update({ read: true, write: false });

          let response = await specHelper.runAction("appReadAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error).toBeFalsy();
          expect(response["success"]).toBe(true);

          response = await specHelper.runAction("appWriteAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          response = await specHelper.runAction("systemReadAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });

        test("changing the permission topic to read authorizes only the actions of that topic - write", async () => {
          const permission = await Permission.findOne({
            where: { ownerId: apiKey.id, topic: "app" },
          });
          await permission.update({ read: false, write: true });

          let response = await specHelper.runAction("appReadAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();

          response = await specHelper.runAction("appWriteAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error).toBeFalsy();
          expect(response["success"]).toBe(true);

          response = await specHelper.runAction("systemReadAction", {
            apiKey: apiKey.apiKey,
          });
          expect(response.error.code).toBe("AUTHORIZATION_ERROR");
          expect(response["success"]).toBeFalsy();
        });
      });
    });
  });
});
