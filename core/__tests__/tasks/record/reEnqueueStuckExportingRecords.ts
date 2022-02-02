import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";

describe("tasks/records:reEnqueueStuckExportingRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  test("can be enqueued", async () => {
    await task.enqueue("records:reEnqueueStuckExportingRecords", {});
    const found = await specHelper.findEnqueuedTasks(
      "records:reEnqueueStuckExportingRecords"
    );
    expect(found.length).toEqual(1);
  });

  test("it will export records that are stuck in the ready state but still need to be exported", async () => {
    // mario is ready
    const mario = await helper.factories.record();
    await mario.import();
    await mario.update({ state: "ready" });

    // luigi is exporting, but recently
    const luigi = await helper.factories.record();
    await luigi.import();
    await luigi.update({ state: "ready" });
    await luigi.update({ readyToExport: true });

    // luigi is exporting, but it's been a while
    const toad = await helper.factories.record();
    await toad.import();
    await toad.update({ state: "ready" });
    await toad.update({ readyToExport: true });
    await helper.changeTimestamps(
      [toad],
      false,
      new Date(new Date().getTime() - 2 * 60 * 60 * 1000) // 2 hours ago
    );

    await specHelper.runTask("records:reEnqueueStuckExportingRecords", {});

    const foundTasks = await specHelper.findEnqueuedTasks("record:export");
    expect(foundTasks.length).toEqual(1);
    expect(foundTasks[0].args[0]).toEqual({ recordId: toad.id });

    await mario.destroy();
    await luigi.destroy();
    await toad.destroy();
  });
});
