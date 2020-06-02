// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/google-sheets": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

// import statements are still relative to the file, regardless of cwd
import fs from "fs-extra";
import path from "path";
import { helper } from "@grouparoo/core/test";
import { api, specHelper } from "actionhero";
import {
  Profile,
  ProfileProperty,
  ProfilePropertyRule,
  Run,
} from "@grouparoo/core";

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

let actionhero;

describe("integration/runs/google-sheets", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    helper.disableTestPluginImport();
  });

  describe("import", () => {
    let session;
    let csrfToken;
    let file;
    let source;
    let app;
    let schedule;

    test("an administrator can create the related import app and schedule", async () => {
      // sign in
      session = await specHelper.buildConnection();
      session.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
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
      const appResponse = await specHelper.runAction("app:create", session);
      expect(appResponse.error).toBeUndefined();
      app = appResponse.app;

      // create the source
      session.params = {
        csrfToken,
        type: "google-sheet-import",
        name: "sheet source",
        appGuid: app.guid,
        options: {
          sheet_url: SHEET_URL,
        },
        mapping: { id: "userId" },
        state: "ready",
      };
      const sourceResponse = await specHelper.runAction(
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
        sourceGuid: source.guid,
        recurring: false,
        mappings: {
          id: "userId",
          email: "email",
          first_name: "firstName",
          last_name: "lastName",
        },
        state: "ready",
      };
      const scheduleResponse = await specHelper.runAction(
        "schedule:create",
        session
      );
      expect(scheduleResponse.error).toBeUndefined();
      expect(scheduleResponse.schedule.guid).toBeTruthy();
      expect(scheduleResponse.schedule.name).toBe("test import schedule");
      schedule = scheduleResponse.schedule;
    });

    test("we can test the app options", async () => {
      session.params = {
        csrfToken,
        guid: app.guid,
        options: {
          client_email: GOOGLE_SERVICE_CLIENT_EMAIL,
          private_key: GOOGLE_SERVICE_PRIVATE_KEY,
        },
      };
      const { error, test } = await specHelper.runAction("app:test", session);
      expect(error).toBeUndefined();
      expect(test.error).toBeUndefined();
      expect(test.result).toBe(true);
    });

    test("we can see a preview of the sheet", async () => {
      session.params = {
        csrfToken,
        guid: source.guid,
        options: { sheet_url: SHEET_URL },
      };
      const { error, preview } = await specHelper.runAction(
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
        guid: source.guid,
        mapping: { id: "userId" },
      };
      const { error } = await specHelper.runAction("source:edit", session);
      expect(error).toBeUndefined();
    });

    test("replace the email profile property rule with a new one for this source", async () => {
      const oldRule = await ProfilePropertyRule.findOne({
        where: { key: "email" },
      });
      await oldRule.destroy();

      session.params = {
        csrfToken,
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: true,
        options: { column: "email" },
        state: "ready",
      };

      const {
        error,
        profilePropertyRule,
        pluginOptions,
      } = await specHelper.runAction("profilePropertyRule:create", session);
      expect(error).toBeUndefined();
      expect(profilePropertyRule.guid).toBeTruthy();

      // check the pluginOptions
      expect(pluginOptions.length).toBe(1);
      expect(pluginOptions[0].key).toBe("column");
      expect(pluginOptions[0].required).toBe(true);
      expect(pluginOptions[0].options[0].key).toBe("id");
      expect(pluginOptions[0].options[0].examples[0]).toBe("1");

      // set the options
      session.params = {
        csrfToken,
        guid: profilePropertyRule.guid,
        options: { column: "email" },
      };
      const { error: editError } = await specHelper.runAction(
        "profilePropertyRule:edit",
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
          guid: schedule.guid,
        };
        const { error, success } = await specHelper.runAction(
          "schedule:run",
          session
        );
        expect(error).toBeUndefined();
        expect(success).toBe(true);

        // check that the run is enqueued
        const found = await specHelper.findEnqueuedTasks("schedule:run");
        expect(found.length).toEqual(1);
        expect(found[0].args[0].scheduleGuid).toBe(schedule.guid);

        // run the schedule
        await specHelper.runTask("schedule:run", {
          scheduleGuid: schedule.guid,
        });

        // run the schedule task again to enqueue the determineState task
        const foundAgain = await specHelper.findEnqueuedTasks("schedule:run");
        expect(foundAgain.length).toEqual(2);
        await specHelper.runTask("schedule:run", foundAgain[1].args[0]);

        // run all enqueued associateProfile tasks
        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateProfile"
        );
        expect(foundAssociateTasks.length).toEqual(10);

        await Promise.all(
          foundAssociateTasks.map(
            async (t) =>
              await specHelper.runTask("import:associateProfile", t.args[0])
          )
        );

        // run all enqueued importAndUpdate tasks
        const foundImportAndUpdateTasks = await specHelper.findEnqueuedTasks(
          "profile:importAndUpdate"
        );
        expect(foundImportAndUpdateTasks.length).toEqual(10);

        await Promise.all(
          foundImportAndUpdateTasks.map(
            async (t) =>
              await specHelper.runTask("profile:importAndUpdate", t.args[0])
          )
        );

        // run all enqueued export tasks
        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "profile:export"
        );
        expect(foundExportTasks.length).toEqual(10);

        await Promise.all(
          foundExportTasks.map(
            async (t) => await specHelper.runTask("profile:export", t.args[0])
          )
        );

        await helper.sleep(1000);

        // check if the run is done
        const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
          "run:determineState"
        );
        await Promise.all(
          foundRunDetermineStateTasks.map(
            async (t) =>
              await specHelper.runTask("run:determineState", t.args[0])
          )
        );

        // check the results of the run
        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(10);

        const run = await Run.findOne({
          where: { creatorGuid: schedule.guid },
          order: [["createdAt", "desc"]],
          limit: 1,
        });
        expect(run.state).toBe("complete");
        expect(run.importsCreated).toBe(10);
        expect(run.profilesCreated).toBe(10);
        expect(run.profilesImported).toBe(10);
        expect(run.profilesExported).toBe(10);
      },
      1000 * 60
    );

    test("profiles should be created with both the mapping data and additional profile property", async () => {
      const profileGuid = (
        await ProfileProperty.findOne({
          where: { rawValue: "1" },
        })
      ).profileGuid;
      const profile = await Profile.findOne({ where: { guid: profileGuid } });
      const properties = await profile.properties();
      expect(properties.userId.value).toEqual(1);
      expect(properties.email.value).toEqual("ejervois0@example.com");
    });

    test(
      "a google sheet schedule can run and update profiles",
      async () => {
        // enqueue the run
        session.params = {
          csrfToken,
          guid: schedule.guid,
        };
        const { error, success } = await specHelper.runAction(
          "schedule:run",
          session
        );
        expect(error).toBeUndefined();
        expect(success).toBe(true);

        // check that the run is enqueued
        const found = await specHelper.findEnqueuedTasks("schedule:run");
        expect(found.length).toEqual(3);
        expect(found[1].args[0].scheduleGuid).toBe(schedule.guid);

        // run the schedule
        await specHelper.runTask("schedule:run", {
          scheduleGuid: schedule.guid,
        });

        // run the schedule task again to enqueue the determineState task
        const foundAgain = await specHelper.findEnqueuedTasks("schedule:run");
        expect(foundAgain.length).toEqual(4);
        await specHelper.runTask("schedule:run", foundAgain[3].args[0]);

        // run all enqueued associateProfile tasks
        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateProfile"
        );
        expect(foundAssociateTasks.length).toEqual(20);

        await Promise.all(
          foundAssociateTasks.map(
            async (t) =>
              await specHelper.runTask("import:associateProfile", t.args[0])
          )
        );

        // run all enqueued importAndUpdate tasks
        const foundImportAndUpdateTasks = await specHelper.findEnqueuedTasks(
          "profile:importAndUpdate"
        );
        // this count is de-duped
        expect(foundImportAndUpdateTasks.length).toEqual(10);

        await Promise.all(
          foundImportAndUpdateTasks.map(
            async (t) =>
              await specHelper.runTask("profile:importAndUpdate", t.args[0])
          )
        );

        // run all enqueued export tasks
        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "profile:export"
        );
        // this count is de-duped from the previous run
        expect(foundExportTasks.length).toEqual(10);

        await Promise.all(
          foundExportTasks.map(
            async (t) => await specHelper.runTask("profile:export", t.args[0])
          )
        );

        await helper.sleep(1000);

        // check if the run is done
        const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
          "run:determineState"
        );
        await Promise.all(
          foundRunDetermineStateTasks.map(
            async (t) =>
              await specHelper.runTask("run:determineState", t.args[0])
          )
        );

        // check the results of the run
        const profilesCount = await Profile.count();
        expect(profilesCount).toBe(10);

        const run = await Run.findOne({
          where: { creatorGuid: schedule.guid },
          order: [["createdAt", "desc"]],
          limit: 1,
        });
        expect(run.state).toBe("complete");
        expect(run.importsCreated).toBe(10);
        expect(run.profilesCreated).toBe(0);
        expect(run.profilesImported).toBe(10);
        expect(run.profilesExported).toBe(10);
      },
      1000 * 60
    );
  });
});
