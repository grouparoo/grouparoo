import "@grouparoo/spec-helper";
import { loadAppOptions, getUpdater, loadTableData } from "../utils/nockHelper";
import * as utils from "../utils/shared";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { destinationMappingOptions as methodToTest } from "../../src/lib/destination/destinationMappingOptions";

helper.useNock(__filename, getUpdater("META"));
const appOptions = loadAppOptions("META");
const tableData = loadTableData("META");
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

describe("META Test Destination Mapping Options Method", () => {
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
      const value = await getMappingOptions(destinationOptions);
      const optional = value.properties.allowOptionalFromProperties;
      const required = value.properties.required;
      const known = value.properties.known;

      expect(optional).toEqual(false);

      expect(required.length).toEqual(1);
      expect(required).toEqual([{ key: "Name", type: "string" }]);

      expect(known).toEqual([
        { type: "boolean", key: "f_checkbox", important: true },
        { type: "number", key: "f_currency", important: true },
        { type: "string", key: "f_date", important: true },
        { type: "date", key: "f_dateTime", important: true },
        { type: "integer", key: "f_duration", important: true },
        { type: "email", key: "f_email", important: true },
        { type: "string", key: "f_multilineText", important: true },
        { type: "string", key: "f_multipleRecordLinks", important: true },
        { type: "string", key: "f_multipleSelects", important: true },
        { type: "number", key: "f_number", important: true },
        { type: "number", key: "f_percent", important: true },
        { type: "phoneNumber", key: "f_phoneNumber", important: true },
        { type: "number", key: "f_rating", important: true },
        { type: "string", key: "f_richText", important: true },
        { type: "string", key: "f_singleLineText", important: true },
        { type: "string", key: "f_singleSelect", important: true },
        { type: "url", key: "f_url", important: true },
      ]);
    });
  });

  describe("Empty Table", () => {
    const { emptyId: tableId, emptyPrimaryKey: primaryKey } = tableData;
    const destinationOptions = { table: tableId, primaryKey };

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

      expect(known).toEqual([
        { type: "boolean", key: "f_checkbox", important: true },
        { type: "number", key: "f_currency", important: true },
        { type: "string", key: "f_date", important: true },
        { type: "date", key: "f_dateTime", important: true },
        { type: "integer", key: "f_duration", important: true },
        { type: "email", key: "f_email", important: true },
        { type: "string", key: "f_multilineText", important: true },
        { type: "string", key: "f_multipleRecordLinks", important: true },
        { type: "string", key: "f_multipleSelects", important: true },
        { type: "number", key: "f_number", important: true },
        { type: "number", key: "f_percent", important: true },
        { type: "phoneNumber", key: "f_phoneNumber", important: true },
        { type: "number", key: "f_rating", important: true },
        { type: "string", key: "f_richText", important: true },
        { type: "string", key: "f_singleLineText", important: true },
        { type: "string", key: "f_singleSelect", important: true },
        { type: "url", key: "f_url", important: true },
      ]);
    });
  });

  describe("Invalid", () => {
    const tableId = "tblBad";
    const primaryKey = "Name";
    const destinationOptions = { table: tableId, primaryKey };

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
