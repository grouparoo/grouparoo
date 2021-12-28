import { Client } from "../../src/lib/client/client";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, loadTableData, updater } from "../util/nockHelper";
import { AirtableAppOptions } from "../../src/lib/appOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const tableData = loadTableData(newNock);
const airtableOptions = new AirtableAppOptions(appOptions);

// uses the defualt data from the Marketing tables (see .env.example)

const primaryKey = "Campaign";
const keyValues = ["Branded keywords", "Lookalikes"];

// tblEPDCwyMJU8ok0q

describe("Client Functions", () => {
  describe("Metadata Calls", () => {
    test("Successful Health", async () => {
      const client = new Client(airtableOptions);
      const response = await client.health();
      expect(response.success).toEqual(true);
    });

    test("Unauthorized Health Response", async () => {
      const client = new Client(
        Object.assign({}, airtableOptions, { apiKey: "badkey" })
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

      // TODO: Meta
      // const client = new Client(airtableOptions);
      // const response = await client.listTables();
      // expect(response.length).toEqual(1);
      // expect(response[0].id).toEqual("tbltp8DGLhqbUmjK1");
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

  describe("Campaign Table", () => {
    const { campaignsId: tableId, campaignsName: tableName } = tableData;

    test("Get Table by name", async () => {
      const client = new Client(airtableOptions);
      const table = await client.getTable(tableName);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableName);

      // TODO META: expect(response.idOrName).toEqual(tableId);
    });

    test("Get Table by id", async () => {
      const client = new Client(airtableOptions);
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      const string = table.fields.find((f) => f.name === "Status");
      expect(string.type).toEqual("singleLineText");

      const date = table.fields.find((f) => f.name === "Start date");
      expect(date.type).toEqual("singleLineText"); // TODO: Meta is smarter

      const ref = table.fields.find((f) => f.name === "💼 Ad sets");
      expect(ref.type).toEqual("multipleSelects"); // TODO: Meta is smarter?

      const lookup = table.fields.find(
        (f) => f.name === "📈 Results (from 📈 Results table)"
      );
      expect(lookup.type).toEqual("multipleSelects"); // TODO: Meta is smarter?
    });

    test("Successful List Records", async () => {
      const client = new Client(airtableOptions);
      const records = await client.listRecords(tableId);
      expect(records.length).toBeGreaterThan(0);
    });

    test("Successful List Records by ID", async () => {
      const client = new Client(airtableOptions);
      const records = await client.listRecordsByField(
        tableId,
        primaryKey,
        keyValues
      );
      expect(records.length).toEqual(keyValues.length);
    });
  });

  describe("Results Table", () => {
    const { resultsId: tableId, resultsName: tableName } = tableData;

    test("Get Table by name", async () => {
      const client = new Client(airtableOptions);
      const table = await client.getTable(tableName);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableName);
      // TODO META: expect(response.idOrName).toEqual(tableId);
    });

    test("Get Table by id", async () => {
      const client = new Client(airtableOptions);
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      const number = table.fields.find((f) => f.name === "Impressions");
      expect(number.type).toEqual("number");

      const currency = table.fields.find((f) => f.name === "Spend");
      expect(currency.type).toEqual("number"); // TODO: Meta is smarter
    });

    test("Successful List Records", async () => {
      const client = new Client(airtableOptions);
      const records = await client.listRecords(tableId);
      expect(records.length).toBeGreaterThan(0);
    });
  });

  describe("Empty Table", () => {
    const { emptyId: tableId, emptyName: tableName } = tableData;

    test("Get Table by name", async () => {
      const client = new Client(airtableOptions);
      const table = await client.getTable(tableName);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableName);
      // TODO META: expect(response.idOrName).toEqual(tableId);
    });

    test("Get Table by id", async () => {
      const client = new Client(airtableOptions);
      const table = await client.getTable(tableId);
      expect(table).not.toBeNull();
      expect(table.idOrName).toEqual(tableId);

      // It doesn't know anything because there are no rows

      expect(table.fields.length).toBe(0);
      // META: expect(table.fields.length).toBe(4);

      const string = table.fields.find((f) => f.name === "Name");
      expect(string).toBeUndefined();
      // META: expect(string.type).toEqual("singleLineText");

      const select = table.fields.find((f) => f.name === "Status");
      expect(select).toBeUndefined();
      // META:  expect(select.type).toEqual("singleSelect");

      const lines = table.fields.find((f) => f.name === "Notes");
      expect(lines).toBeUndefined();
      // META: expect(lines.type).toEqual("multiLineText");
    });

    test("Successful List Records", async () => {
      const client = new Client(airtableOptions);
      const records = await client.listRecords(tableId);
      expect(records.length).toBe(0);
    });
  });
});
