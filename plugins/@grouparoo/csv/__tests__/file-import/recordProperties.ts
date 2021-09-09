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
import { recordProperties } from "../../src/lib/file-import/recordProperties";

let record: GrouparooRecord;
let file: File;
let sourceOptions: SimpleSourceOptions;

async function getPropertyValues(column: string) {
  const property = await Property.findOne();
  const propertyOptions = { [property.id]: { column } };

  const values = await recordProperties({
    records: [record],
    propertyOptions,
    properties: [property],
    sourceOptions,
    sourceMapping: { id: "userId" },
    appOptions: null,
    connection: null,
    recordIds: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyFilters: null,
    propertyIds: [property.id],
  });

  return [values, property];
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
    const [values, property] = await getPropertyValues("first_name");
    expect(values[record.id][property.id]).toEqual(["Erie"]);
  });

  test("can get a number", async () => {
    const [values, property] = await getPropertyValues("ltv");
    expect(values[record.id][property.id]).toEqual(["259.12"]);
  });

  test("can get a boolean", async () => {
    const [values, property] = await getPropertyValues("ios_app");
    expect(values[record.id][property.id]).toEqual(["true"]);
  });

  test("can get undefined", async () => {
    const [values, property] = await getPropertyValues("missing");
    expect(values[record.id][property.id]).toBeUndefined();
  });
});
