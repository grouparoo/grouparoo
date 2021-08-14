import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/google-sheets": { path: path.join(__dirname, "..", "..") },
});
import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import fs from "fs-extra";
import { api, specHelper } from "actionhero";
import { AsyncReturnType } from "type-fest";
import {
  plugin,
  Profile,
  ProfileProperty,
  Property,
  Run,
} from "@grouparoo/core";
import { SessionCreate } from "@grouparoo/core/src/actions/session";
import { AppCreate, AppTest, AppView } from "@grouparoo/core/src/actions/apps";
import {
  SourceCreate,
  SourcePreview,
  SourceView,
} from "@grouparoo/core/src/actions/sources";
import { PropertyCreate } from "@grouparoo/core/src/actions/properties";
import {
  ScheduleCreate,
  ScheduleRun,
  ScheduleView,
} from "@grouparoo/core/src/actions/schedules";

let envFile = path.resolve(path.join(__dirname, "../", ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
} else {
  envFile = path.resolve(path.join(__dirname, "../", ".env.example"));
  require("dotenv").config({ path: envFile });
}
const GOOGLE_SERVICE_CLIENT_EMAIL = process.env.GOOGLE_SERVICE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0";

const nockFile = path.resolve(
  path.join(__dirname, "../", "fixtures", "nock.js")
);

// switch comments to record new nock file: have to change "assertion" afterwards for google auth
// helper.recordNock(nockFile);
require("./../fixtures/nock");

describe("integration/runs/google-sheets", () => {
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
    await plugin.updateSetting("core", "runs-profile-batch-size", 100);
  });

  beforeAll(async () => {
    await helper.factories.properties();
    helper.disableTestPluginImport();
  });

  describe("import", () => {
    let session;
    let csrfToken: string;
    let app: AsyncReturnType<AppView["run"]>["app"];
    let source: AsyncReturnType<SourceView["run"]>["source"];
    let schedule: AsyncReturnType<ScheduleView["run"]>["schedule"];

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

      // create a sheet app with an uploaded file
      session.params = {
        csrfToken,
        name: "test import app",
        type: "google-sheets",
        options: {
          client_email: GOOGLE_SERVICE_CLIENT_EMAIL,
          private_key: GOOGLE_SERVICE_PRIVATE_KEY,
        },
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
        type: "google-sheet-import",
        name: "sheet source",
        appId: app.id,
        options: {
          sheet_url: SHEET_URL,
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
        type: "google-sheet-import",
        sourceId: source.id,
        recurring: false,
        mappings: {
          id: "userId",
          email: "email",
          first_name: "firstName",
          last_name: "lastName",
        },
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
        options: {
          client_email: GOOGLE_SERVICE_CLIENT_EMAIL,
          private_key: GOOGLE_SERVICE_PRIVATE_KEY,
        },
      };
      const { error, test } = await specHelper.runAction<AppTest>(
        "app:test",
        session
      );
      expect(error).toBeUndefined();
      expect(test.error).toBeUndefined();
      expect(test.success).toBe(true);
    });

    test("we can see a preview of the sheet", async () => {
      session.params = {
        csrfToken,
        id: source.id,
        options: { sheet_url: SHEET_URL },
      };
      const { error, preview } = await specHelper.runAction<SourcePreview>(
        "source:preview",
        session
      );
      expect(error).toBeUndefined();
      expect(preview.length).toBe(10);
      expect(preview[0]).toEqual({
        android_app: "FALSE",
        email: "ejervois0@example.com",
        first_name: "Erie",
        gender: "Male",
        id: "1",
        ios_app: "TRUE",
        ip_address: "15.247.38.72",
        last_name: "Jervois",
        ltv: "259.12",
        vip: "TRUE",
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
        options: { column: "email" },
        state: "ready",
      };

      const { error, property, pluginOptions } =
        await specHelper.runAction<PropertyCreate>("property:create", session);
      expect(error).toBeUndefined();
      expect(property.id).toBeTruthy();

      // check the pluginOptions
      expect(pluginOptions.length).toBe(1);
      expect(pluginOptions[0].key).toBe("column");
      expect(pluginOptions[0].required).toBe(true);
      expect(pluginOptions[0].options[0].key).toBe("id");
      expect(pluginOptions[0].options[0].examples[0]).toBe("1");

      // set the options
      session.params = {
        csrfToken,
        id: property.id,
        options: { column: "email" },
      };
      const { error: editError } = await specHelper.runAction(
        "property:edit",
        session
      );
      expect(editError).toBeUndefined();
    });

    test(
      "a google sheet schedule can run and create profiles",
      async () => {
        // enqueue the run
        session.params = {
          csrfToken,
          id: schedule.id,
        };
        const { error, success } = await specHelper.runAction<ScheduleRun>(
          "schedule:run",
          session
        );
        expect(error).toBeUndefined();
        expect(success).toBe(true);

        // check that the run is enqueued
        const found = await specHelper.findEnqueuedTasks("schedule:run");
        expect(found.length).toEqual(1);
        expect(found[0].args[0].scheduleId).toBe(schedule.id);

        // run the schedule
        const run = await Run.create({
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "running",
        });

        // run the schedule twice to complete the run
        await specHelper.runTask("schedule:run", { runId: run.id });
        await specHelper.runTask("schedule:run", { runId: run.id });

        // run all enqueued associateProfile tasks
        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateProfile"
        );
        expect(foundAssociateTasks.length).toEqual(10);

        await Promise.all(
          foundAssociateTasks.map((t) =>
            specHelper.runTask("import:associateProfile", t.args[0])
          )
        );

        await ImportWorkflow();

        // run all enqueued export tasks
        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "profile:export"
        );
        expect(foundExportTasks.length).toEqual(10);

        await Promise.all(
          foundExportTasks.map((t) =>
            specHelper.runTask("profile:export", t.args[0])
          )
        );

        // check the run's completion percentage (before the run is complete)
        await specHelper.runTask("schedule:run", { runId: run.id });
        await run.afterBatch();
        expect(run.percentComplete).toBe(100);

        // check if the run is done
        const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
          "run:determineState"
        );
        await Promise.all(
          foundRunDetermineStateTasks.map((t) =>
            specHelper.runTask("run:determineState", t.args[0])
          )
        );

        // check the results of the run
        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(10);

        await run.updateTotals();
        expect(run.state).toBe("complete");
        expect(run.importsCreated).toBe(10);
        expect(run.profilesCreated).toBe(10);
        expect(run.profilesImported).toBe(10);
        expect(run.percentComplete).toBe(100);
      },
      helper.longTime
    );

    test("profiles should be created with both the mapping data and additional profile property", async () => {
      const profileId = (
        await ProfileProperty.findOne({
          where: { rawValue: "1" },
        })
      ).profileId;
      const profile = await Profile.findOne({ where: { id: profileId } });
      const properties = await profile.getProperties();
      expect(properties.userId.values).toEqual([1]);
      expect(properties.email.values).toEqual(["ejervois0@example.com"]);
    });

    test(
      "a google sheet schedule can run and update profiles",
      async () => {
        // enqueue the run
        session.params = {
          csrfToken,
          id: schedule.id,
        };
        const { error, success } = await specHelper.runAction<ScheduleRun>(
          "schedule:run",
          session
        );
        expect(error).toBeUndefined();
        expect(success).toBe(true);

        // run the schedule
        const run = await Run.create({
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "running",
        });

        // run the schedule twice to complete the run
        await specHelper.runTask("schedule:run", { runId: run.id });
        await specHelper.runTask("schedule:run", { runId: run.id });

        // run all enqueued associateProfile tasks
        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateProfile"
        );
        expect(foundAssociateTasks.length).toEqual(20);

        await Promise.all(
          foundAssociateTasks.map((t) =>
            specHelper.runTask("import:associateProfile", t.args[0])
          )
        );

        await ImportWorkflow();

        // run all enqueued export tasks
        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "profile:export"
        );
        // this count is de-duped from the previous run
        expect(foundExportTasks.length).toEqual(10);

        await Promise.all(
          foundExportTasks.map((t) =>
            specHelper.runTask("profile:export", t.args[0])
          )
        );

        // check the run's completion percentage (before the run is complete)
        await run.afterBatch();
        expect(run.percentComplete).toBe(100);

        // check if the run is done
        const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
          "run:determineState"
        );
        await Promise.all(
          foundRunDetermineStateTasks.map((t) =>
            specHelper.runTask("run:determineState", t.args[0])
          )
        );

        // check the results of the run
        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(10);

        await run.updateTotals();
        expect(run.state).toBe("complete");
        expect(run.importsCreated).toBe(10);
        expect(run.profilesCreated).toBe(0);
        expect(run.profilesImported).toBe(10);
        expect(run.percentComplete).toBe(100);
      },
      helper.longTime
    );
  });
});
