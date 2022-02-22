import { GrouparooRecord, Property } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { getConnection } from "../../src/lib/query-import/connection";
import { afterData, beforeData, getConfig } from "../utils/data";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mongo": { path: path.join(__dirname, "..", "..") },
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
    sourceOptions: {
      table: usersTableName,
    },
    sourceMapping: null,
    propertyId: null,
    propertyFilters: null,
  });
}

describe("mongo/integration/log-checking", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const actionhero = require("actionhero");
  const logMock = jest.fn();
  Object.defineProperty(actionhero, "log", { value: logMock, writable: false });

  const logLevel = process.env.GROUPAROO_LOG_LEVEL;
  beforeAll(async () => {
    process.env.GROUPAROO_LOG_LEVEL = "debug";
    ({ client } = await beforeData());
    await helper.factories.properties();
    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(record.id).toBeTruthy();
  });

  afterAll(async () => {
    await afterData();
    process.env.GROUPAROO_LOG_LEVEL = logLevel;
  });

  it("should correctly do debug logging for mongo queries", async () => {
    const query = [
      {
        $match: {
          id: "{{{userId}}}",
        },
      },
      {
        $project: {
          first_name: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query).replace(
      /"{{{userId}}}"/,
      "{{{userId}}}"
    );
    const value = await getPropertyValue(queryString);
    expect(value).toEqual(["Erie"]);

    const [mongoCall, logLevel] = logMock.mock.calls.find(
      (c) => c[0].includes("mongo") && c[0].includes("Erie")
    );
    expect(logLevel).toBe("debug");
    let mongoCallData: any;
    try {
      mongoCallData = JSON.parse(mongoCall.replace("[ mongo ] ", ""));
    } catch (err) {
      expect(err).toBeFalsy();
    }
    expect(mongoCallData).toEqual({
      address: "127.0.0.1:27017",
      connectionId: 1,
      requestId: expect.any(Number),
      databaseName: "test_db_1",
      commandName: "insert",
      command: {
        insert: `users_${process.env.JEST_WORKER_ID}`,
        documents: [
          {
            _id: expect.any(String),
            android_app: false,
            date: expect.any(String),
            email: "ejervois0@example.com",
            first_name: "Erie",
            gender: "Male",
            id: 1,
            ios_app: true,
            ip_address: "15.247.38.72",
            last_name: "Jervois",
            ltv: 259.12,
            stamp: expect.any(String),
            vip: true,
          },
        ],
        ordered: true,
        lsid: { id: expect.any(String) },
        $db: `test_db_${process.env.JEST_WORKER_ID}`,
      },
    });
  });
});
