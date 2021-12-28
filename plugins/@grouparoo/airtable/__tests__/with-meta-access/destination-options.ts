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

describe("Meta: Destination Options Tests", () => {
  beforeAll(async () => {
    connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
  });

  describe("Campaigns table", () => {
    const { campaignsId: tableId, campaignsName: tableName } = tableData;
    const primaryKey = "Campaign";

    test("New Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId: "",
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table.type).toEqual("list");
      expect(table.options.length).toBeGreaterThanOrEqual(3);
      const index = table.options.indexOf(tableId);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(table.descriptions[0]).toEqual(tableName);

      expect(key.type).toEqual("pending");
    });
    test("Table Selected Options", async () => {
      const result = await runDestinationOptions({
        primaryKey: "",
        tableId,
      });
      const table = result.tableId;
      const key = result.primaryKey;

      expect(table.type).toEqual("list");

      expect(key.type).toEqual("typeahead");
      expect(key.options.length).toBeGreaterThanOrEqual(5);
      const index = key.options.indexOf(primaryKey);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(key.descriptions).toBeUndefined();
    });
  });
  // TODO: empty table
});
