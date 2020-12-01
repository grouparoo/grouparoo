import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../src/modules/plugin";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";
import { App } from "../../src/models/App";
import { Source } from "../../src/models/Source";
import { Schedule } from "../../src/models/Schedule";
import { Group } from "../../src/models/Group";
import { Destination } from "../../src/models/Destination";
import { ApiKey } from "../../src/models/ApiKey";
import { Team } from "../../src/models/Team";
import { TeamMember } from "../../src/models/TeamMember";
import { Setting } from "../../src/models/Setting";
import path from "path";
import { api } from "actionhero";
import { Op } from "sequelize";
import { CodeConfig } from "../../src/initializers/codeConfig";

let actionhero;
const initializer = new CodeConfig();

describe("modules/codeConfig", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await Setting.truncate();
    await helper.shutdown(actionhero);
  });

  describe("initial config", () => {
    beforeAll(async () => {
      // manually run the initializer again after the server has started.
      // the test test-app plugin has been loaded
      api.codeConfig.allowLockedModelChanges = true;
      process.env.GROUPAROO_CONFIG_DIR = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "initial"
      );
      await initializer.initialize();
    });

    test("settings are updated", async () => {
      const setting = await plugin.readSetting("core", "cluster-name");
      expect(setting.value).toBe("Test Cluster");
      expect(setting.locked).toBe("config:code");
    });

    test("apps are created", async () => {
      const apps = await App.findAll({
        where: { type: { [Op.ne]: "events" } },
      });
      expect(apps.length).toBe(1);
      expect(apps[0].guid).toBe("app_data_warehouse");
      expect(apps[0].name).toBe("Data Warehouse");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      const options = await apps[0].getOptions();
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

    test("the bootstrapped profile property rule is created", async () => {
      const rule = await ProfilePropertyRule.findOne({
        where: { directlyMapped: true },
      });
      expect(rule.guid).toBe("rul_user_id");
      expect(rule.key).toBe("User Id");
      expect(rule.type).toBe("integer");
      expect(rule.unique).toBe(true);
      expect(rule.identifying).toBe(true);
      expect(rule.state).toBe("ready");
      expect(rule.locked).toBe("config:code");
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

    test("profile property rules are created", async () => {
      const rules = await ProfilePropertyRule.findAll();
      expect(rules.length).toBe(4);
      expect(rules.map((r) => r.key).sort()).toEqual([
        "User Id",
        "email",
        "first name",
        "last name",
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
      expect(groups[0].state).toBe("ready");
      expect(groups[0].locked).toBe("config:code");
      const rules = await groups[0].getRules();
      expect(rules).toEqual([
        {
          key: "User Id",
          match: "null",
          operation: { description: "exists with any value", op: "ne" },
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
      process.env.GROUPAROO_CONFIG_DIR = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "changes"
      );
      await initializer.initialize();
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

    test("profile property rule keys changes will be updated", async () => {
      const rules = await ProfilePropertyRule.findAll();
      expect(rules.length).toBe(4);
      expect(rules.map((r) => r.key).sort()).toEqual([
        "Email",
        "First Name",
        "Last Name",
        "User Id",
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
      expect(groups[0].state).toBe("ready");
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
      const destinations = await Destination.findAll();
      expect(destinations.length).toBe(0);
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

  describe("empty config", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
      process.env.GROUPAROO_CONFIG_DIR = path.join(
        __dirname,
        "..",
        "fixtures",
        "codeConfig",
        "empty"
      );
      await initializer.initialize();
    });

    test("all objects will be deleted with an empty config file", async () => {
      expect(await App.count({ where: { type: { [Op.ne]: "events" } } })).toBe(
        0
      );
      expect(await Source.count()).toBe(0);
      expect(await Schedule.count()).toBe(0);
      expect(await Destination.count()).toBe(0);
      expect(await Group.count()).toBe(0);
      expect(await ProfilePropertyRule.count()).toBe(0);
      expect(await ApiKey.count()).toBe(0);
      expect(await Team.count()).toBe(0);
      expect(await TeamMember.count()).toBe(0);
    });
  });

  describe("errors", () => {
    describe("app", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
        process.env.GROUPAROO_CONFIG_DIR = path.join(
          __dirname,
          "..",
          "fixtures",
          "codeConfig",
          "error-app"
        );
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        await expect(initializer.initialize()).rejects.toThrow(
          /fileGuid is required for a app of type test-plugin-app/
        );
      });
    });

    describe("source", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
        process.env.GROUPAROO_CONFIG_DIR = path.join(
          __dirname,
          "..",
          "fixtures",
          "codeConfig",
          "error-source"
        );
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        await expect(initializer.initialize()).rejects.toThrow(
          /cannot find ProfilePropertyRule/
        );
      });
    });

    describe("profile property rule", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
        process.env.GROUPAROO_CONFIG_DIR = path.join(
          __dirname,
          "..",
          "fixtures",
          "codeConfig",
          "error-profilePropertyRule"
        );
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        await expect(initializer.initialize()).rejects.toThrow(
          /cannot find Source/
        );
      });
    });

    describe("group", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
        process.env.GROUPAROO_CONFIG_DIR = path.join(
          __dirname,
          "..",
          "fixtures",
          "codeConfig",
          "error-group"
        );
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        await expect(initializer.initialize()).rejects.toThrow(
          /cannot find ProfilePropertyRule/
        );
      });
    });

    describe("team member", () => {
      beforeAll(async () => {
        api.codeConfig.allowLockedModelChanges = true;
        process.env.GROUPAROO_CONFIG_DIR = path.join(
          __dirname,
          "..",
          "fixtures",
          "codeConfig",
          "error-teamMember"
        );
      });

      test("errors will be thrown if the configuration is invalid", async () => {
        await expect(initializer.initialize()).rejects.toThrow(
          /TeamMember.firstName cannot be null/
        );
      });
    });
  });
});
