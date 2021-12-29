import "@grouparoo/spec-helper";
import { loadAppOptions, updater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import * as utils from "../utils/shared";
import { connect } from "../../src/lib/connect";

import { exportArrayProperties as methodToTest } from "../../src/lib/destination/exportArrayProperties";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const tableData = loadTableData(newNock);
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

describe("Export Array Properties Test", () => {
  beforeAll(async () => {
    connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
    await utils.cleanUp(connection, tableData.emptyId, false);
  });

  describe("Table with Data", () => {
    // TODO: META uses ID and have less data here (only selects?)
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
    // TODO: META uses ID and will have full data here
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
