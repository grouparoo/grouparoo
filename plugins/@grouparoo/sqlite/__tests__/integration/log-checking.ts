import { Profile, Property } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { getConnection } from "../../src/lib/query-import/connection";
import { afterData, beforeData, getConfig } from "../utils/data";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/sqlite": { path: path.join(__dirname, "..", "..") },
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
    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.id).toBeTruthy();
  });

  afterAll(async () => await afterData());

  it("should correctly do debug logging for sqlite queries", async () => {
    const sql = `SELECT first_name FROM "${usersTableName}" WHERE id = {{ userId }}`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);

    const [sqlliteCall, debugLevel] = logMock.mock.calls.find(
      (c) => c[0].includes("sqlite") && c[0].includes("SELECT first_name")
    );
    expect(debugLevel).toBe("debug");
    expect(sqlliteCall).toEqual(
      "[ sqlite ] SELECT first_name FROM \"USERS - '1'\" WHERE id = 1"
    );
  });
});
