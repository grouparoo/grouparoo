import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { beforeData, afterData, getConfig } from "../utils/data";
import { api, specHelper } from "actionhero";
import { GrouparooRecord, RecordProperty, Run } from "@grouparoo/core";
import { SessionCreate } from "@grouparoo/core/src/actions/session";
import { ModelCreate } from "@grouparoo/core/src/actions/models";
import { AppCreate, AppTest } from "@grouparoo/core/src/actions/apps";
import {
  SourceBootstrapUniqueProperty,
  SourceCreate,
  SourceEdit,
  SourcePreview,
} from "@grouparoo/core/src/actions/sources";
import { PropertyCreate } from "@grouparoo/core/src/actions/properties";
import {
  ScheduleCreate,
  ScheduleRun,
} from "@grouparoo/core/src/actions/schedules";
import {
  DestinationCreate,
  DestinationEdit,
  DestinationMappingOptions,
} from "@grouparoo/core/src/actions/destinations";

const {
  appOptions,
  usersTableName,
  recordsDestinationTableName,
  groupsDestinationTableName,
} = getConfig();

describe("integration/runs/postgres", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => helper.disableTestPluginImport());
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  let session;
  let csrfToken;
  let model;
  let app;
  let source;
  let schedule;
  let destination;
  let group;

  beforeAll(async () => await beforeData());
  afterAll(async () => await afterData());

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
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      session
    );
    expect(sessionResponse.error).toBeUndefined();
    csrfToken = sessionResponse.csrfToken;

    // create a model
    session.params = {
      csrfToken,
      name: "Profiles",
      type: "profile",
    };
    const modelCreateResponse = await specHelper.runAction<ModelCreate>(
      "model:create",
      session
    );
    expect(modelCreateResponse.error).toBeUndefined();
    model = modelCreateResponse.model;

    // create a postgres app
    session.params = {
      csrfToken,
      name: "test app",
      type: "postgres",
      options: appOptions,
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
      name: "pg import source",
      type: "postgres-import-table",
      appId: app.id,
      modelId: model.id,
      options: { table: usersTableName },
      // mapping: { id: "userId" },
      // state: "ready",
    };
    const sourceResponse = await specHelper.runAction<SourceCreate>(
      "source:create",
      session
    );
    expect(sourceResponse.error).toBeUndefined();
    source = sourceResponse.source;

    // bootstrap
    session.params = {
      csrfToken,
      id: source.id,
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    };
    const bootstrapResponse =
      await specHelper.runAction<SourceBootstrapUniqueProperty>(
        "source:bootstrapUniqueProperty",
        session
      );
    expect(bootstrapResponse.error).toBeUndefined();
    expect(bootstrapResponse.property).toBeTruthy();

    // update source
    session.params = {
      csrfToken,
      id: source.id,
      mapping: { id: "userId" },
      state: "ready",
    };
    const sourceEditResponse = await specHelper.runAction<SourceEdit>(
      "source:edit",
      session
    );
    expect(sourceEditResponse.error).toBeUndefined();
    source = sourceEditResponse.source;

    // create the schedule
    session.params = {
      csrfToken,
      name: "test schedule",
      type: "postgres-import",
      sourceId: source.id,
      recurring: false,
      options: {
        column: "id",
      },
      state: "ready",
    };
    const buildScheduleResponse = await specHelper.runAction<ScheduleCreate>(
      "schedule:create",
      session
    );
    expect(buildScheduleResponse.error).toBeUndefined();
    expect(buildScheduleResponse.schedule.id).toBeTruthy();
    expect(buildScheduleResponse.schedule.name).toBe("test schedule");
    schedule = buildScheduleResponse.schedule;

    // create the destination
    session.params = {
      csrfToken,
      name: "test destination",
      type: "postgres-export-records",
      appId: app.id,
      modelId: model.id,
      options: {
        table: recordsDestinationTableName,
        primaryKey: "id",
        groupsTable: groupsDestinationTableName,
        groupForeignKey: "userId",
        groupColumnName: "group",
      },
    };
    const buildDestinationResponse =
      await specHelper.runAction<DestinationCreate>(
        "destination:create",
        session
      );
    expect(buildDestinationResponse.error).toBeUndefined();
    expect(buildDestinationResponse.destination.id).toBeTruthy();
    expect(buildDestinationResponse.destination.name).toBe("test destination");
    destination = buildDestinationResponse.destination;
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

  test("we can read the columns of the table", async () => {
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
    expect(Object.keys(preview[0]).sort()).toEqual([
      "account_id",
      "android_app",
      "date",
      "email",
      "first_name",
      "gender",
      "id",
      "ios_app",
      "ip_address",
      "last_name",
      "ltv",
      "stamp",
      "vip",
    ]);
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

  describe("create properties", () => {
    ["email", "first_name", "last_name"].forEach((propertyName) => {
      test(`add additional property: ${propertyName}`, async () => {
        // create the new rule
        session.params = {
          csrfToken,
          sourceId: source.id,
          key: propertyName,
          type: "string",
        };

        const { error, property, pluginOptions } =
          await specHelper.runAction<PropertyCreate>(
            "property:create",
            session
          );
        expect(error).toBeUndefined();
        expect(property.id).toBeTruthy();

        // check the pluginOptions
        expect(pluginOptions.length).toBe(2);
        expect(pluginOptions[0].key).toBe("column");
        expect(pluginOptions[1].key).toBe("aggregationMethod");
        expect(pluginOptions[0].required).toBe(true);
        expect(pluginOptions[0].options[0].key).toBe("id");
        expect(pluginOptions[1].options[0].key).toBe("exact");
        expect(pluginOptions[1].required).toBe(true);

        // set the options
        session.params = {
          csrfToken,
          id: property.id,
          unique: true,
          options: { column: propertyName, aggregationMethod: "exact" },
          state: "ready",
        };
        const { error: editError } = await specHelper.runAction(
          "property:edit",
          session
        );
        expect(editError).toBeUndefined();
      });
    });
  });

  test("create the test group", async () => {
    group = await helper.factories.group();
    await group.update({
      matchType: "all",
    });
    await group.setRules([
      {
        key: "email",
        match: "%@%",
        operation: { op: "iLike" },
      },
    ]);
  });

  test("we can read the postgres mapping options", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
    };
    const { error, options } =
      await specHelper.runAction<DestinationMappingOptions>(
        "destination:mappingOptions",
        session
      );
    expect(error).toBeUndefined();
    expect(options).toEqual({
      labels: {
        property: {
          singular: "Exported Property",
          plural: "Exported Properties",
        },
        group: { singular: "Exported Groups", plural: "Exported Groups" },
      },
      properties: {
        required: [{ key: "id", type: "any" }],
        known: [
          { key: "customer_email", type: "any", important: true },
          { key: "fname", type: "any", important: true },
          { key: "lname", type: "any", important: true },
        ],
        allowOptionalFromProperties: false,
      },
    });
  });

  test(`the destination group membership can be set and test group can be tracked`, async () => {
    const destinationGroupMemberships: Record<string, string> = {};
    destinationGroupMemberships[group.id] = group.name;

    session.params = {
      csrfToken,
      id: destination.id,
      destinationGroupMemberships,
      groupId: group.id,
      collection: "group",
    };
    const { error, destination: _destination } =
      await specHelper.runAction<DestinationEdit>("destination:edit", session);
    expect(error).toBeUndefined();
    expect(_destination.group.id).toBe(group.id);
    expect(_destination.destinationGroupMemberships).toEqual([
      {
        groupId: group.id,
        groupName: group.name,
        remoteKey: group.name,
      },
    ]);
  });

  test("the destination can use the new rule in a mapping and be made ready", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
      mapping: {
        id: "userId",
        customer_email: "email",
        fname: "first_name",
        lname: "last_name",
      },
      state: "ready",
    };
    const { error, destination: destinationResponse } =
      await specHelper.runAction<DestinationEdit>("destination:edit", session);
    expect(error).toBeUndefined();
    expect(destinationResponse.state).toBe("ready");
  });

  test(
    "a postgres schedule can run and create records",
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
      expect(foundAssociateTasks.length).toEqual(11);

      await Promise.all(
        foundAssociateTasks.map(
          async (t) =>
            await specHelper.runTask("import:associateRecord", t.args[0])
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

      // run the export:enqueue task
      await specHelper.runTask("export:enqueue", {});

      // run the export send tasks
      const foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      expect(foundSendTasks.length).toEqual(10);

      await Promise.all(
        foundSendTasks.map((t) => specHelper.runTask("export:send", t.args[0]))
      );

      // check the run's completion percentage (before the run is complete)
      await specHelper.runTask("schedule:run", { runId: run.id });
      await run.determinePercentComplete();
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
      const recordsCount = await GrouparooRecord.count();
      expect(recordsCount).toBe(10);

      await run.updateTotals();
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(11);
      expect(run.recordsCreated).toBe(10);
      expect(run.recordsImported).toBe(10);
      expect(run.highWaterMark).toEqual({ id: "10" });
      expect(run.sourceOffset).toBe("0");
      expect(run.error).toBeFalsy();
      expect(run.percentComplete).toBe(100);

      // check the destination
      const userRows = await api.sequelize.query(
        `SELECT * FROM ${recordsDestinationTableName} ORDER BY id ASC`
      );
      expect(userRows[0].length).toBe(10);
      expect(userRows[0][0].customer_email).toBe("ejervois0@example.com");

      const groupRows = await api.sequelize.query(
        `SELECT * FROM ${groupsDestinationTableName}`
      );
      expect(groupRows[0].length).toBe(10);
      expect(groupRows[0][0].group).toBe(group.name);
    },
    helper.longTime
  );

  test("records should be created with both the mapping data and additional record property", async () => {
    const recordId = (
      await RecordProperty.findOne({
        where: { rawValue: "1" },
      })
    ).recordId;
    const record = await GrouparooRecord.findOne({ where: { id: recordId } });
    const properties = await record.getProperties();
    expect(properties.userId.values).toEqual([1]);
    expect(properties.email.values).toEqual(["ejervois0@example.com"]);
  });

  test(
    "a postgres schedule can run and update records only finding updated records",
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
      expect(found.length).toEqual(2);
      expect(found[1].args[0].scheduleId).toBe(schedule.id);

      // run the schedule
      const run = await Run.findById(apiRun.id);

      // run the schedule twice to complete the run
      await specHelper.runTask("schedule:run", { runId: run.id });
      await specHelper.runTask("schedule:run", { runId: run.id });

      // run all enqueued associateRecord tasks
      const foundAssociateTasks = await specHelper.findEnqueuedTasks(
        "import:associateRecord"
      );
      expect(foundAssociateTasks.length).toEqual(11 + 1);

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

      // run the export:enqueue task
      await specHelper.runTask("export:enqueue", {});

      // run the export send tasks
      const foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
      // 1 new export from last time
      expect(foundSendTasks.length).toEqual(11);

      await Promise.all(
        foundSendTasks.map((t) => specHelper.runTask("export:send", t.args[0]))
      );

      // check the run's completion percentage (before the run is complete)
      await run.determinePercentComplete();
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
      const recordsCount = await GrouparooRecord.count();
      expect(recordsCount).toBe(10);

      await run.updateTotals();
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(1);
      expect(run.recordsCreated).toBe(0);
      expect(run.recordsImported).toBe(1);
      expect(run.highWaterMark).toEqual({ id: "10" });
      expect(run.sourceOffset).toBe("0");
      expect(run.error).toBeFalsy();
      expect(run.percentComplete).toBe(100);

      // check the destination
      const userRows = await api.sequelize.query(
        `SELECT * FROM ${recordsDestinationTableName} ORDER BY id ASC`
      );
      expect(userRows[0].length).toBe(10);
      expect(userRows[0][0].customer_email).toBe("ejervois0@example.com");

      const groupRows = await api.sequelize.query(
        `SELECT * FROM ${groupsDestinationTableName}`
      );
      expect(groupRows[0].length).toBe(10);
      expect(groupRows[0][0].group).toBe(group.name);
    },
    helper.longTime
  );
});
