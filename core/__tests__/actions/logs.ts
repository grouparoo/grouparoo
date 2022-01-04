import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { SessionCreate } from "../../src/actions/session";
import { LogsList } from "../../src/actions/logs";
import { GrouparooRecord } from "../../src/models/GrouparooRecord";

describe("actions/logs", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
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

    test("searching for records returns GrouparooRecords", async () => {
      const record: GrouparooRecord = await helper.factories.record();
      connection.params = {
        csrfToken,
        topic: "record",
      };
      const { error, logs } = await specHelper.runAction<LogsList>(
        "logs:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(logs.length).toEqual(1);
      await record.destroy();
    });
  });
});
