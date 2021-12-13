import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { SimpleSourceOptions } from "@grouparoo/core";
import { propertyOptions } from "../../src/lib/sheet-import/propertyOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

const appOptions = loadAppOptions();
const sourceOptions: SimpleSourceOptions = {
  sheet_url:
    "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0",
};

describe("csv/remote/propertyOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // all of these are in the test plugin
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
      appOptions,
      propertyId: "source",
      connection: null,
      app: null,
      appId: null,
      source: null,
      sourceId: null,
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
