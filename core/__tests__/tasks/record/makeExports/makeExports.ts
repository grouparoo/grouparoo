import { helper } from "@grouparoo/spec-helper";
import { api, config, task, specHelper } from "actionhero";
import {
  Group,
  GrouparooRecord,
  RecordProperty,
  Schedule,
  Source,
} from "../../../../src";

describe("tasks/record:makeExports", () => {
  let source: Source;
  let schedule: Schedule;
  let group: Group;

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    source = await Source.findOne();
    schedule = await helper.factories.schedule(source);
  });

  beforeAll(async () => {
    group = await helper.factories.group();
    await group.setRules([
      {
        key: "lastName",
        match: "Mario",
        operation: {
          op: config.sequelize.dialect === "postgres" ? "iLike" : "like",
        },
      },
    ]);
    await group.update({ state: "ready" });
  });

  test("can be enqueued", async () => {
    await task.enqueue("records:makeExports", {});
    const found = await specHelper.findEnqueuedTasks("records:makeExports");
    expect(found.length).toEqual(1);
  });

  test("it will find records which are not ready but have all properties ready", async () => {
    const mario = await helper.factories.record();
    await mario.import();
    await mario.update({ state: "pending" });

    const luigi = await helper.factories.record();
    await luigi.import();
    await luigi.update({ state: "pending" });

    // toad is ready already
    const toad = await helper.factories.record();
    await toad.import();
    await toad.update({ state: "ready" });

    // peach has 1 pending record property
    const peach = await helper.factories.record();
    await peach.import();
    const peachProperty = await RecordProperty.findOne({
      where: { recordId: peach.id },
    });
    await peachProperty.update({ state: "pending" });
    await peach.update({ state: "pending" });

    // bowser has all pending record properties
    const bowser = await helper.factories.record();
    await bowser.import();
    const bowserProperties = await RecordProperty.findAll({
      where: { recordId: bowser.id },
    });
    for (const p of bowserProperties) {
      await p.update({ state: "pending" });
    }
    await bowser.update({ state: "pending" });

    await specHelper.runTask("records:makeExports", {});

    await mario.reload();
    await luigi.reload();
    await toad.reload();
    await peach.reload();
    await bowser.reload();

    expect(mario.state).toBe("ready");
    expect(luigi.state).toBe("ready");
    expect(toad.state).toBe("ready");
    expect(peach.state).toBe("pending");
    expect(bowser.state).toBe("pending");

    expect(mario.readyToExport).toBe(true);
    expect(luigi.readyToExport).toBe(true);
    expect(toad.readyToExport).toBe(false);
    expect(peach.readyToExport).toBe(false);
    expect(bowser.readyToExport).toBe(false);

    await mario.destroy();
    await luigi.destroy();
    await toad.destroy();
    await peach.destroy();
    await bowser.destroy();
  });

  test("it updates the group memberships", async () => {
    const record = await helper.factories.record();
    await record.addOrUpdateProperties({ lastName: ["Mario"] });
    await record.import();
    await record.update({ state: "pending" });

    let groups = await record.$get("groups");
    expect(groups.length).toBe(0);

    await specHelper.runTask("records:makeExports", {});

    await record.reload();
    expect(record.state).toBe("ready");
    expect(record.readyToExport).toBe(true);

    groups = await record.$get("groups");
    expect(groups.length).toBe(1);

    await record.destroy();
  });

  test("it updates the imports new data and updates the run counts", async () => {
    const run = await helper.factories.run(schedule);

    const _importA = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Mario",
      noExist: "here",
    });
    const _importB = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Super",
      lastName: "Mario",
    });

    await specHelper.runTask("import:associateRecord", {
      importId: _importA.id,
    });
    await specHelper.runTask("import:associateRecord", {
      importId: _importB.id,
    });

    const record = await GrouparooRecord.findOne();
    await record.import();
    await record.update({ state: "pending" });

    await _importA.reload();
    await _importB.reload();
    expect(_importA.importedAt).toBeFalsy();
    expect(_importA.state).toBe("importing");
    expect(_importB.importedAt).toBeFalsy();
    expect(_importB.state).toBe("importing");

    expect(run.recordsCreated).toEqual(0);
    expect(run.recordsImported).toEqual(0);

    await specHelper.runTask("records:makeExports", {});

    await record.reload();
    expect(record.state).toBe("ready");
    expect(record.readyToExport).toBe(true);

    await _importA.reload();
    await _importB.reload();
    await run.updateTotals();

    expect(_importA.importedAt).toBeTruthy();
    expect(_importA.state).toBe("complete");

    expect(_importB.importedAt).toBeTruthy();
    expect(_importB.state).toBe("complete");

    expect(run.recordsCreated).toEqual(1);
    expect(run.recordsImported).toEqual(1);
  });

  test("it will optionally mark the imports as exported to complete the lifecycle", async () => {
    const run = await helper.factories.run(schedule);

    const _importA = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Mario",
      noExist: "here",
    });

    await specHelper.runTask("import:associateRecord", {
      importId: _importA.id,
    });

    const record = await GrouparooRecord.findOne();
    await record.import();
    await record.update({ state: "pending" });

    process.env.GROUPAROO_DISABLE_EXPORTS = "true";
    await specHelper.runTask("records:makeExports", {});

    await record.reload();
    expect(record.state).toBe("ready");
    expect(record.readyToExport).toBe(true);

    await _importA.reload();
    expect(_importA.importedAt).toBeTruthy();
    expect(_importA.state).toBe("complete");

    process.env.GROUPAROO_DISABLE_EXPORTS = "false";
  });
});
