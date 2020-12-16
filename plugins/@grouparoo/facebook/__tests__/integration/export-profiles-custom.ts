import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/facebook": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { exportProfiles } from "../../src/lib/export/exportProfiles";
import { Client, connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-profiles-custom.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-profiles-custom");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

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

async function deleteAudiences(suppressErrors) {
  const names = [list1, list2];
  const adAccount = client.adAccount();
  const fields = ["id", "name", "data_source", "subtype"];
  const params = {};
  const result = await adAccount.getCustomAudiences(fields, params);
  for (const audience of result) {
    if (names.includes(audience.name)) {
      audience._changes = {}; // this is needed for some reason
      await audience.delete();
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteAudiences(suppressErrors);
}

describe("facebook/audiences-custom/exportProfiles", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    // await cleanUp(true);
  }, helper.setupTime);

  test("doesn't do anything if no groups", async () => {
    // userId1 = await findId(email1);
    // expect(userId1).toBe(null);
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

    // userId1 = await findId(email1);
    // expect(userId1).toBeTruthy();
    // const user = await getUser(userId1);
    // expect(user.email).toBe(email1);
    // expect(user.firstName).toBe("Brian");
    // expect(user.lastName).toBe(null);
  });

  test("can add to an audience", async () => {
    // userId1 = await findId(email1);
    // expect(userId1).toBe(null);
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

    // userId1 = await findId(email1);
    // expect(userId1).toBeTruthy();
    // const user = await getUser(userId1);
    // expect(user.email).toBe(email1);
    // expect(user.firstName).toBe("Brian");
    // expect(user.lastName).toBe(null);
  });
});
