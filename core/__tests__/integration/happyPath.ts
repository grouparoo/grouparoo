import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Run } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import { AppCreate } from "../../src/actions/apps";
import { PropertyCreate } from "../../src/actions/properties";
import { RunsList } from "../../src/actions/runs";
import {
  ScheduleCreate,
  ScheduleEdit,
  ScheduleRun,
} from "../../src/actions/schedules";
import {
  RecordCreate,
  RecordsList,
  RecordView,
} from "../../src/actions/records";
import {
  GroupAddRecord,
  GroupCreate,
  GroupView,
} from "../../src/actions/groups";
import {
  SourceBootstrapUniqueProperty,
  SourceCreate,
  SourceEdit,
} from "../../src/actions/sources";

function simpleRecordValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleRecordProperties = {};
  keys.forEach((key) => {
    simpleRecordProperties[key] = complexProfileValues[key].values;
  });
  return simpleRecordProperties;
}

describe("integration/happyPath", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  let appId: string;
  let sourceId: string;
  let recordId: string;
  let scheduleId: string;
  let connection;
  let csrfToken: string;

  test("the first user can create an account and the first team", async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;

    expect(csrfToken).toBeTruthy();
  });

  test("an admin can create the first app", async () => {
    connection.params = {
      csrfToken,
      name: "test app",
      type: "test-plugin-app",
      options: { fileId: "abc123" },
      state: "ready",
    };
    const { error, app } = await specHelper.runAction<AppCreate>(
      "app:create",
      connection
    );

    expect(error).toBeUndefined();
    expect(app.id).toBeTruthy();
    expect(app.name).toBe("test app");
    expect(app.type).toBe("test-plugin-app");
    appId = app.id;
  });

  test("an admin can create the first source and bootstrap it with a property", async () => {
    connection.params = {
      csrfToken,
      name: "test source",
      type: "test-plugin-import",
      appId,
      options: { table: "users" },
    };
    const createResponse = await specHelper.runAction<SourceCreate>(
      "source:create",
      connection
    );

    expect(createResponse.error).toBeUndefined();
    expect(createResponse.source.id).toBeTruthy();
    expect(createResponse.source.name).toBe("test source");
    expect(createResponse.source.type).toBe("test-plugin-import");
    expect(createResponse.source.app.type).toBe("test-plugin-app");
    sourceId = createResponse.source.id;

    connection.params = {
      csrfToken,
      id: sourceId,
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    };
    const bootstrapResponse =
      await specHelper.runAction<SourceBootstrapUniqueProperty>(
        "source:bootstrapUniqueProperty",
        connection
      );
    expect(bootstrapResponse.error).toBeUndefined();
    expect(bootstrapResponse.property.id).toBeTruthy();

    connection.params = {
      csrfToken,
      id: sourceId,
      mapping: { id: "userId" },
      state: "ready",
    };
    const editResponse = await specHelper.runAction<SourceEdit>(
      "source:edit",
      connection
    );
    expect(editResponse.error).toBeUndefined();
    expect(editResponse.source.state).toBe("ready");
  });

  test("an admin can create properties", async () => {
    connection.params = {
      csrfToken,
      sourceId,
      key: "email",
      type: "string",
      unique: true,
      state: "ready",
      options: {
        column: "email",
      },
    };
    let { error } = await specHelper.runAction<PropertyCreate>(
      "property:create",
      connection
    );
    expect(error).toBeUndefined();

    connection.params = {
      csrfToken,
      sourceId,
      key: "firstName",
      type: "string",
      unique: false,
      state: "ready",
      options: {
        column: "firstName",
      },
    };
    await specHelper.runAction<PropertyCreate>("property:create", connection);

    connection.params = {
      csrfToken,
      sourceId,
      key: "lastName",
      type: "string",
      unique: false,
      state: "ready",
      options: {
        column: "lastName",
      },
    };
    await specHelper.runAction<PropertyCreate>("property:create", connection);

    connection.params = {
      csrfToken,
      sourceId,
      key: "ltv",
      type: "float",
      unique: false,
      state: "ready",
      options: {
        column: "ltv",
      },
    };
    await specHelper.runAction<PropertyCreate>("property:create", connection);
  });

  test("an admin can set the source mapping", async () => {
    connection.params = {
      csrfToken,
      id: sourceId,
      mapping: { email: "email" },
    };
    const { error, source } = await specHelper.runAction<SourceEdit>(
      "source:edit",
      connection
    );

    expect(error).toBeUndefined();
    expect(source.mapping).toEqual({ email: "email" });
  });

  describe("manual group", () => {
    let groupId;

    test("an admin can create a record", async () => {
      connection.params = {
        csrfToken,
        properties: {
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
          ltv: 100.12,
        },
      };
      const { error, record } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(simpleRecordValues(record.properties)).toEqual({
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        ltv: [100.12],
        userId: [null],
      });
      recordId = record.id;
    });

    test("an admin can create a manual group", async () => {
      connection.params = {
        csrfToken,
        name: "manual group",
        type: "manual",
        state: "ready",
      };

      const { error, group } = await specHelper.runAction<GroupCreate>(
        "group:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("manual group");
      expect(group.type).toBe("manual");
      expect(group.state).toBe("ready");
      groupId = group.id;
    });

    test("an admin can add a record to a manual group", async () => {
      connection.params = {
        csrfToken,
        id: groupId,
        recordId,
      };
      const { error, success } = await specHelper.runAction<GroupAddRecord>(
        "group:addRecord",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBeTruthy();
    });

    test("the record lists group memberships", async () => {
      connection.params = {
        csrfToken,
        id: recordId,
      };
      const { error, groups } = await specHelper.runAction<RecordView>(
        "record:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(groups[0].id).toBeTruthy();
      expect(groups[0].name).toBe("manual group");
    });

    test("the manual group lists the record as a member", async () => {
      connection.params = {
        csrfToken,
        id: groupId,
      };
      const { error, group } = await specHelper.runAction<GroupView>(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.recordsCount).toBe(1);

      connection.params = {
        csrfToken,
        id: groupId,
      };
      const { error: listError, records } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(listError).toBeUndefined();
      expect(records.length).toBe(1);
      expect(simpleRecordValues(records[0].properties).email).toEqual([
        "luigi@example.com",
      ]);
    });
  });

  describe("calculated group", () => {
    let groupId: string;

    test("a calculated group can be created", async () => {
      connection.params = {
        csrfToken,
        name: "calculated group",
        type: "calculated",
        rules: [
          { key: "lastName", operation: { op: "iLike" }, match: "mario" },
        ],
        state: "ready",
      };

      const { error, group } = await specHelper.runAction<GroupCreate>(
        "group:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.id).toBeTruthy();
      expect(group.name).toBe("calculated group");
      expect(group.type).toBe("calculated");
      expect(group.state).not.toBe("draft");
      groupId = group.id;
    });

    test("the run can be processed, along with the associated import chain", async () => {
      // group
      const runningRuns = await Run.findAll({
        where: { state: "running", creatorType: "group" },
      });
      expect(runningRuns.length).toBe(1);

      await specHelper.runTask("run:tick", {});
      await ImportWorkflow();
    });

    test("the record will be in the calculated group", async () => {
      connection.params = {
        csrfToken,
        id: groupId,
      };

      const { error, group } = await specHelper.runAction<GroupView>(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.recordsCount).toBe(1);

      connection.params = {
        csrfToken,
        id: groupId,
      };
      const { error: listError, records } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(listError).toBeUndefined();
      expect(records.length).toBe(1);
      expect(simpleRecordValues(records[0].properties).email[0]).toMatch(
        /@example.com/
      );
    });
  });

  describe("import", () => {
    test("a schedule can be created", async () => {
      connection.params = {
        csrfToken,
        sourceId,
        name: "the schedule",
        recurring: false,
      };
      const { error, schedule } = await specHelper.runAction<ScheduleCreate>(
        "schedule:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(schedule.id).toBeTruthy();

      scheduleId = schedule.id;
    });

    test("a schedule can be made ready", async () => {
      connection.params = {
        csrfToken,
        id: scheduleId,
        state: "ready",
        options: { maxColumn: "updatedAt" },
      };
      const { error, schedule } = await specHelper.runAction<ScheduleEdit>(
        "schedule:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(schedule.state).toBe("ready");
    });

    test("a run can be created", async () => {
      connection.params = {
        csrfToken,
        id: scheduleId,
      };
      const { error, run } = await specHelper.runAction<ScheduleRun>(
        "schedule:run",
        connection
      );
      expect(error).toBeUndefined();
      expect(run.id).toBeTruthy();

      const foundTasks = await specHelper.findEnqueuedTasks("schedule:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].scheduleId).toBe(scheduleId);

      // run the task
      await specHelper.runTask("schedule:run", foundTasks[0].args[0]);
    });

    test("the run was created", async () => {
      connection.params = {
        csrfToken,
        id: scheduleId,
      };
      const { error, runs } = await specHelper.runAction<RunsList>(
        "runs:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(runs.length).toBe(1);
      expect(runs[0].creatorId).toBe(scheduleId);
      expect(runs[0].state).toBe("complete");
    });
  });
});
