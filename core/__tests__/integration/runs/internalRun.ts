import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Import } from "./../../../src/models/Import";
import { Run } from "./../../../src/models/Run";
import { Profile } from "./../../../src/models/Profile";
import { Source } from "./../../../src/models/Source";
import { Property } from "./../../../src/models/Property";

let actionhero;
let profile: Profile;
let run: Run;
let source: Source;

describe("integration/runs/internalRun", () => {
  let rule: Property;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("adding a new Profile Property will import and sync all profiles", () => {
    test("adding a profile property rule with a query creates a run and internalRun task", async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1] });

      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();

      rule = await Property.create({
        sourceGuid: source.guid,
        type: "string",
        key: "email",
        unique: true,
      });
      await rule.setOptions({ column: "email" });
      await rule.update({ state: "ready" });

      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);

      const runs = await Run.findAll();
      expect(runs.length).toBe(1);
      expect(runs[0].creatorType).toBe("property");
      expect(runs[0].creatorGuid).toBe(rule.guid);
      expect(runs[0].state).toBe("running");
      run = runs[0];
    });

    test("the internalRun task will create an import for every profile", async () => {
      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);

      await specHelper.deleteEnqueuedTasks(
        "run:internalRun",
        foundTasks[0].args[0]
      );
      await specHelper.runTask("run:internalRun", foundTasks[0].args[0]);

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileGuid).toBe(profile.guid);
    });

    test("the run will be complete when all imports are created", async () => {
      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(2);

      await specHelper.deleteEnqueuedTasks(
        "run:internalRun",
        foundTasks[1].args[0]
      );
      await specHelper.runTask("run:internalRun", foundTasks[1].args[0]);

      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.percentComplete).toBe(100);
    });

    test("run the rest of the import pipeline", async () => {
      await ImportWorkflow();

      // run all enqueued export tasks
      const foundExportTasks = await specHelper.findEnqueuedTasks(
        "profile:export"
      );
      expect(foundExportTasks.length).toEqual(1);
      await specHelper.runTask("profile:export", foundExportTasks[0].args[0]);

      // run all export:send jobs
      const foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toBe(0);

      // check the results of the run
      await run.updateTotals();
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(1);
    });
  });

  describe("with 2 new rules", () => {
    beforeAll(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();
    });

    test("if a new profile property rule stops a run, both properties will be imported", async () => {
      const firstNameRule = await Property.create({
        sourceGuid: source.guid,
        type: "string",
        key: "firstName",
        unique: false,
      });
      await firstNameRule.setOptions({ column: "firstName" });
      await firstNameRule.update({ state: "ready" });

      const lastNameRule = await Property.create({
        sourceGuid: source.guid,
        type: "string",
        key: "lastName",
        unique: false,
      });
      await lastNameRule.setOptions({ column: "lastName" });
      await lastNameRule.update({ state: "ready" });

      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(2);

      const runs = await Run.findAll();
      const firstNameRun = runs.find(
        (r) => r.creatorGuid === firstNameRule.guid
      );
      const lastNameRun = runs.find((r) => r.creatorGuid === lastNameRule.guid);
      expect(runs.length).toBe(2);
      expect(firstNameRun.state).toBe("stopped");
      expect(lastNameRun.state).toBe("running");

      await specHelper.runTask("run:internalRun", {
        runGuid: lastNameRun.guid,
      });

      // both new properties are marked as pending
      const properties = await profile.properties();
      expect(properties.userId.state).toBe("ready");
      expect(properties.email.state).toBe("ready");
      expect(properties.firstName.state).toBe("pending");
      expect(properties.lastName.state).toBe("pending");
    });
  });
});
