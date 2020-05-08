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

import { sourceFilters } from "../../src/lib/table-import/sourceFilters";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/core/api/__tests__/utils/specHelper";
import { SimpleAppOptions } from "@grouparoo/core";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-source-filters.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-source-filters");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function getFilters() {
  const response = await sourceFilters({
    appOptions,
    sourceOptions,
    app: null,
    source: null,
    sourceMapping: null,
    profilePropertyRule: null,
    profilePropertyRuleOptions: null,
  });
  return response;
}

describe("bigquery/table/sourceFilters", () => {
  test("gets filters", async () => {
    const columns = await (await getFilters()).sort((a, b) =>
      a.key.localeCompare(b.key)
    );
    const columnNames = columns.map((r) => r.key);
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "profile_id",
      "purchase",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(6);

    expect(columns[0]).toMatchObject({
      key: "amount",
      ops: ["equals", "does not equal", "greater than", "less than"],
    });
    expect(columns[1]).toMatchObject({
      key: "date",
      ops: ["equals", "does not equal", "greater than", "less than"],
    });
    expect(columns[2]).toMatchObject({
      key: "id",
      ops: ["equals", "does not equal", "greater than", "less than"],
    });
    expect(columns[3]).toMatchObject({
      key: "profile_id",
      ops: ["equals", "does not equal", "greater than", "less than"],
    });
    expect(columns[4]).toMatchObject({
      key: "purchase",
      ops: ["equals", "does not equal", "contains", "does not contain"],
    });
    expect(columns[5]).toMatchObject({
      key: "stamp",
      ops: ["equals", "does not equal", "greater than", "less than"],
    });
  });
});
