import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceFilters = getConnection().methods.sourceFilters;

// these used and set by test
const { appOptions, purchasesTableName } = getConfig();
const sourceOptions = {
  table: purchasesTableName,
};
let client;

async function getFilters() {
  const response = await sourceFilters({
    connection: client,
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

describe("mongo/table/sourceFilters", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });

  test("gets filters", async () => {
    const columns = await (
      await getFilters()
    ).sort((a, b) => a.key.localeCompare(b.key));
    const columnNames = columns.map((r) => r.key);
    expect(columnNames).toEqual([
      "_id",
      "amount",
      "date",
      "id",
      "purchase",
      "record_id",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(7);

    expect(columns[0]).toMatchObject({
      key: "_id",
      ops: ["eq", "ne", "substring", "notSubstring"],
    });

    expect(columns[1]).toMatchObject({
      key: "amount",
      ops: ["eq", "ne", "gt", "gte", "lt", "lte"],
    });
    expect(columns[2]).toMatchObject({
      key: "date",
      ops: ["eq", "ne", "gt", "gte", "lt", "lte"],
    });
    expect(columns[3]).toMatchObject({
      key: "id",
      ops: ["eq", "ne", "gt", "gte", "lt", "lte"],
    });
    expect(columns[5]).toMatchObject({
      key: "record_id",
      ops: ["eq", "ne", "gt", "gte", "lt", "lte"],
    });
    expect(columns[4]).toMatchObject({
      key: "purchase",
      ops: ["eq", "ne", "substring", "notSubstring"],
    });
    expect(columns[6]).toMatchObject({
      key: "stamp",
      ops: ["eq", "ne", "gt", "gte", "lt", "lte"],
    });
  });
});
