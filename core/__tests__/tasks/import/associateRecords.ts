import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Import } from "../../../src";

describe("tasks/import:associateRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Import.truncate();
  });

  test("can be enqueued", async () => {
    await task.enqueue("import:associateRecords", {});
    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecords"
    );
    expect(foundTasks.length).toEqual(1);
  });

  test("it will enqueue new tasks to associate not-yet associated imports", async () => {
    const _import = await helper.factories.import();
    await api.resque.queue.connection.redis.flushdb(); // delete the associate task that was created along with the import

    await specHelper.runTask("import:associateRecords", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecord"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].importId).toBe(_import.id);
  });

  test("it will not include imports that have already been associated to a record", async () => {
    const _import = await helper.factories.import();
    await api.resque.queue.connection.redis.flushdb();
    await _import.update({
      state: "pending",
      recordId: "abc",
      recordAssociatedAt: new Date(),
    });

    await specHelper.runTask("import:associateRecords", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecord"
    );
    expect(foundTasks.length).toBe(0);
  });

  test("it will not include imports that do not have a record, but have been started recently", async () => {
    const _import = await helper.factories.import();
    await api.resque.queue.connection.redis.flushdb();
    await _import.update({ startedAt: new Date() });

    await specHelper.runTask("import:associateRecords", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecord"
    );
    expect(foundTasks.length).toBe(0);
  });

  test("it will include imports that do not have a record, but have been started far in the past (stuck)", async () => {
    const _import = await helper.factories.import();
    await api.resque.queue.connection.redis.flushdb();
    await _import.update({ startedAt: 0 });

    await specHelper.runTask("import:associateRecords", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecord"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].importId).toBe(_import.id);
  });

  test("it will not find an import with a startedAt that was previously enqueued", async () => {
    await helper.factories.import(); // import with nul startedAt

    const _import = await helper.factories.import(); // import with old startedAt
    await _import.update({ startedAt: 0 });

    await specHelper.runTask("import:associateRecords", {}); // first enqueue, sets startedAt
    await api.resque.queue.connection.redis.flushdb();

    await specHelper.runTask("import:associateRecords", {}); // second enqueue, should find no imports

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecord"
    );
    expect(foundTasks.length).toBe(0);
  });

  test("previously complete runs will be moved back to running if an import they created is found", async () => {
    const schedule = await helper.factories.schedule();
    const run = await helper.factories.run(schedule);
    const _import = await helper.factories.import(run);
    await run.update({ state: "complete" });

    await run.reload();
    expect(run.state).toBe("complete");

    await api.resque.queue.connection.redis.flushdb();
    await specHelper.runTask("import:associateRecords", {});

    await run.reload();
    expect(run.state).toBe("running");
  });

  test("imports that have an error will not be tried again", async () => {
    const _import = await helper.factories.import();
    await api.resque.queue.connection.redis.flushdb();

    await _import.update({ state: "failed", errorMessage: "I broke" });

    await specHelper.runTask("import:associateRecords", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateRecord"
    );
    expect(foundTasks.length).toBe(0);
  });
});
