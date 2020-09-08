import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Setting } from "./../../src/models/Setting";
import { plugin } from "./../../src/modules/plugin";
let actionhero;

describe("actions/settings", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection;
    let csrfToken;
    let guid;

    beforeAll(async () => {
      await Setting.destroy({ truncate: true });

      await plugin.registerSetting(
        "testPlugin",
        "enabled",
        false,
        "Should we do that thing?",
        "string"
      );
      await plugin.registerSetting(
        "testPlugin",
        "number",
        10,
        "How many of those things should we do?",
        "number"
      );
      await plugin.registerSetting(
        "otherPlugin",
        "enabled",
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
      ).toEqual(["10", "false", "true"]);

      guid = settings[0].guid;
    });

    test("a writer can update a setting", async () => {
      connection.params = {
        guid,
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
