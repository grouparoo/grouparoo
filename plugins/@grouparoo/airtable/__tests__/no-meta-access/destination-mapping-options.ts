import "@grouparoo/spec-helper";
import { loadAppOptions, updater, loadTableData } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { destinationMappingOptions as methodToTest } from "../../src/lib/destination/destinationMappingOptions";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const tableData = loadTableData(newNock);
let connection;

async function getMappingOptions(destinationOptions) {
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

describe("Test Destination Mapping Options Method", () => {
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

    test("get mapping options", async () => {
      const value = await getMappingOptions(destinationOptions);
      const optional = value.properties.allowOptionalFromProperties;
      const required = value.properties.required;
      const known = value.properties.known;

      expect(optional).toEqual(false);

      expect(required.length).toEqual(1);
      const key = required[0];
      expect(key.type).toEqual("string");
      expect(key.key).toEqual(primaryKey);

      let property;
      property = known.find((p) => p.key === primaryKey);
      expect(property).toBeFalsy(); // shouldn't have this one
      property = known.find((p) => p.key === "Status");
      expect(property.type).toEqual("string");
      property = known.find((p) => p.key === "End date");
      expect(property.type).toEqual("string"); // META should be smarter
      property = known.find(
        (p) => p.key === "📈 Results (from 📈 Results table)"
      );
      expect(property.type).toEqual("string"); // META should leave it off
    });
  });

  describe("Results Table", () => {
    // TODO: META uses ID
    const { resultsName: tableName } = tableData;
    const primaryKey = "Name";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const value = await getMappingOptions(destinationOptions);
      const optional = value.properties.allowOptionalFromProperties;
      const required = value.properties.required;
      const known = value.properties.known;

      expect(optional).toEqual(false);

      expect(required.length).toEqual(1);
      const key = required[0];
      expect(key.type).toEqual("string");
      expect(key.key).toEqual(primaryKey);

      let property;
      property = known.find((p) => p.key === primaryKey);
      expect(property).toBeFalsy(); // shouldn't have this one
      property = known.find((p) => p.key === "Clicks");
      expect(property.type).toEqual("number");
      property = known.find((p) => p.key === "CPA");
      expect(property.type).toEqual("number"); // META should leave off formula
    });
  });

  describe("Empty Table", () => {
    // TODO: META uses ID
    const { emptyName: tableName } = tableData;
    const primaryKey = "Name";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const value = await getMappingOptions(destinationOptions);
      const optional = value.properties.allowOptionalFromProperties;
      const required = value.properties.required;
      const known = value.properties.known;

      // set whatever you want!
      expect(optional).toEqual(true);

      expect(required.length).toEqual(1);
      const key = required[0];
      expect(key.type).toEqual("string");
      expect(key.key).toEqual(primaryKey);

      // don't know any other ones!
      expect(known.length).toEqual(0);
    });
  });

  describe("Invalid", () => {
    const tableName = "Unknown Table";
    const primaryKey = "Name";
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      try {
        await getMappingOptions(destinationOptions);
        expect("should not get here").toBe(true);
      } catch (err) {
        expect(err.message).toContain("Could not find table");
      }
    });
  });
});
