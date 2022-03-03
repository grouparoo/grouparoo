import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { SessionCreate } from "../../src/actions/session";
import { TeamCreate } from "../../src/actions/teams";

describe("errors", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let connection: Connection;
  let csrfToken: string;

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
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;
  });

  test("trying to create a team with the same name produces a readable error message, code, and fields + the sql query", async () => {
    connection.params = {
      csrfToken,
      name: "new team",
    };

    // first time is OK
    await specHelper.runAction("team:create", connection);

    // second time produces error
    const { error, team } = await specHelper.runAction<TeamCreate>(
      "team:create",
      connection
    );

    expect(team).toBeFalsy();
    expect(error.message).toMatch(/name "new team" is already in use/);
    expect(error.model).toBe("Team");
    expect(error.whereOpts.id).toBeTruthy();
    expect(error.whereOpts.name).toBeTruthy();
    expect(error.fields).toEqual(["name"]);
    expect(error.code).toBe("unique violation");
  });
});
