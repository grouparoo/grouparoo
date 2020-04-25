// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/bigquery": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

// import statements are still relative to the file, regardless of cwd
import fs from "fs";
import path from "path";
import parse from "csv-parse/lib/sync";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { specHelper, config } from "actionhero";
import { Profile } from "../../../../../core/api/src/models/Profile";
import { ProfilePropertyRule } from "../../../../../core/api/src/models/ProfilePropertyRule";
import { ProfileProperty } from "../../../../../core/api/src/models/ProfileProperty";
import { Mapping } from "../../../../../core/api/src/models/Mapping";
import { Run } from "../../../../../core/api/src/models/Run";

let api, actionhero;

const sourceTableName = `users_${process.env.JEST_WORKER_ID || 1}`;
const createSourceTableSQL = `
CREATE TABLE ${sourceTableName} (
    id SERIAL PRIMARY KEY,
    first_name text,
    last_name text,
    email text,
    gender text,
    ip_address text,
    ios_app boolean,
    android_app boolean,
    vip boolean,
    ltv double precision
)
`;

const createUsersDestinationTableSQL = `
CREATE TABLE output_users (
    id integer PRIMARY KEY,
    customer_email text,
    fname text,
    lname text
)
`;

const createGroupsDestinationTableSQL = `
CREATE TABLE output_groups (
    id SERIAL PRIMARY KEY,
    "userId" integer NOT NULL,
    "group" text NOT NULL
)
`;

describe("integration/runs/bigquery", () => {
  let session;
  let csrfToken;
  let app;
  let source;
  let schedule;
  let destination;
  let group;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await api.sequelize.query(`drop table if exists ${sourceTableName}`);
    await api.sequelize.query("drop table if exists output_users");
    await api.sequelize.query("drop table if exists output_groups");
    await api.sequelize.query(createSourceTableSQL);
    await api.sequelize.query(createUsersDestinationTableSQL);
    await api.sequelize.query(createGroupsDestinationTableSQL);
    const file = path.join(
      process.cwd(),
      "__tests__",
      "data",
      "profiles-10.csv"
    );
    const rows = parse(fs.readFileSync(file), { columns: true });
    for (const i in rows) {
      const row = rows[i];
      const q = `INSERT INTO ${sourceTableName} (${Object.keys(row).join(
        ", "
      )}) VALUES ('${Object.values(row).join("', '")}')`;
      await api.sequelize.query(q);
    }
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    helper.disableTestPluginImport();
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

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

    // create a bigquery app
    session.params = {
      csrfToken,
      name: "test app",
      type: "bigquery",
      options: {
        user: config.sequelize.username || require("os").userInfo().username,
        password: config.sequelize.password || "password",
        host: config.sequelize.host,
        port: config.sequelize.port,
        database: config.sequelize.database,
      },
      state: "ready",
    };
    const appResponse = await specHelper.runAction("app:create", session);
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the source
    session.params = {
      csrfToken,
      name: "pg import source",
      type: "bigquery-table-import",
      appGuid: app.guid,
      options: { table: sourceTableName },
      mapping: { id: "userId" },
      state: "ready",
    };
    const sourceResponse = await specHelper.runAction("source:create", session);
    expect(sourceResponse.error).toBeUndefined();
    source = sourceResponse.source;

    // create the schedule
    session.params = {
      csrfToken,
      name: "test schedule",
      type: "bigquery-import",
      sourceGuid: source.guid,
      recurring: false,
      options: {
        column: "id",
      },
      state: "ready",
    };
    const buildScheduleResponse = await specHelper.runAction(
      "schedule:create",
      session
    );
    expect(buildScheduleResponse.error).toBeUndefined();
    expect(buildScheduleResponse.schedule.guid).toBeTruthy();
    expect(buildScheduleResponse.schedule.name).toBe("test schedule");
    schedule = buildScheduleResponse.schedule;

    // create the destination
    session.params = {
      csrfToken,
      name: "test destination",
      type: "bigquery-export",
      appGuid: app.guid,
      trackAllGroups: true,
      options: {
        table: "output_users",
        primaryKey: "id",
        groupsTable: "output_groups",
        groupForeignKey: "userId",
        groupColumnName: "group",
      },
    };
    const buildDestinationResponse = await specHelper.runAction(
      "destination:create",
      session
    );
    expect(buildDestinationResponse.error).toBeUndefined();
    expect(buildDestinationResponse.destination.guid).toBeTruthy();
    expect(buildDestinationResponse.destination.name).toBe("test destination");
    destination = buildDestinationResponse.destination;
  });

  test("we can test the app options", async () => {
    session.params = {
      csrfToken,
      guid: app.guid,
    };
    const { error, test } = await specHelper.runAction("app:test", session);
    expect(error).toBeUndefined();
    expect(test.result).toBe(true);
    expect(test.error).toBeUndefined();
  });

  test("we can read the columns of the table", async () => {
    session.params = {
      csrfToken,
      guid: source.guid,
    };
    const { error, preview } = await specHelper.runAction(
      "source:preview",
      session
    );
    expect(error).toBeUndefined();
    expect(preview.length).toBe(10);
    expect(Object.keys(preview[0]).sort()).toEqual([
      "android_app",
      "email",
      "first_name",
      "gender",
      "id",
      "ios_app",
      "ip_address",
      "last_name",
      "ltv",
      "vip",
    ]);
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
    // delete the old rule
    const oldRule = await ProfilePropertyRule.findOne({
      where: { key: "email" },
    });
    await oldRule.destroy();

    // create the new rule
    session.params = {
      csrfToken,
      sourceGuid: source.guid,
      key: "email",
      type: "string",
    };

    const {
      error,
      profilePropertyRule,
      pluginOptions,
    } = await specHelper.runAction("profilePropertyRule:create", session);
    expect(error).toBeUndefined();
    expect(profilePropertyRule.guid).toBeTruthy();

    // check the pluginOptions
    expect(pluginOptions.length).toBe(2);
    expect(pluginOptions[0].key).toBe("column");
    expect(pluginOptions[1].key).toBe("aggregation method");
    expect(pluginOptions[0].required).toBe(true);
    expect(pluginOptions[0].options[0].key).toBe("id");
    expect(pluginOptions[1].options[0].key).toBe("exact");
    expect(pluginOptions[1].required).toBe(true);

    // set the options
    session.params = {
      csrfToken,
      guid: profilePropertyRule.guid,
      unique: true,
      options: { column: "email", "aggregation method": "exact" },
      state: "ready",
    };
    const { error: editError } = await specHelper.runAction(
      "profilePropertyRule:edit",
      session
    );
    expect(editError).toBeUndefined();
  });

  test("create the test group", async () => {
    group = await helper.factories.group();
    await group.update({
      matchType: "all",
      type: "calculated",
    });
    await group.setRules([
      {
        key: "email",
        match: "%@%",
        op: "iLike",
      },
    ]);
  });

  test("we can read the bigquery mapping options", async () => {
    session.params = {
      csrfToken,
      guid: destination.guid,
    };
    const { error, options } = await specHelper.runAction(
      "destination:mappingOptions",
      session
    );
    expect(error).toBeUndefined();
    expect(options).toEqual({
      labels: {
        profilePropertyRule: {
          singular: "Exported Profile Property Rule",
          plural: "Exported Profile Property Rules",
        },
        group: { singular: "Exported Groups", plural: "Exported Groups" },
      },
      profilePropertyRules: {
        required: [{ key: "id", type: "any" }],
        known: [
          { key: "customer_email", type: "any" },
          { key: "fname", type: "any" },
          { key: "lname", type: "any" },
        ],
        allowOptionalFromProfilePropertyRules: false,
      },
    });
  });

  test(`the destination group membership can be set`, async () => {
    const destinationGroupMemberships = {};
    destinationGroupMemberships[group.guid] = group.name;

    session.params = {
      csrfToken,
      guid: destination.guid,
      destinationGroupMemberships,
    };
    const { error, destination: _destination } = await specHelper.runAction(
      "destination:edit",
      session
    );
    expect(error).toBeUndefined();
    expect(_destination.destinationGroupMemberships).toEqual([
      {
        groupGuid: group.guid,
        groupName: group.name,
        remoteKey: group.name,
      },
    ]);
  });

  test("the destination can use the new rule in a mapping and be made ready", async () => {
    session.params = {
      csrfToken,
      guid: destination.guid,
      mapping: {
        id: "userId",
        customer_email: "email",
        fname: "firstName",
        lname: "lastName",
      },
      state: "ready",
    };
    const {
      error,
      destination: destinationResponse,
    } = await specHelper.runAction("destination:edit", session);
    expect(error).toBeUndefined();
    expect(destinationResponse.state).toBe("ready");
  });

  test(
    "a bigquery schedule can run and create profiles",
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
          async (t) => await specHelper.runTask("run:determineState", t.args[0])
        )
      );

      // check the results of the run
      const profilesCount = await Profile.count();
      expect(profilesCount).toBe(10);

      const run = await Run.findOne({
        order: [["createdAt", "desc"]],
        limit: 1,
      });
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(10);
      expect(run.profilesCreated).toBe(10);
      expect(run.profilesImported).toBe(10);
      expect(run.profilesExported).toBe(10);
      expect(run.filter).toEqual({ id: 10 });
      expect(run.highWaterMark).toBe("200");

      // check the destination
      const userRows = await api.sequelize.query(
        "SELECT * FROM output_users ORDER BY id ASC"
      );
      expect(userRows[0].length).toBe(10);
      expect(userRows[0][0].customer_email).toBe("ejervois0@example.com");

      const groupRows = await api.sequelize.query(
        "SELECT * FROM output_groups"
      );
      expect(groupRows[0].length).toBe(10);
      expect(groupRows[0][0].group).toBe(group.name);
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
    "a bigquery schedule can run and update profiles only finding updated records",
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
      expect(foundAssociateTasks.length).toEqual(10 + 1);

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

      // check if the run is done
      const foundRunDetermineStateTasks = await specHelper.findEnqueuedTasks(
        "run:determineState"
      );
      await Promise.all(
        foundRunDetermineStateTasks.map(
          async (t) => await specHelper.runTask("run:determineState", t.args[0])
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
      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(1);
      expect(run.profilesExported).toBe(1);
      expect(run.filter).toEqual({ id: 10 });
      expect(run.highWaterMark).toBe("200");

      // check the destination
      const userRows = await api.sequelize.query(
        "SELECT * FROM output_users ORDER BY id ASC"
      );
      expect(userRows[0].length).toBe(10);
      expect(userRows[0][0].customer_email).toBe("ejervois0@example.com");

      const groupRows = await api.sequelize.query(
        "SELECT * FROM output_groups"
      );
      expect(groupRows[0].length).toBe(10);
      expect(groupRows[0][0].group).toBe(group.name);
    },
    1000 * 60
  );
});
