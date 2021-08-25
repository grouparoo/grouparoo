import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
<<<<<<< HEAD:core/__tests__/tasks/record/enqueueExports/enqueueExports.ts
import { Import, Profile, ProfileProperty, Property } from "../../../../src";
=======
import {
  Import,
  plugin,
  GrouparooRecord,
  RecordProperty,
  Property,
} from "../../../src";
>>>>>>> f11e94f87 (WIP core action tests):core/__tests__/tasks/record/enqueueExports.ts

describe("tasks/records:enqueueExports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

<<<<<<< HEAD:core/__tests__/tasks/record/enqueueExports/enqueueExports.ts
  describe("profiles:enqueueExports", () => {
=======
  afterEach(async () => {
    await plugin.updateSetting("core", "runs-record-batch-size", 100);
  });

  describe("records:enqueueExports", () => {
>>>>>>> f11e94f87 (WIP core action tests):core/__tests__/tasks/record/enqueueExports.ts
    test("can be enqueued", async () => {
      await task.enqueue("records:enqueueExports", {
        recordId: "abc123",
      });
      const found = await specHelper.findEnqueuedTasks(
        "records:enqueueExports"
      );
      expect(found.length).toEqual(1);
    });

    test("it will not export the record if it is not ready", async () => {
      const record = await helper.factories.record();
      await record.import();
      await record.update({ state: "pending" });

      const _import: Import = await helper.factories.import(
        null,
        {},
        record.id
      );
      await _import.update({
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("records:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("record:export");
      expect(foundTasks.length).toBe(0);

      await record.destroy();
    });

    test("it will not export the record if a record property is not ready", async () => {
      const record = await helper.factories.record();
      await record.import();
      await record.update({ state: "ready" });

      const _import: Import = await helper.factories.import(
        null,
        {},
        record.id
      );
      await _import.update({
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      const emailProperty = await Property.findOne({ where: { key: "email" } });
      const recordProperty = await RecordProperty.findOne({
        where: { recordId: record.id, propertyId: emailProperty.id },
      });
      await recordProperty.update({ state: "pending" });

      await specHelper.runTask("records:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("record:export");
      expect(foundTasks.length).toBe(0);

      await record.destroy();
    });

    test("it will find records that are ready and have an import pending for export", async () => {
      // mario is ready and has an import pending to export
      const mario: GrouparooRecord = await helper.factories.record();
      await mario.import();
      await mario.update({ state: "ready" });
      const marioImport: Import = await helper.factories.import(
        null,
        {},
        mario.id
      );
      await marioImport.update({
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      // luigi is ready, but his import has not been marked completed yet
      const luigi: GrouparooRecord = await helper.factories.record();
      await luigi.import();
      await luigi.update({ state: "ready" });
      const luigiImport: Import = await helper.factories.import(
        null,
        {},
        luigi.id
      );
      await luigiImport.update({
        groupsUpdatedAt: null,
        recordUpdatedAt: null,
        exportedAt: null,
      });

      // toad has a pending import, but is not ready
      const toad = await helper.factories.record();
      await toad.import();
      await toad.update({ state: "pending" });
      const toadImport: Import = await helper.factories.import(
        null,
        {},
        toad.id
      );
      await toadImport.update({
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("records:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("record:export");
      expect(foundTasks.length).toEqual(1);
      expect(foundTasks[0].args[0]).toEqual({
        force: false,
        recordId: mario.id,
      });

      await mario.destroy();
      await luigi.destroy();
      await toad.destroy();
    });
<<<<<<< HEAD:core/__tests__/tasks/record/enqueueExports/enqueueExports.ts
=======

    test("batch size can be configured with a setting", async () => {
      await plugin.updateSetting("core", "runs-record-batch-size", 1);

      const mario: GrouparooRecord = await helper.factories.record();
      await mario.import();
      await mario.update({ state: "ready" });
      const marioImport: Import = await helper.factories.import(
        null,
        {},
        mario.id
      );
      await marioImport.update({
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      const luigi: GrouparooRecord = await helper.factories.record();
      await luigi.import();
      await luigi.update({ state: "ready" });
      const luigiImport: Import = await helper.factories.import(
        null,
        {},
        luigi.id
      );
      await luigiImport.update({
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("records:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("record:export");
      expect(foundTasks.length).toEqual(1);

      await mario.destroy();
      await luigi.destroy();
    });
>>>>>>> f11e94f87 (WIP core action tests):core/__tests__/tasks/record/enqueueExports.ts
  });
});
