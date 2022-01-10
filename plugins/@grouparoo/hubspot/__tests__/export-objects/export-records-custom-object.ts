import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-objects/exportRecords";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import { HubspotClient } from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  schemaId: "2-3604285",
  primaryKey: "grouparoo_object_property",
};
const hugeTime = helper.longTime * 6;

let client: HubspotClient;

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

const properties = [
  "first_name",
  "last_name",
  "text_field",
  "number_field",
  "date_field",
];

async function deleteUsers(emails: string[], suppressErrors) {
  const { schemaId } = destinationOptions;
  const records = await getRecordsByForeignKeys(emails);
  try {
    const batches: string[][] = [];
    let i = 0;
    const ids = records.map((record) => record.id);
    while (i < ids.length) {
      batches.push(ids.slice(i, (i += 10)));
    }
    for (const batch of batches) {
      await client.objects.delete(schemaId, batch);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function generateLongRecords(count: number): Record<string, any>[] {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      grouparoo_object_property: `user${i}@demo.com`,
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
    toDelete: false,
    record: null,
  }));
}

async function cleanUp(suppressErrors: boolean) {
  const emails = [email1, email2, email3, newEmail1];
  await deleteUsers(emails, suppressErrors);
  await helper.waitUntil(newNock, async function () {
    const { schemaId, primaryKey } = destinationOptions;
    const records = await client.objects.searchObjects(
      schemaId as string,
      primaryKey,
      emails
    );
    return records.length === 0;
  });
}

function getRecord(records: any[], foreignKeyValue: string) {
  const { primaryKey } = destinationOptions;
  const filtered = records.filter(
    (record) => record["properties"][primaryKey] === foreignKeyValue
  );
  return filtered.length > 0 ? filtered[0] : null;
}

async function getRecordByForeignKey(key) {
  const { schemaId, primaryKey } = destinationOptions;
  const records = await client.objects.searchObjects(
    schemaId as string,
    primaryKey as string,
    [key],
    properties
  );

  if (records.length > 0 && records[0].properties[primaryKey] === key) {
    return records[0];
  }
  return null;
}

async function getRecordsByForeignKeys(keys) {
  const { schemaId, primaryKey } = destinationOptions;
  const groups: string[][] = [];
  let i = 0;
  while (i < keys.length) {
    groups.push(keys.slice(i, (i += 5)));
  }
  const records = [];
  for (const group of groups) {
    records.push(
      ...(await client.objects.searchObjects(
        schemaId as string,
        primaryKey as string,
        group,
        properties
      ))
    );
  }
  return records;
}

describe("hubspot/exportRecords", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, hugeTime);

  afterAll(async () => {
    await cleanUp(true);
  }, hugeTime);

  test("will not create record if sync mode does not allow it", async () => {
    user1 = await getRecordByForeignKey(email1);
    expect(user1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            grouparoo_object_property: email1,
            first_name: "John",
          },
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

    user1 = await getRecordByForeignKey(email1);
    expect(user1).toBe(null);
  });

  test(
    "can create record",
    async () => {
      user1 = await getRecordByForeignKey(email1);
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user1 = await getRecordByForeignKey(email1);
        return user1 !== null;
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await getRecordByForeignKey(email1);
      expect(user1).not.toBe(null);
      expect(user1["properties"]["grouparoo_object_property"]).toBe(email1);
      expect(user1["properties"]["first_name"]).toBe("John");
    },
    hugeTime
  );

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            grouparoo_object_property: email1,
            first_name: "John",
          },
          newRecordProperties: {
            grouparoo_object_property: email1,
            first_name: "Brian", // updated!
            last_name: "Doe", // added!
          },
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

    user1 = await getRecordByForeignKey(email1);
    expect(user1).not.toBeNull();
    expect(user1["properties"]["grouparoo_object_property"]).toBe(email1);
    expect(user1["properties"]["first_name"]).toBe("John"); // not updated!
    expect(user1["properties"]["last_name"]).toBeNull(); // not updated!
  });

  test(
    "can add/edit user variables and do multiple users",
    async () => {
      user2 = await getRecordByForeignKey(email2);
      expect(user2).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
            },
            newRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
              last_name: "Doe",
              number_field: "3039",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Pete",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await getRecordsByForeignKeys([email1, email2]);
        user1 = getRecord(users, email1);
        user2 = getRecord(users, email2);
        return (
          user1 &&
          user1["properties"]["last_name"] === "Doe" &&
          user2 &&
          user2["properties"]["first_name"] === "Pete"
        );
      });

      user1 = await getRecordByForeignKey(email1);
      expect(user1).not.toBe(null);
      expect(user1["properties"]["grouparoo_object_property"]).toBe(email1);
      expect(user1["properties"]["first_name"]).toBe("John");
      expect(user1["properties"]["last_name"]).toBe("Doe");
      expect(user1["properties"]["number_field"]).toBe("3039");

      user2 = await getRecordByForeignKey(email2);
      expect(user2).not.toBe(null);
      expect(user2["properties"]["grouparoo_object_property"]).toBe(email2);
      expect(user2["properties"]["first_name"]).toBe("Pete");
    },
    hugeTime
  );

  test(
    "can clear user variables",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
              last_name: "Doe",
              number_field: "3039",
            },
            newRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        user1 = await getRecordByForeignKey(email1);

        return user1["properties"]["last_name"] === "";
      });

      user1 = await getRecordByForeignKey(email1);
      expect(user1["properties"]["grouparoo_object_property"]).toBe(email1);
      expect(user1["properties"]["first_name"]).toBe("John");
      expect(user1["properties"]["last_name"]).toBe("");
      expect(user1["properties"]["number_field"]).toBe("");
    },
    hugeTime
  );

  test(
    "can change the email address",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
            },
            newRecordProperties: {
              grouparoo_object_property: newEmail1,
              first_name: "John",
              last_name: "Test",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Sally",
            },
            newRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Evan",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const oldUser = await getRecordByForeignKey(email1);
        user1 = await getRecordByForeignKey(newEmail1);
        user2 = await getRecordByForeignKey(email2);

        return (
          user1 &&
          user1["properties"]["last_name"] === "Test" &&
          user2 &&
          user2["properties"]["first_name"] === "Evan" &&
          oldUser === null
        );
      });

      const users = await getRecordsByForeignKeys([newEmail1, email1, email2]);
      const oldUser = getRecord(users, email1);
      expect(oldUser).toBeNull();

      user1 = getRecord(users, newEmail1);
      expect(user1).not.toBeNull();
      expect(user1["properties"]["grouparoo_object_property"]).toBe(newEmail1);
      expect(user1["properties"]["first_name"]).toBe("John");
      expect(user1["properties"]["last_name"]).toBe("Test");

      user2 = getRecord(users, email2);
      expect(user2).not.toBeNull();
      expect(user2["properties"]["grouparoo_object_property"]).toBe(email2);
      expect(user2["properties"]["first_name"]).toBe("Evan");
    },
    hugeTime
  );

  test(
    "will not delete users if sync mode does not allow it, but will remove groups",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.additive.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              grouparoo_object_property: newEmail1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              grouparoo_object_property: newEmail1,
              first_name: "John",
              last_name: "Test2", // changed here
            },
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

      user1 = await getRecordByForeignKey(newEmail1);
      expect(user1["properties"]["grouparoo_object_property"]).toBe(newEmail1);
      expect(user1["properties"]["first_name"]).toBe("John");
      expect(user1["properties"]["last_name"]).toBe("Test"); // no changes
    },
    hugeTime
  );

  test(
    "can delete a user",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              grouparoo_object_property: newEmail1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
              last_name: "Test",
              text_field: "back",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Evan",
            },
            newRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Evan",
            },
            toDelete: true,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const oldUser = await getRecordByForeignKey(newEmail1);
        user1 = user1 = await getRecordByForeignKey(email1);
        user2 = await getRecordByForeignKey(email2);
        return (
          user1 &&
          user1["properties"]["text_field"] === "back" &&
          user2 === null &&
          oldUser === null
        );
      });

      const oldUser = await getRecordByForeignKey(newEmail1);
      expect(oldUser).toBeNull();

      user1 = await getRecordByForeignKey(email1);
      expect(user1["properties"]["grouparoo_object_property"]).toBe(email1);
      expect(user1["properties"]["first_name"]).toBe("John");
      expect(user1["properties"]["last_name"]).toBe("Test");
      expect(user1["properties"]["text_field"]).toBe("back");

      user2 = await getRecordByForeignKey(email2);
      expect(user2).toBeNull();
    },
    hugeTime
  );

  test(
    "can add back a user and many types",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Evan",
              text_field: "text is also here",
              number_field: "5",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await getRecordByForeignKey(email2);
        return user2 !== null;
      });

      user2 = await getRecordByForeignKey(email2);
      expect(user2["properties"]["grouparoo_object_property"]).toBe(email2);
      expect(user2["properties"]["first_name"]).toBe("Evan");
      expect(user2["properties"]["text_field"]).toBe("text is also here");
      expect(user2["properties"]["number_field"]).toBe("5");
    },
    hugeTime
  );

  test(
    "can set all those fields to empty string",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Evan",
              text_field: "text is also here",
              number_field: "5",
            },
            newRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Maria",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await getRecordByForeignKey(email2);
        return user2 && user2["properties"]["first_name"] === "Maria";
      });

      user2 = await getRecordByForeignKey(email2);
      expect(user2["properties"]["grouparoo_object_property"]).toBe(email2);
      expect(user2["properties"]["first_name"]).toBe("Maria");
      expect(user2["properties"]["text_field"]).toBe("");
      expect(user2["properties"]["number_field"]).toBe("");
    },
    hugeTime
  );

  test(
    "can handle required field error (email)",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Maria",
            },
            newRecordProperties: {
              first_name: "Maria",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: "newId",
            oldRecordProperties: {},
            newRecordProperties: {
              first_name: "Ron",
            },
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

      user2 = await getRecordByForeignKey(email2);
      expect(user2["properties"]["grouparoo_object_property"]).toBe(email2);
      expect(user2["properties"]["first_name"]).toBe("Maria");
      expect(user2["properties"]["text_field"]).toBe("");
      expect(user2["properties"]["number_field"]).toBe("");
    },
    hugeTime
  );

  test(
    "can handle some of them working, but not others",
    async () => {
      user3 = await getRecordByForeignKey(email3);
      expect(user3).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              grouparoo_object_property: email1,
              first_name: "Sam",
              last_name: "Test",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              grouparoo_object_property: email2,
              first_name: "Maria",
            },
            newRecordProperties: {
              first_name: "William",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id3,
            oldRecordProperties: {},
            newRecordProperties: {
              grouparoo_object_property: email3,
              first_name: "Liz",
              text_field: "some text",
            },
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
        user1 = await getRecordByForeignKey(email1);
        user2 = await getRecordByForeignKey(email2);
        user3 = await getRecordByForeignKey(email3);
        return (
          user1 &&
          user1["properties"]["first_name"] === "Sam" &&
          user2 &&
          user2["properties"]["first_name"] === "Maria" &&
          user3 &&
          user3["properties"]["first_name"] === "Liz"
        );
      });

      user1 = await getRecordByForeignKey(email1);
      expect(user1["properties"]["grouparoo_object_property"]).toBe(email1);
      expect(user1["properties"]["first_name"]).toBe("Sam"); // updated
      expect(user1["properties"]["last_name"]).toEqual("Test");

      user2 = await getRecordByForeignKey(email2);
      expect(user2["properties"]["grouparoo_object_property"]).toBe(email2);
      expect(user2["properties"]["first_name"]).toBe("Maria"); // not updated

      user3 = await getRecordByForeignKey(email3);
      expect(user3["properties"]["grouparoo_object_property"]).toBe(email3);
      expect(user3["properties"]["first_name"]).toBe("Liz");
      expect(user3["properties"]["text_field"]).toEqual("some text");
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
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports,
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      const distinctIds = records.map((p) => p["grouparoo_object_property"]);

      let exportedRecords = [];
      await helper.waitUntil(newNock, async function () {
        exportedRecords = await getRecordsByForeignKeys(distinctIds);
        return exportedRecords.length === distinctIds.length;
      });

      // verify all were created properly
      for (const record of records) {
        const user = getRecord(
          exportedRecords,
          record["grouparoo_object_property"]
        );
        expect(user["properties"]["grouparoo_object_property"]).toBe(
          record["grouparoo_object_property"]
        );
        expect(user["properties"]["first_name"]).toBe(record["first_name"]);
        expect(user["properties"]["last_name"]).toBe(record["last_name"]);
      }

      // cleanup
      await deleteUsers(distinctIds, false);
    },
    hugeTime
  );
});
