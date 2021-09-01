import { Profile, Property, SimpleAppOptions } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { connect } from "../../src/lib/connect";
import { getConnection } from "../../src/lib/query-import/connection";
import "../utils/mock";
import { loadAppOptions, updater } from "../utils/nockHelper";

const profileProperty = getConnection().methods.profileProperty;

const nockFile = path.join(__dirname, "../", "fixtures", "log-checking.js");

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
let profile: Profile;

async function getPropertyValue(query: string) {
  const propertyOptions = { query };
  const connection = await connect({ appOptions, app: null, appId: null });
  const property = await Property.findOne();

  return profileProperty({
    connection,
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

describe("snowflake/integration/log-checking", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const actionhero = require("actionhero");
  const logMock = jest.fn();
  Object.defineProperty(actionhero, "log", { value: logMock, writable: false });

  beforeAll(async () => {
    // all of these are in in the test plugin
    await helper.factories.properties();

    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.id).toBeTruthy();
  });

  it("should correctly do debug logging for snowflake queries", async () => {
    const sql = "SELECT first_name FROM profiles WHERE id = {{ userId }}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);

    const snowflakeLogCall = logMock.mock.calls.find((c) =>
      c[0].includes("snowflake")
    );
    expect(snowflakeLogCall).toBeTruthy();
    const [snowflakeUrl, debugLevel] = snowflakeLogCall;
    const [snowflakeUri, params] = snowflakeUrl.split("?");

    expect(debugLevel).toBe("debug");
    expect(snowflakeUri).toEqual(
      expect.stringMatching(
        /https:\/\/[\-\w\.]+\.snowflakecomputing\.com\/session\/v1\/login-request/
      )
    );
    const queryParams = {};
    params
      .split("&")
      .map((param) => param.split("="))
      .forEach(([k, v]) => (queryParams[k] = v));
    expect(queryParams).toEqual({
      databaseName: "SAMPLE_SOURCES",
      requestId: expect.any(String),
      schemaName: "PUBLIC",
      warehouse: "COMPUTE_WH",
    });
  });
});
