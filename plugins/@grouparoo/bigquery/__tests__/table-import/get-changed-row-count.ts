import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});

import { App, Source, Schedule, SimpleAppOptions } from "@grouparoo/core";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { FilterOperation } from "@grouparoo/app-templates/src/source/table";
import { getChangedRowCount } from "../../src/lib/table-import/getChangedRowCount";
import { loadAppOptions, updater } from "../utils/nockHelper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-get-changed-row-count.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-get-changed-row-count");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions: SimpleAppOptions = loadAppOptions(newNock);

let actionhero, connection;

describe("bigquery/table/scheduleOptions", () => {
  let app: App;
  let source: Source;
  let schedule: Schedule;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    connection = await connect({ appOptions, app: null, appGuid: null });
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();

    app = await helper.factories.app({
      name: "BQ",
      type: "bigquery",
      options: appOptions,
    });

    source = await helper.factories.source(app, {
      name: "Importer",
      type: "bigquery-table-import",
    });
    await source.setOptions({ table: "profiles" });
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
      appGuid: app.guid,
      tableName: "profiles",
      highWaterMarkCondition: {
        columnName: "stamp",
        value: 0,
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
