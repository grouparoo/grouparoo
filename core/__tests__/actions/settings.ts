import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Setting, plugin } from "../../src";

describe("actions/settings", () => {
  let connection;

  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    connection = await specHelper.buildConnection();

    await Setting.truncate();
  });

  test("can publicly read the cluster name", async () => {
    const setting = await plugin.registerSetting(
      "testPlugin",
      "cluster-name",
      "My Grouparoo Cluster",
      "My Grouparoo Cluster",
      "Name of the cluster",
      "string"
    );
    const {
      error,
      clusterName,
      default: defaultValue,
    } = await specHelper.runAction("settings:clusterName:view", connection);
    expect(error).toBeUndefined();
    expect(clusterName).not.toBeUndefined();
    expect(clusterName).toEqual(setting.value);
    expect(defaultValue).toEqual(true);
  });

  describe("reader signed in", () => {
    let csrfToken;
    let id;

    beforeAll(async () => {
      await Setting.truncate();

      await plugin.registerSetting(
        "testPlugin",
        "enabled",
        "testPlugin:name",
        "name!",
        "name of the thing?",
        "string"
      );
      await plugin.registerSetting(
        "testPlugin",
        "number",
        "testPlugin:number",
        10,
        "How many of those things should we do?",
        "number"
      );
      await plugin.registerSetting(
        "otherPlugin",
        "enabled",
        "otherPlugin:enabled",
        true,
        "Should we do that thing?",
        "boolean"
      );
    });

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can list system settings", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, settings } = await specHelper.runAction(
        "settings:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(
        settings
          .map((p) => {
            return p.pluginName;
          })
          .sort()
      ).toEqual(["otherPlugin", "testPlugin", "testPlugin"]);
      expect(
        settings
          .map((p) => {
            return p.type;
          })
          .sort()
      ).toEqual(["boolean", "number", "string"]);
      expect(
        settings
          .map((p) => {
            return p.key;
          })
          .sort()
      ).toEqual(["enabled", "enabled", "number"]);
      expect(
        settings.map((p) => {
          return p.value;
        })
      ).toEqual(["10", "name!", "true"]);

      id = settings[0].id;
    });

    test("a writer can update a setting", async () => {
      connection.params = {
        id,
        csrfToken,
        value: "new value",
      };
      const { error } = await specHelper.runAction("setting:edit", connection);
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
      };
      const { settings } = await specHelper.runAction(
        "settings:list",
        connection
      );
      expect(settings[0].value).toBe("new value");
    });
  });
});
