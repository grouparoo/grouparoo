import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-objects/exportRecords";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import { HubspotClient } from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const destinationOptions = {
  schemaId: "CONTACT",
  primaryKey: "email",
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
  "firstname",
  "lastname",
  "text_field",
  "number_field",
  "date_field",
  "grouparoo_custom_text",
  "grouparoo_custom_number",
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
      email: `user${i}@demo.com`,
      firstname: `Fist Name ${i}`,
      lastname: `Last Name ${i}`,
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

function getRecord(
  records: any[],
  foreignKey: string,
  foreignKeyValue: string
) {
  const filtered = records.filter(
    (record) => record["properties"][foreignKey] === foreignKeyValue
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
  describe.each([
    { useOAuth: false, description: "with API key" },
    { useOAuth: true, description: "with OAuth" },
  ])("$description", ({ useOAuth }) => {
    const appOptions = loadAppOptions(newNock, { useOAuth });

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
        syncOperations: DestinationSyncModeData.update.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: { email: email1, firstname: "John" },
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
              newRecordProperties: { email: email1, firstname: "John" },
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
        expect(user1["properties"]["email"]).toBe(email1);
        expect(user1["properties"]["firstname"]).toBe("John");
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
            oldRecordProperties: { email: email1, firstname: "John" },
            newRecordProperties: {
              email: email1,
              firstname: "Brian", // updated!
              lastname: "Doe", // added!
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
      expect(user1["properties"]["email"]).toBe(email1);
      expect(user1["properties"]["firstname"]).toBe("John"); // not updated!
      expect(user1["properties"]["lastname"]).toBeNull(); // not updated!
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
              oldRecordProperties: { email: email1, firstname: "John" },
              newRecordProperties: {
                email: email1,
                firstname: "John",
                lastname: "Doe",
                number_field: "3039",
              },
              toDelete: false,
              record: null,
            },
            {
              recordId: id2,
              oldRecordProperties: {},
              newRecordProperties: { email: email2, firstname: "Pete" },
              toDelete: false,
              record: null,
            },
          ],
        });

        expect(success).toBe(true);
        expect(errors).toBeNull();

        await helper.waitUntil(newNock, async function () {
          const users = await getRecordsByForeignKeys([email1, email2]);
          user1 = getRecord(users, "email", email1);
          user2 = getRecord(users, "email", email2);
          return (
            user1 &&
            user1["properties"]["lastname"] === "Doe" &&
            user2 &&
            user2["properties"]["firstname"] === "Pete"
          );
        });

        user1 = await getRecordByForeignKey(email1);
        expect(user1).not.toBe(null);
        expect(user1["properties"]["email"]).toBe(email1);
        expect(user1["properties"]["firstname"]).toBe("John");
        expect(user1["properties"]["lastname"]).toBe("Doe");
        expect(user1["properties"]["number_field"]).toBe("3039");

        user2 = await getRecordByForeignKey(email2);
        expect(user2).not.toBe(null);
        expect(user2["properties"]["email"]).toBe(email2);
        expect(user2["properties"]["firstname"]).toBe("Pete");
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
                email: email1,
                firstname: "John",
                lastname: "Doe",
                number_field: "3039",
              },
              newRecordProperties: { email: email1, firstname: "John" },
              toDelete: false,
              record: null,
            },
          ],
        });

        expect(success).toBe(true);
        expect(errors).toBeNull();

        await helper.waitUntil(newNock, async function () {
          user1 = await getRecordByForeignKey(email1);

          return user1["properties"]["lastname"] === "";
        });

        user1 = await getRecordByForeignKey(email1);
        expect(user1["properties"]["email"]).toBe(email1);
        expect(user1["properties"]["firstname"]).toBe("John");
        expect(user1["properties"]["lastname"]).toBe("");
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
              oldRecordProperties: { email: email1, firstname: "John" },
              newRecordProperties: {
                email: newEmail1,
                firstname: "John",
                lastname: "Test",
              },
              toDelete: false,
              record: null,
            },
            {
              recordId: id2,
              oldRecordProperties: {
                email: email2,
                firstname: "Sally",
              },
              newRecordProperties: { email: email2, firstname: "Evan" },
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
            user1["properties"]["lastname"] === "Test" &&
            user2 &&
            user2["properties"]["firstname"] === "Evan" &&
            oldUser === null
          );
        });

        const users = await getRecordsByForeignKeys([
          newEmail1,
          email1,
          email2,
        ]);
        const oldUser = getRecord(users, "email", email1);
        expect(oldUser).toBeNull();

        user1 = getRecord(users, "email", newEmail1);
        expect(user1).not.toBeNull();
        expect(user1["properties"]["email"]).toBe(newEmail1);
        expect(user1["properties"]["firstname"]).toBe("John");
        expect(user1["properties"]["lastname"]).toBe("Test");

        user2 = getRecord(users, "email", email2);
        expect(user2).not.toBeNull();
        expect(user2["properties"]["email"]).toBe(email2);
        expect(user2["properties"]["firstname"]).toBe("Evan");
      },
      hugeTime
    );

    test(
      "will not delete users if sync mode does not allow it, but will remove groups",
      async () => {
        const { success, errors } = await exportBatch({
          appOptions,
          destinationOptions,
          syncOperations: DestinationSyncModeData.upsert.operations,
          exports: [
            {
              recordId: id1,
              oldRecordProperties: {
                email: newEmail1,
                firstname: "John",
                lastname: "Test",
              },
              newRecordProperties: {
                email: newEmail1,
                firstname: "John",
                lastname: "Test2", // changed here
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
        expect(user1["properties"]["email"]).toBe(newEmail1);
        expect(user1["properties"]["firstname"]).toBe("John");
        expect(user1["properties"]["lastname"]).toBe("Test"); // no changes
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
                email: newEmail1,
                firstname: "John",
                lastname: "Test",
              },
              newRecordProperties: {
                email: email1,
                firstname: "John",
                lastname: "Test",
                text_field: "back",
              },
              toDelete: false,
              record: null,
            },
            {
              recordId: id2,
              oldRecordProperties: { email: email2, firstname: "Evan" },
              newRecordProperties: { email: email2, firstname: "Evan" },
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
        expect(user1["properties"]["email"]).toBe(email1);
        expect(user1["properties"]["firstname"]).toBe("John");
        expect(user1["properties"]["lastname"]).toBe("Test");
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
                email: email2,
                firstname: "Evan",
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
        expect(user2["properties"]["email"]).toBe(email2);
        expect(user2["properties"]["firstname"]).toBe("Evan");
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
                email: email2,
                firstname: "Evan",
                text_field: "text is also here",
                number_field: "5",
              },
              newRecordProperties: {
                email: email2,
                firstname: "Maria",
              },
              toDelete: false,
              record: null,
            },
          ],
        });

        await helper.waitUntil(newNock, async function () {
          user2 = await getRecordByForeignKey(email2);
          return user2 && user2["properties"]["firstname"] === "Maria";
        });

        user2 = await getRecordByForeignKey(email2);
        expect(user2["properties"]["email"]).toBe(email2);
        expect(user2["properties"]["firstname"]).toBe("Maria");
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
                email: email2,
                firstname: "Maria",
              },
              newRecordProperties: {
                firstname: "Maria",
              },
              toDelete: false,
              record: null,
            },
            {
              recordId: "newId",
              oldRecordProperties: {},
              newRecordProperties: {
                firstname: "Ron",
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
        expect(user2["properties"]["email"]).toBe(email2);
        expect(user2["properties"]["firstname"]).toBe("Maria");
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
                email: email1,
                firstname: "John",
                lastname: "Test",
              },
              newRecordProperties: {
                email: email1,
                firstname: "Sam",
                lastname: "Test",
              },
              toDelete: false,
              record: null,
            },
            {
              recordId: id2,
              oldRecordProperties: {
                email: email2,
                firstname: "Maria",
              },
              newRecordProperties: {
                firstname: "William",
              },
              toDelete: false,
              record: null,
            },
            {
              recordId: id3,
              oldRecordProperties: {},
              newRecordProperties: {
                email: email3,
                firstname: "Liz",
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
            user1["properties"]["firstname"] === "Sam" &&
            user2 &&
            user2["properties"]["firstname"] === "Maria" &&
            user3 &&
            user3["properties"]["firstname"] === "Liz"
          );
        });

        user1 = await getRecordByForeignKey(email1);
        expect(user1["properties"]["email"]).toBe(email1);
        expect(user1["properties"]["firstname"]).toBe("Sam"); // updated
        expect(user1["properties"]["lastname"]).toEqual("Test");

        user2 = await getRecordByForeignKey(email2);
        expect(user2["properties"]["email"]).toBe(email2);
        expect(user2["properties"]["firstname"]).toBe("Maria"); // not updated

        user3 = await getRecordByForeignKey(email3);
        expect(user3["properties"]["email"]).toBe(email3);
        expect(user3["properties"]["firstname"]).toBe("Liz");
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

        const distinctIds = records.map((p) => p["email"]);

        let exportedRecords = [];
        await helper.waitUntil(newNock, async function () {
          exportedRecords = await getRecordsByForeignKeys(distinctIds);
          return exportedRecords.length === distinctIds.length;
        });

        // verify all were created properly
        for (const record of records) {
          const user = getRecord(exportedRecords, "email", record["email"]);
          expect(user["properties"]["email"]).toBe(record["email"]);
          expect(user["properties"]["firstname"]).toBe(record["firstname"]);
          expect(user["properties"]["lastname"]).toBe(record["lastname"]);
        }

        // cleanup
        await deleteUsers(distinctIds, false);
      },
      hugeTime
    );
  });
});
