import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Run } from "../../src";
let actionhero;
let connection;
let csrfToken;
let scheduleA, scheduleB;
let runA, runB;

describe("actions/runs", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    await Run.destroy({ truncate: true });

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction(
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

    const { error, runs, total } = await specHelper.runAction(
      "runs:list",
      connection
    );
    expect(error).toBeUndefined();
    expect(total).toBe(2);
    expect(runs.length).toBe(2);

    const guids = runs.map((r) => r.guid);
    expect(guids).toContain(runA.guid);
    expect(guids).toContain(runB.guid);
  });

  test("runs for just a schedule can be listed", async () => {
    connection.params = {
      csrfToken,
      guid: scheduleA.guid,
    };

    const { error, runs, total } = await specHelper.runAction(
      "runs:list",
      connection
    );
    expect(error).toBeUndefined();
    expect(total).toBe(1);
    expect(runs.length).toBe(1);
    expect(runs[0].guid).toBe(runA.guid);
  });

  test("a run can be viewed", async () => {
    connection.params = {
      csrfToken,
      guid: runA.guid,
    };

    const { error, run, quantizedTimeline } = await specHelper.runAction(
      "run:view",
      connection
    );
    expect(error).toBeUndefined();
    expect(run.guid).toBe(runA.guid);
    expect(quantizedTimeline.length).toBe(20 + 4);
  });
});
