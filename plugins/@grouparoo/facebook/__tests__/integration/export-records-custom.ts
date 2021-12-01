import { helper } from "@grouparoo/spec-helper";
import {
  exportRecords,
  setTestFunction,
} from "../../src/lib/export-custom/exportRecords";
import { sha } from "../../src/lib/export/data";
import { Client, connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
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
    const recordId = `manyguid${i}`;
    out.push({ email, recordId });
  }
  return out;
}

async function getAudience(id) {
  try {
    const audience = client.audience(id);
    const fields = ["id", "name", "subtype"]; // approximate_count removed?
    const params = {};
    await audience.get(fields, params);
    return audience;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function findAudienceId(name) {
  try {
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
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deleteAudiences(suppressErrors) {
  try {
    const names = [list1, list2, list3];
    for (const name of names) {
      const id = await findAudienceId(name);
      if (id) {
        await client.audience(id).delete();
      }
    }
  } catch (err) {
    console.log(err);
    if (!suppressErrors) {
      throw err;
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

describe("facebook/audiences-custom/exportRecords", () => {
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

    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { EMAIL: email1, FN: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
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

    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { EMAIL: email1, FN: "Brian" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
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

    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: { EMAIL: email1, FN: "Brian" },
          newRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: { EMAIL: email2, FN: "Andy", LN: " Jones" },
          oldGroups: [],
          newGroups: [list2],
          toDelete: false,
          record: null,
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
    // expect(audience.approximate_count).toBeLessThan(10);

    audience = await getAudience(listId2);
    expect(audience.name).toEqual(list2);
    expect(audience.subtype).toEqual("CUSTOM");
    // expect(audience.approximate_count).toBeLessThan(10);

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

  test("can delete a user", async () => {
    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: true,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { EMAIL: email2, FN: "Andy", LN: " Jones" },
          newRecordProperties: { EMAIL: email2, FN: "Andy", LN: "OK" },
          oldGroups: [list2],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

    let audience;
    audience = await getAudience(listId1);
    expect(audience.name).toEqual(list1);
    expect(audience.subtype).toEqual("CUSTOM");
    // expect(audience.approximate_count).toBeLessThan(10);

    audience = await getAudience(listId2);
    expect(audience.name).toEqual(list2);
    expect(audience.subtype).toEqual("CUSTOM");
    // expect(audience.approximate_count).toBeLessThan(10);

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

  test("removes user when no longer in group", async () => {
    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

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
    for (const { email, recordId } of manyUsers) {
      exports.push({
        recordId,
        oldRecordProperties: {},
        newRecordProperties: { EMAIL: email },
        oldGroups: [],
        newGroups: [list3],
        toDelete: false,
        record: null,
      });
    }
    exports.push({
      id1,
      oldRecordProperties: {},
      newRecordProperties: { EMAIL: email1 },
      oldGroups: [],
      newGroups: [list3],
      toDelete: false,
      record: null,
    });

    const { success, errors } = await exportRecords({
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
    // expect(audience.approximate_count).toBeGreaterThan(100);

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
    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newRecordProperties: {
            EMAIL: newEmail1,
            FN: "Brian",
            LN: "Simpson",
          },
          oldGroups: [list1],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(success).toBe(true);
    expect(errors).toBeNull();

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
    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          oldGroups: [list1],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: {},
          newRecordProperties: {
            EMAIL: "junkemail",
            FN: "Bad",
            LN: "Email",
          },
          oldGroups: [list3],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.recordId === id3);
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
    const { success, errors } = await exportRecords({
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
          recordId: id1,
          oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
          newRecordProperties: {
            EMAIL: email1,
            FN: "Brian",
            EXTERN_ID: "67",
            ZIP: "71711",
          },
          oldGroups: [list1],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: {},
          newRecordProperties: {
            EMAIL: email3,
            FN: "Sam",
            EXTERN_ID: "",
            ZIP: "",
          },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
      ],
    });
    expect(success).toBe(false);
    expect(errors.length).toBe(1);
    let error;
    error = errors.find((e) => e.recordId === id3);
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
      const { success, errors } = await exportRecords({
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
            recordId: id1,
            oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            newRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: true,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: { EMAIL: email2, FN: "Andy", LN: " Jones" },
            newRecordProperties: { EMAIL: email2, FN: "Andy", LN: "OK" },
            oldGroups: [list2],
            newGroups: [list1, list2],
            toDelete: false,
            record: null,
          },
        ],
      });
      expect(success).toBe(false);
      expect(errors.length).toBe(1);
      let error;
      error = errors.find((e) => e.recordId === id1);
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
      const { success, errors } = await exportRecords({
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
            recordId: id1,
            oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            newRecordProperties: {
              EMAIL: newEmail1,
              FN: "Brian",
              LN: "Simpson",
            },
            oldGroups: [list1],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
        ],
      });
      expect(success).toBe(false);
      expect(errors.length).toBe(1);
      let error;
      error = errors.find((e) => e.recordId === id1);
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
      const { success, errors } = await exportRecords({
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
            recordId: id1,
            oldRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            newRecordProperties: { EMAIL: email1, FN: "Brian", LN: "Simpson" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
        ],
      });
      expect(success).toBe(false);
      expect(errors.length).toBe(1);
      let error;
      error = errors.find((e) => e.recordId === id1);
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
