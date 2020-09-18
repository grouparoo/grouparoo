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

const list1 = "(test) High Value";
let listId1 = null;

const list2 = "(test) Churned";
let listId2 = null;

const objectType = "Contact";
const fkType = "Email";
const idType = "Id";

const destinationOptions = {
  profileObject: objectType,
  profileFieldMatch: fkType,
};

async function findId(value) {
  const query = { [fkType]: value };
  const fields = [idType];
  const results = await client.sobject(objectType).find(query, fields);
  if (results.length === 0) {
    return null;
  } else if (results.length > 1) {
    throw `more than one result! ${fkType} == ${value}`;
  }
  return results[0][idType];
}
async function getUser(id) {
  try {
    const row = await client.sobject(objectType).retrieve(id);
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
  // await deleteLists(suppressErrors);
}
// async function findListId(name) {
//   const path = "/asset/v1/staticList/byName.json";
//   const options = { query: { name } };
//   const response = await client.list._connection.get(path, options);
//   const results = response.result || [];
//   if (results.length > 1) {
//     throw `multiple lists found: ${name}`;
//   } else if (results.length === 0) {
//     return null;
//   }
//   return results[0].id;
// }
// async function getListMemberIds(listId) {
//   const response = await client.list.getLeads(listId);
//   const results = response.result;
//   return results.map((result) => result.id);
// }
// async function deleteLists(suppressErrors) {
//   const names = [list1, list2];
//   for (const name of names) {
//     const id = await findListId(name);
//     if (id) {
//       const path = `/asset/v1/staticList/${id}/delete.json`;
//       const response = await client.list._connection.post(path);
//       const results = response.result || [];
//       if (results.length === 0 && !suppressErrors) {
//         throw `could not delete list (${id}): ${name}`;
//       }
//     }
//   }
// }
async function deleteUsers(suppressErrors) {
  const values = [email1, email2, email3, newEmail1];
  const destinationIds = [];
  for (const value of values) {
    const id = await findId(value);
    if (id) {
      destinationIds.push(id);
    }
  }
  if (destinationIds.length === 0) {
    return;
  }
  try {
    const allOrNone = true;
    await client.sobject(objectType).del(destinationIds, { allOrNone });
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
    // TODO: await cleanUp(true);
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

  test.skip("can handle boolean error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "Maria",
            boolean_field: "other",
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
    expect(error.message).toContain("boolean");

    user = await getUser(userId2);
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria");
    expect(user.textarea_field).toEqual(null);
    expect(user.boolean_field).toEqual(false);
    expect(user.email_field).toEqual(null);
    expect(user.integer_field).toEqual(null);
    expect(user.float_field).toEqual(null);
    expect(user.datetime_field).toEqual(null);
    expect(user.score_field).toEqual(null);
    expect(user.percent_field).toEqual(null);
  });

  test.skip("can handle email error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "Maria",
            email_field: "bademail",
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
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria");
    expect(user.textarea_field).toEqual(null);
    expect(user.boolean_field).toEqual(false);
    expect(user.email_field).toEqual(null);
    expect(user.integer_field).toEqual(null);
    expect(user.float_field).toEqual(null);
    expect(user.datetime_field).toEqual(null);
    expect(user.score_field).toEqual(null);
    expect(user.percent_field).toEqual(null);
  });

  test.skip("can handle integer error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "Maria",
            integer_field: 14.1,
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
    expect(error.message).toContain("integer");

    user = await getUser(userId2);
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria");
    expect(user.textarea_field).toEqual(null);
    expect(user.boolean_field).toEqual(false);
    expect(user.email_field).toEqual(null);
    expect(user.integer_field).toEqual(null);
    expect(user.float_field).toEqual(null);
    expect(user.datetime_field).toEqual(null);
    expect(user.score_field).toEqual(null);
    expect(user.percent_field).toEqual(null);
  });

  test.skip("can handle float error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "Maria",
            float_field: "14c",
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
    expect(error.message).toContain("float");

    user = await getUser(userId2);
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria");
    expect(user.textarea_field).toEqual(null);
    expect(user.boolean_field).toEqual(false);
    expect(user.email_field).toEqual(null);
    expect(user.integer_field).toEqual(null);
    expect(user.float_field).toEqual(null);
    expect(user.datetime_field).toEqual(null);
    expect(user.score_field).toEqual(null);
    expect(user.percent_field).toEqual(null);
  });

  test.skip("can handle datetime error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "Maria",
            datetime_field: "yesterday",
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
    expect(error.message).toContain("datetime");

    user = await getUser(userId2);
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria");
    expect(user.textarea_field).toEqual(null);
    expect(user.boolean_field).toEqual(false);
    expect(user.email_field).toEqual(null);
    expect(user.integer_field).toEqual(null);
    expect(user.float_field).toEqual(null);
    expect(user.datetime_field).toEqual(null);
    expect(user.score_field).toEqual(null);
    expect(user.percent_field).toEqual(null);
  });

  test.skip("can handle percent error", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      exports: [
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "Maria",
            percent_field: "100%", // should be integer
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
    expect(error.message).toContain("percent");

    user = await getUser(userId2);
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria");
    expect(user.textarea_field).toEqual(null);
    expect(user.boolean_field).toEqual(false);
    expect(user.email_field).toEqual(null);
    expect(user.integer_field).toEqual(null);
    expect(user.float_field).toEqual(null);
    expect(user.datetime_field).toEqual(null);
    expect(user.score_field).toEqual(null);
    expect(user.percent_field).toEqual(null);
  });

  test.skip("can handle some of them working, but not others", async () => {
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
            FirstName: "Brian",
            lastName: "Test",
          },
          newProfileProperties: {
            Email: email1,
            FirstName: "Sam",
            lastName: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          profile: null,
        },
        {
          profileGuid: guid2,
          oldProfileProperties: { Email: email2, FirstName: "Maria" },
          newProfileProperties: {
            Email: email2,
            FirstName: "William",
            email_field: "bademail",
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
            FirstName: "Liz",
            email_field: "valid@grouparoo.com",
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
    expect(user.email).toEqual(email1);
    expect(user.firstName).toEqual("Sam"); // updated
    expect(user.lastName).toEqual("Test");
    expect(user.email_field).toEqual(null);

    user = await getUser(userId2);
    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Maria"); // not updated
    expect(user.email_field).toEqual(null);

    userId3 = await findId(email3);
    expect(userId3).toBeTruthy();
    user = await getUser(userId3);
    expect(user.email).toEqual(email3);
    expect(user.firstName).toEqual("Liz"); // created
    expect(user.email_field).toEqual("valid@grouparoo.com");
  });

  // test.skip("can add to and create lists", async () => {
  //   listId1 = await findListId(list1);
  //   expect(listId1).toBe(null);

  //   const { success, errors } = await exportBatch({
  //     appOptions,
  //     destinationOptions,
  //     exports: [
  //       {
  //         profileGuid: guid1,
  //         oldProfileProperties: { Email: email1, FirstName: "Brian" },
  //         newProfileProperties: { Email: email1, FirstName: "Brian" },
  //         oldGroups: [],
  //         newGroups: [list1],
  //         toDelete: false,
  //         profile: null,
  //       },
  //     ],
  //   });
  //   expect(errors).toBeNull();
  //   expect(success).toBe(true);

  //   listId1 = await findListId(list1);
  //   expect(listId1).toBeTruthy();
  //   const members = await getListMemberIds(listId1);
  //   expect(members.sort()).toEqual([userId1].sort());
  // });

  // test.skip("wait a bit for the list to take hold", async () => {
  //   await helper.sleep(2500);
  // });

  // test.skip("can add multiple users to lists", async () => {
  //   listId2 = await findListId(list2);
  //   expect(listId2).toBe(null);

  //   const { success, errors } = await exportBatch({
  //     appOptions,
  //     destinationOptions,
  //     exports: [
  //       {
  //         profileGuid: guid1,
  //         oldProfileProperties: { Email: email1, FirstName: "Brian" },
  //         newProfileProperties: { Email: email1, FirstName: "Brian" },
  //         oldGroups: [list1],
  //         newGroups: [list1, list2],
  //         toDelete: false,
  //         profile: null,
  //       },
  //       {
  //         profileGuid: guid2,
  //         oldProfileProperties: { Email: email2, FirstName: "Andy" },
  //         newProfileProperties: { Email: email2, FirstName: "Sally" },
  //         oldGroups: [],
  //         newGroups: [list1],
  //         toDelete: false,
  //         profile: null,
  //       },
  //     ],
  //   });
  //   expect(errors).toBeNull();
  //   expect(success).toBe(true);

  //   listId2 = await findListId(list2);
  //   expect(listId2).toBeTruthy();

  //   let members;
  //   members = await getListMemberIds(listId1);
  //   expect(members.sort()).toEqual([userId1, userId2].sort());

  //   members = await getListMemberIds(listId2);
  //   expect(members.sort()).toEqual([userId1].sort());

  //   let user;
  //   user = await getUser(userId2);
  //   expect(user.email).toBe(email2);
  //   expect(user.firstName).toBe("Sally");
  //   expect(user.lastName).toBe(null);
  // });

  // test.skip("can remove users from lists including ones they aren't in", async () => {
  //   const { success, errors } = await exportBatch({
  //     appOptions,
  //     destinationOptions,
  //     exports: [
  //       {
  //         profileGuid: guid1,
  //         oldProfileProperties: { Email: email1, FirstName: "Brian" },
  //         newProfileProperties: { Email: email1, FirstName: "Brian" },
  //         oldGroups: [list1, list2],
  //         newGroups: [list1],
  //         toDelete: false,
  //         profile: null,
  //       },
  //       {
  //         profileGuid: guid2,
  //         oldProfileProperties: { Email: email2, FirstName: "Andy" },
  //         newProfileProperties: { Email: email2, FirstName: "Sally" },
  //         oldGroups: [list2],
  //         newGroups: [list1],
  //         toDelete: false,
  //         profile: null,
  //       },
  //     ],
  //   });

  //   expect(errors).toBeNull();

  //   expect(success).toBe(true);

  //   let members;
  //   members = await getListMemberIds(listId1);
  //   expect(members.sort()).toEqual([userId1, userId2].sort());

  //   members = await getListMemberIds(listId2);
  //   expect(members.sort()).toEqual([]);
  // });
});
