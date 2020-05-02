// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/mailchimp": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

// import statements are still relative to the file, regardless of cwd
import { helper } from "@grouparoo/core/api/__tests__/utils/specHelper";
import { specHelper } from "actionhero";
import { Profile, App, Destination, Group } from "@grouparoo/core/api/src";
import { generateMailchimpId } from "./../../src/lib/generateMailchimpId";
import { connect } from "./../../src/lib/connect";

// uncomment to use real HTTP requests
// import nock from "nock";
// nock.recorder.rec();

// load the saved nock recordings
require("./../fixtures/nock");

// API Keys
// Note: These are only needed when recording new nock fixtures
const MAILCHIMP_API_KEY =
  process.env.MAILCHIMP_API_KEY || "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us4"; // mailchimp client does local validation on API key
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || "a42c031026";

let api, actionhero;

describe("integration/runs/mailchimp", () => {
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
    api = env.api;
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
      email: "luigi@grouparoo.com",
      firstName: "Luigi",
      lastName: "Mario",
      userId: 100,
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
      options: { apiKey: MAILCHIMP_API_KEY },
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
      trackAllGroups: true,
      options: {
        listId: MAILCHIMP_LIST_ID,
      },
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
    expect(test.result).toBe(true);
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
    expect(options).toEqual({
      listId: {
        descriptions: ["Grouparoo", "Demo", "Staging"],
        options: ["23d8e9cb6e", "6f890f62ee", "a42c031026"],
        type: "list",
      },
    });
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
    expect(options).toEqual({
      labels: {
        profilePropertyRule: {
          singular: "Mailchimp Merge Var",
          plural: "Mailchimp Merge Vars",
        },
        group: { singular: "Mailchimp Tag", plural: "Mailchimp Tags" },
      },
      profilePropertyRules: {
        required: [{ key: "email_address", type: "email" }],
        known: [
          { key: "ADDRESS", type: "any" },
          { key: "COOL", type: "any" },
          { key: "FNAME", type: "any" },
          { key: "LNAME", type: "any" },
          { key: "LTV", type: "any" },
          { key: "PHONE", type: "any" },
          { key: "USERID", type: "any" },
        ],
        allowOptionalFromProfilePropertyRules: false,
      },
    });
  });

  test("create the test group and set the destination group membership", async () => {
    group = await helper.factories.group();
    await group.update({
      name: "mailchimp people",
      matchType: "all",
      type: "calculated",
    });
    await group.setRules([{ key: "email", match: "%@%", op: "iLike" }]);
    await group.update({ state: "ready" });
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
    const mailchimpId = generateMailchimpId("luigi@grouparoo.com");
    const client = await connect({ apiKey: MAILCHIMP_API_KEY });
    const response = await client.get(
      `/lists/${MAILCHIMP_LIST_ID}/members/${mailchimpId}`
    );
    expect(response.email_address).toBe("luigi@grouparoo.com");
    expect(response.status).toBe("subscribed");
    expect(response.merge_fields).toEqual({
      FNAME: "Luigi",
      LNAME: "Mario",
      ADDRESS: "",
      PHONE: "",
      USERID: 100,
      LTV: "",
      COOL: "",
    });
    expect(response.tags.map((t) => t.name)).toEqual(["mailchimp people"]);
  });
});
