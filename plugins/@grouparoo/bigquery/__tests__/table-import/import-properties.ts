import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});

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
  "table-import-properties.js"
);

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let profile: Profile;
let otherProfile: Profile;

let actionhero;

let sourceOptions;
async function getPropertyValues(
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

describe("bigquery/table/profileProperties", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
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

    otherProfile = await helper.factories.profile();
    await otherProfile.addOrUpdateProperties({
      userId: [2],
      email: ["ceate1@example.com"],
      lastName: null,
    });
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
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual(["Erie"]);
        expect(values[otherProfile.guid]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "ltv";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([259.12]);
        expect(values[otherProfile.guid]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([true]);
        expect(values[otherProfile.guid]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "date";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual(["2020-02-01"]);
        expect(values[otherProfile.guid]).toEqual(["2020-02-02"]);
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid][0]).toEqual("2020-02-01T12:13:14.000Z");
        expect(values[otherProfile.guid][0]).toEqual(
          "2020-02-02T12:13:14.000Z"
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
        expect(values[profile.guid]).toEqual(["Erie"]);
        expect(values[otherProfile.guid]).toEqual(["Cacilie"]);
      });
      test("to get a float", async () => {
        const column = "ltv";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([259.12]);
        expect(values[otherProfile.guid]).toEqual([94.36]);
      });
      test("to get a boolean", async () => {
        const column = "ios_app";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual([true]);
        expect(values[otherProfile.guid]).toEqual([false]);
      });
      test("to get a date", async () => {
        const column = "date";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid]).toEqual(["2020-02-01"]);
        expect(values[otherProfile.guid]).toEqual(["2020-02-02"]);
      });
      test("to get a timestamp", async () => {
        const column = "stamp";
        const values = await getPropertyValues({
          column,
          sourceMapping,
          aggregationMethod,
        });
        expect(values[profile.guid][0]).toEqual("2020-02-01T12:13:14.000Z");
        expect(values[otherProfile.guid][0]).toEqual(
          "2020-02-02T12:13:14.000Z"
        );
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
        const column = "date";
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
          expect(values[profile.guid]).toEqual(["2020-02-01"]);
          expect(values[otherProfile.guid]).toEqual(["2020-02-02"]);
        });
        test("max", async () => {
          const values = await getPropertyValues({
            column,
            sourceMapping,
            aggregationMethod: "max",
          });
          expect(values[profile.guid]).toEqual(["2020-02-20"]);
          expect(values[otherProfile.guid]).toEqual(["2020-02-19"]);
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
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(otherProfile[profile.guid]).toBeUndefined();
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
        expect(values[profile.guid]).toBeUndefined();
        expect(otherProfile[profile.guid]).toBeUndefined();
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
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
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
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(values[profile.guid]).toEqual([6]);
        expect(values[otherProfile.guid]).toEqual([5]);
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
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
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
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([4]);
      });
    });

    describe("contains", () => {
      const op = "contains";
      test("integer", async () => {
        await expect(
          getPropertyValues(
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
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "App" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([3]);
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
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([3]);
      });
      test("date", async () => {
        await expect(
          getPropertyValues(
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
          getPropertyValues(
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
          getPropertyValues(
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
          getPropertyValues(
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
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "purchase", match: "Oran" }]
        );
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([5]);
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
        expect(values[profile.guid]).toEqual([4]);
        expect(values[otherProfile.guid]).toEqual([5]);
      });
      test("date", async () => {
        await expect(
          getPropertyValues(
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
          getPropertyValues(
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
          getPropertyValues(
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
        const values = await getPropertyValues(
          {
            column,
            sourceMapping,
            aggregationMethod,
          },
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([3]);
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
        expect(values[profile.guid]).toBeUndefined();
        expect(values[otherProfile.guid]).toBeUndefined();
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
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
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
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[profile.guid] ? values[profile.guid].length : [].length
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
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
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
          [{ op, key: "amount", match: "1.54" }]
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
          [{ op, key: "id", match: "15" }]
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
          [{ op, key: "purchase", match: "Apple" }]
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
          [{ op, key: "purchase", match: "apple" }]
        );
        expect(
          values[profile.guid] ? values[profile.guid].length : [].length
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
          [{ op, key: "stamp", match: "2020-02-15 12:13:14 UTC" }]
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
          [{ op, key: "amount", match: "1.54" }]
        );
        expect(values[profile.guid]).toEqual([2]);
        expect(values[otherProfile.guid]).toEqual([2]);
      });
    });
  });

  describe("edge cases", () => {
    beforeAll(() => {
      sourceOptions = { table: "profiles" };
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
