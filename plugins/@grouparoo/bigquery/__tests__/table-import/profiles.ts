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

import { profiles } from "../../src/lib/table-import/profiles";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { SimpleAppOptions, Import, plugin, Run } from "@grouparoo/core";

const nockFile = path.join(__dirname, "../", "fixtures", "table-profiles.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/table-profiles");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

let actionhero;

let source;
let run;
let schedule;
let sourceMapping;

async function runIt({ filter, highWaterMark, limit }) {
  const imports = [];
  plugin.createImport = jest.fn(async function (
    mapping: { [remoteKey: string]: string },
    run: Run,
    row: { [remoteKey: string]: any }
  ): Promise<Import> {
    imports.push(row);
    return null;
  });
  const { nextHighWaterMark, importsCount } = await profiles({
    run,
    appOptions,
    sourceMapping,
    source,
    limit,
    highWaterMark,
    filter,
    schedule,
    app: null,
    sourceOptions: null,
  });
  return { imports, nextHighWaterMark, importsCount };
}

describe("bigquery/table/profiles", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    // make the userId and email and other properties
    await helper.factories.profilePropertyRules();

    // setup the world
    const app = await helper.factories.app({
      name: "BQ",
      type: "bigquery",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "BQS",
      type: "bigquery-table-import",
    });
    sourceMapping = { id: "userId" };
    await source.setOptions({ table: "profiles" });
    await source.setMapping(sourceMapping);
    await source.update({ state: "ready" });

    const options = { column: "stamp" };
    schedule = await helper.factories.schedule(source, { options });
    run = await helper.factories.run(schedule, { state: "running" });
  });

  test("imports all profiles when no filter", async () => {
    let limit = 100;
    let highWaterMark = 0;
    let filter = {};
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      filter,
    });
    expect(importsCount).toBe(10);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("imports all profiles when there is a filter", async () => {
    let limit = 100;
    let highWaterMark = 0;
    let filter = { stamp: "2020-02-07T12:13:14.000Z" };
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      filter,
    });
    expect(importsCount).toBe(4);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([7, 8, 9, 10]);
  });

  test("handles getting no results", async () => {
    let limit = 100;
    let highWaterMark = 0;
    let filter = { stamp: "2020-02-11T12:13:14.000Z" }; // past the last one
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      filter,
    });
    expect(importsCount).toBe(0);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([]);
  });

  test(
    "imports a page at a time",
    async () => {
      let limit = 4;
      let filter = {};
      let importedIds;

      const page1 = await runIt({
        limit,
        highWaterMark: 0,
        filter,
      });
      expect(page1.importsCount).toBe(4);
      expect(page1.nextHighWaterMark).toBe(4);
      importedIds = page1.imports.map((r) => r.id);
      expect(importedIds).toEqual([1, 2, 3, 4]);

      // do the next page
      const page2 = await runIt({
        limit,
        highWaterMark: page1.nextHighWaterMark,
        filter,
      });
      expect(page2.importsCount).toBe(4);
      expect(page2.nextHighWaterMark).toBe(8);
      importedIds = page2.imports.map((r) => r.id);
      expect(importedIds).toEqual([5, 6, 7, 8]);

      // do the next page
      const page3 = await runIt({
        limit,
        highWaterMark: page2.nextHighWaterMark,
        filter,
      });
      expect(page3.importsCount).toBe(2);
      expect(page3.nextHighWaterMark).toBe(12);
      importedIds = page3.imports.map((r) => r.id);
      expect(importedIds).toEqual([9, 10]);
    },
    1000 * 30
  );
});
