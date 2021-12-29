import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/destination/exportRecords";
import { loadAppOptions, updater, loadTableData } from "../utils/nockHelper";
import * as utils from "../utils/shared";
import { connect } from "../../src/lib/connect";
import { IClient } from "../../src/lib/client/interfaces/iClient";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const { emptyId: tableId, emptyName: tableName } = loadTableData(newNock);
const destinationOptions = { tableId: tableName, primaryKey: "Name" };

let client: IClient;

const name1 = "Jane";
const id1 = "rec1";
let record1 = null;
const change1 = "changed Name";

const name2 = "John Doe";
const id2 = "rec2";
let record2 = null;

const name3 = "Someone";
const id3 = "rec3";
let record3 = null;

async function getRecordByName(name) {
  return utils.getRecordByName(client, tableId, name);
}

async function getRecordById(recId) {
  return utils.getRecordById(client, tableId, recId);
}

async function exportRecords(
  exports,
  syncOperations = DestinationSyncModeData.sync.operations
) {
  return exportBatch({
    appOptions,
    connection: client,
    destinationOptions,
    syncOperations,
    exports,
  });
}

describe("airtable/exportRecords", () => {
  beforeAll(async () => {
    client = await connect({ app: null, appId: null, appOptions });
    await utils.cleanUp(client, tableId, false);
  });

  afterAll(async () => {
    await utils.cleanUp(client, tableId, true);
  });

  test("will not create record if sync mode does not allow it", async () => {
    record1 = await getRecordByName(name1);
    expect(record1).toBe(null);

    const { success, errors } = await exportRecords(
      [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: { Name: name1 },
          toDelete: false,
        },
      ],
      DestinationSyncModeData.enrich.operations
    );

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    record1 = await getRecordByName(name1);
    expect(record1).toBe(null);
  });

  test("can create record", async () => {
    record1 = await getRecordByName(name1);
    expect(record1).toBe(null);

    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: {},
        newRecordProperties: { Name: name1, f_singleLineText: "here" },
        toDelete: false,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    record1 = await getRecordByName(name1);
    expect(record1).not.toBe(null);
    let fields = record1.fields;
    expect(fields.Name).toEqual(name1);
    expect(fields.f_singleLineText).toEqual("here");
    expect(fields.f_number).toEqual(undefined);
  });

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportRecords(
      [
        {
          recordId: id1,
          oldRecordProperties: { Name: name1, f_singleLineText: "here" },
          newRecordProperties: {
            Name: name1,
            f_singleLineText: "new", // updated!
            f_number: 6, // added!
          },
          toDelete: false,
        },
      ],
      { create: true, update: false, delete: true }
    );

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not updating");
    expect(error.errorLevel).toEqual("info");

    record1 = await getRecordByName(name1);
    expect(record1).not.toBe(null);
    let fields = record1.fields;
    expect(fields.Name).toEqual(name1);
    expect(fields.f_singleLineText).toEqual("here"); //same
    expect(fields.f_number).toEqual(undefined); // same
  });

  test("can add/edit record variables and do multiple records", async () => {
    record2 = await getRecordByName(name2);
    expect(record2).toBe(null);

    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: { Name: name1, f_singleLineText: "here" },
        newRecordProperties: {
          Name: name1,
          f_singleLineText: "updated",
          f_number: 5.7,
        },
        toDelete: false,
      },
      {
        recordId: id2,
        oldRecordProperties: {},
        newRecordProperties: {
          Name: name2,
          f_singleLineText: "two",
          f_number: 6,
        },
        toDelete: false,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let fields;
    record1 = await getRecordById(record1.id);
    expect(record1).not.toBe(null);
    fields = record1.fields;
    expect(fields.Name).toEqual(name1);
    expect(fields.f_singleLineText).toEqual("updated");
    expect(fields.f_number).toEqual(5.7);

    record2 = await getRecordByName(name2);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);
    expect(fields.f_singleLineText).toEqual("two");
    expect(fields.f_number).toEqual(6);
  });

  test("can clear user variables", async () => {
    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: {
          Name: name1,
          f_singleLineText: "updated",
          f_number: 5.7,
        },
        newRecordProperties: { Name: name1 },
        toDelete: false,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let fields;
    record1 = await getRecordById(record1.id);
    expect(record1).not.toBe(null);
    fields = record1.fields;
    expect(fields.Name).toEqual(name1);
    expect(fields.f_singleLineText).toEqual(undefined);
    expect(fields.f_number).toEqual(undefined);
  });

  test("can change the primary key", async () => {
    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: { Name: name1 },
        newRecordProperties: {
          Name: change1,
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
        toDelete: false,
      },
      {
        recordId: id2,
        oldRecordProperties: {
          Name: name2,
          f_singleLineText: "two",
        },
        newRecordProperties: {
          Name: name2,
          f_singleLineText: "2",
          f_rating: 4,
        },
        toDelete: false,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let fields;
    record1 = await getRecordById(record1.id);
    expect(record1).not.toBe(null);
    fields = record1.fields;
    expect(fields.Name).toEqual(change1);
    expect(fields.f_singleLineText).toEqual("testing");
    expect(fields.f_email).toEqual("who@example.com");

    record2 = await getRecordById(record2.id);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);
    expect(fields.f_singleLineText).toEqual("2");
    expect(fields.f_number).toEqual(6); // not set or unset
    expect(fields.f_rating).toEqual(4);
  });

  test("will not delete records if sync mode does not allow it", async () => {
    const { success, errors } = await exportRecords(
      [
        {
          recordId: id1,
          oldRecordProperties: {
            Name: change1,
            f_singleLineText: "testing",
            f_email: "who@example.com",
          },
          newRecordProperties: {
            Name: change1,
            f_singleLineText: "testing",
            f_email: "diff@example.com", // change
          },
          toDelete: true,
        },
      ],
      DestinationSyncModeData.additive.operations
    );

    expect(errors).not.toBeNull();
    expect(success).toBe(false);

    let fields;
    record1 = await getRecordById(record1.id);
    expect(record1).not.toBe(null);
    fields = record1.fields;
    expect(fields.Name).toEqual(change1);
    expect(fields.f_singleLineText).toEqual("testing");
    expect(fields.f_email).toEqual("who@example.com"); // no changes
  });

  test("can delete a record", async () => {
    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: {
          Name: change1,
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
        newRecordProperties: {
          Name: change1,
          f_singleLineText: "testing",
          f_email: "diff@example.com", // change
        },
        toDelete: true,
      },
      {
        recordId: id2,
        oldRecordProperties: {
          Name: name2, // should use this
          f_singleLineText: "2",
          f_rating: 4,
        },
        newRecordProperties: {
          Name: "something else altogether",
          f_singleLineText: "3",
          f_rating: 4,
        },
        toDelete: true,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    record1 = await getRecordById(record1.id);
    record2 = await getRecordById(record2.id);

    expect(record1).toBeNull();
    expect(record2).toBeNull();

    const records = await client.listRecords(tableId);
    expect(records.length).toEqual(0);
  });

  test("can add back a user and many fields", async () => {
    record2 = await getRecordByName(name2);
    expect(record2).toBe(null);

    const { success, errors } = await exportRecords([
      {
        recordId: id2,
        oldRecordProperties: {},
        newRecordProperties: {
          Name: name2,
          f_checkbox: true,
          f_currency: 20.34,
          f_date: "2021-12-26",
          f_dateTime: Date.parse("2021-12-26 12:00:00 UTC"),
          f_duration: 4890,
          f_email: "me@example.com",
          f_multilineText: "i know\nlines",
          f_multipleSelects: ["Red", "Green"],
          f_number: 7.1,
          f_percent: 33.3,
          f_phoneNumber: "617 555-1234",
          f_rating: 1,
          f_richText: "#header\n* bullet",
          f_singleLineText: "finally, a regular field",
          f_singleSelect: "Blue",
          f_url: "https://www.google.com",
        },
        toDelete: false,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let fields;
    record2 = await getRecordByName(name2);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);
    expect(fields.Name).toEqual("John Doe");
    expect(fields.f_checkbox).toEqual(true);
    expect(fields.f_currency).toEqual(20.34);
    expect(fields.f_date).toEqual("2021-12-26");
    expect(fields.f_dateTime).toEqual("2021-12-26T12:00:00.000Z");
    expect(fields.f_duration).toEqual(4890);
    expect(fields.f_email).toEqual("me@example.com");
    expect(fields.f_multilineText).toEqual("i know\nlines");
    expect(fields.f_multipleSelects).toEqual(["Red", "Green"]);
    expect(fields.f_number).toEqual(7.1);
    expect(fields.f_percent).toEqual(33.3);
    expect(fields.f_phoneNumber).toEqual("617 555-1234");
    expect(fields.f_rating).toEqual(1);
    expect(fields.f_richText).toEqual("#header\n- bullet\n");
    expect(fields.f_singleLineText).toEqual("finally, a regular field");
    expect(fields.f_singleSelect).toEqual("Blue");
    expect(fields.f_url).toEqual("https://www.google.com");
  });

  test("can set all those fields to undefined", async () => {
    const { success, errors } = await exportRecords([
      {
        recordId: id2,
        oldRecordProperties: {
          Name: name2,
          f_checkbox: true,
          f_currency: 20.34,
          f_date: "2021-12-26",
          f_dateTime: Date.parse("2021-12-26 12:00:00 UTC"),
          f_duration: 4890,
          f_email: "me@example.com",
          f_multilineText: "i know\nlines",
          f_multipleSelects: ["Red", "Green"],
          f_number: 7.1,
          f_percent: 33.3,
          f_phoneNumber: "617 555-1234",
          f_rating: 1,
          f_richText: "#header\n* bullet",
          f_singleLineText: "finally, a regular field",
          f_singleSelect: "Blue",
          f_url: "https://www.google.com",
        },
        newRecordProperties: { Name: name2 },
        toDelete: false,
      },
    ]);

    expect(success).toBe(true);
    expect(errors).toBeNull();

    let fields;
    record2 = await getRecordById(record2.id);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);
    expect(fields.f_checkbox).toEqual(undefined);
    expect(fields.f_currency).toEqual(undefined);
    expect(fields.f_date).toEqual(undefined);
    expect(fields.f_dateTime).toEqual(undefined);
    expect(fields.f_duration).toEqual(undefined);
    expect(fields.f_email).toEqual(undefined);
    expect(fields.f_multilineText).toEqual(undefined);
    expect(fields.f_multipleSelects).toEqual(undefined);
    expect(fields.f_number).toEqual(undefined);
    expect(fields.f_percent).toEqual(undefined);
    expect(fields.f_phoneNumber).toEqual(undefined);
    expect(fields.f_rating).toEqual(undefined);
    expect(fields.f_richText).toEqual("\n"); // for some reason
    expect(fields.f_singleLineText).toEqual(undefined);
    expect(fields.f_singleSelect).toEqual(undefined);
    expect(fields.f_url).toEqual(undefined);
  });

  test("can handle required field error (email)", async () => {
    const { success, errors } = await exportRecords([
      {
        recordId: id2,
        oldRecordProperties: { Name: name2 },
        newRecordProperties: {
          f_singleLineText: "Missing name",
        },
        toDelete: false,
      },
      {
        recordId: "newId",
        oldRecordProperties: {},
        newRecordProperties: {
          f_singleLineText: "New no name",
        },
        toDelete: false,
      },
    ]);

    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(2);

    const error = errors[0];
    expect(error.recordId).toEqual(id2);
    expect(error.message).toContain("required");

    const error2 = errors[1];
    expect(error2.recordId).toEqual("newId");
    expect(error2.message).toContain("required");

    // still there
    let fields;
    record2 = await getRecordById(record2.id);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);
  });

  test("can handle some of them working, but not others", async () => {
    record3 = await getRecordByName(name3);
    expect(record3).toBe(null);

    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: {},
        newRecordProperties: {
          Name: name1,
        },
        toDelete: false,
      },
      {
        recordId: id2,
        oldRecordProperties: {
          Name: name2,
        },
        newRecordProperties: {
          f_singleLineText: "Missing name",
        },
        toDelete: false,
      },
      {
        recordId: id3,
        oldRecordProperties: {},
        newRecordProperties: {
          Name: name3,
          f_autoNumber: 40,
        },
        toDelete: false,
      },
    ]);

    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(2);

    let error;
    error = errors.find((e) => e.recordId === id2);
    expect(error.message).toContain("required");
    error = errors.find((e) => e.recordId === id3);
    expect(error.message).toContain("field is computed");

    let fields;

    record1 = await getRecordByName(name1);
    expect(record1).not.toBe(null);
    fields = record1.fields;
    expect(fields.Name).toEqual(name1);

    record2 = await getRecordById(record2.id);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);

    record3 = await getRecordByName(name3);
    expect(record3).toBe(null);
  });

  test("can handle some invalid fields, but not others", async () => {
    const { success, errors } = await exportRecords([
      {
        recordId: id1,
        oldRecordProperties: {
          Name: name1,
        },
        newRecordProperties: {
          Name: name1,
          f_number: 1,
        },
        toDelete: false,
      },
      {
        recordId: id2,
        oldRecordProperties: {
          Name: name2,
        },
        newRecordProperties: {
          Name: name2,
          f_number: 2,
          f_autoNumber: 40,
        },
        toDelete: false,
      },
      {
        recordId: id3,
        oldRecordProperties: {},
        newRecordProperties: {
          Name: name3,
          f_number: 3,
        },
        toDelete: false,
      },
    ]);

    expect(success).toBe(false);
    expect(errors).not.toBeNull();
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id2);
    expect(error.message).toContain("field is computed");

    let fields;

    record1 = await getRecordById(record1.id);
    expect(record1).not.toBe(null);
    fields = record1.fields;
    expect(fields.Name).toEqual(name1);
    expect(fields.f_number).toEqual(1);

    record2 = await getRecordById(record2.id);
    fields = record2.fields;
    expect(fields.Name).toEqual(name2);
    expect(fields.f_number).toEqual(undefined);

    record3 = await getRecordByName(name3);
    expect(record3).not.toBe(null);
    fields = record3.fields;
    expect(fields.Name).toEqual(name3);
    expect(fields.f_number).toEqual(3);
  });
});
