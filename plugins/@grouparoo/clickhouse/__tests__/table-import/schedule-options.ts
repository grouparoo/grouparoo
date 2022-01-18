import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const scheduleOptionsMethod = getConnection().methods.scheduleOptions;

// these used and set by test
const { appOptions, purchasesTableName } = getConfig();
const sourceOptions = { table: purchasesTableName };
let client;

async function getColumns() {
  const scheduleOptions = await scheduleOptionsMethod({
    schedule: null,
    scheduleId: "",
    scheduleOptions: {},
  });

  const columnOption = scheduleOptions[0];
  const optionMethod = columnOption.options;

  const response = await optionMethod({
    connection: client,
    appOptions,
    sourceOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
    sourceMapping: null,
    properties: [],
  });
  return response;
}

describe("clickhouse/table/scheduleOptions", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });
  test("gets list of columns", async () => {
    const columns = await getColumns();
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "purchase",
      "record_id",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(6);
  });
});
