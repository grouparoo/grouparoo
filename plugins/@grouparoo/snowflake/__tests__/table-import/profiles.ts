import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/snowflake": { path: path.join(__dirname, "..", "..") },
});

import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions, Import, plugin, Run } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const profiles = getConnection().methods.profiles;

const nockFile = path.join(__dirname, "../", "fixtures", "table-profiles.js");

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

let source;
let run;
let schedule;
let sourceMapping;

async function runIt({ highWaterMark, sourceOffset, limit }) {
  const imports = [];
  plugin.createImport = jest.fn(async function (
    mapping: { [remoteKey: string]: string },
    run: Run,
    row: { [remoteKey: string]: any }
  ): Promise<Import> {
    imports.push(row);
    return null;
  });
  const connection = await connect({ appOptions, app: null, appId: null });
  const {
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  } = await profiles({
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
    runId: null,
    scheduleId: null,
    sourceId: null,
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

describe("snowflake/table/profiles", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    // setup the world
    const app = await helper.factories.app({
      name: "SF",
      type: "snowflake",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "SFS",
      type: "snowflake-table-import",
    });
    sourceMapping = { ID: "userId" };
    await source.setOptions({ table: "PROFILES" });
    await source.setMapping(sourceMapping);
    await source.update({ state: "ready" });

    const options = { column: "STAMP" };
    schedule = await helper.factories.schedule(source, { options });
    run = await helper.factories.run(schedule, { state: "running" });
  });

  test("imports all profiles when no highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = {};
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toBe(10);
    const importedIds = imports.map((r) => r.ID);
    expect(importedIds).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("imports all profiles when there is a highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = { STAMP: "2020-02-07T12:13:14.000Z" };
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toBe(4);
    const importedIds = imports.map((r) => r.ID);
    expect(importedIds).toEqual([7, 8, 9, 10]);
  });

  test("handles getting no results", async () => {
    let limit = 100;
    let sourceOffset = 0;
    let highWaterMark = { STAMP: "2020-02-11T12:13:14.000Z" }; // past the last one
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toBe(0);
    const importedIds = imports.map((r) => r.ID);
    expect(importedIds).toEqual([]);
  });

  test(
    "imports a page at a time",
    async () => {
      let limit = 4;
      let highWaterMark = {};
      let importedIds;

      const page1 = await runIt({
        limit,
        sourceOffset: 0,
        highWaterMark,
      });
      expect(page1.importsCount).toBe(4);
      expect(page1.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("2020-02-04"); // the times changes based on the TZ of the test server, but the date seems to be OK...
      importedIds = page1.imports.map((r) => r.ID);
      expect(importedIds).toEqual([1, 2, 3, 4]);

      // do the next page
      const page2 = await runIt({
        limit,
        highWaterMark: page1.highWaterMark,
        sourceOffset: page1.sourceOffset,
      });
      expect(page2.importsCount).toBe(4);
      expect(page2.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("2020-02-07");
      importedIds = page2.imports.map((r) => r.ID);
      expect(importedIds).toEqual([4, 5, 6, 7]);

      // do the next page
      const page3 = await runIt({
        limit,
        highWaterMark: page2.highWaterMark,
        sourceOffset: page2.sourceOffset,
      });
      expect(page3.importsCount).toBe(4);
      expect(page3.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("2020-02-10");
      importedIds = page3.imports.map((r) => r.ID);
      expect(importedIds).toEqual([7, 8, 9, 10]);
    },
    helper.setupTime
  );
});
