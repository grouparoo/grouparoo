import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { Profile, Property, SimpleSourceOptions, File } from "@grouparoo/core";
import { profileProperties } from "../../src/lib/file-import/profileProperties";

let profile: Profile;
let file: File;
let sourceOptions: SimpleSourceOptions;

async function getPropertyValue(column: string) {
  const propertyOptions = { column };
  const property = await Property.findOne();

  return profileProperties({
    profiles: [profile],
    propertyOptions,
    property,
    sourceOptions,
    sourceMapping: { id: "userId" },
    appOptions: null,
    connection: null,
    profileIds: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
    propertyFilters: null,
  });
}

describe("csv/file/profileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    file = await File.create({
      transport: "local",
      type: "csv",
      bucket: path.join(process.cwd(), "__tests__", "data"),
      path: "profiles-10.csv",
      extension: ".csv",
      mime: "text/csv",
      sizeBytes: 1,
    });

    sourceOptions = { fileId: file.id };
  });

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
    expect(value).toEqual({ [profile.id]: ["Erie"] });
  });

  test("can get a number", async () => {
    const value = await getPropertyValue("ltv");
    expect(value).toEqual({ [profile.id]: ["259.12"] });
  });

  test("can get a boolean", async () => {
    const value = await getPropertyValue("ios_app");
    expect(value).toEqual({ [profile.id]: ["true"] });
  });

  test("can get undefined", async () => {
    const value = await getPropertyValue("missing");
    expect(value).toEqual({ [profile.id]: [undefined] });
  });
});
