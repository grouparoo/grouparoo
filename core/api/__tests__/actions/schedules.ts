import { helper } from "../utils/specHelper";
import { specHelper } from "actionhero";
import { Source } from "../../src/models/Source";

let actionhero;
let guid;
let source: Source;

describe("actions/schedules", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      // sign in
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;

      source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    test("an administrator can create a new schedule", async () => {
      connection.params = {
        csrfToken,
        name: "test schedule",
        type: "test-plugin-import",
        sourceGuid: source.guid,
        recurring: false,
      };
      const { error, schedule } = await specHelper.runAction(
        "schedule:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(schedule.guid).toBeTruthy();
      expect(schedule.name).toBe("test schedule");

      guid = schedule.guid;
    });

    describe("with schedule", () => {
      test("an administrator can list all the schedules", async () => {
        connection.params = {
          csrfToken,
        };
        const { error, schedules, total } = await specHelper.runAction(
          "schedules:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedules.length).toBe(1);
        expect(schedules[0].name).toBe("test schedule");
        expect(total).toBe(1);
      });

      test("an administrator can edit a schedule", async () => {
        connection.params = {
          csrfToken,
          guid,
          name: "new schedule name",
        };
        const { error, schedule } = await specHelper.runAction(
          "schedule:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.guid).toBeTruthy();
        expect(schedule.name).toBe("new schedule name");
      });

      test("an administrator can view a schedule", async () => {
        connection.params = {
          csrfToken,
          guid,
        };
        const { error, schedule, pluginOptions } = await specHelper.runAction(
          "schedule:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.guid).toBeTruthy();
        expect(schedule.name).toBe("new schedule name");

        // the app & source should be included
        expect(schedule.source.guid).toBeTruthy();
        expect(schedule.source.type).toBe("test-plugin-import");
        expect(schedule.source.app.guid).toBeTruthy();
        expect(schedule.source.app.type).toBe("test-plugin-app");

        expect(pluginOptions[0].key).toBe("maxColumn");
      });

      test("an administrator can request a schedule run and enqueue a runConnection task", async () => {
        connection.params = {
          csrfToken,
          guid,
        };
        const { error, success } = await specHelper.runAction(
          "schedule:run",
          connection
        );
        expect(error).toBeUndefined();
        expect(success).toBe(true);

        const tasks = await specHelper.findEnqueuedTasks("schedule:run");
        expect(tasks.length).toBe(1);
        expect(tasks[0].args[0].scheduleGuid).toBe(guid);
      });

      test("an administrator can destroy a connection", async () => {
        connection.params = {
          csrfToken,
          guid: guid,
        };

        const destroyResponse = await specHelper.runAction(
          "schedule:destroy",
          connection
        );

        expect(destroyResponse.error).toBeUndefined();
        expect(destroyResponse.success).toBe(true);
      });
    });
  });
});
