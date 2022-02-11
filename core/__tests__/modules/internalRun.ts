import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { internalRun } from "./../../src/modules/internalRun";
import { Run } from "../../src";

describe("modules/internalRun", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
    await api.resque.queue.connection.redis.flushdb();
    await Run.truncate();
  });

  test("an internal run is created and enqueued", async () => {
    await internalRun("teamMember", "abc123");

    const runs = await Run.findAll();
    expect(runs.length).toBe(1);
    expect(runs[0].creatorId).toBe("abc123");
  });

  test("adding a new internal run will stop other internal runs for the same creator type", async () => {
    const previousRuns = await Run.findAll({
      where: { creatorType: "teamMember" },
    });
    expect(previousRuns.length).toBe(1);
    expect(previousRuns[0].state).toBe("running");

    const run = await internalRun("teamMember", "something else");
    expect(run.state).toBe("running");
    await previousRuns[0].reload();
    expect(previousRuns[0].state).toBe("stopped");
  });
});
