import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});

import { GrouparooRecord, Property, SimpleAppOptions } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { getConnection } from "../../src/lib/query-import/connection";
import { loadAppOptions, updater } from "../utils/nockHelper";

const recordProperty = getConnection().methods.recordProperty;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let record: GrouparooRecord;

async function getPropertyValue(query: string) {
  const propertyOptions = { query };
  const connection = await connect({ appOptions, app: null, appId: null });
  const property = await Property.findOne();

  return recordProperty({
    connection,
    appOptions,
    record,
    propertyOptions,
    property,
    recordId: null,
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

describe("bigquery/integration/log-checking", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const actionhero = require("actionhero");
  const logMock = jest.fn();
  Object.defineProperty(actionhero, "log", { value: logMock, writable: false });

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

  it("should correctly do debug logging for bigquery queries", async () => {
    const sql = "SELECT first_name FROM test.records WHERE id = {{{ userId }}}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);

    expect(
      logMock.mock.calls.filter((c) => c[0].includes("bigquery")).pop()
    ).toEqual([
      "[ bigquery ] SELECT first_name FROM test.records WHERE id = 1",
      "debug",
      undefined,
    ]);
  });
});
