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
      ltv: ["390.42"],
      lastLoginAt: ["2021-08-23 15:02:39.297-07"],
      isVIP: ["true"],
      purchases: [null],
    });
    expect(profile.id).toBeTruthy();
  });

  test("it evaluates string properties as expected", async () => {
    const fn = `() => {
        return "hi {{firstName}}"
    }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(`hi Mario`);
  });
  test("it evaluates float properties as expected", async () => {
    const fn = `() => {
        return {{ltv}} * 2 
    }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(780.84);
  });
  test("it evaluates null properties as an empty string", async () => {
    const fn = `() => { 
        if ("{{purchases}}" === "") return true; 
        return false;}`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toBeTruthy;
  });
  test("it evaluates boolean properties as expected", async () => {
    const fn = `() => {
        if({{isVIP}} === true) return true;
        return false;
    }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toBeTruthy;
  });

  // TODO: dates... how to get timestamp to play nicely with date...
  test.only("it evaluates date strings as expected", async () => {
    const fn = `() => {
          const date = new Date("{{lastLoginAt.iso}}");
          return date.toISOString();
      }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual("2021-08-23T22:02:39.297Z");
  });

  test("it throws if customFunction is empty", async () => {
    const fn = `() => {}`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: Calculated property's /`customFunction/` undefined"
    );
  });
  test("it throws if customFunction returns undefined", async () => {
    const fn = `() => { return undefined}`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: Calculated property's /`customFunction/` undefined"
    );
  });
  test("it throws if mustached property does not exist", async () => {
    const fn = `() => {
      return {{fakeProperty}}
    }`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: Calculated property's /`customFunction/` undefined"
    );
  });
});
