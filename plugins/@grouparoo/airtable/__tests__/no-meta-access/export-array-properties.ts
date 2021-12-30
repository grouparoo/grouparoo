import "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import * as utils from "../utils/shared";
import { connect } from "../../src/lib/connect";

import { exportArrayProperties as methodToTest } from "../../src/lib/destination/exportArrayProperties";

helper.useNock(__filename, getUpdater("BASIC"));
const appOptions = loadAppOptions("BASIC");
const tableData = loadTableData("BASIC");
let connection;

async function getArrayProperties(destinationOptions) {
  return methodToTest({
    app: null,
    appId: null,
    appOptions: null,
    destination: null,
    destinationId: null,
    connection,
    destinationOptions,
  });
}

describe("BASIC Export Array Properties Test", () => {
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
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted).toEqual([
        "f_multipleLookupValues",
        "f_multipleRecordLinks",
        "f_multipleSelects",
      ]);
    });
  });

  describe("Empty Table", () => {
    const { emptyName: tableName, emptyPrimaryKey: primaryKey } = tableData;
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted.length).toEqual(0); // I know nothing!
    });
  });

  describe("Invalid", () => {
    const tableName = "Unknown Table";
    const primaryKey = "Name";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      try {
        await getArrayProperties(destinationOptions);
        expect("should not get here").toBe(true);
      } catch (err) {
        expect(err.message).toContain("Could not find table");
      }
    });
  });
});
