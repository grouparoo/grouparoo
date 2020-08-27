// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { exportBatch } from "../../src/lib/export/exportProfiles";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profiles.js");

// these comments to use nock
//const newNock = false;
//require("./../fixtures/export-profiles");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

let client: any;

const email1 = "brian@bleonard.com";
const guid1 = "pro1";
let userId1 = null;

const email2 = "brian2@bleonard.com";
const guid2 = "pro2";
let userId2 = null;

async function findId(email) {
  const response = await client.lead.find("email", [email]);
  const results = response.result;
  if (results.length === 0) {
    return null;
  } else if (results.length > 1) {
    throw `more than one email result! ${email}`;
  }
  return results[0].id;
}
async function getUser(id) {
  const response = await client.lead.find("id", [id]);
  const results = response.result;
  if (results.length === 0) {
    return null;
  } else if (results.length > 1) {
    throw `more than one id result! ${id}`;
  }
  return results[0];
}
async function deleteUsers(suppressErrors) {
  const emails = [email1, email2];
  const marketoIds = [];
  for (const email of emails) {
    const id = await findId(email);
    if (id) {
      marketoIds.push({ id });
    }
  }
  if (marketoIds.length === 0) {
    return;
  }
  const path = "/v1/leads.json?_method=DELETE";
  const data = { input: marketoIds };
  const response = await client.lead._connection.postJson(path, data);
  console.log("delete response", JSON.stringify(response));
}

describe("marketo/exportProfiles", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await deleteUsers(false);
  }, 1000 * 30);

  afterAll(async () => {
    // await deleteUsers(true);
  }, 1000 * 30);

  test("can create profile on Marketo", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {},
          newProfileProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();
    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();
    const user = await getUser(userId1);
    expect(user.email).toBe(email1);
    expect(user.firstName).toBe("Brian");
    expect(user.lastName).toBe(null);
  });

  test("can add/edit user variables and do multiple users", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { email: email1, firstName: "Brian" },
          newProfileProperties: {
            email: email1,
            firstName: "John",
            lastName: "Smith",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: {},
          newProfileProperties: { email: email2, firstName: "Andy" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();
    user = await getUser(userId1);
    expect(user.email).toBe(email1);
    expect(user.firstName).toBe("John");
    expect(user.lastName).toBe("Smith");

    expect(success).toBe(true);
    expect(errors).toBeNull();
    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();
    user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.firstName).toBe("Andy");
  });

  test("can clear user variables", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            email: email1,
            firstName: "John",
            lastName: "Smith",
          },
          newProfileProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();
    user = await getUser(userId1);
    expect(user.email).toBe(email1);
    expect(user.firstName).toBe("Brian");
    expect(user.lastName).toBe(null);
  });

  // change email
  // delete
  // lists
  // all the different types
  // find a way to make some errors (bad data?) to check status messages
});
