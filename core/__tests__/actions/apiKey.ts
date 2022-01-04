import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { ApiKey } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  ApiKeyCreate,
  ApiKeyDestroy,
  ApiKeyEdit,
  ApiKeysList,
  ApiKeyView,
} from "../../src/actions/apiKeys";

describe("actions/apiKeys", () => {
  helper.grouparooTestServer({ truncate: true });
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

    test("an administrator can create a new apiKey", async () => {
      connection.params = {
        csrfToken,
        name: "new key",
      };
      const { error, apiKey } = await specHelper.runAction<ApiKeyCreate>(
        "apiKey:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKey.id).toBeTruthy();
      expect(apiKey.name).toBe("new key");
      id = apiKey.id;
    });

    test("an administrator can list all the apiKeys", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, apiKeys } = await specHelper.runAction<ApiKeysList>(
        "apiKeys:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKeys.length).toBe(1);
    });

    test("an administrator can edit an apiKey", async () => {
      connection.params = {
        csrfToken,
        id,
        name: "new key name",
      };
      const { error, apiKey } = await specHelper.runAction<ApiKeyEdit>(
        "apiKey:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKey.id).toBeTruthy();
      expect(apiKey.name).toBe("new key name");
    });

    test("an administrator can view an apiKey", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, apiKey } = await specHelper.runAction<ApiKeyView>(
        "apiKey:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKey.id).toBeTruthy();
      expect(apiKey.name).toBe("new key name");
    });

    test("new apiKeys are created with no read or write permissions", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { apiKey } = await specHelper.runAction<ApiKeyView>(
        "apiKey:view",
        connection
      );
      apiKey.permissions.forEach((permission) => {
        expect(permission.read).toBe(false);
        expect(permission.write).toBe(false);
      });
    });

    test("apiKeys without permissions get an error when running an action", async () => {
      const { apiKey: key } = await ApiKey.findById(id);
      const { error } = await specHelper.runAction("apiKey:view", {
        apiKey: key,
      });
      expect(error).toEqual({
        code: "AUTHORIZATION_ERROR",
        fields: [],
        message: 'Not authorized for mode "read" on topic "apiKey"',
        sql: null,
      });
    });

    test("permissions can be set in bulk", async () => {
      connection.params = {
        csrfToken,
        id,
        permissionAllRead: true,
        permissionAllWrite: true,
      };
      const { apiKey } = await specHelper.runAction<ApiKeyEdit>(
        "apiKey:edit",
        connection
      );
      apiKey.permissions.forEach((_permission) => {
        expect(_permission.read).toBe(true);
        expect(_permission.write).toBe(true);
      });

      connection.params = {
        csrfToken,
        id,
        permissionAllRead: true,
        permissionAllWrite: false,
      };
      const { apiKey: apiKeyAgain } = await specHelper.runAction<ApiKeyEdit>(
        "apiKey:edit",
        connection
      );
      apiKeyAgain.permissions.forEach((_permission) => {
        expect(_permission.read).toBe(true);
        expect(_permission.write).toBe(false);
      });
    });

    test("permissions can be updated when not managing in bulk", async () => {
      connection.params = {
        csrfToken,
        id,
        permissionAllRead: null,
        permissionAllWrite: null,
        permissions: [{ topic: "app", read: true, write: true }],
      };
      const { apiKey } = await specHelper.runAction<ApiKeyEdit>(
        "apiKey:edit",
        connection
      );
      apiKey.permissions.forEach((_permission) => {
        if (_permission.topic === "app") {
          expect(_permission.read).toBe(true);
          expect(_permission.write).toBe(true);
        } else {
          expect(_permission.read).toBe(true);
          expect(_permission.write).toBe(false);
        }
      });
    });

    test("an administrator can destroy an apiKey", async () => {
      connection.params = {
        csrfToken,
        name: "doomed apiKey",
      };
      const { error, apiKey } = await specHelper.runAction<ApiKeyCreate>(
        "apiKey:create",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        id: apiKey.id,
      };
      const destroyResponse = await specHelper.runAction<ApiKeyDestroy>(
        "apiKey:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);
    });
  });
});
