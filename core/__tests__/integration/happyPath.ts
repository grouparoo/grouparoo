import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";

let actionhero;
let appGuid: string;
let sourceGuid: string;
let profileGuid: string;
let scheduleGuid: string;
let connection;
let csrfToken: string;

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].values;
  });
  return simpleProfileProperties;
}

describe("integration/happyPath", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    helper.disableTestPluginImport();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

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
      options: { fileGuid: "abc123" },
      state: "ready",
    };
    const { error, app } = await specHelper.runAction("app:create", connection);

    expect(error).toBeUndefined();
    expect(app.guid).toBeTruthy();
    expect(app.name).toBe("test app");
    expect(app.type).toBe("test-plugin-app");
    appGuid = app.guid;
  });

  test("an admin can create the first source and bootstrap it with a property", async () => {
    connection.params = {
      csrfToken,
      name: "test source",
      type: "test-plugin-import",
      appGuid,
      options: { table: "users" },
    };
    const createResponse = await specHelper.runAction(
      "source:create",
      connection
    );

    expect(createResponse.error).toBeUndefined();
    expect(createResponse.source.guid).toBeTruthy();
    expect(createResponse.source.name).toBe("test source");
    expect(createResponse.source.type).toBe("test-plugin-import");
    expect(createResponse.source.app.type).toBe("test-plugin-app");
    sourceGuid = createResponse.source.guid;

    connection.params = {
      csrfToken,
      guid: sourceGuid,
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    };
    const bootstrapResponse = await specHelper.runAction(
      "source:bootstrapUniqueProperty",
      connection
    );
    expect(bootstrapResponse.error).toBeUndefined();
    expect(bootstrapResponse.property.guid).toBeTruthy();

    connection.params = {
      csrfToken,
      guid: sourceGuid,
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
      sourceGuid,
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
      sourceGuid,
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
      sourceGuid,
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
      sourceGuid,
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
      guid: sourceGuid,
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
    let groupGuid;

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
      expect(profile.guid).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        ltv: [100.12],
        userId: [null],
      });
      profileGuid = profile.guid;
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
      expect(group.guid).toBeTruthy();
      expect(group.name).toBe("manual group");
      expect(group.type).toBe("manual");
      expect(group.state).toBe("ready");
      groupGuid = group.guid;
    });

    test("an admin can add a profile to a manual group", async () => {
      connection.params = {
        csrfToken,
        guid: groupGuid,
        profileGuid,
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
        guid: profileGuid,
      };
      const { error, groups } = await specHelper.runAction(
        "profile:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(groups[0].guid).toBeTruthy();
      expect(groups[0].name).toBe("manual group");
    });

    test("the manual group lists the profile as a member", async () => {
      connection.params = {
        csrfToken,
        guid: groupGuid,
      };
      const { error, group } = await specHelper.runAction(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.profilesCount).toBe(1);

      connection.params = {
        csrfToken,
        guid: groupGuid,
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
    let groupGuid: string;

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
      expect(group.guid).toBeTruthy();
      expect(group.name).toBe("calculated group");
      expect(group.type).toBe("calculated");
      expect(group.state).not.toBe("draft");
      groupGuid = group.guid;
    });

    test("the group#run task can be run, along with the associated import chain", async () => {
      let tasks = [];

      // group
      tasks = await specHelper.findEnqueuedTasks("group:run");
      expect(tasks.length).toBe(1);
      await specHelper.runTask("group:run", tasks[0].args[0]);

      // profiles
      await specHelper.runTask("profiles:checkReady", {});
      tasks = await specHelper.findEnqueuedTasks("profile:completeImport");
      expect(tasks.length).toBe(1);
      expect(tasks[0].args[0].profileGuid).toBe(profileGuid);
      await specHelper.runTask("profile:completeImport", tasks[0].args[0]);
    });

    test("the profile will be in the calculated group", async () => {
      connection.params = {
        csrfToken,
        guid: groupGuid,
      };

      const { error, group } = await specHelper.runAction(
        "group:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(group.profilesCount).toBe(1);

      connection.params = {
        csrfToken,
        guid: groupGuid,
      };
      const { listError, profiles } = await specHelper.runAction(
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

  describe("import", () => {
    test("a schedule can be created", async () => {
      connection.params = {
        csrfToken,
        sourceGuid,
        name: "the schedule",
        recurring: false,
      };
      const { error, schedule } = await specHelper.runAction(
        "schedule:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(schedule.guid).toBeTruthy();

      scheduleGuid = schedule.guid;
    });

    test("a schedule can be made ready", async () => {
      connection.params = {
        csrfToken,
        guid: scheduleGuid,
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
        guid: scheduleGuid,
      };
      const { error, success } = await specHelper.runAction(
        "schedule:run",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);

      const foundTasks = await specHelper.findEnqueuedTasks("schedule:run");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].scheduleGuid).toBe(scheduleGuid);

      // run the task
      await specHelper.runTask("schedule:run", foundTasks[0].args[0]);
    });

    test("the run was created", async () => {
      connection.params = {
        csrfToken,
        guid: scheduleGuid,
      };
      const { error, runs } = await specHelper.runAction(
        "runs:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(runs.length).toBe(1);
      expect(runs[0].creatorGuid).toBe(scheduleGuid);
      expect(runs[0].state).toBe("complete");
    });
  });
});
