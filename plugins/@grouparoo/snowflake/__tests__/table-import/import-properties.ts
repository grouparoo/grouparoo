import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/snowflake": { path: path.join(__dirname, "..", "..") },
});

import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import {
  SimpleAppOptions,
  Property,
  GrouparooRecord,
  SourceMapping,
  AggregationMethod,
} from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const recordProperties = getConnection().methods.recordProperties;

const { newNock } = helper.useNock(__filename, updater);

let record: GrouparooRecord;
let otherRecord: GrouparooRecord;
let thirdRecord: GrouparooRecord;
let fourthRecord: GrouparooRecord;
let emailProperty: Property;
let firstNameProperty: Property;
let lastNameProperty: Property;
let sourceOptions;
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

async function getPropertyValues(
  {
    columns,
    sourceMapping,
    aggregationMethod,
    sortColumn,
  }: {
    columns: string[];
    sourceMapping: SourceMapping;
    aggregationMethod: string;
    sortColumn?: string;
  },
  usePropertyFilters?
) {
  const arrays = await getPropertyArrays(
    { columns, sourceMapping, aggregationMethod, sortColumn },
    usePropertyFilters
  );
  return arrays;
}
async function getPropertyArrays(
  {
    columns,
    sourceMapping,
    aggregationMethod,
    sortColumn,
  }: {
    columns: string[];
    sourceMapping: SourceMapping;
    aggregationMethod: string;
    sortColumn?: string;
  },
  usePropertyFilters?
) {
  const properties = [
    emailProperty,
    firstNameProperty,
    lastNameProperty,
  ].filter((p, idx) => columns.length > idx);

  let counter = 0;
  const propertyOptions = {};
  for (const property of properties) {
    propertyOptions[property.id] = {
      column: columns[counter],
      aggregationMethod,
      sortColumn,
    };
    counter++;
  }

  const propertyFilters = usePropertyFilters
    ? { [properties[0].id]: usePropertyFilters }
    : { [properties[0].id]: [] };

  const connection = await connect({ appOptions, app: null, appId: null });

  const values = await recordProperties({
    connection,
    appOptions,
    records: [record, otherRecord, thirdRecord, fourthRecord],
    sourceOptions,
    propertyOptions,
    sourceMapping,
    propertyFilters,
    properties,
    recordIds: [record.id, otherRecord.id, thirdRecord.id, fourthRecord.id],
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyIds: properties.map((p) => p.id),
  });

  return [values, properties];
}
describe("snowflake/table/recordProperties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => {
    emailProperty = await Property.findOne({ where: { key: "email" } });
    firstNameProperty = await Property.findOne({ where: { key: "firstName" } });
    lastNameProperty = await Property.findOne({ where: { key: "lastName" } });
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

    otherRecord = await helper.factories.record();
    await otherRecord.addOrUpdateProperties({
      userId: [2],
      email: ["ceate1@example.com"],
      lastName: null,
    });

    //record w no purchases for testing null/0 in aggregate properties
    thirdRecord = await helper.factories.record();
    await thirdRecord.addOrUpdateProperties({
      userId: [6],
      email: ["another@example.com"],
      lastName: null,
    });

    fourthRecord = await helper.factories.record();
    await fourthRecord.addOrUpdateProperties({
      userId: [4],
      email: ["acotesford3@example.com"],
      lastName: null,
    });
  });

  describe("exact primary tables", () => {
    let aggregationMethod = "exact";

    beforeAll(() => {
      sourceOptions = { table: "PROFILES" };
    });

    for (const { type, sourceMapping } of [
      { type: "integer", sourceMapping: { ID: "userId" } },
      { type: "string", sourceMapping: { EMAIL: "email" } },
    ]) {
      describe(`${type} mapping`, () => {
        test("to get a string", async () => {
          const columns = ["FIRST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["Erie"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["Cacilie"]);
        });

        test("to get multiple values with a string", async () => {
          const columns = ["FIRST_NAME", "LAST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["Erie"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["Cacilie"]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get multiple values from the same column", async () => {
          const columns = ["FIRST_NAME", "FIRST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["Erie"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["Cacilie"]);
          expect(values[record.id][properties[1].id]).toEqual(["Erie"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Cacilie"]);
        });

        test("to get a float", async () => {
          const columns = ["LTV"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual([259.12]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([94.36]);
        });

        test("to get multiple values with a float", async () => {
          const columns = ["LTV", "LAST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual([259.12]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([94.36]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a boolean", async () => {
          const columns = ["IOS_APP"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual([true]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([false]);
        });

        test("to get a multiple values with a boolean", async () => {
          const columns = ["IOS_APP", "LAST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual([true]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([false]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a date", async () => {
          const columns = ["DATE"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-01T00:00:00.000Z"]);
          expect(
            values[otherRecord.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-02T00:00:00.000Z"]);
        });

        test("to get a date multiple values with a date", async () => {
          const columns = ["DATE", "LAST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-01T00:00:00.000Z"]);
          expect(
            values[otherRecord.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-02T00:00:00.000Z"]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a timestamp", async () => {
          const columns = ["STAMP"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-01T12:13:14.000Z"]);
          expect(
            values[otherRecord.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-02T12:13:14.500Z"]);
        });

        test("to get multiple values with a timestamp", async () => {
          const columns = ["STAMP", "LAST_NAME"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-01T12:13:14.000Z"]);
          expect(
            values[otherRecord.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-02T12:13:14.500Z"]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });
      });
    }
  });

  describe("secondary tables", () => {
    const sourceMapping = { PROFILE_ID: "userId" };
    beforeAll(() => {
      sourceOptions = { table: "PURCHASES" };
    });

    describe("purchases by date", () => {
      const columns = ["PURCHASE"];
      const sortColumn = "STAMP";
      test("most recent", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sortColumn,
          sourceMapping,
          aggregationMethod: AggregationMethod.MostRecentValue,
        });
        expect(values[record.id][properties[0].id][0]).toEqual("Orange");
        expect(values[otherRecord.id][properties[0].id][0]).toEqual("Apple");
        expect(values[fourthRecord.id][properties[0].id][0]).toEqual(
          "Watermelon"
        );
      });

      test("least recent", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sortColumn,
          sourceMapping,
          aggregationMethod: AggregationMethod.LeastRecentValue,
        });
        expect(values[record.id][properties[0].id][0]).toEqual("Apple");
        expect(values[otherRecord.id][properties[0].id][0]).toEqual("Pear");
        expect(values[fourthRecord.id][properties[0].id][0]).toEqual(
          "Blueberry"
        );
      });

      test("Exact + Array works as intended", async () => {
        const { isArray } = emailProperty;
        emailProperty.isArray = true;
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
          aggregationMethod: AggregationMethod.Exact,
        });
        expect(values[record.id][properties[0].id]).toEqual([
          "Apple",
          "Orange",
          "Blueberry",
          "Apple",
          "Blueberry",
          "Orange",
        ]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([
          "Pear",
          "Apple",
          "Apple",
          "Pear",
          "Apple",
        ]);
        expect(values[fourthRecord.id][properties[0].id]).toEqual([
          "Blueberry",
          "Pear",
          "Apple",
          "Watermelon",
          "Peach",
        ]);
        emailProperty.isArray = isArray;
      });
    });

    describe("numbers", () => {
      const columns = ["AMOUNT"];
      test("average", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
          aggregationMethod: "average",
        });
        expect(
          fixedLengthFloat(values[record.id][properties[0].id][0])
        ).toEqual(1.73);
        expect(
          fixedLengthFloat(values[otherRecord.id][properties[0].id][0])
        ).toEqual(1.88);
        expect(values[thirdRecord.id]).toBeUndefined();
      });
      test("count", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
          aggregationMethod: "count",
        });

        expect(values[record.id][properties[0].id]).toEqual([6]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("sum", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(
          fixedLengthFloat(values[record.id][properties[0].id][0])
        ).toEqual(10.38);
        expect(
          fixedLengthFloat(values[otherRecord.id][properties[0].id][0])
        ).toEqual(9.38);
        expect(
          fixedLengthFloat(values[thirdRecord.id][properties[0].id][0])
        ).toEqual(0);
      });
      test("min", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(values[record.id][properties[0].id]).toEqual([1.42]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0.78]);
        expect(values[thirdRecord.id]).toBeUndefined();
      });
      test("max", async () => {
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(values[record.id][properties[0].id]).toEqual([2.23]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3.14]);
        expect(values[thirdRecord.id]).toBeUndefined();
      });

      describe("dates", () => {
        const columns = ["DATE"];
        test("count", async () => {
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(values[record.id][properties[0].id]).toEqual([6]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
          expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
        });
        test("min", async () => {
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-01T00:00:00.000Z"]);
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-01T00:00:00.000Z"]);
          expect(values[thirdRecord.id]).toBeUndefined();
        });

        test("max", async () => {
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-20T00:00:00.000Z"]);
          expect(
            values[record.id][properties[0].id].map((v) =>
              (<Date>v).toISOString()
            )
          ).toEqual(["2020-02-20T00:00:00.000Z"]);
          expect(values[thirdRecord.id]).toBeUndefined();
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { PROFILE_ID: "userId" };
    const columns = ["AMOUNT"];
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

    //TO DO: EXISTS/NOT EXISTS

    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([0]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([1]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });

    describe("does not equal", () => {
      const op = "ne";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([5]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([6]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([5]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([5]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([4]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });

    describe("contains", () => {
      const op = "substring";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "App" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is not case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "app" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([1]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });

    describe("does not contain", () => {
      const op = "notSubstring";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([5]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Oran" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is not case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "oran" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([5]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([5]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([4]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });

    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([0]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([1]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([1]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });

    describe("greater than", () => {
      const op = "gt";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([0]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });

    describe("less than", () => {
      const op = "lt";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([3]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([0]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([6]); // weird ascii math
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]); // weird ascii math
      });
      test("DATE", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([3]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([3]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });
  });

  describe("non-unique joins", () => {
    beforeAll(async () => {
      const userId = await Property.findOne({ where: { key: "userId" } });
      const users = await userId.$get("source");

      // add accountId property
      const accountId = await Property.create({
        id: "accountId",
        key: "accountId",
        sourceId: users.id,
        type: "string",
        unique: false,
        isArray: false,
      });
      await accountId.setOptions({ column: "ACCOUNT_ID" });
      await accountId.update({ state: "ready" });
    });

    beforeAll(() => {
      sourceOptions = { table: "ACCOUNTS" };
    });

    test("it will not import if the dependency is not ready", async () => {
      const [values, properties] = await getPropertyValues({
        columns: ["NAME"],
        sourceMapping: { ID: "accountId" },
        aggregationMethod: "exact",
      });
      expect(values).toEqual({});
    });

    test("it will import properties when the dependency is ready", async () => {
      await record.addOrUpdateProperties({ accountId: [1] });
      await otherRecord.addOrUpdateProperties({ accountId: [1] });

      const [values, properties] = await getPropertyValues({
        columns: ["NAME"],
        sourceMapping: { ID: "accountId" },
        aggregationMethod: "exact",
      });
      expect(values[record.id][properties[0].id]).toEqual(["super_mega_corp"]);
      expect(values[otherRecord.id][properties[0].id]).toEqual([
        "super_mega_corp",
      ]);
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: "PROFILES" };
    });
    test("unknown record property", async () => {
      const [values, properties] = await getPropertyValues({
        columns: ["first_name"],
        sourceMapping: { id: "badName" },
        aggregationMethod: "exact",
      });
      expect(values[record.id]).toBeUndefined();
      expect(values[otherRecord.id]).toBeUndefined();
      expect(values[thirdRecord.id]).toBeUndefined();
    });
    test("null record property", async () => {
      const [values, properties] = await getPropertyValues({
        columns: ["first_name"],
        sourceMapping: { id: "lastName" }, // set to NULL
        aggregationMethod: "exact",
      });
      expect(values[record.id]).toBeUndefined();
      expect(values[otherRecord.id]).toBeUndefined();
      expect(values[thirdRecord.id]).toBeUndefined();
    });
  });
});

function fixedLengthFloat(value: any, decimalDigits = 2) {
  return parseFloat(parseFloat(value.toString()).toFixed(decimalDigits));
}
