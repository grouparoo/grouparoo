import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
import { Import } from "./../../src/models/Import";
let actionhero;

describe("actions/imports", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("an import can be added that contains unique profile properties", async () => {
    const { error, import: _import } = await specHelper.runAction(
      "import:create",
      {
        properties: {
          email: "toad@mushroom-kingdom.gov",
          hat: "mushroom",
        },
      }
    );

    expect(error).toBeFalsy();
    expect(_import.guid).toBeTruthy();
    expect(_import.creatorType).toBe("api");
  });

  test("import profile properties are parsed from JSON as needed", async () => {
    const { error, import: _import } = await specHelper.runAction(
      "import:create",
      {
        properties: JSON.stringify({
          email: "toad@mushroom-kingdom.gov",
          hat: "mushroom",
        }),
      }
    );

    expect(error).toBeFalsy();
    expect(_import.guid).toBeTruthy();
    expect(_import.creatorType).toBe("api");
  });

  test("an import cannot be added if it has no unique profile properties", async () => {
    const { error, import: _import } = await specHelper.runAction(
      "import:create",
      {
        properties: { hat: "mushroom" },
      }
    );

    expect(error.message).toMatch(/no unique profile property included/);
    expect(_import).toBeFalsy();
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
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("an import can be viewed", async () => {
      const i = await Import.findOne();
      connection.params = { csrfToken, guid: i.guid };
      const { error, import: _import } = await specHelper.runAction(
        "import:view",
        connection
      );

      expect(error).toBeFalsy();
      expect(_import.guid).toBe(i.guid);
      expect(_import.createdAt).toBeTruthy();
    });

    test("imports can be listed", async () => {
      connection.params = { csrfToken };
      const { error, imports } = await specHelper.runAction(
        "imports:list",
        connection
      );

      expect(error).toBeFalsy();
      expect(imports.length).toBe(2);
      expect(imports[0].guid).toBeTruthy();
      expect(imports[0].data.email).toBe("toad@mushroom-kingdom.gov");
    });
  });
});
