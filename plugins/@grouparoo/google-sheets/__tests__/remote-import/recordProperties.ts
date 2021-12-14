import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import {
  GrouparooRecord,
  Property,
  SimpleSourceOptions,
} from "@grouparoo/core";
import { recordProperties } from "../../src/lib/sheet-import/recordProperties";
import { loadAppOptions, updater } from "../utils/nockHelper";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

const appOptions = loadAppOptions();

const sourceOptions: SimpleSourceOptions = {
  sheet_url:
    "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0",
};
let record: GrouparooRecord;

async function getPropertyValues(column: string) {
  const property = await Property.findOne();
  const propertyOptions = { [property.id]: { column } };

  const values = await recordProperties({
    records: [record],
    sourceId: "sheets test",
    propertyOptions,
    properties: [property],
    sourceOptions,
    appOptions,
    sourceMapping: { id: "userId" },
    connection: null,
    recordIds: null,
    source: null,

    app: null,
    appId: null,
    propertyFilters: null,
    propertyIds: [property.id],
  });

  return [values, property];
}

describe("csv/remote/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // all of these are in the test plugin
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
    expect(values[record.id][property.id]).toEqual(["TRUE"]);
  });

  test("can get undefined", async () => {
    const [values, property] = await getPropertyValues("missing");
    expect(values[record.id][property.id]).toBeUndefined();
  });
});
