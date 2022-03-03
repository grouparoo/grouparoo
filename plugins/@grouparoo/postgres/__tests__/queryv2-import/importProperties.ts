import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Property,
  SimplePropertyOptions,
  SimpleSourceOptions,
  SourceMapping,
} from "@grouparoo/core";

import {
  beforeData,
  afterData,
  getConfig,
  usersSourceQuery,
  accountsSourceQuery,
} from "../utils/data";

import { getConnection } from "../../src/lib/queryv2-import/connection";
import { PostgresPoolClient } from "../../src/lib/connect";
const recordProperties = getConnection().methods.recordProperties;

// these used and set by test
const { appOptions, purchasesSourceQuery } = getConfig();
let record: GrouparooRecord;
let otherRecord: GrouparooRecord;
let thirdRecord: GrouparooRecord;
let fourthRecord: GrouparooRecord;
let emailProperty: Property;
let firstNameProperty: Property;
let lastNameProperty: Property;
let client: PostgresPoolClient;

let sourceOptions: SimpleSourceOptions;
async function getPropertyValues({
  columns,
  sourceMapping,
}: {
  columns: string[];
  sourceMapping: SourceMapping;
}) {
  const arrays = await getPropertyArrays({
    columns,
    sourceMapping,
  });
  return arrays;
}
async function getPropertyArrays({
  columns,
  sourceMapping,
}: {
  columns: string[];
  sourceMapping: SourceMapping;
}): Promise<[any, any]> {
  // TODO: Correct type above
  const properties = [
    emailProperty,
    firstNameProperty,
    lastNameProperty,
  ].filter((p, idx) => columns.length > idx);

  let counter = 0;
  const propertyOptions: Record<string, SimplePropertyOptions> = {};
  for (const property of properties) {
    propertyOptions[property.id] = {
      column: columns[counter],
    };
    counter++;
  }

  const propertyFilters: any = { [properties[0].id]: [] };

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

describe("postgres/queryv2/recordProperties", () => {
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

  describe("exact primary", () => {
    beforeAll(() => {
      sourceOptions = { query: usersSourceQuery };
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
          });
          expect(values[record.id][properties[0].id]).toEqual(["Erie"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual(["Cacilie"]);
        });

        test("to get multiple values with a string", async () => {
          const columns = ["first_name", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
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
          });
          expect(values[record.id][properties[0].id]).toEqual([259.12]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([94.36]);
        });

        test("to get multiple values with a float", async () => {
          const columns = ["ltv", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
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
          });
          expect(values[record.id][properties[0].id]).toEqual([true]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([false]);
        });

        test("to get a multiple values with a boolean", async () => {
          const columns = ["ios_app", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
          });
          expect(values[record.id][properties[0].id]).toEqual([true]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([false]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a date", async () => {
          const columns = ["date"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
          });
          expect(values[record.id][properties[0].id]).toEqual(["2020-02-01"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([
            "2020-02-02",
          ]);
        });

        test("to get a date multiple values with a date", async () => {
          const columns = ["date", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
          });
          expect(values[record.id][properties[0].id]).toEqual(["2020-02-01"]);
          expect(values[otherRecord.id][properties[0].id]).toEqual([
            "2020-02-02",
          ]);
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });

        test("to get a timestamp", async () => {
          const columns = ["stamp"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
          });
          expect(
            (<Date[]>values[record.id][properties[0].id])[0].toISOString()
          ).toEqual("2020-02-01T12:13:14.000Z");
          expect(
            (<Date[]>values[otherRecord.id][properties[0].id])[0].toISOString()
          ).toEqual("2020-02-02T12:13:14.500Z");
        });

        test("to get multiple values with a timestamp", async () => {
          const columns = ["stamp", "last_name"];
          const [values, properties] = await getPropertyValues({
            columns,
            sourceMapping,
          });
          expect(
            (<Date[]>values[record.id][properties[0].id])[0].toISOString()
          ).toEqual("2020-02-01T12:13:14.000Z");
          expect(
            (<Date[]>values[otherRecord.id][properties[0].id])[0].toISOString()
          ).toEqual("2020-02-02T12:13:14.500Z");
          expect(values[record.id][properties[1].id]).toEqual(["Jervois"]);
          expect(values[otherRecord.id][properties[1].id]).toEqual(["Eate"]);
        });
      });
    }
  });

  describe("secondary sources", () => {
    const sourceMapping = { record_id: "userId" };
    beforeAll(() => {
      sourceOptions = { query: purchasesSourceQuery };
    });

    describe("purchases", () => {
      const columns = ["purchase"];

      test("Exact + Array works as intended", async () => {
        const { isArray } = emailProperty;
        emailProperty.isArray = true;
        const [values, properties] = await getPropertyValues({
          columns,
          sourceMapping,
        });
        expect(values[record.id][properties[0].id]).toEqual([
          "Apple",
          "Orange",
          "Blueberry",
          "Apple",
          "Blueberry",
          "Orange",
          null,
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
      await accountId.setOptions({ column: "account_id" });
      await accountId.update({ state: "ready" });
    });

    beforeAll(() => {
      sourceOptions = { query: accountsSourceQuery };
    });

    test("it will not import if the dependency is not ready", async () => {
      const [values] = await getPropertyValues({
        columns: ["name"],
        sourceMapping: { id: "accountId" },
      });
      expect(values).toEqual({});
    });

    test("it will import properties when the dependency is ready", async () => {
      await record.addOrUpdateProperties({ accountId: [1] });
      await otherRecord.addOrUpdateProperties({ accountId: [1] });

      const [values, properties] = await getPropertyValues({
        columns: ["name"],
        sourceMapping: { id: "accountId" },
      });
      expect(values[record.id][properties[0].id]).toEqual(["super_mega_corp"]);
      expect(values[otherRecord.id][properties[0].id]).toEqual([
        "super_mega_corp",
      ]);
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { query: usersSourceQuery };
    });
    test("unknown record property", async () => {
      const [values] = await getPropertyValues({
        columns: ["first_name"],
        sourceMapping: { id: "badName" },
      });
      expect(values[record.id]).toBeUndefined();
      expect(values[otherRecord.id]).toBeUndefined();
      expect(values[thirdRecord.id]).toBeUndefined();
    });
    test("null record property", async () => {
      const [values] = await getPropertyValues({
        columns: ["first_name"],
        sourceMapping: { id: "lastName" }, // set to NULL
      });
      expect(values[record.id]).toBeUndefined();
      expect(values[otherRecord.id]).toBeUndefined();
      expect(values[thirdRecord.id]).toBeUndefined();
    });
  });
});
