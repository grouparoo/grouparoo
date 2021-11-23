import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export/exportRecords";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a0bb07d8-0a4e-49b5-ad42-545f2e8662e6";

let client: any;

const email1 = "brian@bleonard.com";
const id1 = "pro1";
const newEmail1 = "other@bleonard.com";
let userId1 = null;

const email2 = "brian2@bleonard.com";
const id2 = "pro2";
let userId2 = null;

const email3 = "brian3@bleonard.com";
const id3 = "pro3";
let userId3 = null;

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
  const fields = [
    "email",
    "firstName",
    "lastName",
    "id",
    "textarea_field",
    "boolean_field",
    "email_field",
    "integer_field",
    "float_field",
    "datetime_field",
    "date_field",
    "score_field",
    "percent_field",
    "currency_field",
  ];
  const response = await client.lead.find("id", [id], {
    fields: fields.join(","),
  });
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
  const emails = [email1, email2, email3, newEmail1];
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

describe("marketo/exportRecords", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("will not create record on Marketo if sync mode does not allow it", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    const foundId = await findId(email1);
    expect(foundId).toBeNull();
  });

  test("can create record on Marketo", async () => {
    userId1 = await findId(email1);
    expect(userId1).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
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

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { email: email1, firstName: "Brian" },
          newRecordProperties: {
            email: email1,
            firstName: "John", // updated!
            lastName: "Smith", // added!
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not updating");
    expect(error.errorLevel).toEqual("info");

    const user = await getUser(userId1);
    expect(user.email).toBe(email1);
    expect(user.firstName).toBe("Brian"); // not updated!
    expect(user.lastName).toBe(null); // not added!
  });

  test("can add/edit user variables and do multiple users", async () => {
    userId2 = await findId(email2);
    expect(userId2).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { email: email1, firstName: "Brian" },
          newRecordProperties: {
            email: email1,
            firstName: "John",
            lastName: "Smith",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: { email: email2, firstName: "Andy" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
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
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            email: email1,
            firstName: "John",
            lastName: "Smith",
          },
          newRecordProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
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
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { email: email1, firstName: "Brian" },
          newRecordProperties: { email: email1, firstName: "Brian" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
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
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { email: email1, firstName: "Brian" },
          newRecordProperties: { email: email1, firstName: "Brian" },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Andy" },
          newRecordProperties: { email: email2, firstName: "Sally" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
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
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { email: email1, firstName: "Brian" },
          newRecordProperties: { email: email1, firstName: "Brian" },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Andy" },
          newRecordProperties: { email: email2, firstName: "Sally" },
          oldGroups: [list2],
          newGroups: [list1],
          toDelete: false,
          record: null,
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

  test("it can change the email address", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { email: email1, firstName: "Brian" },
          newRecordProperties: {
            email: newEmail1,
            firstName: "Brian",
            lastName: "Test",
          },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Andy" },
          newRecordProperties: { email: email2, firstName: "Evan" },
          oldGroups: [list1],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let user;
    user = await getUser(userId1);
    expect(user.email).toBe(newEmail1);
    expect(user.firstName).toBe("Brian");
    expect(user.lastName).toBe("Test");

    expect(await findId(email1)).toBeNull(); // changed!

    user = await getUser(userId2);
    expect(user.email).toBe(email2);
    expect(user.firstName).toBe("Evan");

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([userId1]);
  });

  test("will not delete users if sync mode does not allow it, but will remove groups", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.additive.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            email: newEmail1,
            firstName: "Brian",
            lastName: "Test",
          },
          newRecordProperties: {
            email: newEmail1,
            firstName: "Brian",
            lastName: "Test2", // changed here
          },
          oldGroups: [list1, list2],
          newGroups: [list1, list2],
          toDelete: true,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not deleting");
    expect(error.errorLevel).toEqual("info");

    const user = await getUser(userId1); // not null!
    expect(user.email).toBe(newEmail1);
    expect(user.firstName).toBe("Brian");
    expect(user.lastName).toBe("Test"); // not changed!

    let members;
    members = await getListMemberIds(listId1);
    expect(members).toHaveLength(0); // removed!

    members = await getListMemberIds(listId2);
    expect(members).toHaveLength(0); // removed!
  });

  test("can delete a user", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            email: newEmail1,
            firstName: "Brian",
            lastName: "Test",
          },
          newRecordProperties: {
            email: email1,
            firstName: "Brian",
            lastName: "Test",
          },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Evan" },
          newRecordProperties: { email: email2, firstName: "Evan" },
          oldGroups: [],
          newGroups: [list1], // but he's being deleted!
          toDelete: true,
          record: null,
        },
      ],
    });

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let user;
    user = await getUser(userId1);
    expect(user.email).toBe(email1);
    expect(user.firstName).toBe("Brian");
    expect(user.lastName).toBe("Test");
    expect(user.boolean_field).toBe(false); // checking default

    expect(await findId(newEmail1)).toBeNull(); // changed!

    expect(await findId(email2)).toBeNull();
    expect(await getUser(userId2)).toBeNull();

    let members;
    members = await getListMemberIds(listId1);
    expect(members.sort()).toEqual([userId1].sort());

    members = await getListMemberIds(listId2);
    expect(members.sort()).toEqual([]);
  });

  test("can add back a user and many types", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: {
            email: email2,
            firstName: "Evan",
            textarea_field: "text is here",
            boolean_field: true,
            email_field: "field@grouparoo.com",
            integer_field: 5,
            float_field: 5.4,
            datetime_field: new Date(1598766588 * 1000),
            date_field: new Date(1598766588 * 1000),
            score_field: 10,
            percent_field: 99,
            currency_field: 34.66,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

    userId2 = await findId(email2);
    expect(userId2).toBeTruthy();

    user = await getUser(userId2);

    expect(user.email).toEqual(email2);
    expect(user.firstName).toEqual("Evan");
    expect(user.textarea_field).toEqual("text is here");
    expect(user.boolean_field).toEqual(true);
    expect(user.email_field).toEqual("field@grouparoo.com");
    expect(user.integer_field).toEqual(5);
    expect(user.float_field).toEqual(5.4);
    expect(user.datetime_field).toEqual("2020-08-30T05:49:48Z");
    expect(user.date_field).toEqual("2020-08-30");
    expect(user.score_field).toEqual(10);
    expect(user.percent_field).toEqual(99);
    expect(user.currency_field).toEqual(34.66);
  });

  test("can set all those fields to null", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {
            email: email2,
            firstName: "Evan",
            textarea_field: "text is here",
            boolean_field: true,
            email_field: "field@grouparoo.com",
            integer_field: 5,
            float_field: 5.4,
            datetime_field: new Date(1598766588 * 1000),
            score_field: 10,
            percent_field: 99,
            currency_field: 34.66,
          },
          newRecordProperties: { email: email2, firstName: "Maria" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(true);
    expect(errors).toBeNull();

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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle boolean error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "Maria",
            boolean_field: "other",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle email error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "Maria",
            email_field: "bademail",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle integer error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "Maria",
            integer_field: 14.1,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle float error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "Maria",
            float_field: "14c",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle datetime error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "Maria",
            datetime_field: "yesterday",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle percent error", async () => {
    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "Maria",
            percent_field: "100%", // should be integer
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
    expect(user.currency_field).toEqual(null);
  });

  test("can handle some of them working, but not others", async () => {
    userId3 = await findId(email3);
    expect(userId3).toBe(null);

    const { success, errors } = await exportBatch({
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            email: email1,
            firstName: "Brian",
            lastName: "Test",
          },
          newRecordProperties: {
            email: email1,
            firstName: "Sam",
            lastName: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { email: email2, firstName: "Maria" },
          newRecordProperties: {
            email: email2,
            firstName: "William",
            email_field: "bademail",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id3,
          oldRecordProperties: {},
          newRecordProperties: {
            email: email3,
            firstName: "Liz",
            email_field: "valid@grouparoo.com",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    let user;
    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
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
});
