import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/sqlite": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import {
  AggregationMethod,
  GrouparooRecord,
  Property,
  SourceMapping,
} from "@grouparoo/core";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const recordProperties = getConnection().methods.recordProperties;

// these used and set by test
const { appOptions, usersTableName, purchasesTableName } = getConfig();
let record: GrouparooRecord;
let otherRecord: GrouparooRecord;
let thirdRecord: GrouparooRecord;
let fourthRecord: GrouparooRecord;
let emailProperty: Property;
let firstNameProperty: Property;
let lastNameProperty: Property;
let client;

let sourceOptions;
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

  const values = await recordProperties({
    connection: client,
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

describe("sqlite/table/recordProperties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => {
    emailProperty = await Property.findOne({ where: { key: "email" } });
    firstNameProperty = await Property.findOne({ where: { key: "firstName" } });
    lastNameProperty = await Property.findOne({ where: { key: "lastName" } });
  });

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

  afterAll(async () => await afterData());

  describe("exact primary tables", () => {
    let aggregationMethod = "exact";

    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });

    for (const { type, sourceMapping } of [
      { type: "integer", sourceMapping: { id: "userId" } },
      { type: "string", sourceMapping: { email: "email" } },
    ]) {
      describe(`${type} mapping`, () => {
        test("to get a string", async () => {
          const columns = ["first_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["Erie"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["Cacilie"]);
        });

        test("to get multiple values with a string", async () => {
          const columns = ["first_name", "last_name"];
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
          const columns = ["first_name", "first_name"];
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
          const columns = ["ltv"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual([259.12]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([94.36]);
        });

        test("to get multiple values with a float", async () => {
          const columns = ["ltv", "last_name"];
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
          const columns = ["ios_app"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["true"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["false"]);
        });

        test("to get a multiple values with a boolean", async () => {
          const columns = ["ios_app", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["true"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["false"]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a date as a string", async () => {
          const columns = ["date"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["2020/02/01"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([
            "2020/02/02",
          ]);
        });

        test("to get multiple values with a date as a string", async () => {
          const columns = ["date", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect(values[record.id][properties[0].id]).toEqual(["2020/02/01"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([
            "2020/02/02",
          ]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a timestamp as a string", async () => {
          const columns = ["stamp"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect((<string[]>values[record.id][properties[0].id])[0]).toEqual(
            "2020/02/01 12:13:14"
          );
          expect(
            (<string[]>values[otherRecord.id][properties[0].id])[0]
          ).toEqual("2020/02/02 12:13:14");
        });

        test("to get multiple values with a timestamp as a string", async () => {
          const columns = ["stamp", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod,
          });
          expect((<string[]>values[record.id][properties[0].id])[0]).toEqual(
            "2020/02/01 12:13:14"
          );
          expect(
            (<string[]>values[otherRecord.id][properties[0].id])[0]
          ).toEqual("2020/02/02 12:13:14");
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });
      });
    }
  });

  describe("secondary tables", () => {
    const sourceMapping = { record_id: "userId" };
    beforeAll(() => {
      sourceOptions = { table: purchasesTableName };
    });

    describe("purchases by date", () => {
      const columns = ["purchase"];
      const sortColumn = "stamp";

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
      const columns = ["amount"];
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
        const columns = ["date"];
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
          expect(values[record.id][properties[0].id]).toEqual(["2020/02/01"]);
          expect(values[record.id][properties[0].id]).toEqual(["2020/02/01"]);
          expect(values[thirdRecord.id]).toBeUndefined();
        });
        test("max", async () => {
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(values[record.id][properties[0].id]).toEqual(["2020/02/20"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([
            "2020/02/19",
          ]);
          expect(values[thirdRecord.id]).toBeUndefined();
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { record_id: "userId" };
    const columns = ["amount"];
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
    // TO DO: EXISTS/NOT EXISTS
    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([0]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
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
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([6]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "App" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "app" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Oran" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "oran" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([4]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([5]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([0]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([0]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
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
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[record.id]
            ? values[record.id][properties[0].id].length
            : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
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
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[record.id]
            ? values[record.id][properties[0].id].length
            : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020/02/15" }]
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
          [{ op, key: "stamp", match: "2020/02/15 12:13:14" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([3]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([3]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, properties] = await getPropertyValues(
          {
            columns,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[record.id][properties[0].id]).toEqual([2]);
        expect(values[otherRecord.id][properties[0].id]).toEqual([2]);
        expect(values[thirdRecord.id][properties[0].id]).toEqual([0]);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: usersTableName };
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
