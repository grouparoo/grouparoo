// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { exportBatch } from "../../src/lib/export-objects/exportProfiles";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "export-objects",
  "export-profiles-email.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-objects/export-profiles-email");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

let client: any;

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

const group1 = "(test) High Value";
let groupId1 = null;

const group2 = "(test) Churned";
let groupId2 = null;

const idType = "Id";

const profileObject = "Contact";
const profileMatchField = "Email";
const groupObject = "Campaign";
const groupNameField = "Name";
const membershipObject = "CampaignMember";
const membershipProfileField = "ContactId";
const membershipGroupField = "CampaignId";

const destinationOptions = {
  profileObject,
  profileMatchField,
  groupObject,
  groupNameField,
  membershipObject,
  membershipProfileField,
  membershipGroupField,
};

async function findId(value) {
  const query = { [profileMatchField]: value };
  const fields = [idType];
  const results = await client.sobject(profileObject).find(query, fields);
  if (results.length === 0) {
    return null;
  } else if (results.length > 1) {
    throw `more than one result! ${profileMatchField} == ${value}`;
  }
  return results[0][idType];
}
async function getUser(id) {
  try {
    const row = await client.sobject(profileObject).retrieve(id);
    return row;
  } catch (err) {
    if (err.errorCode === "NOT_FOUND") {
      return null;
    }
    throw err;
  }
}
async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await deleteGroups(suppressErrors);
}
async function findGroupId(value) {
  const query = { [groupNameField]: value };
  const fields = [idType];
  const results = await client.sobject(groupObject).find(query, fields);
  if (results.length === 0) {
    return null;
  } else if (results.length > 1) {
    throw `more than one result! ${groupNameField} == ${value}`;
  }
  return results[0][idType];
}
async function getGroupMemberIds(groupId) {
  const query = { [membershipGroupField]: groupId };
  const fields = [membershipProfileField];
  const results = await client.sobject(membershipObject).find(query, fields);
  return results.map((result) => result[membershipProfileField]);
}
async function deleteGroups(suppressErrors) {
  const names = [group1, group2];
  const ids = [];
  for (const name of names) {
    const id = await findGroupId(name);
    if (id) {
      ids.push(id);
    }
  }
  if (ids.length === 0) {
    return;
  }
  try {
    const allOrNone = true;
    await client.sobject(groupObject).del(ids, { allOrNone });
  } catch (error) {
    console.log("delete error", error);
    if (!suppressErrors) {
      throw error;
    }
  }
}
async function deleteUsers(suppressErrors) {
  const values = [email1, email2, email3, newEmail1];
  const ids = [];
  for (const value of values) {
    const id = await findId(value);
    if (id) {
      ids.push(id);
    }
  }
  if (ids.length === 0) {
    return;
  }
  try {
    const allOrNone = true;
    await client.sobject(profileObject).del(ids, { allOrNone });
  } catch (error) {
    console.log("delete error", error);
    if (!suppressErrors) {
      throw error;
    }
  }
}

describe("salesforce/sales-cloud/export-profiles/email", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, 1000 * 30);

  afterAll(async () => {
    await cleanUp(true);
  }, 1000 * 30);

  test("can create profile on Salesforce", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {},
          newProfileProperties: { Email: email1, LastName: "Smith" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId1 = await findId(email1);
    expect(userId1).toBeTruthy();
    const user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("Smith");
    expect(user.FirstName).toBe(null);
  });

  test("can add/edit user variables and do multiple users", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { Email: email1, LastName: "Smith" },
          newProfileProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: {},
          newProfileProperties: { Email: email2, LastName: "Jih" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("John");
    expect(user.LastName).toBe("Jones");

    expect(errors).toBeNull();
    expect(success).toBe(true);
    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();
    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Jih");
  });

  test("can clear user variables", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            FirstName: "John",
            LastName: "Jones",
          },
          newProfileProperties: { Email: email1, LastName: "Simpson" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe(null);
    expect(user.LastName).toBe("Simpson");
  });

  test("it can change the email address", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { Email: email1, LastName: "Brian" },
          newProfileProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, LastName: "Jih" },
          newProfileProperties: { Email: email2, LastName: "Test" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(newEmail1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");

    expect(await findId(email1)).toBeNull(); // changed!

    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Test");
  });

  test("can delete a user", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: newEmail1,
            FirstName: "Brian",
            LastName: "Chang",
          },
          newProfileProperties: {
            Email: email1, // changing back
            FirstName: "Brian",
            LastName: "Chang",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, LastName: "Test" },
          newProfileProperties: { Email: email2, LastName: "Test" },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    let user;
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.FirstName).toBe("Brian");
    expect(user.LastName).toBe("Chang");

    // for types next time
    expect(user.checkbox_field__c).toEqual(false); // defaulted
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);

    expect(await findId(newEmail1)).toBeNull(); // changed!

    expect(await findId(email2)).toBeNull();
    expect(await getUser(userId2)).toBeNull();
  });

  test("can add back a user and many types", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: {},
          newProfileProperties: {
            checkbox_field__c: true,
            datetime_field__c: new Date(1598766588 * 1000),
            number_field__c: 42,
            percent_field__c: 99,
            email_field__c: "field@grouparoo.com",
            phone_field__c: "(412) 555-1234",
            picklist_field__c: "Red",
            text_field__c: "short text",
            textarea_field__c: "longer text here",
            url_field__c: "https://www.grouparoo.com",
            Email: email2,
            LastName: "Parker",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);

    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();

    user = await getUser(userId2);
    expect(user.checkbox_field__c).toEqual(true);
    expect(user.datetime_field__c).toEqual("2020-08-30T05:49:48.000+0000");
    expect(user.number_field__c).toEqual(42);
    expect(user.percent_field__c).toEqual(99);
    expect(user.email_field__c).toEqual("field@grouparoo.com");
    expect(user.phone_field__c).toEqual("(412) 555-1234");
    expect(user.picklist_field__c).toEqual("Red");
    expect(user.text_field__c).toEqual("short text");
    expect(user.textarea_field__c).toEqual("longer text here");
    expect(user.url_field__c).toEqual("https://www.grouparoo.com");
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Parker");
  });

  test("can set all those fields to null", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: {
            checkbox_field__c: true,
            datetime_field__c: new Date(1598766588 * 1000),
            number_field__c: 42,
            percent_field__c: 99,
            email_field__c: "field@grouparoo.com",
            phone_field__c: "(412) 555-1234",
            picklist_field__c: "Red",
            text_field__c: "short text",
            textarea_field__c: "longer text here",
            url_field__c: "https://www.grouparoo.com",
            Email: email2,
            LastName: "Parker",
          },
          newProfileProperties: { Email: email2, LastName: "Patil" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);

    user = await getUser(userId2);
    expect(user.checkbox_field__c).toEqual(false); // defaulted
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);
    expect(user.percent_field__c).toEqual(null);
    expect(user.email_field__c).toEqual(null);
    expect(user.phone_field__c).toEqual(null);
    expect(user.picklist_field__c).toEqual(null);
    expect(user.text_field__c).toEqual(null);
    expect(user.textarea_field__c).toEqual(null);
    expect(user.url_field__c).toEqual(null);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Patil");
  });

  test("can add to and create groups", async () => {
    groupId1 = await findGroupId(group1);
    expect(groupId1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            FirstName: "Brian",
            LastName: "Chang",
          },
          newProfileProperties: {
            Email: email1,
            LastName: "Smith",
          },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(errors).toBeNull();
    expect(success).toBe(true);

    groupId1 = await findGroupId(group1);
    expect(groupId1).toBeTruthy();
    const members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1].sort());
  });

  test("can add multiple users to lists", async () => {
    groupId2 = await findGroupId(group2);
    expect(groupId2).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { Email: email1, LastName: "Smith" },
          newProfileProperties: { Email: email1, LastName: "Smith" },
          oldGroups: [group1],
          newGroups: [group1, group2],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, LastName: "Patil" },
          newProfileProperties: { Email: email2, LastName: "Jones" },
          oldGroups: [],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
      ],
    });
    expect(errors).toBeNull();
    expect(success).toBe(true);

    groupId2 = await findGroupId(group2);
    expect(groupId2).toBeTruthy();

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([userId1].sort());

    let user;
    user = await getUser(userId2);
    expect(user.Email).toBe(email2);
    expect(user.LastName).toBe("Jones");
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: { Email: email1, LastName: "Smith" },
          newProfileProperties: { Email: email1, LastName: "Smith" },
          oldGroups: [group1, group2],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, LastName: "Jones" },
          newProfileProperties: { Email: email2, LastName: "Jones" },
          oldGroups: [group2],
          newGroups: [group1],
          toDelete: false,
          profile: null,
        },
      ],
    });

    expect(errors).toBeNull();
    expect(success).toBe(true);

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId1, userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([]);
  });

  test("can ignore case for an email address", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1.toUpperCase(),
            LastName: "Smith",
          },
          newProfileProperties: {
            Email: email1.toUpperCase(),
            LastName: "MACRON",
          },
          oldGroups: [group1],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("MACRON");

    let members;
    members = await getGroupMemberIds(groupId1);
    expect(members.sort()).toEqual([userId2].sort());

    members = await getGroupMemberIds(groupId2);
    expect(members.sort()).toEqual([]);
  });

  test("can set back to lowercase", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1.toUpperCase(),
            LastName: "MACRON",
          },
          newProfileProperties: {
            Email: email1,
            LastName: "Smith",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("Smith");
  });

  test("can handle unknown field", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            LastName: "Smith",
          },
          newProfileProperties: {
            Email: email1,
            LastName: "Simpson",
            unknown_field: "here",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(errors).toBeNull();
    expect(success).toBe(true);
    user = await getUser(userId1);
    expect(user.Email).toBe(email1);
    expect(user.LastName).toBe("Simpson");
  });

  test("can not (boo!) handle checkbox error", async () => {
    try {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        exports: [
          {
            profileGuid: guid2,
            oldProfileProperties: { Email: email2, LastName: "Jones" },
            newProfileProperties: {
              Email: email2,
              lastName: "Jones",
              checkbox_field__c: "other",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });
    } catch (error) {
      console.log("ERR!", error.message);
      expect(error.message).toContain("boolean");
    }

    let user;
    user = await getUser(userId2);
    expect(user.checkbox_field__c).toEqual(false); // still defaulted
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);
    expect(user.percent_field__c).toEqual(null);
    expect(user.email_field__c).toEqual(null);
    expect(user.phone_field__c).toEqual(null);
    expect(user.picklist_field__c).toEqual(null);
    expect(user.text_field__c).toEqual(null);
    expect(user.textarea_field__c).toEqual(null);
    expect(user.url_field__c).toEqual(null);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones");
  });

  test("can not (boo!) handle datetime error", async () => {
    try {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        exports: [
          {
            profileGuid: guid2,
            oldProfileProperties: { Email: email2, LastName: "Jones" },
            newProfileProperties: {
              Email: email2,
              lastName: "Jones",
              datetime_field__c: "yesterday",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            profile: null,
          },
        ],
      });
    } catch (error) {
      console.log("ERR!", error.message);
      expect(error.message).toContain("datetime");
    }

    let user;
    user = await getUser(userId2);
    expect(user.checkbox_field__c).toEqual(false); // still defaulted
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);
    expect(user.percent_field__c).toEqual(null);
    expect(user.email_field__c).toEqual(null);
    expect(user.phone_field__c).toEqual(null);
    expect(user.picklist_field__c).toEqual(null);
    expect(user.text_field__c).toEqual(null);
    expect(user.textarea_field__c).toEqual(null);
    expect(user.url_field__c).toEqual(null);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones");
  });

  test("can handle email error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, LastName: "Jones" },
          newProfileProperties: {
            Email: email2,
            lastName: "Jones",
            email_field__c: "badmail",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileGuid).toEqual(guid2);
    expect(error.message).toContain("email");

    user = await getUser(userId2);
    expect(user.checkbox_field__c).toEqual(false);
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);
    expect(user.percent_field__c).toEqual(null);
    expect(user.email_field__c).toEqual(null);
    expect(user.phone_field__c).toEqual(null);
    expect(user.picklist_field__c).toEqual(null);
    expect(user.text_field__c).toEqual(null);
    expect(user.textarea_field__c).toEqual(null);
    expect(user.url_field__c).toEqual(null);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones");
  });

  test("can handle picklist error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, LastName: "Jones" },
          newProfileProperties: {
            Email: email2,
            lastName: "Jones",
            picklist_field__c: "Other", // not in list!
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileGuid).toEqual(guid2);
    expect(error.message).toContain("picklist");

    user = await getUser(userId2);
    expect(user.checkbox_field__c).toEqual(false);
    expect(user.datetime_field__c).toEqual(null);
    expect(user.number_field__c).toEqual(null);
    expect(user.percent_field__c).toEqual(null);
    expect(user.email_field__c).toEqual(null);
    expect(user.phone_field__c).toEqual(null);
    expect(user.picklist_field__c).toEqual(null);
    expect(user.text_field__c).toEqual(null);
    expect(user.textarea_field__c).toEqual(null);
    expect(user.url_field__c).toEqual(null);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones");
  });

  test("can handle some of them working, but not others", async () => {
    userId3 = await findId(email3);
    expect(userId3).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid1,
          oldProfileProperties: {
            Email: email1,
            LastName: "Simpson",
          },
          newProfileProperties: {
            Email: email1,
            LastName: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: {
            Email: email2,
            LastName: "Jones",
          },
          newProfileProperties: {
            Email: email2,
            LastName: "Simpson",
            email_field__c: "badone",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid3,
          oldProfileProperties: {},
          newProfileProperties: {
            Email: email3,
            LastName: "King",
            email_field__c: "valid@grouparoo.com",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.profileGuid).toEqual(guid2);
    expect(error.message).toContain("email");

    user = await getUser(userId1);
    expect(user.Email).toEqual(email1);
    expect(user.LastName).toEqual("Test");
    expect(user.email_field__c).toEqual(null);

    user = await getUser(userId2);
    expect(user.Email).toEqual(email2);
    expect(user.LastName).toEqual("Jones"); // not updated
    expect(user.email_field__c).toEqual(null);

    userId3 = await findId(email3);
    expect(userId3).toBeTruthy();
    user = await getUser(userId3);
    expect(user.Email).toEqual(email3);
    expect(user.LastName).toEqual("King"); // created
    expect(user.email_field__c).toEqual("valid@grouparoo.com");
  });
});
