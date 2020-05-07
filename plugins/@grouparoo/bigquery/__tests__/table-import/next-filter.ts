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

import { nextFilter } from "../../src/lib/table-import/nextFilter";

import { loadAppOptions, rewriteNockEnv } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-next-filter.js"
);

// these comments to use nock
//const newNock = false;
//require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
// helper.recordNock(nockFile, rewriteNockEnv);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function runIt({ scheduleOptions }) {
  const response = await nextFilter({
    appOptions,
    sourceOptions,
    scheduleOptions,
    app: null,
    source: null,
    sourceMapping: null,
    schedule: null,
    run: null,
  });
  return response;
}

describe("bigquery/table/nextFilter", () => {
  test("it should give highest timestamp value", async () => {
    const scheduleOptions = { column: "stamp" };
    const filter = await runIt({ scheduleOptions });
    expect(filter).toMatchObject({ stamp: "2020-02-20T12:13:14.000Z" });
  });

  test("it should give highest date value", async () => {
    const scheduleOptions = { column: "date" };
    const filter = await runIt({ scheduleOptions });
    expect(filter).toMatchObject({ date: "2020-02-20" });
  });

  test("it should give highest integer value", async () => {
    const scheduleOptions = { column: "id" };
    const filter = await runIt({ scheduleOptions });
    expect(filter).toMatchObject({ id: 20 });
  });

  test("it should give highest float value", async () => {
    const scheduleOptions = { column: "amount" };
    const filter = await runIt({ scheduleOptions });
    expect(filter).toMatchObject({ amount: 3.14 });
  });
});
