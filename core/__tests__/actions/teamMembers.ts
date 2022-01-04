import { helper } from "@grouparoo/spec-helper";
import { specHelper, Connection } from "actionhero";
import { TeamMember } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import { TeamInitialize } from "../../src/actions/teams";
import {
  TeamMemberCreate,
  TeamMemberDestroy,
  TeamMemberEdit,
  TeamMembersList,
  TeamMemberView,
} from "../../src/actions/teamMembers";

const GrouparooSubscriptionModule = require("../../src/modules/grouparooSubscription");
GrouparooSubscriptionModule.GrouparooSubscription = jest.fn();

describe("actions/teamMembers", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });
  let teamId: string;
  let teamMemberId: string;

  beforeAll(async () => {
    const { team } = await specHelper.runAction<TeamInitialize>(
      "team:initialize",
      {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      }
    );
    teamId = team.id;
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

    test("an administrator can create a new team member", async () => {
      connection.params = {
        csrfToken,
        teamId,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
        password: "mush00ms",
      };
      const { error, teamMember } =
        await specHelper.runAction<TeamMemberCreate>(
          "teamMember:create",
          connection
        );
      expect(error).toBeUndefined();
      expect(teamMember.id).toBeTruthy();
      expect(teamMember.teamId).toBe(teamId);
      expect(teamMember.email).toBe("luigi@example.com");
      teamMemberId = teamMember.id;
    });

    test("when a team member is created, they can subscribe to the grouparoo newsletter", async () => {
      GrouparooSubscriptionModule.GrouparooSubscription.mockReset();

      connection.params = {
        csrfToken,
        teamId,
        firstName: "Toad",
        lastName: "Toadstool",
        email: "toad@example.com",
        password: "mush00ms",
        // subscribed: true, // default=true
      };
      await specHelper.runAction("teamMember:create", connection);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledTimes(1);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledWith({
        teamMember: expect.objectContaining({
          email: "toad@example.com",
        }),
        subscribed: true,
      });

      GrouparooSubscriptionModule.GrouparooSubscription.mockReset();

      connection.params = {
        csrfToken,
        teamId,
        firstName: "Yoshi",
        lastName: "Yoshi",
        email: "yoshi@example.com",
        password: "apples",
        subscribed: false,
      };
      await specHelper.runAction("teamMember:create", connection);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledTimes(1);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledWith({
        teamMember: expect.objectContaining({
          email: "yoshi@example.com",
        }),
        subscribed: false,
      });
    });

    test("an administrator can view a team member", async () => {
      connection.params = {
        csrfToken,
        id: teamMemberId,
      };
      const { error, teamMember, team } =
        await specHelper.runAction<TeamMemberView>(
          "teamMember:view",
          connection
        );
      expect(error).toBeUndefined();
      expect(teamMember.id).toBeTruthy();
      expect(teamMember.teamId).toBe(teamId);
      expect(teamMember.email).toBe("luigi@example.com");
      expect(team.id).toBe(teamId);
    });

    test("an administrator can list all members in a team", async () => {
      connection.params = {
        csrfToken,
        teamId,
      };
      const { error, teamMembers } =
        await specHelper.runAction<TeamMembersList>(
          "teamMembers:list",
          connection
        );
      expect(error).toBeUndefined();
      expect(teamMembers.length).toBe(4);
    });

    test("an administrator can list all members in Grouparoo", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, teamMembers } =
        await specHelper.runAction<TeamMembersList>(
          "teamMembers:list",
          connection
        );
      expect(error).toBeUndefined();
      expect(teamMembers.length).toBe(4);
    });

    test("an administrator can edit a team member", async () => {
      connection.params = {
        csrfToken,
        id: teamMemberId,
        firstName: "Super Luigi",
      };
      const { error, teamMember } = await specHelper.runAction<TeamMemberEdit>(
        "teamMember:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.firstName).toBe("Super Luigi");
      expect(teamMember.lastName).toBe("Mario");
    });

    test("an administrator can change a team member's team", async () => {
      const team = await helper.factories.team();

      connection.params = {
        csrfToken,
        id: teamMemberId,
        teamId: team.id,
      };
      const { error, teamMember } = await specHelper.runAction<TeamMemberEdit>(
        "teamMember:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.teamId).toBe(team.id);
    });

    test("an administrator can change a team member's password", async () => {
      connection.params = {
        csrfToken,
        id: teamMemberId,
        password: "new-password",
      };
      const { error } = await specHelper.runAction<TeamMemberEdit>(
        "teamMember:edit",
        connection
      );
      expect(error).toBeUndefined();

      const teamMember = await TeamMember.findOne({
        where: { id: teamMemberId },
      });
      const check = await teamMember.checkPassword("new-password");
      expect(check).toBe(true);
    });

    test("an administrator can destroy a team member", async () => {
      connection.params = {
        csrfToken,
        id: teamMemberId,
      };
      const { error, success } = await specHelper.runAction<TeamMemberDestroy>(
        "teamMember:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });

    test("an administrator cannot destroy themselves", async () => {
      const mario = await TeamMember.findOne({
        where: { email: "mario@example.com" },
      });

      connection.params = {
        csrfToken,
        id: mario.id,
      };
      const { error } = await specHelper.runAction<TeamMemberDestroy>(
        "teamMember:destroy",
        connection
      );
      expect(error.message).toMatch(/you cannot delete yourself/);
    });
  });
});
