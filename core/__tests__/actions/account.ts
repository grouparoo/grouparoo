import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { TeamMember } from "../../src";
import { TeamInitialize } from "../../src/actions/teams";
import { SessionCreate } from "../../src/actions/session";
import { AccountView, AccountEdit } from "../../src/actions/account";
import { AsyncReturnType } from "type-fest";
import { Team } from "../../dist";

describe("actions/account", () => {
  helper.grouparooTestServer({ truncate: true });
  let team: AsyncReturnType<Team["apiData"]>;

  beforeAll(async () => {
    const response = await specHelper.runAction<TeamInitialize>(
      "team:initialize",
      {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      }
    );

    team = response.team;
  });

  describe("administrator signed in", () => {
    let connection: Connection;
    let csrfToken: string;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("can view account", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, teamMember, team } =
        await specHelper.runAction<AccountView>("account:view", connection);
      expect(error).toBeUndefined();
      expect(teamMember.id).toBeTruthy();
      expect(teamMember.firstName).toBe("Mario");
      expect(teamMember.email).toBe("mario@example.com");
      expect(team.id).toBeTruthy();
    });

    test("can edit account", async () => {
      connection.params = {
        csrfToken,
        firstName: "Mario!",
      };
      const { error, teamMember, team } =
        await specHelper.runAction<AccountEdit>("account:edit", connection);
      expect(error).toBeUndefined();
      expect(teamMember.id).toBeTruthy();
      expect(teamMember.firstName).toBe("Mario!");
      expect(teamMember.email).toBe("mario@example.com");
      expect(team.id).toBeTruthy();
    });
  });

  describe("non-administrator signed in", () => {
    let connection: Connection;
    let csrfToken: string;

    beforeAll(async () => {
      const luigi = new TeamMember({
        teamId: team.id,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("pasta");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "pasta" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("can view account", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, teamMember, team } =
        await specHelper.runAction<AccountView>("account:view", connection);
      expect(error).toBeUndefined();
      expect(teamMember.id).toBeTruthy();
      expect(teamMember.firstName).toBe("Luigi");
      expect(teamMember.email).toBe("luigi@example.com");
      expect(team.id).toBeTruthy();
    });

    test("can edit account", async () => {
      connection.params = {
        csrfToken,
        firstName: "Luigi is the best!",
      };
      const { error, teamMember, team } =
        await specHelper.runAction<AccountEdit>("account:edit", connection);
      expect(error).toBeUndefined();
      expect(teamMember.id).toBeTruthy();
      expect(teamMember.firstName).toBe("Luigi is the best!");
      expect(teamMember.email).toBe("luigi@example.com");
      expect(team.id).toBeTruthy();
    });
  });
});
