import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
let actionhero;
let guid;

describe("actions/apps", () => {
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

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
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
        options: { fileGuid: "abc123" },
      };
      const { error, app } = await specHelper.runAction(
        "app:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(app.guid).toBeTruthy();
      expect(app.name).toBe("test app");
      expect(app.options.fileGuid).toBe("abc123");

      guid = app.guid;
    });

    test("an administrator can get the options for a new app", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction(
        "app:options",
        connection
      );
      expect(error).toBeUndefined();
      expect(types.length).toBeGreaterThanOrEqual(2);
      const names = types.map((t) => t.name);
      expect(names).toContain("manual");
      expect(names).toContain("test-plugin-app");
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = "abc123";
      });

      test("options for a new app will include the names of options included in environment variables", async () => {
        connection.params = { csrfToken };
        const { environmentVariableOptions } = await specHelper.runAction(
          "app:options",
          connection
        );
        expect(environmentVariableOptions).toEqual(["TEST_OPTION"]);
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
      });
    });

    test("an administrator can get the options for the app options", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, options } = await specHelper.runAction(
        "app:optionOptions",
        connection
      );
      expect(error).toBeUndefined();
      expect(options).toEqual({
        fileGuid: { options: ["a", "b"], type: "list" },
      });
    });

    test("an administrator can test the app options with the saved app options", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, test } = await specHelper.runAction(
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
        guid,
        options: { thing: "stuff" },
      };
      const { error, test } = await specHelper.runAction(
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
      const { error, apps, total } = await specHelper.runAction(
        "apps:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(apps.length).toBe(2); // this app and the events app
      expect(apps[0].name).toBe("test app");
      expect(total).toBe(2);
    });

    test("an administrator can edit an app", async () => {
      connection.params = {
        csrfToken,
        guid,
        name: "new app name",
        options: { fileGuid: "zzz" },
      };
      const { error, app } = await specHelper.runAction("app:edit", connection);
      expect(error).toBeUndefined();
      expect(app.guid).toBeTruthy();
      expect(app.name).toBe("new app name");
      expect(app.options.fileGuid).toBe("zzz");
    });

    test("an administrator can view an app", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, app } = await specHelper.runAction("app:view", connection);
      expect(error).toBeUndefined();
      expect(app.guid).toBeTruthy();
      expect(app.name).toBe("new app name");
      expect(app.options.fileGuid).toBe("zzz");
    });

    test("an administrator can destroy an app", async () => {
      connection.params = {
        csrfToken,
        name: "doomed app",
        type: "test-plugin-app",
        options: { fileGuid: "abc123" },
      };
      const { error, app } = await specHelper.runAction(
        "app:create",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        guid: app.guid,
      };
      const destroyResponse = await specHelper.runAction(
        "app:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);
    });
  });
});
