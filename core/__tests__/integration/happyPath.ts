import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Run } from "../../src";

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].values;
  });
  return simpleProfileProperties;
}

describe("integration/happyPath", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });

  let appId: string;
  let sourceId: string;
  let profileId: string;
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
    const sessionResponse = await specHelper.runAction(
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
    const { error, app } = await specHelper.runAction("app:create", connection);

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
    const createResponse = await specHelper.runAction(
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
    const bootstrapResponse = await specHelper.runAction(
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
    const editResponse = await specHelper.runAction("source:edit", connection);
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
    let { error } = await specHelper.runAction("property:create", connection);
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
    await specHelper.runAction("property:create", connection);

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
    await specHelper.runAction("property:create", connection);

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
    await specHelper.runAction("property:create", connection);
  });

  test("an admin can set the source mapping", async () => {
    connection.params = {
      csrfToken,
      id: sourceId,
      mapping: { email: "email" },
    };
    const { error, source } = await specHelper.runAction(
      "source:edit",
      connection
    );

    expect(error).toBeUndefined();
    expect(source.mapping).toEqual({ email: "email" });
  });

  describe("manual group", () => {
    let groupId;

    test("an admin can create a profile", async () => {
      connection.params = {
        csrfToken,
        properties: {
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
          ltv: 100.12,
        },
      };
      const { error, profile } = await specHelper.runAction(
        "profile:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.id).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        ltv: [100.12],
        userId: [null],
      });
      profileId = profile.id;
    });

    test("an admin can create a manual group", async () => {
      connection.params = {
        csrfToken,
        name: "manual group",
        type: "manual",
        state: "ready",
      };

      const { error, group } = await specHelper.runAction(
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

    test("an admin can add a profile to a manual group", async () => {
      connection.params = {
        csrfToken,
        id: groupId,
        profileId,
      };
      const { error, success } = await specHelper.runAction(
        "group:addProfile",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBeTruthy();
    });

    test("the profile lists group memberships", async () => {
      connection.params = {
        csrfToken,
        id: profileId,
      };
      const { error, groups } = await specHelper.runAction(
        "profile:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(groups[0].id).toBeTruthy();
      expect(groups[0].name).toBe("manual group");
    });

    test("the manual group lists the profile as a member", async () => {
      connection.params = {
        csrfToken,
        id: groupId,
      };
      const { error, group } = await specHelper.runAction(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.profilesCount).toBe(1);

      connection.params = {
        csrfToken,
        id: groupId,
      };
      const { error: listError, profiles } = await specHelper.runAction(
        "profiles:list",
        connection
      );
      expect(listError).toBeUndefined();
      expect(profiles.length).toBe(1);
      expect(simpleProfileValues(profiles[0].properties).email).toEqual([
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

      const { error, group } = await specHelper.runAction(
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

    test("the profile will be in the calculated group", async () => {
      connection.params = {
        csrfToken,
        id: groupId,
      };

      const { error, group } = await specHelper.runAction(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.profilesCount).toBe(1);

      connection.params = {
        csrfToken,
        id: groupId,
      };
      const { listError, profiles } = await specHelper.runAction(
        "profiles:list",
        connection
      );
      expect(listError).toBeUndefined();
      expect(profiles.length).toBe(1);
      expect(simpleProfileValues(profiles[0].properties).email[0]).toMatch(
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
      const { error, schedule } = await specHelper.runAction(
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
      const { error, schedule } = await specHelper.runAction(
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
      const { error, success } = await specHelper.runAction(
        "schedule:run",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);

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
      const { error, runs } = await specHelper.runAction(
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
