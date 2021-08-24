import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Import } from "../../src";
import { ImportsList, ImportView } from "../../src/actions/imports";
import { SessionCreate } from "../../src/actions/session";

describe("actions/imports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let apiKey: string;

  beforeAll(async () => {
    await helper.factories.properties();

    const apiKeyModel = await helper.factories.apiKey();
    apiKey = apiKeyModel.apiKey;
    const permissions = await apiKeyModel.$get("permissions", {
      where: { topic: "import" },
    });
    await permissions[0].update({ write: true, read: true });
  });

  describe("with session", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      });

      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("an import can be viewed", async () => {
      const i = await Import.findOne();
      connection.params = { csrfToken, id: i.id };
      const { error, import: _import } = await specHelper.runAction<ImportView>(
        "import:view",
        connection
      );

      expect(error).toBeFalsy();
      expect(_import.id).toBe(i.id);
      expect(_import.createdAt).toBeTruthy();
    });

    test("imports can be listed", async () => {
      connection.params = { csrfToken };
      const { error, imports } = await specHelper.runAction<ImportsList>(
        "imports:list",
        connection
      );

      expect(error).toBeFalsy();
      expect(imports.length).toBe(2);
      expect(imports[0].id).toBeTruthy();
      expect(imports[0].data.email).toBe("toad@mushroom-kingdom.gov");
    });
  });
});
