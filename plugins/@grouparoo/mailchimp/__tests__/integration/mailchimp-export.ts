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
import { generateMailchimpId } from "./../../src/lib/shared/generateMailchimpId";
import { connect } from "./../../src/lib/connect";
import {
  loadAppOptions,
  loadDestinationOptions,
  updater,
} from "../utils/nockHelper";

const nockFile = path.join(__dirname, "../", "fixtures", "mailchimp-export.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/mailchimp-export");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const destinationOptions: SimpleDestinationOptions = loadDestinationOptions(
  newNock
);

let actionhero;

describe("integration/runs/mailchimp-export", () => {
  let client;
  let session;
  let csrfToken: string;
  let app: App;
  let profile: Profile;
  let destination: Destination;
  let group: Group;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
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

  beforeAll(async () => {
    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      email: ["luigi@grouparoo.com"],
      firstName: ["Luigi"],
      lastName: ["Mario"],
      userId: [100],
    });
  });

  afterAll(async () => {
    await client.end();
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
      type: "mailchimp-export",
      appGuid: app.guid,
      options: destinationOptions,
      mapping: {
        email_address: "email",
        USERID: "userId",
        FNAME: "firstName",
        LNAME: "lastName",
      },
      state: "ready",
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
    expect(test.success).toBe(true);
    expect(test.error).toBeUndefined();
  });

  test("we can read the mailchimp connection options", async () => {
    session.params = {
      csrfToken,
      guid: destination.guid,
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
      guid: destination.guid,
    };
    const { error, options } = await specHelper.runAction(
      "destination:mappingOptions",
      session
    );
    expect(error).toBeUndefined();
    const { labels, profilePropertyRules } = options;
    expect(labels).toEqual({
      profilePropertyRule: {
        singular: "Mailchimp Merge Var",
        plural: "Mailchimp Merge Vars",
      },
      group: { singular: "Mailchimp Tag", plural: "Mailchimp Tags" },
    });

    expect(profilePropertyRules.required).toEqual([
      { key: "email_address", type: "email" },
    ]);
    const expected = ["FNAME", "LNAME", "LTV", "USERID"];
    const known = profilePropertyRules.known.map((p) => p.key);
    expect(known).toEqual(expect.arrayContaining(expected));
    const types = expected.map(
      (key) => profilePropertyRules.known.find((p) => p.key == key).type
    );
    expect(types).toEqual(["string", "string", "number", "number"]);
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
      guid: destination.guid,
      groupGuid: group.guid,
    };
    await specHelper.runAction("destination:trackGroup", session);
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
        groupName: "mailchimp people",
        remoteKey: "mailchimp people",
      },
    ]);
  });

  test("a profile can be exported", async () => {
    await profile.updateGroupMembership();
    await profile.export();
  });

  test("mailchimp has the profile data", async () => {
    const { listId } = destinationOptions;
    const mailchimpId = generateMailchimpId("luigi@grouparoo.com");
    const client = await connect(appOptions);
    const response = await client.get(
      `/lists/${listId}/members/${mailchimpId}`
    );
    expect(response.email_address).toBe("luigi@grouparoo.com");
    expect(response.status).toBe("subscribed");
    expect(response.merge_fields).toEqual(
      expect.objectContaining({
        FNAME: "Luigi",
        LNAME: "Mario",
        USERID: 100,
        LTV: "",
      })
    );
    expect(response.tags.map((t) => t.name)).toEqual(["mailchimp people"]);
  });
});
