import "@grouparoo/spec-helper";

import { afterData, beforeData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";

const scheduleOptionsMethod = getConnection().methods.scheduleOptions;

// these used and set by test
const { appOptions, purchasesTableName, locationsTableName } = getConfig();
let client;

async function getColumns(sourceOptions) {
  const scheduleOptions = await scheduleOptionsMethod({
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
  test("gets list of columns", async () => {
    const sourceOptions = {
      table: purchasesTableName,
    };
    const columns = await getColumns(sourceOptions);
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "_id",
      "amount",
      "date",
      "id",
      "purchase",
      "record_id",
      "stamp",
    ]);
    expect(columns.length).toBe(7);
  });

  test("gets list of columns from location collection", async () => {
    const locationSourceOptions = {
      table: locationsTableName,
    };
    const columns = await getColumns(locationSourceOptions);
    const columnNames = columns.map((r) => r.key).sort();
    expect(columnNames).toEqual([
      "_id",
      "geometry.type",
      "id",
      "properties.alert",
      "properties.cdi",
      "properties.code",
      "properties.detail",
      "properties.dmin",
      "properties.felt",
      "properties.gap",
      "properties.ids",
      "properties.mag",
      "properties.magType",
      "properties.mmi",
      "properties.net",
      "properties.nst",
      "properties.place",
      "properties.rms",
      "properties.sig",
      "properties.sources",
      "properties.status",
      "properties.time",
      "properties.title",
      "properties.tsunami",
      "properties.type",
      "properties.types",
      "properties.tz",
      "properties.updated",
      "properties.url",
      "type",
    ]);
    expect(columns.length).toBe(30);
  });
});
