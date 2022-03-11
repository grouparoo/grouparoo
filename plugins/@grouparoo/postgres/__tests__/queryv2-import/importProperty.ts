import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Property,
  SimpleSourceOptions,
} from "@grouparoo/core";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/queryv2-import/connection";
import { PostgresPoolClient } from "../../src/lib/connect";
const recordProperty = getConnection().methods.recordProperty;

// these used and set by test
const { appOptions, usersSourceQuery, purchasesSourceQuery } = getConfig();
let record: GrouparooRecord;
let emailProperty: Property;
let client: PostgresPoolClient;

let sourceOptions: SimpleSourceOptions;
async function getPropertyValue(
  {
    column,
    sourceMapping,
  }: {
    column: string;
    sourceMapping: Record<string, string>;
  },
  useRecord?: GrouparooRecord
) {
  const array = await getPropertyArray({ column, sourceMapping }, useRecord);
  return array ? array[0] : array;
}
async function getPropertyArray(
  {
    column,
    sourceMapping,
  }: {
    column: string;
    sourceMapping: Record<string, string>;
  },
  useRecord?: GrouparooRecord
) {
  const propertyOptions = {
    column,
    aggregationMethod: "exact",
  };

  if (!useRecord) {
    useRecord = record;
  }

  return recordProperty({
    connection: client,
    appOptions,
    record: useRecord,
    sourceOptions,
    propertyOptions,
    sourceMapping,
    propertyFilters: [],
    property: emailProperty,
    recordId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
  });
}

describe("postgres/queryv2/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  beforeAll(async () => {
    jest.setTimeout(helper.mediumTime);

    record = await helper.factories.record();
    emailProperty = await Property.findOne({ where: { key: "email" } });
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
      lastName: null,
    });
    expect(record.id).toBeTruthy();
  });

  afterAll(async () => await afterData());

  describe("exact primary", () => {
    beforeAll(() => {
      sourceOptions = { query: usersSourceQuery };
    });

    describe("integer mapping", () => {
      const sourceMapping = { id: "userId" };
      test("to get a string", async () => {
        const column = "first_name";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual("Erie");
      });
      test("to get a float", async () => {
        const column = "ltv";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual(259.12);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual(true);
      });
      test("to get a date", async () => {
        const column = "date";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual("2020-02-01");
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect((<Date>value).toISOString()).toEqual("2020-02-01T12:13:14.000Z");
      });
    });

    describe("string mapping", () => {
      const sourceMapping = { email: "email" };
      test("to get a string", async () => {
        const column = "first_name";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual("Erie");
      });
      test("to get a float", async () => {
        const column = "ltv";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual(259.12);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual(true);
      });
      test("to get a date", async () => {
        const column = "date";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect(value).toEqual("2020-02-01");
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const value = await getPropertyValue({
          column,
          sourceMapping,
        });
        expect((<Date>value).toISOString()).toEqual("2020-02-01T12:13:14.000Z");
      });
    });
  });

  describe("secondary sources", () => {
    const sourceMapping = { record_id: "userId" };

    beforeAll(async () => {
      sourceOptions = { query: purchasesSourceQuery };
    });

    test("Exact + Array works as intended", async () => {
      const { isArray } = emailProperty;
      emailProperty.isArray = true;

      const value = await getPropertyArray({
        column: "purchase",
        sourceMapping,
      });
      expect(value).toEqual([
        "Apple",
        "Orange",
        "Blueberry",
        "Apple",
        "Blueberry",
        "Orange",
        null,
      ]);

      emailProperty.isArray = isArray;
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { query: usersSourceQuery };
    });
    test("unknown record property", async () => {
      const value = await getPropertyValue({
        column: "first_name",
        sourceMapping: { id: "badName" },
      });
      expect(value).toEqual(undefined);
    });
    test("null record property", async () => {
      const value = await getPropertyValue({
        column: "first_name",
        sourceMapping: { id: "lastName" }, // set to NULL
      });
      expect(value).toEqual(undefined);
    });
  });
});
