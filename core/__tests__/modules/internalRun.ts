import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { internalRun } from "./../../dist/modules/internalRun";
import { Run } from "../..";

describe("modules/internalRun", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
    await api.resque.queue.connection.redis.flushdb();
    await Run.truncate();
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
