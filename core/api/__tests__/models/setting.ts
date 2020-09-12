import { helper } from "./../utils/specHelper";
import { Setting } from "./../../src/models/Setting";
import { Log } from "./../../src/models/Log";
import { plugin } from "./../../src/modules/plugin";

let actionhero;

describe("models/setting", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("a setting can be created via the helper method", async () => {
    const setting = await plugin.registerSetting(
      "testPlugin",
      "key",
      "value",
      "this is a test setting",
      "string"
    );

    expect(setting.guid.length).toBe(40);
    expect(setting.key).toBe("key");
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
      "value2",
      "this is a better description of the setting",
      "string"
    );

    const setting = await plugin.readSetting("testPlugin", "key");
    expect(setting.key).toBe("key");
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
});
