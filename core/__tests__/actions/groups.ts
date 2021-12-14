import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import {
  Group,
  GrouparooRecord,
  Team,
  TeamMember,
  GrouparooModel,
} from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  GroupCountComponentMembers,
  GroupCountPotentialMembers,
  GroupCreate,
  GroupDestroy,
  GroupEdit,
  GroupListDestinations,
  GroupRun,
  GroupsList,
  GroupsRuleOptions,
  GroupView,
} from "../../src/actions/groups";
import { ConfigWriter } from "../../src/modules/configWriter";

describe("actions/groups", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;
  let model: GrouparooModel;
  const configSpy = jest.spyOn(ConfigWriter, "run");

  beforeAll(async () => {
    model = await helper.factories.model();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  afterEach(() => {
    configSpy.mockClear();
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
        modelId: model.id,
      };
      const { error, group } = await specHelper.runAction<GroupCreate>(
        "group:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("new group");
      expect(configSpy).toBeCalledTimes(1);
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
      expect(configSpy).toBeCalledTimes(1);
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
      await destination.updateTracking("group", group.id);

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

      await destination.updateTracking("none");
      await destination.destroy();
    });

    test("an administrator cannot destroy a group used by a destination", async () => {
      const destination = await helper.factories.destination();
      const group = await Group.findById(id);
      await destination.updateTracking("group", group.id);

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

      await destination.updateTracking("none");
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
      expect(configSpy).toBeCalledTimes(1);
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
      expect(configSpy).toBeCalledTimes(1);
    });

    describe("calculated group", () => {
      let group: Group;
      let mario: GrouparooRecord;
      let luigi: GrouparooRecord;

      beforeAll(async () => {
        await helper.factories.properties(model.id);
      });

      beforeEach(async () => {
        group = await Group.create({
          name: "test calculated group",
          type: "calculated",
          modelId: model.id,
          rules: {},
        });
      });

      afterEach(async () => {
        await group.destroy();
      });

      beforeAll(async () => {
        await GrouparooRecord.truncate();

        mario = await GrouparooRecord.create({ modelId: model.id });
        luigi = await GrouparooRecord.create({ modelId: model.id });

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
        name: "test group",
        modelId: model.id,
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
