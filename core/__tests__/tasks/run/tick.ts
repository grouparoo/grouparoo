import { helper } from "@grouparoo/spec-helper";
import { task, api, specHelper } from "actionhero";
import { Run } from "../../../src";
import { internalRun } from "../../../src/modules/internalRun";

describe("tasks/run:tick", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeEach(async () => await Run.truncate());

  test("complete runs will not be run", async () => {
    const run = await helper.factories.run(null, { state: "complete" });
    await setUpdatedAt(run);

    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(0);
  });

  test("stopped runs will not be run", async () => {
    const run = await helper.factories.run(null, { state: "stopped" });
    await setUpdatedAt(run);

    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(0);
  });

  test("running runs run recently will not be enqueued", async () => {
    const run = await helper.factories.run(null, { state: "running" });
    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(0);
  });

  test("running runs which are being worked on will not be enqueued", async () => {
    const run = await helper.factories.run(null, { state: "running" });
    await setUpdatedAt(run);

    await task.enqueue("schedule:run", { runId: run.id });
    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(0);
  });

  test("running group runs will be enqueued", async () => {
    const group = await helper.factories.group();
    const run = await helper.factories.run(group, { state: "running" });
    await setUpdatedAt(run);

    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(1);

    const foundTasks = await specHelper.findEnqueuedTasks("group:run");
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].runId).toBe(run.id);
  });

  test("running schedule runs will be enqueued", async () => {
    const schedule = await helper.factories.schedule();
    const run = await helper.factories.run(schedule, { state: "running" });
    await setUpdatedAt(run);

    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(1);

    const foundTasks = await specHelper.findEnqueuedTasks("schedule:run");
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].runId).toBe(run.id);
  });

  test("running internal runs will be enqueued", async () => {
    const run = await internalRun("test", "test");
    await setUpdatedAt(run);

    const enqueued = await specHelper.runTask("run:tick", {});
    expect(enqueued).toBe(1);

    const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].runId).toBe(run.id);
  });
});

async function setUpdatedAt(run: Run, timestamp = "1900-01-01 12:13:14") {
  return api.sequelize.query(
    `UPDATE runs SET "updatedAt" = '${timestamp}' WHERE id = '${run.id}'`
  );
}
