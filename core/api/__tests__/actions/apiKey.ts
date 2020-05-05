import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { ApiKey } from "./../../src/models/ApiKey";
import { Permission } from "../../src";
let actionhero;
let guid;

describe("actions/apiKeys", () => {
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

    test("an administrator can create a new apiKey", async () => {
      connection.params = {
        csrfToken,
        name: "new key",
      };
      const { error, apiKey } = await specHelper.runAction(
        "apiKey:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKey.guid).toBeTruthy();
      expect(apiKey.name).toBe("new key");
      guid = apiKey.guid;
    });

    test("an administrator can list all the apiKeys", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, apiKeys } = await specHelper.runAction(
        "apiKeys:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKeys.length).toBe(1);
    });

    test("an administrator can edit an apiKey", async () => {
      connection.params = {
        csrfToken,
        guid,
        name: "new key name",
      };
      const { error, apiKey } = await specHelper.runAction(
        "apiKey:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKey.guid).toBeTruthy();
      expect(apiKey.name).toBe("new key name");
    });

    test("an administrator can view an apiKey", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, apiKey } = await specHelper.runAction(
        "apiKey:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(apiKey.guid).toBeTruthy();
      expect(apiKey.name).toBe("new key name");
    });

    test("new apiKeys are created with no read or write permissions", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { apiKey } = await specHelper.runAction("apiKey:view", connection);
      apiKey.permissions.forEach((permission) => {
        expect(permission.read).toBe(false);
        expect(permission.write).toBe(false);
      });
    });

    test("permissions can be updated", async () => {
      const permission = await Permission.findOne({
        where: { ownerGuid: guid, topic: "app" },
      });

      connection.params = {
        csrfToken,
        guid,
        permissions: [
          {
            guid: permission.guid,
            read: true,
            write: true,
          },
        ],
      };
      const { apiKey } = await specHelper.runAction("apiKey:edit", connection);
      apiKey.permissions.forEach((_permission) => {
        if (permission.guid === _permission.guid) {
          expect(_permission.read).toBe(true);
          expect(_permission.write).toBe(true);
        } else {
          expect(_permission.read).toBe(false);
          expect(_permission.write).toBe(false);
        }
      });
    });

    test("an administrator can destroy an apiKey", async () => {
      connection.params = {
        csrfToken,
        name: "doomed apiKey",
      };
      const { error, apiKey } = await specHelper.runAction(
        "apiKey:create",
        connection
      );
      expect(error).toBeUndefined();

      connection.params = {
        csrfToken,
        guid: apiKey.guid,
      };
      const destroyResponse = await specHelper.runAction(
        "apiKey:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);
    });
  });
});
