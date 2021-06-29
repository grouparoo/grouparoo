import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const scheduleOptionsMethod = getConnection().methods.scheduleOptions;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-schedule-options.js"
);

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "PURCHASES" };

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

describe("snowflake/table/scheduleOptions", () => {
  test("gets list of columns that can handle highwatermark", async () => {
    const columns = await getColumns();
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "AMOUNT",
      "DATE",
      "ID",
      "PROFILE_ID",
      "STAMP",
    ]);
    expect(columns.length).toBe(5);

    let column, value;
    column = columns.find((col) => col.key === "ID");
    value = column.examples[0];
    expect(typeof value).toEqual("number");
    expect(column.examples.sort()).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort()
    );

    column = columns.find((col) => col.key === "STAMP");
    value = column.examples[0];
    expect(value.constructor.name).toEqual("Date");
  });
});
