import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Group, GrouparooRecord, Team, TeamMember } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  GroupCountComponentMembers,
  GroupCountPotentialMembers,
  GroupCreate,
  GroupDestroy,
  GroupEdit,
  GroupExport,
  GroupListDestinations,
  GroupRun,
  GroupsList,
  GroupsRuleOptions,
  GroupView,
} from "../../src/actions/groups";

describe("actions/groups", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;

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
      const sessionResponse = await specHelper.runAction<SessionCreate>(
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
      const { error, group } = await specHelper.runAction<GroupCreate>(
        "group:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("new group");
      expect(group.type).toBe("manual");
      id = group.id;
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
      const { error, groups, total } = await specHelper.runAction<GroupsList>(
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
        id,
        name: "new group name",
      };
      const { error, group } = await specHelper.runAction<GroupEdit>(
        "group:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("new group name");
    });

    test("a writer can view a team", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, group } = await specHelper.runAction<GroupView>(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("new group name");
    });

    test("an administrator can view the destinations tracking a group", async () => {
      const destination = await helper.factories.destination();
      const group = await Group.findById(id);
      await destination.trackGroup(group);

      connection.params = {
        csrfToken,
        id,
      };
      const { error, destinations } =
        await specHelper.runAction<GroupListDestinations>(
          "group:listDestinations",
          connection
        );
      expect(error).toBeUndefined();
      expect(destinations.length).toBe(1);
      expect(destinations[0].id).toEqual(destination.id);

      await destination.unTrackGroup();
      await destination.destroy();
    });

    test("an administrator can enqueue a group export to CSV", async () => {
      connection.params = {
        csrfToken,
        id,
        type: "csv",
      };
      const { error, success } = await specHelper.runAction<GroupExport>(
        "group:export",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);

      const foundTasks = await specHelper.findEnqueuedTasks(
        "group:exportToCSV"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ groupId: id });
    });

    test("an administrator cannot destroy a group used by a destination", async () => {
      const destination = await helper.factories.destination();
      const group = await Group.findById(id);
      await destination.trackGroup(group);

      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction<GroupDestroy>(
        "group:destroy",
        connection
      );
      expect(destroyResponse.error.message).toMatch(
        /this group still in use by 1 destinations, cannot delete/
      );

      await destination.unTrackGroup();
      await destination.destroy();
    });

    test("an administrator can mark a group to be destroyed", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction<GroupDestroy>(
        "group:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const group = await Group.findById(id);
      expect(group.state).toBe("deleted");
    });

    test("an administrator can force destroy a group", async () => {
      const newGroup = await helper.factories.group();

      connection.params = {
        csrfToken,
        id: newGroup.id,
        force: true,
      };
      const destroyResponse = await specHelper.runAction<GroupDestroy>(
        "group:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      expect(await Group.count({ where: { id: newGroup.id } })).toBe(0);
    });

    describe("calculated group", () => {
      let group: Group;
      let mario: GrouparooRecord;
      let luigi: GrouparooRecord;

      beforeAll(async () => {
        await helper.factories.properties();
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
        await GrouparooRecord.truncate();

        mario = await GrouparooRecord.create();
        luigi = await GrouparooRecord.create();

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
        const { error, ruleLimit, ops } =
          await specHelper.runAction<GroupsRuleOptions>(
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
            operation: { op: "like" },
          },
        ]);

        // test existing rules
        connection.params = { csrfToken, id: group.id };
        let response = await specHelper.runAction<GroupCountComponentMembers>(
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
            operation: { op: "like" },
          },
        ];
        connection.params = { csrfToken, id: group.id, rules: newRules };
        response = await specHelper.runAction<GroupCountComponentMembers>(
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
            operation: { op: "like" },
          },
        ]);

        // test existing rules
        connection.params = { csrfToken, id: group.id };
        let response = await specHelper.runAction<GroupCountPotentialMembers>(
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
            operation: { op: "like" },
          },
        ];
        connection.params = { csrfToken, id: group.id, rules: newRules };
        response = await specHelper.runAction<GroupCountPotentialMembers>(
          "group:countPotentialMembers",
          connection
        );
        expect(response.error).toBeUndefined();
        expect(response.count).toEqual(1);
      });

      test("group#run", async () => {
        connection.params = { csrfToken, id: group.id };
        let response = await specHelper.runAction<GroupRun>(
          "group:run",
          connection
        );
        expect(response.error).toBeUndefined();
        expect(response.success).toBe(true);
      });
    });
  });

  describe("reader signed in", () => {
    let connection;
    let teamId;
    let csrfToken;
    let group: Group;

    beforeAll(async () => {
      group = new Group({
        type: "manual",
        name: "test group",
      });
      await group.save();
      id = group.id;

      const readOnlyTeam = new Team({
        name: "read only team",
      });
      await readOnlyTeam.save();
      teamId = readOnlyTeam.id;

      const luigi = new TeamMember({
        teamId,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("P@ssw0rd!");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
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
      expect(error.code).toBe("AUTHORIZATION_ERROR");
    });

    test("a reader can list all the groups", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, groups } = await specHelper.runAction<GroupsList>(
        "groups:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(2);
    });

    test("a reader cannot edit a group", async () => {
      connection.params = {
        csrfToken,
        id,
        name: "new group name",
      };
      const { error } = await specHelper.runAction<GroupEdit>(
        "group:edit",
        connection
      );
      expect(error.code).toBe("AUTHORIZATION_ERROR");
    });

    test("a reader can view a team", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, group } = await specHelper.runAction<GroupView>(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("test group");
    });

    test("a reader cannot destroy a group", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction(
        "group:destroy",
        connection
      );

      expect(destroyResponse.error.code).toBe("AUTHORIZATION_ERROR");
    });
  });
});
