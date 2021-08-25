import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { SessionCreate } from "../../src/actions/session";
import { LogsList } from "../../src/actions/logs";

describe("actions/logs", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view the system logs", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, logs, total } = await specHelper.runAction<LogsList>(
        "logs:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(logs.length).toBeGreaterThanOrEqual(4);
      expect(total).toBeGreaterThanOrEqual(4);

      const teamMemberLogs = logs.filter((log) => log.topic === "teamMember");
      const teamLogs = logs.filter((log) => log.topic === "team");

      expect(teamMemberLogs.length).toBeGreaterThanOrEqual(1);
      expect(teamLogs.length).toBeGreaterThanOrEqual(1);
    });

    test("a reader can ask for logs only of a specific topic", async () => {
      connection.params = {
        csrfToken,
        topic: "teamMember",
      };
      const { error, logs } = await specHelper.runAction<LogsList>(
        "logs:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(logs.length).toBeGreaterThanOrEqual(3);
    });

    test("a reader can ask for logs about a record and also see logs about properties", async () => {
      const record = await helper.factories.record();
      await record.buildNullProperties();

      connection.params = {
        csrfToken,
        ownerId: record.id,
      };

      const { error, logs } = await specHelper.runAction<LogsList>(
        "logs:list",
        connection
      );

      expect(error).toBeUndefined();

      expect(logs.length).toBeGreaterThan(1);
      expect(logs.reverse()[0].topic).toBe("grouparooRecord");
      expect(logs.reverse()[0].verb).toBe("create");
      expect(logs.reverse()[1].topic).toBe("recordProperty");
      expect(logs.reverse()[1].verb).toBe("create");
    });
  });
});
