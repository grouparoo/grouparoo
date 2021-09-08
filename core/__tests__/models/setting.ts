import { helper } from "@grouparoo/spec-helper";
import { plugin, Setting, Log } from "../../src";
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

  test("updating a setting without changes does not bump the updated-at", async () => {
    await plugin.registerSetting(
      "testPlugin",
      "key",
      "new title",
      100,
      "this is a better description of the setting",
      "number"
    );

    const { updatedAt } = await plugin.readSetting("testPlugin", "key");

    await plugin.registerSetting(
      "testPlugin",
      "key",
      "new title",
      100,
      "this is a better description of the setting",
      "number"
    );

    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.updatedAt).toEqual(updatedAt);
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

  describe("#SettingOps", () => {
    beforeEach(async () => await Setting.truncate());

    test("Settings can be seeded", async () => {
      await SettingOps.prepare();
      const settings = await Setting.findAll();
      expect(settings.filter((s) => s.pluginName === "core").length).toEqual(
        15
      );
      expect(
        settings.filter((s) => s.pluginName === "interface").length
      ).toEqual(1);
      expect(
        settings.filter((s) => s.pluginName === "telemetry").length
      ).toEqual(2);
    });

    test("settings can be pruned", async () => {
      const goodSetting = await Setting.create({
        key: "goodKey",
        pluginName: "test",
        defaultValue: 1,
        type: "number",
      });
      const badSetting = await Setting.create({
        key: "badKey",
        pluginName: "test",
        defaultValue: 1,
        type: "number",
      });

      const removed = await SettingOps.cleanSettings([goodSetting.key]);
      expect(removed).toBe(1);
      expect(await Setting.count()).toBe(1);
      await expect(badSetting.reload()).rejects.toThrow(
        /does not exist anymore/
      );
    });
  });
});
