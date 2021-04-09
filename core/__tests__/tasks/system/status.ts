import { helper } from "@grouparoo/spec-helper";
import { Run } from "../../../src";
import { api, task, specHelper } from "actionhero";
import { StatusTask } from "../../../src/tasks/system/status";
import { Status } from "../../../src/modules/status";

describe("tasks/status", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  describe("status", () => {
    beforeAll(async () => {
      await helper.factories.properties();
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
      await Run.truncate(); // there will be pending runs from `factories.properties()`

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      const complete = await instance.checkForComplete(samples);
      expect(complete).toBe(true);
    });

    test("will not be complete with a pending profile", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "pending" });

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending import", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "ready" });
      await helper.factories.import(null, { profileId: profile.id });

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "ready" });
      await helper.factories.export(profile);

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const run = await helper.factories.run(null, { state: "running" });

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await run.destroy();
    });

    test("running the task will create a status sample", async () => {
      await api.resque.queue.connection.redis.flushdb();
      const instance = new StatusTask();
      await instance.getSamples();

      const samples = await Status.get();
      expect(samples.length).toBe(1);
    });

    test("running the task will update the frequency for the next run", async () => {
      await api.resque.queue.connection.redis.flushdb();
      const startingFrequency = api.tasks.tasks["status"].frequency;
      expect(startingFrequency).toBe(1000 * 5);

      await specHelper.runFullTask("status", {});

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
