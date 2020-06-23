import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { TeamMember } from "./../../src/models/TeamMember";

const GrouparooSubscriptionModule = require("../../src/modules/grouparooSubscription");
GrouparooSubscriptionModule.GrouparooSubscription = jest.fn();

let actionhero;
let guid;
let teamMemberGuid;

describe("actions/teamMembers", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    const { team } = await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
    guid = team.guid;
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

    test("an administrator can create a new team member", async () => {
      connection.params = {
        csrfToken,
        guid,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
        password: "mush00ms",
      };
      const { error, teamMember } = await specHelper.runAction(
        "teamMember:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.guid).toBeTruthy();
      expect(teamMember.teamGuid).toBe(guid);
      expect(teamMember.email).toBe("luigi@example.com");
      teamMemberGuid = teamMember.guid;
    });

    test("when a team member is created, they can subscribe to the grouparoo newsletter", async () => {
      GrouparooSubscriptionModule.GrouparooSubscription.mockReset();

      connection.params = {
        csrfToken,
        guid,
        firstName: "Toad",
        lastName: "Toadstool",
        email: "toad@example.com",
        password: "mush00ms",
        subscribe: true,
      };
      await specHelper.runAction("teamMember:create", connection);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledTimes(1);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "toad@example.com",
        })
      );

      GrouparooSubscriptionModule.GrouparooSubscription.mockReset();

      connection.params = {
        csrfToken,
        guid,
        firstName: "Yoshi",
        lastName: "Yoshi",
        email: "yoshi@example.com",
        password: "apples",
        subscribe: false,
      };
      await specHelper.runAction("teamMember:create", connection);
      expect(
        GrouparooSubscriptionModule.GrouparooSubscription
      ).toHaveBeenCalledTimes(0);
    });

    test("an administrator can view a team member", async () => {
      connection.params = {
        csrfToken,
        guid: teamMemberGuid,
      };
      const { error, teamMember, team } = await specHelper.runAction(
        "teamMember:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.guid).toBeTruthy();
      expect(teamMember.teamGuid).toBe(guid);
      expect(teamMember.email).toBe("luigi@example.com");
      expect(team.guid).toBe(guid);
    });

    test("an administrator can list all members in a team", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, teamMembers } = await specHelper.runAction(
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
      const { error, teamMembers } = await specHelper.runAction(
        "teamMembers:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMembers.length).toBe(4);
    });

    test("an administrator can edit a team member", async () => {
      connection.params = {
        csrfToken,
        guid: teamMemberGuid,
        firstName: "Super Luigi",
      };
      const { error, teamMember } = await specHelper.runAction(
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
        guid: teamMemberGuid,
        teamGuid: team.guid,
      };
      const { error, teamMember } = await specHelper.runAction(
        "teamMember:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(teamMember.teamGuid).toBe(team.guid);
    });

    test("an administrator can change a team member's password", async () => {
      connection.params = {
        csrfToken,
        guid: teamMemberGuid,
        password: "new-password",
      };
      const { error } = await specHelper.runAction(
        "teamMember:edit",
        connection
      );
      expect(error).toBeUndefined();

      const teamMember = await TeamMember.findOne({
        where: { guid: teamMemberGuid },
      });
      const check = await teamMember.checkPassword("new-password");
      expect(check).toBe(true);
    });

    test("an administrator can destroy a team member", async () => {
      connection.params = {
        csrfToken,
        guid: teamMemberGuid,
      };
      const { error, success } = await specHelper.runAction(
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
        guid: mario.guid,
      };
      const { error } = await specHelper.runAction(
        "teamMember:destroy",
        connection
      );
      expect(error.message).toMatch(/you cannot delete yourself/);
    });
  });
});
