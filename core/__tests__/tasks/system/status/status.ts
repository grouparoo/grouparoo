import { helper } from "@grouparoo/spec-helper";
import { Import, Profile, ProfileProperty, Run } from "../../../../src";
import { api, task, specHelper } from "actionhero";
import { StatusTask } from "../../../../src/tasks/system/status/status";
import { Status } from "../../../../src/modules/status";

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

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      const complete = await instance.checkForComplete(samples);
      expect(complete).toBe(true);
    });

    test("will not be complete with a pending profile", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "pending" });

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending import", async () => {
      const profile = await helper.factories.profile();
      await ProfileProperty.update(
        { state: "ready" },
        { where: { profileId: profile.id } }
      );
      await profile.update({ state: "ready" });
      await helper.factories.import(null, { profileId: profile.id });

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const profile = await helper.factories.profile();
      await ProfileProperty.update(
        { state: "ready" },
        { where: { profileId: profile.id } }
      );
      await Run.truncate();
      await profile.update({ state: "ready" });
      await helper.factories.export(profile);

      await Status.setAll();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      const samples = await instance.getSamples();
      expect(await instance.checkForComplete(samples)).toBe(false);
      await profile.destroy();
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

    test("will sweep profiles at the end of the run", async () => {
      const profile: Profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [null] });
      await ProfileProperty.update(
        { state: "ready" },
        { where: { profileId: profile.id } }
      );
      await profile.update({ state: "ready" });
      await Run.truncate();
      await Import.truncate();

      process.env.GROUPAROO_RUN_MODE = "cli:run";
      const instance = new StatusTask();
      await instance.runWithinTransaction({ toStop: false }, {});

      await expect(profile.reload()).rejects.toThrow(/does not exist anymore/);
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
