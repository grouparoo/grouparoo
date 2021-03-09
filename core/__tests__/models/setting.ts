import { helper } from "@grouparoo/spec-helper";
import { plugin, Setting, Log, Team } from "../../src";

import { SettingOps } from "../../src/modules/ops/setting";

describe("models/setting", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  test("a setting can be created via the helper method", async () => {
    const setting = await plugin.registerSetting(
      "testPlugin",
      "key",
      "title",
      "value",
      "this is a test setting",
      "string"
    );

    expect(setting.id.length).toBe(40);
    expect(setting.key).toBe("key");
    expect(setting.title).toBe("title");
    expect(setting.value).toBe("value");
    expect(setting.defaultValue).toBe("value");
    expect(setting.createdAt).toBeTruthy();
    expect(setting.updatedAt).toBeTruthy();
  });

  test("creating a setting creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "setting" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("settings can be read via the helpery method", async () => {
    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.key).toBe("key");
    expect(setting.value).toBe("value");
  });

  test("updating the setting via a helper works and creates a log entry", async () => {
    const updateResponseSetting = await plugin.updateSetting(
      "testPlugin",
      "key",
      "new value"
    );
    expect(updateResponseSetting.key).toBe("key");
    expect(updateResponseSetting.value).toBe("new value");

    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.key).toBe("key");
    expect(setting.value).toBe("new value");

    const latestLog = await Log.findOne({
      where: { verb: "update", topic: "setting" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("settings can be updated via subsequent calls to registerSetting", async () => {
    await plugin.registerSetting(
      "testPlugin",
      "key",
      "new title",
      "value2",
      "this is a better description of the setting",
      "string"
    );

    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.key).toBe("key");
    expect(setting.title).toBe("new title");
    expect(setting.value).toBe("new value"); // no change
    expect(setting.defaultValue).toBe("value2");
    expect(setting.description).toBe(
      "this is a better description of the setting"
    );
  });

  test("deleting a setting creates a log entry", async () => {
    const setting = await Setting.findOne({
      where: {
        pluginName: "testPlugin",
        key: "key",
      },
    });
    await setting.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "destroy", topic: "setting" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  describe("SettingOps/nameClusterFromTeam", () => {
    const defaultValue = "My Grouparoo Cluster";
    let setting: Setting;
    let team: Team;

    beforeEach(async () => {
      setting = await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      });
      team = await helper.factories.team({ name: "Grouparoo" });
    });

    afterEach(async () => {
      await setting.update({
        pluginName: "core",
        key: "cluster-name",
        value: defaultValue,
        defaultValue: defaultValue,
      });
      if (team) await team.destroy();
    });

    test("The cluster starts with a default setting value", async () => {
      await setting.reload();
      expect(setting.value).toBe(defaultValue);
    });

    test("It renames the setting from the team name", async () => {
      await SettingOps.nameClusterFromTeam(team);
      await setting.reload();
      expect(setting.value).toBe("Grouparoo - Test");
    });

    test("It does not rename the setting when the setting's value has been changed", async () => {
      await setting.update({ value: "Test Cluster Name" });
      await SettingOps.nameClusterFromTeam(team);
      await setting.reload();
      expect(setting.value).toBe("Test Cluster Name");
    });

    test("It does nothing if it can not find the proper setting", async () => {
      await setting.update({ key: "wrong-setting" });
      await SettingOps.nameClusterFromTeam(team);
      await setting.reload();
      expect(setting.value).toBe(defaultValue);
    });
  });
});
