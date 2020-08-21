import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import { Import } from "../../../src/models/Import";
import { ProfilePropertyRule } from "../../../src/models/ProfilePropertyRule";
import { Run } from "../../../src/models/Run";
import { Export } from "../../../src/models/Export";
import { ExportRun } from "../../../src/models/ExportRun";

let actionhero;
let profile;

describe("tasks/run:internalRun", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("the run can not be completed until all the exports are sent", async () => {
    const rule = await ProfilePropertyRule.findOne();
    const run = await helper.factories.run(rule, {
      creatorType: "test",
      creatorGuid: "test",
      state: "running",
    });

    const _export = await Export.create({
      destinationGuid: "dst_abc",
      profileGuid: "pro_abc",
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
    });
    const exportRun = ExportRun.create({
      runGuid: run.guid,
      exportGuid: _export.guid,
    });

    await specHelper.runTask("run:internalRun", {
      runGuid: run.guid,
    });

    const found = await specHelper.findEnqueuedTasks("run:determineState");
    expect(found.length).toEqual(1);

    await specHelper.runTask("run:determineState", {
      runGuid: run.guid,
    });

    await run.reload();
    expect(run.state).toBe("running");
  });

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
      const rule = await ProfilePropertyRule.findOne();
      const run = await helper.factories.run(rule, {
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
