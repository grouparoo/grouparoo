import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { Profile, Property, SimpleSourceOptions } from "@grouparoo/core";
import { profileProperty } from "../../src/lib/remote-import/profileProperty";

const sourceOptions: SimpleSourceOptions = {
  url:
    "https://raw.githubusercontent.com/grouparoo/grouparoo/main/core/__tests__/data/profiles-10.csv",
  fileAgeHours: 1,
};
let profile: Profile;

async function getPropertyValue(column: string) {
  const propertyOptions = { column };
  const property = await Property.findOne();

  return profileProperty({
    profile,
    propertyOptions,
    property,
    sourceOptions,
    sourceMapping: { id: "userId" },
    appOptions: null,
    connection: null,
    profileId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
    propertyFilters: null,
  });
}

describe("csv/remote/profileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // all of these are in in the test plugin
    await helper.factories.properties();

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.id).toBeTruthy();
  });

  test("can get a string", async () => {
    const value = await getPropertyValue("first_name");
    expect(value).toEqual(["Erie"]);
  });

  test("can get a number", async () => {
    const value = await getPropertyValue("ltv");
    expect(value).toEqual(["259.12"]);
  });

  test("can get a boolean", async () => {
    const value = await getPropertyValue("ios_app");
    expect(value).toEqual(["true"]);
  });

  test("can get undefined", async () => {
    const value = await getPropertyValue("missing");
    expect(value).toEqual([undefined]);
  });
});
