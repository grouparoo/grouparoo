import { helper } from "@grouparoo/spec-helper";
import { plugin, Setting } from "../../src";
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

  test("settings can be read via the helper method", async () => {
    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.key).toBe("key");
    expect(setting.value).toBe("value");
  });

  test("updating the setting via a helper works", async () => {
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
      "string"
    );

    const { updatedAt } = await plugin.readSetting("testPlugin", "key");

    await plugin.registerSetting(
      "testPlugin",
      "key",
      "new title",
      100,
      "this is a better description of the setting",
      "string"
    );

    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.updatedAt).toEqual(updatedAt);
  });

  describe("validations", () => {
    test("booleans must be either true or false", async () => {
      // coerced by setter/getter
    });

    test("strings", async () => {
      // everything is OK
    });

    test("numbers", async () => {
      await expect(
        plugin.updateSetting("core", "exports-retry-delay-seconds", "foo")
      ).rejects.toThrow(/foo is not a number/);
      await expect(
        plugin.updateSetting("core", "exports-retry-delay-seconds", -1)
      ).rejects.toThrow(/setting values cannot have negative numbers/);
    });
  });

  describe("#SettingOps", () => {
    beforeEach(async () => await Setting.truncate());

    test("Settings can be seeded", async () => {
      await SettingOps.prepare();
      const settings = await Setting.findAll();
      expect(settings.filter((s) => s.pluginName === "core").length).toEqual(
        14
      );
      expect(
        settings.filter((s) => s.pluginName === "interface").length
      ).toEqual(1);
      expect(
        settings.filter((s) => s.pluginName === "telemetry").length
      ).toEqual(1);
    });

    test("settings can be pruned", async () => {
      const goodSetting = await Setting.create({
        key: "goodKey",
        pluginName: "test",
        value: 1,
        defaultValue: 1,
        type: "number",
      });
      const badSetting = await Setting.create({
        key: "badKey",
        pluginName: "test",
        value: 1,
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
