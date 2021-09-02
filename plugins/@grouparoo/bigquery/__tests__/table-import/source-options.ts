import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceOptions = getConnection().methods.sourceOptions;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-source-options.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-source-options");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

async function getTables() {
  const connection = await connect({ appOptions, app: null, appId: null });
  const response = await sourceOptions({
    connection,
    appOptions,
    sourceOptions: null,
    app: null,
    appId: null,
  });

  return response.table.options;
}

describe("bigquery/table/sourceOptions", () => {
  test("gets tables", async () => {
    const tables = await getTables();
    const tableNames = tables.sort();
    expect(tableNames).toEqual(
      expect.arrayContaining(["profiles", "purchases"])
    );
  });
});
