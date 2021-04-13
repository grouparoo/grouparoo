import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Team, TeamMember, Permission, Setting } from "../../src";

const GrouparooSubscriptionModule = require("../../src/modules/grouparooSubscription");
GrouparooSubscriptionModule.GrouparooSubscription = jest.fn();

describe("actions/teams", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });
  let id: string;

  describe("team:initialize", () => {
    test("a new team can be initialized with the first team member and the team member should be subscribed", async () => {
      const response = await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        companyName: "Mario Bros. Plumbing",
        email: "mario@example.com",
      });

      expect(response.team.id.length).toBe(40);
      expect(response.team.name).toBe("Administrators");
      expect(response.team.locked).toBe("team:initialize");
      expect(response.team.membersCount).toBe(1);
      expect(response.team.permissions.length).toBeGreaterThan(1);

      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "mario@example.com",
        }),
        true
      );
    });

    test("the company name will be used to set the clusterName setting", async () => {
      const clusterNameSetting = await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      });
      expect(clusterNameSetting.value).toEqual("Mario Bros. Plumbing - Test");
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
      expect(team.id).toBeTruthy();
      expect(team.name).toBe("new team");
      id = team.id;
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
        id,
        name: "new team name",
      };
      const { error, team } = await specHelper.runAction(
        "team:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.id).toBeTruthy();
      expect(team.name).toBe("new team name");
    });

    test("an administrator can view a team", async () => {
      const teamMember = new TeamMember({
        teamId: id,
        firstName: "Toad",
        lastName: "Toadstool",
        email: "toad@example.com",
      });
      await teamMember.save();

      connection.params = {
        csrfToken,
        id,
      };
      const { error, team, teamMembers } = await specHelper.runAction(
        "team:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.id).toBeTruthy();
      expect(team.name).toBe("new team name");
      expect(teamMembers.length).toBe(1);
      expect(teamMembers[0].email).toBe("toad@example.com");
    });

    test("new teams are created with read permissions", async () => {
      connection.params = {
        csrfToken,
        id,
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
        id,
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
        id,
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
        where: { ownerId: id, topic: "app" },
      });

      connection.params = {
        csrfToken,
        id,
        disabledPermissionAllRead: true,
        disabledPermissionAllWrite: true,
        permissions: [
          {
            id: permission.id,
            read: true,
            write: true,
          },
        ],
      };
      const { team } = await specHelper.runAction("team:edit", connection);
      team.permissions.forEach((_permission) => {
        if (permission.id === _permission.id) {
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
        id: team.id,
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
        teamId: team.id,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await teamMember.save();

      connection.params = {
        csrfToken,
        id: team.id,
      };
      const destroyResponse = await specHelper.runAction(
        "team:destroy",
        connection
      );
      expect(destroyResponse.error.message).toMatch(
        /cannot delete a team that has members/
      );
      expect(destroyResponse.success).toBeUndefined();
    });

    test("an administrator cannot destroy a non-locked team", async () => {
      const adminTeam = await Team.findOne({
        where: { name: "Administrators" },
      });

      connection.params = {
        csrfToken,
        id: adminTeam.id,
      };
      const destroyResponse = await specHelper.runAction(
        "team:destroy",
        connection
      );
      expect(destroyResponse.error.message).toMatch(
        /you cannot destroy a locked team/
      );
      expect(destroyResponse.success).toBeUndefined();
    });
  });

  describe("read-only user signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      const teamMember = new TeamMember({
        teamId: id,
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
        id,
      };
      const { error, team, teamMembers } = await specHelper.runAction(
        "team:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(team.id).toBeTruthy();
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
      expect(error.code).toEqual("AUTHORIZATION_ERROR");
    });

    test("a non-administrator cannot edit a team", async () => {
      connection.params = {
        csrfToken,
        id,
        name: "team wario",
      };
      const { error } = await specHelper.runAction("team:edit", connection);
      expect(error.code).toEqual("AUTHORIZATION_ERROR");
    });

    test("a non-administrator cannot destroy a team", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error } = await specHelper.runAction("team:destroy", connection);
      expect(error.code).toEqual("AUTHORIZATION_ERROR");
    });
  });
});
