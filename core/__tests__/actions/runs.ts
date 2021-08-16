import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import { Run, Source, Schedule } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import { RunEdit, RunsList, RunView } from "../../src/actions/runs";

describe("actions/runs", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let connection: Connection;
  let csrfToken: string;
  let scheduleA: Schedule, scheduleB: Schedule;
  let runA: Run, runB: Run;

  beforeAll(async () => {
    await helper.factories.properties();
    await Run.truncate();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;
  });

  beforeAll(async () => {
    scheduleA = await helper.factories.schedule();
    scheduleB = await helper.factories.schedule();

    runA = await helper.factories.run(scheduleA);
    runB = await helper.factories.run(scheduleB);
  });

  test("all runs can be listed", async () => {
    connection.params = {
      csrfToken,
    };

    const { error, runs, total } = await specHelper.runAction<RunsList>(
      "runs:list",
      connection
    );
    expect(error).toBeUndefined();
    expect(total).toBe(2);
    expect(runs.length).toBe(2);

    const ids = runs.map((r) => r.id);
    expect(ids).toContain(runA.id);
    expect(ids).toContain(runB.id);
  });

  test("runs for just a schedule can be listed", async () => {
    connection.params = {
      csrfToken,
      id: scheduleA.id,
    };

    const { error, runs, total } = await specHelper.runAction<RunsList>(
      "runs:list",
      connection
    );
    expect(error).toBeUndefined();
    expect(total).toBe(1);
    expect(runs.length).toBe(1);
    expect(runs[0].id).toBe(runA.id);
  });

  test("when providing a sourceId, the runs for the schedule belonging to that source will be returned", async () => {
    const source = await Source.findOne({
      where: { id: scheduleA.sourceId },
    });

    connection.params = {
      csrfToken,
      id: source.id,
      topic: "source",
    };

    const { error, runs, total } = await specHelper.runAction<RunsList>(
      "runs:list",
      connection
    );
    expect(error).toBeUndefined();
    expect(total).toBe(1);
    expect(runs.length).toBe(1);
    expect(runs[0].id).toBe(runA.id);
  });

  test("a run can be viewed", async () => {
    connection.params = {
      csrfToken,
      id: runA.id,
    };

    const { error, run, quantizedTimeline } =
      await specHelper.runAction<RunView>("run:view", connection);
    expect(error).toBeUndefined();
    expect(run.id).toBe(runA.id);
    expect(quantizedTimeline.length).toBe(25 + 4); // 25 for times, 4
  });

  test("a run can be edited", async () => {
    const _run = await helper.factories.run(scheduleA, { state: "running" });
    expect(_run.state).toBe("running");

    connection.params = {
      csrfToken,
      id: _run.id,
      state: "stopped",
    };

    const { error, run } = await specHelper.runAction<RunEdit>(
      "run:edit",
      connection
    );
    expect(error).toBeUndefined();
    expect(run.id).toBe(_run.id);
    expect(run.state).toBe("stopped");

    await _run.destroy();
  });
});
