import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/hubspot": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Profile, App, Destination, Group } from "@grouparoo/core";
import { connect } from "./../../src/lib/connect";
import Axios from "axios";
import { loadAppOptions, updater } from "../utils/nockHelper";

const nockFile = path.join(__dirname, "../", "fixtures", "hubspot-export.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/hubspot-export");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

const email1 = "luigi@example.com";
const list1 = "<test> hubspot people";

let client;

async function cleanUp(suppressErrors) {
  try {
    await deleteUsers();
    await deleteLists();
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteUsers() {
  const emails = [email1];
  for (const email of emails) {
    try {
      const contact = await client.getContactByEmail(email);
      if (contact) {
        await client.deleteContact(contact.vid);
      }
    } catch (error) {
      if (!error.toString().match(/Request failed with status code 404/)) {
        throw error;
      }
    }
  }
}

async function deleteLists() {
  const lists = [list1];

  const { data } = await Axios({
    method: "GET",
    url: `https://api.hubapi.com/contacts/v1/lists/static?hapikey=${appOptions.hapikey}&count=999`,
    headers: { "Content-Type": "application/json" },
  });
  const hubspotLists = data.lists;

  for (const listName of lists) {
    const found = hubspotLists.filter((list) => list.name === listName)[0];
    if (found) {
      await Axios({
        method: "DELETE",
        url: `https://api.hubapi.com/contacts/v1/lists/${found.listId}?hapikey=${appOptions.hapikey}`,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}

describe("integration/runs/hubspot", () => {
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
      lastName: ["Plumber"],
      userId: [100],
    });
  });

  afterAll(async () => {
    await cleanUp(true);
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
      type: "hubspot-export",
      appId: app.id,
      syncMode: "TODO",
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

  test("there are no destination options to read", async () => {
    session.params = {
      csrfToken,
      id: destination.id,
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
      id: destination.id,
    };
    const { error, options } = await specHelper.runAction(
      "destination:mappingOptions",
      session
    );
    expect(error).toBeUndefined();
    expect(options.labels).toEqual({
      property: {
        singular: "Hubspot Contact Property",
        plural: "Hubspot Contact Properties",
      },
      group: { singular: "Hubspot List", plural: "Hubspot Lists" },
    });
    expect(options.properties.required).toEqual([
      { key: "email", type: "email" },
    ]);
    expect(options.properties.allowOptionalFromProperties).toEqual(false);

    const hubspotPropertyNames = options.properties.known.map((o) => o.key);
    expect(hubspotPropertyNames).not.toContain("email");
    expect(hubspotPropertyNames).toContain("firstname");
    expect(hubspotPropertyNames).toContain("lastname");
  });

  test("create the test group and set the destination group membership", async () => {
    group = await helper.factories.group();
    await group.update({
      name: list1,
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
        groupName: list1,
        remoteKey: list1,
      },
    ]);
  });

  test("a profile can be exported", async () => {
    await profile.updateGroupMembership();
    await profile.export();
  });

  test("hubspot has the profile data", async () => {
    const contact = await client.getContactByEmail(email1);
    expect(contact.properties.email.value).toBe(email1);
    expect(contact.properties.firstname.value).toBe("Luigi");
    expect(contact.properties.lastname.value).toBe("Plumber");
    expect(contact["list-memberships"].length).toBe(1); // we would need to look up the list to check the name;
  });
});
