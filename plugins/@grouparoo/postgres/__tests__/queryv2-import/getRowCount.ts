import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { App, Source, Schedule } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import { FilterOperation } from "@grouparoo/app-templates/dist/source/queryv2";
import { PostgresPoolClient } from "../../src/lib/connect";
import { getRowCount } from "../../src/lib/shared/getRowCount";
import { beforeData, afterData, getConfig } from "../utils/data";
const { appOptions, usersSourceQuery } = getConfig();

let client: PostgresPoolClient;

describe("postgres/queryv2/getRowCount", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let app: App;
  let source: Source;
  let schedule: Schedule;

  beforeAll(async () => {
    const setupResp = await beforeData();
    client = setupResp.client;
  });

  afterAll(async () => afterData());

  beforeAll(async () => {
    app = await helper.factories.app({
      name: "PG",
      type: "postgres",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "Importer",
      type: "postgres-import-queryv2",
    });
    await source.setOptions({ query: usersSourceQuery });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source, {
      options: { column: "stamp" },
    });
  });

  test("getRowCount works", async () => {
    const rowCount = await getRowCount({
      connection: client,
      appOptions,
      appId: app.id,
      sourceQuery: usersSourceQuery,
      incremental: true,
      matchConditions: [],
      highWaterMarkCondition: {
        columnName: "stamp",
        value: new Date(0),
        filterOperation: FilterOperation.GreaterThan,
      },
    });

    expect(rowCount).toBe(10);
  });

  test("highwatermark is ignored when not incremental", async () => {
    const rowCount = await getRowCount({
      connection: client,
      appOptions,
      appId: app.id,
      sourceQuery: usersSourceQuery,
      incremental: false,
      matchConditions: [],
      highWaterMarkCondition: {
        columnName: "stamp",
        value: new Date("2020-02-05"),
        filterOperation: FilterOperation.GreaterThan,
      },
    });

    expect(rowCount).toBe(10);
  });

  test("gets the percentage complete of a run", async () => {
    const run = await helper.factories.run(schedule, { state: "running" });
    const percentComplete = await run.determinePercentComplete();
    expect(percentComplete).toBe(0);
  });
});
