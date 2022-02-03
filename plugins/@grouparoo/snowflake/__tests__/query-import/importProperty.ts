import { helper } from "@grouparoo/spec-helper";
import "../utils/mock";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { GrouparooRecord, SimpleAppOptions, Property } from "@grouparoo/core";

import { getConnection } from "../../src/lib/query-import/connection";
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

describe("snowflake/query/recordProperty", () => {
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

  test("can run a integer query to get a string", async () => {
    const sql = "SELECT first_name FROM profiles WHERE id = {{{ userId }}}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a integer query to get a float", async () => {
    const sql = "SELECT ltv FROM profiles WHERE id = {{{ userId }}}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([259.12]);
  });

  test("can run a integer query to get a boolean", async () => {
    const sql = "SELECT ios_app FROM profiles WHERE id = {{{ userId }}}";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([true]);
  });

  test("can run a string query to get a string", async () => {
    const sql = "SELECT first_name FROM profiles WHERE email = '{{{ email }}}'";
    const value = await getPropertyValue(sql);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a string query to get a float", async () => {
    const sql = "SELECT ltv FROM profiles WHERE email = '{{{ email }}}'";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([259.12]);
  });

  test("can run a string query to get a boolean", async () => {
    const sql = "SELECT ios_app FROM profiles WHERE email = '{{{ email }}}'";
    const value = await getPropertyValue(sql);
    expect(value).toEqual([true]);
  });

  test("returns undefined when data is not available", async () => {
    const sql = `SELECT ios_app FROM profiles WHERE email = '{{{ badName }}}'`;
    const value = await getPropertyValue(sql);
    expect(value).toEqual(undefined);
  });
});
