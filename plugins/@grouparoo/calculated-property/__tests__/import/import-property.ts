import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { profileProperty } from "../../src/lib/profileProperty";
import { api, specHelper } from "actionhero";

import { plugin, Profile, Property } from "@grouparoo/core";

// these used and set by test
let profile: Profile;

async function getPropertyValue(fn: string) {
  const propertyOptions = { customFunction: fn };
  const property = await Property.findOne();

  return profileProperty({
    connection: null,
    appOptions: null,
    profile,
    propertyOptions,
    property,
    profileId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    sourceOptions: null,
    sourceMapping: null,
    propertyId: null,
    propertyFilters: null,
  });
}
describe("calculated-property/profileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => helper.disableTestPluginImport());
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
      firstName: ["Mario"],
      lastName: ["Jones"],
    });
    expect(profile.id).toBeTruthy();
  });

  test("it concatenates a string to create a property", async () => {
    const fn = `() => {return "hi {{firstName}}"}`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(`hi Mario`);
  });
  // does math with a property to generate a new property
  // throws if no function
  // throws if function returns undefined
  // will parse a null/undefined mustache variable as ""
  // dates can be parsed back into a date correctly
});
