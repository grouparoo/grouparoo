import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { SimpleSourceOptions } from "@grouparoo/core";
import { propertyOptions } from "../../src/lib/propertyOptions";

const sourceOptions: SimpleSourceOptions = {
  url: "https://raw.githubusercontent.com/grouparoo/grouparoo/main/core/__tests__/data/records-10.csv",
  fileAgeHours: 1,
};

describe("csv/remote/propertyOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // all of these are in in the test plugin
    await helper.factories.properties();
  });

  test("can get property options", async () => {
    const options = await propertyOptions({
      property: null,
      propertyId: null,
      propertyOptions: {},
    });

    const columnOptions = await options[0].options({
      sourceOptions,
      propertyId: "source",
      sourceId: "sheets test",
      connection: null,
      app: null,
      appId: null,
      appOptions: null,
      source: null,
      sourceMapping: null,
      property: null,
    });

    expect(columnOptions.map((o) => o.key)).toEqual([
      "id",
      "first_name",
      "last_name",
      "email",
      "gender",
      "ip_address",
      "ios_app",
      "android_app",
      "vip",
      "ltv",
    ]);
    expect(
      columnOptions.find((o) => o.key === "email").examples.sort()
    ).toEqual([
      "acotesford3@example.com",
      "ceate1@example.com",
      "diston9@example.com",
      "dscalia5@example.com",
      "ejervois0@example.com",
      "gcubitt7@example.com",
      "ggroucock2@example.com",
      "hkleis6@example.com",
      "lbrowell8@example.com",
      "ljohnston4@example.com",
    ]);
  });
});
