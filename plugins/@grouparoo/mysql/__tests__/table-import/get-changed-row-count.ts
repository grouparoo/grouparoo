import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { App, Source, Schedule } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import { FilterOperation } from "@grouparoo/app-templates/dist/source/table";
import { getChangedRowCount } from "../../src/lib/table-import/getChangedRowCount";
import { beforeData, afterData, getConfig } from "../utils/data";
const { appOptions, usersTableName } = getConfig();

let actionhero, client;

describe("mysql/table/scheduleOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let app: App;
  let source: Source;
  let schedule: Schedule;

  beforeAll(async () => {
    const setupResp = await beforeData();
    client = setupResp.client;
  }, helper.setupTime);

  afterAll(async () => afterData());

  beforeAll(async () => {
    app = await helper.factories.app({
      name: "MYSQL",
      type: "mysql",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "Importer",
      type: "mysql-table-import",
    });
    await source.setOptions({ table: usersTableName });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source, {
      options: { column: "stamp" },
    });
  });

  test("getChangedRowCount works", async () => {
    const rowCount = await getChangedRowCount({
      connection: client,
      appOptions,
      appId: app.id,
      tableName: usersTableName,
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
      connection: client,
      appOptions,
      appId: app.id,
      tableName: usersTableName,
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

  test("gets the percentage complete of a run", async () => {
    const run = await helper.factories.run(schedule, { state: "running" });
    const percentComplete = await run.determinePercentComplete();
    expect(percentComplete).toBe(0);
  });
});
