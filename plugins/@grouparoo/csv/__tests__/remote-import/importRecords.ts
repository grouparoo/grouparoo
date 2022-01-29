import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/csv": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { SimpleSourceOptions, Import, plugin, Run } from "@grouparoo/core";
import { importRecords } from "../../src/lib/importRecords";

// these used and set by test
const sourceOptions: SimpleSourceOptions = {
  url: "https://raw.githubusercontent.com/grouparoo/grouparoo/main/core/__tests__/data/records-10.csv",
  fileAgeHours: 1,
};

let source;
let run;
let schedule;
let sourceMapping;

async function runIt({ sourceOffset, limit }) {
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
  } = await importRecords({
    run,
    sourceMapping,
    source,
    limit,
    highWaterMark: {},
    sourceOffset,
    schedule,
    sourceOptions,
    scheduleOptions: await schedule.getOptions(),
    scheduleFilters: [],
    connection: null,
    appOptions: null,
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

describe("csv/table/importRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    // make the userId and email and other properties
    await helper.factories.properties();

    // setup the world
    const app = await helper.factories.app({
      name: "CSV",
      type: "csv",
      options: {},
    });

    source = await helper.factories.source(app, {
      name: "CSV-SOURCE",
      type: "csv-import-table",
    });
    sourceMapping = { id: "userId" };
    await source.setOptions(sourceOptions);
    await source.setMapping(sourceMapping);
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source, {
      incremental: false,
      options: {},
    });
    run = await helper.factories.run(schedule, { state: "running" });
  });

  test("imports all records when no sourceOffset", async () => {
    let limit = 100;
    let sourceOffset = 0;
    const { imports, importsCount } = await runIt({
      limit,
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

  test("imports some records when there is a sourceOffset", async () => {
    let limit = 100;
    let sourceOffset = 6;
    const { imports, importsCount } = await runIt({
      limit,
      sourceOffset,
    });
    expect(importsCount).toBe(4);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual(["7", "8", "9", "10"]);
  });

  test("handles getting no results", async () => {
    let limit = 100;
    let sourceOffset = 999; // past the last one
    const { imports, importsCount } = await runIt({
      limit,
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
      let importedIds;

      const page1 = await runIt({
        limit,
        sourceOffset: 0,
      });
      expect(page1.importsCount).toBe(4);
      expect(page1.sourceOffset).toBe(4);
      importedIds = page1.imports.map((r) => r.id);
      expect(importedIds).toEqual(["1", "2", "3", "4"]);

      // do the next page
      const page2 = await runIt({
        limit,
        sourceOffset: page1.sourceOffset,
      });
      expect(page2.importsCount).toBe(4);
      expect(page2.sourceOffset).toBe(8);
      importedIds = page2.imports.map((r) => r.id);
      expect(importedIds).toEqual(["5", "6", "7", "8"]);

      // do the next page
      const page3 = await runIt({
        limit,
        sourceOffset: page2.sourceOffset,
      });
      expect(page3.importsCount).toBe(2);
      expect(page3.sourceOffset).toBe(10);
      importedIds = page3.imports.map((r) => r.id);
      expect(importedIds).toEqual(["9", "10"]);
    },
    helper.longTime
  );
});
