import path from "path";
import fs from "fs";
import { EOL } from "os";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/logger": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { AsyncReturnType } from "type-fest";
import {
  GrouparooRecord,
  Group,
  SimpleAppOptions,
  App,
  Destination,
} from "@grouparoo/core";
import { SessionCreate } from "@grouparoo/core/src/actions/session";
import { AppCreate, AppTest } from "@grouparoo/core/src/actions/apps";
import {
  DestinationConnectionOptions,
  DestinationCreate,
  DestinationEdit,
  DestinationMappingOptions,
} from "@grouparoo/core/src/actions/destinations";

const appOptions: SimpleAppOptions = { filename: "log.log", stdout: true };
const destinationOptions = {};

function getLog(offset = 0) {
  const lines = fs
    .readFileSync(String(appOptions.filename))
    .toString()
    .split(EOL)
    .filter((line) => line.length > 2)
    .map((line) => JSON.parse(line))
    .slice(offset);
  return lines;
}

describe("integration/runs/logger", () => {
  let session;
  let csrfToken: string;
  let app: AsyncReturnType<App["apiData"]>;
  let recordA: GrouparooRecord;
  let recordB: GrouparooRecord;
  let recordC: GrouparooRecord;
  let destination: AsyncReturnType<Destination["apiData"]>;
  let group: Group;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    await helper.factories.properties();
    helper.disableTestPluginImport();
  });

  beforeAll(() => {
    if (fs.existsSync(String(appOptions.filename))) {
      fs.rmSync(String(appOptions.filename));
    }
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
    recordA = await helper.factories.record();
    recordB = await helper.factories.record();
    recordC = await helper.factories.record();

    await recordA.addOrUpdateProperties({
      email: ["mario@mario-bros-plumbing.biz"],
      firstName: ["Mario"],
      lastName: ["Mario"],
      userId: [100],
    });

    await recordB.addOrUpdateProperties({
      email: ["luigi@mario-bros-plumbing.biz"],
      firstName: ["Luigi"],
      lastName: ["Mario"],
      userId: [101],
    });

    // no email, will not be in group
    await recordC.addOrUpdateProperties({
      email: [null],
      firstName: ["Toad"],
      lastName: ["Toadstool"],
      userId: [102],
    });
  });

  test("an administrator can create the related import app and destination", async () => {
    // sign in
    session = await specHelper.buildConnection();
    session.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      session
    );
    expect(sessionResponse.error).toBeUndefined();
    csrfToken = sessionResponse.csrfToken;

    // create a logger app
    session.params = {
      csrfToken,
      name: "logger",
      type: "logger",
      options: appOptions,
      state: "ready",
    };
    const appResponse = await specHelper.runAction<AppCreate>(
      "app:create",
      session
    );
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the destination
    session.params = {
      csrfToken,
      name: "test destination",
      type: "logger-export-records",
      appId: app.id,
      options: destinationOptions,
      modelId: "mod_profiles",
      mapping: {
        "primary id": "userId",
        "secondary id": "email",
      },
      state: "ready",
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

  test("we can read the logger connection options", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
    };
    const { error, options } =
      await specHelper.runAction<DestinationConnectionOptions>(
        "destination:connectionOptions",
        session
      );
    expect(error).toBeUndefined();
    expect(options).toEqual({}); // there are no options
  });

  test("we can read the logger mapping options", async () => {
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
    const { labels, properties } = options;
    expect(labels).toEqual({
      property: {
        singular: "Logger Property",
        plural: "Logger Properties",
      },
      group: { singular: "Logger Tag", plural: "Logger Tags" },
    });

    expect(properties.required).toEqual([
      { key: "primary id", type: "string" },
    ]);
    const expected = ["secondary id"];
    const known = properties.known.map((p) => p.key);
    expect(known).toEqual(expect.arrayContaining(expected));
    const types = expected.map(
      (key) => properties.known.find((p) => p.key == key).type
    );
    expect(types).toEqual(["string"]);
  });

  test("create the test group and set the destination group membership", async () => {
    group = await helper.factories.group();
    await group.update({
      name: "logger people",
      matchType: "all",
    });
    await group.setRules([
      { key: "email", match: "%@%", operation: { op: "iLike" } },
    ]);
    await group.update({ state: "ready" });
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
        groupName: "logger people",
        remoteKey: "logger people",
      },
    ]);
  });

  test("a record can be created", async () => {
    await recordA.updateGroupMembership();
    await recordB.updateGroupMembership();
    await recordC.updateGroupMembership();
    await recordA.export();
    await recordB.export();
    await recordC.export();
  });

  test("logger has the new record data", async () => {
    const users = getLog();
    expect(users.length).toBe(2);

    const userA = users.find((u) => u.id === recordA.id);
    expect(userA.newGroups).toEqual(["logger people"]);
    expect(userA.oldGroups).toEqual([]);
    expect(userA.newRecordProperties).toEqual({
      "primary id": ["100"],
      "secondary id": ["mario@mario-bros-plumbing.biz"],
    });
    expect(userA.oldRecordProperties).toEqual({});

    const userB = users.find((u) => u.id === recordB.id);
    expect(userB.newGroups).toEqual(["logger people"]);
    expect(userB.oldGroups).toEqual([]);
    expect(userB.newRecordProperties).toEqual({
      "primary id": ["101"],
      "secondary id": ["luigi@mario-bros-plumbing.biz"],
    });
    expect(userB.oldRecordProperties).toEqual({});
  });

  test("a record can be updated", async () => {
    await recordA.addOrUpdateProperties({
      email: ["mario@mushroomkingdom.gov"],
    });

    await recordA.updateGroupMembership();
    await recordB.updateGroupMembership();
    await recordC.updateGroupMembership();
    await recordA.export();
    await recordB.export();
    await recordC.export();
  });

  test("logger has the updated record data", async () => {
    const users = getLog(2);
    expect(users.length).toBe(1);

    const userA = users.find((u) => u.id === recordA.id);
    expect(userA.newGroups).toEqual(["logger people"]);
    expect(userA.oldGroups).toEqual(["logger people"]);
    expect(userA.newRecordProperties).toEqual({
      "primary id": ["100"],
      "secondary id": ["mario@mushroomkingdom.gov"],
    });
    expect(userA.oldRecordProperties).toEqual({
      "primary id": ["100"],
      "secondary id": ["mario@mario-bros-plumbing.biz"],
    });

    // was not exported because there were no changes
    const userB = users.find((u) => u.id === recordB.id);
    expect(userB).toBeUndefined();
  });
});
