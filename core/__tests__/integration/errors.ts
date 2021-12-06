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
    expect(error).toEqual({
      message: "name must be unique",
      code: "unique violation",
      fields: ["name"],
      sql: 'INSERT INTO "teams" ("id","name","permissionAllRead","permissionAllWrite","createdAt","updatedAt") VALUES ($1,$2,$3,$4,$5,$6) RETURNING "id","name","locked","permissionAllRead","permissionAllWrite","createdAt","updatedAt";',
    });
  });
});
