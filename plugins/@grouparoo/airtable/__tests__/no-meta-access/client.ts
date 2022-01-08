import { Client } from "../../src/lib/client/client";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import * as utils from "../utils/shared";
import { AirtableAppOptions } from "../../src/lib/appOptions";
import { IClient } from "../../src/lib/client/interfaces/iClient";

helper.useNock(__filename, getUpdater("BASIC"));
const appOptions = loadAppOptions("BASIC");
const tableData = loadTableData("BASIC");
const airtableOptions = new AirtableAppOptions(appOptions);

// uses the defualt data from the tables (see .env.example)

describe("BASIC Client Functions", () => {
  describe("Metadata Calls", () => {
    test("Successful Health", async () => {
      const client = new Client(airtableOptions);
      const response = await client.health();
      expect(response.success).toEqual(true);
    });

    test("Unauthorized Health Response", async () => {
      const client = new Client(
        Object.assign({}, airtableOptions, { apiKey: "keyBad" })
      );

      const response = await client.health();
      expect(response.success).toEqual(false);
    });

    test("Meta", async () => {
      const client = new Client(airtableOptions);
      const response = await client.checkMeta();
      expect(response.access).toEqual(false);
    });

    test("List Tables", async () => {
      const client = new Client(airtableOptions);
      await expect(client.listTables()).rejects.toThrow(
        /Request failed with status code 404/
      );
    });

    test("Unknown Table", async () => {
      const client = new Client(airtableOptions);

      try {
        await client.getTable("Unknown Table");
        expect("should not get here").toBe(true);
      } catch (err) {
        expect(err.message).toContain("Could not find table");
      }
    });
  });

  describe("Table with Data", () => {
    let client: IClient;
    const {
      allId: tableId,
      allName: tableName,
      allPrimaryKey: primaryKey,
      allKnownKeys: knownKeys,
    } = tableData;

    beforeAll(async () => {
      client = new Client(airtableOptions);
    });

    test("Get Table by name", async () => {
      const table = await client.getTable(tableName);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableName);
    });

    test("Get Table by id", async () => {
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      expect(table.fields).toEqual([
        { name: "f_autoNumber", type: "number" },
        { name: "f_barcode", type: "barcode" },
        { name: "f_button", type: "button" },
        { name: "f_checkbox", type: "checkbox" },
        { name: "f_count", type: "number" },
        { name: "f_createdBy", type: "singleCollaborator" },
        { name: "f_createdTime", type: "singleLineText" },
        { name: "f_currency", type: "number" },
        { name: "f_date", type: "singleLineText" },
        { name: "f_dateTime", type: "singleLineText" },
        { name: "f_duration", type: "number" },
        { name: "f_email", type: "singleLineText" },
        { name: "f_formula", type: "singleLineText" },
        { name: "f_lastModifiedBy", type: "singleCollaborator" },
        { name: "f_lastModifiedTime", type: "singleLineText" },
        { name: "f_multilineText", type: "singleLineText" },
        { name: "f_multipleAttachments", type: "multipleAttachments" },
        { name: "f_multipleCollaborators", type: "multipleCollaborators" },
        { name: "f_multipleLookupValues", type: "multipleSelects" },
        { name: "f_multipleRecordLinks", type: "multipleSelects" },
        { name: "f_multipleSelects", type: "multipleSelects" },
        { name: "f_number", type: "number" },
        { name: "f_percent", type: "number" },
        { name: "f_phoneNumber", type: "singleLineText" },
        { name: "f_rating", type: "number" },
        { name: "f_richText", type: "singleLineText" },
        { name: "f_rollup", type: "number" },
        { name: "f_singleCollaborator", type: "singleCollaborator" },
        { name: "f_singleLineText", type: "singleLineText" },
        { name: "f_singleSelect", type: "singleLineText" },
        { name: "f_url", type: "singleLineText" },
        { name: "Name", type: "singleLineText" },
      ]);
    });

    test("Successful List Records", async () => {
      const records = await client.listRecords(tableId);
      expect(records.length).toBeGreaterThan(0);
    });

    test("Successful Find Record by key", async () => {
      const record = await client.getRecordByKey(
        tableId,
        primaryKey,
        knownKeys[1]
      );
      expect(record.fields[primaryKey]).toEqual(knownKeys[1]);
    });

    test("Not Find Record by key", async () => {
      const record = await client.getRecordByKey(tableId, primaryKey, "junkId");
      expect(record).toBeNull();
    });
  });

  describe("Empty Table", () => {
    let client: IClient;
    const {
      emptyId: tableId,
      emptyName: tableName,
      emptyPrimaryKey: primaryKey,
      emptyKnownKeys: knownKeys,
    } = tableData;

    beforeAll(async () => {
      client = new Client(airtableOptions);
      await utils.cleanUp(client, tableId, false);
    });

    test("Get Table by name", async () => {
      const table = await client.getTable(tableName);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableName);
    });

    test("Get Table by id", async () => {
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      expect(table.fields.length).toBe(0);

      const string = table.fields.find((f) => f.name === primaryKey);
      expect(string).toBeUndefined();

      const select = table.fields.find((f) => f.name === "f_number");
      expect(select).toBeUndefined();
    });

    test("Successful List Records", async () => {
      const records = await client.listRecords(tableId);
      expect(records.length).toBe(0);
    });

    test("Not Find Record by key", async () => {
      const record = await client.getRecordByKey(tableId, primaryKey, "junkId");
      expect(record).toBeNull();
    });
  });
});
