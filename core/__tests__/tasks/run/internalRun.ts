process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "100";

import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import {
  Property,
  Run,
  GrouparooRecord,
  RecordProperty,
  Import,
} from "../../../src";

describe("tasks/run:internalRun", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let record: GrouparooRecord;
  let otherRecord: GrouparooRecord;

  describe("run:internalRun", () => {
    beforeAll(async () => {
      await Run.truncate();
      record = await helper.factories.record();
      await record.buildNullProperties();

      const otherModel = await helper.factories.model({ name: "other model" });
      otherRecord = await GrouparooRecord.create({ modelId: otherModel.id });
    });

    beforeEach(async () => {
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: [record.id, otherRecord.id] } }
      );
      await record.reload({ include: RecordProperty });
      await otherRecord.reload({ include: RecordProperty });
      await record.update({ state: "ready" });
      await otherRecord.update({ state: "ready" });
    });

    beforeEach(async () => {
      await Import.truncate();
    });

    test("the task will mark every record as pending by default", async () => {
      const run = await internalRun("teamMember", "testId");
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await run.reload();
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(2);
      expect(run.method).toBe("internalRun");

      await record.reload({
        include: RecordProperty,
      });
      expect(record.state).toBe("pending");
      record.recordProperties.forEach((p) => expect(p.state).toBe("pending"));

      const imports = await Import.findAll();
      expect(imports.map((i) => i.recordId).sort()).toEqual(
        [record.id, otherRecord.id].sort()
      );
    });

    test("if the run was created due to a property, only those recordProperties will become pending", async () => {
      const property = await Property.findOne({ where: { key: "email" } });
      const run = await internalRun("property", property.id);
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await run.reload();
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(1);
      expect(run.method).toBe("internalRun");

      await record.reload({
        include: RecordProperty,
      });
      expect(record.state).toBe("pending");
      expect(new Set(record.recordProperties.map((p) => p.state))).toEqual(
        new Set(["ready", "pending"])
      );
      for (const recordProperty of record.recordProperties) {
        if (recordProperty.propertyId === property.id) {
          expect(recordProperty.state).toBe("pending");
        } else {
          expect(recordProperty.state).toBe("ready");
        }
      }

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].recordId).toBe(record.id);
    });

    test("a run can be stopped outside of the task and not enqueue another task", async () => {
      const property = await Property.findOne();
      const run = await helper.factories.run(property, {
        creatorType: "test",
        creatorId: "test",
        state: "running",
      });
      expect(run.state).toBe("running");

      await run.stop();

      await task.enqueue("run:internalRun", { runId: run.id });
      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("run:internalRun", foundTasks[0].args[0]);

      const foundTasksAgain = await specHelper.findEnqueuedTasks(
        "run:internalRun"
      );
      expect(foundTasksAgain.length).toBe(1); // not re-enqueued
    });
  });
});
