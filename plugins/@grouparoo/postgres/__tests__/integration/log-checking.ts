import { GrouparooRecord, Property } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { getConnection } from "../../src/lib/query-import/connection";
import { afterData, beforeData, getConfig } from "../utils/data";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

const recordProperty = getConnection().methods.recordProperty;

// these used and set by test
const { appOptions, usersTableName } = getConfig();
let record: GrouparooRecord;

let client;

async function getPropertyValue(query: string) {
  const propertyOptions = { query };
  const property = await Property.findOne();

  return recordProperty({
    connection: client,
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

describe("postgres/integration/log-checking", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const actionhero = require("actionhero");
  const logMock = jest.fn();
  Object.defineProperty(actionhero, "log", { value: logMock, writable: false });

  beforeAll(async () => {
    await helper.factories.properties();
    ({ client } = await beforeData());
    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(record.id).toBeTruthy();
  });

  afterAll(async () => await afterData());

  it("should correctly do debug logging for postgres queries", async () => {
    const sql = `SELECT first_name FROM ${usersTableName} WHERE id = {{{ userId }}}`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
    const expectedString = `[ postgres ] ${sql.replace("{{{ userId }}}", "1")}`;
    const postgresCall = logMock.mock.calls.find(([c]) => c === expectedString);
    expect(postgresCall).toEqual([expectedString, "debug", undefined]);
  });
});
