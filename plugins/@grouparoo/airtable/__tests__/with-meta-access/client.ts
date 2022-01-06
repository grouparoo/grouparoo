import { Client } from "../../src/lib/client/client";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import * as utils from "../utils/shared";
import { AirtableAppOptions } from "../../src/lib/appOptions";
import { IClient } from "../../src/lib/client/interfaces/iClient";

helper.useNock(__filename, getUpdater("META"));
const appOptions = loadAppOptions("META");
const tableData = loadTableData("META");
const airtableOptions = new AirtableAppOptions(appOptions);

// uses the defualt data from the tables (see .env.example)

const unknownKeys = ["Unknown", "Other"];

describe("META Client Functions", () => {
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
      expect(response.access).toEqual(true);
    });

    test("List Tables", async () => {
      const client = new Client(airtableOptions);
      const response = await client.listTables();
      expect(response.length).toBeGreaterThanOrEqual(3);
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
      expect(table.idOrName).toEqual(tableId);
    });

    test("Get Table by id", async () => {
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      expect(table.fields).toEqual([
        { name: "f_autoNumber", type: "autoNumber" },
        { name: "f_barcode", type: "barcode" },
        { name: "f_button", type: "button" },
        { name: "f_checkbox", type: "checkbox" },
        { name: "f_count", type: "count" },
        { name: "f_createdBy", type: "createdBy" },
        { name: "f_createdTime", type: "createdTime" },
        { name: "f_currency", type: "currency" },
        { name: "f_date", type: "date" },
        { name: "f_dateTime", type: "dateTime" },
        { name: "f_duration", type: "duration" },
        { name: "f_email", type: "email" },
        { name: "f_formula", type: "formula" },
        { name: "f_lastModifiedBy", type: "lastModifiedBy" },
        { name: "f_lastModifiedTime", type: "lastModifiedTime" },
        { name: "f_multilineText", type: "multilineText" },
        { name: "f_multipleAttachments", type: "multipleAttachments" },
        { name: "f_multipleCollaborators", type: "multipleCollaborators" },
        { name: "f_multipleLookupValues", type: "multipleLookupValues" },
        { name: "f_multipleRecordLinks", type: "multipleRecordLinks" },
        { name: "f_multipleSelects", type: "multipleSelects" },
        { name: "f_number", type: "number" },
        { name: "f_percent", type: "percent" },
        { name: "f_phoneNumber", type: "phoneNumber" },
        { name: "f_rating", type: "rating" },
        { name: "f_richText", type: "richText" },
        { name: "f_rollup", type: "rollup" },
        { name: "f_singleCollaborator", type: "singleCollaborator" },
        { name: "f_singleLineText", type: "singleLineText" },
        { name: "f_singleSelect", type: "singleSelect" },
        { name: "f_url", type: "url" },
        { name: "Name", type: "singleLineText" },
      ]);
    });

    test("Successful List Records", async () => {
      const records = await client.listRecords(tableId);
      expect(records.length).toBeGreaterThan(0);
    });

    test("Successful List Records by ID", async () => {
      const records = await client.listRecordsByField(
        tableId,
        primaryKey,
        knownKeys.concat(unknownKeys)
      );
      expect(records.length).toEqual(knownKeys.length);
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
      expect(table.idOrName).toEqual(tableId);
    });

    test("Get Table by id", async () => {
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      expect(table.fields).toEqual([
        { name: "f_autoNumber", type: "autoNumber" },
        { name: "f_barcode", type: "barcode" },
        { name: "f_button", type: "button" },
        { name: "f_checkbox", type: "checkbox" },
        { name: "f_count", type: "count" },
        { name: "f_createdBy", type: "createdBy" },
        { name: "f_createdTime", type: "createdTime" },
        { name: "f_currency", type: "currency" },
        { name: "f_date", type: "date" },
        { name: "f_dateTime", type: "dateTime" },
        { name: "f_duration", type: "duration" },
        { name: "f_email", type: "email" },
        { name: "f_formula", type: "formula" },
        { name: "f_lastModifiedBy", type: "lastModifiedBy" },
        { name: "f_lastModifiedTime", type: "lastModifiedTime" },
        { name: "f_multilineText", type: "multilineText" },
        { name: "f_multipleAttachments", type: "multipleAttachments" },
        { name: "f_multipleCollaborators", type: "multipleCollaborators" },
        { name: "f_multipleLookupValues", type: "multipleLookupValues" },
        { name: "f_multipleRecordLinks", type: "multipleRecordLinks" },
        { name: "f_multipleSelects", type: "multipleSelects" },
        { name: "f_number", type: "number" },
        { name: "f_percent", type: "percent" },
        { name: "f_phoneNumber", type: "phoneNumber" },
        { name: "f_rating", type: "rating" },
        { name: "f_richText", type: "richText" },
        { name: "f_rollup", type: "rollup" },
        { name: "f_singleCollaborator", type: "singleCollaborator" },
        { name: "f_singleLineText", type: "singleLineText" },
        { name: "f_singleSelect", type: "singleSelect" },
        { name: "f_url", type: "url" },
        { name: "Name", type: "singleLineText" },
      ]);
    });

    test("Successful List Records", async () => {
      const records = await client.listRecords(tableId);
      expect(records.length).toBe(0);
    });

    test("Successful List Records by ID", async () => {
      const records = await client.listRecordsByField(
        tableId,
        primaryKey,
        knownKeys.concat(unknownKeys)
      );
      expect(records.length).toEqual(0);
    });
  });
});
