import { helper } from "@grouparoo/spec-helper";
import { Run, Log, Import, Export, plugin } from "../../../src";
import { api, task, specHelper } from "actionhero";
import { StatusTask } from "../../../src/tasks/system/status";

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

    test("it will have no recurring frequency when the server is started", async () => {
      const instance = new StatusTask();
      expect(instance.frequency).toBe(0);
    });

    test("it will have a recurring frequency when the server is running", async () => {
      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      expect(instance.frequency).toBeGreaterThan(0);
    });

    test("will be complete with no pending items", async () => {
      await Run.truncate(); // there will be pending runs from `factories.properties()`

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const complete = await instance.checkForComplete();
      expect(complete).toBe(true);
    });

    test("will not be complete with a pending profile", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "pending" });

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      expect(await instance.checkForComplete()).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending import", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "ready" });
      await helper.factories.import(null, { profileId: profile.id });

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      expect(await instance.checkForComplete()).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "ready" });
      await helper.factories.export(profile);

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      expect(await instance.checkForComplete()).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const run = await helper.factories.run(null, { state: "running" });

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      expect(await instance.checkForComplete()).toBe(false);
      await run.destroy();
    });
  });
});
