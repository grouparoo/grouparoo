import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";

import { api, specHelper } from "actionhero";
import { Profile, Property, ProfileProperty, Run } from "@grouparoo/core";

import { beforeData, afterData, getConfig } from "../utils/data";

const {
  appOptions,
  usersTableName,
  profilesDestinationTableName,
  groupsDestinationTableName,
} = getConfig();

describe("integration/runs/mysql", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let client;
  let session;
  let csrfToken;
  let app;
  let source;
  let schedule;
  let destination;
  let group;

  beforeAll(async () => ({ client } = await beforeData()));

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  afterAll(async () => {
    await afterData();
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

    // create a mysql app
    session.params = {
      csrfToken,
      name: "test app",
      type: "mysql",
      options: appOptions,
      state: "ready",
    };
    const appResponse = await specHelper.runAction("app:create", session);
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the source
    session.params = {
      csrfToken,
      name: "mysql source",
      type: "mysql-table-import",
      appId: app.id,
      options: { table: usersTableName },
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
      type: "mysql-import",
      sourceId: source.id,
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
    expect(buildScheduleResponse.schedule.id).toBeTruthy();
    expect(buildScheduleResponse.schedule.name).toBe("test schedule");
    schedule = buildScheduleResponse.schedule;

    // create the destination
    session.params = {
      csrfToken,
      name: "test destination",
      type: "mysql-export",
      appId: app.id,
      options: {
        table: profilesDestinationTableName,
        primaryKey: "id",
        groupsTable: groupsDestinationTableName,
        groupForeignKey: "userId",
        groupColumnName: "group",
      },
    };
    const buildDestinationResponse = await specHelper.runAction(
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
    const { error, test } = await specHelper.runAction("app:test", session);
    expect(error).toBeUndefined();
    expect(test.success).toBe(true);
    expect(test.error).toBeUndefined();
  });

  test("we can read the columns of the table", async () => {
    session.params = {
      csrfToken,
      id: source.id,
    };
    const { error, preview } = await specHelper.runAction(
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

  test("replace the email property with a new one for this source", async () => {
    // delete the old rule
    const oldProperty = await Property.findOne({
      where: { key: "email" },
    });
    await oldProperty.destroy();

    // create the new rule
    session.params = {
      csrfToken,
      sourceId: source.id,
      key: "email",
      type: "string",
    };

    const { error, property, pluginOptions } = await specHelper.runAction(
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
      options: { column: "email", aggregationMethod: "exact" },
      state: "ready",
    };
    const { error: editError } = await specHelper.runAction(
      "property:edit",
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
        operation: { op: "iLike" },
      },
    ]);
  });

  test("we can read the mysql mapping options", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
    };
    const { error, options } = await specHelper.runAction(
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
    const destinationGroupMemberships = {};
    destinationGroupMemberships[group.id] = group.name;

    session.params = {
      csrfToken,
      id: destination.id,
      destinationGroupMemberships,
      trackedGroupId: group.id,
    };
    const { error, destination: _destination } = await specHelper.runAction(
      "destination:edit",
      session
    );
    expect(error).toBeUndefined();
    expect(_destination.destinationGroup.id).toBe(group.id);
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
        fname: "firstName",
        lname: "lastName",
      },
      state: "ready",
    };
    const { error, destination: destinationResponse } =
      await specHelper.runAction("destination:edit", session);
    expect(error).toBeUndefined();
    expect(destinationResponse.state).toBe("ready");
  });

  test(
    "a mysql schedule can run and create profiles",
    async () => {
      // enqueue the run
      session.params = {
        csrfToken,
        id: schedule.id,
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
      expect(foundAssociateTasks.length).toEqual(11);

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
      const profilesCount = await Profile.count();
      expect(profilesCount).toBe(10);

      await run.updateTotals();
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(11);
      expect(run.profilesCreated).toBe(10);
      expect(run.profilesImported).toBe(10);
      expect(run.highWaterMark).toEqual({ id: "10" });
      expect(run.sourceOffset).toBe("0");
      expect(run.error).toBeFalsy();
      expect(run.percentComplete).toBe(100);

      // check the destination
      const userRows = await client.asyncQuery(
        `SELECT * FROM ${profilesDestinationTableName}`
      );
      expect(userRows.length).toBe(10);
      expect(userRows[0].customer_email).toBe("ejervois0@example.com");

      const groupRows = await client.asyncQuery(
        `SELECT * FROM ${groupsDestinationTableName}`
      );
      expect(groupRows.length).toBe(10);
      expect(groupRows[0].group).toBe(group.name);
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
    const properties = await profile.properties();
    expect(properties.userId.values).toEqual([1]);
    expect(properties.email.values).toEqual(["ejervois0@example.com"]);
  });

  test(
    "a mysql schedule can run and update profiles only finding updated records",
    async () => {
      // enqueue the run
      session.params = {
        csrfToken,
        id: schedule.id,
      };
      const { error, success } = await specHelper.runAction(
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
      expect(foundAssociateTasks.length).toEqual(11 + 1);

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
      const profilesCount = await Profile.count();
      expect(profilesCount).toBe(10);

      await run.updateTotals();
      expect(run.state).toBe("complete");
      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(1);
      expect(run.highWaterMark).toEqual({ id: "10" });
      expect(run.sourceOffset).toBe("0");
      expect(run.error).toBeFalsy();
      expect(run.percentComplete).toBe(100);

      // check the destination
      const userRows = await client.asyncQuery(
        `SELECT * FROM ${profilesDestinationTableName}`
      );
      expect(userRows.length).toBe(10);
      expect(userRows[0].customer_email).toBe("ejervois0@example.com");

      const groupRows = await client.asyncQuery(
        `SELECT * FROM ${groupsDestinationTableName}`
      );
      expect(groupRows.length).toBe(10);
      expect(groupRows[0].group).toBe(group.name);
    },
    helper.longTime
  );
});
