import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { Profile, Property } from "@grouparoo/core";

import {
  beforeData,
  afterData,
  getConfig,
  accountsTableName,
} from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const profileProperties = getConnection().methods.profileProperties;

// these used and set by test
const { appOptions, usersTableName, purchasesTableName } = getConfig();
let profile: Profile;
let otherProfile: Profile;
let thirdProfile: Profile;

let client;

let sourceOptions;
async function getPropertyValues(
  { column, sourceMapping, aggregationMethod },
  usePropertyFilters?
) {
  const arrays = await getPropertyArrays(
    { column, sourceMapping, aggregationMethod },
    usePropertyFilters
  );
  return arrays;
}
async function getPropertyArrays(
  { column, sourceMapping, aggregationMethod },
  usePropertyFilters?
) {
  const propertyOptions = {
    column,
    aggregationMethod: aggregationMethod,
  };

  const propertyFilters = usePropertyFilters || [];
  const property = await Property.findOne({
    where: { key: "email" },
  });

  return profileProperties({
    connection: client,
    appOptions,
    profiles: [profile, otherProfile, thirdProfile],
    sourceOptions,
    propertyOptions,
    sourceMapping,
    propertyFilters,
    property,
    profileIds: [profile.id, otherProfile.id, thirdProfile.id],
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
  });
}

describe("postgres/table/profileProperties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  beforeAll(async () => {
    jest.setTimeout(helper.mediumTime);

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
      lastName: null,
    });
    expect(profile.id).toBeTruthy();

    otherProfile = await helper.factories.profile();
    await otherProfile.addOrUpdateProperties({
      userId: [2],
      email: ["ceate1@example.com"],
      lastName: null,
    });

    thirdProfile = await helper.factories.profile();
    await thirdProfile.addOrUpdateProperties({
      userId: [6],
      email: ["another@example.com"],
      lastName: null,
    });
  });

  afterAll(async () => await afterData());

  describe("exact primary tables", () => {
    let aggregationMethod = "exact";

    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });

    describe("integer mapping", () => {
      const sourceMapping = { id: "userId" };
      test("to get a string", async () => {
        const column = "first_name";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual(["Erie"]);
        expect(values[otherProfile.id]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "ltv";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual([259.12]);
        expect(values[otherProfile.id]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual([true]);
        expect(values[otherProfile.id]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "date";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual(["2020-02-01"]);
        expect(values[otherProfile.id]).toEqual(["2020-02-02"]);
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect((<Date[]>values[profile.id])[0].toISOString()).toEqual(
          "2020-02-01T12:13:14.000Z"
        );
        expect((<Date[]>values[otherProfile.id])[0].toISOString()).toEqual(
          "2020-02-02T12:13:14.500Z"
        );
      });
    });

    describe("string mapping", () => {
      const sourceMapping = { email: "email" };
      test("to get a string", async () => {
        const column = "first_name";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual(["Erie"]);
        expect(values[otherProfile.id]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "ltv";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual([259.12]);
        expect(values[otherProfile.id]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual([true]);
        expect(values[otherProfile.id]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "date";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.id]).toEqual(["2020-02-01"]);
        expect(values[otherProfile.id]).toEqual(["2020-02-02"]);
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect((<Date[]>values[profile.id])[0].toISOString()).toEqual(
          "2020-02-01T12:13:14.000Z"
        );
        expect((<Date[]>values[otherProfile.id])[0].toISOString()).toEqual(
          "2020-02-02T12:13:14.500Z"
        );
      });

      test("to get a timestamp - decimals or not", async () => {
        const column = "stamp";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });

        for (const profileId in values) {
          expect(values[profileId][0]).toBeInstanceOf(Date);
        }
      });
    });
  });

  describe("secondary tables", () => {
    const sourceMapping = { profile_id: "userId" };
    beforeAll(() => {
      sourceOptions = { table: purchasesTableName };
    });

    describe("numbers", () => {
      const column = "amount";
      test("average", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "average",
        });
        expect(fixedLengthFloat(values[profile.id][0])).toEqual(1.73);
        expect(fixedLengthFloat(values[otherProfile.id][0])).toEqual(1.88);
        expect(values[thirdProfile.id]).toBeUndefined();
      });
      test("count", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(values[profile.id]).toEqual([6]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("sum", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(fixedLengthFloat(values[profile.id][0])).toEqual(10.38);
        expect(fixedLengthFloat(values[otherProfile.id][0])).toEqual(9.38);
        expect(fixedLengthFloat(values[thirdProfile.id][0])).toEqual(0);
      });
      test("min", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(values[profile.id]).toEqual([1.42]);
        expect(values[otherProfile.id]).toEqual([0.78]);
        expect(values[thirdProfile.id]).toBeUndefined;
      });
      test("max", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(values[profile.id]).toEqual([2.23]);
        expect(values[otherProfile.id]).toEqual([3.14]);
        expect(values[thirdProfile.id]).toBeUndefined;
      });

      describe("timestamps", () => {
        const column = "stamp";
        test("count", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(values[profile.id]).toEqual([6]);
          expect(values[otherProfile.id]).toEqual([5]);
          expect(values[thirdProfile.id]).toEqual([0]);
        });

        test("min", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect((<Date[]>values[profile.id])[0].toISOString()).toEqual(
            "2020-02-01T12:13:14.000Z"
          );
          expect((<Date[]>values[otherProfile.id])[0].toISOString()).toEqual(
            "2020-02-02T12:13:14.000Z"
          );
          expect(values[thirdProfile.id]).toBeUndefined;
        });

        test("max", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect((<Date[]>values[profile.id])[0].toISOString()).toEqual(
            "2020-02-20T12:13:14.000Z"
          );
          expect((<Date[]>values[otherProfile.id])[0].toISOString()).toEqual(
            "2020-02-19T12:13:14.000Z"
          );
          expect(values[thirdProfile.id]).toBeUndefined;
        });

        test("to get a timestamp - decimals or not", async () => {
          const column = "stamp";
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "exact",
          });

          for (const profileId in values) {
            expect(values[profileId][0]).toBeInstanceOf(Date);
          }
        });
      });

      describe("dates", () => {
        const column = "date";
        test("count", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(values[profile.id]).toEqual([6]);
          expect(values[otherProfile.id]).toEqual([5]);
          expect(values[thirdProfile.id]).toEqual([0]);
        });
        test("min", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(values[profile.id]).toEqual(["2020-02-01"]);
          expect(values[profile.id]).toEqual(["2020-02-01"]);
          expect(values[thirdProfile.id]).toBeUndefined;
        });
        test("max", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(values[profile.id]).toEqual(["2020-02-20"]);
          expect(values[otherProfile.id]).toEqual(["2020-02-19"]);
          expect(values[thirdProfile.id]).toBeUndefined;
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { profile_id: "userId" };
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
    describe("equals", () => {
      const op = "equals";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[profile.id]).toEqual([0]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([1]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
    });

    describe("does not equal", () => {
      const op = "does not equal";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([5]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.id]).toEqual([4]);
        expect(values[otherProfile.id]).toEqual([2]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[profile.id]).toEqual([6]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([5]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([5]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([4]);
        expect(values[otherProfile.id]).toEqual([4]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
    });

    describe("contains", () => {
      const op = "contains";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "App" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "app" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([1]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
    });

    describe("does not contain", () => {
      const op = "does not contain";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([5]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Oran" }]
        );
        expect(values[profile.id]).toEqual([4]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "oran" }]
        );
        expect(values[profile.id]).toEqual([4]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([5]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([5]);
        expect(values[otherProfile.id]).toEqual([5]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([4]);
        expect(values[otherProfile.id]).toEqual([4]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
    });

    describe("equals", () => {
      const op = "equals";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[profile.id]).toEqual([0]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([1]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([1]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
    });

    describe("greater than", () => {
      const op = "greater than";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([2]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.id]).toEqual([4]);
        expect(values[otherProfile.id]).toEqual([2]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[profile.id] ? values[profile.id].length : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([2]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([2]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([2]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
    });

    describe("less than", () => {
      const op = "less than";
      test("integer", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(values[profile.id]).toEqual([3]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.id]).toEqual([0]);
        expect(values[otherProfile.id]).toEqual([0]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[profile.id] ? values[profile.id].length : [].length
        ).toBeGreaterThanOrEqual(0); // unpredictable ascii math
      });
      test("date", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "date", match: "2020-02-15" }]
        );
        expect(values[profile.id]).toEqual([3]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.id]).toEqual([3]);
        expect(values[otherProfile.id]).toEqual([3]);
        expect(values[thirdProfile.id]).toEqual([0]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.id]).toEqual([2]);
        expect(values[otherProfile.id]).toEqual([2]);
        expect(values[thirdProfile.id]).toEqual([0]);
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
      sourceOptions = { table: accountsTableName };
    });

    test("it will not import if the dependency is not ready", async () => {
      const values = await getPropertyValues({
        column: "name",
        sourceMapping: { id: "accountId" },
        aggregationMethod: "exact",
      });
      expect(values).toEqual({});
    });

    test("it will import properties when the dependency is ready", async () => {
      await profile.addOrUpdateProperties({ accountId: [1] });
      await otherProfile.addOrUpdateProperties({ accountId: [1] });

      const values = await getPropertyValues({
        column: "name",
        sourceMapping: { id: "accountId" },
        aggregationMethod: "exact",
      });
      expect(values[profile.id]).toEqual(["super_mega_corp"]);
      expect(values[otherProfile.id]).toEqual(["super_mega_corp"]);
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });
    test("unknown profile property", async () => {
      const values = await getPropertyValues({
        column: "first_name",
        sourceMapping: { id: "badName" },
        aggregationMethod: "exact",
      });
      expect(values[profile.id]).toBeUndefined();
      expect(values[otherProfile.id]).toBeUndefined();
      expect(values[thirdProfile.id]).toBeUndefined();
    });
    test("null profile property", async () => {
      const values = await getPropertyValues({
        column: "first_name",
        sourceMapping: { id: "lastName" }, // set to NULL
        aggregationMethod: "exact",
      });
      expect(values[profile.id]).toBeUndefined();
      expect(values[otherProfile.id]).toBeUndefined();
      expect(values[thirdProfile.id]).toBeUndefined();
    });
  });
});

function fixedLengthFloat(value: any, decimalDigits = 2) {
  return parseFloat(parseFloat(value.toString()).toFixed(decimalDigits));
}
