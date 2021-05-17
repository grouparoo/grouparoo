import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import { plugin, Import, Property, Run, Profile } from "../../../src";

describe("tasks/run:internalRun", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let profile: Profile;

  describe("run:internalRun", () => {
    beforeAll(async () => {
      await Run.truncate();
      profile = await helper.factories.profile();
    });

    beforeAll(async () => {
      await plugin.updateSetting("core", "runs-profile-batch-size", 100);
    });

    test("the task will create an import for every profile", async () => {
      await internalRun("test", "testId");

      const run = await Run.findOne({ where: { state: "running" } });
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(100);
      expect(run.groupMethod).toBe("internalRun");

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileId).toBe(profile.id);
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
