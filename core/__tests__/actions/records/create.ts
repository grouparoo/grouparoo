import { helper } from "@grouparoo/spec-helper";
import { specHelper, api, Connection } from "actionhero";
import {
  GrouparooModel,
  PluginConnection,
  GrouparooPlugin,
  GrouparooRecord,
} from "../../../src";
import { SessionCreate } from "../../../src/actions/session";
import { RecordCreate } from "../../../src/actions/records";

describe("actions/records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;
  let testPluginConnection: PluginConnection;

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );
    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );
    delete testPluginConnection.methods.recordProperties; // delete the batch import for this test
  });

  describe("writer signed in", () => {
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

    test("a new record cannot be created if there is an error from the source", async () => {
      jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(() => {
          throw new Error("not found");
        });

      connection.params = {
        csrfToken,
        modelId: model.id,
        properties: { userId: -1 },
      };
      const { error } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error.message).toMatch(/not found/);
      expect(await GrouparooRecord.count()).toBe(0);
    });

    test("a new record cannot be created if it is not found in the source", async () => {
      jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(async ({ property }) => {
          if (property.key === "userId") return [null];
        });

      connection.params = {
        csrfToken,
        modelId: model.id,
        properties: { userId: -1 },
      };
      const { error } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error.message).toMatch(/Record cannot be created/);
      expect(await GrouparooRecord.count()).toBe(0);
    });

    test("a new record cannot be created if it would produce an invalid property value", async () => {
      jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(async ({ property }) => {
          if (property.key === "userId") return ["foo"];
        });

      connection.params = {
        csrfToken,
        modelId: model.id,
        properties: { userId: -1 },
      };
      const { error } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error.message).toMatch(/Record cannot be created/);
      expect(await GrouparooRecord.count()).toBe(0);
    });
  });
});
