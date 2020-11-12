import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Group } from "./../../src/models/Group";
import { Profile } from "./../../src/models/Profile";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
let actionhero;
let guid;

describe("actions/groups", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("writer signed in", () => {
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

    test("a writer can create a new group", async () => {
      connection.params = {
        csrfToken,
        name: "new group",
        type: "manual",
      };
      const { error, group } = await specHelper.runAction(
        "group:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.guid).toBeTruthy();
      expect(group.name).toBe("new group");
      expect(group.type).toBe("manual");
      guid = group.guid;
    });

    test("a writer cannot create a new group with a bogus type", async () => {
      connection.params = {
        csrfToken,
        name: "new group",
        type: "bogus",
      };
      const { error } = await specHelper.runAction("group:create", connection);
      expect(error).toBeTruthy();
    });

    test("a writer can list all the groups", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, groups, total } = await specHelper.runAction(
        "groups:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(total).toBe(1);
    });

    test("a writer can edit a group", async () => {
      connection.params = {
        csrfToken,
        guid,
        name: "new group name",
      };
      const { error, group } = await specHelper.runAction(
        "group:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.guid).toBeTruthy();
      expect(group.name).toBe("new group name");
    });

    test("a writer can view a team", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, group } = await specHelper.runAction(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.guid).toBeTruthy();
      expect(group.name).toBe("new group name");
    });

    test("an administrator can view the destinations tracking a group", async () => {
      const destination = await helper.factories.destination();
      const group = await Group.findByGuid(guid);
      await destination.trackGroup(group);

      connection.params = {
        csrfToken,
        guid,
      };
      const { error, destinations } = await specHelper.runAction(
        "group:listDestinations",
        connection
      );
      expect(error).toBeUndefined();
      expect(destinations.length).toBe(1);
      expect(destinations[0].guid).toEqual(destination.guid);

      await destination.unTrackGroup();
      await destination.destroy();
    });

    test("an administrator can enqueue a group export to CSV", async () => {
      connection.params = {
        csrfToken,
        guid,
        type: "csv",
      };
      const { error, success } = await specHelper.runAction(
        "group:export",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);

      const foundTasks = await specHelper.findEnqueuedTasks(
        "group:exportToCSV"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ groupGuid: guid });
    });

    test("an administrator cannot destroy a group used by a destination", async () => {
      const destination = await helper.factories.destination();
      const group = await Group.findByGuid(guid);
      await destination.trackGroup(group);

      connection.params = {
        csrfToken,
        guid,
      };
      const destroyResponse = await specHelper.runAction(
        "group:destroy",
        connection
      );
      expect(destroyResponse.error.message).toMatch(
        /this group still in use by 1 destinations, cannot delete/
      );

      await destination.unTrackGroup();
      await destination.destroy();
    });

    test("an administrator can enqueue a group to be destroyed", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const destroyResponse = await specHelper.runAction(
        "group:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const foundTasks = await specHelper.findEnqueuedTasks("group:destroy");
      expect(foundTasks.length).toBe(1);
    });

    test("an administrator can force destroy a group", async () => {
      const newGroup = await helper.factories.group();

      connection.params = {
        csrfToken,
        guid: newGroup.guid,
        force: true,
      };
      const destroyResponse = await specHelper.runAction(
        "group:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      expect(await Group.count({ where: { guid: newGroup.guid } })).toBe(0);
    });

    describe("calculated group", () => {
      let group: Group;
      let mario: Profile;
      let luigi: Profile;

      beforeAll(async () => {
        await helper.factories.profilePropertyRules();
      });

      beforeEach(async () => {
        group = await Group.create({
          name: "test calculated group",
          type: "calculated",
          rules: {},
        });
      });

      afterEach(async () => {
        await group.destroy();
      });

      beforeAll(async () => {
        await Profile.destroy({ truncate: true });

        mario = await Profile.create();
        luigi = await Profile.create();

        await mario.addOrUpdateProperties({
          firstName: ["Mario"],
          lastName: ["Mario"],
          email: ["mario@example.com"],
        });

        await luigi.addOrUpdateProperties({
          firstName: ["Luigi"],
          lastName: ["Mario"],
          email: ["luigi@example.com"],
        });
      });

      test("groups#ruleOptions", async () => {
        connection.params = { csrfToken };
        const { error, ruleLimit, ops } = await specHelper.runAction(
          "groups:ruleOptions",
          connection
        );
        expect(error).toBeUndefined();
        expect(ruleLimit).toBe(10);
        expect(Object.keys(ops).sort()).toEqual([
          "_convenientRules",
          "_relativeMatchUnits",
          "boolean",
          "date",
          "email",
          "float",
          "integer",
          "phoneNumber",
          "string",
          "url",
        ]);

        expect(ops._relativeMatchUnits).toEqual([
          "days",
          "weeks",
          "months",
          "quarters",
          "years",
        ]);
      });

      test("group#countComponentMembers", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([
          {
            key: "lastName",
            match: "Mario",
            operation: { op: "iLike" },
          },
        ]);

        // test existing rules
        connection.params = { csrfToken, guid: group.guid };
        let response = await specHelper.runAction(
          "group:countComponentMembers",
          connection
        );
        expect(response.error).toBeUndefined();
        expect(response.componentCounts).toEqual([2]);
        expect(response.funnelCounts).toEqual([2]);

        // test new rules
        const newRules = [
          {
            key: "firstName",
            match: "Mario",
            operation: { op: "iLike" },
          },
        ];
        connection.params = { csrfToken, guid: group.guid, rules: newRules };
        response = await specHelper.runAction(
          "group:countComponentMembers",
          connection
        );
        expect(response.error).toBeUndefined();
        expect(response.componentCounts).toEqual([1]);
        expect(response.funnelCounts).toEqual([1]);
      });

      test("group#countPotentialMembers", async () => {
        await group.update({ matchType: "all" });
        await group.setRules([
          {
            key: "lastName",
            match: "Mario",
            operation: { op: "iLike" },
          },
        ]);

        // test existing rules
        connection.params = { csrfToken, guid: group.guid };
        let response = await specHelper.runAction(
          "group:countPotentialMembers",
          connection
        );
        expect(response.error).toBeUndefined();
        expect(response.count).toEqual(2);

        // test new rules
        const newRules = [
          {
            key: "firstName",
            match: "Mario",
            operation: { op: "iLike" },
          },
        ];
        connection.params = { csrfToken, guid: group.guid, rules: newRules };
        response = await specHelper.runAction(
          "group:countPotentialMembers",
          connection
        );
        expect(response.error).toBeUndefined();
        expect(response.count).toEqual(1);
      });

      test("group#run", async () => {
        connection.params = { csrfToken, guid: group.guid };
        let response = await specHelper.runAction("group:run", connection);
        expect(response.error).toBeUndefined();
        expect(response.success).toBe(true);
      });
    });
  });

  describe("reader signed in", () => {
    let connection;
    let teamGuid;
    let csrfToken;
    let group: Group;

    beforeAll(async () => {
      group = new Group({
        type: "manual",
        name: "test group",
      });
      await group.save();
      guid = group.guid;

      const readOnlyTeam = new Team({
        name: "read only team",
      });
      await readOnlyTeam.save();
      teamGuid = readOnlyTeam.guid;

      const luigi = new TeamMember({
        teamGuid,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("P@ssw0rd!");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader cannot create a new group", async () => {
      connection.params = {
        csrfToken,
        name: "new group",
        type: "manual",
      };
      const { error } = await specHelper.runAction("group:create", connection);
      expect(error.message).toBe(
        'not authorized for mode "write" on topic "group"'
      );
    });

    test("a reader can list all the groups", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, groups } = await specHelper.runAction(
        "groups:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(2);
    });

    test("a reader can list all the groups by the newest group member", async () => {
      const profileA = await helper.factories.profile();
      const profileB = await helper.factories.profile();
      const smallGroup = await helper.factories.group();
      const bigGroup = await helper.factories.group();
      await smallGroup.addProfile(profileA);
      await bigGroup.addProfile(profileA);
      await bigGroup.addProfile(profileB);

      connection.params = {
        csrfToken,
      };
      const { error, groups, newestMembersAdded } = await specHelper.runAction(
        "groups:list:byNewestMember",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(2);
      const groupGuids = groups.map((g) => g.guid);
      expect(groupGuids[0]).toBe(bigGroup.guid);
      expect(groupGuids[1]).toBe(smallGroup.guid);

      expect(newestMembersAdded[bigGroup.guid]).toBeGreaterThanOrEqual(
        newestMembersAdded[smallGroup.guid]
      );

      await profileA.destroy();
      await profileB.destroy();
      await smallGroup.destroy();
      await bigGroup.destroy();
    });

    test("a reader cannot edit a group", async () => {
      connection.params = {
        csrfToken,
        guid,
        name: "new group name",
      };
      const { error } = await specHelper.runAction("group:edit", connection);
      expect(error.message).toBe(
        'not authorized for mode "write" on topic "group"'
      );
    });

    test("a reader can view a team", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, group } = await specHelper.runAction(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.guid).toBeTruthy();
      expect(group.name).toBe("test group");
    });

    test("a reader cannot destroy a group", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const destroyResponse = await specHelper.runAction(
        "group:destroy",
        connection
      );

      expect(destroyResponse.error.message).toBe(
        'not authorized for mode "write" on topic "group"'
      );
    });
  });
});
