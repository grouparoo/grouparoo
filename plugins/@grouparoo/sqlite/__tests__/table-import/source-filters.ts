import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceFilters = getConnection().methods.sourceFilters;

// these used and set by test
const { appOptions, purchasesTableName } = getConfig();
const sourceOptions = { table: purchasesTableName };
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

describe("sqlite/table/sourceFilters", () => {
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
      "amount",
      "date",
      "id",
      "purchase",
      "record_id",
      "stamp",
    ]);
    expect(columns.length).toBe(6);

    // SQLite can do the comparisons Grouparoo uses on any column.
    const allOps = [
      "exists",
      "notExists",
      "eq",
      "ne",
      "gt",
      "gte",
      "lt",
      "lte",
      "substring",
      "notSubstring",
      "in",
    ];

    expect(columns[0]).toMatchObject({ key: "amount", ops: allOps });
    expect(columns[1]).toMatchObject({ key: "date", ops: allOps });
    expect(columns[2]).toMatchObject({ key: "id", ops: allOps });
    expect(columns[3]).toMatchObject({ key: "purchase", ops: allOps });
    expect(columns[4]).toMatchObject({ key: "record_id", ops: allOps });
    expect(columns[5]).toMatchObject({ key: "stamp", ops: allOps });
  });
});
