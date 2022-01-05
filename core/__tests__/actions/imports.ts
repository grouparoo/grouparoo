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
    let toadImport: Import;
    let peachImport: Import;

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

    beforeAll(async () => {
      const record = await helper.factories.record({ modelId: "mod_profiles" });
      toadImport = await helper.factories.import(
        undefined,
        {
          email: "toad@mushroom-kingdom.gov",
          something: "else",
        },
        record.id
      );

      const record2 = await helper.factories.record({
        modelId: "mod_profiles",
      });
      peachImport = await helper.factories.import(
        undefined,
        {
          email: "peach@mushroom-kingdom.gov",
          something: "new",
        },
        record2.id
      );
      await peachImport.update({ state: "complete" });
    });

    test("an import can be viewed", async () => {
      connection.params = { csrfToken, id: toadImport.id };
      const { error, import: _import } = await specHelper.runAction<ImportView>(
        "import:view",
        connection
      );

      expect(error).toBeFalsy();
      expect(_import.id).toBe(toadImport.id);
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
      expect(imports.map((i) => i.id).sort()).toEqual(
        [peachImport.id, toadImport.id].sort()
      );
      expect(imports.map((i) => i.data.email).sort()).toEqual([
        "peach@mushroom-kingdom.gov",
        "toad@mushroom-kingdom.gov",
      ]);
    });

    test("imports can be filtered by state", async () => {
      connection.params = { csrfToken, state: "importing" };
      const { error, imports } = await specHelper.runAction<ImportsList>(
        "imports:list",
        connection
      );

      expect(error).toBeFalsy();
      expect(imports.length).toBe(1);
      expect(imports[0].id).toBeTruthy();
      expect(imports[0].data.email).toBe("toad@mushroom-kingdom.gov");
    });
  });
});
