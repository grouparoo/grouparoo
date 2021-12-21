import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mailchimp": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { AsyncReturnType } from "type-fest";
import { api, specHelper } from "actionhero";
import {
  GrouparooRecord,
  Group,
  SimpleDestinationOptions,
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
import { generateMailchimpId } from "../../src/lib/shared/generateMailchimpId";
import { connect } from "../../src/lib/connect";
import {
  loadAppOptions,
  loadDestinationOptions,
  updater,
} from "../utils/nockHelper";

// change this when recording if you really want it to be a new user (recommended)
const email1 = "test3039@grouparoo.com";

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const destinationOptions: SimpleDestinationOptions =
  loadDestinationOptions(newNock);

let client;

async function getUser(email) {
  const { listId } = destinationOptions;
  const mailchimpId = generateMailchimpId(email);
  try {
    const response = await client.get(
      `/lists/${listId}/members/${mailchimpId}`
    );
    if (!response.unique_email_id || response.status === "archived") {
      return null;
    }
    return response;
  } catch (err) {
    return null;
  }
}

async function deleteUsers() {
  const emails = [email1];
  const { listId } = destinationOptions;
  for (const email of emails) {
    try {
      const mailchimpId = generateMailchimpId(email);
      await client.delete(`/lists/${listId}/members/${mailchimpId}`);
    } catch (err) {}
  }
}

async function cleanUp() {
  await deleteUsers();
}

describe("integration/runs/mailchimp-export-contacts", () => {
  let session;
  let csrfToken: string;
  let app: AsyncReturnType<App["apiData"]>;
  let record: GrouparooRecord;
  let destination: AsyncReturnType<Destination["apiData"]>;
  let group: Group;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  });

  beforeAll(async () => {
    await helper.factories.properties();
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

  beforeAll(async () => {
    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      email: [email1],
      firstName: ["Luigi"],
      lastName: ["Plumber"],
      userId: [100],
    });
  });

  test("User should not exist or be archived", async () => {
    const user = await getUser(email1);
    if (user) {
      expect(user.status).toBe("archived");
    } else {
      expect(user).toBeNull();
    }
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

    // create a mailchimp app
    session.params = {
      csrfToken,
      name: "test app",
      type: "mailchimp",
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
      type: "mailchimp-export-contacts",
      appId: app.id,
      options: destinationOptions,
      modelId: "mod_profiles",
      mapping: {
        email_address: "email",
        USERID: "userId",
        FNAME: "firstName",
        LNAME: "lastName",
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

  test("we can read the mailchimp connection options", async () => {
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

    const listId = options.listId;
    expect(listId.options.length).toBeGreaterThan(0);
    expect(listId.descriptions.length).toEqual(listId.options.length);
    expect(listId.type).toEqual("list");
  });

  test("we can read the mailchimp mapping options", async () => {
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
        singular: "Mailchimp Merge Var",
        plural: "Mailchimp Merge Vars",
      },
      group: { singular: "Mailchimp Tag", plural: "Mailchimp Tags" },
    });

    expect(properties.required).toEqual([
      { key: "email_address", type: "email" },
    ]);
    const expected = ["FNAME", "LNAME", "LTV", "USERID"];
    const known = properties.known.map((p) => p.key);
    expect(known).toEqual(expect.arrayContaining(expected));
    const types = expected.map(
      (key) => properties.known.find((p) => p.key == key).type
    );
    expect(types).toEqual(["string", "string", "number", "number"]);
  });

  test("create the test group and set the destination group membership", async () => {
    group = await helper.factories.group();
    await group.update({
      name: "mailchimp people",
      matchType: "all",
    });
    await group.setRules([
      { key: "email", match: "%@%", operation: { op: "iLike" } },
    ]);
    await group.update({ state: "ready" });
  });

  test(`the destination group membership can be set and test group can be tracked`, async () => {
    const destinationGroupMemberships = {};
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
        groupName: "mailchimp people",
        remoteKey: "mailchimp people",
      },
    ]);
  });

  test("a record can be created", async () => {
    await record.updateGroupMembership();
    await record.export();
  });

  test("mailchimp has the new record data", async () => {
    const user = await getUser(email1);
    expect(user.email_address).toBe(email1);
    expect(user.status).toBe("subscribed");
    expect(user.merge_fields).toEqual(
      expect.objectContaining({
        FNAME: "Luigi",
        LNAME: "Plumber",
        USERID: 100,
        LTV: "",
      })
    );
    expect(user.tags.map((t) => t.name)).toEqual(["mailchimp people"]);
  });

  test("a record can be updated", async () => {
    await record.addOrUpdateProperties({
      firstName: ["Test2"],
    });

    await record.updateGroupMembership();
    await record.export();
  });

  test("mailchimp has the updated record data", async () => {
    const user = await getUser(email1);
    expect(user.email_address).toBe(email1);
    expect(user.status).toBe("subscribed");
    expect(user.merge_fields).toEqual(
      expect.objectContaining({
        FNAME: "Test2",
        LNAME: "Plumber",
        USERID: 100,
        LTV: "",
      })
    );
    expect(user.tags.map((t) => t.name)).toEqual(["mailchimp people"]);
  });
});
