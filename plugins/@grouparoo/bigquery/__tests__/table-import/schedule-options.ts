// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/bigquery": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { scheduleOptions } from "../../src/lib/table-import/scheduleOptions";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { SimpleAppOptions } from "@grouparoo/core";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-schedule-options.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/table-schedule-options");
// or these to make it true
const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function getColumns() {
  const columnOption = scheduleOptions[0];
  const optionMethod = columnOption.options;

  const response = await optionMethod({
    appOptions,
    sourceOptions,
    app: null,
    source: null,
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
