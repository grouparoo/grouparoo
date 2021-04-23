import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mailchimp": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import {
  Profile,
  App,
  Destination,
  Group,
  SimpleDestinationOptions,
  SimpleAppOptions,
} from "@grouparoo/core";
import { generateMailchimpId } from "../../src/lib/shared/generateMailchimpId";
import { connect } from "../../src/lib/connect";
import {
  loadAppOptions,
  loadDestinationOptions,
  updater,
} from "../utils/nockHelper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "mailchimp-export-id.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/mailchimp-export-id");
// // or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// change this when recording if you really want it to be a new user (recommended)
const email1 = "testid3039@grouparoo.com";

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const destinationOptions: SimpleDestinationOptions = loadDestinationOptions(
  newNock
);

let client;

const mailchimpId1 = generateMailchimpId(email1);

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

async function deleteUsers(suppressErrors) {
  const emails = [email1];
  const { listId } = destinationOptions;
  for (const email of emails) {
    try {
      const mailchimpId = generateMailchimpId(email);
      await client.delete(`/lists/${listId}/members/${mailchimpId}`);
    } catch (err) {}
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
}

describe("integration/runs/mailchimp-export-id", () => {
  let session;
  let csrfToken: string;
  let app: App;
  let profile: Profile;
  let destination: Destination;
  let group: Group;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
    await client.end();
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
    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      email: [email1],
      firstName: ["Luigi"],
      lastName: [mailchimpId1], // using this existing string field to hold id

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

  test("Create the user so it can be updated", async () => {
    const { listId } = destinationOptions;
    const exists = !!(await getUser(email1));
    if (!exists) {
      const payload = {
        email_address: email1,
        status: "subscribed",
      };
      await client.post(`/lists/${listId}/members`, payload);
    }
  });

  test("an administrator can create the related import app and destination", async () => {
    // sign in
    session = await specHelper.buildConnection();
    session.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction(
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
    const appResponse = await specHelper.runAction("app:create", session);
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the destination
    session.params = {
      csrfToken,
      name: "test destination",
      type: "mailchimp-export-id",
      appId: app.id,
      options: destinationOptions,
      mapping: {
        // doesn't have email
        mailchimp_id: "lastName", // using this existing string field to hold id
        USERID: "userId",
        FNAME: "firstName",
      },
      state: "ready",
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

  test("we can read the mailchimp connection options", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
    };
    const { error, options } = await specHelper.runAction(
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
    const { error, options } = await specHelper.runAction(
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
      { key: "mailchimp_id", type: "string" },
    ]);
    const expected = ["FNAME", "LNAME", "LTV", "USERID", "email_address"];
    const known = properties.known.map((p) => p.key);
    expect(known).toEqual(expect.arrayContaining(expected));
    const types = expected.map(
      (key) => properties.known.find((p) => p.key == key).type
    );
    expect(types).toEqual(["string", "string", "number", "number", "email"]);
  });

  test("create the test group and set the destination group membership", async () => {
    group = await helper.factories.group();
    await group.update({
      name: "mailchimp people",
      matchType: "all",
      type: "calculated",
    });
    await group.setRules([
      { key: "email", match: "%@%", operation: { op: "iLike" } },
    ]);
    await group.update({ state: "ready" });
  });

  test("track the test group with the destination", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
      groupId: group.id,
    };
    await specHelper.runAction("destination:trackGroup", session);
  });

  test(`the destination group membership can be set`, async () => {
    const destinationGroupMemberships = {};
    destinationGroupMemberships[group.id] = group.name;

    session.params = {
      csrfToken,
      id: destination.id,
      destinationGroupMemberships,
    };
    const { error, destination: _destination } = await specHelper.runAction(
      "destination:edit",
      session
    );
    expect(error).toBeUndefined();
    expect(_destination.destinationGroupMemberships).toEqual([
      {
        groupId: group.id,
        groupName: "mailchimp people",
        remoteKey: "mailchimp people",
      },
    ]);
  });

  test("a profile can be created", async () => {
    await profile.updateGroupMembership();
    await profile.export();
  });

  test("mailchimp has the new profile data", async () => {
    const user = await getUser(email1);
    expect(user.email_address).toBe(email1);
    expect(user.status).toBe("subscribed");
    expect(user.merge_fields).toEqual(
      expect.objectContaining({
        FNAME: "Luigi",
        USERID: 100,
        LTV: "",
      })
    );
    expect(user.tags.map((t) => t.name)).toEqual(["mailchimp people"]);
  });

  test("a profile can be updated", async () => {
    await profile.addOrUpdateProperties({
      firstName: ["Test2"],
    });

    await profile.updateGroupMembership();
    await profile.export();
  });

  test("mailchimp has the updated profile data", async () => {
    const user = await getUser(email1);
    expect(user.email_address).toBe(email1);
    expect(user.status).toBe("subscribed");
    expect(user.merge_fields).toEqual(
      expect.objectContaining({
        FNAME: "Test2",
        USERID: 100,
        LTV: "",
      })
    );
    expect(user.tags.map((t) => t.name)).toEqual(["mailchimp people"]);
  });
});
