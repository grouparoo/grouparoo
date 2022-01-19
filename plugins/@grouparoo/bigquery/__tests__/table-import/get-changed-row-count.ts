import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});

import { App, Source, Schedule, SimpleAppOptions } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { FilterOperation } from "@grouparoo/app-templates/dist/source/table";
import { getChangedRowCount } from "../../src/lib/table-import/getChangedRowCount";
import { loadAppOptions, updater } from "../utils/nockHelper";

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

let connection;

describe("bigquery/table/scheduleOptions", () => {
  let app: App;
  let source: Source;
  let schedule: Schedule;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    connection = await connect({ appOptions, app: null, appId: null });
  }, helper.setupTime);

  beforeAll(async () => {
    await helper.factories.properties();

    app = await helper.factories.app({
      name: "BQ",
      type: "bigquery",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "Importer",
      type: "bigquery-import-table",
    });
    await source.setOptions({ table: "records" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source, {
      options: { column: "stamp" },
    });
  });

  test("getChangedRowCount works", async () => {
    const rowCount = await getChangedRowCount({
      connection,
      appOptions,
      appId: app.id,
      tableName: "records",
      incremental: true,
      matchConditions: [],
      highWaterMarkCondition: {
        columnName: "stamp",
        value: 0,
        filterOperation: FilterOperation.GreaterThan,
      },
    });

    expect(rowCount).toBe(10);
  });

  test("it can be filtered", async () => {
    const rowCount = await getChangedRowCount({
      connection,
      appOptions,
      appId: app.id,
      tableName: "records",
      incremental: true,
      matchConditions: [
        {
          columnName: "id",
          filterOperation: FilterOperation.GreaterThan,
          value: 4,
        },
        {
          columnName: "id",
          filterOperation: FilterOperation.LessThan,
          value: 7,
        },
      ],
      highWaterMarkCondition: {
        columnName: "stamp",
        value: new Date(0),
        filterOperation: FilterOperation.GreaterThan,
      },
    });

    expect(rowCount).toBe(2);
  });

  test("highwatermark is ignored when not incremental", async () => {
    const rowCount = await getChangedRowCount({
      connection,
      appOptions,
      appId: app.id,
      tableName: "records",
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
