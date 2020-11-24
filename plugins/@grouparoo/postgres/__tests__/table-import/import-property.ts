import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { plugin, Profile, ProfilePropertyRule } from "@grouparoo/core";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const profileProperty = getConnection().methods.profileProperty;

// these used and set by test
const { appOptions, usersTableName, purchasesTableName } = getConfig();
let profile: Profile;

let actionhero, client;

let sourceOptions;
async function getPropertyValue(
  { column, sourceMapping, aggregationMethod },
  useProfilePropertyRuleFilters?,
  useProfile?: Profile
) {
  const array = await getPropertyArray(
    { column, sourceMapping, aggregationMethod },
    useProfilePropertyRuleFilters,
    useProfile
  );
  return array ? array[0] : array;
}
async function getPropertyArray(
  { column, sourceMapping, aggregationMethod },
  useProfilePropertyRuleFilters?,
  useProfile?: Profile
) {
  const profilePropertyRuleOptions = {
    column,
    aggregationMethod: aggregationMethod,
  };

  if (!useProfile) {
    useProfile = profile;
  }

  const profilePropertyRuleFilters = useProfilePropertyRuleFilters || [];
  const profilePropertyRule = await ProfilePropertyRule.findOne({
    where: { key: "email" },
  });

  return profileProperty({
    connection: client,
    appOptions,
    profile: useProfile,
    sourceOptions,
    profilePropertyRuleOptions,
    sourceMapping,
    profilePropertyRuleFilters,
    profilePropertyRule,
    profileGuid: null,
    source: null,
    sourceGuid: null,
    app: null,
    appGuid: null,
    profilePropertyRuleGuid: null,
  });
}

describe("postgres/table/profileProperty", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, helper.setupTime);

  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  beforeAll(async () => {
    jest.setTimeout(helper.mediumTime);
    // all of these are in in the test plugin
    await helper.factories.profilePropertyRules();

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
      lastName: null,
    });
    expect(profile.guid).toBeTruthy();
  });

  afterAll(async () => {
    await afterData();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });
  describe("exact primary tables", () => {
    let aggregationMethod = "exact";
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
    const sourceMapping = { profile_id: "userId" };
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
        expect(fixedLengthFloat(value)).toEqual(1.73);
      });
      test("count", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(value).toEqual(6);
      });
      test("sum", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(fixedLengthFloat(value)).toEqual(10.38);
      });
      test("min", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(value).toEqual(1.42);
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
          expect(value).toEqual(6);
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
    const sourceMapping = { profile_id: "userId" };
    const column = "amount";
    const aggregationMethod = "count";
    beforeAll(() => {
      sourceOptions = { table: purchasesTableName };
    });
    // export interface ProfilePropertyRuleFiltersWithKey {
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
      const op = "does not equal";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(5);
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
        expect(value).toEqual(5);
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
        expect(value).toEqual(5);
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
        expect(value).toEqual(4);
      });
    });

    describe("contains", () => {
      const op = "contains";
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
      const op = "does not contain";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(5);
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
        expect(value).toEqual(5);
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
        expect(value).toEqual(5);
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
        expect(value).toEqual(4);
      });
    });

    describe("equals", () => {
      const op = "equals";
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

    describe("greater than", () => {
      const op = "greater than";
      test("integer", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
        );
        expect(value).toEqual(2);
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
        expect(value).toEqual(2);
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
        expect(value).toEqual(2);
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
      const op = "less than";
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
        expect(value).toEqual(2);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: usersTableName };
    });
    test("unknown profile property", async () => {
      const value = await getPropertyValue({
        column: "first_name",
        sourceMapping: { id: "badName" },
        aggregationMethod: "exact",
      });
      expect(value).toEqual(undefined);
    });
    test("null profile property", async () => {
      const value = await getPropertyValue({
        column: "first_name",
        sourceMapping: { id: "lastName" }, // set to NULL
        aggregationMethod: "exact",
      });
      expect(value).toEqual(undefined);
    });
  });
});

function fixedLengthFloat(value: any, decimalDigits = 2) {
  return parseFloat(parseFloat(value.toString()).toFixed(decimalDigits));
}
