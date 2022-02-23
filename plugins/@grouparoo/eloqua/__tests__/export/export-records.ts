import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import EloquaClient from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { exportBatch } from "../../src/lib/export/exportRecords";
import { indexUsers } from "../utils/shared";
import { processExportedRecords } from "../../src/lib/export/processExportedRecords";

const appId = "app_789-po09-EOEP-HKp8-3039";

let client: EloquaClient;

const email1 = "grouparoo@demo.com";
const id1 = "pro1";
const newEmail1 = "notgrouparoo@demo.com";
const newEmail2 = "1grouparoo2@demo.com";
let user1 = null;

const email2 = "grouparoo2@demo.com";
const id2 = "pro2";
let user2 = null;

const email3 = "grouparoo3@demo.com";
const id3 = "pro3";
let user3 = null;

const email4 = "grouparoo+test@demo.com";
const id4 = "pro4";
let user4 = null;

const list1 = "(test) High Value";
let listId1 = null;

const list2 = "(test) Churned";
let listId2 = null;

let batchEmails = [];

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

async function findListId(name: string): Promise<number> {
  const list = await client.lists.getByName(name);
  if (!list) {
    return null;
  }
  return list.id;
}

async function deleteLists(suppressErrors) {
  try {
    for (const listToDelete of [list1, list2]) {
      const list = await client.lists.getByName(listToDelete);
      if (list) {
        await client.lists.delete(list["id"]);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteUsers(suppressErrors) {
  try {
    const emailsToDelete = [
      email1,
      email2,
      email3,
      email4,
      newEmail1,
      newEmail2,
    ].concat(batchEmails);
    for (const emailToDelete of emailsToDelete) {
      const user = await client.contacts.getByEmail(emailToDelete);
      if (user) {
        await client.contacts.delete(user["id"]);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function generateLongRecords(count: number) {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      emailAddress: `user${i}@demo.com`,
      firstName: `User${i}`,
      lastName: `Demo${i}`,
    });
  }

  return records;
}

function makeExports(records: Record<string, any>[]) {
  return records.map((record, i) => ({
    recordId: `pro${i}`,
    oldRecordProperties: {},
    newRecordProperties: record,
    oldGroups: [],
    newGroups: [],
    toDelete: false,
    record: null,
  }));
}

async function cleanUp(suppressErrors) {
  await deleteLists(suppressErrors);
  await deleteUsers(suppressErrors);
}

describe("eloqua/exportRecord", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("will not create record if sync mode does not allow it", async () => {
    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBe(null);

    const { success, processExports, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.update.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not create");

    expect(processExports).toBe(undefined);
    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBeNull();
  });

  test("can create contact", async () => {
    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBe(null);

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1).toBeTruthy();

    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe(undefined);
  });

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, processExports, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { emailAddress: email1, firstName: "John" },
          newRecordProperties: {
            emailAddress: email1,
            firstName: "Brian", // updated!
            lastName: "Doe", // added!
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    await indexUsers(newNock);

    expect(processExports).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not update");

    const user = await client.contacts.getByEmail(email1);
    expect(user).not.toBeNull();
    expect(user.emailAddress).toBe(email1);
    expect(user.firstName).toBe("John"); // not updated!
    expect(user.lastName).toBe(undefined); // not added!
  });

  test("can add/edit user variables and do multiple contacts", async () => {
    user2 = await client.contacts.getByEmail(email2);
    expect(user2).toBe(null);

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { emailAddress: email1, firstName: "John" },
          newRecordProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Doe",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: { emailAddress: email2, firstName: "Pete" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(processExports).not.toBeNull();

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Doe");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2).not.toBeNull();
    expect(user2.emailAddress).toBe(email2);
    expect(user2.firstName).toBe("Pete");
  });

  test("can clear user variables", async () => {
    await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Doe",
          },
          newRecordProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe(undefined);
  });

  test("can add to and create lists", async () => {
    listId1 = await findListId(list1);
    expect(listId1).toBe(null);

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { emailAddress: email1, firstName: "John" },
          newRecordProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);

    await processExportedRecords({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { emailAddress: email1, firstName: "John" },
          newRecordProperties: { emailAddress: email1, firstName: "John" },
          oldGroups: [],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
      ],
      syncOperations: DestinationSyncModeData.sync.operations,
    });

    expect(success).toBe(true);

    listId1 = await findListId(list1);
    expect(listId1).toBeTruthy();

    const userLists = await client.contacts.getLists(user1.id);

    expect(userLists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );
  });

  test("can add multiple users to lists", async () => {
    listId2 = await findListId(list2);
    expect(listId2).toBe(null);

    const exports = [
      {
        recordId: id1,
        oldRecordProperties: { emailAddress: email1, firstName: "John" },
        newRecordProperties: { emailAddress: email1, firstName: "John" },
        oldGroups: [list1],
        newGroups: [list1, list2],
        toDelete: false,
        record: null,
      },
      {
        recordId: id2,
        oldRecordProperties: { emailAddress: email2, firstName: "Pete" },
        newRecordProperties: { emailAddress: email2, firstName: "Sally" },
        oldGroups: [],
        newGroups: [list1],
        toDelete: false,
        record: null,
      },
    ];

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });

    await indexUsers(newNock);

    await processExportedRecords({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
      syncOperations: DestinationSyncModeData.sync.operations,
    });

    expect(success).toBe(true);

    listId2 = await findListId(list2);
    expect(listId2).toBeTruthy();

    const user1Lists = await client.contacts.getLists(user1.id);
    expect(user1Lists).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: listId1 }),
        expect.objectContaining({ id: listId2 }),
      ])
    );

    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toBe(email2);
    expect(user2.firstName).toBe("Sally");
    expect(user2.lastName).toBe(undefined);

    const user2Lists = await client.contacts.getLists(user2.id);
    expect(user2Lists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );
  });

  test("can remove users from lists including ones they aren't in", async () => {
    const exports = [
      {
        recordId: id1,
        oldRecordProperties: { emailAddress: email1, firstName: "John" },
        newRecordProperties: { emailAddress: email1, firstName: "John" },
        oldGroups: [list1, list2],
        newGroups: [list1],
        toDelete: false,
        record: null,
      },
      {
        recordId: id2,
        oldRecordProperties: { emailAddress: email2, firstName: "Sally" },
        newRecordProperties: { emailAddress: email2, firstName: "Sally" },
        oldGroups: [list2],
        newGroups: [list1],
        toDelete: false,
        record: null,
      },
    ];
    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);

    await processExportedRecords({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
      syncOperations: DestinationSyncModeData.sync.operations,
    });

    expect(success).toBe(true);

    const user1Lists = await client.contacts.getLists(user1.id);
    expect(user1Lists.length).toBe(1);
    expect(user1Lists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );

    const user2Lists = await client.contacts.getLists(user2.id);
    expect(user2Lists.length).toBe(1);
    expect(user2Lists).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: listId1 })])
    );
  });

  test("can change the email address", async () => {
    const exports = [
      {
        recordId: id1,
        oldRecordProperties: { emailAddress: email1, firstName: "John" },
        newRecordProperties: {
          emailAddress: newEmail1,
          firstName: "John",
          lastName: "Test",
        },
        oldGroups: [list1],
        newGroups: [list1, list2],
        toDelete: false,
        record: null,
      },
      {
        recordId: id2,
        oldRecordProperties: { emailAddress: email2, firstName: "Sally" },
        newRecordProperties: { emailAddress: email2, firstName: "Evan" },
        oldGroups: [list1],
        newGroups: [],
        toDelete: false,
        record: null,
      },
    ];
    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);
    await processExportedRecords({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
      syncOperations: DestinationSyncModeData.sync.operations,
    });

    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1); // delete the old contact
    expect(user1).toBe(null);

    user1 = await client.contacts.getByEmail(newEmail1); // create a new contact with the new emailAddress
    expect(user1.emailAddress).toBe(newEmail1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Test");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toBe(email2);
    expect(user2.firstName).toBe("Evan");

    const user1Lists = await client.contacts.getLists(user1.id);
    expect(user1Lists.length).toBe(2);
    expect(user1Lists).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: listId1 }),
        expect.objectContaining({ id: listId2 }),
      ])
    );

    const user2Lists = await client.contacts.getLists(user2.id);
    expect(user2Lists.length).toBe(0);
  });

  test("can add back a user", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            emailAddress: email1,
            firstName: "Evan",
            lastName: "Saran",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);
    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toEqual(email1);
    expect(user1.firstName).toEqual("Evan");
    expect(user1.lastName).toEqual("Saran");
  });

  test("can change the email address (both old and new emails exist) with upsert sync mode", async () => {
    const exports = [
      {
        recordId: id1,
        oldRecordProperties: { emailAddress: email1, firstName: "John" },
        newRecordProperties: {
          emailAddress: newEmail1,
          firstName: "Other New",
          lastName: "User",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        record: null,
      },
    ];
    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.upsert.operations,
      exports,
    });
    await indexUsers(newNock);
    await processExportedRecords({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
      syncOperations: DestinationSyncModeData.upsert.operations,
    });

    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1); // orphan the old contact
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("Evan");
    expect(user1.lastName).toBe("Saran");

    user1 = await client.contacts.getByEmail(newEmail1); // create a new contact with the new emailAddress
    expect(user1.emailAddress).toBe(newEmail1);
    expect(user1.firstName).toBe("Other New");
    expect(user1.lastName).toBe("User");
  });

  test("can change the email address with upsert sync mode", async () => {
    const exports = [
      {
        recordId: id1,
        oldRecordProperties: { emailAddress: email1, firstName: "John" },
        newRecordProperties: {
          emailAddress: newEmail2,
          firstName: "New",
          lastName: "User",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        record: null,
      },
    ];
    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.upsert.operations,
      exports,
    });
    await indexUsers(newNock);
    await processExportedRecords({
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
      destinationOptions: null,
      appId,
      appOptions,
      remoteKey: processExports.remoteKey,
      exports,
      syncOperations: DestinationSyncModeData.upsert.operations,
    });

    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1); // orphan the old contact
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("Evan");
    expect(user1.lastName).toBe("Saran");

    user1 = await client.contacts.getByEmail(newEmail2); // create a new contact with the new emailAddress
    expect(user1.emailAddress).toBe(newEmail2);
    expect(user1.firstName).toBe("New");
    expect(user1.lastName).toBe("User");
  });

  test("will not delete users if sync mode does not allow it, but will remove groups", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.upsert.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            emailAddress: newEmail1,
            firstName: "Other New",
            lastName: "User",
          },
          newRecordProperties: {
            emailAddress: newEmail1,
            firstName: "John",
            lastName: "Test", // changed here
          },
          oldGroups: [list1, list2],
          newGroups: [],
          toDelete: true,
          record: null,
        },
      ],
    });

    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not delete");

    user1 = await client.contacts.getByEmail(newEmail1); // not null!
    expect(user1).not.toBe(null);
    expect(user1.emailAddress).toBe(newEmail1);
    expect(user1.firstName).toBe("Other New");
    expect(user1.lastName).toBe("User"); // not changed!
  });

  test("can delete a user", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            emailAddress: newEmail1,
            firstName: "John",
            lastName: "Test",
          },
          newRecordProperties: {
            emailAddress: email1,
            firstName: "John",
            lastName: "Test",
          },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: { emailAddress: email2, firstName: "Evan" },
          newRecordProperties: { emailAddress: email2, firstName: "Evan" },
          oldGroups: [],
          newGroups: [list1], // but he's being deleted!
          toDelete: true,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toBe(email1);
    expect(user1.firstName).toBe("John");
    expect(user1.lastName).toBe("Test");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2).toBeNull(); // deleted!
  });

  test("can add back a user with other properties", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: {
            emailAddress: email2,
            firstName: "Evan",
            lastName: "Saran",
            mobilePhone: "+5583999999999",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can delete a user while try to change email", async () => {
    user2 = await client.contacts.getByEmail(email2);
    expect(user2).not.toBeNull();

    user3 = await client.contacts.getByEmail(email3);
    expect(user3).toBeNull(); // nonexistent.

    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: { emailAddress: email2, firstName: "Evan" },
          newRecordProperties: { emailAddress: email3, firstName: "Evan" },
          oldGroups: [],
          newGroups: [list1], // but he's being deleted!
          toDelete: true,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    user2 = await client.contacts.getByEmail(email2);
    expect(user2).toBeNull(); // deleted!

    user3 = await client.contacts.getByEmail(email3);
    expect(user3).toBeNull(); // do nothing!
  });

  test("can add back a user with the same properties", async () => {
    const { success } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: {
            emailAddress: email2,
            firstName: "Evan",
            lastName: "Saran",
            mobilePhone: "+5583999999999",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);
    expect(success).toBe(true);
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can handle invalid email error", async () => {
    const exports = [
      {
        recordId: id2,
        oldRecordProperties: { emailAddress: email2, firstName: "Maria" },
        newRecordProperties: {
          emailAddress: "notanemail",
          firstName: "Maria",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        record: null,
      },
    ];

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    const { success: successProcessExportedRecords, errors } =
      await processExportedRecords({
        connection: null,
        app: null,
        destination: null,
        destinationId: null,
        destinationOptions: null,
        appId,
        appOptions,
        remoteKey: processExports.remoteKey,
        exports,
        syncOperations: DestinationSyncModeData.sync.operations,
      });
    expect(successProcessExportedRecords).toBe(false);
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          recordId: id2,
          message: "Invalid email address.",
        }),
      ])
    );

    // nothing changed
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can handle required field error (email)", async () => {
    const exports = [
      {
        recordId: id2,
        oldRecordProperties: { emailAddress: email2, firstName: "Maria" },
        newRecordProperties: {
          firstName: "Maria",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        record: null,
      },
      {
        recordId: "newId",
        oldRecordProperties: {},
        newRecordProperties: {
          firstName: "Ron",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        record: null,
      },
    ];
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });

    await indexUsers(newNock);

    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(2);

    const error = errors[0];
    expect(error.recordId).toEqual(id2);
    expect(error.message).toContain("required");

    const error2 = errors[1];
    expect(error2.message).toContain("required");

    expect(success).toBe(false);
    // nothing changed
    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan");
    expect(user2.lastName).toEqual("Saran");
    expect(user2.mobilePhone).toEqual("+5583999999999");
  });

  test("can handle some of them working, but not others", async () => {
    user3 = await client.contacts.getByEmail(email3);
    expect(user3).toBe(null);

    const exports = [
      {
        recordId: id1,
        oldRecordProperties: {
          emailAddress: email1,
          firstName: "John",
          lastName: "Test",
        },
        newRecordProperties: {
          emailAddress: email1,
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
        oldRecordProperties: { emailAddress: email2, firstName: "Maria" },
        newRecordProperties: {
          emailAddress: "bademail",
          firstName: "William",
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
          emailAddress: email3,
          firstName: "Liz",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        record: null,
      },
    ];

    const { success, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);
    expect(success).toBe(true);

    const { success: successProcessExportedRecords, errors } =
      await processExportedRecords({
        connection: null,
        app: null,
        destination: null,
        destinationId: null,
        destinationOptions: null,
        appId,
        appOptions,
        remoteKey: processExports.remoteKey,
        exports,
        syncOperations: DestinationSyncModeData.sync.operations,
      });

    expect(successProcessExportedRecords).toBe(false);
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          recordId: id2,
          message: "Invalid email address.",
        }),
      ])
    );

    user1 = await client.contacts.getByEmail(email1);
    expect(user1.emailAddress).toEqual(email1);
    expect(user1.firstName).toEqual("Sam"); // updated
    expect(user1.lastName).toEqual("Test");

    user2 = await client.contacts.getByEmail(email2);
    expect(user2.emailAddress).toEqual(email2);
    expect(user2.firstName).toEqual("Evan"); // not updated

    user3 = await client.contacts.getByEmail(email3);
    expect(user3.emailAddress).toEqual(email3);
    expect(user3.firstName).toEqual("Liz"); // created
  });

  test("can add a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id4,
          oldRecordProperties: {},
          newRecordProperties: {
            emailAddress: email4,
            firstName: "Special",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    user4 = await client.contacts.getByEmail(email4);
    expect(user4.emailAddress).toEqual(email4);
    expect(user4.firstName).toEqual("Special");
  });

  test("can update a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id4,
          oldRecordProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          newRecordProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    user4 = await client.contacts.getByEmail(email4);
    expect(user4.emailAddress).toEqual(email4);
    expect(user4.firstName).toEqual("Special");
    expect(user4.lastName).toEqual("User");
  });

  test("can delete a user with special characters in email", async () => {
    const { success, errors } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id4,
          oldRecordProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          newRecordProperties: {
            emailAddress: email4,
            firstName: "Special",
            lastName: "User",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: true,
          record: null,
        },
      ],
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    expect(await client.contacts.getByEmail(email4)).toBeNull();
  });

  test("can handle batches with lots of records", async () => {
    // generate records
    const records = generateLongRecords(150);

    // run batch export
    const exports = makeExports(records);
    const { success, errors, processExports } = await exportBatch({
      client,
      appId,
      appOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports,
    });
    await indexUsers(newNock);

    expect(success).toBe(true);
    expect(errors.length).toBe(0);

    batchEmails = records.map((p) => p.emailAddress);
    const users = await client.contacts.getContactsByEmail(batchEmails);

    // verify all were created properly
    for (const record of exports) {
      let user = { emailAddress: null, firstName: null, lastName: null };
      const filteredContacts = users.filter(
        (u) => u.emailAddress === record.newRecordProperties.emailAddress
      );
      if (filteredContacts.length > 0) {
        user = filteredContacts[0];
      }
      expect(user.emailAddress).toEqual(
        record.newRecordProperties.emailAddress
      );
      expect(user.firstName).toEqual(record.newRecordProperties.firstName);
      expect(user.lastName).toEqual(record.newRecordProperties.lastName);
      expect(
        processExports.recordIds.find(
          (recordId) => recordId === record.recordId
        )
      ).not.toBeUndefined();
    }
  });
});
