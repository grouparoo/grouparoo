import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/hubspot": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Profile, App, Destination, Group } from "@grouparoo/core";
import { connect } from "./../../src/lib/connect";

// uncomment to use real HTTP requests
// import nock from "nock";
// nock.recorder.rec();

// load the saved nock recordings
require("./../fixtures/nock");

// API Keys
// Note: These are only needed when recording new nock fixtures
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || "xxxxxxxxxxxxxxxxx";

let actionhero;

describe("integration/runs/hubspot", () => {
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

    // create a hubspot app
    session.params = {
      csrfToken,
      name: "test app",
      type: "hubspot",
      options: { hapikey: HUBSPOT_API_KEY },
      state: "ready",
    };
    const appResponse = await specHelper.runAction("app:create", session);
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the destination
    session.params = {
      csrfToken,
      name: "test destination",
      type: "hubspot-export",
      appGuid: app.guid,
      mapping: {
        email: "email",
        firstname: "firstName",
        lastname: "lastName",
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

  test("there are no destination options to read", async () => {
    session.params = {
      csrfToken,
      guid: destination.guid,
    };
    const { error, options } = await specHelper.runAction(
      "destination:connectionOptions",
      session
    );
    expect(error).toBeUndefined();
    expect(options).toEqual({});
  });

  test("we can read the hubspot mapping options", async () => {
    session.params = {
      csrfToken,
      guid: destination.guid,
    };
    const { error, options } = await specHelper.runAction(
      "destination:mappingOptions",
      session
    );
    expect(error).toBeUndefined();
    expect(options.labels).toEqual({
      profilePropertyRule: {
        singular: "Hubspot Contact Property",
        plural: "Hubspot Contact Properties",
      },
      group: { singular: "Hubspot List", plural: "Hubspot Lists" },
    });
    expect(options.profilePropertyRules.required).toEqual([
      { key: "email", type: "email" },
    ]);
    expect(
      options.profilePropertyRules.allowOptionalFromProfilePropertyRules
    ).toEqual(false);

    const hubspotPropertyNames = options.profilePropertyRules.known.map(
      (o) => o.key
    );
    expect(hubspotPropertyNames).not.toContain("email");
    expect(hubspotPropertyNames).toContain("firstname");
    expect(hubspotPropertyNames).toContain("lastname");
  });

  test("create the test group and set the destination group membership", async () => {
    group = await helper.factories.group();
    await group.update({
      name: "hubspot people",
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
        groupName: "hubspot people",
        remoteKey: "hubspot people",
      },
    ]);
  });

  test("a profile can be exported", async () => {
    await profile.updateGroupMembership();
    await profile.export();
  });

  test("hubspot has the profile data", async () => {
    const client = await connect({ hapikey: HUBSPOT_API_KEY });
    const contact = await client.contacts.getByEmail("luigi@grouparoo.com");
    expect(contact.properties.email.value).toBe("luigi@grouparoo.com");
    expect(contact.properties.firstname.value).toBe("Luigi");
    expect(contact.properties.lastname.value).toBe("Mario");
    expect(contact["list-memberships"].length).toBe(1); // we would need to look up the list to check the name;
  });
});
