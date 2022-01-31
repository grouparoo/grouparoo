import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceOptions = getConnection().methods.sourceOptions;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

async function getTables() {
  const connection = await connect({ appOptions, app: null, appId: null });
  const response = await sourceOptions({
    connection,
    appOptions,
    sourceOptions: null,
    app: null,
    appId: null,
  });

  return response.table.options;
}

describe("snowflake/table/sourceOptions", () => {
  test("gets tables", async () => {
    const tables = await getTables();
    const tableNames = tables.sort();
    expect(tableNames).toEqual(
      expect.arrayContaining(["PROFILES", "PURCHASES"])
    );
  });
});
