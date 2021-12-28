import "@grouparoo/spec-helper";
import { loadAppOptions, updater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";

import { exportArrayProperties as methodToTest } from "../../src/lib/destination/exportArrayProperties";
import { isArray } from "util";
import AirtableError from "airtable/lib/airtable_error";

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
  });

  describe("Campaigns Table", () => {
    // TODO: META uses ID
    const { campaignsName: tableName } = tableData;
    const primaryKey = "Campaign";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get array properties", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted).toEqual([
        "Next steps (from 📈 Results 2)",
        "Platform (from 💼 Ad sets table)",
        "💼 Ad sets",
        "📈 Results (from 📈 Results table)",
      ]);
    });
  });

  describe("Results Table", () => {
    // TODO: META uses ID
    const { resultsName: tableName } = tableData;
    const primaryKey = "Name";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted).toEqual(["📣 Campaigns (from 📣 Campaigns table)"]);
    });
  });

  describe("Empty Table", () => {
    // TODO: META uses ID
    const { emptyName: tableName } = tableData;
    const primaryKey = "Name";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const props = await getArrayProperties(destinationOptions);
      const sorted = props.sort();
      expect(sorted.length).toEqual(0);
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
