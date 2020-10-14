import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";
import { plugin, Profile, ProfilePropertyRule } from "@grouparoo/core";

import { getConnection } from "../../src/lib/query-import/connection";
const profileProperty = getConnection().methods.profileProperty;

// these used and set by test
const { appOptions, usersTableName } = getConfig();
let profile: Profile;

let actionhero, client;

async function getPropertyValue(query: string) {
  const profilePropertyRuleOptions = { query };
  const profilePropertyRule = await ProfilePropertyRule.findOne();

  return profileProperty({
    connection: client,
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

describe("mysql/query/profileProperty", () => {
  // models defined as the sequelize ones, not the types

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, 1000 * 60);

  beforeAll(async () => {
    ({ client } = await beforeData());
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

  afterAll(async () => {
    await afterData();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("can run a integer query to get a string", async () => {
    const sql = `SELECT first_name FROM ${usersTableName} WHERE id = {{ userId }}`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a integer query to get a float", async () => {
    const sql = `SELECT ltv FROM ${usersTableName} WHERE id = {{ userId }}`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual([259.12]);
  });

  test("can run a integer query to get a boolean", async () => {
    const sql = `SELECT ios_app FROM ${usersTableName} WHERE id = {{ userId }}`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["true"]);
  });

  test("can run a string query to get a string", async () => {
    const sql = `SELECT first_name FROM ${usersTableName} WHERE email = '{{ email }}'`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a string query to get a float", async () => {
    const sql = `SELECT ltv FROM ${usersTableName} WHERE email = '{{ email }}'`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual([259.12]);
  });

  test("can run a string query to get a boolean", async () => {
    const sql = `SELECT ios_app FROM ${usersTableName} WHERE email = '{{ email }}'`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["true"]);
  });
});
