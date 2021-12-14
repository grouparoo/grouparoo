import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";
import { getConnection } from "../../src/lib/table-import/connection";

const sourceFilters = getConnection().methods.sourceFilters;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

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

describe("bigquery/table/sourceFilters", () => {
  test("gets filters", async () => {
    const columns = await (
      await getFilters()
    ).sort((a, b) => a.key.localeCompare(b.key));
    const columnNames = columns.map((r) => r.key);
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "purchase",
      "record_id",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(6);

    expect(columns[0]).toMatchObject({
      key: "amount",
      ops: ["eq", "dne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[1]).toMatchObject({
      key: "date",
      ops: ["eq", "dne", "exists", "notExists", "gt", "gte", "lt", "lt"],
    });
    expect(columns[2]).toMatchObject({
      key: "id",
      ops: ["eq", "dne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[3]).toMatchObject({
      key: "purchase",
      ops: ["eq", "dne", "exists", "notExists", "substring", "notSubstring"],
    });
    expect(columns[4]).toMatchObject({
      key: "record_id",
      ops: ["eq", "dne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
    expect(columns[5]).toMatchObject({
      key: "stamp",
      ops: ["eq", "dne", "exists", "notExists", "gt", "gte", "lt", "lte"],
    });
  });
});
