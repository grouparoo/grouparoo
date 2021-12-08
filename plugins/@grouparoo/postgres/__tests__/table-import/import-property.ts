import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { GrouparooRecord, Property } from "@grouparoo/core";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
import { PostgresPoolClient } from "../../src/lib/connect";
const recordProperty = getConnection().methods.recordProperty;

// these used and set by test
const { appOptions, usersTableName, purchasesTableName } = getConfig();
let record: GrouparooRecord;

let client: PostgresPoolClient;

let sourceOptions: { table: string };
async function getPropertyValue(
  { column, sourceMapping, aggregationMethod },
  usePropertyFilters?,
  useRecord?: GrouparooRecord
) {
  const array = await getPropertyArray(
    { column, sourceMapping, aggregationMethod },
    usePropertyFilters,
    useRecord
  );
  return array ? array[0] : array;
}
async function getPropertyArray(
  { column, sourceMapping, aggregationMethod },
  usePropertyFilters?,
  useRecord?: GrouparooRecord
) {
  const propertyOptions = {
    column,
    aggregationMethod,
  };

  if (!useRecord) {
    useRecord = record;
  }

  const propertyFilters = usePropertyFilters || [];
  const property = await Property.findOne({
    where: { key: "email" },
  });

  return recordProperty({
    connection: client,
    appOptions,
    record: useRecord,
    sourceOptions,
    propertyOptions,
    sourceMapping,
    propertyFilters,
    property,
    recordId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
  });
}

describe("postgres/table/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  beforeAll(async () => {
    jest.setTimeout(helper.mediumTime);

    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
      lastName: null,
    });
    expect(record.id).toBeTruthy();
  });

  afterAll(async () => await afterData());

  describe("exact primary tables", () => {
    const aggregationMethod = "exact";
    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });
    describe("integer mapping", () => {
      const sourceMapping = { id: "userId" };
      test("to get a string", async () => {
        const column = "first_name";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual("Erie");
      });
      test("to get a float", async () => {
        const column = "ltv";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual(259.12);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual(true);
      });
      test("to get a date", async () => {
        const column = "date";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual("2020-02-01");
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
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
          aggregationMethod,
        });
        expect(value).toEqual("Erie");
      });
      test("to get a float", async () => {
        const column = "ltv";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual(259.12);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual(true);
      });
      test("to get a date", async () => {
        const column = "date";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual("2020-02-01");
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect((<Date>value).toISOString()).toEqual("2020-02-01T12:13:14.000Z");
      });
    });
  });

  describe("secondary tables", () => {
    const sourceMapping = { record_id: "userId" };
    beforeAll(() => {
      sourceOptions = { table: purchasesTableName };
    });

    describe("numbers", () => {
      const column = "amount";
      test("average", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "average",
        });
        expect(fixedLengthFloat(value)).toEqual(1.63);
      });
      test("count", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(value).toEqual(7);
      });
      test("sum", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(fixedLengthFloat(value)).toEqual(11.38);
      });
      test("min", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(value).toEqual(1);
      });
      test("max", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(value).toEqual(2.23);
      });

      describe("dates", () => {
        const column = "date";
        test("count", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(value).toEqual(7);
        });
        test("min", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(value).toEqual("2020-02-01");
        });
        test("max", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(value).toEqual("2020-02-20");
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { record_id: "userId" };
    const column = "amount";
    const aggregationMethod = "count";
    beforeAll(() => {
      sourceOptions = { table: purchasesTableName };
    });
    // export interface PropertyFiltersWithKey {
    //   key: string;
    //   op: string;
    //   match?: string | number | boolean;
    //   relativeMatchNumber?: number;
    //   relativeMatchUnit?: string;
    //   relativeMatchDirection?: string;
    // }
    describe("exists", () => {
      const op = "exists";
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase" }]
        );
        expect(value).toEqual(6);
      });
    });

    describe("does not exist", () => {
      const op = "notExists";
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase" }]
        );
        expect(value).toEqual(1);
      });
    });
    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(1);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(value).toEqual(2);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toEqual(0);
      });
      test("date", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(value).toEqual(1);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual(1);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(value).toEqual(2);
      });
    });

    describe("does not equal", () => {
      const op = "ne";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(6);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(value).toEqual(4);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toEqual(6);
      });
      test("date", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(value).toEqual(6);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual(6);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(value).toEqual(5);
      });
    });

    describe("contains", () => {
      const op = "substring";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(1);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "App" }]
        );
        expect(value).toEqual(2);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "app" }]
        );
        expect(value).toEqual(2);
      });
      test("date", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15" }]
        );
        expect(value).toEqual(1);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual(1);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(value).toEqual(2);
      });
    });

    describe("does not contain", () => {
      const op = "notSubstring";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(6);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Oran" }]
        );
        expect(value).toEqual(4);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "oran" }]
        );
        expect(value).toEqual(4);
      });
      test("date", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(value).toEqual(6);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual(6);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(value).toEqual(5);
      });
    });

    describe("greater than", () => {
      const op = "gt";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(3);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(value).toEqual(4);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(value).toEqual(3);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual(3);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(value).toEqual(2);
      });
    });

    describe("less than", () => {
      const op = "lt";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(3);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(value).toEqual(0);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(value).toEqual(3);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual(3);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(value).toEqual(3);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });
    test("unknown record property", async () => {
      const value = await getPropertyValue({
        column: "first_name",
        sourceMapping: { id: "badName" },
        aggregationMethod: "exact",
      });
      expect(value).toEqual(undefined);
    });
    test("null record property", async () => {
      const value = await getPropertyValue({
        column: "first_name",
        sourceMapping: { id: "lastName" }, // set to NULL
        aggregationMethod: "exact",
      });
      expect(value).toEqual(undefined);
    });
  });
});

function fixedLengthFloat(
  value: Awaited<ReturnType<typeof getPropertyValue>>,
  decimalDigits = 2
) {
  return parseFloat(parseFloat(value.toString()).toFixed(decimalDigits));
}
