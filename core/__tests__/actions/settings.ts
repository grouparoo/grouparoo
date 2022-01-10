import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { Setting, plugin } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  SettingsList,
  SettingCoreClusterName,
} from "../../src/actions/settings";

describe("actions/settings", () => {
  let connection: Connection;

  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  describe("settings", () => {
    test("unauthenticated users can view the cluster name setting", async () => {
      const { setting } = await specHelper.runAction<SettingCoreClusterName>(
        "setting:view:core:cluster-name"
      );

      expect(setting.locked).toBe(null);
      expect(setting.value).toBe("My Grouparoo Cluster");
    });
  });

  describe("reader signed in", () => {
    let csrfToken: string;
    let id: string;

    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      });

      connection = await specHelper.buildConnection();
    });

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
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can list system settings", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, settings } = await specHelper.runAction<SettingsList>(
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
        value: "9999",
      };
      const { error } = await specHelper.runAction("setting:edit", connection);
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
      };
      const { settings } = await specHelper.runAction<SettingsList>(
        "settings:list",
        connection
      );
      expect(settings[0].value).toBe("9999");
    });
  });
});
