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

import { loadAppOptions, rewriteNockEnv } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { SimpleAppOptions, Profile } from "@grouparoo/core";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-import-property.js"
);

// these comments to use nock
//const newNock = false;
//require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
// helper.recordNock(nockFile, rewriteNockEnv);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let profile: Profile;

let actionhero;

let sourceOptions;
async function getPropertyValue(
  { column, sourceMapping, aggregationMethod },
  useProfile?: Profile
) {
  const profilePropertyRuleOptions = {
    column,
    "aggregation method": aggregationMethod,
  };

  if (!useProfile) {
    useProfile = profile;
  }
  // TODO: test filters
  const profilePropertyRuleFilters = [];

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
  // models defined as the sequelize ones, not the types
  //

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

    test("can run a integer query to get a string", async () => {
      const column = "first_name";
      const sourceMapping = { id: "userId" };
      const value = await getPropertyValue({
        column,
        sourceMapping,
        aggregationMethod,
      });
      expect(value).toBe("Erie");
    });

    test("can run a integer query to get a float", async () => {
      const column = "ltv";
      const sourceMapping = { id: "userId" };
      const value = await getPropertyValue({
        column,
        sourceMapping,
        aggregationMethod,
      });
      expect(value).toBe(259.12);
    });

    test("can run a integer query to get a boolean", async () => {
      const column = "ios_app";
      const sourceMapping = { id: "userId" };
      const value = await getPropertyValue({
        column,
        sourceMapping,
        aggregationMethod,
      });
      expect(value).toBe(true);
    });

    test("can run a string query to get a string", async () => {
      const column = "first_name";
      const sourceMapping = { email: "email" };
      const value = await getPropertyValue({
        column,
        sourceMapping,
        aggregationMethod,
      });
      expect(value).toBe("Erie");
    });

    test("can run a string query to get a float", async () => {
      const column = "ltv";
      const sourceMapping = { email: "email" };
      const value = await getPropertyValue({
        column,
        sourceMapping,
        aggregationMethod,
      });
      expect(value).toBe(259.12);
    });

    test("can run a string query to get a boolean", async () => {
      const column = "ios_app";
      const sourceMapping = { email: "email" };
      const value = await getPropertyValue({
        column,
        sourceMapping,
        aggregationMethod,
      });
      expect(value).toBe(true);
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
});
