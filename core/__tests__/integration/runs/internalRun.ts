import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Import, Run, Profile, Source, Property } from "../../../src";

describe("integration/runs/internalRun", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let property: Property;
  let profile: Profile;
  let run: Run;
  let source: Source;

  describe("adding a new Profile Property will import and sync all profiles", () => {
    test("adding a property with a query creates a run and internalRun task", async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1] });

      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();

      property = await Property.create({
        sourceId: source.id,
        type: "string",
        key: "email",
        unique: true,
      });
      await property.setOptions({ column: "email" });
      await property.update({ state: "ready" });

      const runs = await Run.findAll();
      expect(runs.length).toBe(1);
      expect(runs[0].creatorType).toBe("property");
      expect(runs[0].creatorId).toBe(property.id);
      expect(runs[0].state).toBe("running");
      run = runs[0];
    });

    test("the internalRun task will mark every profile as pending and create imports", async () => {
      await specHelper.deleteEnqueuedTasks("run:internalRun", {
        runId: run.id,
      });
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await profile.reload();
      expect(profile.state).toBe("pending");

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileId).toBe(profile.id);
    });

    test("the run will be complete when all the profiles have been touched", async () => {
      await specHelper.deleteEnqueuedTasks("run:internalRun", {
        runId: run.id,
      });
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.percentComplete).toBe(100);
    });

    test("run the rest of the import pipeline", async () => {
      await ImportWorkflow();

      await profile.reload();
      expect(profile.state).toBe("ready");

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

    test("if a new property stops a run, both properties will be imported", async () => {
      const firstNameProperty = await Property.create({
        sourceId: source.id,
        type: "string",
        key: "firstName",
        unique: false,
      });
      await firstNameProperty.setOptions({ column: "firstName" });
      await firstNameProperty.update({ state: "ready" });

      const lastNameProperty = await Property.create({
        sourceId: source.id,
        type: "string",
        key: "lastName",
        unique: false,
      });
      await lastNameProperty.setOptions({ column: "lastName" });
      await lastNameProperty.update({ state: "ready" });

      const runs = await Run.findAll();
      const firstNameRun = runs.find(
        (r) => r.creatorId === firstNameProperty.id
      );
      const lastNameRun = runs.find((r) => r.creatorId === lastNameProperty.id);
      expect(runs.length).toBe(2);
      expect(firstNameRun.state).toBe("stopped");
      expect(lastNameRun.state).toBe("running");

      await specHelper.runTask("run:internalRun", {
        runId: lastNameRun.id,
      });

      // both new properties are marked as pending
      const properties = await profile.getProperties();
      expect(properties.userId.state).toBe("ready");
      expect(properties.email.state).toBe("ready");
      expect(properties.firstName.state).toBe("pending");
      expect(properties.lastName.state).toBe("pending");
    });
  });
});
