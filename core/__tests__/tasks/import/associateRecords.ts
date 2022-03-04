import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Import,
  Source,
  Schedule,
  GrouparooRecord,
  RecordProperty,
  GrouparooModel,
  Property,
} from "../../../src";

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
    expect(await record.simplifiedProperties()).toEqual(
      expect.objectContaining({
        email: ["toad@example.com"],
        firstName: ["Toad"],
      })
    );

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

  test("duplicate imports for creating the same record properties are handled", async () => {
    await GrouparooRecord.truncate();
    const run = await helper.factories.run(primarySchedule);

    // both imports try to create the 'mario' record at once
    const _importA = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Mario",
      noExist: "here",
    });
    const _importB = await helper.factories.import(run, {
      email: "mario@example.com",
      firstName: "Mario",
      lastName: "Mario",
    });

    expect(_importA.state).toBe("associating");
    expect(_importB.state).toBe("associating");

    await specHelper.runTask("import:associateRecords", {});

    expect(await GrouparooRecord.count()).toBe(1);
    const record = await GrouparooRecord.findOne();
    await record.import();
    await record.update({ state: "pending" });
    const properties = await record.simplifiedProperties();
    expect(properties).toEqual(
      expect.objectContaining({ firstName: ["Mario"], lastName: ["Mario"] })
    );

    await _importA.reload();
    await _importB.reload();
    expect(_importA.state).toBe("importing");
    expect(_importB.state).toBe("importing");

    await run.destroy();
  });

  // Prevent data in Secondary Sources from Creating Records that do not exist in the Primary Sources
  test("prevents import when unable to create record from secondary source", async () => {
    // make a new source and property
    const source = await helper.factories.source();
    await source.setOptions({ table: "otherTable" });
    await source.setMapping({ user_id: "userId" });
    await source.update({ state: "ready" });
    const schedule = await helper.factories.schedule(source);
    const run = await helper.factories.run(schedule);
    const _import = await helper.factories.import(run, {
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

  describe("with another model", () => {
    let otherModel: GrouparooModel;
    let otherSource: Source;
    let otherSchedule: Schedule;
    let otherProperty: Property;

    beforeAll(async () => {
      otherModel = await helper.factories.model({
        id: "other_model",
        name: "other model",
      });
      otherSource = await helper.factories.source(null, {
        modelId: otherModel.id,
      });
      await otherSource.setOptions({ table: "admins" });
      otherProperty = await helper.factories.property(
        otherSource,
        {
          type: "integer",
          unique: true,
          key: "adminId",
        },
        { column: "adminId" }
      );
      otherProperty.update({ state: "ready" });
      await otherSource.setMapping({ admin_id: otherProperty.key });
      await otherSource.update({ state: "ready" });

      otherSchedule = await helper.factories.schedule(otherSource);
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await GrouparooRecord.truncate();
      await RecordProperty.truncate();
      await Import.truncate();
    });

    test("model selection works in batches when primary key values match", async () => {
      const runA = await helper.factories.run(primarySchedule);
      const runB = await helper.factories.run(otherSchedule);

      const _importA = await helper.factories.import(runA, { userId: "1" });
      const _importB = await helper.factories.import(runB, { adminId: "1" });

      await specHelper.runTask("import:associateRecords", {});

      const records = await GrouparooRecord.findAll({
        include: [RecordProperty],
      });

      const recordA = records.find((r) => r.modelId === "mod_profiles");
      const recordB = records.find((r) => r.modelId === "other_model");

      expect(await recordA.simplifiedProperties()).toEqual(
        expect.objectContaining({ userId: [1] })
      );
      expect(await recordB.simplifiedProperties()).toEqual(
        expect.objectContaining({ adminId: [1] })
      );
    });
  });
});
