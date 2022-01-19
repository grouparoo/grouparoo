import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper, ImportWorkflow } from "@grouparoo/spec-helper";

// import statements are still relative to the file, regardless of cwd
import { api, specHelper } from "actionhero";
import { AsyncReturnType } from "type-fest";
import {
  App,
  GrouparooRecord,
  RecordProperty,
  Property,
  Run,
  Schedule,
  Source,
} from "@grouparoo/core";
import { SessionCreate } from "@grouparoo/core/src/actions/session";
import { AppCreate, AppTest } from "@grouparoo/core/src/actions/apps";
import {
  SourceCreate,
  SourcePreview,
} from "@grouparoo/core/src/actions/sources";
import { PropertyCreate } from "@grouparoo/core/src/actions/properties";
import {
  ScheduleCreate,
  ScheduleRun,
} from "@grouparoo/core/src/actions/schedules";

describe("integration/runs/csv/remote", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  beforeAll(async () => {
    await helper.factories.properties();
    helper.disableTestPluginImport();
  });

  describe("import", () => {
    let session;
    let csrfToken: string;
    let app: AsyncReturnType<App["apiData"]>;
    let source: AsyncReturnType<Source["apiData"]>;
    let schedule: AsyncReturnType<Schedule["apiData"]>;

    test("an administrator can create the related import app and schedule", async () => {
      // sign in
      session = await specHelper.buildConnection();
      session.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        session
      );
      expect(sessionResponse.error).toBeUndefined();
      csrfToken = sessionResponse.csrfToken;

      // create a CSV app
      session.params = {
        csrfToken,
        name: "test import app",
        type: "csv",
        state: "ready",
      };
      const appResponse = await specHelper.runAction<AppCreate>(
        "app:create",
        session
      );
      expect(appResponse.error).toBeUndefined();
      app = appResponse.app;

      // create the source
      session.params = {
        csrfToken,
        type: "csv-import-table",
        name: "csv source",
        appId: app.id,
        modelId: "mod_profiles",
        options: {
          url: "https://raw.githubusercontent.com/grouparoo/grouparoo/main/core/__tests__/data/records-10.csv",
          fileAgeHours: 1,
        },
        mapping: { id: "userId" },
        state: "ready",
      };
      const sourceResponse = await specHelper.runAction<SourceCreate>(
        "source:create",
        session
      );
      expect(sourceResponse.error).toBeUndefined();
      source = sourceResponse.source;

      // create the schedule
      session.params = {
        csrfToken,
        name: "test import schedule",
        type: "csv-import-table",
        sourceId: source.id,
        recurring: false,
        state: "ready",
      };
      const scheduleResponse = await specHelper.runAction<ScheduleCreate>(
        "schedule:create",
        session
      );
      expect(scheduleResponse.error).toBeUndefined();
      expect(scheduleResponse.schedule.id).toBeTruthy();
      expect(scheduleResponse.schedule.name).toBe("test import schedule");
      schedule = scheduleResponse.schedule;
    });

    test("we can test the app options", async () => {
      session.params = {
        csrfToken,
        id: app.id,
      };
      const { error, test } = await specHelper.runAction<AppTest>(
        "app:test",
        session
      );
      expect(error).toBeUndefined();
      expect(test.success).toBe(true);
      expect(test.error).toBeUndefined();
    });

    test("we can see a preview of the CSV", async () => {
      session.params = {
        csrfToken,
        id: source.id,
      };
      const { error, preview } = await specHelper.runAction<SourcePreview>(
        "source:preview",
        session
      );
      expect(error).toBeUndefined();
      expect(preview.length).toBe(10);
      expect(preview[0]).toEqual({
        android_app: "false",
        email: "ejervois0@example.com",
        first_name: "Erie",
        gender: "Male",
        id: "1",
        ios_app: "true",
        ip_address: "15.247.38.72",
        last_name: "Jervois",
        ltv: "259.12",
        vip: "true",
      });
    });

    test("the mapping data for the source can be set", async () => {
      session.params = {
        csrfToken,
        id: source.id,
        mapping: { id: "userId" },
      };
      const { error } = await specHelper.runAction("source:edit", session);
      expect(error).toBeUndefined();
    });

    test("replace the email property with a new one for this source", async () => {
      const oldProperty = await Property.findOne({
        where: { key: "email" },
      });
      await oldProperty.destroy();

      session.params = {
        csrfToken,
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: true,
        options: { column: "email", aggregationMethod: "exact" },
        state: "ready",
      };

      const { error, property, pluginOptions } =
        await specHelper.runAction<PropertyCreate>("property:create", session);
      expect(error).toBeUndefined();
      expect(property.id).toBeTruthy();

      // check the pluginOptions
      expect(pluginOptions.length).toBe(2);
      expect(pluginOptions[0].key).toBe("column");
      expect(pluginOptions[0].displayName).toBe("CSV Column");
      expect(pluginOptions[0].required).toBe(true);
      expect(pluginOptions[0].options[0].key).toBe("id");
      expect(pluginOptions[0].options[0].examples[0]).toBe("1");

      // set the options
      session.params = {
        csrfToken,
        id: property.id,
        options: { column: "email", aggregationMethod: "exact" },
      };
      const { error: editError } = await specHelper.runAction(
        "property:edit",
        session
      );
      expect(editError).toBeUndefined();
    });

    test(
      "a CSV schedule can run and create records",
      async () => {
        // enqueue the run
        session.params = {
          csrfToken,
          id: schedule.id,
        };
        const { error, run: apiRun } = await specHelper.runAction<ScheduleRun>(
          "schedule:run",
          session
        );
        expect(error).toBeUndefined();
        expect(apiRun.id).toBeTruthy();

        // check that the run is enqueued
        const found = await specHelper.findEnqueuedTasks("schedule:run");
        expect(found.length).toEqual(1);
        expect(found[0].args[0].scheduleId).toBe(schedule.id);

        // run the schedule
        const run = await Run.findById(apiRun.id);

        // run the schedule twice to complete the run
        await specHelper.runTask("schedule:run", { runId: run.id });
        await specHelper.runTask("schedule:run", { runId: run.id });

        // run all enqueued associateRecord tasks
        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateRecord"
        );
        expect(foundAssociateTasks.length).toEqual(10);
        await Promise.all(
          foundAssociateTasks.map((t) =>
            specHelper.runTask("import:associateRecord", t.args[0])
          )
        );

        await ImportWorkflow();

        // run all enqueued export tasks
        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "record:export"
        );
        expect(foundExportTasks.length).toEqual(10);

        await Promise.all(
          foundExportTasks.map((t) =>
            specHelper.runTask("record:export", t.args[0])
          )
        );

        // check the run's completion percentage (before the run is complete)
        await run.afterBatch();
        expect(run.percentComplete).toBe(100);

        // check the results of the run
        const recordsCount = await GrouparooRecord.count();
        expect(recordsCount).toBe(10);

        await run.updateTotals();
        expect(run.state).toBe("complete");
        expect(run.importsCreated).toBe(10);
        expect(run.recordsCreated).toBe(10);
        expect(run.recordsImported).toBe(10);
        expect(run.percentComplete).toBe(100);
      },
      helper.longTime
    );

    test("records should be created with both the mapping data and additional record property", async () => {
      const recordId = (
        await RecordProperty.findOne({
          where: { rawValue: "1" },
        })
      ).recordId;
      const record = await GrouparooRecord.findOne({
        where: { id: recordId },
      });
      const properties = await record.getProperties();
      expect(properties.userId.values).toEqual([1]);
      expect(properties.email.values).toEqual(["ejervois0@example.com"]);
    });

    test(
      "a CSV schedule can run and update records",
      async () => {
        await api.resque.queue.connection.redis.flushdb();

        // enqueue the run
        session.params = {
          csrfToken,
          id: schedule.id,
        };
        const { error, run: apiRun } = await specHelper.runAction<ScheduleRun>(
          "schedule:run",
          session
        );
        expect(error).toBeUndefined();
        expect(apiRun.id).toBeTruthy();

        // check that the run is enqueued
        const found = await specHelper.findEnqueuedTasks("schedule:run");
        expect(found.length).toEqual(1);
        expect(found[0].args[0].scheduleId).toBe(schedule.id);

        // run the schedule
        const run = await Run.findById(apiRun.id);

        // run the schedule twice to complete the run
        await specHelper.runTask("schedule:run", { runId: run.id });
        await specHelper.runTask("schedule:run", { runId: run.id });

        // run all enqueued associateRecord tasks
        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateRecord"
        );
        expect(foundAssociateTasks.length).toEqual(10);

        await Promise.all(
          foundAssociateTasks.map((t) =>
            specHelper.runTask("import:associateRecord", t.args[0])
          )
        );

        await ImportWorkflow();

        // run all enqueued export tasks
        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "record:export"
        );
        // this count is de-duped from the previous run
        expect(foundExportTasks.length).toEqual(10);

        await Promise.all(
          foundExportTasks.map((t) =>
            specHelper.runTask("record:export", t.args[0])
          )
        );

        // check the run's completion percentage (before the run is complete)
        await run.afterBatch();
        expect(run.percentComplete).toBe(100);

        // check the results of the run
        const recordsCount = await GrouparooRecord.count();
        expect(recordsCount).toBe(10);

        await run.updateTotals();
        expect(run.state).toBe("complete");
        expect(run.importsCreated).toBe(10);
        expect(run.recordsCreated).toBe(0);
        expect(run.recordsImported).toBe(10);
        expect(run.percentComplete).toBe(100);
      },
      helper.longTime
    );
  });
});
