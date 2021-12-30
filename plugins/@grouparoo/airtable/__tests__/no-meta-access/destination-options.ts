import "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import * as utils from "../utils/shared";
import { destinationOptions as methodToTest } from "../../src/lib/destination/destinationOptions";

helper.useNock(__filename, getUpdater("BASIC"));
const appOptions = loadAppOptions("BASIC");
const tableData = loadTableData("BASIC");
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

describe("BASIC Destination Options Tests", () => {
  beforeAll(async () => {
    connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
    await utils.cleanUp(connection, tableData.emptyId, false);
  });

  describe("Table with Data", () => {
    const { allName: tableName, allPrimaryKey: primaryKey } = tableData;

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: "",
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({ type: "pending", options: [] });
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: tableName,
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({
        type: "typeahead",
        options: [
          "f_autoNumber",
          "f_checkbox",
          "f_count",
          "f_createdTime",
          "f_currency",
          "f_date",
          "f_dateTime",
          "f_duration",
          "f_email",
          "f_formula",
          "f_lastModifiedTime",
          "f_multilineText",
          "f_multipleLookupValues",
          "f_multipleRecordLinks",
          "f_multipleSelects",
          "f_number",
          "f_percent",
          "f_phoneNumber",
          "f_rating",
          "f_richText",
          "f_rollup",
          "f_singleLineText",
          "f_singleSelect",
          "f_url",
          "Name",
        ],
      });
    });
  });

  describe("Empty table", () => {
    const { emptyName: tableName } = tableData;

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: "",
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({ type: "pending", options: [] });
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        table: tableName,
      });
      const table = result.table;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({ type: "text" }); // can't figure it out!
    });
  });
});
