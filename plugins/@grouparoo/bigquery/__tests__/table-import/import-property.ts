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
const appOptions = loadAppOptions(newNock); // TODO: : SimpleAppOptions = loadAppOptions(newNock);
let profile; // TODO: Profile;
let source; // TODO: Source = null; // not actually used, just for tests

let actionhero;

async function getPropertyValue({
  sourceOptions,
  sourceMapping,
  profilePropertyRuleOptions,
  profilePropertyRuleFilters,
}) {
  return profileProperty({
    appOptions,
    profile,
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

  test("can run a integer query to get a string", async () => {
    const sourceOptions = { table: "profiles" };
    const sourceMapping = { id: "userId" };
    const profilePropertyRuleOptions = {
      column: "first_name",
      "aggregation method": "exact",
    };
    const profilePropertyRuleFilters = [];
    const value = await getPropertyValue({
      sourceOptions,
      sourceMapping,
      profilePropertyRuleOptions,
      profilePropertyRuleFilters,
    });
    expect(value).toBe("Erie");
  });
});
