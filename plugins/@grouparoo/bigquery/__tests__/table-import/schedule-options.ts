import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import path from "path";

import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const scheduleOptions = getConnection().scheduleOptions;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-schedule-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-schedule-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function getColumns() {
  const columnOption = scheduleOptions[0];
  const optionMethod = columnOption.options;
  const connection = await connect({ appOptions, app: null, appGuid: null });

  const response = await optionMethod({
    connection,
    appOptions,
    sourceOptions,
    app: null,
    appGuid: null,
    source: null,
    sourceGuid: null,
    sourceMapping: null,
  });
  return response;
}

describe("bigquery/table/scheduleOptions", () => {
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
