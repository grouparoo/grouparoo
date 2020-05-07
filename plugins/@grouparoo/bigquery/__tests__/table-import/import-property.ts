// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/bigquery": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { profileProperty } from "../../src/lib/table-import/profileProperty";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { SimpleAppOptions, Profile } from "@grouparoo/core";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-import-property.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-import-property");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let profile: Profile;

let actionhero;

let sourceOptions;
async function getPropertyValue(
  { column, sourceMapping, aggregationMethod },
  useProfilePropertyRuleFilters?,
  useProfile?: Profile
) {
  const profilePropertyRuleOptions = {
    column,
    "aggregation method": aggregationMethod,
  };

  if (!useProfile) {
    useProfile = profile;
  }

  const profilePropertyRuleFilters = useProfilePropertyRuleFilters || [];

  return profileProperty({
    appOptions,
    profile: useProfile,
    sourceOptions,
    profilePropertyRuleOptions,
    sourceMapping,
    profilePropertyRuleFilters,
    source: null,
    app: null,
    profilePropertyRule: null,
  });
}

describe("bigquery/table/profileProperty", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    // all of these are in in the test plugin
    await helper.factories.profilePropertyRules();

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: 1,
      email: "ejervois0@example.com",
    });
    expect(profile.guid).toBeTruthy();
  });

  describe("exact primary tables", () => {
    let aggregationMethod = "exact";
    beforeAll(() => {
      sourceOptions = { table: "profiles" };
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
        expect(value).toBe("Erie");
      });
      test("to get a float", async () => {
        const column = "ltv";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe(259.12);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe(true);
      });
      test("to get a date", async () => {
        const column = "date";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe("2020-02-01");
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe("2020-02-01T12:13:14.000Z");
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
        expect(value).toBe("Erie");
      });
      test("to get a float", async () => {
        const column = "ltv";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe(259.12);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe(true);
      });
      test("to get a date", async () => {
        const column = "date";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe("2020-02-01");
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(value).toBe("2020-02-01T12:13:14.000Z");
      });
    });
  });

  describe("secondary tables", () => {
    const sourceMapping = { profile_id: "userId" };
    beforeAll(() => {
      sourceOptions = { table: "purchases" };
    });

    describe("numbers", () => {
      const column = "amount";
      test("average", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "average",
        });
        expect(value).toBe(1.73);
      });
      test("count", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(value).toBe(6);
      });
      test("sum", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(value).toBe(10.38);
      });
      test("min", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(value).toBe(1.42);
      });
      test("max", async () => {
        const value = await getPropertyValue({
          column,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(value).toBe(2.23);
      });

      describe("dates", () => {
        const column = "date";
        test("count", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(value).toBe(6);
        });
        test("min", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(value).toBe("2020-02-01");
        });
        test("max", async () => {
          const value = await getPropertyValue({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(value).toBe("2020-02-20");
        });
      });
    });
  });

  describe("filters", () => {
    const sourceMapping = { profile_id: "userId" };
    const column = "amount";
    const aggregationMethod = "count";
    beforeAll(() => {
      sourceOptions = { table: "purchases" };
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
        expect(value).toBe(1);
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
        expect(value).toBe(2);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toBe(0);
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
        expect(value).toBe(1);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
        );
        expect(value).toBe(1);
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
        expect(value).toBe(2);
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
        expect(value).toBe(5);
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
        expect(value).toBe(4);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toBe(6);
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
        expect(value).toBe(5);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
        );
        expect(value).toBe(5);
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
        expect(value).toBe(4);
      });
    });

    describe("contains", () => {
      const op = "contains";
      test("integer", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "id", match: "15" }]
          )
        ).rejects.toThrow();
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
        expect(value).toBe(2);
      });
      test("string is not case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "app" }]
        );
        expect(value).toBe(2);
      });
      test("date", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "stamp", match: "2020-02-15" }]
          )
        ).rejects.toThrow();
      });
      test("timestamp", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
          )
        ).rejects.toThrow();
      });
      test("float", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "amount", match: "1.54" }]
          )
        ).rejects.toThrow();
      });
    });

    describe("does not contain", () => {
      const op = "does not contain";
      test("integer", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "id", match: "15" }]
          )
        ).rejects.toThrow();
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
        expect(value).toBe(4);
      });
      test("string is not case sensitive", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "oran" }]
        );
        expect(value).toBe(4);
      });
      test("date", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "date", match: "2020-02-15" }]
          )
        ).rejects.toThrow();
      });
      test("timestamp", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
          )
        ).rejects.toThrow();
      });
      test("float", async () => {
        await expect(
          getPropertyValue(
            {
              column,
              sourceMapping,
              aggregationMethod,
            },
            [{ op, key: "amount", match: "1.54" }]
          )
        ).rejects.toThrow();
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
        expect(value).toBe(1);
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
        expect(value).toBe(2);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(value).toBe(0);
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
        expect(value).toBe(1);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
        );
        expect(value).toBe(1);
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
        expect(value).toBe(2);
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
        expect(value).toBe(2);
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
        expect(value).toBe(4);
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
        expect(value).toBe(0);
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
        expect(value).toBe(2);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
        );
        expect(value).toBe(2);
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
        expect(value).toBe(2);
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
        expect(value).toBe(3);
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
        expect(value).toBe(0);
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
        expect(value).toBe(6); // weird ascii math
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
        expect(value).toBe(3);
      });
      test("timestamp", async () => {
        const value = await getPropertyValue(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
        );
        expect(value).toBe(3);
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
        expect(value).toBe(2);
      });
    });
  });
});
