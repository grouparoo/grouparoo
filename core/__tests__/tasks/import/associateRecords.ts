import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { RecordProperty } from "../../../dist";
import { Import, Source, Schedule, GrouparooRecord } from "../../../src";

describe("tasks/import:associateRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  let primarySource: Source;
  let primarySchedule: Schedule;

  beforeAll(async () => {
    primarySource = await Source.findOne();
    primarySchedule = await helper.factories.schedule(primarySource);
  });

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

  test("it will not include imports that have already been associated to a record", async () => {
    const _import = await helper.factories.import();
    await api.resque.queue.connection.redis.flushdb();
    await _import.update({
      state: "importing",
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

    await _import.reload();
    expect(_import.createdAt).not.toBeNull();
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

  test("it will create a new record from provided import data and update the run if present", async () => {
    const run = await helper.factories.run(primarySchedule);

    const _import = await helper.factories.import(run, {
      email: "toad@example.com",
      firstName: "Toad",
    });
    expect(_import.state).toBe("associating");
    expect(_import.recordId).toBeFalsy();
    expect(_import.recordAssociatedAt).toBeFalsy();

    let recordsCount = await GrouparooRecord.count();
    expect(recordsCount).toBe(0);

    await specHelper.runTask("import:associateRecords", {});

    await _import.reload();
    const record = await GrouparooRecord.findOne();
    expect(record).toBeTruthy();
    expect(_import.recordId).toBe(record.id);
    expect(_import.recordAssociatedAt).toBeTruthy();
    expect(_import.state).toBe("importing");

    await run.updateTotals();

    expect(run.importsCreated).toBe(1);
    expect(run.recordsCreated).toBe(1);
    expect(run.recordsImported).toBe(0);
  });

  test("if there is an error, the import will have the error appended after a few attempts", async () => {
    const run = await helper.factories.run(primarySchedule);
    const _import = await helper.factories.import(run, {
      thing: "stuff",
    });

    await specHelper.runTask("import:associateRecords", {});

    await _import.reload();
    expect(_import.state).toBe("failed");
    expect(_import.errorMessage).toMatch(
      /there are no unique record properties provided in {"thing":"stuff"}/
    );
    const errorMetadata = JSON.parse(_import.errorMetadata);
    expect(errorMetadata.message).toMatch(
      /there are no unique record properties provided in {"thing":"stuff"}/
    );
    expect(errorMetadata.step).toBe("processPendingImportsForAssociation");
    expect(errorMetadata.stack).toMatch(/findOrCreateByUniqueRecordProperties/);
  });

  test("the record and properties should be marked as pending", async () => {
    const property = await RecordProperty.findOne({
      where: { rawValue: "toad@example.com" },
    });
    expect(property.state).toEqual("pending");

    const record = await GrouparooRecord.findById(property.recordId);
    expect(record.state).toEqual("pending");
  });

  test("it will set properties included in the import data", async () => {
    await GrouparooRecord.truncate();

    const run = await helper.factories.run(primarySchedule);

    const _import = await helper.factories.import(run, {
      email: "bowserjr@example.com",
      firstName: "Bowser",
      lastName: "Jr",
      someNonexistentProp: "Hi there",
    });
    expect(_import.state).toBe("associating");
    expect(_import.recordId).toBeFalsy();
    expect(_import.recordAssociatedAt).toBeFalsy();

    let recordsCount = await GrouparooRecord.count();
    expect(recordsCount).toBe(0);

    await specHelper.runTask("import:associateRecords", {});

    await _import.reload();
    const record = await GrouparooRecord.findOne();
    expect(record).toBeTruthy();
    expect(_import.state).toBe("importing");
    expect(_import.recordId).toBe(record.id);
    expect(_import.recordAssociatedAt).toBeTruthy();

    const properties = await record.simplifiedProperties();
    expect(properties.email).toEqual(["bowserjr@example.com"]);
    expect(properties.firstName).toEqual(["Bowser"]);
    expect(properties.lastName).toEqual(["Jr"]);
    expect(properties.someNonexistentProp).toBeUndefined();
  });

  // Prevent data in Secondary Sources from Creating Records that do not exist in the Primary Sources
  test("prevents import when unable to create record from secondary source", async () => {
    // make a new source and property
    const source: Source = await helper.factories.source();
    await source.setOptions({ table: "otherTable" });
    await source.setMapping({ user_id: "userId" });
    await source.update({ state: "ready" });
    const schedule: Schedule = await helper.factories.schedule(source);
    const run = await helper.factories.run(schedule);
    const _import: Import = await helper.factories.import(run, {
      thing: "stuff",
      userId: 99999999, // doesn't exist in source
    });

    await specHelper.runTask("import:associateRecords", {});

    await _import.reload();
    expect(_import.state).toBe("failed");
    expect(_import.errorMessage).toMatch(
      /could not create a new record because no record property/
    );

    // cleanup
    await _import.destroy();
    await run.destroy();
    await schedule.destroy();
    await source.destroy();
  });
});
