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

import { plugin } from "@grouparoo/core";
import {
  SimpleProfilePropertyRuleOptions,
  SimpleSourceOptions,
  SimpleAppOptions,
  ProfilePropertyRuleFiltersWithKey,
} from "@grouparoo/core";

// TODO: Ideally these export from @grouparoo/core so we don't have to put dist here
import { App } from "@grouparoo/core/api/dist/models/App";
import { Source, SourceMapping } from "@grouparoo/core/api/dist/models/Source";
import { ProfilePropertyRule } from "@grouparoo/core/api/dist/models/ProfilePropertyRule";
import { Profile } from "@grouparoo/core/api/dist/models/Profile";
import { ProfilePropertyRuleTest } from "../../../../../core/api/src/actions/profilePropertyRules";

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

// these not actually used in implementation
const app: App = null;
const sourceOptions: SimpleSourceOptions = null;
const sourceMapping: SourceMapping = null;
const profilePropertyRuleFilters: ProfilePropertyRuleFiltersWithKey[] = null;

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let profile; // TODO: Profile;
let source; // TODO: Source = null; // not actually used, just for tests
let profilePropertyRule: ProfilePropertyRule;
let profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions;

let actionhero;
let models;

async function getPropertyValue() {
  return profileProperty({
    app,
    appOptions,
    source,
    sourceOptions,
    sourceMapping,
    profilePropertyRule,
    profilePropertyRuleOptions,
    profilePropertyRuleFilters,
    profile,
  });
}

async function testRule(key: string, query: string) {
  const { ProfilePropertyRule } = plugin.models();
  const rule = await ProfilePropertyRule.findOne({
    where: { key },
  });

  rule.sourceGuid = source.guid;
  rule.setOptions({ query });
  await rule.save();

  profilePropertyRule = rule;
  profilePropertyRuleOptions = rule.getOptions();
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
    // helper.disableTestPluginImport();

    const app = await helper.factories.app({
      name: "BQ",
      type: "bigquery",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "BQS",
      type: "bigquery-query-import",
    });
    // no options in this source await source.setOptions({ key: "value" });
    // no mappings in this source await source.setMapping({ userId: "userId" });
    await source.update({ state: "ready" });

    profile = await helper.factories.profile();
    profilePropertyRule = await profile.addOrUpdateProperties({ userId: 1 });
    // await profile.import();
    // await profile.reload();
    expect(profile.guid).toBeTruthy();
  });

  test("can make a profile to use in other tests", async () => {
    expect(1 + 1).toBe(2);
  });
});
