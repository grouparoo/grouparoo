import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { SessionCreate } from "../../src/actions/session";
import {
  ModelCreate,
  ModelDestroy,
  ModelEdit,
  ModelOptions,
  ModelsList,
  ModelView,
} from "../../src/actions/models";
import { ConfigWriter } from "../../src/modules/configWriter";

describe("actions/models", () => {
  helper.grouparooTestServer({ truncate: true });
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

    test("an administrator can create a new model", async () => {
      connection.params = {
        csrfToken,
        name: "new model",
        type: "profile",
      };
      const { error, model } = await specHelper.runAction<ModelCreate>(
        "model:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(model.id).toBeTruthy();
      expect(model.name).toBe("new model");
      expect(model.type).toBe("profile");
      expect(configSpy).toBeCalledTimes(1);
      id = model.id;
    });

    test("an administrator can list all the models", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, models } = await specHelper.runAction<ModelsList>(
        "models:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(models.length).toBe(1);
      expect(configSpy).toBeCalledTimes(0);
    });

    test("an administrator can get the options for a new model", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction<ModelOptions>(
        "model:options",
        connection
      );
      expect(error).toBeUndefined();
      expect(types).toEqual(["profile", "account", "event", "custom"]);
      expect(configSpy).toBeCalledTimes(0);
    });

    test("an administrator can edit a model", async () => {
      connection.params = {
        csrfToken,
        id,
        name: "new model name",
      };
      const { error, model } = await specHelper.runAction<ModelEdit>(
        "model:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(model.id).toBeTruthy();
      expect(model.name).toBe("new model name");
      expect(configSpy).toBeCalledTimes(1);
    });

    test("an administrator can view a model", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, model } = await specHelper.runAction<ModelView>(
        "model:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(model.id).toBeTruthy();
      expect(model.name).toBe("new model name");
      expect(configSpy).toBeCalledTimes(0);
    });

    test("an administrator can destroy a model", async () => {
      connection.params = {
        csrfToken,
        name: "doomed model",
        type: "profile",
      };
      const { error, model } = await specHelper.runAction<ModelCreate>(
        "model:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(configSpy).toBeCalledTimes(1);

      connection.params = {
        csrfToken,
        id: model.id,
      };
      const destroyResponse = await specHelper.runAction<ModelDestroy>(
        "model:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);
      expect(configSpy).toBeCalledTimes(2);
    });
  });
});
