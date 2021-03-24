import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Import } from "../../../src";

describe("tasks/import:associateProfiles", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Import.truncate();
  });

  test("can be enqueued", async () => {
    await task.enqueue("import:associateProfiles", {});
    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateProfiles"
    );
    expect(foundTasks.length).toEqual(1);
  });

  test("it will enqueue new tasks to associate not-yet associated imports", async () => {
    const _import = await helper.factories.import();
    // delete the associate task that was created along with the import
    await api.resque.queue.connection.redis.flushdb();

    await specHelper.runTask("import:associateProfiles", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateProfile"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].importId).toBe(_import.id);
  });

  test("previously complete runs will be moved back to running if an import they created is found", async () => {
    const schedule = await helper.factories.schedule();
    const run = await helper.factories.run(schedule);
    const _import = await helper.factories.import(run);
    await run.update({ state: "complete" });

    await run.reload();
    expect(run.state).toBe("complete");

    await api.resque.queue.connection.redis.flushdb();
    await specHelper.runTask("import:associateProfiles", {});

    await run.reload();
    expect(run.state).toBe("running");
  });

  test("imports that have an error will not be tried again", async () => {
    const _import = await helper.factories.import();
    // delete the associate task that was created along with the import
    await api.resque.queue.connection.redis.flushdb();

    await _import.update({ errorMessage: "I broke" });

    await specHelper.runTask("import:associateProfiles", {});

    const foundTasks = await specHelper.findEnqueuedTasks(
      "import:associateProfile"
    );
    expect(foundTasks.length).toBe(0);
  });
});
