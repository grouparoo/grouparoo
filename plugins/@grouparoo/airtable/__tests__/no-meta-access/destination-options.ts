import "@grouparoo/spec-helper";
import { loadAppOptions, updater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { destinationOptions as methodToTest } from "../../src/lib/destination/destinationOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const tableData = loadTableData(newNock);
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

describe("Destination Options Tests", () => {
  beforeAll(async () => {
    connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
  });

  describe("Table with Data", () => {
    // TODO: Meta uses ID
    const { allName: tableName, allPrimaryKey: primaryKey } = tableData;

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: "",
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({ type: "pending", options: [] });
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: tableName,
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      // TODO: Meta will have less here
      expect(key).toEqual({
        type: "typeahead",
        options: [
          "Name",
          "f_autoNumber",
          "f_barcode",
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
        ],
      });
    });
  });

  describe("Empty table", () => {
    const { emptyName: tableName } = tableData;

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: "",
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({ type: "pending", options: [] });
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: tableName,
      });
      const table = result.tableId;
      const key = result.primaryKey;

      // TODO: Meta will have full info here

      expect(table).toEqual({ type: "text" });
      expect(key).toEqual({ type: "text" }); // can't figure it out!
    });
  });
});
