import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions, Import, plugin, Run } from "@grouparoo/core";

const nockFile = path.join(__dirname, "../", "fixtures", "table-records.js");

import { getConnection } from "../../src/lib/table-import/connection";
const records = getConnection().methods.records;

// these comments to use nock
const newNock = false;
require("./../fixtures/table-records");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

let source;
let run;
let schedule;
let sourceMapping;

async function runIt({ highWaterMark, sourceOffset, limit, scheduleFilters }) {
  const imports = [];
  plugin.createImports = jest.fn(async function (
    mapping: { [remoteKey: string]: string },
    run: Run,
    rows: { [remoteKey: string]: any }[]
  ): Promise<Import[]> {
    rows.forEach((r) => imports.push(r));
    return null;
  });
  const connection = await connect({ appOptions, app: null, appId: null });
  const {
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  } = await records({
    connection,
    run,
    appOptions,
    sourceMapping,
    source,
    limit,
    highWaterMark,
    sourceOffset,
    schedule,
    scheduleOptions: await schedule.getOptions(),
    scheduleFilters,
    runId: null,
    sourceId: null,
    scheduleId: null,
    app: null,
    appId: null,
    sourceOptions: null,
    properties: [],
  });
  return {
    imports,
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  };
}

describe("bigquery/table/records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // make the userId and email and other properties
    await helper.factories.properties();

    // setup the world
    const app = await helper.factories.app({
      name: "BQ",
      type: "bigquery",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "BQS",
      type: "bigquery-import-table",
    });
    sourceMapping = { id: "userId" };
    await source.setOptions({ table: "records" });
    await source.setMapping(sourceMapping);
    await source.update({ state: "ready" });

    const options = { column: "stamp" };
    schedule = await helper.factories.schedule(source, { options });
    run = await helper.factories.run(schedule, { state: "running" });
  });

  test("imports all records when no highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = {};
    let scheduleFilters = [];
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
      scheduleFilters,
    });
    expect(importsCount).toBe(10);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("imports all records when there is a highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = { stamp: "2020-02-07T12:13:14.000Z" };
    let scheduleFilters = [];
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
      scheduleFilters,
    });
    expect(importsCount).toBe(4);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([7, 8, 9, 10]);
  });

  test("handles getting no results", async () => {
    let limit = 100;
    let sourceOffset = 0;
    let highWaterMark = { stamp: "2020-02-11T12:13:14.000Z" }; // past the last one
    let scheduleFilters = [];
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
      scheduleFilters,
    });
    expect(importsCount).toBe(0);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([]);
  });

  test(
    "imports a page at a time",
    async () => {
      let limit = 4;
      let highWaterMark = {};
      let scheduleFilters = [];
      let importedIds;

      const page1 = await runIt({
        limit,
        sourceOffset: 0,
        highWaterMark,
        scheduleFilters,
      });
      expect(page1.importsCount).toBe(4);
      expect(page1.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("2020-02-04"); // the times changes based on the TZ of the test server, but the date seems to be OK...
      importedIds = page1.imports.map((r) => r.id);
      expect(importedIds).toEqual([1, 2, 3, 4]);

      // do the next page
      const page2 = await runIt({
        limit,
        highWaterMark: page1.highWaterMark,
        sourceOffset: page1.sourceOffset,
        scheduleFilters,
      });
      expect(page2.importsCount).toBe(4);
      expect(page2.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("2020-02-07");
      importedIds = page2.imports.map((r) => r.id);
      expect(importedIds).toEqual([4, 5, 6, 7]);

      // do the next page
      const page3 = await runIt({
        limit,
        highWaterMark: page2.highWaterMark,
        sourceOffset: page2.sourceOffset,
        scheduleFilters,
      });
      expect(page3.importsCount).toBe(4);
      expect(page3.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("2020-02-10");
      importedIds = page3.imports.map((r) => r.id);
      expect(importedIds).toEqual([7, 8, 9, 10]);
    },
    helper.longTime
  );

  test("can be filtered", async () => {
    let limit = 100;
    let highWaterMark = {};
    let sourceOffset = 0;
    let scheduleFilters = [
      { key: "id", op: "greater than", match: 4 },
      { key: "id", op: "less than", match: 7 },
    ];
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
      scheduleFilters,
    });
    expect(importsCount).toBe(2);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([5, 6]);
  });
});
