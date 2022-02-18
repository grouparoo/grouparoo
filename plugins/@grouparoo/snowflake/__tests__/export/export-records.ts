import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export/exportRecords";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { afterData, beforeData, getConfig, getConnection } from "../utils/data";
import { Snowflake } from "snowflake-promise";
import { makeWhereClause } from "../../src/lib/shared/util";
import { FilterOperation, SimpleAppOptions } from "@grouparoo/core";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

const { recordsDestinationTableName, groupsDestinationTableName } = getConfig();
const destinationOptions = {
  table: recordsDestinationTableName,
  primaryKey: "EMAIL",
  groupsTable: groupsDestinationTableName,
  groupForeignKey: "EMAIL",
  groupColumnName: "GROUP_NAME",
};

let connection: Snowflake;

const email1 = "grouparoo@demo.com";
const id1 = 1;
const newEmail1 = "notgrouparoo@demo.com";
let user1 = null;

const email2 = "grouparoo2@demo.com";
const id2 = 2;
let user2 = null;

const email3 = "grouparoo3@demo.com";
const id3 = 3;
let user3 = null;

const list1 = "(test) High Value";
const list2 = "(test) Churned";

async function getRecordByPrimaryKey(
  primaryKey: string,
  primaryKeyValue: string
) {
  return (await getRecordByPrimaryKeys(primaryKey, [primaryKeyValue]))[0];
}

async function getRecordByPrimaryKeys(
  primaryKey: string,
  primaryKeyValues: string[]
) {
  let query = `SELECT * FROM "${destinationOptions.table}" WHERE`;
  const inClause = makeWhereClause(
    {
      columnName: primaryKey.toString(),
      filterOperation: FilterOperation.In,
      values: primaryKeyValues,
    },
    []
  );
  query += ` ${inClause}`;
  return await connection.execute(query, primaryKeyValues);
}

async function getGroups(primaryKeyValue: string) {
  let query = `SELECT * FROM "${destinationOptions.groupsTable}" WHERE`;
  const whereClause = makeWhereClause(
    {
      columnName: destinationOptions.groupForeignKey.toString(),
      filterOperation: FilterOperation.Equal,
      value: primaryKeyValue,
    },
    []
  );
  query += ` ${whereClause}`;
  return await connection.execute(query, [primaryKeyValue]);
}

function getRecord(records: any[], primaryKey: string) {
  const filtered = records.filter(
    (record) => record[destinationOptions.primaryKey] === primaryKey
  );
  return filtered.length > 0 ? filtered[0] : null;
}

function generateLongRecords(count: number): Record<string, any>[] {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      [destinationOptions.primaryKey]: `user${i}@demo.com`,
      ID: 1000 + i,
      FIRST_NAME: `Fist Name ${i}`,
      LAST_NAME: `Last Name ${i}`,
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

describe("snowflake/exportRecords", () => {
  beforeAll(async () => {
    connection = await getConnection(appOptions);
    await beforeData(appOptions);
  });

  afterAll(async () => await afterData(appOptions));

  test("will not create record if sync mode does not allow it", async () => {
    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1).not.toBeTruthy();

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            FIRST_NAME: "John",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1).not.toBeTruthy();
  });

  test("can create record", async () => {
    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1).not.toBeTruthy();

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1).toBeTruthy();
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    expect(user1["FIRST_NAME"]).toBe("John");
  });

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "Brian", // updated!
            LAST_NAME: "Doe", // added!
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1).toBeTruthy();
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    expect(user1["FIRST_NAME"]).toBe("John"); // not updated!
    expect(user1["LAST_NAME"]).not.toBeTruthy(); // not updated!
  });

  test("can add/edit record variables and do multiple record", async () => {
    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2).not.toBeTruthy();

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Doe",
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
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Pete",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1).toBeTruthy();
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    expect(user1["FIRST_NAME"]).toBe("John");
    expect(user1["LAST_NAME"]).toBe("Doe");

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2).toBeTruthy();
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    expect(user2["FIRST_NAME"]).toBe("Pete");
  });

  test("can clear record variables", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Doe",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    expect(user1["FIRST_NAME"]).toBe("John");
    expect(user1["LAST_NAME"]).not.toBeTruthy();
  });

  test("cannot sync if only one Group option is set", async () => {
    const badDestinationOptions = {
      table: recordsDestinationTableName,
      primaryKey: "EMAIL",
      groupsTable: groupsDestinationTableName,
    };

    await expect(
      exportBatch({
        appOptions,
        destinationOptions: badDestinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              LAST_NAME: "Smith",
            },
            oldGroups: [],
            newGroups: [],
            toDelete: false,
            record: null,
          },
        ],
      })
    ).rejects.toThrow(/Group data syncing, all related options must be set/);
  });

  test("no group actions are taken if no group options are set", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions: {
        table: recordsDestinationTableName,
        primaryKey: "EMAIL",
      },
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);

    const groups = await getGroups(email1);
    expect(groups.length).toBe(0); // no group added
  });

  test("can add to and create lists", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);

    const groups = await getGroups(email1);
    expect(groups.length).toBe(1);
    expect(groups).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
      ])
    );
  });

  test("can add multiple records to lists", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Pete",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Sally",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    const groups1 = await getGroups(email1);
    expect(groups1.length).toBe(2);
    expect(groups1).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list2,
        }),
      ])
    );

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    expect(user2["FIRST_NAME"]).toBe("Sally");
    const groups2 = await getGroups(email2);
    expect(groups2.length).toBe(1);
    expect(groups2).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
      ])
    );
  });

  test("can remove records from lists including ones they aren't in", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Sally",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Sally",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);

    const groups1 = await getGroups(email1);
    expect(groups1.length).toBe(1);
    expect(groups1).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
      ])
    );

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    expect(user2["FIRST_NAME"]).toBe("Sally");

    const groups2 = await getGroups(email2);
    expect(groups2.length).toBe(1);
    expect(groups2).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
      ])
    );
  });

  test("can change the email address", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: newEmail1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Test",
          },
          oldGroups: [list1],
          newGroups: [list1, list2],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Sally",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Evan",
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

    const oldUser = await getRecordByPrimaryKey(
      destinationOptions.primaryKey,
      email1
    );
    expect(oldUser).not.toBeTruthy();

    user1 = await getRecordByPrimaryKey(
      destinationOptions.primaryKey,
      newEmail1
    );
    expect(user1).toBeTruthy();
    expect(user1[destinationOptions.primaryKey]).toBe(newEmail1);
    expect(user1["FIRST_NAME"]).toBe("John");
    expect(user1["LAST_NAME"]).toBe("Test");
    const groups1 = await getGroups(newEmail1);
    expect(groups1.length).toBe(2);
    expect(groups1).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list2,
        }),
      ])
    );
    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    const groups2 = await getGroups(email2);
    expect(groups2.length).toBe(0);
  });

  test("will not delete records if sync mode does not allow it, but will remove groups", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.additive.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: newEmail1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Test",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: newEmail1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Test2", // changed here
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

    user1 = await getRecordByPrimaryKey(
      destinationOptions.primaryKey,
      newEmail1
    );
    expect(user1).toBeTruthy();
    expect(user1[destinationOptions.primaryKey]).toBe(newEmail1);
    expect(user1["FIRST_NAME"]).toBe("John");
    expect(user1["LAST_NAME"]).toBe("Test"); // no changes
    const groups1 = await getGroups(newEmail1);
    expect(groups1.length).toBe(0); // no groups
  });

  test("can delete a record", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: newEmail1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Test",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Test",
          },
          oldGroups: [list1, list2],
          newGroups: [list1],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Evan",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Evan",
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

    const oldUser = await getRecordByPrimaryKey(
      destinationOptions.primaryKey,
      newEmail1
    );
    expect(oldUser).not.toBeTruthy();

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    expect(user1["FIRST_NAME"]).toBe("John");
    expect(user1["LAST_NAME"]).toBe("Test");

    const groups = await getGroups(email1);
    expect(groups.length).toBe(1); // no groups
    expect(groups).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          [destinationOptions.groupColumnName]: list1,
        }),
      ])
    );

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2).not.toBeTruthy();
  });

  test("can add back a record and many types", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {},
          newRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Evan",
            LAST_NAME: "Claus",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
      ],
    });

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    expect(user2["FIRST_NAME"]).toBe("Evan");
    expect(user2["LAST_NAME"]).toBe("Claus");
  });

  test("can handle required field error (email)", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id2,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Maria",
          },
          newRecordProperties: {
            FIRST_NAME: "Maria",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: 3039,
          oldRecordProperties: {},
          newRecordProperties: {
            ID: 3039,
            FIRST_NAME: "Ron",
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
    expect(error2.recordId).toEqual(3039);
    expect(error2.message).toContain("required");

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    expect(user2["FIRST_NAME"]).toBe("Evan");
    expect(user2["LAST_NAME"]).toBe("Claus");
  });

  test("can handle some of them working, but not others", async () => {
    user3 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email3);
    expect(user3).not.toBeTruthy();

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.sync.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "John",
            LAST_NAME: "Test",
          },
          newRecordProperties: {
            [destinationOptions.primaryKey]: email1,
            ID: id1,
            FIRST_NAME: "Sam",
            LAST_NAME: "Test",
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
          record: null,
        },
        {
          recordId: id2,
          oldRecordProperties: {
            [destinationOptions.primaryKey]: email2,
            ID: id2,
            FIRST_NAME: "Evan",
            LAST_NAME: "Claus",
          },
          newRecordProperties: {
            ID: id2,
            FIRST_NAME: "William",
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
            [destinationOptions.primaryKey]: email3,
            ID: id3,
            FIRST_NAME: "Liz",
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

    user1 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email1);
    expect(user1[destinationOptions.primaryKey]).toBe(email1);
    expect(user1["FIRST_NAME"]).toBe("Sam"); // updated
    expect(user1["LAST_NAME"]).toEqual("Test");

    user2 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email2);
    expect(user2[destinationOptions.primaryKey]).toBe(email2);
    expect(user2["FIRST_NAME"]).toBe("Evan");
    expect(user2["LAST_NAME"]).toBe("Claus"); // not updated

    user3 = await getRecordByPrimaryKey(destinationOptions.primaryKey, email3);
    expect(user3[destinationOptions.primaryKey]).toBe(email3);
    expect(user3["FIRST_NAME"]).toBe("Liz");
  });

  test("can handle batches with lots of records", async () => {
    // generate records
    const records = generateLongRecords(2);

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

    const primaryKeys = records.map((p) => p[destinationOptions.primaryKey]);

    let exportedRecords = await getRecordByPrimaryKeys(
      destinationOptions.primaryKey,
      primaryKeys
    );

    // verify all were created properly
    for (const record of records) {
      const user = getRecord(
        exportedRecords,
        record[destinationOptions.primaryKey]
      );
      expect(user).toBeTruthy();
      expect(user[destinationOptions.primaryKey]).toBe(
        record[destinationOptions.primaryKey]
      );
      expect(user["FIRST_NAME"]).toBe(record["FIRST_NAME"]);
      expect(user["LAST_NAME"]).toBe(record["LAST_NAME"]);
    }
  });
});
