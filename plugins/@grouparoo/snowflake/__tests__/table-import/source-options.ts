import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { sourceOptions } from "../../src/lib/table-import/options";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

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
  const connection = await connect({ appOptions, app: null });
  const response = await sourceOptions({
    connection,
    appOptions,
    sourceOptions,
    app: null,
  });

  return response.table.options;
}

describe("snowflake/table/sourceOptions", () => {
  test("gets tables", async () => {
    const tables = await getTables();
    const tableNames = tables.sort();
    expect(tableNames).toEqual(
      expect.arrayContaining(["PROFILES", "PURCHASES"])
    );
  });
});
