import { GrouparooRecord, Property } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { PostgresPoolClient } from "../../src/lib/connect";
import { getConnection } from "../../src/lib/table-import/connection";
import { afterData, beforeData, getConfig } from "../utils/data";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

const recordProperty = getConnection().methods.recordProperty;

// these used and set by test
const { appOptions, usersTableName } = getConfig();
let record: GrouparooRecord;

let client: PostgresPoolClient;
const sourceOptions = { table: usersTableName };
const sourceMapping = { id: "userId" };

async function getPropertyValue({ column }: { column: string }) {
  const propertyOptions = {
    column,
    aggregationMethod: "exact",
  };

  const emailProperty = await Property.findOne({ where: { key: "email" } });

  return recordProperty({
    connection: client,
    appOptions,
    record,
    sourceOptions,
    propertyOptions,
    sourceMapping,
    propertyFilters: [],
    property: emailProperty,
    recordId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    propertyId: null,
  });
}

describe("postgres/integration/log-checking", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const actionhero = require("actionhero");
  const logMock = jest.fn();

  beforeAll(async () => {
    await helper.factories.properties();
    ({ client } = await beforeData());
    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(record.id).toBeTruthy();

    Object.defineProperty(actionhero, "log", {
      value: logMock,
      writable: false,
    });
  });

  afterAll(async () => await afterData());

  it("should correctly do debug logging for postgres queries", async () => {
    const value = await getPropertyValue({
      column: "first_name",
    });
    expect(value).toEqual(["Erie"]);
    const postgresCall = logMock.mock.calls.find(([c]) =>
      c.match(/^\[ postgres \] SELECT "first_name"/)
    );
    expect(postgresCall).toBeTruthy();
    expect(postgresCall[1]).toEqual("debug");
  });
});
