import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export/exportRecords";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import Mixpanel from "../../src/lib/client/mixpanel";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const hugeTime = helper.longTime * 6;

let client: Mixpanel;

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
    for (const emailToDelete of emails) {
      await client.ingestion.profile.delete(emailToDelete);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function getRecord(records: any[], distinctId: string) {
  const filtered = records.filter(
    (record) => record["$distinct_id"] === distinctId
  );
  return filtered.length > 0 ? filtered[0] : null;
}

function generateLongRecords(count: number): Record<string, any>[] {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      $distinct_id: `user${i}@demo.com`,
      $first_name: `Fist Name ${i}`,
      $last_name: `Last Name ${i}`,
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
    const result = await client.query.profile.getByDistinctIds(emails);
    return result.length === 0;
  });
}

describe("mixpanel/exportRecords", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, hugeTime);

  afterAll(async () => {
    await cleanUp(true);
  }, hugeTime);

  test("will not create record if sync mode does not allow it", async () => {
    user1 = await client.query.profile.getByDistinctId(email1);
    expect(user1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { $distinct_id: email1, $first_name: "John" },
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

    user1 = await client.query.profile.getByDistinctId(email1);
    expect(user1).toBe(null);
  });

  test(
    "can create record",
    async () => {
      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user1 = await client.query.profile.getByDistinctId(email1);
        return user1 !== null;
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1).not.toBe(null);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
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
          oldRecordProperties: { $distinct_id: email1, $first_name: "John" },
          newRecordProperties: {
            $distinct_id: email1,
            $first_name: "Brian", // updated!
            $last_name: "Doe", // added!
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

    user1 = await client.query.profile.getByDistinctId(email1);
    expect(user1).not.toBe(null);
    expect(user1["$distinct_id"]).toBe(email1);
    expect(user1["$properties"]["$first_name"]).toBe("John"); // not updated!
    expect(user1["$properties"]["$last_name"]).toBe(undefined); // not updated!
  });

  test(
    "can add/edit user variables and do multiple users",
    async () => {
      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: { $distinct_id: email1, $first_name: "John" },
            newRecordProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Doe",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: { $distinct_id: email2, $first_name: "Pete" },
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
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
        ]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["$properties"]["$last_name"] === "Doe" &&
          user2 &&
          user2["$properties"]["$first_name"] === "Pete"
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1).not.toBe(null);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Doe");

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2).not.toBe(null);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Pete");
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
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Doe",
            },
            newRecordProperties: { $distinct_id: email1, $first_name: "John" },
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
        user1 = await client.query.profile.getByDistinctId(email1);
        return user1["$properties"]["$last_name"] === null;
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe(null);
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
            oldRecordProperties: { $distinct_id: email1, $first_name: "John" },
            newRecordProperties: { $distinct_id: email1, $first_name: "John" },
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
        user1 = await client.query.profile.getByDistinctId(email1);
        return user1["$properties"]["groups"].length === 1;
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["groups"].length).toBe(1);
      expect(user1["$properties"]["groups"]).toEqual(
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
            oldRecordProperties: { $distinct_id: email1, $first_name: "John" },
            newRecordProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: { $distinct_id: email2, $first_name: "Pete" },
            newRecordProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
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
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
        ]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 2 &&
          user2 &&
          user2["$properties"]["$first_name"] === "Sally"
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["groups"].length).toBe(2);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Sally");
      expect(user2["$properties"]["groups"].length).toBe(1);
      expect(user2["$properties"]["groups"]).toEqual(
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
            oldRecordProperties: { $distinct_id: email1, $first_name: "John" },
            newRecordProperties: { $distinct_id: email1, $first_name: "John" },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
            },
            newRecordProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
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
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
        ]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 1 &&
          user2 &&
          user2["$properties"]["groups"].length === 1
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["groups"].length).toBe(1);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Sally");
      expect(user2["$properties"]["groups"].length).toBe(1);
      expect(user2["$properties"]["groups"]).toEqual(
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
            oldRecordProperties: { $distinct_id: email1, $first_name: "John" },
            newRecordProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test",
            },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              $distinct_id: email2,
              $first_name: "Sally",
            },
            newRecordProperties: { $distinct_id: email2, $first_name: "Evan" },
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
        const users = await client.query.profile.getByDistinctIds([
          newEmail1,
          email1,
          email2,
        ]);
        const oldUser = getRecord(users, email1);
        user1 = getRecord(users, newEmail1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 2 &&
          user2 &&
          user2["$properties"]["groups"].length === 0 &&
          oldUser === null
        );
      });

      const oldUser = await client.query.profile.getByDistinctId(email1);
      expect(oldUser).toBeNull();

      user1 = await client.query.profile.getByDistinctId(newEmail1);
      expect(user1["$distinct_id"]).toBe(newEmail1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Test");
      expect(user1["$properties"]["groups"].length).toBe(2);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Evan");
      expect(user2["$properties"]["groups"].length).toBe(0);
    },
    hugeTime
  );

  test(
    "will not delete users if sync mode does not allow it, but will remove groups",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.additive.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test",
            },
            newRecordProperties: {
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test2", // changed here
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

      user1 = await client.query.profile.getByDistinctId(newEmail1);
      expect(user1["$distinct_id"]).toBe(newEmail1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Test"); // no changes
      expect(user1["$properties"]["groups"].length).toBe(2); // no changes
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
              $distinct_id: newEmail1,
              $first_name: "John",
              $last_name: "Test",
            },
            newRecordProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Test",
            },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: { $distinct_id: email2, $first_name: "Evan" },
            newRecordProperties: { $distinct_id: email2, $first_name: "Evan" },
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
        const users = await client.query.profile.getByDistinctIds([
          newEmail1,
          email1,
          email2,
        ]);
        const oldUser = getRecord(users, newEmail1);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["$properties"]["groups"].length === 1 &&
          user2 === null &&
          oldUser === null
        );
      });

      const oldUser = await client.query.profile.getByDistinctId(newEmail1);
      expect(oldUser).toBeNull();

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("John");
      expect(user1["$properties"]["$last_name"]).toBe("Test");
      expect(user1["$properties"]["groups"].length).toBe(1);
      expect(user1["$properties"]["groups"]).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.query.profile.getByDistinctId(email2);
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
              $distinct_id: email2,
              $first_name: "Evan",
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
        user2 = await client.query.profile.getByDistinctId(email2);
        return user2 !== null;
      });

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Evan");
      expect(user2["$properties"]["grouparoo_custom_text"]).toBe(
        "text is also here"
      );
      expect(user2["$properties"]["grouparoo_custom_number"]).toBe(5);
    },
    hugeTime
  );

  test(
    "can set all those fields to null",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              $distinct_id: email2,
              $first_name: "Evan",
              grouparoo_custom_text: "text is also here",
              grouparoo_custom_number: 5,
            },
            newRecordProperties: {
              $distinct_id: email2,
              $first_name: "Maria",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await client.query.profile.getByDistinctId(email2);
        return user2 && user2["$properties"]["$first_name"] === "Maria";
      });

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Maria");
      expect(user2["$properties"]["grouparoo_custom_text"]).toBeNull();
      expect(user2["$properties"]["grouparoo_custom_number"]).toBeNull();
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
              $distinct_id: email2,
              $first_name: "Maria",
            },
            newRecordProperties: {
              $first_name: "Maria",
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
              $first_name: "Ron",
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

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Maria");
      expect(user2["$properties"]["grouparoo_custom_text"]).toBeNull();
      expect(user2["$properties"]["grouparoo_custom_number"]).toBeNull();
    },
    hugeTime
  );

  test(
    "can handle some of them working, but not others",
    async () => {
      user3 = await client.query.profile.getByDistinctId(email3);
      expect(user3).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              $distinct_id: email1,
              $first_name: "John",
              $last_name: "Test",
            },
            newRecordProperties: {
              $distinct_id: email1,
              $first_name: "Sam",
              $last_name: "Test",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              $distinct_id: email2,
              $first_name: "Maria",
            },
            newRecordProperties: {
              $first_name: "William",
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
              $distinct_id: email3,
              $first_name: "Liz",
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
        const users = await client.query.profile.getByDistinctIds([
          email1,
          email2,
          email3,
        ]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        user3 = getRecord(users, email3);
        return (
          user1 &&
          user1["$properties"]["$first_name"] === "Sam" &&
          user2 &&
          user2["$properties"]["$first_name"] === "Maria" &&
          user3 &&
          user3["$properties"]["$first_name"] === "Liz"
        );
      });

      user1 = await client.query.profile.getByDistinctId(email1);
      expect(user1["$distinct_id"]).toBe(email1);
      expect(user1["$properties"]["$first_name"]).toBe("Sam"); // updated
      expect(user1["$properties"]["$last_name"]).toEqual("Test");

      user2 = await client.query.profile.getByDistinctId(email2);
      expect(user2["$distinct_id"]).toBe(email2);
      expect(user2["$properties"]["$first_name"]).toBe("Maria"); // not updated

      user3 = await client.query.profile.getByDistinctId(email3);
      expect(user3["$distinct_id"]).toBe(email3);
      expect(user3["$properties"]["$first_name"]).toBe("Liz");
      expect(user3["$properties"]["grouparoo_custom_text"]).toEqual(
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

      const distinctIds = records.map((p) => p["$distinct_id"]);

      let exportedRecords = [];
      await helper.waitUntil(newNock, async function () {
        exportedRecords = await client.query.profile.getByDistinctIds(
          distinctIds
        );
        return exportedRecords.length === distinctIds.length;
      });

      // verify all were created properly
      for (const record of records) {
        const user = getRecord(exportedRecords, record["$distinct_id"]);
        expect(user["$distinct_id"]).toBe(record["$distinct_id"]);
        expect(user["$properties"]["$first_name"]).toBe(record["$first_name"]);
        expect(user["$properties"]["$last_name"]).toBe(record["$last_name"]);
      }

      // cleanup
      await deleteUsers(distinctIds, false);
    },
    hugeTime
  );
});
