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
const profileProperties = getConnection().methods.profileProperties;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-profile-properties.js"
);

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

let profile: Profile;
let otherProfile: Profile;
let actionhero;
let sourceOptions;
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

async function getPropertyValues(
  { column, sourceMapping, aggregationMethod },
  useProfilePropertyRuleFilters?
) {
  const arrays = await getPropertyArrays(
    { column, sourceMapping, aggregationMethod },
    useProfilePropertyRuleFilters
  );
  return arrays;
}
async function getPropertyArrays(
  { column, sourceMapping, aggregationMethod },
  useProfilePropertyRuleFilters?
) {
  const profilePropertyRuleOptions = {
    column,
    "aggregation method": aggregationMethod,
  };

  const profilePropertyRuleFilters = useProfilePropertyRuleFilters || [];
  const connection = await connect({ appOptions, app: null, appGuid: null });
  const profilePropertyRule = await ProfilePropertyRule.findOne({
    where: { key: "email" },
  });

  return profileProperties({
    connection,
    appOptions,
    profiles: [profile, otherProfile],
    sourceOptions,
    profilePropertyRuleOptions,
    sourceMapping,
    profilePropertyRuleFilters,
    profilePropertyRule,
    profileGuids: [profile.guid, otherProfile.guid],
    source: null,
    sourceGuid: null,
    app: null,
    appGuid: null,
    profilePropertyRuleGuid: null,
  });
}

describe("snowflake/table/profileProperties", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, helper.setupTime);

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

    otherProfile = await helper.factories.profile();
    await otherProfile.addOrUpdateProperties({
      userId: [2],
      email: ["ceate1@example.com"],
      lastName: null,
    });
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
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
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual(["Erie"]);
        expect(values[otherProfile.guid]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "LTV";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([259.12]);
        expect(values[otherProfile.guid]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "IOS_APP";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([true]);
        expect(values[otherProfile.guid]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "DATE";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          values[profile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-01T00:00:00.000Z"]);
        expect(
          values[otherProfile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-02T00:00:00.000Z"]);
      });
      test("to get a timestamp", async () => {
        const column = "STAMP";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          values[profile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-01T12:13:14.000Z"]);
        expect(
          values[otherProfile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-02T12:13:14.000Z"]);
      });
    });

    describe("string mapping", () => {
      const sourceMapping = { EMAIL: "email" };
      test("to get a string", async () => {
        const column = "FIRST_NAME";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual(["Erie"]);
        expect(values[otherProfile.guid]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "LTV";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([259.12]);
        expect(values[otherProfile.guid]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "IOS_APP";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([true]);
        expect(values[otherProfile.guid]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "DATE";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          values[profile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-01T00:00:00.000Z"]);
        expect(
          values[otherProfile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-02T00:00:00.000Z"]);
      });
      test("to get a timestamp", async () => {
        const column = "STAMP";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(
          values[profile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-01T12:13:14.000Z"]);
        expect(
          values[otherProfile.guid].map((v) => (<Date>v).toISOString())
        ).toEqual(["2020-02-02T12:13:14.000Z"]);
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
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "average",
        });
        expect(fixedLengthFloat(values[profile.guid][0])).toEqual(1.73);
        expect(fixedLengthFloat(values[otherProfile.guid][0])).toEqual(1.88);
      });
      test("count", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "count",
        });
        expect(values[profile.guid]).toEqual([6]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("sum", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "sum",
        });
        expect(fixedLengthFloat(values[profile.guid][0])).toEqual(10.38);
        expect(fixedLengthFloat(values[otherProfile.guid][0])).toEqual(9.38);
      });
      test("min", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "min",
        });
        expect(values[profile.guid]).toEqual([1.42]);
        expect(values[otherProfile.guid]).toEqual([0.78]);
      });
      test("max", async () => {
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod: "max",
        });
        expect(values[profile.guid]).toEqual([2.23]);
        expect(values[otherProfile.guid]).toEqual([3.14]);
      });

      describe("dates", () => {
        const column = "DATE";
        test("count", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "count",
          });
          expect(values[profile.guid]).toEqual([6]);
          expect(values[otherProfile.guid]).toEqual([5]);
        });
        test("min", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "min",
          });
          expect(
            values[profile.guid].map((v) => (<Date>v).toISOString())
          ).toEqual(["2020-02-01T00:00:00.000Z"]);
          expect(
            values[otherProfile.guid].map((v) => (<Date>v).toISOString())
          ).toEqual(["2020-02-02T00:00:00.000Z"]);
        });
        test("max", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(
            values[profile.guid].map((v) => (<Date>v).toISOString())
          ).toEqual(["2020-02-20T00:00:00.000Z"]);
          expect(
            values[profile.guid].map((v) => (<Date>v).toISOString())
          ).toEqual(["2020-02-20T00:00:00.000Z"]);
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
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(otherProfile[profile.guid]).toBeUndefined();
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[profile.guid]).toBeUndefined();
        expect(otherProfile[profile.guid]).toBeUndefined();
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(otherProfile[profile.guid]).toBeUndefined();
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(otherProfile[profile.guid]).toBeUndefined();
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([5]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[profile.guid]).toEqual([6]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([5]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([5]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([4]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "App" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("string is not case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "app" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([1]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([5]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Oran" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("string is not case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "oran" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([5]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([5]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([4]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("string is case sensitive", async () => {
        // TODO: is this the right behavior?
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[profile.guid]).toBeUndefined();
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([1]);
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([1]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[profile.guid]).toBeUndefined();
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([2]);
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
          [{ op, key: "ID", match: "15" }]
        );
        expect(values[profile.guid]).toEqual([3]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("string", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "Apple" }]
        );
        expect(values[profile.guid]).toBeUndefined();
        expect(values[otherProfile.guid]).toBeUndefined();
      });
      test("string is case sensitive", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "PURCHASE", match: "apple" }]
        );
        expect(values[profile.guid]).toEqual([6]); // weird ascii math
        expect(values[otherProfile.guid]).toEqual([5]); // weird ascii math
      });
      test("DATE", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "DATE", match: "2020-02-15" }]
        );
        expect(values[profile.guid]).toEqual([3]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("timestamp", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "STAMP", match: "2020-02-15 12:13:14" }]
        );
        expect(values[profile.guid]).toEqual([3]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("float", async () => {
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "AMOUNT", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: "PROFILES" };
    });
    test("unknown profile property", async () => {
      const values = await getPropertyValues({
        column: "first_name",
        sourceMapping: { id: "badName" },
        aggregationMethod: "exact",
      });
      expect(values[profile.guid]).toBeUndefined();
      expect(values[otherProfile.guid]).toBeUndefined();
    });
    test("null profile property", async () => {
      const values = await getPropertyValues({
        column: "first_name",
        sourceMapping: { id: "lastName" }, // set to NULL
        aggregationMethod: "exact",
      });
      expect(values[profile.guid]).toBeUndefined();
      expect(values[otherProfile.guid]).toBeUndefined();
    });
  });
});

function fixedLengthFloat(value: any, decimalDigits = 2) {
  return parseFloat(parseFloat(value.toString()).toFixed(decimalDigits));
}
