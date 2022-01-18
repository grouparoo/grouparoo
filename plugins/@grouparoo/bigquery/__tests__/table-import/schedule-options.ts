import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";
import { getConnection } from "../../src/lib/table-import/connection";

const scheduleOptionsMethod = getConnection().methods.scheduleOptions;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function getColumns() {
  const connection = await connect({ appOptions, app: null, appId: null });

  const scheduleOptions = await scheduleOptionsMethod({
    schedule: null,
    scheduleId: "",
    scheduleOptions: {},
  });

  const columnOption = scheduleOptions[0];
  const optionMethod = columnOption.options;

  const response = await optionMethod({
    connection,
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

describe("bigquery/table/scheduleOptions", () => {
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
