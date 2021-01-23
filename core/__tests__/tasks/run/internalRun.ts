import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import { Import } from "../../../src/models/Import";
import { Property } from "../../../src/models/Property";
import { Run } from "../../../src/models/Run";
import { Profile } from "../../../src";

describe("tasks/run:internalRun", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let profile: Profile;

  describe("run:internalRun", () => {
    beforeAll(async () => {
      profile = await helper.factories.profile();
    });

    test("the task will create an import for every profile", async () => {
      await internalRun("test", "testGuid");

      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);
      const run = await Run.findByGuid(foundTasks[0].args[0].runGuid);
      await specHelper.runTask("run:internalRun", foundTasks[0].args[0]);

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(0);
      expect(run.groupMethod).toBe("internalRun");

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileGuid).toBe(profile.guid);
    });

    test("a run can be stopped outside of the task and not enqueue another task", async () => {
      const property = await Property.findOne();
      const run = await helper.factories.run(property, {
        creatorType: "test",
        creatorGuid: "test",
        state: "running",
      });
      expect(run.state).toBe("running");

      await run.stop();

      await task.enqueue("run:internalRun", { runGuid: run.guid });
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
