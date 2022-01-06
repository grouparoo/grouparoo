import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceFilters = getConnection().methods.sourceFilters;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "PURCHASES" };

async function getFilters() {
  const connection = await connect({ appOptions, app: null, appId: null });
  const response = await sourceFilters({
    connection,
    appOptions,
    sourceOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
    sourceMapping: null,
    property: null,
    propertyId: null,
    propertyOptions: null,
  });
  return response;
}

describe("snowflake/table/sourceFilters", () => {
  test("gets filters", async () => {
    const columns = await (
      await getFilters()
    ).sort((a, b) => a.key.localeCompare(b.key));
    const columnNames = columns.map((r) => r.key);
    expect(columnNames).toEqual([
      "AMOUNT",
      "DATE",
      "ID",
      "PROFILE_ID",
      "PURCHASE",
      "STAMP",
    ]);
    expect(columns.length).toBe(6);

    expect(columns[0]).toMatchObject({
      key: "AMOUNT",
      ops: ["eq", "ne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[1]).toMatchObject({
      key: "DATE",
      ops: ["eq", "ne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[2]).toMatchObject({
      key: "ID",
      ops: ["eq", "ne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[3]).toMatchObject({
      key: "PROFILE_ID",
      ops: ["eq", "ne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[4]).toMatchObject({
      key: "PURCHASE",
      ops: ["eq", "ne", "exists", "notExists", "substring", "notSubstring"],
    });
    expect(columns[5]).toMatchObject({
      key: "STAMP",
      ops: ["eq", "ne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
  });
});
