import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/facebook": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import {
  exportProfiles,
  setTestFunction,
} from "../../src/lib/export-custom/exportProfiles";
import { sha } from "../../src/lib/export/data";
import { Client, connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-profiles-custom.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profiles-custom");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_a0bb05e8-0a4e-49b5-ad42-545f2e8662e6";

const destinationId = "dst_b0bb05e8-0a4e-49b5-ad42-545f2e8662e6";
const destinationOptions = {
  primaryKey: "EMAIL",
};

const syncOperations = DestinationSyncModeData.sync.operations;
const additiveSyncOperations = DestinationSyncModeData.additive.operations;

let client: Client;

const email1 = "brian@demo.com";
const id1 = "pro1";
const newEmail1 = "other@demo.com";

const email2 = "user2@demo.com";
const id2 = "pro2";

const email3 = "user3@demo.com";
const id3 = "pro3";

const list1 = "(test) Group 1";
let listId1 = null;

const list2 = "(test) Group 2";
let listId2 = null;

const list3 = "(test) Group 3";
let listId3 = null;

const manyUsers = getUserList(150);

function getUserList(count) {
  const template = "testuser@demo.com";
  const out = [];
  for (let i = 1; i <= count; i++) {
    const email = template.replace("@", `${i}@`);
    const profileId = `manyguid${i}`;
    out.push({ email, profileId });
  }
  return out;
}

async function getAudience(id) {
  const audience = client.audience(id);
  const fields = ["id", "name", "subtype", "approximate_count"];
  const params = {};
  await audience.get(fields, params);
  return audience;
}

async function findAudienceId(name) {
  const adAccount = client.adAccount();
  const fields = ["id", "name"];
  const params = {};
  const result = await adAccount.getCustomAudiences(fields, params);
  for (const audience of result) {
    if (name === audience.name) {
      audience._changes = {}; // this is needed for some reason
      return audience.id;
    }
  }
  return null;
}

async function deleteAudiences(suppressErrors) {
  const names = [list1, list2, list3];
  for (const name of names) {
    const id = await findAudienceId(name);
    if (id) {
      await client.audience(id).delete();
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteAudiences(suppressErrors);
}

let _sentValues;
function setupTest() {
  _sentValues = [];
  setTestFunction((data) => {
    _sentValues.push(data);
  });
}
function getSentValues() {
  return _sentValues;
}

describe("facebook/audiences-custom/exportProfiles", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  beforeEach(() => {
    setupTest();
  });

  test("doesn't do anything if no groups", async () => {
    listId1 = await findAudienceId(list1);
    expect(listId1).toBe(null);

    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: { EMAIL: email1, FN: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

    const sent = getSentValues();
    expect(sent.length).toEqual(0); // nothing sent

    listId1 = await findAudienceId(list1);
    expect(listId1).toBe(null);
  });

  test("can add to an audience", async () => {
    listId1 = await findAudienceId(list1);
    expect(listId1).toBe(null);

    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: {},
          newProfileProperties: { EMAIL: email1, FN: "Brian" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

    listId1 = await findAudienceId(list1);
    expect(listId1).toBeTruthy();

    let audience;
    audience = await getAudience(listId1);
    expect(audience.name).toEqual(list1);
    expect(audience.subtype).toEqual("CUSTOM");

    const sent = getSentValues();
    expect(sent.length).toEqual(1);
    let call, schema, data, row;
    call = sent[0];
    schema = call.payload.schema;
    data = call.payload.data;
    expect(call.action).toEqual("ADD");
    expect(call.name).toEqual(list1);
    expect(call.id).toEqual(listId1);
    expect(schema).toEqual(["EMAIL", "FN"]);
    expect(data.length).toEqual(1);
    row = data[0];
    expect(row).toEqual([sha(email1), sha("brian")]);
  });

  test("can add to multiple audiences", async () => {
    listId2 = await findAudienceId(list2);
    expect(listId2).toBe(null);

    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { EMAIL: email1, FN: "Brian" },
          newProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: {},
          newProfileProperties: { EMAIL: email2, FN: "Andy", LN: " Jones" },
          oldGroups: [],
          newGroups: [list2],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

    listId2 = await findAudienceId(list2);
    expect(listId2).toBeTruthy();

    let audience;
    audience = await getAudience(listId1);
    expect(audience.name).toEqual(list1);
    expect(audience.subtype).toEqual("CUSTOM");
    expect(audience.approximate_count).toBeLessThan(10);

    audience = await getAudience(listId2);
    expect(audience.name).toEqual(list2);
    expect(audience.subtype).toEqual("CUSTOM");
    expect(audience.approximate_count).toBeLessThan(10);

    const sent = getSentValues();
    expect(sent.length).toEqual(2);
    let call, schema, data;

    call = sent.find((c) => c.id === listId1);
    schema = call.payload.schema;
    data = call.payload.data;
    expect(call.action).toEqual("ADD");
    expect(call.name).toEqual(list1);
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1), sha("brian"), sha("simpson")]);

    call = sent.find((c) => c.id === listId2);
    schema = call.payload.schema;
    data = call.payload.data;
    expect(call.action).toEqual("ADD");
    expect(call.name).toEqual(list2);
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(2);
    expect(data).toContainEqual([sha(email1), sha("brian"), sha("simpson")]);
    expect(data).toContainEqual([sha(email2), sha("andy"), sha("jones")]);
  });

  test("has issues deleting from small group", async () => {
    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: true,
          profile: null,
        },
        {
          profileId: id2,
          oldProfileProperties: { EMAIL: email2, FN: "Andy", LN: " Jones" },
          newProfileProperties: { EMAIL: email2, FN: "Andy", LN: "OK" },
          oldGroups: [list2],
          newGroups: [list1, list2],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.profileId === id1);
    expect(error.message).toContain(
      "cannot remove users from this audience because it will result in a low audience size"
    );
    expect(error.message).toContain(listId1);
    expect(error.message).toContain(listId2);

    let audience;
    audience = await getAudience(listId1);
    expect(audience.name).toEqual(list1);
    expect(audience.subtype).toEqual("CUSTOM");
    expect(audience.approximate_count).toBeLessThan(10);

    audience = await getAudience(listId2);
    expect(audience.name).toEqual(list2);
    expect(audience.subtype).toEqual("CUSTOM");
    expect(audience.approximate_count).toBeLessThan(10);

    const sent = getSentValues();
    expect(sent.length).toEqual(4);
    let call, schema, data;

    call = sent.find((c) => c.id === listId1 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email2), sha("andy"), sha("ok")]);

    call = sent.find((c) => c.id === listId2 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email2), sha("andy"), sha("ok")]);

    call = sent.find((c) => c.id === listId1 && c.action === "REMOVE");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1)]);

    call = sent.find((c) => c.id === listId2 && c.action === "REMOVE");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1)]);
  });

  test("removes user (low issue) when no longer in group", async () => {
    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.profileId === id1);
    expect(error.message).toContain(
      "cannot remove users from this audience because it will result in a low audience size"
    );
    expect(error.message).toContain(listId2);

    const sent = getSentValues();
    expect(sent.length).toEqual(2);
    let call, schema, data;

    call = sent.find((c) => c.id === listId1 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1), sha("brian"), sha("simpson")]);

    call = sent.find((c) => c.id === listId2 && c.action === "REMOVE");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1)]);
  });

  test("adds lots of people to list", async () => {
    listId3 = await findAudienceId(list3);
    expect(listId3).toBe(null);

    const exports = [];
    for (const { email, profileId } of manyUsers) {
      exports.push({
        profileId,
        oldProfileProperties: {},
        newProfileProperties: { EMAIL: email },
        oldGroups: [],
        newGroups: [list3],
        toDelete: false,
        profile: null,
      });
    }
    exports.push({
      id1,
      oldProfileProperties: {},
      newProfileProperties: { EMAIL: email1 },
      oldGroups: [],
      newGroups: [list3],
      toDelete: false,
      profile: null,
    });

    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports,
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

    listId3 = await findAudienceId(list3);
    expect(listId3).toBeTruthy();

    let audience;
    audience = await getAudience(listId3);
    expect(audience.name).toEqual(list3);
    expect(audience.subtype).toEqual("CUSTOM");
    expect(audience.approximate_count).toBeGreaterThan(100);

    const sent = getSentValues();
    expect(sent.length).toEqual(1);
    let call, schema, data;

    call = sent.find((c) => c.id === listId3 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(call.name).toEqual(list3);
    expect(schema).toEqual(["EMAIL"]);
    expect(data.length).toEqual(manyUsers.length + 1);
    expect(data).toContainEqual([sha(manyUsers[manyUsers.length - 1].email)]);
    expect(data).toContainEqual([sha(email1)]);
  });

  test("can change user email address", async () => {
    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newProfileProperties: {
            EMAIL: newEmail1,
            FN: "Brian",
            LN: "Simpson",
          },
          oldGroups: [list1],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.profileId === id1);
    expect(error.message).toContain(
      "cannot remove users from this audience because it will result in a low audience size"
    );
    expect(error.message).toContain(listId1);

    const sent = getSentValues();
    expect(sent.length).toEqual(2);
    let call, schema, data;

    // adds new one
    call = sent.find((c) => c.id === listId1 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(newEmail1), sha("brian"), sha("simpson")]);

    // deletes old one
    call = sent.find((c) => c.id === listId1 && c.action === "REMOVE");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1)]);
  });

  test("will error on local invalidated data", async () => {
    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id3,
          oldProfileProperties: {},
          newProfileProperties: {
            EMAIL: "junkemail",
            FN: "Bad",
            LN: "Email",
          },
          oldGroups: [list3],
          newGroups: [list1, list2],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.profileId === id3);
    expect(error.message).toContain(
      "Invalid email format for the passed email"
    );

    const sent = getSentValues();
    expect(sent.length).toEqual(1);
    let call, schema, data;

    call = sent.find((c) => c.id === listId1 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL", "FN", "LN"]);
    expect(data.length).toEqual(1);
    expect(data).toContainEqual([sha(email1), sha("brian"), sha("simpson")]);
  });

  test("can add more properties and handle server error", async () => {
    const { success, errors } = await exportProfiles({
      appId,
      appOptions,
      destinationId,
      destinationOptions,
      syncOperations,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileId: id1,
          oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newProfileProperties: {
            EMAIL: email1,
            FN: "Brian",
            EXTERN_ID: "67",
            ZIP: "71711",
          },
          oldGroups: [list1],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
        {
          profileId: id3,
          oldProfileProperties: {},
          newProfileProperties: {
            EMAIL: email3,
            FN: "Sam",
            EXTERN_ID: "",
            ZIP: "",
          },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.profileId === id3);
    expect(error.message).toContain("empty external ID");

    const sent = getSentValues();
    expect(sent.length).toEqual(1);
    let call, schema, data;

    call = sent.find((c) => c.id === listId1 && c.action === "ADD");
    schema = call.payload.schema;
    data = call.payload.data;
    expect(schema).toEqual(["EMAIL", "EXTERN_ID", "FN", "LN", "ZIP"]);
    expect(data.length).toEqual(2);
    expect(data).toContainEqual([
      sha(email1),
      "67",
      sha("brian"),
      "",
      sha("71711"),
    ]);
    expect(data).toContainEqual([sha(email3), "", sha("sam"), "", ""]);
  });

  describe("Additive destination sync Mode", () => {
    const syncOperations = additiveSyncOperations;
    test("skips deleting", async () => {
      const { success, errors } = await exportProfiles({
        appId,
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations,
        connection: null,
        app: null,
        destination: null,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            newProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: true,
            profile: null,
          },
          {
            profileId: id2,
            oldProfileProperties: { EMAIL: email2, FN: "Andy", LN: " Jones" },
            newProfileProperties: { EMAIL: email2, FN: "Andy", LN: "OK" },
            oldGroups: [list2],
            newGroups: [list1, list2],
            toDelete: false,
            profile: null,
          },
        ],
      });
      expect(success).toBe(false);
      expect(errors.length).toBe(1);
      let error;
      error = errors.find((e) => e.profileId === id1);
      expect(error.message).toEqual("Destination is not removing.");

      const sent = getSentValues();
      expect(sent.length).toEqual(2);
      let call, schema, data;

      call = sent.find((c) => c.id === listId1 && c.action === "ADD");
      schema = call.payload.schema;
      data = call.payload.data;
      expect(schema).toEqual(["EMAIL", "FN", "LN"]);
      expect(data.length).toEqual(1);
      expect(data).toContainEqual([sha(email2), sha("andy"), sha("ok")]);

      call = sent.find((c) => c.id === listId2 && c.action === "ADD");
      schema = call.payload.schema;
      data = call.payload.data;
      expect(schema).toEqual(["EMAIL", "FN", "LN"]);
      expect(data.length).toEqual(1);
      expect(data).toContainEqual([sha(email2), sha("andy"), sha("ok")]);
    });

    test("keeps both when change user email address", async () => {
      const { success, errors } = await exportProfiles({
        appId,
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations,
        connection: null,
        app: null,
        destination: null,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            newProfileProperties: {
              EMAIL: newEmail1,
              FN: "Brian",
              LN: "Simpson",
            },
            oldGroups: [list1],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
        ],
      });
      expect(success).toBe(false);
      expect(errors.length).toBe(1);
      let error;
      error = errors.find((e) => e.profileId === id1);
      expect(error.message).toEqual("Destination is not removing.");

      const sent = getSentValues();
      expect(sent.length).toEqual(1);
      let call, schema, data;

      // adds new one
      call = sent.find((c) => c.id === listId1 && c.action === "ADD");
      schema = call.payload.schema;
      data = call.payload.data;
      expect(schema).toEqual(["EMAIL", "FN", "LN"]);
      expect(data.length).toEqual(1);
      expect(data).toContainEqual([
        sha(newEmail1),
        sha("brian"),
        sha("simpson"),
      ]);

      // does not delete old one
    });

    test("does not remove user when no longer in group", async () => {
      const { success, errors } = await exportProfiles({
        appId,
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations,
        connection: null,
        app: null,
        destination: null,
        exports: [
          {
            profileId: id1,
            oldProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            newProfileProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            profile: null,
          },
        ],
      });
      expect(success).toBe(false);
      expect(errors.length).toBe(1);
      let error;
      error = errors.find((e) => e.profileId === id1);
      expect(error.message).toEqual("Destination is not removing.");

      const sent = getSentValues();
      expect(sent.length).toEqual(1);
      let call, schema, data;

      call = sent.find((c) => c.id === listId1 && c.action === "ADD");
      schema = call.payload.schema;
      data = call.payload.data;
      expect(schema).toEqual(["EMAIL", "FN", "LN"]);
      expect(data.length).toEqual(1);
      expect(data).toContainEqual([sha(email1), sha("brian"), sha("simpson")]);

      // does not remove from old one
    });
  });
});
