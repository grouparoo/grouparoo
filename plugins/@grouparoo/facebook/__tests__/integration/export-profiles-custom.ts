import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/facebook": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import {
  exportProfiles,
  setTestFunction,
} from "../../src/lib/export/exportProfiles";
import { sha } from "../../src/lib/export/data";
import { Client, connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";

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
const appGuid = "app_a0bb05e8-0a4e-49b5-ad42-545f2e8662e6";

const destinationGuid = "dst_b0bb05e8-0a4e-49b5-ad42-545f2e8662e6";
const destinationOptions = {
  primaryKey: "EMAIL",
};

let client: Client;

const email1 = "brian@demo.com";
const guid1 = "pro1";
const newEmail1 = "other@demo.com";
let userId1 = null;

const email2 = "brian2@demo.com";
const guid2 = "pro2";
let userId2 = null;

const email3 = "brian3@demo.com";
const guid3 = "pro3";
let userId3 = null;

const list1 = "(test) High Value";
let listId1 = null;

const list2 = "(test) Churned";
let listId2 = null;

async function getAudience(id) {
  const audience = client.audience(id);
  // "approximate_count" always -1!
  const fields = ["id", "name", "subtype"];
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
  const names = [list1, list2];
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
    // await cleanUp(true);
  }, helper.setupTime);

  beforeEach(() => {
    setupTest();
  });

  test("doesn't do anything if no groups", async () => {
    listId1 = await findAudienceId(list1);
    expect(listId1).toBe(null);

    const { success, errors } = await exportProfiles({
      appGuid,
      appOptions,
      destinationGuid,
      destinationOptions,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileGuid: guid1,
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
      appGuid,
      appOptions,
      destinationGuid,
      destinationOptions,
      connection: null,
      app: null,
      destination: null,
      exports: [
        {
          profileGuid: guid1,
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
    expect(sent.length).toEqual(1); // nothing sent
    let call, schema, data, row;
    call = sent[0];
    schema = call.payload.schema;
    data = call.payload.data;
    expect(call.action).toEqual("ADD");
    expect(call.name).toEqual(list1);
    expect(schema).toEqual(["EMAIL", "FN"]);
    row = data[0];
    expect(row).toEqual([sha(email1), sha("brian")]);
  });
});
