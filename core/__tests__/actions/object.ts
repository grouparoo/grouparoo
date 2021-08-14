import { helper } from "@grouparoo/spec-helper";
import { specHelper, Connection } from "actionhero";
import { SessionCreate } from "../../src/actions/session";
import { TeamCreate } from "../../src/actions/teams";
import { ObjectFind } from "../../src/actions/object";
import { AppCreate } from "../../src/actions/apps";

describe("actions/object", () => {
  helper.grouparooTestServer({
    truncate: true,
    resetSettings: true,
    enableTestPlugin: true,
  });

  let connection: Connection;
  let csrfToken: string;
  let teamId: string;
  let appId: string;

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

  test("an administrator can create a new team", async () => {
    connection.params = {
      csrfToken,
      name: "new team",
    };
    const { team } = await specHelper.runAction<TeamCreate>(
      "team:create",
      connection
    );
    teamId = team.id;
  });

  test("an administrator can create a new app", async () => {
    connection.params = {
      csrfToken,
      name: "test app",
      type: "test-plugin-app",
      options: { fileId: "abc123" },
    };
    const { app, error } = await specHelper.runAction<AppCreate>(
      "app:create",
      connection
    );
    appId = app.id;
  });

  describe("we can search for objects across many tables", () => {
    test("can find apps", async () => {
      connection.params = { csrfToken, id: appId };
      const { records, error } = await specHelper.runAction<ObjectFind>(
        "object:find",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(1);
      expect(records[0].tableName).toBe("apps");
    });

    test("can find teams", async () => {
      connection.params = { csrfToken, id: teamId };
      const { records, error } = await specHelper.runAction<ObjectFind>(
        "object:find",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(1);
      expect(records[0].tableName).toBe("teams");
    });

    test("will return empty array if object cannot be found", async () => {
      connection.params = { csrfToken, id: "foo" };
      const { records, error } = await specHelper.runAction<ObjectFind>(
        "object:find",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(0);
    });
  });
});
