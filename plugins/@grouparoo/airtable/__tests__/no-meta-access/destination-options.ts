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

  describe("Campaigns table", () => {
    const { campaignsName: tableName } = tableData;
    const primaryKey = "Campaign";

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: "",
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table.type).toEqual("text");
      expect(key.type).toEqual("pending");
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: tableName,
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table.type).toEqual("text");

      expect(key.type).toEqual("typeahead");
      expect(key.options.length).toBeGreaterThanOrEqual(5);
      const index = key.options.indexOf(primaryKey);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(key.descriptions).toBeUndefined();
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

      expect(table.type).toEqual("text");
      expect(key.type).toEqual("pending");
    });

    test("Table Selected", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: tableName,
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table.type).toEqual("text");
      // can't figure it out!
      expect(key.type).toEqual("text");
    });
  });
});
