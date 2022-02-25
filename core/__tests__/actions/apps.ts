import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { App } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  AppCreate,
  AppDestroy,
  AppEdit,
  AppOptions,
  AppsList,
  AppTest,
  AppView,
} from "../../src/actions/apps";
import { ObfuscatedOptionString } from "../../src/modules/optionHelper";
import { ConfigWriter } from "../../src/modules/configWriter";

describe("actions/apps", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;
  const configSpy = jest.spyOn(ConfigWriter, "run");

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  afterEach(() => {
    configSpy.mockClear();
  });

  describe("administrator signed in", () => {
    let connection: Connection;
    let csrfToken: string;

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
      expect(configSpy).toBeCalledTimes(1);
      id = app.id;
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = "abc123";
      });

      test("options for a new app will include the names of options included in environment variables", async () => {
        connection.params = { csrfToken, id };
        const { environmentVariableOptions, error } =
          await specHelper.runAction<AppOptions>("app:options", connection);
        expect(error).toBeUndefined();
        expect(environmentVariableOptions).toEqual(["TEST_OPTION"]);
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
      });
    });

    test("an administrator can get the options for the app", async () => {
      connection.params = { csrfToken, id };
      const { error, options, pluginOptions } =
        await specHelper.runAction<AppOptions>("app:options", connection);
      expect(error).toBeUndefined();
      expect(pluginOptions).toEqual([
        { key: "fileId", required: true },
        { key: "environment", required: false },
        { key: "password", required: false },
        { key: "oAuthToken", type: "oauth-token", required: false },
        { key: "_failRemoteValidation", required: false },
      ]);
      expect(options).toEqual({
        environment: { options: ["staging", "production"], type: "list" },
        password: { type: "password" },
        oAuthToken: { type: "oauth-token" },
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
      expect(app.options.password).toBe(ObfuscatedOptionString);
      expect(configSpy).toBeCalledTimes(1);
    });

    test("an administrator cannot save an obfuscated password", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { fileId: "zzz", password: ObfuscatedOptionString },
      };
      const { error, app } = await specHelper.runAction<AppEdit>(
        "app:edit",
        connection
      );

      expect(error).toBeUndefined();
      expect(app.id).toBeTruthy();
      expect(app.options.password).toBe(ObfuscatedOptionString);

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
      expect(app.pluginApp.displayName).toBe("test-plugin-app");
      expect(app.pluginApp.name).toBe("test-plugin-app");
      expect(app.options.password).toBe(ObfuscatedOptionString);
      expect(configSpy).toBeCalledTimes(0);
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
      expect(configSpy).toBeCalledTimes(1);

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
      expect(configSpy).toBeCalledTimes(2);
    });
  });
});
