import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { App } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  AppCreate,
  AppDestroy,
  AppEdit,
  AppOptionOptions,
  AppOptions,
  AppsList,
  AppTest,
  AppView,
} from "../../src/actions/apps";
import { ObfuscatedPasswordString } from "../../src/modules/optionHelper";

describe("actions/apps", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("an administrator can create a new app", async () => {
      connection.params = {
        csrfToken,
        name: "test app",
        type: "test-plugin-app",
        options: { fileId: "abc123" },
      };
      const { error, app } = await specHelper.runAction<AppCreate>(
        "app:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(app.id).toBeTruthy();
      expect(app.name).toBe("test app");
      expect(app.options.fileId).toBe("abc123");

      id = app.id;
    });

    test("an administrator can get the options for a new app and how they can be used", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction<AppOptions>(
        "app:options",
        connection
      );
      expect(error).toBeUndefined();
      expect(types.length).toBeGreaterThanOrEqual(1);
      const names = types.map((t) => t.name);
      expect(names).toContain("test-plugin-app");

      const pluginTestAppType = types.find((t) => t.name === "test-plugin-app");
      expect(pluginTestAppType.options).toEqual([
        { key: "fileId", required: true },
        { key: "password", required: false },
        { key: "_failRemoteValidation", required: false },
      ]);
      expect(pluginTestAppType.plugin).toEqual({
        name: "@grouparoo/test-plugin",
        icon: "/path/to/icon.png",
      });
      expect(pluginTestAppType.provides.source).toBe(true);
      expect(pluginTestAppType.provides.destination).toBe(true);
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = "abc123";
      });

      test("options for a new app will include the names of options included in environment variables", async () => {
        connection.params = { csrfToken };
        const { environmentVariableOptions } =
          await specHelper.runAction<AppOptions>("app:options", connection);
        expect(environmentVariableOptions).toEqual(["TEST_OPTION"]);
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
      });
    });

    test("an administrator can get the options for the app options", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, options } = await specHelper.runAction<AppOptionOptions>(
        "app:optionOptions",
        connection
      );
      expect(error).toBeUndefined();
      expect(options).toEqual({
        fileId: { options: ["a", "b"], type: "list" },
        password: { type: "password" },
      });
    });

    test("an administrator can test the app options with the saved app options", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, test } = await specHelper.runAction<AppTest>(
        "app:test",
        connection
      );
      expect(error).toBeUndefined();
      expect(test.success).toBe(true);
      expect(test.message).toBe("OK");
      expect(test.error).toBeFalsy();
    });

    test("an administrator can test the app options with new app options", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { thing: "stuff" },
      };
      const { error, test } = await specHelper.runAction<AppTest>(
        "app:test",
        connection
      );
      expect(error).toBeUndefined();
      expect(test.success).toBe(true);
      expect(test.message).toBe("OK");
      expect(test.error).toBeFalsy();
    });

    test("an administrator can list all the apps", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, apps, total } = await specHelper.runAction<AppsList>(
        "apps:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(apps.length).toBe(1);
      expect(apps[0].name).toBe("test app");
      expect(total).toBe(1);
    });

    test("an administrator can edit an app", async () => {
      connection.params = {
        csrfToken,
        id,
        name: "new app name",
        options: { fileId: "zzz", password: "SECRET" },
      };
      const { error, app } = await specHelper.runAction<AppEdit>(
        "app:edit",
        connection
      );

      expect(error).toBeUndefined();
      expect(app.id).toBeTruthy();
      expect(app.name).toBe("new app name");
      expect(app.options.fileId).toBe("zzz");
      expect(app.options.password).toBe(ObfuscatedPasswordString);
    });

    test("an administrator cannot save an obfuscated password", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { fileId: "zzz", password: ObfuscatedPasswordString },
      };
      const { error, app } = await specHelper.runAction<AppEdit>(
        "app:edit",
        connection
      );

      expect(error).toBeUndefined();
      expect(app.id).toBeTruthy();
      expect(app.options.password).toBe(ObfuscatedPasswordString);

      // but, it's not really saved to the DB:
      const appDB = await App.findById(id);
      const options = await appDB.getOptions();
      expect(options.password).toBe("SECRET");
    });

    test("an administrator can view an app", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, app } = await specHelper.runAction<AppView>(
        "app:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(app.id).toBeTruthy();
      expect(app.name).toBe("new app name");
      expect(app.options.fileId).toBe("zzz");
      expect(app.options.password).toBe(ObfuscatedPasswordString);
    });

    test("an administrator can destroy an app", async () => {
      connection.params = {
        csrfToken,
        name: "doomed app",
        type: "test-plugin-app",
        options: { fileId: "abc123" },
      };
      const { error, app } = await specHelper.runAction<AppCreate>(
        "app:create",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        id: app.id,
      };
      const destroyResponse = await specHelper.runAction<AppDestroy>(
        "app:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);
    });
  });
});
