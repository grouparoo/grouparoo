import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Team, TeamMember } from "./../..";

describe("actions/account", () => {
  helper.grouparooTestServer({ truncate: true });
  let team: Team;

  beforeAll(async () => {
    const response = await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    team = response.team;
  });

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("can view account", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, teamMember, team } = await specHelper.runAction(
        "account:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.guid).toBeTruthy();
      expect(teamMember.firstName).toBe("Mario");
      expect(teamMember.email).toBe("mario@example.com");
      expect(team.guid).toBeTruthy();
    });

    test("can edit account", async () => {
      connection.params = {
        csrfToken,
        firstName: "Mario!",
      };
      const { error, teamMember, team } = await specHelper.runAction(
        "account:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.guid).toBeTruthy();
      expect(teamMember.firstName).toBe("Mario!");
      expect(teamMember.email).toBe("mario@example.com");
      expect(team.guid).toBeTruthy();
    });
  });

  describe("non-administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      const luigi = new TeamMember({
        teamGuid: team.guid,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("pasta");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "pasta" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("can view account", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, teamMember, team } = await specHelper.runAction(
        "account:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.guid).toBeTruthy();
      expect(teamMember.firstName).toBe("Luigi");
      expect(teamMember.email).toBe("luigi@example.com");
      expect(team.guid).toBeTruthy();
    });

    test("can edit account", async () => {
      connection.params = {
        csrfToken,
        firstName: "Luigi is the best!",
      };
      const { error, teamMember, team } = await specHelper.runAction(
        "account:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.guid).toBeTruthy();
      expect(teamMember.firstName).toBe("Luigi is the best!");
      expect(teamMember.email).toBe("luigi@example.com");
      expect(team.guid).toBeTruthy();
    });
  });
});
