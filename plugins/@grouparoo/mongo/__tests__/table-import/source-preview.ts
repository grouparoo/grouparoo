import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/table-import/connection";

const sourcePreview = getConnection().methods.sourcePreview;

// these used and set by test
const { appOptions, purchasesTableName, locationsTableName } = getConfig();
let client;

async function getPreview(sourceOptions) {
  const response = await sourcePreview({
    connection: client,
    appOptions,
    sourceOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
  });
  return response;
}

describe("mongo/table/sourcePreview", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });
  afterAll(async () => await afterData());

  test("gets list of columns that can handle highwatermark", async () => {
    const sourceOptions = {
      table: purchasesTableName,
    };
    const preview = await getPreview(sourceOptions);
    const row = preview[0];
    const columnNames = Object.keys(row).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "purchase",
      "record_id",
      "stamp",
    ]);

    expect(preview.length).toEqual(10);

    let value;
    value = row["id"];
    expect(typeof value).toEqual("number");

    value = row["purchase"];
    expect(typeof value).toEqual("string");

    value = row["date"];
    expect(typeof value).toEqual("string");
    expect(new Date(value).getTime()).toBeGreaterThan(0);
  });

  test("gets list of columns from location collection", async () => {
    const locationSourceOptions = {
      table: locationsTableName,
    };

    const preview = await getPreview(locationSourceOptions);
    const row = preview[0];

    expect(preview.length).toEqual(10);

    let value;
    value = row["id"];
    expect(typeof value).toEqual("number");

    value = row["type"];
    expect(typeof value).toEqual("string");

    value = row["properties.mag"];
    expect(typeof value).toEqual("number");

    value = row["geometry.type"];
    expect(typeof value).toEqual("string");
  });
});
