import "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import * as utils from "../utils/shared";
import { connect } from "../../src/lib/connect";

import { exportArrayProperties as methodToTest } from "../../src/lib/destination/exportArrayProperties";

helper.useNock(__filename, getUpdater("META"));
const appOptions = loadAppOptions("META");
const tableData = loadTableData("META");
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

describe("META Export Array Properties Test", () => {
  beforeAll(async () => {
    connection = await connect({
      app: undefined,
      appId: null,
      appOptions,
    });
    await utils.cleanUp(connection, tableData.emptyId, false);
  });

  describe("Table with Data", () => {
    const { allId: tableId, allPrimaryKey: primaryKey } = tableData;
    const destinationOptions = { table: tableId, primaryKey };

    test("get mapping options", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted).toEqual(["f_multipleRecordLinks", "f_multipleSelects"]);
    });
  });

  describe("Empty Table", () => {
    const { emptyId: tableId, emptyPrimaryKey: primaryKey } = tableData;
    const destinationOptions = { table: tableId, primaryKey };

    test("get mapping options", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted).toEqual(["f_multipleRecordLinks", "f_multipleSelects"]);
    });
  });

  describe("Invalid", () => {
    const tableId = "tblBad";
    const primaryKey = "Name";
    const destinationOptions = { table: tableId, primaryKey };

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
