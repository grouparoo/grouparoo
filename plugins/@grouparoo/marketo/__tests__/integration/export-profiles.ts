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

const list1 = "(test) High Value";
let listId1 = null;

const list2 = "(test) Churned";
let listId2 = null;

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
async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await deleteLists(suppressErrors);
}
async function findListId(name) {
  const path = "/asset/v1/staticList/byName.json";
  const options = { query: { name } };
  const response = await client.list._connection.get(path, options);
  const results = response.result || [];
  if (results.length > 1) {
    throw `multiple lists found: ${name}`;
  } else if (results.length === 0) {
    return null;
  }
  return results[0].id;
}
async function getListMemberIds(listId) {
  const response = await client.list.getLeads(listId);
  const results = response.result;
  return results.map((result) => result.id);
}
async function deleteLists(suppressErrors) {
  const names = [list1, list2];
  for (const name of names) {
    const id = await findListId(name);
    if (id) {
      const path = `/asset/v1/staticList/${id}/delete.json`;
      const response = await client.list._connection.post(path);
      const results = response.result || [];
      if (results.length === 0 && !suppressErrors) {
        throw `could not delete list (${id}): ${name}`;
      }
    }
  }
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
  if (!suppressErrors && !response.success) {
    throw new Error(`delete failed!`);
  }
}

describe("marketo/exportProfiles", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, 1000 * 30);

  afterAll(async () => {
    // await cleanUp(true);
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

  test("can add to and create lists", async () => {
    listId1 = await findListId(list1);
    expect(listId1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { email: email1, firstName: "Brian" },
          newProfileProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    listId1 = await findListId(list1);
    expect(listId1).toBeTruthy();
    const members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("wait a bit for the list to take hold", async () => {
    await helper.sleep(2500);
  });

  test("can add multiple users to lists", async () => {
    listId2 = await findListId(list2);
    expect(listId2).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { email: email1, firstName: "Brian" },
          newProfileProperties: { email: email1, firstName: "Brian" },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid1,
          oldProfileProperties: { email: email2, firstName: "Andy" },
          newProfileProperties: { email: email2, firstName: "Sally" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();
    listId2 = await findListId(list2);
    expect(listId2).toBeTruthy();

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([userId1].sort());

    let user;
    user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.firstName).toBe("Sally");
    expect(user.lastName).toBe(null);
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { email: email1, firstName: "Brian" },
          newProfileProperties: { email: email1, firstName: "Brian" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid1,
          oldProfileProperties: { email: email2, firstName: "Andy" },
          newProfileProperties: { email: email2, firstName: "Sally" },
          oldGroups: [list2],
          newGroups: [list1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([]);
  });

  // change email
  // delete
  // all the different types
  // find a way to make some errors (bad data?) to check status messages
});
