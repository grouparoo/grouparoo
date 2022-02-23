import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/sheet-export/exportRecords";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import Spreadsheet from "../../src/lib/shared/Spreadsheet";

const url =
  "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=107110394";
const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions();
const destinationId = "APfDgoj2chOq39n-3039";
const destinationOptions = {
  sheet_url: url,
  primaryKey: "id",
  groupsColumn: "groups",
};

let client: Spreadsheet;

const hugeTime = helper.hugeTime * 5;
const userId1 = "1";
const id1 = "pro1";
const newuserId1 = "30";
let user1 = null;

const userId2 = "2";
const id2 = "pro2";
let user2 = null;

const userId3 = "3";
const id3 = "pro3";
let user3 = null;

const list1 = "(test) High Value";
const list2 = "(test) Churned";

function generateLongRecords(count: number): Record<string, any>[] {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      [destinationOptions.primaryKey]: `user${i}@demo.com`,
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
  try {
    await client._cleanSheet();
  } catch (e) {
    if (!suppressErrors) {
      throw e;
    }
  }
}

describe("google-sheets/exportRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    client = await new Spreadsheet(appOptions, url);
    client.setBypassSleep(!newNock); //bypass sleep off when using nock.
    await cleanUp(false);
  }, helper.longTime);

  afterAll(async () => {
    await cleanUp(false);
  }, helper.longTime);

  test(
    "will not create record if sync mode does not allow it",
    async () => {
      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        syncOperations: DestinationSyncModeData.update.operations,
        destinationOptions,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              [destinationOptions.primaryKey]: userId1,
              first_name: "John",
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
      expect(error.message).toContain("not creating");
      expect(error.errorLevel).toEqual("info");

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1).toBe(null);
    },
    hugeTime
  );

  test(
    "can create record",
    async () => {
      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        syncOperations: DestinationSyncModeData.sync.operations,
        destinationOptions,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              [destinationOptions.primaryKey]: userId1,
              first_name: "John",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1).not.toBe(null);
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["first_name"]).toBe("John");
    },
    hugeTime
  );

  test(
    "will not change user variables if sync mode does not allow it",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: { create: true, update: false, delete: true },
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
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

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1).not.toBe(null);
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["first_name"]).toBe("John"); // not updated!
      expect(user1["last_name"]).toBe(undefined); // not updated!
    },
    hugeTime
  );

  test(
    "can add/edit user variables and do multiple users",
    async () => {
      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
              last_name: "Doe",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Pete",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1).not.toBe(null);
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Doe");

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2).not.toBe(null);
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Pete");
    },
    hugeTime
  );

  test(
    "can clear user variables",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
              last_name: "Doe",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
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
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
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

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["groups"].split(",").length).toBe(1);
      expect(user1["groups"].split(",")).toEqual(
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
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            oldGroups: [list1],
            newGroups: [list1, list2],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Pete",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
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

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["groups"].split(",").length).toBe(2);
      expect(user1["groups"].split(",")).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Sally");
      expect(user2["groups"].split(",").length).toBe(1);
      expect(user2["groups"].split(",")).toEqual(
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
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            oldGroups: [list1, list2],
            newGroups: [list1],
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Sally",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
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

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["groups"].split(",").length).toBe(1);
      expect(user1["groups"].split(",")).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Sally");
      expect(user2["groups"].split(",").length).toBe(1);
      expect(user2["groups"].split(",")).toEqual(
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
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: newuserId1,
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
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Sally",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Evan",
            },
            oldGroups: [list1],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      const oldUser = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(oldUser).toBeNull();

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        newuserId1
      );

      expect(user1[destinationOptions["primaryKey"]]).toBe(newuserId1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Test");
      expect(user1["groups"].split(",").length).toBe(2);
      expect(user1["groups"].split(",")).toEqual(
        expect.arrayContaining([list1, list2])
      );

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Evan");
      expect(user2["groups"]).toBe(undefined);
    },
    hugeTime
  );

  test(
    "will not delete users if sync mode does not allow it, but will remove groups",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.upsert.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: newuserId1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: newuserId1,
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

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        newuserId1
      );

      expect(user1[destinationOptions["primaryKey"]]).toBe(newuserId1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Test"); // no changes
      expect(user1["groups"].split(",").length).toBe(2); // no changes
    },
    hugeTime
  );

  test(
    "can delete a user",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: newuserId1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
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
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Evan",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Evan",
            },
            oldGroups: [],
            newGroups: [list1], // but he's being deleted!
            toDelete: true,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      const oldUser = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        newuserId1
      );

      expect(oldUser).toBeNull();

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["first_name"]).toBe("John");
      expect(user1["last_name"]).toBe("Test");
      expect(user1["groups"].split(",").length).toBe(1);
      expect(user1["groups"].split(",")).toEqual(
        expect.arrayContaining([list1])
      );

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2).toBeNull();
    },
    hugeTime
  );

  test(
    "can add back a user and many types",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
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
        user2 = await client.getRowByPrimaryKey(
          destinationOptions["primaryKey"],
          userId2
        );
        return user2 !== null;
      });

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Evan");
      expect(user2["grouparoo_custom_text"]).toBe("text is also here");
      expect(user2["grouparoo_custom_number"]).toBe("5");
    },
    hugeTime
  );

  test(
    "can set all those fields to null",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Evan",
              grouparoo_custom_text: "text is also here",
              grouparoo_custom_number: 5,
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
              first_name: "Maria",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      });

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Maria");
      expect(user2["grouparoo_custom_text"]).toBe(undefined);
      expect(user2["grouparoo_custom_number"]).toBe(undefined);
    },
    hugeTime
  );

  test(
    "can handle required field error (email)",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId2,
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

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Maria");
      expect(user2["grouparoo_custom_text"]).toBe(undefined);
      expect(user2["grouparoo_custom_number"]).toBe(undefined);
    },
    hugeTime
  );

  test(
    "can handle some of them working, but not others",
    async () => {
      user3 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId3
      );
      expect(user3).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
              first_name: "John",
              last_name: "Test",
            },
            newRecordProperties: {
              [destinationOptions["primaryKey"]]: userId1,
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
              [destinationOptions["primaryKey"]]: userId2,
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
              [destinationOptions["primaryKey"]]: userId3,
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

      user1 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId1
      );
      expect(user1[destinationOptions["primaryKey"]]).toBe(userId1);
      expect(user1["first_name"]).toBe("Sam"); // updated
      expect(user1["last_name"]).toEqual("Test");

      user2 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId2
      );
      expect(user2[destinationOptions["primaryKey"]]).toBe(userId2);
      expect(user2["first_name"]).toBe("Maria"); // not updated

      user3 = await client.getRowByPrimaryKey(
        destinationOptions["primaryKey"],
        userId3
      );
      expect(user3[destinationOptions["primaryKey"]]).toBe(userId3);
      expect(user3["first_name"]).toBe("Liz");
      expect(user3["grouparoo_custom_text"]).toEqual("some text");
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
        destinationId,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports,
      });
      expect(success).toBe(true);
      expect(errors).toBeNull();

      const primaryKeys = [];
      // verify all were created properly
      for (const record of records) {
        const user = await client.getRowByPrimaryKey(
          destinationOptions["primaryKey"],
          record[destinationOptions["primaryKey"]]
        );
        primaryKeys.push(user[destinationOptions["primaryKey"]]);
        expect(user[destinationOptions["primaryKey"]]).toBe(
          record[destinationOptions["primaryKey"]]
        );
        expect(user["first_name"]).toBe(record["first_name"]);
        expect(user["last_name"]).toBe(record["last_name"]);
      }
    },
    hugeTime * 2
  );
});
