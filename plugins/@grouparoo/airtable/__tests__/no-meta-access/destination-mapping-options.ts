import "@grouparoo/spec-helper";
import { loadAppOptions, updater, loadTableData } from "../utils/nockHelper";
import * as utils from "../utils/shared";
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
    await utils.cleanUp(connection, tableData.emptyId, false);
  });

  describe("Table with Data", () => {
    // TODO: META uses ID
    const { allName: tableName, allPrimaryKey: primaryKey } = tableData;
    const destinationOptions = { tableId: tableName, primaryKey };

    test("get mapping options", async () => {
      const value = await getMappingOptions(destinationOptions);
      const optional = value.properties.allowOptionalFromProperties;
      const required = value.properties.required;
      const known = value.properties.known;

      expect(optional).toEqual(false);

      expect(required.length).toEqual(1);
      expect(required).toEqual([{ key: "Name", type: "string" }]);

      // TODO: meta many less and better types
      expect(known).toEqual([
        { type: "number", key: "f_autoNumber", important: true },
        { type: "boolean", key: "f_checkbox", important: true },
        { type: "number", key: "f_count", important: true },
        { type: "string", key: "f_createdTime", important: true },
        { type: "number", key: "f_currency", important: true },
        { type: "string", key: "f_date", important: true },
        { type: "string", key: "f_dateTime", important: true },
        { type: "number", key: "f_duration", important: true },
        { type: "string", key: "f_email", important: true },
        { type: "string", key: "f_formula", important: true },
        { type: "string", key: "f_lastModifiedTime", important: true },
        { type: "string", key: "f_multilineText", important: true },
        { type: "string", key: "f_multipleLookupValues", important: true },
        { type: "string", key: "f_multipleRecordLinks", important: true },
        { type: "string", key: "f_multipleSelects", important: true },
        { type: "number", key: "f_number", important: true },
        { type: "number", key: "f_percent", important: true },
        { type: "string", key: "f_phoneNumber", important: true },
        { type: "number", key: "f_rating", important: true },
        { type: "string", key: "f_richText", important: true },
        { type: "number", key: "f_rollup", important: true },
        { type: "string", key: "f_singleLineText", important: true },
        { type: "string", key: "f_singleSelect", important: true },
        { type: "string", key: "f_url", important: true },
      ]);
    });
  });

  describe("Empty Table", () => {
    // TODO: META uses ID
    const { emptyName: tableName, emptyPrimaryKey: primaryKey } = tableData;
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
      // TODO: meta will have more
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
