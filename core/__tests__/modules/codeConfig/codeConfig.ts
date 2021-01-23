import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../../src/modules/plugin";
import { Property } from "../../../src/models/Property";
import { App } from "../../../src/models/App";
import { Source } from "../../../src/models/Source";
import { Schedule } from "../../../src/models/Schedule";
import { Group } from "../../../src/models/Group";
import { GroupRule } from "../../../src/models/GroupRule";
import { Destination } from "../../../src/models/Destination";
import { ApiKey } from "../../../src/models/ApiKey";
import { Team } from "../../../src/models/Team";
import { TeamMember } from "../../../src/models/TeamMember";
import { Setting } from "../../../src/models/Setting";
import path from "path";
import { api, specHelper } from "actionhero";
import { Op } from "sequelize";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";

describe("modules/codeConfig", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("initial config", () => {
    beforeAll(async () => {
      // manually run the initializer again after the server has started.
      // the test test-app plugin has been loaded
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenGuids, deletedGuids } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "initial")
      );
      expect(errors).toEqual([]);
      expect(seenGuids).toEqual({
        apikey: ["key_website_api_key"],
        app: ["app_data_warehouse", "app_events"],
        destination: ["dst_test_destination"],
        group: ["grp_email_group"],
        property: [
          "rul_user_id",
          "rul_last_name",
          "rul_first_name",
          "rul_email",
        ],
        schedule: ["sch_users_table_schedule"],
        source: ["src_users_table"],
        team: ["tea_admin_team"],
        teammember: ["tem_demo"],
      });
      expect(deletedGuids).toEqual({
        apikey: [],
        app: [],
        destination: [],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
      });
    });

    test("settings are updated", async () => {
      const setting = await plugin.readSetting("core", "cluster-name");
      expect(setting.value).toBe("Test Cluster");
      expect(setting.locked).toBe("config:code");
    });

    test("apps are created", async () => {
      const apps = await App.findAll({
        order: [["type", "asc"]],
      });
      expect(apps.length).toBe(2);

      expect(apps[0].guid).toBe("app_events");
      expect(apps[0].name).toBe("Grouparoo Events");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      let options = await apps[0].getOptions();
      expect(options).toEqual({
        identifyingPropertyGuid: "rul_user_id",
      });

      expect(apps[1].guid).toBe("app_data_warehouse");
      expect(apps[1].name).toBe("Data Warehouse");
      expect(apps[1].state).toBe("ready");
      expect(apps[1].locked).toBe("config:code");
      options = await apps[1].getOptions();
      expect(options).toEqual({ fileGuid: "test-file-path.db" });
    });

    test("sources are created", async () => {
      const sources = await Source.findAll();
      expect(sources.length).toBe(1);
      expect(sources[0].guid).toBe("src_users_table");
      expect(sources[0].appGuid).toBe("app_data_warehouse");
      expect(sources[0].name).toBe("Users Table");
      expect(sources[0].state).toBe("ready");
      expect(sources[0].locked).toBe("config:code");
      const options = await sources[0].getOptions();
      expect(options).toEqual({ table: "users" });
    });

    test("the bootstrapped property is created", async () => {
      const property = await Property.findOne({
        where: { directlyMapped: true },
      });
      expect(property.guid).toBe("rul_user_id");
      expect(property.key).toBe("userId");
      expect(property.type).toBe("integer");
      expect(property.unique).toBe(true);
      expect(property.identifying).toBe(true);
      expect(property.state).toBe("ready");
      expect(property.locked).toBe("config:code");
    });

    test("schedules are created", async () => {
      const schedules = await Schedule.findAll();
      expect(schedules.length).toBe(1);
      expect(schedules[0].guid).toBe("sch_users_table_schedule");
      expect(schedules[0].sourceGuid).toBe("src_users_table");
      expect(schedules[0].name).toBe("Users Table Schedule");
      expect(schedules[0].state).toBe("ready");
      expect(schedules[0].recurring).toBe(true);
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
      expect(rules.map((r) => r.sourceGuid).sort()).toEqual([
        "src_users_table",
        "src_users_table",
        "src_users_table",
        "src_users_table",
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
    });

    test("groups are created", async () => {
      const groups = await Group.findAll();
      expect(groups.length).toBe(1);
      expect(groups[0].guid).toBe("grp_email_group");
      expect(groups[0].name).toBe("People with Email Addresses");
      expect(groups[0].locked).toBe("config:code");
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
    });

    test("destinations are created", async () => {
      const destinations = await Destination.findAll();
      expect(destinations.length).toBe(1);
      expect(destinations[0].guid).toBe("dst_test_destination");
      expect(destinations[0].appGuid).toBe("app_data_warehouse");
      expect(destinations[0].name).toBe("Test Destination");
      expect(destinations[0].state).toBe("ready");
      expect(destinations[0].locked).toBe("config:code");
      const options = await destinations[0].getOptions();
      expect(options).toEqual({ table: "output" });
    });

    test("apiKeys are created", async () => {
      const apiKeys = await ApiKey.findAll();
      expect(apiKeys.length).toBe(1);
      expect(apiKeys[0].guid).toBe("key_website_api_key");
      expect(apiKeys[0].name).toBe("web-api-key");
      expect(apiKeys[0].locked).toBe("config:code");
      expect(apiKeys[0].permissionAllRead).toBe(true);
      expect(apiKeys[0].permissionAllWrite).toBe(true);
    });

    test("teams are created", async () => {
      const teams = await Team.findAll();
      expect(teams.length).toBe(1);
      expect(teams[0].guid).toBe("tea_admin_team");
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
      const { errors, seenGuids, deletedGuids } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "changes")
      );
      expect(errors).toEqual([]);
      expect(seenGuids).toEqual({
        apikey: ["key_website_api_key"],
        app: ["app_data_warehouse", "app_events"],
        destination: [],
        group: ["grp_email_group"],
        property: [
          "rul_user_id",
          "rul_last_name",
          "rul_first_name",
          "rul_email",
        ],
        schedule: ["sch_users_table_schedule"],
        source: ["src_users_table"],
        team: ["tea_admin_team"],
        teammember: ["tem_demo"],
      });
      expect(deletedGuids).toEqual({
        apikey: [],
        app: [],
        destination: ["dst_test_destination"],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
      });
    });

    test("settings can be changed", async () => {
      const setting = await plugin.readSetting("core", "cluster-name");
      expect(setting.value).toBe("Test Cluster!!!");
    });

    test("changes to an app setting will be updated", async () => {
      const apps = await App.findAll({
        where: { type: { [Op.ne]: "events" } },
      });
      expect(apps.length).toBe(1);
      expect(apps[0].guid).toBe("app_data_warehouse");
      expect(apps[0].name).toBe("Data Warehouse");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      const options = await apps[0].getOptions();
      expect(options).toEqual({ fileGuid: "new-file-path.db" });
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
      expect(rules.map((r) => r.sourceGuid).sort()).toEqual([
        "src_users_table",
        "src_users_table",
        "src_users_table",
        "src_users_table",
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
    });

    test("groups can have changed names and rules", async () => {
      const groups = await Group.findAll();
      expect(groups.length).toBe(1);
      expect(groups[0].guid).toBe("grp_email_group");
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
      expect(destination.state).toEqual("deleted");

      // we need to "wait" for the destination to be deleted to remove it's dependant models
      const foundTasks = await specHelper.findEnqueuedTasks(
        "destination:destroy"
      );
      await specHelper.runTask("destination:destroy", foundTasks[0].args[0]);
      await destination.reload();
      await destination.destroy();
    });

    test("changes to team permissions will be updated", async () => {
      const teams = await Team.findAll();
      expect(teams.length).toBe(1);
      expect(teams[0].guid).toBe("tea_admin_team");
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
  });

  describe("partially empty config", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenGuids, deletedGuids } = await loadConfigDirectory(
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
      expect(seenGuids).toEqual({
        apikey: [],
        app: ["app_data_warehouse"],
        destination: [],
        group: [],
        property: ["rul_user_id", "rul_email"],
        schedule: [],
        source: ["src_users_table"],
        team: [],
        teammember: [],
      });
      expect(deletedGuids).toEqual({
        apikey: ["key_website_api_key"],
        app: ["app_events"],
        destination: [],
        group: ["grp_email_group"],
        property: ["rul_last_name", "rul_first_name"],
        schedule: ["sch_users_table_schedule"],
        source: [],
        team: ["tea_admin_team"],
        teammember: ["tem_demo"],
      });
    });

    afterAll(async () => {
      // pretending that the task had run to delete the group
      await Group.truncate();
      await GroupRule.truncate();
    });

    test("most objects will be deleted with an empty config file", async () => {
      expect(await App.count()).toBe(1);
      expect(await Source.count()).toBe(1);
      expect(await Schedule.count()).toBe(0);
      expect(await Destination.count()).toBe(0);
      expect(await Property.count()).toBe(2);
      expect(await ApiKey.count()).toBe(0);
      expect(await Team.count()).toBe(0);
      expect(await TeamMember.count()).toBe(0);
    });

    test("settings remain", async () => {
      expect(await Setting.count()).toBeGreaterThan(1);
    });

    test("groups will be moved to the deleted state and unlocked", async () => {
      const groups = await Group.scope(null).findAll();
      expect(groups.length).toBe(1);
      expect(groups[0].state).toBe("deleted");
      expect(groups[0].locked).toBe(null);
    });
  });

  describe("empty config", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenGuids, deletedGuids } = await loadConfigDirectory(
        path.join(__dirname, "..", "..", "fixtures", "codeConfig", "empty")
      );
      expect(errors).toEqual([]);
      expect(seenGuids).toEqual({
        apikey: [],
        app: [],
        destination: [],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
      });
      expect(deletedGuids).toEqual({
        apikey: [],
        app: ["app_data_warehouse"],
        destination: [],
        group: [],
        property: ["rul_user_id", "rul_email"],
        schedule: [],
        source: ["src_users_table"],
        team: [],
        teammember: [],
      });
    });

    test("all objects will be deleted with an empty config file", async () => {
      expect(await App.count()).toBe(0);
      expect(await Source.count()).toBe(0);
      expect(await Schedule.count()).toBe(0);
      expect(await Destination.count()).toBe(0);
      expect(await Group.count()).toBe(0);
      expect(await Property.count()).toBe(0);
      expect(await ApiKey.count()).toBe(0);
      expect(await Team.count()).toBe(0);
      expect(await TeamMember.count()).toBe(0);
    });

    test("settings remain", async () => {
      expect(await Setting.count()).toBeGreaterThan(1);
    });
  });

  describe("errors", () => {
    describe("app", () => {
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
            "error-app"
          )
        );
        expect(errors[0]).toMatch(
          /fileGuid is required for a app of type test-plugin-app/
        );
      });
    });

    describe("source", () => {
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
            "error-source"
          )
        );
        expect(errors[0]).toMatch(/cannot find Property/);
      });
    });

    describe("property", () => {
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
            "error-property"
          )
        );
        expect(errors[0]).toMatch(/cannot find Source/);
      });
    });

    describe("group", () => {
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
            "error-group"
          )
        );
        expect(errors[0]).toMatch(/cannot find Property/);
      });
    });

    describe("team member", () => {
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
  });
});
