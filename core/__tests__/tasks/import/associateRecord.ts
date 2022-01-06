import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooRecord,
  RecordProperty,
  Run,
  Import,
  Schedule,
  Source,
} from "../../../src";

describe("tasks/import:associateRecord", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  let primarySource: Source;
  let primarySchedule: Schedule;

  describe("import:associateRecord", () => {
    beforeAll(async () => {
      primarySource = await Source.findOne();
      primarySchedule = await helper.factories.schedule(primarySource);
    });

    test("can be enqueued", async () => {
      await task.enqueue("import:associateRecord", { importId: "abc123" });
      const found = await specHelper.findEnqueuedTasks(
        "import:associateRecord"
      );
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("does not throw if the import cannot be found", async () => {
      await specHelper.runTask("import:associateRecord", {
        importId: "missing",
      });
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

      await specHelper.runTask("import:associateRecord", {
        importId: _import.id,
      });

      await _import.reload();
      const record = await GrouparooRecord.findOne();
      expect(record).toBeTruthy();
      expect(_import.recordId).toBe(record.id);
      expect(_import.recordAssociatedAt).toBeTruthy();
      expect(_import.state).toBe("importing");

      expect(_import.oldRecordProperties).toEqual({
        email: ["toad@example.com"],
        firstName: [null],
        isVIP: [null],
        lastLoginAt: [null],
        lastName: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
        userId: [null],
      });
      expect(_import.oldGroupIds).toEqual([]);
      expect(_import.newRecordProperties).toEqual({});
      expect(_import.newGroupIds).toEqual([]);

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

      let found = await specHelper.findEnqueuedTasks("import:associateRecord");
      expect(found.length).toEqual(1);
      expect(found[0].args[0]).toEqual({ importId: _import.id, attempts: 0 });

      // attempt 1
      await specHelper.runTask("import:associateRecord", found[0].args[0]);

      await _import.reload();
      expect(_import.state).toBe("associating");
      expect(_import.errorMessage).toBeFalsy();
      found = await specHelper.findEnqueuedTasks("import:associateRecord");
      expect(found.length).toEqual(2);
      expect(found[1].args[0]).toEqual({ importId: _import.id, attempts: 1 });

      // attempt 2
      await specHelper.runTask("import:associateRecord", found[1].args[0]);

      await _import.reload();
      expect(_import.state).toBe("associating");
      expect(_import.errorMessage).toBeFalsy();
      found = await specHelper.findEnqueuedTasks("import:associateRecord");
      expect(found.length).toEqual(3);
      expect(found[2].args[0]).toEqual({ importId: _import.id, attempts: 2 });

      // attempt 3
      await specHelper.runTask("import:associateRecord", found[2].args[0]);

      await _import.reload();
      expect(_import.state).toBe("failed");
      expect(_import.errorMessage).toMatch(
        /there are no unique record properties provided in {"thing":"stuff"}/
      );
      const errorMetadata = JSON.parse(_import.errorMetadata);
      expect(errorMetadata.message).toMatch(
        /there are no unique record properties provided in {"thing":"stuff"}/
      );
      expect(errorMetadata.step).toBe("import:associateRecord");
      expect(errorMetadata.stack).toMatch(
        /findOrCreateByUniqueRecordProperties/
      );
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

      await specHelper.runTask("import:associateRecord", {
        importId: _import.id,
      });

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
      const run: Run = await helper.factories.run(schedule);
      const _import: Import = await helper.factories.import(run, {
        thing: "stuff",
        userId: 99999999, // doesn't exist in source
      });

      await specHelper.runTask("import:associateRecord", {
        importId: _import.id,
        attempts: 3,
      });

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
});
