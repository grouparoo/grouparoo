import "@grouparoo/spec-helper";

import { afterData, beforeData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";

const scheduleOptionsMethod = getConnection().methods.scheduleOptions;

// these used and set by test
const { appOptions, purchasesTableName, locationsTableName } = getConfig();
let client;

async function getColumns(sourceOptions) {
  const scheduleOptions = await scheduleOptionsMethod({
    connection: client,
    appOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
    schedule: null,
    scheduleId: "",
    scheduleOptions: {},
  });

  const columnOption = scheduleOptions[0];
  const optionMethod = columnOption.options;

  return optionMethod({
    connection: client,
    appOptions,
    sourceOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
    sourceMapping: null,
    properties: [],
  });
}

describe("mongo/table/scheduleOptions", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });
  test("gets list of columns that can handle highwatermark", async () => {
    const sourceOptions = {
      table: purchasesTableName,
    };
    const columns = await getColumns(sourceOptions);
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "profile_id",
      "stamp",
    ]); // leaves out
    expect(columns.length).toBe(5);
  });

  test("gets list of columns from location collection", async () => {
    const locationSourceOptions = {
      table: locationsTableName,
    };
    const columns = await getColumns(locationSourceOptions);
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "id",
      "properties.cdi",
      "properties.dmin",
      "properties.felt",
      "properties.gap",
      "properties.mag",
      "properties.mmi",
      "properties.nst",
      "properties.rms",
      "properties.sig",
      "properties.time",
      "properties.tsunami",
      "properties.updated",
    ]); // leaves out
    expect(columns.length).toBe(13);
  });
});
