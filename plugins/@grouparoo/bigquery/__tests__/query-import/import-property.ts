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

import { profileProperty } from "../../src/lib/query-import/profileProperty";

import { loadAppOptions, rewriteNockEnv } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { Profile, SimpleAppOptions } from "@grouparoo/core";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "query-import-property.js"
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

async function getPropertyValue(query: string) {
  const profilePropertyRuleOptions = { query };
  return profileProperty({
    appOptions,
    profile,
    profilePropertyRuleOptions,
    source: null,
    app: null,
    sourceOptions: null,
    sourceMapping: null,
    profilePropertyRule: null,
    profilePropertyRuleFilters: null,
  });
}

describe("bigquery/query/profileProperty", () => {
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
    const sql = "SELECT first_name FROM test.profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toBe("Erie");
  });

  test("can run a integer query to get a float", async () => {
    const sql = "SELECT ltv FROM test.profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toBe(259.12);
  });

  test("can run a integer query to get a boolean", async () => {
    const sql = "SELECT ios_app FROM test.profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toBe(true);
  });

  test("can run a string query to get a string", async () => {
    const sql =
      "SELECT first_name FROM test.profiles WHERE email = '{{ email }}'";
    const value = await getPropertyValue(sql);
    expect(value).toBe("Erie");
  });

  test("can run a string query to get a float", async () => {
    const sql = "SELECT ltv FROM test.profiles WHERE email = '{{ email }}'";
    const value = await getPropertyValue(sql);
    expect(value).toBe(259.12);
  });

  test("can run a string query to get a boolean", async () => {
    const sql = "SELECT ios_app FROM test.profiles WHERE email = '{{ email }}'";
    const value = await getPropertyValue(sql);
    expect(value).toBe(true);
  });
});
