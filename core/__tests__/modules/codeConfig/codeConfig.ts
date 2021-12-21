import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import path from "path";
import {
  ApiKey,
  App,
  Destination,
  Group,
  GroupMember,
  GrouparooRecord,
  GroupRule,
  Option,
  plugin,
  Property,
  Run,
  Schedule,
  Setting,
  Source,
  Team,
  TeamMember,
  GrouparooModel,
  AppRefreshQuery,
} from "../../../src";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";
import { GroupDestroy } from "../../../src/tasks/group/destroy";

describe("modules/codeConfig", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("initial config", () => {
    beforeAll(async () => {
      await helper.truncate();

      // manually run the initializer again after the server has started.
      // the test test-app plugin has been loaded
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: ["website_key"],
        app: expect.arrayContaining(["data_warehouse"]),
        destination: ["test_destination"],
        group: ["email_group", "high_value"],
        property: expect.arrayContaining([
          "user_id",
          "email",
          "last_name",
          "first_name",
        ]),
        schedule: ["users_table_schedule"],
        source: ["users_table"],
        team: ["admin_team"],
        teammember: ["demo"],
        record: [],
      });
      expect(deletedIds).toEqual({
        model: [],
        apikey: [],
        app: [],
        destination: [],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
        record: [],
      });
    });

    test("settings are updated", async () => {
      const setting = await plugin.readSetting("core", "cluster-name");
      expect(setting.value).toBe("Test Cluster");
      expect(setting.locked).toBe("config:code");
    });

    test("models are created", async () => {
      const models = await GrouparooModel.findAll();
      expect(models.length).toBe(1);
      expect(models[0].id).toEqual("mod_profiles");
    });

    test("apps are created", async () => {
      const apps = await App.findAll({
        order: [["type", "asc"]],
      });
      expect(apps.length).toBe(1);

      expect(apps[0].id).toBe("data_warehouse");
      expect(apps[0].name).toBe("Data Warehouse");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      const options = await apps[0].getOptions();
      expect(options).toEqual({ fileId: "test-file-path.db" });
    });

    test("appRefreshQuery is created", async () => {
      const appRefreshQueries = await AppRefreshQuery.findAll();
      expect(appRefreshQueries.length).toBe(1);
    });

    test("appRefreshQuery does not save value on creation", async () => {
      const appRefreshQuery = await AppRefreshQuery.findOne();
      expect(appRefreshQuery.refreshQuery).toBe("SELECT 'hi' AS name;");
      expect(appRefreshQuery.state).toBe("ready");

      expect(appRefreshQuery.value).toBeFalsy();
    });

    test("sources are created", async () => {
      const sources = await Source.findAll();
      expect(sources.length).toBe(1);
      expect(sources[0].id).toBe("users_table");
      expect(sources[0].appId).toBe("data_warehouse");
      expect(sources[0].name).toBe("Users Table");
      expect(sources[0].state).toBe("ready");
      expect(sources[0].locked).toBe("config:code");
      const options = await sources[0].getOptions();
      expect(options).toEqual({ table: "users" });
    });

    test("the bootstrapped property is created", async () => {
      const property = await Property.findOne({
        where: { isPrimaryKey: true },
      });
      expect(property.id).toBe("user_id");
      expect(property.key).toBe("userId");
      expect(property.type).toBe("integer");
      expect(property.unique).toBe(true);
      expect(property.state).toBe("ready");
      expect(property.locked).toBe("config:code");
    });

    test("schedules are created", async () => {
      const schedules = await Schedule.findAll();
      expect(schedules.length).toBe(1);
      expect(schedules[0].id).toBe("users_table_schedule");
      expect(schedules[0].sourceId).toBe("users_table");
      expect(schedules[0].name).toBe("Users Table Schedule");
      expect(schedules[0].state).toBe("ready");
      expect(schedules[0].recurring).toBe(true);
      expect(schedules[0].confirmRecords).toBe(true);
      expect(schedules[0].recurringFrequency).toBe(900000);
      expect(schedules[0].locked).toBe("config:code");
    });

    test("properties are created", async () => {
      const rules = await Property.findAll();
      expect(rules.length).toBe(4);
      expect(rules.map((r) => r.key).sort()).toEqual([
        "email",
        "first name",
        "last name",
        "userId",
      ]);
      expect(rules.map((r) => r.sourceId).sort()).toEqual([
        "users_table",
        "users_table",
        "users_table",
        "users_table",
      ]);
      expect(rules.map((r) => r.state).sort()).toEqual([
        "ready",
        "ready",
        "ready",
        "ready",
      ]);
      expect(rules.map((r) => r.locked).sort()).toEqual([
        "config:code",
        "config:code",
        "config:code",
        "config:code",
      ]);

      const options = await Promise.all(rules.map((r) => r.getOptions()));
      expect(options.map((o) => o.column).sort()).toEqual([
        "email",
        "first_name",
        "id",
        "last_name",
      ]);
    });

    test("groups are created", async () => {
      const groups = await Group.findAll({ order: [["id", "asc"]] });
      expect(groups.length).toBe(2);
      expect(groups[0].id).toBe("email_group");
      expect(groups[0].name).toBe("People with Email Addresses");
      expect(groups[0].locked).toBe("config:code");
      expect(groups[0].state).toBe("updating");
      const rules = await groups[0].getRules();
      expect(rules).toEqual([
        {
          key: "userId",
          match: "null",
          operation: { description: "is not equal to", op: "ne" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "integer",
        },
        {
          key: "email",
          match: "%@%",
          operation: { description: "is like (case sensitive)", op: "like" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "email",
        },
      ]);

      expect(groups[1].id).toBe("high_value");
      expect(groups[1].name).toBe("High Value Individuals");
      expect(groups[1].locked).toBe("config:code");
      expect(groups[1].state).toBe("updating");
      const rules2 = await groups[1].getRules();
      expect(rules2).toEqual([
        {
          key: "userId",
          match: "100",
          operation: { description: "is greater than", op: "gt" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "integer",
        },
      ]);
    });

    test("destinations are created", async () => {
      const destinations = await Destination.findAll();
      expect(destinations.length).toBe(1);
      expect(destinations[0].id).toBe("test_destination");
      expect(destinations[0].appId).toBe("data_warehouse");
      expect(destinations[0].name).toBe("Test Destination");
      expect(destinations[0].syncMode).toBe("additive");
      expect(destinations[0].state).toBe("ready");
      expect(destinations[0].locked).toBe("config:code");
      const options = await destinations[0].getOptions();
      expect(options).toEqual({ table: "output" });
    });

    test("apiKeys are created", async () => {
      const apiKeys = await ApiKey.findAll();
      expect(apiKeys.length).toBe(1);
      expect(apiKeys[0].id).toBe("website_key");
      expect(apiKeys[0].name).toBe("web-api-key");
      expect(apiKeys[0].apiKey).toBe("abc123");
      expect(apiKeys[0].locked).toBe("config:code");
      expect(apiKeys[0].permissionAllRead).toBe(true);
      expect(apiKeys[0].permissionAllWrite).toBe(true);
    });

    test("teams are created", async () => {
      const teams = await Team.findAll();
      expect(teams.length).toBe(1);
      expect(teams[0].id).toBe("admin_team");
      expect(teams[0].name).toBe("Admin Team");
      expect(teams[0].locked).toBe("config:code");
      expect(teams[0].permissionAllRead).toBe(true);
      expect(teams[0].permissionAllWrite).toBe(true);
    });

    test("teamMembers are created", async () => {
      const teamMembers = await TeamMember.findAll();
      expect(teamMembers.length).toBe(1);
      expect(teamMembers[0].email).toEqual("demo@grouparoo.com");
      expect(teamMembers[0].firstName).toEqual("Example");
      expect(teamMembers[0].lastName).toEqual("Person");
      expect(await teamMembers[0].checkPassword("password")).toBe(true);
    });
  });

  describe("changed config", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "changes")
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: ["website_key"],
        app: expect.arrayContaining(["data_warehouse"]),
        destination: [],
        group: ["email_group"],
        property: expect.arrayContaining([
          "user_id",
          "last_name",
          "first_name",
          "email",
        ]),
        schedule: ["users_table_schedule"],
        source: ["users_table"],
        team: ["admin_team"],
        teammember: ["demo"],
        record: [],
      });
      expect(deletedIds).toEqual({
        model: [],
        apikey: [],
        app: [],
        destination: ["test_destination"],
        group: ["high_value"],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
        record: [],
      });
    });

    test("settings can be changed", async () => {
      const setting = await plugin.readSetting("core", "cluster-name");
      expect(setting.value).toBe("Test Cluster!!!");
    });

    test("changes to an app setting will be updated", async () => {
      const apps = await App.findAll();
      expect(apps.length).toBe(1);
      expect(apps[0].id).toBe("data_warehouse");
      expect(apps[0].name).toBe("Data Warehouse");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      const options = await apps[0].getOptions();
      expect(options).toEqual({ fileId: "new-file-path.db" });
    });

    test("property keys changes will be updated", async () => {
      const rules = await Property.findAll();
      expect(rules.length).toBe(4);
      expect(rules.map((r) => r.key).sort()).toEqual([
        "Email",
        "First Name",
        "Last Name",
        "userId",
      ]);
      expect(rules.map((r) => r.sourceId).sort()).toEqual([
        "users_table",
        "users_table",
        "users_table",
        "users_table",
      ]);
      expect(rules.map((r) => r.state).sort()).toEqual([
        "ready",
        "ready",
        "ready",
        "ready",
      ]);
      expect(rules.map((r) => r.locked).sort()).toEqual([
        "config:code",
        "config:code",
        "config:code",
        "config:code",
      ]);

      const options = await Promise.all(rules.map((r) => r.getOptions()));
      expect(options.map((o) => o.column).sort()).toEqual([
        "email",
        "id",
        "last_name",
        "other_first_name",
      ]);
    });

    test("property options will be updated before validating", async () => {
      const record = await GrouparooRecord.create({ modelId: "mod_profiles" }); // validations only happen if there's a record

      const nameProperty = await Property.findById("first_name");
      let options = await nameProperty.getOptions();
      expect(options).toEqual({ column: "other_first_name" });

      // clear option
      await Option.destroy({ where: { ownerId: "first_name", key: "column" } });
      delete nameProperty.__options;
      options = await nameProperty.getOptions();
      expect(options).toEqual({});

      // load config again
      const { errors } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "changes")
      );
      expect(errors.length).toBe(0);

      // option should be set
      delete nameProperty.__options;
      options = await nameProperty.getOptions();
      expect(options).toEqual({ column: "other_first_name" });

      await record.destroy();
    });

    test("groups can have changed names and rules", async () => {
      const groups = await Group.findAll();
      expect(groups.length).toBe(1);
      expect(groups[0].id).toBe("email_group");
      expect(groups[0].name).toBe("People who have Email Addresses");
      expect(groups[0].locked).toBe("config:code");
      const rules = await groups[0].getRules();
      expect(rules).toEqual([
        {
          key: "Email",
          match: "%@%",
          operation: { description: "is like (case sensitive)", op: "like" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "email",
        },
      ]);
    });

    test("a removed destination will be deleted", async () => {
      const destinations = await Destination.scope(null).findAll();
      expect(destinations.length).toBe(1);
      const destination = destinations[0];
      expect(destination.id).toBe("test_destination");
      expect(destination.state).toEqual("deleted");
    });

    test("changes to team permissions will be updated", async () => {
      const teams = await Team.findAll();
      expect(teams.length).toBe(1);
      expect(teams[0].id).toBe("admin_team");
      expect(teams[0].name).toBe("Admin Team (no write)");
      expect(teams[0].locked).toBe("config:code");
      expect(teams[0].permissionAllRead).toBe(true);
      expect(teams[0].permissionAllWrite).toBe(false);
    });

    test("a team member password can be changed", async () => {
      const teamMembers = await TeamMember.findAll();
      expect(teamMembers.length).toBe(1);
      expect(teamMembers[0].email).toEqual("demo@grouparoo.com");
      expect(teamMembers[0].firstName).toEqual("Example");
      expect(teamMembers[0].lastName).toEqual("Person");
      expect(await teamMembers[0].checkPassword("new-password")).toBe(true);
    });

    test("apiKeys can be updated", async () => {
      const apiKeys = await ApiKey.findAll();
      expect(apiKeys[0].apiKey).toBe("def456");
    });

    test("an updated refreshQuery will be saved", async () => {
      const appRefreshQuery = await AppRefreshQuery.findOne();
      expect(appRefreshQuery.refreshQuery).toBe(
        "SELECT MAX(stamp) FROM users;"
      );
      expect(appRefreshQuery.state).toBe("ready");
    });

    test("an updated refreshQuery will not save a value before a run", async () => {
      const appRefreshQuery = await AppRefreshQuery.findOne();
      expect(appRefreshQuery.refreshQuery).toBe(
        "SELECT MAX(stamp) FROM users;"
      );
      expect(appRefreshQuery.value).toBeFalsy();
    });
  });

  describe("disabled config", () => {
    test("nothing is deleted if config dir is disabled", async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(false);
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({});
      expect(deletedIds).toEqual({});

      const apps = await App.findAll();
      expect(apps.length).toBe(1);

      const properties = await Property.findAll();
      expect(properties.length).toBe(4);

      const groups = await Group.findAll();
      expect(groups.length).toBe(1);

      const teams = await Team.findAll();
      expect(teams.length).toBe(1);

      const teamMembers = await TeamMember.findAll();
      expect(teamMembers.length).toBe(1);
    });
  });

  describe("partially empty config", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "partially-empty"
        )
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: [],
        app: ["data_warehouse"],
        destination: [],
        group: [],
        property: ["user_id", "email"],
        schedule: [],
        source: ["users_table"],
        team: [],
        teammember: [],
        record: [],
      });
      expect(deletedIds).toEqual({
        model: [],
        apikey: ["website_key"],
        app: [],
        destination: [],
        group: ["email_group"],
        property: expect.arrayContaining(["last_name", "first_name"]),
        schedule: ["users_table_schedule"],
        source: [],
        team: ["admin_team"],
        teammember: ["demo"],
        record: [],
      });
    });

    test("most objects will be deleted with a partially empty config file", async () => {
      expect(await GrouparooModel.count()).toBe(1);
      expect(await App.count()).toBe(1);
      expect(await Source.count()).toBe(1);
      expect(await Schedule.count()).toBe(0);
      expect(await Destination.count()).toBe(0);
      expect(await Property.count()).toBe(4);
      expect(await ApiKey.count()).toBe(0);
      expect(await Team.count()).toBe(0);
      expect(await TeamMember.count()).toBe(0);
    });

    test("settings remain", async () => {
      expect(await Setting.count()).toBeGreaterThan(1);
    });

    test("a removed group will be deleted", async () => {
      const groups = await Group.scope(null).findAll({
        order: [["id", "asc"]],
      });
      expect(groups.length).toBe(2);
      expect(groups[0].id).toBe("email_group");
      expect(groups[0].state).toBe("deleted");
      expect(groups[0].locked).toBe(null);

      expect(groups[1].id).toBe("high_value");
      expect(groups[1].state).toBe("deleted");
      expect(groups[1].locked).toBe(null);
    });

    test("removed properties will be deleted", async () => {
      const properties = await Property.scope(null).findAll({
        where: { state: "deleted" },
      });
      expect(properties.length).toBe(2);
      expect(properties.map((p) => p.id).sort()).toEqual([
        "first_name",
        "last_name",
      ]);
      properties.forEach((prop) => {
        expect(prop.state).toBe("deleted");
        expect(prop.locked).toBe(null);
      });

      await specHelper.runTask("property:destroy", {
        propertyId: "first_name",
      });
      await specHelper.runTask("property:destroy", { propertyId: "last_name" });
    });
  });

  describe("empty config", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "empty")
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        model: [],
        apikey: [],
        app: [],
        destination: [],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
        record: [],
      });
      expect(deletedIds).toEqual({
        model: ["mod_profiles"],
        apikey: [],
        app: ["data_warehouse"],
        destination: [],
        group: [],
        property: ["user_id", "email"],
        schedule: [],
        source: ["users_table"],
        team: [],
        teammember: [],
        record: [],
      });
    });

    test("a removed app will be deleted", async () => {
      const app = await App.scope(null).findOne();
      expect(app.state).toBe("deleted");
      expect(app.locked).toBeNull();
    });

    test("all objects will be deleted with an empty config file", async () => {
      expect(await GrouparooModel.count()).toBe(0);
      expect(await App.count()).toBe(0);
      expect(await Source.count()).toBe(0);
      expect(await Schedule.count()).toBe(0);
      expect(await Destination.count()).toBe(0);
      expect(await Group.count()).toBe(0);
      expect(await Property.count()).toBe(2);
      expect(await ApiKey.count()).toBe(0);
      expect(await Team.count()).toBe(0);
      expect(await TeamMember.count()).toBe(0);
    });

    test("removed properties will be deleted", async () => {
      const properties = await Property.scope(null).findAll({
        order: [["id", "asc"]],
      });
      expect(properties.length).toBe(2);
      expect(properties[0].id).toBe("email");
      expect(properties[0].state).toBe("deleted");
      expect(properties[0].locked).toBe(null);

      expect(properties[1].id).toBe("user_id");
      expect(properties[1].state).toBe("deleted");
      expect(properties[1].locked).toBe(null);
    });

    test("a removed source will be deleted", async () => {
      const sources = await Source.scope(null).findAll();
      expect(sources.length).toBe(1);
      expect(sources[0].id).toBe("users_table");
      expect(sources[0].state).toBe("deleted");
      expect(sources[0].locked).toBeNull();
    });

    test("a removed model will be deleted", async () => {
      const sources = await GrouparooModel.scope(null).findAll();
      expect(sources.length).toBe(1);
      expect(sources[0].id).toBe("mod_profiles");
      expect(sources[0].state).toBe("deleted");
      expect(sources[0].locked).toBeNull();
    });

    test("a removed app will be deleted", async () => {
      const app = await App.scope(null).findOne({
        where: { id: "data_warehouse" },
      });
      expect(app.state).toBe("deleted");
      expect(app.locked).toBeNull();
    });

    test("settings remain", async () => {
      expect(await Setting.count()).toBeGreaterThan(1);
    });
  });

  describe("bring it all back", () => {
    let previousGroupRun: Run;

    beforeAll(async () => {
      // fake that runs are still being executed for deleted group
      const highValue = await Group.scope(null).findOne({
        where: { id: "high_value", state: "deleted" },
      });
      expect(highValue).toBeTruthy();

      await highValue.stopPreviousRuns();

      const model = await GrouparooModel.scope(null).findOne({
        where: { id: "mod_profiles", state: "deleted" },
      });
      expect(model).toBeTruthy();

      await model.update({ state: "ready" });

      const record: GrouparooRecord = await helper.factories.record();
      await GroupMember.create({
        recordId: record.id,
        groupId: "high_value",
      });

      previousGroupRun = await specHelper.runTask<GroupDestroy>(
        "group:destroy",
        {
          groupId: "high_value",
        }
      );
      expect(previousGroupRun).toBeTruthy();
      expect(previousGroupRun.state).toBe("running");

      // fake that runs are still being executed for deleted destination
      const emailGroup = await Group.scope(null).findOne({
        where: { id: "email_group", state: "deleted" },
      });
      expect(emailGroup).toBeTruthy();

      await emailGroup.update({ state: "ready", locked: "config:code" });
      await emailGroup.stopPreviousRuns();

      await GroupMember.create({
        recordId: record.id,
        groupId: "email_group",
      });

      const destination = await Destination.scope(null).findOne({
        where: { id: "test_destination", state: "deleted" },
      });
      expect(destination).toBeTruthy();
    });

    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: ["website_key"],
        app: expect.arrayContaining(["data_warehouse"]),
        destination: ["test_destination"],
        group: ["email_group", "high_value"],
        property: expect.arrayContaining([
          "user_id",
          "email",
          "last_name",
          "first_name",
        ]),
        schedule: ["users_table_schedule"],
        source: ["users_table"],
        team: ["admin_team"],
        teammember: ["demo"],
        record: [],
      });
      expect(deletedIds).toEqual({
        model: [],
        apikey: [],
        app: [],
        destination: [],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
        record: [],
      });
    });

    test("apps are brought back", async () => {
      const apps = await App.findAll({
        order: [["type", "asc"]],
      });
      expect(apps.length).toBe(1);

      expect(apps[0].id).toBe("data_warehouse");
      expect(apps[0].name).toBe("Data Warehouse");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      const options = await apps[0].getOptions();
      expect(options).toEqual({ fileId: "test-file-path.db" });
    });

    test("sources are brought back", async () => {
      const sources = await Source.findAll();
      expect(sources.length).toBe(1);
      expect(sources[0].id).toBe("users_table");
      expect(sources[0].appId).toBe("data_warehouse");
      expect(sources[0].name).toBe("Users Table");
      expect(sources[0].state).toBe("ready");
      expect(sources[0].locked).toBe("config:code");
      const options = await sources[0].getOptions();
      expect(options).toEqual({ table: "users" });
    });

    test("the bootstrapped property is brought back", async () => {
      const property = await Property.findOne({
        where: { isPrimaryKey: true },
      });
      expect(property.id).toBe("user_id");
      expect(property.key).toBe("userId");
      expect(property.type).toBe("integer");
      expect(property.unique).toBe(true);
      expect(property.state).toBe("ready");
      expect(property.locked).toBe("config:code");
    });

    test("schedules are brought back", async () => {
      const schedules = await Schedule.findAll();
      expect(schedules.length).toBe(1);
      expect(schedules[0].id).toBe("users_table_schedule");
      expect(schedules[0].sourceId).toBe("users_table");
      expect(schedules[0].name).toBe("Users Table Schedule");
      expect(schedules[0].state).toBe("ready");
      expect(schedules[0].recurring).toBe(true);
      expect(schedules[0].recurringFrequency).toBe(900000);
      expect(schedules[0].locked).toBe("config:code");
    });

    test("properties are brought back", async () => {
      const rules = await Property.findAll();
      expect(rules.length).toBe(4);
      expect(rules.map((r) => r.key).sort()).toEqual([
        "email",
        "first name",
        "last name",
        "userId",
      ]);
      expect(rules.map((r) => r.sourceId).sort()).toEqual([
        "users_table",
        "users_table",
        "users_table",
        "users_table",
      ]);
      expect(rules.map((r) => r.state).sort()).toEqual([
        "ready",
        "ready",
        "ready",
        "ready",
      ]);
      expect(rules.map((r) => r.locked).sort()).toEqual([
        "config:code",
        "config:code",
        "config:code",
        "config:code",
      ]);

      const options = await Promise.all(rules.map((r) => r.getOptions()));
      expect(options.map((o) => o.column).sort()).toEqual([
        "email",
        "first_name",
        "id",
        "last_name",
      ]);
    });

    test("groups are brought back", async () => {
      const groups = await Group.findAll({ order: [["id", "asc"]] });
      expect(groups.length).toBe(2);
      expect(groups[0].id).toBe("email_group");
      expect(groups[0].name).toBe("People with Email Addresses");
      expect(groups[0].locked).toBe("config:code");
      expect(groups[0].state).toBe("updating");
      const rules = await groups[0].getRules();
      expect(rules).toEqual([
        {
          key: "userId",
          match: "null",
          operation: { description: "is not equal to", op: "ne" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "integer",
        },
        {
          key: "email",
          match: "%@%",
          operation: { description: "is like (case sensitive)", op: "like" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "email",
        },
      ]);

      expect(groups[1].id).toBe("high_value");
      expect(groups[1].name).toBe("High Value Individuals");
      expect(groups[1].locked).toBe("config:code");
      expect(groups[1].state).toBe("updating");
      const rules2 = await groups[1].getRules();
      expect(rules2).toEqual([
        {
          key: "userId",
          match: "100",
          operation: { description: "is greater than", op: "gt" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "integer",
        },
      ]);

      // previous run stopped
      await previousGroupRun.reload();
      expect(previousGroupRun.state).toBe("stopped");

      // new run kicked off
      const run = await Run.findOne({
        where: {
          creatorType: "group",
          creatorId: "high_value",
          state: "running",
        },
      });
      expect(run).toBeTruthy();
    });

    test("destinations are brought back", async () => {
      const destinations = await Destination.findAll();
      expect(destinations.length).toBe(1);
      expect(destinations[0].id).toBe("test_destination");
      expect(destinations[0].appId).toBe("data_warehouse");
      expect(destinations[0].name).toBe("Test Destination");
      expect(destinations[0].syncMode).toBe("additive");
      expect(destinations[0].state).toBe("ready");
      expect(destinations[0].locked).toBe("config:code");
      const options = await destinations[0].getOptions();
      expect(options).toEqual({ table: "output" });

      // new run kicked off
      const runs = await Run.findAll({
        where: { state: "running", destinationId: destinations[0].id },
      });
      expect(runs.length).toBe(1);
      expect(runs[0].creatorId).toBe("email_group");
    });

    afterAll(async () => {
      await helper.truncate();
    });
  });

  describe("GrouparooRecord columns in group rules", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "top-level-group-rule"
        )
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: [],
        app: [],
        destination: [],
        group: ["group_exists", "group_recent"],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
        record: [],
      });
    });

    test("topLevel rules for record columns are created", async () => {
      const group = await Group.findById("group_exists");
      const rules = await group.getRules();
      expect(rules).toEqual([
        {
          key: "grouparooId",
          match: "null",
          operation: { description: "is not equal to", op: "ne" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: true,
          type: "string",
        },
      ]);
    });

    test("topLevel rules for date record columns are correctly created", async () => {
      const group = await Group.findById("group_recent");
      const rules = await group.getRules();
      expect(rules).toEqual([
        {
          key: "grouparooCreatedAt",
          match: null,
          operation: { description: "is after", op: "gt" },
          relativeMatchDirection: "subtract",
          relativeMatchNumber: 8,
          relativeMatchUnit: "days",
          topLevel: true,
          type: "date",
        },
      ]);
    });

    afterAll(async () => {
      await helper.truncate();
    });
  });

  describe("Dates in group rules", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "group-rule-with-date"
        )
      );
      expect(errors).toEqual([]);
    });

    test("it parses date only strings to 00:00:00.000UTC", async () => {
      const purchaseTimestamp = "1583020800000";
      const groupRule = await GroupRule.findOne({
        where: { propertyId: "last_purchase_date" },
      });

      expect(groupRule.match).toBe(purchaseTimestamp);
    });

    test("It parses datetime strings with timezone", async () => {
      const appointmentTimestamp = "1570686480000";
      const groupRule = await GroupRule.findOne({
        where: { propertyId: "last_appointment_date" },
      });
      expect(groupRule.match).toBe(appointmentTimestamp);
    });

    test("It accurately stores relative match rules", async () => {
      const groupRules = await GroupRule.findOne({
        where: { propertyId: "last_email_date" },
      });

      expect(groupRules.relativeMatchNumber).toBe(8);
      expect(groupRules.relativeMatchUnit).toBe("days");
      expect(groupRules.relativeMatchDirection).toBe("subtract");
    });
  });

  describe("cli:config mode", () => {
    beforeAll(async () => {
      await helper.truncate();
    });

    describe("sample records", () => {
      test("records are not loaded by default", async () => {
        api.codeConfig.allowLockedModelChanges = true;
        const { errors, seenIds, deletedIds } = await loadConfigDirectory(
          path.join(__dirname, "..", "..", "fixtures", "codeConfig", "records")
        );
        expect(errors).toEqual([]);
        expect(seenIds).toEqual({
          model: ["mod_profiles"],
          apikey: [],
          app: ["data_warehouse"],
          destination: [],
          group: [],
          property: expect.arrayContaining(["user_id", "email"]),
          schedule: ["users_table_schedule"],
          source: ["users_table"],
          team: [],
          teammember: [],
          record: [],
        });
        expect(deletedIds).toEqual({
          model: [],
          apikey: [],
          app: [],
          destination: [],
          group: [],
          property: [],
          schedule: [],
          source: [],
          team: [],
          teammember: [],
          record: [],
        });
      });

      test("null record objects should provides a useful error", async () => {
        await helper.truncate();

        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-null-objects"
          )
        );
        expect(errors.length).toEqual(1);
        expect(errors[0]).toMatch(
          /has 2 null or undefined top-level config objects/
        );
        expect(errors[0]).toMatch("error-null-objects/config.js");
      });

      test("records are loaded in cli:config mode", async () => {
        await helper.truncate();

        process.env.GROUPAROO_RUN_MODE = "cli:config";
        api.codeConfig.allowLockedModelChanges = true;
        const { errors, seenIds, deletedIds } = await loadConfigDirectory(
          path.join(__dirname, "..", "..", "fixtures", "codeConfig", "records")
        );
        expect(errors).toEqual([]);
        expect(seenIds).toEqual({
          model: ["mod_profiles"],
          apikey: [],
          app: ["data_warehouse"],
          destination: [],
          group: [],
          property: expect.arrayContaining(["user_id", "email"]),
          schedule: ["users_table_schedule"],
          source: ["users_table"],
          team: [],
          teammember: [],
          record: ["record_john", "record_matthew"],
        });
        expect(deletedIds).toEqual({
          model: [],
          apikey: [],
          app: [],
          destination: [],
          group: [],
          property: [],
          schedule: [],
          source: [],
          team: [],
          teammember: [],
          record: [],
        });
      });

      test("records are created", async () => {
        const records = await GrouparooRecord.findAll({
          order: [["id", "asc"]],
        });
        expect(records.length).toBe(2);

        const john = records[0];
        expect(john.id).toBe("record_john");
        expect(john.state).toBe("pending");

        const johnProps = await john.getProperties();
        expect(johnProps.userId.state).toBe("ready");
        expect(johnProps.userId.values).toEqual([20]);
        expect(johnProps.email.state).toBe("pending");
        expect(johnProps.email.values).toEqual([null]);

        const matthew = records[1];
        expect(matthew.id).toBe("record_matthew");
        expect(matthew.state).toBe("pending");

        const matthewProps = await matthew.getProperties();
        expect(matthewProps.userId.state).toBe("ready");
        expect(matthewProps.userId.values).toEqual([100]);
        expect(matthewProps.email.state).toBe("pending");
        expect(matthewProps.email.values).toEqual([null]);
      });

      afterAll(async () => {
        await helper.truncate();
        api.codeConfig.allowLockedModelChanges = undefined;
      });
    });

    describe("models are properly locked in cli:config mode", () => {
      beforeAll(async () => {
        await helper.truncate();

        process.env.GROUPAROO_RUN_MODE = "cli:config";
        api.codeConfig.allowLockedModelChanges = true;
        const { errors, seenIds, deletedIds } = await loadConfigDirectory(
          path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
        );
        expect(errors).toEqual([]);
        expect(seenIds).toEqual({
          model: ["mod_profiles"],
          apikey: ["website_key"],
          app: expect.arrayContaining(["data_warehouse"]),
          destination: ["test_destination"],
          group: ["email_group", "high_value"],
          property: expect.arrayContaining([
            "user_id",
            "email",
            "last_name",
            "first_name",
          ]),
          schedule: ["users_table_schedule"],
          source: ["users_table"],
          team: ["admin_team"],
          teammember: ["demo"],
          record: [],
        });
        expect(deletedIds).toEqual({
          model: [],
          apikey: [],
          app: [],
          destination: [],
          group: [],
          property: [],
          schedule: [],
          source: [],
          team: [],
          teammember: [],
          record: [],
        });
      });

      afterAll(async () => {
        await helper.truncate();
        process.env.GROUPAROO_RUN_MODE = undefined;
      });

      test('settings are locked with "config:code"', async () => {
        const setting = await plugin.readSetting("core", "cluster-name");
        expect(setting.value).toBe("Test Cluster");
        expect(setting.locked).toBe("config:code");
      });

      test('models are locked with "config:writer"', async () => {
        const models = await GrouparooModel.findAll({});
        expect(models.length).toBe(1);
        expect(models.map((r) => r.locked)).toEqual(["config:writer"]);
      });

      test('apps are locked with "config:writer"', async () => {
        const apps = await App.findAll({
          order: [["type", "asc"]],
        });

        expect(apps.length).toBe(1);
        expect(apps.map((r) => r.locked).sort()).toEqual(["config:writer"]);
      });

      test('sources are locked with "config:writer"', async () => {
        const sources = await Source.findAll();
        expect(sources.length).toBe(1);
        expect(sources[0].locked).toBe("config:writer");
      });

      test('schedules are locked with "config:writer"', async () => {
        const schedules = await Schedule.findAll();
        expect(schedules.length).toBe(1);
        expect(schedules[0].locked).toBe("config:writer");
      });

      test('properties are locked with "config:writer"', async () => {
        const rules = await Property.findAll();
        expect(rules.length).toBe(4);
        expect(rules.map((r) => r.locked).sort()).toEqual([
          "config:writer",
          "config:writer",
          "config:writer",
          "config:writer",
        ]);
      });

      test('groups are locked with "config:writer"', async () => {
        const groups = await Group.findAll({ order: [["id", "asc"]] });
        expect(groups.length).toBe(2);
        expect(groups.map((g) => g.locked).sort()).toEqual([
          "config:writer",
          "config:writer",
        ]);
      });

      test('destinations are locked with "config:writer"', async () => {
        const destinations = await Destination.findAll();
        expect(destinations.length).toBe(1);
        expect(destinations[0].locked).toBe("config:writer");
      });

      test('apiKeys are locked with "config:code"', async () => {
        const apiKeys = await ApiKey.findAll();
        expect(apiKeys.length).toBe(1);
        expect(apiKeys[0].locked).toBe("config:code");
      });

      test('teams are locked with "config:code"', async () => {
        const teams = await Team.findAll();
        expect(teams.length).toBe(1);
        expect(teams[0].locked).toBe("config:code");
      });
    });
  });

  describe("duplicate IDs", () => {
    test("config with duplicate IDs and the same class will not be applied", async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "duplicate-id"
        )
      );

      expect(errors[0]).toEqual(
        "Duplicate ID values found for data_warehouse_a of class app"
      );
    });

    test("config with duplicate IDs and differing classes are OK", async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "similar-id")
      );

      expect(errors.length).toEqual(0);
    });
  });

  describe("permissions", () => {
    beforeAll(async () => {
      await helper.truncate();
    });

    test("bulk and individual permissions can be loaded", async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "permissions"
        )
      );

      const team = await Team.findOne();
      const apiKey = await ApiKey.findOne();

      expect(errors).toEqual([]);
      expect(team.permissionAllRead).toEqual(true);
      expect(team.permissionAllWrite).toEqual(false);
      const teamPermissions = await team.$get("permissions");
      for (const p of teamPermissions) {
        expect(p.read).toEqual(true);
        expect(p.write).toEqual(false);
      }

      expect(apiKey.permissionAllRead).toEqual(null);
      expect(apiKey.permissionAllWrite).toEqual(null);
      const apiKeyPermissions = await apiKey.$get("permissions");
      for (const p of apiKeyPermissions) {
        if (p.topic === "app") {
          expect(p.read).toEqual(true);
          expect(p.write).toEqual(true);
        } else {
          expect(p.read).toEqual(false);
          expect(p.write).toEqual(false);
        }
      }
    });
  });

  describe("errors", () => {
    describe("plugin not installed", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("missing plugin", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-not-installed"
          )
        );
        expect(errors[0]).toMatch(
          /Cannot find a \"missing-plugin\" connection available within the installed plugins. Current connections installed are:/
        );
      });
    });

    describe("bad ID", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("space in ID", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(__dirname, "..", "..", "fixtures", "codeConfig", "error-id")
        );
        expect(errors[0]).toMatch(/invalid id/);
      });
    });

    describe("app", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("missing option", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-app"
          )
        );
        expect(errors[0]).toMatch(
          /fileId is required for a app of type test-plugin-app/
        );
      });
    });

    describe("source", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("broken source", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-source"
          )
        );
        expect(errors[0]).toMatch(/Could not find object with ID: user_id/);
      });
    });

    describe("property", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("broken property", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-property"
          )
        );
        expect(errors[0]).toMatch(
          /Could not find object with ID: missing_source/
        );
      });
    });

    describe("group", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("broken group", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-group"
          )
        );
        expect(errors[0]).toMatch(
          /Could not find object with ID: missing_record_property/
        );
      });
    });

    describe("broken team member", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-teamMember"
          )
        );
        expect(errors[0]).toMatch(/TeamMember.firstName cannot be null/);
      });
    });

    describe("record", () => {
      beforeAll(async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:config";
        api.codeConfig.allowLockedModelChanges = true;
      });

      test("non unique property", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-record-non-unique-property"
          )
        );

        expect(errors.length).toBe(1);
        expect(errors[0]).toMatch(
          /there are no directly mapped record properties provided in/
        );
      });

      test("missing property", async () => {
        const { errors } = await loadConfigDirectory(
          path.join(
            __dirname,
            "..",
            "..",
            "fixtures",
            "codeConfig",
            "error-record-missing-property"
          )
        );

        expect(errors.length).toBe(1);
        expect(errors[0]).toMatch(
          /Could not find object with ID: unknown_property_id/
        );
      });

      afterAll(() => {
        process.env.GROUPAROO_RUN_MODE = undefined;
      });
    });
  });

  describe("errors in a second run", () => {
    beforeEach(async () => {
      await helper.truncate();
    });

    test("changing an app's type (missing) causes an error", async () => {
      // initial load
      await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );

      // changes
      const { errors } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "error-changed-type-missing"
        )
      );

      expect(errors.length).toBe(1);
      expect(errors[0]).toMatch(
        /Cannot find a \"foo\" app available within the installed plugins. Current apps installed are/
      );
    });

    test("changing an app's type (valid) causes an error", async () => {
      plugin.registerPlugin({
        name: "test-plugin-no-options",
        apps: [
          {
            name: "app-no-options",
            displayName: "app-no-options",
            options: [],
            methods: {
              test: async () => {
                return { success: true };
              },
            },
          },
        ],
        connections: [
          {
            name: "source-no-options",
            displayName: "source-no-options",
            description: "a test source",
            apps: ["app-no-options"],
            direction: "import",
            options: [],
            methods: {
              recordProperty: async () => {
                return [];
              },
            },
          },
        ],
      });

      // initial load
      await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );

      // changes
      const { errors } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "error-changed-type-duplicate"
        )
      );

      expect(errors.length).toBe(1);
      expect(errors[0]).toMatch(
        /fileId is not an option for a app-no-options app/
      );
    });
  });

  describe("names should not be unqiue against deleted entries", () => {
    test("removed configs should be deleted before creating/updating", async () => {
      const config = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "duplicate-names",
          "config1"
        )
      );
      const config2 = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "duplicate-names",
          "config2"
        )
      );
      expect(config.errors.length).toBe(0);
      expect(config2.errors.length).toBe(0);

      expect(config.deletedIds).toEqual({
        model: [],
        apikey: ["website_key"],
        app: [],
        destination: ["test_destination"],
        group: ["email_group"],
        record: [],
        property: ["email", "first_name", "last_name"],
        schedule: ["users_table_schedule"],
        source: [],
        team: ["admin_team"],
        teammember: ["demo"],
      });
      expect(config.seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: [],
        app: ["data_warehouse"],
        destination: ["data_warehouse_destination"],
        group: ["calculate_dates"],
        record: [],
        property: ["user_id"],
        schedule: [],
        source: ["users_table"],
        team: [],
        teammember: [],
      });
      expect(config2.deletedIds).toEqual({
        model: [],
        apikey: [],
        app: ["data_warehouse"],
        destination: ["data_warehouse_destination"],
        group: ["calculate_dates"],
        record: [],
        property: ["user_id"],
        schedule: [],
        source: ["users_table"],
        team: [],
        teammember: [],
      });
      expect(config2.seenIds).toEqual({
        model: ["mod_profiles"],
        apikey: [],
        app: ["data_warehouse_2"],
        destination: ["data_warehouse_destination_2"],
        group: ["calculate_dates_2"],
        record: [],
        property: ["user_id_2"],
        schedule: [],
        source: ["users_table_2"],
        team: [],
        teammember: [],
      });
    });
  });
});
