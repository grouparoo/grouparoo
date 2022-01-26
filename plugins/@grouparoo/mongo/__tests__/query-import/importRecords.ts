import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mongo": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { beforeData, afterData, getConfig } from "../utils/data";
import { Import, Property, plugin, Run } from "@grouparoo/core";

import { getConnection } from "../../src/lib/query-import/connection";
const importRecords = getConnection().methods.importRecords;

const { appOptions, usersTableName } = getConfig();
let client;

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
  } = await importRecords({
    connection: client,
    run,
    appOptions,
    sourceMapping,
    source,
    limit,
    highWaterMark,
    sourceOffset,
    schedule,
    scheduleOptions: await schedule.getOptions(),
    scheduleFilters: [],
    runId: null,
    sourceId: null,
    scheduleId: null,
    app: null,
    appId: null,
    sourceOptions: {
      table: usersTableName,
    },
    properties: await Property.findAll(),
  });
  return {
    imports,
    highWaterMark: nextHighWaterMark,
    importsCount,
    sourceOffset: nextSourceOffset,
  };
}

describe("mongo/query/importRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => await afterData());

  beforeAll(async () => {
    // setup the world
    const app = await helper.factories.app({
      name: "App",
      type: "mongo",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "Importer",
      type: "mongo-import-query",
    });

    await source.setOptions({
      table: usersTableName,
    });

    await source.update({ state: "ready" });

    const userIdProperty = await Property.findOne({
      where: { key: "userId" },
    });

    const query = [
      {
        $project: {
          id: 1,
        },
      },
    ];

    const options = {
      query: JSON.stringify(query),
      propertyId: userIdProperty.id,
    };

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
    expect(importsCount).toBe(10);
    const importedIds = imports.map((r) => r.id);
    expect(importedIds).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("handles getting no results", async () => {
    let limit = 100;
    let sourceOffset = 0;
    let highWaterMark = { limit: 100, offset: 9999 }; // past the last one
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
      let highWaterMark = { limit, offset: 0 };
      let importedIds;

      const page1 = await runIt({
        limit,
        highWaterMark,
        sourceOffset: null,
      });
      expect(page1.importsCount).toBe(4);
      expect(page1.highWaterMark).toEqual({ limit, offset: 4 });
      importedIds = page1.imports.map((r) => r.id);
      expect(importedIds).toEqual([1, 2, 3, 4]);

      // do the next page
      const page2 = await runIt({
        limit,
        highWaterMark: page1.highWaterMark,
        sourceOffset: null,
      });
      expect(page2.importsCount).toBe(4);
      expect(page2.highWaterMark).toEqual({ limit, offset: 8 });
      importedIds = page2.imports.map((r) => r.id);
      expect(importedIds).toEqual([5, 6, 7, 8]);

      // do the next page
      const page3 = await runIt({
        limit,
        highWaterMark: page2.highWaterMark,
        sourceOffset: null,
      });
      expect(page3.importsCount).toBe(2);
      expect(page3.highWaterMark).toEqual({ limit, offset: 10 });
      importedIds = page3.imports.map((r) => r.id);
      expect(importedIds).toEqual([9, 10]);
    },
    helper.longTime
  );
});
