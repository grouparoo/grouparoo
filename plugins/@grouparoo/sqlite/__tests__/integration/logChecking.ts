import { GrouparooRecord, Property } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { getConnection } from "../../src/lib/query-import/connection";
import { afterData, beforeData, getConfig } from "../utils/data";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/sqlite": { path: path.join(__dirname, "..", "..") },
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

describe("sqlite/integration/log-checking", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const actionhero = require("actionhero");
  const logMock = jest.fn();
  Object.defineProperty(actionhero, "log", { value: logMock, writable: false });

  beforeAll(async () => {
    await helper.factories.properties();
    ({ client } = await beforeData());
  });

  beforeAll(async () => {
    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["eohara0@example.com"],
    });
    expect(record.id).toBeTruthy();
  });

  afterAll(async () => await afterData());

  it("should correctly do debug logging for sqlite queries", async () => {
    const sql = `SELECT first_name FROM "${usersTableName}" WHERE id = {{{ userId }}}`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);

    const [sqlliteCall, debugLevel] = logMock.mock.calls.find(
      (c) => c[0].includes("sqlite") && c[0].includes("SELECT first_name")
    );
    expect(debugLevel).toBe("debug");
    expect(sqlliteCall).toEqual(
      `[ sqlite ] SELECT first_name FROM "USERS - '${
        process.env.JEST_WORKER_ID ?? 0
      }'" WHERE id = 1`
    );
  });
});
