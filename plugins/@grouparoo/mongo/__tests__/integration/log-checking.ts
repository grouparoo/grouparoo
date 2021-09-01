import { Profile, Property } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { getConnection } from "../../src/lib/query-import/connection";
import { afterData, beforeData, getConfig } from "../utils/data";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mongo": { path: path.join(__dirname, "..", "..") },
});

const profileProperty = getConnection().methods.profileProperty;

// these used and set by test
const { appOptions, usersTableName } = getConfig();
let profile: Profile;

let client;

async function getPropertyValue(query: string) {
  const propertyOptions = { query };
  const property = await Property.findOne();

  return profileProperty({
    connection: client,
    appOptions,
    profile,
    propertyOptions,
    property,
    profileId: null,
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

describe("mongo/query/profileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const actionhero = require("actionhero");
  const logMock = jest.fn();
  Object.defineProperty(actionhero, "log", { value: logMock, writable: false });

  const logLevel = process.env.GROUPAROO_LOG_LEVEL;
  beforeAll(async () => {
    process.env.GROUPAROO_LOG_LEVEL = "debug";
    ({ client } = await beforeData());
    await helper.factories.properties();
    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.id).toBeTruthy();
  });

  afterAll(async () => {
    await afterData();
    process.env.GROUPAROO_LOG_LEVEL = logLevel;
  });

  it("should correctly do debug logging for mongo queries", async () => {
    const query = [
      {
        $match: {
          id: "{{userId}}",
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
      /"{{userId}}"/,
      "{{userId}}"
    );
    const value = await getPropertyValue(queryString);
    expect(value).toEqual(["Erie"]);

    const [mongoCall] = logMock.mock.calls.find(
      (c) => c[0].includes("mongo") && c[0].includes("Erie")
    );
    let mongoCallData: any;
    try {
      mongoCallData = JSON.parse(mongoCall.replace("[ mongo ] ", ""));
    } catch (err) {
      expect(err).toBeFalsy();
    }
    expect(mongoCallData).toEqual({
      address: "127.0.0.1:27017",
      connectionId: 1,
      requestId: 9,
      databaseName: "test_db_1",
      commandName: "insert",
      command: {
        insert: "users_1",
        documents: [
          {
            _id: expect.any(String),
            android_app: false,
            date: "2020-02-01T05:00:00.000Z",
            email: "ejervois0@example.com",
            first_name: "Erie",
            gender: "Male",
            id: 1,
            ios_app: true,
            ip_address: "15.247.38.72",
            last_name: "Jervois",
            ltv: 259.12,
            stamp: "2020-02-01T17:13:14.000Z",
            vip: true,
          },
        ],
        ordered: true,
        lsid: { id: expect.any(String) },
        $db: "test_db_1",
      },
    });
  });
});
