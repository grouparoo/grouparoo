import "@grouparoo/spec-helper";
import path from "path";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";
const scheduleOptions = getConnection().scheduleOptions;

// these used and set by test
const { appOptions, purchasesTableName } = getConfig();
const sourceOptions = {
  table: purchasesTableName,
  fields: "id,amount,date,id,profile_id,purchase,stamp",
};
let client;

async function getColumns() {
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

describe("mongo/table/scheduleOptions", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });
  test("gets list of columns that can handle highwatermark", async () => {
    const columns = await getColumns();
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "profile_id",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(5);
  });
});
