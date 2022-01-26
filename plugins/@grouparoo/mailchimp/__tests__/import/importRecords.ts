import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mailchimp": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";

import {
  loadAppOptions,
  loadSourceOptions,
  updater,
} from "../utils/nockHelper";
import {
  SimpleAppOptions,
  Import,
  plugin,
  Run,
  SimpleDestinationOptions,
} from "@grouparoo/core";

import { importRecords } from "../../src/lib/import/importRecords";

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions: SimpleDestinationOptions = loadSourceOptions(newNock);

let source;
let run;
let schedule;
let sourceMapping;

async function runIt({ highWaterMark, sourceOffset, limit }) {
  const imports = [];
  plugin.createImports = jest.fn(async function (
    mapping: { [remoteKey: string]: string },
    run: Run,
    rows: { [remoteKey: string]: any }[]
  ): Promise<Import[]> {
    rows.forEach((r) => imports.push(r));
    return null;
  });
  const connection = await connect(appOptions);
  const {
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  } = await importRecords({
    connection,
    run,
    appOptions,
    sourceMapping,
    source,
    limit,
    highWaterMark,
    sourceOffset,
    schedule,
    sourceOptions,
    scheduleOptions: await schedule.getOptions(),
    scheduleFilters: [],
    runId: null,
    sourceId: null,
    scheduleId: null,
    app: null,
    appId: null,
    properties: [],
  });
  return {
    imports,
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  };
}

describe("mailchimp/import/records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // make the userId and email and other properties
    await helper.factories.properties();

    // setup the world
    const app = await helper.factories.app({
      name: "App",
      type: "mailchimp",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "Source",
      type: "mailchimp-import-contacts",
      state: "draft",
    });
    sourceMapping = { "merge_fields.USERID": "userId" };
    await source.setOptions(sourceOptions);
    await source.setMapping(sourceMapping);
    await source.update({ state: "ready" });

    const options = {};
    schedule = await helper.factories.schedule(source, { options });
    run = await helper.factories.run(schedule, { state: "running" });
  });

  test("imports all records when no highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = {};
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toEqual(10);
    const importedIds = imports.map((r) => r["merge_fields.USERID"]);
    expect(importedIds.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort());
  });

  test("imports all records when there is a highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = { last_changed: "2020-02-07T12:13:14.000Z" };
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toEqual(10);
    const importedIds = imports.map((r) => r["merge_fields.USERID"]);
    expect(importedIds.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort());
  });

  test("handles getting no results from stamp", async () => {
    let limit = 100;
    let sourceOffset = 0;
    let highWaterMark = { last_changed: "2025-02-11T12:13:14.000Z" }; // past the last one
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toEqual(0);
    const importedIds = imports.map((r) => r["merge_fields.USERID"]);
    expect(importedIds.sort()).toEqual([].sort());
  });

  test("handles getting no results from offset", async () => {
    let limit = 100;
    let sourceOffset = 1000;
    let highWaterMark = { last_changed: "2020-02-07T12:13:14.000Z" };
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toEqual(0);
    const importedIds = imports.map((r) => r["merge_fields.USERID"]);
    expect(importedIds.sort()).toEqual([].sort());
  });

  test(
    "imports a page at a time",
    async () => {
      let limit = 4;
      let highWaterMark = {};

      const page1 = await runIt({
        limit,
        sourceOffset: 0,
        highWaterMark,
      });
      expect(page1.importsCount).toEqual(4);
      expect(page1.sourceOffset).toEqual(0);
      expect(
        new Date(Object.values(page1.highWaterMark)[0]).getTime()
      ).toBeGreaterThan(0);

      // do the next page
      const page2 = await runIt({
        limit,
        highWaterMark: page1.highWaterMark,
        sourceOffset: page1.sourceOffset,
      });
      expect(page2.importsCount).toEqual(4);
      expect(page2.sourceOffset).toEqual(4);
      expect(
        new Date(Object.values(page2.highWaterMark)[0]).getTime()
      ).toBeGreaterThan(0);

      // do the next page
      const page3 = await runIt({
        limit,
        highWaterMark: page2.highWaterMark,
        sourceOffset: page2.sourceOffset,
      });
      expect(page3.importsCount).toEqual(4);
      expect(page3.sourceOffset).toEqual(8);
      expect(
        new Date(Object.values(page3.highWaterMark)[0]).getTime()
      ).toBeGreaterThan(0);

      // do the next page
      const page4 = await runIt({
        limit,
        highWaterMark: page3.highWaterMark,
        sourceOffset: page3.sourceOffset,
      });
      expect(page4.importsCount).toEqual(2);
      expect(page4.sourceOffset).toEqual(10);
      expect(
        new Date(Object.values(page4.highWaterMark)[0]).getTime()
      ).toBeGreaterThan(0);

      // do the next page
      const page5 = await runIt({
        limit,
        highWaterMark: page4.highWaterMark,
        sourceOffset: page4.sourceOffset,
      });
      expect(page5.importsCount).toEqual(0);
      expect(page5.sourceOffset).toEqual(0);
      expect(
        new Date(Object.values(page5.highWaterMark)[0]).getTime()
      ).toBeGreaterThan(0);
    },
    helper.longTime
  );
});
