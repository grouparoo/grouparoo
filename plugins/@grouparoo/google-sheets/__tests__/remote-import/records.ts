import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { SimpleSourceOptions, Import, plugin, Run } from "@grouparoo/core";
import { records } from "../../src/lib/sheet-import/records";
import { loadAppOptions, updater } from "../utils/nockHelper";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

const appOptions = loadAppOptions();

const sourceOptions: SimpleSourceOptions = {
  sheet_url:
    "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0",
};

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
  const {
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  } = await records({
    run,
    sourceMapping,
    source,
    limit,
    highWaterMark,
    sourceOffset,
    schedule,
    sourceOptions,
    appOptions,
    sourceId: "sheets test",
    scheduleOptions: await schedule.getOptions(),
    scheduleFilters: [],
    connection: null,
    runId: null,
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

describe("csv/table/records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // make the userId and email and other properties
    await helper.factories.properties();

    // setup the world
    const app = await helper.factories.app({
      name: "GoogleSheets",
      type: "google-sheets",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "GoogleSheets-SOURCE",
      type: "google-sheet-import",
    });
    sourceMapping = { id: "userId" };
    await source.setOptions(sourceOptions);
    await source.setMapping(sourceMapping);
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source, { options: {} });
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
    expect(importsCount).toBe(10);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ]);
  });

  test("imports all records when there is a highWaterMark", async () => {
    let limit = 100;
    let highWaterMark = { row: "6" };
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
    });
    expect(importsCount).toBe(4);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual(["7", "8", "9", "10"]);
  });

  test("handles getting no results", async () => {
    let limit = 100;
    let sourceOffset = 0;
    let highWaterMark = { row: "999" }; // past the last one
    const { imports, importsCount } = await runIt({
      limit,
      highWaterMark,
      sourceOffset,
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
      let importedIds;

      const page1 = await runIt({
        limit,
        sourceOffset: 0,
        highWaterMark,
      });
      expect(page1.importsCount).toBe(4);
      expect(page1.sourceOffset).toBe(0);
      expect(Object.values(page1.highWaterMark)[0]).toMatch("4");
      importedIds = page1.imports.map((r) => r.id);
      expect(importedIds).toEqual(["1", "2", "3", "4"]);

      // do the next page
      const page2 = await runIt({
        limit,
        highWaterMark: page1.highWaterMark,
        sourceOffset: page1.sourceOffset,
      });
      expect(page2.importsCount).toBe(4);
      expect(page2.sourceOffset).toBe(0);
      expect(Object.values(page2.highWaterMark)[0]).toMatch("8");
      importedIds = page2.imports.map((r) => r.id);
      expect(importedIds).toEqual(["5", "6", "7", "8"]);

      // do the next page
      const page3 = await runIt({
        limit,
        highWaterMark: page2.highWaterMark,
        sourceOffset: page2.sourceOffset,
      });
      expect(page3.importsCount).toBe(2);
      expect(page3.sourceOffset).toBe(0);
      expect(Object.values(page3.highWaterMark)[0]).toMatch("10");
      importedIds = page3.imports.map((r) => r.id);
      expect(importedIds).toEqual(["9", "10"]);
    },
    helper.longTime
  );
});
