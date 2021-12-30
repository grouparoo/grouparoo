import "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import * as utils from "../utils/shared";
import { destinationOptions as methodToTest } from "../../src/lib/destination/destinationOptions";

helper.useNock(__filename, getUpdater("META"));
const appOptions = loadAppOptions("META");
const tableData = loadTableData("META");
let connection;

async function runDestinationOptions(destinationOptions) {
  return methodToTest({
    appId: null,
    appOptions: null,
    app: null,
    connection,
    destinationOptions,
  });
}

describe("META Destination Options Tests", () => {
  beforeAll(async () => {
    connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
    await utils.cleanUp(connection, tableData.emptyId, false);
  });

  describe("Table with Data", () => {
    // TODO: Meta uses ID
    const { allId: tableId, allPrimaryKey: primaryKey } = tableData;

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: "",
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table.type).toEqual("list");
      const all = table.descriptions.indexOf("All");
      const empty = table.descriptions.indexOf("Empty");
      expect(table.options[all]).toEqual(tableData.allId);
      expect(table.options[empty]).toEqual(tableData.emptyId);

      expect(key).toEqual({ type: "pending", options: [] });
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: tableId,
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table.type).toEqual("list");

      expect(key).toEqual({
        type: "typeahead",
        options: [
          "Name",
          "f_checkbox",
          "f_currency",
          "f_date",
          "f_dateTime",
          "f_duration",
          "f_email",
          "f_multilineText",
          "f_multipleRecordLinks",
          "f_multipleSelects",
          "f_number",
          "f_percent",
          "f_phoneNumber",
          "f_rating",
          "f_richText",
          "f_singleLineText",
          "f_singleSelect",
          "f_url",
        ],
      });
    });
  });

  describe("Empty table", () => {
    const { emptyId: tableId } = tableData;

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: "",
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table.type).toEqual("list");
      const all = table.descriptions.indexOf("All");
      const empty = table.descriptions.indexOf("Empty");
      expect(table.options[all]).toEqual(tableData.allId);
      expect(table.options[empty]).toEqual(tableData.emptyId);

      expect(key).toEqual({ type: "pending", options: [] });
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: tableId,
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table.type).toEqual("list");

      expect(key).toEqual({
        type: "typeahead",
        options: [
          "Name",
          "f_checkbox",
          "f_currency",
          "f_date",
          "f_dateTime",
          "f_duration",
          "f_email",
          "f_multilineText",
          "f_multipleRecordLinks",
          "f_multipleSelects",
          "f_number",
          "f_percent",
          "f_phoneNumber",
          "f_rating",
          "f_richText",
          "f_singleLineText",
          "f_singleSelect",
          "f_url",
        ],
      });
    });
  });
});
