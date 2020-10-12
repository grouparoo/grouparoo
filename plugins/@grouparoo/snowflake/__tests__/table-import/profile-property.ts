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
  plugin,
  SimpleAppOptions,
  Profile,
  ProfilePropertyRule,
} from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const profileProperty = getConnection().methods.profileProperty;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-profile-property.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-profile-property");
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
  const connection = await connect({ appOptions, app: null, appGuid: null });
  const profilePropertyRule = await ProfilePropertyRule.findOne({
    where: { key: "email" },
  });

  return profileProperty({
    connection,
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

describe("snowflake/table/profileProperty", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    jest.setTimeout(1000 * 10);
    // all of these are in in the test plugin
    await helper.factories.profilePropertyRules();

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.guid).toBeTruthy();
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
      const op = "does not equal";
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
      const op = "contains";
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
      const op = "does not contain";
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
      const op = "equals";
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
      const op = "greater than";
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
      const op = "less than";
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
});
