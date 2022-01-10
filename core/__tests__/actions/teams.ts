import { helper } from "@grouparoo/spec-helper";
import { specHelper, Connection } from "actionhero";
import { Team, TeamMember, Setting } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  TeamCreate,
  TeamDestroy,
  TeamEdit,
  TeamInitialize,
  TeamsList,
  TeamView,
} from "../../src/actions/teams";

const GrouparooSubscriptionModule = require("../../src/modules/grouparooSubscription");
GrouparooSubscriptionModule.GrouparooSubscription = jest.fn();

describe("actions/teams", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });
  let id: string;

  describe("team:initialize", () => {
    describe("with setting", () => {
      let clusterNameSetting: Setting;

      beforeAll(async () => {
        clusterNameSetting = await Setting.findOne({
          where: { pluginName: "core", key: "cluster-name" },
        });
      });

      afterAll(async () => {
        await Team.truncate();
        await TeamMember.truncate();
        await clusterNameSetting.update(
          {
            value: clusterNameSetting.defaultValue,
            locked: null,
          },
          { hooks: false }
        );
      });

      test("if the cluster-name setting already exists, supplying a companyName will not update the setting", async () => {
        await clusterNameSetting.update(
          {
            value: "Company inc.",
            locked: true,
          },
          { hooks: false }
        );

        const response = await specHelper.runAction<TeamInitialize>(
          "team:initialize",
          {
            firstName: "Mario",
            lastName: "Mario",
            password: "P@ssw0rd!",
            companyName: "Mario Bros. Plumbing",
            email: "mario@example.com",
          }
        );

        expect(response.team.name).toBe("Administrators");
        await clusterNameSetting.reload();
        expect(clusterNameSetting.value).toBe("Company inc.");
      });
    });

    test("a new team can be initialized with the first team member and the team member should be subscribed", async () => {
      const response = await specHelper.runAction<TeamInitialize>(
        "team:initialize",
        {
          firstName: "Mario",
          lastName: "Mario",
          password: "P@ssw0rd!",
          companyName: "Mario Bros. Plumbing",
          email: "mario@example.com",
        }
      );

      expect(response.team.id.length).toBe(40);
      expect(response.team.name).toBe("Administrators");
      expect(response.team.locked).toBe("team:initialize");
      expect(response.team.membersCount).toBe(1);
      expect(response.team.permissions.length).toBeGreaterThan(1);

      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledWith({
        teamMember: expect.objectContaining({
          email: "mario@example.com",
        }),
        subscribed: true,
      });
    });

    test("the company name will be used to set the clusterName setting", async () => {
      const clusterNameSetting = await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      });
      expect(clusterNameSetting.value).toEqual("Mario Bros. Plumbing");
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

    test("an administrator can create a new team", async () => {
      connection.params = {
        csrfToken,
        name: "new team",
      };
      const { error, team } = await specHelper.runAction<TeamCreate>(
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
      const { error, teams } = await specHelper.runAction<TeamsList>(
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
      const { error, team } = await specHelper.runAction<TeamEdit>(
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
      const { error, team, teamMembers } = await specHelper.runAction<TeamView>(
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
      const { team } = await specHelper.runAction<TeamView>(
        "team:view",
        connection
      );
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
      const { team } = await specHelper.runAction<TeamEdit>(
        "team:edit",
        connection
      );
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
      const { team: teamAgain } = await specHelper.runAction<TeamEdit>(
        "team:edit",
        connection
      );
      teamAgain.permissions.forEach((_permission) => {
        expect(_permission.read).toBe(true);
        expect(_permission.write).toBe(false);
      });
    });

    test("permissions can be updated when not managing in bulk", async () => {
      connection.params = {
        csrfToken,
        id,
        permissionAllRead: null,
        permissionAllWrite: null,
        permissions: [{ topic: "app", read: true, write: true }],
      };
      const { team } = await specHelper.runAction<TeamEdit>(
        "team:edit",
        connection
      );
      team.permissions.forEach((_permission) => {
        if (_permission.topic === "app") {
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
      const { error, team } = await specHelper.runAction<TeamCreate>(
        "team:create",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        id: team.id,
      };
      const destroyResponse = await specHelper.runAction<TeamDestroy>(
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
      const { error, team } = await specHelper.runAction<TeamCreate>(
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
      const destroyResponse = await specHelper.runAction<TeamDestroy>(
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
      const destroyResponse = await specHelper.runAction<TeamDestroy>(
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
    let connection: Connection;
    let csrfToken: string;

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
      const sessionResponse = await specHelper.runAction<SessionCreate>(
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
      const { error, team, teamMembers } = await specHelper.runAction<TeamView>(
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
      const { error } = await specHelper.runAction<TeamCreate>(
        "team:create",
        connection
      );
      expect(error.code).toEqual("AUTHORIZATION_ERROR");
    });

    test("a non-administrator cannot edit a team", async () => {
      connection.params = {
        csrfToken,
        id,
        name: "team wario",
      };
      const { error } = await specHelper.runAction<TeamEdit>(
        "team:edit",
        connection
      );
      expect(error.code).toEqual("AUTHORIZATION_ERROR");
    });

    test("a non-administrator cannot destroy a team", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error } = await specHelper.runAction<TeamDestroy>(
        "team:destroy",
        connection
      );
      expect(error.code).toEqual("AUTHORIZATION_ERROR");
    });
  });
});
