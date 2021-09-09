import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import { Run, Schedule, Source } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  ScheduleCreate,
  ScheduleDestroy,
  ScheduleEdit,
  ScheduleFilterOptions,
  ScheduleRun,
  SchedulesRun,
  SchedulesList,
  ScheduleView,
} from "../../src/actions/schedules";

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
      const sessionResponse = await specHelper.runAction<SessionCreate>(
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
        confirmRecords: true,
      };
      const { error, schedule } = await specHelper.runAction<ScheduleCreate>(
        "schedule:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(schedule.id).toBeTruthy();
      expect(schedule.name).toBe("test schedule");
      expect(schedule.confirmRecords).toBe(true);

      id = schedule.id;
    });

    describe("with schedule", () => {
      test("an administrator can list all the schedules", async () => {
        connection.params = {
          csrfToken,
        };
        const { error, schedules, total } =
          await specHelper.runAction<SchedulesList>(
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
          confirmRecords: false,
        };
        const { error, schedule } = await specHelper.runAction<ScheduleEdit>(
          "schedule:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.id).toBeTruthy();
        expect(schedule.name).toBe("new schedule name");
        expect(schedule.state).toBe("draft");
        expect(schedule.confirmRecords).toBe(false);
      });

      test("an administrator can view a schedule", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { error, schedule, pluginOptions } =
          await specHelper.runAction<ScheduleView>("schedule:view", connection);
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
        const { error, options } =
          await specHelper.runAction<ScheduleFilterOptions>(
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
        const { error, schedule } = await specHelper.runAction<ScheduleEdit>(
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
        const { error, schedule } = await specHelper.runAction<ScheduleEdit>(
          "schedule:edit",
          connection
        );
        expect(error).toBeUndefined();
        expect(schedule.state).toBe("ready");
      });

      test("an administrator can request a schedule run and enqueue a runConnection task", async () => {
        await api.resque.queue.connection.redis.flushdb();
        await Run.truncate();

        connection.params = {
          csrfToken,
          id,
        };
        const { error, run } = await specHelper.runAction<ScheduleRun>(
          "schedule:run",
          connection
        );
        expect(error).toBeUndefined();
        expect(run.id).toBeTruthy();

        const tasks = await specHelper.findEnqueuedTasks("schedule:run");
        expect(tasks.length).toBe(1);
        expect(tasks[0].args[0].scheduleId).toBe(id);
      });

      test("an administrator can request to run all schedules and create new runs", async () => {
        await api.resque.queue.connection.redis.flushdb();
        await Run.truncate();

        connection.params = { csrfToken };
        const { error, runs } = await specHelper.runAction<SchedulesRun>(
          "schedules:run",
          connection
        );
        expect(error).toBeUndefined();
        expect(runs.length).toBe(1);

        const tasks = await specHelper.findEnqueuedTasks("schedule:run");
        expect(tasks.length).toBe(1);
        expect(tasks[0].args[0].scheduleId).toBe(id);
      });

      test("an administrator can request to run all schedules and stop running runs", async () => {
        await api.resque.queue.connection.redis.flushdb();
        await Run.truncate();
        const run = await Run.create({
          state: "running",
          creatorType: "schedule",
          creatorId: id,
        });

        connection.params = { csrfToken };
        const { error, runs } = await specHelper.runAction<SchedulesRun>(
          "schedules:run",
          connection
        );
        expect(error).toBeUndefined();
        expect(runs.length).toBe(1);
        expect(runs[0].id).not.toEqual(run.id);
      });

      test("an administrator can request to run some schedules by ID", async () => {
        connection.params = { csrfToken, scheduleIds: [id] };
        const { error, runs } = await specHelper.runAction<SchedulesRun>(
          "schedules:run",
          connection
        );
        expect(error).toBeUndefined();
        expect(runs.length).toBe(1);

        connection.params = { csrfToken, scheduleIds: ["foo"] };
        const { error: errorAgain, runs: runsAgain } =
          await specHelper.runAction<SchedulesRun>("schedules:run", connection);
        expect(errorAgain).toBeUndefined();
        expect(runsAgain.length).toBe(0);
      });

      test("an administrator can destroy a connection", async () => {
        connection.params = {
          csrfToken,
          id: id,
        };

        const destroyResponse = await specHelper.runAction<ScheduleDestroy>(
          "schedule:destroy",
          connection
        );

        expect(destroyResponse.error).toBeUndefined();
        expect(destroyResponse.success).toBe(true);
      });
    });
  });
});
