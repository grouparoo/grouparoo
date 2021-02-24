import { helper } from "@grouparoo/spec-helper";
import { Run, Schedule } from "../../../src";
import { RunOps } from "../../../src/modules/ops/runs";
import { api, task } from "actionhero";

describe("models/run/isRunEnqueued", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let run: Run;
  let schedule: Schedule;
  beforeAll(async () => {
    await helper.factories.properties();
    schedule = await helper.factories.schedule();
    run = await helper.factories.run(schedule);
  });

  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  test("with nothing enqueued", async () => {
    const enqueued = await RunOps.isRunEnqueued("schedule:run", run.id);
    expect(enqueued).toBe(false);
  });

  test("with a task enqueued", async () => {
    await task.enqueue("schedule:run", { runId: run.id });
    const enqueued = await RunOps.isRunEnqueued("schedule:run", run.id);
    expect(enqueued).toBe(true);
  });

  test("with a task delayed", async () => {
    await task.enqueueIn(1000, "schedule:run", { runId: run.id });
    const enqueued = await RunOps.isRunEnqueued("schedule:run", run.id);
    expect(enqueued).toBe(true);
  });

  // TODO: This is hard to test...
  // test("with a task being worked on", async (done) => {
  //   const worker = specHelper.runFullTask("schedule:run", { runId: run.id });
  //   const enqueued = await RunOps.isRunEnqueued("schedule:run", run.id);
  //   expect(enqueued).toBe(true);
  //   worker.then(() => done());
  // });
});
