import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { SimpleSourceOptions, File } from "@grouparoo/core";
import { propertyOptions } from "../../src/lib/file-import/propertyOptions";

let sourceOptions: SimpleSourceOptions;
let file: File;

describe("csv/file/propertyOptions", () => {
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
  });

  test("can get property options", async () => {
    const options = await propertyOptions[0].options({
      sourceOptions,
      propertyId: "source",
      connection: null,
      app: null,
      appId: null,
      appOptions: null,
      source: null,
      sourceId: null,
      sourceMapping: null,
      property: null,
    });

    expect(options.map((o) => o.key)).toEqual([
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
    expect(options.find((o) => o.key === "email").examples.sort()).toEqual([
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
