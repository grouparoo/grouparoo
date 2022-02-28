import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Import } from "../../..";

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
    // mario is ready with no processing imports
    const mario = await helper.factories.record();
    await mario.import();
    await mario.update({ state: "ready" });

    // luigi is exporting with processing imports, but recently
    const luigi = await helper.factories.record();
    await luigi.import();
    await luigi.update({ state: "ready" });
    await Import.create({
      state: "importing",
      recordId: luigi.id,
      importedAt: new Date(),
      creatorId: "foo",
      creatorType: "foo",
    }).then(async (i) => await i.update({ state: "processing" }));

    // toad is exporting with processing imports, but it's been a while
    const toad = await helper.factories.record();
    await toad.import();
    await toad.update({ state: "ready" });
    await Import.create({
      state: "importing",
      recordId: toad.id,
      importedAt: new Date(0),
      creatorId: "foo",
      creatorType: "foo",
    }).then(async (i) => await i.update({ state: "processing" }));

    await specHelper.runTask("records:reEnqueueStuckExportingRecords", {});

    await mario.reload();
    await luigi.reload();
    await toad.reload();

    expect(mario.state).toBe("ready");
    expect(luigi.state).toBe("ready");
    expect(toad.state).toBe("pending");

    await specHelper.runTask("records:makeReady", {});

    await mario.reload();
    await luigi.reload();
    await toad.reload();

    expect(mario.state).toBe("ready");
    expect(luigi.state).toBe("ready");
    expect(toad.state).toBe("ready");

    await mario.destroy();
    await luigi.destroy();
    await toad.destroy();
  });
});
