import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
let actionhero;

describe("actions/logs", () => {
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

  describe("reader signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view the system logs", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, logs, total } = await specHelper.runAction(
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
      const { error, logs } = await specHelper.runAction(
        "logs:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(logs.length).toBeGreaterThanOrEqual(3);
    });

    test("a reader can ask for logs about a profile", async () => {
      const profile = await helper.factories.profile();
      connection.params = {
        csrfToken,
        ownerGuid: profile.guid,
      };

      const { error, logs } = await specHelper.runAction(
        "logs:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(logs.length).toBe(1);
      expect(logs[0].topic).toBe("profile");
      expect(logs[0].verb).toBe("create");
    });
  });
});
