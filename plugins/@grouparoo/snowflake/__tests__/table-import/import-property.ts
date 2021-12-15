import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/snowflake": { path: path.join(__dirname, "..", "..") },
});

import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions, GrouparooRecord, Property } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const recordProperty = getConnection().methods.recordProperty;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let record: GrouparooRecord;

let sourceOptions;
async function getPropertyValue(
  { column, sourceMapping, aggregationMethod },
  usePropertyFilters?,
  useRecord?: GrouparooRecord
) {
  const propertyOptions = {
    column,
    aggregationMethod: aggregationMethod,
  };

  if (!useRecord) {
    useRecord = record;
  }

  const propertyFilters = usePropertyFilters || [];
  const connection = await connect({ appOptions, app: null, appId: null });
  const property = await Property.findOne({
    where: { key: "email" },
  });

  return recordProperty({
    connection,
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

describe("snowflake/table/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

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

  describe("exact primary tables", () => {
    let aggregationMethod = "exact";
    beforeAll(() => {
      sourceOptions = { table: "PROFILES" };
    });
    describe("integer mapping", () => {
      const sourceMapping = { ID: "userId" };
      test("to get a string", async () => {
        const column = "FIRST_NAME";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual(["Erie"]);
      });
      test("to get a float", async () => {
        const column = "LTV";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual([259.12]);
      });
      test("to get a boolean", async () => {
        const column = "IOS_APP";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual([true]);
      });
      test("to get a date", async () => {
        const column = "DATE";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value.map((v) => (<Date>v).toISOString())).toEqual([
          "2020-02-01T00:00:00.000Z",
        ]);
      });
      test("to get a timestamp", async () => {
        const column = "STAMP";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value.map((v) => (<Date>v).toISOString())).toEqual([
          "2020-02-01T12:13:14.000Z",
        ]);
      });
    });

    describe("string mapping", () => {
      const sourceMapping = { EMAIL: "email" };
      test("to get a string", async () => {
        const column = "FIRST_NAME";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual(["Erie"]);
      });
      test("to get a float", async () => {
        const column = "LTV";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual([259.12]);
      });
      test("to get a boolean", async () => {
        const column = "IOS_APP";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toEqual([true]);
      });
      test("to get a date", async () => {
        const column = "DATE";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value.map((v) => (<Date>v).toISOString())).toEqual([
          "2020-02-01T00:00:00.000Z",
        ]);
      });
      test("to get a timestamp", async () => {
        const column = "STAMP";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value.map((v) => (<Date>v).toISOString())).toEqual([
          "2020-02-01T12:13:14.000Z",
        ]);
      });
    });
  });

  describe("secondary tables", () => {
    const sourceMapping = { PROFILE_ID: "userId" };
    beforeAll(() => {
      sourceOptions = { table: "PURCHASES" };
    });

    describe("numbers", () => {
      const column = "AMOUNT";
      test("average", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "average",
        });
        expect(value).toEqual([1.73]);
      });
      test("count", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(value).toEqual([6]);
      });
      test("sum", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(value).toEqual([10.38]);
      });
      test("min", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(value).toEqual([1.42]);
      });
      test("max", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(value).toEqual([2.23]);
      });

      describe("dates", () => {
        const column = "DATE";
        test("count", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(value).toEqual([6]);
        });
        test("min", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(value.map((v) => (<Date>v).toISOString())).toEqual([
            "2020-02-01T00:00:00.000Z",
          ]);
        });
        test("max", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(value.map((v) => (<Date>v).toISOString())).toEqual([
            "2020-02-20T00:00:00.000Z",
          ]);
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { PROFILE_ID: "userId" };
    const column = "AMOUNT";
    const aggregationMethod = "count";
    beforeAll(() => {
      sourceOptions = { table: "PURCHASES" };
    });
    // export interface PropertyFiltersWithKey {
    //   key: string;
    //   op: string;
    //   match?: string | number | boolean;
    //   relativeMatchNumber?: number;
    //   relativeMatchUnit?: string;
    //   relativeMatchDirection?: string;
    // }

    //TO DO: EXISTS/NOTEXISTS
    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([1]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(value).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(value).toEqual([0]);
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(value).toEqual([1]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([1]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([2]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([5]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(value).toEqual([4]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(value).toEqual([6]);
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(value).toEqual([5]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([5]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([4]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([1]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "App" }]
        );
        expect(value).toEqual([2]);
      });
      test("string is not case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "app" }]
        );
        expect(value).toEqual([2]);
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15" }]
        );
        expect(value).toEqual([1]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([1]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([2]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([5]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Oran" }]
        );
        expect(value).toEqual([4]);
      });
      test("string is not case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "oran" }]
        );
        expect(value).toEqual([4]);
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(value).toEqual([5]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([5]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([4]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([1]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(value).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(value).toEqual([0]);
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(value).toEqual([1]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([1]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([2]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([2]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(value).toEqual([4]);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(value).toEqual([0]);
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(value).toEqual([2]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([2]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([2]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(value).toEqual([3]);
      });
      test("string", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(value).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(value).toEqual([6]); // weird ascii math
      });
      test("DATE", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(value).toEqual([3]);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(value).toEqual([3]);
      });
      test("float", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(value).toEqual([2]);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: "PROFILES" };
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
