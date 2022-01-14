import { helper } from "@grouparoo/spec-helper";
import { Import, GrouparooRecord, RecordProperty, Run } from "../../../../src";
import { api, task, specHelper } from "actionhero";
import { StatusTask } from "../../../../src/tasks/system/status/status";
import { Status } from "../../../../src/modules/status";

describe("tasks/status", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  describe("status", () => {
    beforeAll(async () => {
      await helper.factories.properties();
      await Run.truncate(); // there will be pending runs from `factories.properties()`
    });

    beforeEach(() => {
      process.env.GROUPAROO_RUN_MODE = "test";
    });

    test("it can be enqueued", async () => {
      await task.enqueue("status", {});
      const found = await specHelper.findEnqueuedTasks("status");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("will be complete with no pending items", async () => {
      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      const complete = await instance.checkForComplete(samples);
      expect(complete).toBe(true);
    });

    test("will not be complete with a pending record", async () => {
      const record = await helper.factories.record();
      await record.update({ state: "pending" });

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await record.destroy();
    });

    test("will not be complete with a pending import", async () => {
      const record = await helper.factories.record();
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: record.id } }
      );
      await record.update({ state: "ready" });
      await helper.factories.import(null, null, record.id);

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await record.destroy();
    });

    test("will be complete with an exported import", async () => {
      const record = await helper.factories.record();
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: record.id } }
      );
      await record.update({ state: "ready" });
      const _import = await helper.factories.import(null, null, record.id);
      await _import.update({ state: "complete" });

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(true);
      await record.destroy();
    });

    test("will be complete with an errored import", async () => {
      const record = await helper.factories.record();
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: record.id } }
      );
      await record.update({ state: "ready" });
      const _import = await helper.factories.import(null, null, record.id);
      await _import.update({
        state: "failed",
        processedAt: null,
        errorMessage: "oh no!",
        errorMetadata: "errored",
      });

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(true);
      await record.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const record = await helper.factories.record();
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: record.id } }
      );
      await Run.truncate();
      await record.update({ state: "ready" });
      await helper.factories.export(record);

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await record.destroy();
    });

    test("will not be complete with a pending run", async () => {
      const run = await helper.factories.run(null, { state: "running" });

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await run.destroy();
    });

    test("will not complete with records to delete", async () => {
      const record: GrouparooRecord = await helper.factories.record();
      await record.addOrUpdateProperties({ userId: [null] });
      await RecordProperty.update(
        { state: "ready" },
        { where: { recordId: record.id } }
      );
      await record.update({ state: "ready" });
      await Run.truncate();
      await Import.truncate();

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);

      await record.destroy();
    });

    // test("running the task will create a status sample", async () => {
    //   await api.resque.queue.connection.redis.flushdb();
    //   const instance = new StatusTask();
    //   await instance.getSamples();

    //   const samples = await Status.get();
    //   expect(samples.length).toBe(1);
    // });

    describe("frequency", () => {
      test("running the task will update the frequency for the next run", async () => {
        await api.resque.queue.connection.redis.flushdb();
        const startingFrequency = 1000 * 5;
        api.tasks.tasks["status"].frequency = startingFrequency;

        await specHelper.runFullTask("status", { toStop: false });

        const endingFrequency = api.tasks.tasks["status"].frequency;
        expect(endingFrequency).toBe(1000 * 10);

        const foundTasks = await specHelper.findEnqueuedTasks("status");
        expect(foundTasks.length).toBe(1);
        expect(foundTasks[0].timestamp).toBeGreaterThan(
          new Date().getTime() + startingFrequency
        );
      });
    });
  });
});
