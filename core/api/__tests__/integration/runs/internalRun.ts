import { helper } from "../../utils/specHelper";
import { api, specHelper } from "actionhero";
import { Import } from "./../../../src/models/Import";
import { Run } from "./../../../src/models/Run";
import { Profile } from "./../../../src/models/Profile";
import { ProfilePropertyRule } from "./../../../src/models/ProfilePropertyRule";

let actionhero;
let profile: Profile;
let run: Run;

describe("integration/runs/internalRun", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("adding a new Profile Property will import and sync all profiles", () => {
    test("adding a profile property rule with a query creates a run and internalRun task", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProfilePropertyRule(
        "userId",
        "integer",
        "id"
      );
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      profile = await helper.factories.profile();

      await api.resque.queue.connection.redis.flushdb();
      await Run.destroy({ truncate: true });

      const rule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        type: "string",
        key: "email",
        unique: true,
      });
      await rule.setOptions({ column: "id" });
      await rule.update({ state: "ready" });

      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);

      const runs = await Run.findAll();
      expect(runs.length).toBe(1);
      expect(runs[0].creatorType).toBe("profilePropertyRule");
      expect(runs[0].creatorGuid).toBe(rule.guid);
      expect(runs[0].state).toBe("running");
      run = runs[0];
    });

    test("the internalRun task will create an import for every profile", async () => {
      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);

      await specHelper.runTask("run:internalRun", foundTasks[0].args[0]);

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileGuid).toBe(profile.guid);
    });

    test("run internalRun again to enqueue the determineState task", async () => {
      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(2);
      await specHelper.runTask("run:internalRun", foundTasks[1].args[0]);

      const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
        "run:determineState"
      );
      expect(foundRunDetermineStateTasks.length).toBe(1);
    });

    test("run the rest of the import pipeline", async () => {
      // run all enqueued importAndUpdate tasks
      const foundImportAndUpdateTasks = await specHelper.findEnqueuedTasks(
        "profile:importAndUpdate"
      );
      expect(foundImportAndUpdateTasks.length).toEqual(1);
      await specHelper.runTask(
        "profile:importAndUpdate",
        foundImportAndUpdateTasks[0].args[0]
      );

      // run all enqueued export tasks
      const foundExportTasks = await specHelper.findEnqueuedTasks(
        "profile:export"
      );
      expect(foundExportTasks.length).toEqual(1);
      await specHelper.runTask("profile:export", foundExportTasks[0].args[0]);

      // check if the run is done
      const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
        "run:determineState"
      );
      await specHelper.runTask(
        "run:determineState",
        foundRunDetermineStateTasks[0].args[0]
      );

      // check the results of the run
      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(1);
      expect(run.profilesExported).toBe(1);
    });
  });
});
