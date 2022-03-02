import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export/exportRecords";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import { BrazeClient } from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "ASDA#PLKJHG=87467NRsdfuiy+ijp4aAUA3039==";
const hugeTime = helper.longTime * 6;

let client: BrazeClient;

const email1 = "grouparoo@demo.com";
const id1 = "pro1";
const newEmail1 = "notgrouparoo@demo.com";
let user1 = null;

const email2 = "grouparoo2@demo.com";
const id2 = "pro2";
let user2 = null;

const email3 = "grouparoo3@demo.com";
const id3 = "pro3";
let user3 = null;

const list1 = "(test) High Value";
const list2 = "(test) Churned";

async function deleteUsers(emails: string[], suppressErrors) {
  try {
    await client.users.delete(emails);
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function getRecord(records: any[], externalId: string) {
  const filtered = records.filter(
    (record) => record["external_id"] === externalId
  );
  return filtered.length > 0 ? filtered[0] : null;
}

function generateLongRecords(count: number): Record<string, any>[] {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      external_id: `user${i}@demo.com`,
      first_name: `Fist Name ${i}`,
      last_name: `Last Name ${i}`,
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

async function cleanUp(suppressErrors: boolean) {
  const emails = [email1, email2, email3, newEmail1];
  await deleteUsers(emails, suppressErrors);
  await helper.waitUntil(newNock, async function () {
    const result = await client.users.get(emails);
    return result.length === 0;
  });
}

describe("braze/exportRecords", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, hugeTime);

  afterAll(async () => {
    await cleanUp(true);
  }, hugeTime);

  test("will not create record if sync mode does not allow it", async () => {
    user1 = await client.users.getOne(email1);
    expect(user1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      syncOperations: DestinationSyncModeData.update.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { external_id: email1, first_name: "John" },
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

    user1 = await client.users.getOne(email1);
    expect(user1).toBe(null);
  });

  test(
    "can create record",
    async () => {
      user1 = await client.users.getOne(email1);
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: { external_id: email1, first_name: "John" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user1 = await client.users.getOne(email1);
        return user1 !== null;
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await client.users.getOne(email1);
      expect(user1).not.toBe(null);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["first_name"]).toBe("John");
    },
    hugeTime
  );

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          recordId: id1,
          oldRecordProperties: { external_id: email1, first_name: "John" },
          newRecordProperties: {
            external_id: email1,
            first_name: "Brian", // updated!
            last_name: "Doe", // added!
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

    user1 = await client.users.getOne(email1);
    expect(user1).not.toBe(null);
    expect(user1["external_id"]).toBe(email1);
    expect(user1["first_name"]).toBe("John"); // not updated!
    expect(user1["last_name"]).toBe(undefined); // not updated!
  });

  test(
    "can add/edit user variables and do multiple users",
    async () => {
      user2 = await client.users.getOne(email2);
      expect(user2).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: { external_id: email1, first_name: "John" },
            newRecordProperties: {
              external_id: email1,
              first_name: "John",
              last_name: "Doe",
              dob: "1980-12-21",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: { external_id: email2, first_name: "Pete" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.users.get([email1, email2]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["last_name"] === "Doe" &&
          user2 &&
          user2["first_name"] === "Pete"
        );
      });

      user1 = await client.users.getOne(email1);
      expect(user1).not.toBe(null);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Doe");
      expect(user1["dob"]).toContain("1980-12-21");

      user2 = await client.users.getOne(email2);
      expect(user2).not.toBe(null);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Pete");
    },
    hugeTime
  );

  test(
    "can clear user variables",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              external_id: email1,
              first_name: "John",
              last_name: "Doe",
            },
            newRecordProperties: { external_id: email1, first_name: "John" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        user1 = await client.users.getOne(email1);
        return user1["last_name"] === undefined;
      });

      user1 = await client.users.getOne(email1);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe(undefined);
    },
    hugeTime
  );

  test(
    "can add to and create lists",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: { external_id: email1, first_name: "John" },
            newRecordProperties: { external_id: email1, first_name: "John" },
            oldGroups: [],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const user = await client.users.getOne(email1);
        return user?.["custom_attributes"]["groups"].length === 1;
      });

      user1 = await client.users.getOne(email1);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["custom_attributes"]["groups"].length).toBe(1);
      expect(user1["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );
    },
    hugeTime
  );

  test(
    "can add multiple users to lists",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: { external_id: email1, first_name: "John" },
            newRecordProperties: { external_id: email1, first_name: "John" },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: { external_id: email2, first_name: "Pete" },
            newRecordProperties: {
              external_id: email2,
              first_name: "Sally",
            },
            oldGroups: [],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.users.get([email1, email2]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["custom_attributes"]["groups"].length === 2 &&
          user2 &&
          user2["first_name"] === "Sally"
        );
      });

      user1 = await client.users.getOne(email1);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["custom_attributes"]["groups"].length).toBe(2);
      expect(user1["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.users.getOne(email2);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Sally");
      expect(user2["custom_attributes"]["groups"].length).toBe(1);
      expect(user2["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );
    },
    hugeTime
  );

  test(
    "can remove users from lists including ones they aren't in",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: { external_id: email1, first_name: "John" },
            newRecordProperties: { external_id: email1, first_name: "John" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              external_id: email2,
              first_name: "Sally",
            },
            newRecordProperties: {
              external_id: email2,
              first_name: "Sally",
            },
            oldGroups: [list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.users.get([email1, email2]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["custom_attributes"]["groups"].length === 1 &&
          user2 &&
          user2["custom_attributes"]["groups"].length === 1
        );
      });

      user1 = await client.users.getOne(email1);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["custom_attributes"]["groups"].length).toBe(1);
      expect(user1["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.users.getOne(email2);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Sally");
      expect(user2["custom_attributes"]["groups"].length).toBe(1);
      expect(user2["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );
    },
    hugeTime
  );

  test(
    "can change the email address",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: { external_id: email1, first_name: "John" },
            newRecordProperties: {
              external_id: newEmail1,
              first_name: "John",
              last_name: "Test",
            },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              external_id: email2,
              first_name: "Sally",
            },
            newRecordProperties: { external_id: email2, first_name: "Evan" },
            oldGroups: [list1],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.users.get([newEmail1, email1, email2]);
        const oldUser = getRecord(users, email1);
        user1 = getRecord(users, newEmail1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["custom_attributes"]["groups"].length === 2 &&
          user2 &&
          user2["custom_attributes"]["groups"].length === 0 &&
          oldUser === null
        );
      });

      const oldUser = await client.users.getOne(email1);
      expect(oldUser).toBeNull();

      user1 = await client.users.getOne(newEmail1);
      expect(user1["external_id"]).toBe(newEmail1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Test");
      expect(user1["custom_attributes"]["groups"].length).toBe(2);
      expect(user1["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.users.getOne(email2);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Evan");
      expect(user2["custom_attributes"]["groups"].length).toBe(0);
    },
    hugeTime
  );

  test(
    "will not delete users if sync mode does not allow it, but will remove groups",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.upsert.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              external_id: newEmail1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              external_id: newEmail1,
              first_name: "John",
              last_name: "Test2", // changed here
            },
            oldGroups: [list1, list2],
            newGroups: [],
            toDelete: true,
            record: null,
          },
        ],
      });

      expect(errors).not.toBeNull();
      expect(success).toBe(false);

      user1 = await client.users.getOne(newEmail1);
      expect(user1["external_id"]).toBe(newEmail1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Test"); // no changes
      expect(user1["custom_attributes"]["groups"].length).toBe(2); // no changes
    },
    hugeTime
  );

  test(
    "can delete a user",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              external_id: newEmail1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              external_id: email1,
              first_name: "John",
              last_name: "Test",
            },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: { external_id: email2, first_name: "Evan" },
            newRecordProperties: { external_id: email2, first_name: "Evan" },
            oldGroups: [],
            newGroups: [list1], // but he's being deleted!
            toDelete: true,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await client.users.get([newEmail1, email1, email2]);
        const oldUser = getRecord(users, newEmail1);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["custom_attributes"]["groups"].length === 1 &&
          user2 === null &&
          oldUser === null
        );
      });

      const oldUser = await client.users.getOne(newEmail1);
      expect(oldUser).toBeNull();

      user1 = await client.users.getOne(email1);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Test");
      expect(user1["custom_attributes"]["groups"].length).toBe(1);
      expect(user1["custom_attributes"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.users.getOne(email2);
      expect(user2).toBeNull();
    },
    hugeTime
  );

  test(
    "can add back a user and many types",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              external_id: email2,
              first_name: "Evan",
              grouparoo_custom_text: "text is also here",
              grouparoo_custom_number: 5,
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await client.users.getOne(email2);
        return user2 !== null;
      });

      user2 = await client.users.getOne(email2);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Evan");
      expect(user2["custom_attributes"]["grouparoo_custom_text"]).toBe(
        "text is also here"
      );
      expect(user2["custom_attributes"]["grouparoo_custom_number"]).toBe(5);
    },
    hugeTime
  );

  test(
    "can set all those fields to undefined",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              external_id: email2,
              first_name: "Evan",
              grouparoo_custom_text: "text is also here",
              grouparoo_custom_number: 5,
            },
            newRecordProperties: {
              external_id: email2,
              first_name: "Maria",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await client.users.getOne(email2);
        return user2 && user2["first_name"] === "Maria";
      });

      user2 = await client.users.getOne(email2);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Maria");
      expect(
        user2["custom_attributes"]["grouparoo_custom_text"]
      ).toBeUndefined();
      expect(
        user2["custom_attributes"]["grouparoo_custom_number"]
      ).toBeUndefined();
    },
    hugeTime
  );

  test(
    "can handle required field error (email)",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              external_id: email2,
              first_name: "Maria",
            },
            newRecordProperties: {
              first_name: "Maria",
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
              first_name: "Ron",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(false);
      expect(errors).not.toBeNull();
      expect(errors.length).toEqual(2);

      const error = errors[0];
      expect(error.recordId).toEqual(id2);
      expect(error.message).toContain("required");

      const error2 = errors[1];
      expect(error2.recordId).toEqual("newId");
      expect(error2.message).toContain("required");

      user2 = await client.users.getOne(email2);
      expect(user2).not.toBeNull();
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Maria");
      expect(
        user2["custom_attributes"]["grouparoo_custom_text"]
      ).toBeUndefined();
      expect(
        user2["custom_attributes"]["grouparoo_custom_number"]
      ).toBeUndefined();
    },
    hugeTime
  );

  test(
    "can handle some of them working, but not others",
    async () => {
      user3 = await client.users.getOne(email3);
      expect(user3).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              external_id: email1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              external_id: email1,
              first_name: "Sam",
              last_name: "Test",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              external_id: email2,
              first_name: "Maria",
            },
            newRecordProperties: {
              first_name: "William",
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
              external_id: email3,
              first_name: "Liz",
              grouparoo_custom_text: "some text",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(false);
      expect(errors).not.toBeNull();
      expect(errors.length).toEqual(1);
      const error = errors[0];
      expect(error.recordId).toEqual(id2);
      expect(error.message).toContain("required");

      await helper.waitUntil(newNock, async function () {
        const users = await client.users.get([email1, email2, email3]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        user3 = getRecord(users, email3);
        return (
          user1 &&
          user1["first_name"] === "Sam" &&
          user2 &&
          user2["first_name"] === "Maria" &&
          user3 &&
          user3["first_name"] === "Liz"
        );
      });

      user1 = await client.users.getOne(email1);
      expect(user1["external_id"]).toBe(email1);
      expect(user1["first_name"]).toBe("Sam"); // updated
      expect(user1["last_name"]).toEqual("Test");

      user2 = await client.users.getOne(email2);
      expect(user2["external_id"]).toBe(email2);
      expect(user2["first_name"]).toBe("Maria"); // not updated

      user3 = await client.users.getOne(email3);
      expect(user3["external_id"]).toBe(email3);
      expect(user3["first_name"]).toBe("Liz");
      expect(user3["custom_attributes"]["grouparoo_custom_text"]).toEqual(
        "some text"
      );
    },
    hugeTime
  );

  test(
    "can handle batches with lots of records",
    async () => {
      // generate records
      const records = generateLongRecords(50);

      // run batch export
      const exports = makeExports(records);
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports,
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      const distinctIds = records.map((p) => p["external_id"]);

      let exportedRecords = [];
      await helper.waitUntil(newNock, async function () {
        exportedRecords = await client.users.get(distinctIds);
        return exportedRecords.length === distinctIds.length;
      });

      // verify all were created properly
      for (const record of records) {
        const user = getRecord(exportedRecords, record["external_id"]);
        expect(user["external_id"]).toBe(record["external_id"]);
        expect(user["first_name"]).toBe(record["first_name"]);
        expect(user["last_name"]).toBe(record["last_name"]);
      }

      // cleanup
      await deleteUsers(distinctIds, false);
    },
    hugeTime
  );
});
