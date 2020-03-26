import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
let actionhero, api;

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

  describe("roles", () => {
    let toad: TeamMember;
    let team: Team;
    let connection;
    let csrfToken: string;

    beforeAll(async () => {
      team = await helper.factories.team();

      toad = new TeamMember({
        teamGuid: team.guid,
        firstName: "Toad",
        lastName: "Toadstool",
        email: "toad@example.com",
      });

      await toad.save();
      await toad.updatePassword("mushrooms");

      connection = await specHelper.buildConnection();
      connection.params = { email: "toad@example.com", password: "mushrooms" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    beforeAll(() => {
      api.actions.versions.adminAction = [1];
      api.actions.versions.readAction = [1];
      api.actions.versions.writeAction = [1];

      api.actions.actions.adminAction = {
        1: {
          name: "adminAction",
          description: "I am a test",
          version: 1,
          outputExample: {},
          middleware: ["authenticated-team-member", "role-admin"],
          run: (data) => {
            data.response.success = true;
          },
        },
      };

      api.actions.actions.readAction = {
        1: {
          name: "readAction",
          description: "I am a test",
          version: 1,
          outputExample: {},
          middleware: ["authenticated-team-member", "role-read"],
          run: (data) => {
            data.response.success = true;
          },
        },
      };

      api.actions.actions.writeAction = {
        1: {
          name: "writeAction",
          description: "I am a test",
          version: 1,
          outputExample: {},
          middleware: ["authenticated-team-member", "role-write"],
          run: (data) => {
            data.response.success = true;
          },
        },
      };

      api.routes.loadRoutes();
    });

    afterAll(() => {
      delete api.actions.actions.adminAction;
      delete api.actions.versions.adminAction;
      delete api.actions.actions.readAction;
      delete api.actions.versions.writeAction;
      delete api.actions.versions.writeAction;
    });

    test("a member of an authenticated team can use an action with the role-admin middleware", async () => {
      await team.update({ administer: true });

      connection.params = { csrfToken };
      const { error, success } = await specHelper.runAction(
        "adminAction",
        connection
      );

      expect(error).toBeFalsy();
      expect(success).toBe(true);
    });

    test("a member of a non-authenticated team cannot use an action with the role-admin middleware", async () => {
      await team.update({ administer: false });

      connection.params = { csrfToken };
      const { error, success } = await specHelper.runAction(
        "adminAction",
        connection
      );

      expect(error.message).toMatch(/you do not have the admin privilege/);
      expect(error.code).toBe("NO_ADMIN_PRIVILEGE");
      expect(success).toBeFalsy();
    });

    test("a member of an writing team can use an action with the role-write middleware", async () => {
      await team.update({ write: true });

      connection.params = { csrfToken };
      const { error, success } = await specHelper.runAction(
        "writeAction",
        connection
      );

      expect(error).toBeFalsy();
      expect(success).toBe(true);
    });

    test("a member of a non-writing team cannot use an action with the role-write middleware", async () => {
      await team.update({ write: false });

      connection.params = { csrfToken };
      const { error, success } = await specHelper.runAction(
        "writeAction",
        connection
      );

      expect(error.message).toMatch(/you do not have the write privilege/);
      expect(error.code).toBe("NO_WRITE_PRIVILEGE");
      expect(success).toBeFalsy();
    });

    test("a member of a reading team can use an action with the role-read middleware", async () => {
      await team.update({ read: true });

      connection.params = { csrfToken };
      const { error, success } = await specHelper.runAction(
        "readAction",
        connection
      );

      expect(error).toBeFalsy();
      expect(success).toBe(true);
    });

    test("a member of a non-reading team cannot use an action with the role-read middleware", async () => {
      await team.update({ read: false });

      connection.params = { csrfToken };
      const { error, success } = await specHelper.runAction(
        "readAction",
        connection
      );

      expect(error.message).toMatch(/you do not have the read privilege/);
      expect(error.code).toBe("NO_READ_PRIVILEGE");
      expect(success).toBeFalsy();
    });
  });
});
