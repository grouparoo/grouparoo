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
import { recordProperty } from "../../src/lib/sheet-import/recordProperty";
import { loadAppOptions, updater } from "../utils/nockHelper";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

const appOptions = loadAppOptions();

const sourceOptions: SimpleSourceOptions = {
  sheet_url:
    "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0",
};
let record: GrouparooRecord;

async function getPropertyValue(column: string) {
  const propertyOptions = { column };
  const property = await Property.findOne();

  return recordProperty({
    record,
    propertyOptions,
    property,
    sourceOptions,
    appOptions,
    sourceMapping: { id: "userId" },
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

describe("csv/remote/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

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
    expect(value).toEqual(["TRUE"]);
  });

  test("can get undefined", async () => {
    const value = await getPropertyValue("missing");
    expect(value).toEqual([undefined]);
  });
});
