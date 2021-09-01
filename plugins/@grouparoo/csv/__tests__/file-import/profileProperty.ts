import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Property,
  SimpleSourceOptions,
  File,
} from "@grouparoo/core";
import { recordProperty } from "../../src/lib/file-import/recordProperty";

let sourceOptions: SimpleSourceOptions;
let file: File;
let record: GrouparooRecord;

async function getPropertyValue(column: string) {
  const propertyOptions = { column };
  const property = await Property.findOne();

  return recordProperty({
    record,
    propertyOptions,
    property,
    sourceOptions,
    sourceMapping: { id: "userId" },
    appOptions: null,
    connection: null,
    recordId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
    propertyFilters: null,
  });
}

describe("csv/file/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    file = await File.create({
      transport: "local",
      type: "csv",
      bucket: path.join(process.cwd(), "__tests__", "data"),
      path: "records-10.csv",
      extension: ".csv",
      mime: "text/csv",
      sizeBytes: 1,
    });

    sourceOptions = { fileId: file.id };
  });

  beforeAll(async () => {
    // all of these are in in the test plugin
    await helper.factories.properties();

    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(record.id).toBeTruthy();
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
