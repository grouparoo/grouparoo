import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
import { Permission } from "./../../src/models/Permission";

const GrouparooSubscriptionModule = require("../../src/modules/grouparooSubscription");
GrouparooSubscriptionModule.GrouparooSubscription = jest.fn();

let actionhero;
let guid;

describe("actions/teams", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("team:initialize", () => {
    test("a new team can be initialized with the first team member and the team member should be subscribed", async () => {
      const response = await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      });

      expect(response.team.guid.length).toBe(40);
      expect(response.team.name).toBe("Administrators");
      expect(response.team.locked).toBe(true);
      expect(response.team.membersCount).toBe(1);
      expect(response.team.permissions.length).toBeGreaterThan(1);

      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "mario@example.com",
        })
      );
    });

    test("you cannot initialize more than one team on the server", async () => {
      const response = await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      });

      expect(response.error.message).toMatch(
        /an administration team already exists/
      );
    });
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

    test("an administrator can create a new team", async () => {
      connection.params = {
        csrfToken,
        name: "new team",
      };
      const { error, team } = await specHelper.runAction(
        "team:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.guid).toBeTruthy();
      expect(team.name).toBe("new team");
      guid = team.guid;
    });

    test("an administrator can list all the teams", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, teams } = await specHelper.runAction(
        "teams:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(teams.length).toBe(2);
    });

    test("an administrator can edit a team", async () => {
      connection.params = {
        csrfToken,
        guid,
        name: "new team name",
      };
      const { error, team } = await specHelper.runAction(
        "team:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.guid).toBeTruthy();
      expect(team.name).toBe("new team name");
    });

    test("an administrator can view a team", async () => {
      const teamMember = new TeamMember({
        teamGuid: guid,
        firstName: "Toad",
        lastName: "Toadstool",
        email: "toad@example.com",
      });
      await teamMember.save();

      connection.params = {
        csrfToken,
        guid,
      };
      const { error, team, teamMembers } = await specHelper.runAction(
        "team:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.guid).toBeTruthy();
      expect(team.name).toBe("new team name");
      expect(teamMembers.length).toBe(1);
      expect(teamMembers[0].email).toBe("toad@example.com");
    });

    test("new teams are created with read permissions", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { team } = await specHelper.runAction("team:view", connection);
      team.permissions.forEach((permission) => {
        expect(permission.read).toBe(true);
        expect(permission.write).toBe(false);
      });
    });

    test("permissions can be set in bulk", async () => {
      connection.params = {
        csrfToken,
        guid,
        permissionAllRead: true,
        permissionAllWrite: true,
      };
      const { team } = await specHelper.runAction("team:edit", connection);
      team.permissions.forEach((_permission) => {
        expect(_permission.read).toBe(true);
        expect(_permission.write).toBe(true);
      });

      connection.params = {
        csrfToken,
        guid,
        permissionAllRead: true,
        permissionAllWrite: false,
      };
      const { team: teamAgain } = await specHelper.runAction(
        "team:edit",
        connection
      );
      teamAgain.permissions.forEach((_permission) => {
        expect(_permission.read).toBe(true);
        expect(_permission.write).toBe(false);
      });
    });

    test("permissions can be updated when not managing in bulk", async () => {
      const permission = await Permission.findOne({
        where: { ownerGuid: guid, topic: "app" },
      });

      connection.params = {
        csrfToken,
        guid,
        disabledPermissionAllRead: true,
        disabledPermissionAllWrite: true,
        permissions: [
          {
            guid: permission.guid,
            read: true,
            write: true,
          },
        ],
      };
      const { team } = await specHelper.runAction("team:edit", connection);
      team.permissions.forEach((_permission) => {
        if (permission.guid === _permission.guid) {
          expect(_permission.read).toBe(true);
          expect(_permission.write).toBe(true);
        } else {
          expect(_permission.read).toBe(true);
          expect(_permission.write).toBe(false);
        }
      });
    });

    test("an administrator can destroy a team with no members", async () => {
      connection.params = {
        csrfToken,
        name: "doomed team",
      };
      const { error, team } = await specHelper.runAction(
        "team:create",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        guid: team.guid,
      };
      const destroyResponse = await specHelper.runAction(
        "team:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);
    });

    test("an administrator cannot destroy a team with members", async () => {
      connection.params = {
        csrfToken,
        name: "doomed team",
      };
      const { error, team } = await specHelper.runAction(
        "team:create",
        connection
      );
      expect(error).toBeUndefined();

      const teamMember = new TeamMember({
        teamGuid: team.guid,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await teamMember.save();

      connection.params = {
        csrfToken,
        guid: team.guid,
      };
      const destroyResponse = await specHelper.runAction(
        "team:destroy",
        connection
      );
      expect(destroyResponse.error.message).toMatch(
        /cannot delete a team that has members/
      );
      expect(destroyResponse.success).toBe(false);
    });

    test("an administrator cannot destroy a non-locked team", async () => {
      const adminTeam = await Team.findOne({
        where: { name: "Administrators" },
      });

      connection.params = {
        csrfToken,
        guid: adminTeam.guid,
      };
      const destroyResponse = await specHelper.runAction(
        "team:destroy",
        connection
      );
      expect(destroyResponse.error.message).toMatch(
        /you cannot delete this team/
      );
      expect(destroyResponse.success).toBe(false);
    });
  });

  describe("read-only user signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      const teamMember = new TeamMember({
        teamGuid: guid,
        firstName: "Wario",
        lastName: "Wario",
        email: "wario@example.com",
      });
      await teamMember.save();
      await teamMember.updatePassword("moneymoney");

      connection = await specHelper.buildConnection();
      connection.params = {
        email: "wario@example.com",
        password: "moneymoney",
      };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a non-administrator can view a team", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, team, teamMembers } = await specHelper.runAction(
        "team:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.guid).toBeTruthy();
      expect(team.name).toBe("new team name");
      expect(teamMembers.length).toBe(2);
      // email desc
      expect(teamMembers[1].email).toBe("toad@example.com");
      expect(teamMembers[0].email).toBe("wario@example.com");
    });

    test("a non-administrator cannot create a team", async () => {
      connection.params = {
        csrfToken,
        name: "team wario",
      };
      const { error } = await specHelper.runAction("team:create", connection);
      expect(error.message).toEqual(
        'not authorized for mode "write" on topic "team"'
      );
    });

    test("a non-administrator cannot edit a team", async () => {
      connection.params = {
        csrfToken,
        guid,
        name: "team wario",
      };
      const { error } = await specHelper.runAction("team:edit", connection);
      expect(error.message).toEqual(
        'not authorized for mode "write" on topic "team"'
      );
    });

    test("a non-administrator cannot destroy a team", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error } = await specHelper.runAction("team:destroy", connection);
      expect(error.message).toEqual(
        'not authorized for mode "write" on topic "team"'
      );
    });
  });
});
