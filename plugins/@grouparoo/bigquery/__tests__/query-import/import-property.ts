import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import {
  plugin,
  Profile,
  SimpleAppOptions,
  ProfilePropertyRule,
} from "@grouparoo/core";

import { getConnection } from "../../src/lib/query-import/connection";
const profileProperty = getConnection().methods.profileProperty;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "query-import-property.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/query-import-property");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let profile: Profile;

let actionhero;

async function getPropertyValue(query: string) {
  const profilePropertyRuleOptions = { query };
  const connection = await connect({ appOptions, app: null, appGuid: null });
  const profilePropertyRule = await ProfilePropertyRule.findOne();

  return profileProperty({
    connection,
    appOptions,
    profile,
    profilePropertyRuleOptions,
    profilePropertyRule,
    profileGuid: null,
    source: null,
    sourceGuid: null,
    app: null,
    appGuid: null,
    sourceOptions: null,
    sourceMapping: null,
    profilePropertyRuleGuid: null,
    profilePropertyRuleFilters: null,
  });
}

describe("bigquery/query/profileProperty", () => {
  // models defined as the sequelize ones, not the types

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    // all of these are in in the test plugin
    await helper.factories.profilePropertyRules();

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.guid).toBeTruthy();
  });

  test("can run a integer query to get a string", async () => {
    const sql = "SELECT first_name FROM test.profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a integer query to get a float", async () => {
    const sql = "SELECT ltv FROM test.profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([259.12]);
  });

  test("can run a integer query to get a boolean", async () => {
    const sql = "SELECT ios_app FROM test.profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([true]);
  });

  test("can run a string query to get a string", async () => {
    const sql =
      "SELECT first_name FROM test.profiles WHERE email = '{{ email }}'";
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a string query to get a float", async () => {
    const sql = "SELECT ltv FROM test.profiles WHERE email = '{{ email }}'";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([259.12]);
  });

  test("can run a string query to get a boolean", async () => {
    const sql = "SELECT ios_app FROM test.profiles WHERE email = '{{ email }}'";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([true]);
  });

  test("returns undefined when data is not avilable", async () => {
    const sql = `SELECT ios_app FROM test.profiles WHERE email = '{{ badName }}'`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(undefined);
  });
});
