import path from "path";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mongo": { path: path.join(__dirname, "..", "..") },
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
const { appOptions, usersTableName, purchasesTableName, locationsTableName } =
  getConfig();
let record: GrouparooRecord;
let otherRecord: GrouparooRecord;
let thirdRecord: GrouparooRecord;
let fourthRecord: GrouparooRecord;
let client;
let sourceOptions;

async function getPropertyValues(
  {
    column,
    sourceMapping,
    aggregationMethod,
    sortColumn,
  }: {
    column: string;
    sourceMapping: SourceMapping;
    aggregationMethod: string;
    sortColumn?: string;
  },
  usePropertyFilters?,
  isArray?: boolean
) {
  const arrays = await getPropertyArrays(
    { column, sourceMapping, aggregationMethod, sortColumn },
    usePropertyFilters,
    isArray
  );
  return arrays;
}

async function getPropertyArrays(
  {
    column,
    sourceMapping,
    aggregationMethod,
    sortColumn,
  }: {
    column: string;
    sourceMapping: SourceMapping;
    aggregationMethod: string;
    sortColumn?: string;
  },
  usePropertyFilters?,
  isArray?: boolean
) {
  const property = await Property.findOne({
    where: { key: "email" },
  });
  property.isArray = !!isArray;
  const propertyOptions = {
    [property.id]: {
      column,
      aggregationMethod: aggregationMethod,
      sortColumn,
    },
  };
  const propertyFilters = usePropertyFilters
    ? { [property.id]: usePropertyFilters }
    : { [property.id]: [] };

  const values = await recordProperties({
    connection: client,
    appOptions,
    records: [record, otherRecord, thirdRecord, fourthRecord],
    sourceOptions,
    propertyOptions,
    sourceMapping,
    propertyFilters,
    properties: [property],
    recordIds: [record.id, otherRecord.id, thirdRecord.id, fourthRecord.id],
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyIds: [property.id],
  });

  return [values, property];
}

describe("mongo/table/recordProperties", () => {
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
      sourceOptions = {
        table: usersTableName,
      };
    });

    describe("integer mapping", () => {
      const sourceMapping = { id: "userId" };
      test("to get a string", async () => {
        const column = "first_name";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[record.id][property.id]).toEqual(["Erie"]);
        expect(values[otherRecord.id][property.id]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "ltv";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[record.id][property.id]).toEqual([259.12]);
        expect(values[otherRecord.id][property.id]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[record.id][property.id]).toEqual([true]);
        expect(values[otherRecord.id][property.id]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "date";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          (<Date[]>values[record.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-01T00:00:00.000").toISOString());
        expect(
          (<Date[]>values[otherRecord.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-02T00:00:00.000").toISOString());
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          (<Date[]>values[record.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-01T12:13:14.000").toISOString());
        expect(
          (<Date[]>values[otherRecord.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-02T12:13:14.000").toISOString());
      });
    });

    describe("string mapping", () => {
      const sourceMapping = { email: "email" };
      test("to get a string", async () => {
        const column = "first_name";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[record.id][property.id]).toEqual(["Erie"]);
        expect(values[otherRecord.id][property.id]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "ltv";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[record.id][property.id]).toEqual([259.12]);
        expect(values[otherRecord.id][property.id]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[record.id][property.id]).toEqual([true]);
        expect(values[otherRecord.id][property.id]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "date";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });

        expect(
          (<Date[]>values[record.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-01T00:00:00.000").toISOString());

        expect(
          (<Date[]>values[otherRecord.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-02T00:00:00.000").toISOString());
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          (<Date[]>values[record.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-01T12:13:14.000").toISOString());
        expect(
          (<Date[]>values[otherRecord.id][property.id])[0].toISOString()
        ).toEqual(new Date("2020-02-02T12:13:14.000").toISOString());
      });
    });
  });

  describe("secondary tables", () => {
    const sourceMapping = { record_id: "userId" };
    beforeAll(() => {
      sourceOptions = {
        table: purchasesTableName,
      };
    });

    describe("purchases by date", () => {
      const column = "purchase";
      const sortColumn = "stamp";

      test("most recent", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sortColumn,
          sourceMapping,
          aggregationMethod: AggregationMethod.MostRecentValue,
        });
        expect(values[record.id][property.id][0]).toEqual("Orange");
        expect(values[otherRecord.id][property.id][0]).toEqual("Apple");
        expect(values[fourthRecord.id][property.id][0]).toEqual("Watermelon");
      });

      test("least recent", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sortColumn,
          sourceMapping,
          aggregationMethod: AggregationMethod.LeastRecentValue,
        });
        expect(values[record.id][property.id][0]).toEqual("Apple");
        expect(values[otherRecord.id][property.id][0]).toEqual("Pear");
        expect(values[fourthRecord.id][property.id][0]).toEqual("Blueberry");
      });

      test("Exact + Array works as intended", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod: AggregationMethod.Exact,
          },
          null,
          true
        );

        expect(values[record.id][property.id]).toEqual([
          "Apple",
          "Orange",
          "Blueberry",
          "Apple",
          "Blueberry",
          "Orange",
        ]);
        expect(values[otherRecord.id][property.id]).toEqual([
          "Pear",
          "Apple",
          "Apple",
          "Pear",
          "Apple",
        ]);
        expect(values[fourthRecord.id][property.id]).toEqual([
          "Blueberry",
          "Pear",
          "Apple",
          "Watermelon",
          "Peach",
        ]);
      });
    });

    describe("numbers", () => {
      const column = "amount";
      test("average", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "average",
        });

        expect(fixedLengthFloat(values[record.id][property.id][0])).toEqual(
          1.73
        );
        expect(
          fixedLengthFloat(values[otherRecord.id][property.id][0])
        ).toEqual(1.88);
        expect(values[thirdRecord.id]).toBeUndefined();
      });
      test("count", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(values[record.id][property.id]).toEqual([6]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("sum", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(fixedLengthFloat(values[record.id][property.id][0])).toEqual(
          10.38
        );
        expect(
          fixedLengthFloat(values[otherRecord.id][property.id][0])
        ).toEqual(9.38);
        expect(
          fixedLengthFloat(values[thirdRecord.id][property.id][0])
        ).toEqual(0);
      });
      test("min", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(values[record.id][property.id]).toEqual([1.42]);
        expect(values[otherRecord.id][property.id]).toEqual([0.78]);
        expect(values[thirdRecord.id]).toBeUndefined();
      });
      test("max", async () => {
        const [values, property] = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(values[record.id][property.id]).toEqual([2.23]);
        expect(values[otherRecord.id][property.id]).toEqual([3.14]);
        expect(values[thirdRecord.id]).toBeUndefined();
      });

      describe("dates", () => {
        const column = "date";
        test("count", async () => {
          const [values, property] = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(values[record.id][property.id]).toEqual([6]);
          expect(values[otherRecord.id][property.id]).toEqual([5]);
          expect(values[thirdRecord.id][property.id]).toEqual([0]);
        });
        test("min", async () => {
          const [values, property] = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(
            (<Date[]>values[record.id][property.id])[0].toISOString()
          ).toEqual(new Date("2020-02-01T00:00:00.000").toISOString());
          expect(
            (<Date[]>values[otherRecord.id][property.id])[0].toISOString()
          ).toEqual(new Date("2020-02-02T00:00:00.000").toISOString());
          expect(values[thirdRecord.id]).toBeUndefined();
        });
        test("max", async () => {
          const [values, property] = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(
            (<Date[]>values[record.id][property.id])[0].toISOString()
          ).toEqual(new Date("2020-02-20T00:00:00.000").toISOString());
          expect(
            (<Date[]>values[otherRecord.id][property.id])[0].toISOString()
          ).toEqual(new Date("2020-02-19T00:00:00.000").toISOString());
          expect(values[thirdRecord.id]).toBeUndefined();
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { record_id: "userId" };
    const column = "amount";
    const aggregationMethod = "count";
    beforeAll(() => {
      sourceOptions = {
        table: purchasesTableName,
      };
    });
    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 15 }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: new Date("2020-02-15T00:00:00") }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: new Date("2020-02-15 12:13:14") }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: 1.54 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([1]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });

    describe("does not equal", () => {
      const op = "ne";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 15 }]
        );
        expect(values[record.id][property.id]).toEqual([5]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][property.id]).toEqual([4]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[record.id][property.id]).toEqual([6]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: new Date("2020-02-15 00:00") }]
        );
        expect(values[record.id][property.id]).toEqual([5]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: new Date("2020-02-15 12:13:14") }]
        );
        expect(values[record.id][property.id]).toEqual([5]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: 1.54 }]
        );
        expect(values[record.id][property.id]).toEqual([4]);
        expect(values[otherRecord.id][property.id]).toEqual([4]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });

    describe("contains", () => {
      const op = "substring";
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "App" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "app" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });

    describe("does not contain", () => {
      const op = "notSubstring";
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Oran" }]
        );
        expect(values[record.id][property.id]).toEqual([4]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "oran" }]
        );
        expect(values[record.id][property.id]).toEqual([4]);
        expect(values[otherRecord.id][property.id]).toEqual([5]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });

    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 15 }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: new Date("2020-02-15 00:00") }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: new Date("2020-02-15 12:13:14") }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: 1.54 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([1]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });

    describe("greater than", () => {
      const op = "gt";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 15 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][property.id]).toEqual([4]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[record.id] ? values[record.id][property.id].length : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: new Date("2020-02-15 00:00") }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: new Date("2020-02-15 12:13:14") }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: 1.54 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });

    describe("less than", () => {
      const op = "lt";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 15 }]
        );
        expect(values[record.id][property.id]).toEqual([3]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[record.id] ? values[record.id][property.id].length : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: new Date("2020-02-15 00:00") }]
        );
        expect(values[record.id][property.id]).toEqual([3]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: new Date("2020-02-15 12:13:14") }]
        );
        expect(values[record.id][property.id]).toEqual([3]);
        expect(values[otherRecord.id][property.id]).toEqual([3]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: 1.54 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
        expect(values[thirdRecord.id][property.id]).toEqual([0]);
      });
    });
  });

  describe("filters (nested)", () => {
    const sourceMapping = { id: "userId" };
    const column = "properties.mag";
    const aggregationMethod = "count";
    beforeAll(() => {
      sourceOptions = {
        table: locationsTableName,
      };
    });
    describe("equals", () => {
      const op = "eq";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.gap", match: 85 }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "earthquake" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "Earthquake" }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [
            {
              op,
              key: "properties.updated",
              match: new Date("2021-03-23T00:04:07.183Z"),
            },
          ]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.mag", match: 2.79 }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([1]);
      });
    });

    describe("does not equal", () => {
      const op = "ne";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 1 }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "apple" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "Apple" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [
            {
              op,
              key: "properties.updated",
              match: new Date("2021-03-23T00:04:07.183Z"),
            },
          ]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.mag", match: 2.79 }]
        );
        expect(values[record.id][property.id]).toEqual([1]);
        expect(values[otherRecord.id][property.id]).toEqual([1]);
      });
    });

    describe("contains", () => {
      const op = "substring";
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "earth" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "Earth" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
    });

    describe("does not contain", () => {
      const op = "notSubstring";
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "Oran" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "oran" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
    });

    describe("greater than", () => {
      const op = "gt";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 1 }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "earthquake" }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[record.id] ? values[record.id][property.id].length : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [
            {
              op,
              key: "properties.updated",
              match: new Date("2020-03-22T21:04:07"),
            },
          ]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.mag", match: 1.54 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
    });

    describe("less than", () => {
      const op = "lt";
      test("integer", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: 15 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "z" }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.type", match: "Z" }]
        );
        expect(values[record.id][property.id]).toEqual([0]);
        expect(values[otherRecord.id][property.id]).toEqual([0]);
      });
      test("date", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [
            {
              op,
              key: "properties.updated",
              match: new Date("2021-03-23T21:04:07"),
            },
          ]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
      test("float", async () => {
        const [values, property] = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "properties.mag", match: 100.54 }]
        );
        expect(values[record.id][property.id]).toEqual([2]);
        expect(values[otherRecord.id][property.id]).toEqual([2]);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });
    test("unknown record property", async () => {
      const [values, property] = await getPropertyValues({
        column: "first_name",
        sourceMapping: { id: "badName" },
        aggregationMethod: "exact",
      });
      expect(values[record.id]).toBeUndefined();
      expect(values[otherRecord.id]).toBeUndefined();
      expect(values[thirdRecord.id]).toBeUndefined();
    });
    test("null record property", async () => {
      const [values, property] = await getPropertyValues({
        column: "first_name",
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
