import { helper } from "../utils/specHelper";
import { task, specHelper } from "actionhero";
import { internalRun } from "./../../src/modules/internalRun";
import { Run } from "../../src/models/Run";

let actionhero, api;

describe("modules/internalRun", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
    await helper.factories.profilePropertyRules();
    await api.resque.queue.connection.redis.flushdb();
    await Run.destroy({ truncate: true });
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("an internal run is created and enqueued", async () => {
    await internalRun("creator", "abc123");

    const runs = await Run.findAll();
    expect(runs.length).toBe(1);
    expect(runs[0].creatorGuid).toBe("abc123");

    const found = await specHelper.findEnqueuedTasks("run:internalRun");
    expect(found.length).toEqual(1);
    expect(found[0].args[0].runGuid).toBe(runs[0].guid);
  });

  test("adding a new internal run will stop other internal runs for the same creator type", async () => {
    const previousRuns = await Run.findAll({
      where: { creatorType: "creator" },
    });
    expect(previousRuns.length).toBe(1);
    expect(previousRuns[0].state).toBe("running");

    const run = await internalRun("creator", "something else");
    expect(run.state).toBe("running");
    await previousRuns[0].reload();
    expect(previousRuns[0].state).toBe("stopped");
  });
});
