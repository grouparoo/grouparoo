import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Source } from "../../src";

describe("actions/schedules", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;
  let source: Source;

  beforeAll(async () => {
    await helper.factories.properties();

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
        sourceId: source.id,
        recurring: false,
      };
      const { error, schedule } = await specHelper.runAction(
        "schedule:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(schedule.id).toBeTruthy();
      expect(schedule.name).toBe("test schedule");

      id = schedule.id;
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
          id,
          name: "new schedule name",
        };
        const { error, schedule } = await specHelper.runAction(
          "schedule:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.id).toBeTruthy();
        expect(schedule.name).toBe("new schedule name");
        expect(schedule.state).toBe("draft");
      });

      test("an administrator can view a schedule", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { error, schedule, pluginOptions } = await specHelper.runAction(
          "schedule:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.id).toBeTruthy();
        expect(schedule.name).toBe("new schedule name");

        expect(pluginOptions[0].key).toBe("maxColumn");
      });

      test("an administrator can view the filter options for a schedule", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { error, options } = await specHelper.runAction(
          "schedule:filterOptions",
          connection
        );

        expect(error).toBeUndefined();
        expect(options).toEqual([
          {
            key: "id",
            ops: ["greater than", "less than"],
            canHaveRelativeMatch: false,
          },
        ]);
      });

      test("an administrator can set the filters for a schedule", async () => {
        connection.params = {
          csrfToken,
          id,
          filters: [{ key: "id", op: "greater than", match: 6 }],
        };
        const { error, schedule } = await specHelper.runAction(
          "schedule:edit",
          connection
        );

        expect(error).toBeUndefined();
        expect(schedule.filters).toEqual([
          {
            key: "id",
            match: "6",
            op: "greater than",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ]);
      });

      test("an schedule can be made ready", async () => {
        connection.params = {
          csrfToken,
          id,
          options: { maxColumn: "createdAt" },
          state: "ready",
        };
        const { error, schedule } = await specHelper.runAction(
          "schedule:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.state).toBe("ready");
      });

      test("an administrator can request a schedule run and enqueue a runConnection task", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { error, success } = await specHelper.runAction(
          "schedule:run",
          connection
        );
        expect(error).toBeUndefined();
        expect(success).toBe(true);

        const tasks = await specHelper.findEnqueuedTasks("schedule:run");
        expect(tasks.length).toBe(1);
        expect(tasks[0].args[0].scheduleId).toBe(id);
      });

      test("an administrator can destroy a connection", async () => {
        connection.params = {
          csrfToken,
          id: id,
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
