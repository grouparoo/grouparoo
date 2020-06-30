import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";

let actionhero;
let guid;

describe("errors", () => {
  let connection;
  let csrfToken;

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

  beforeAll(async () => {
    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;
  });

  test("trying to create a team with the same name produces a readable error message, code, and fields", async () => {
    connection.params = {
      csrfToken,
      name: "new team",
    };

    // first time is OK
    await specHelper.runAction("team:create", connection);

    // second time produces error
    const { error, team } = await specHelper.runAction(
      "team:create",
      connection
    );

    expect(team).toBeFalsy();
    expect(error).toEqual({
      message: "name must be unique",
      code: "unique violation",
      fields: ["name"],
    });
  });
});
