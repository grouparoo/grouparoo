import "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";

import { getConnection } from "../../src/lib/queryv2-import/connection";
import { PostgresPoolClient } from "../../src/lib/connect";
const sourcePreview = getConnection().methods.sourcePreview;

// these used and set by test
const { appOptions, purchasesSourceQuery } = getConfig();
const sourceOptions = { query: purchasesSourceQuery };
let client: PostgresPoolClient;

async function getPreview() {
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

describe("postgres/queryv2/sourcePreview", () => {
  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  afterAll(async () => {
    await afterData();
  });

  test("gets list of columns that can handle highwatermark", async () => {
    const preview = await getPreview();
    const row = preview[0];

    const columnNames = Object.keys(row).sort();
    expect(columnNames).toEqual([
      "amount",
      "date",
      "id",
      "purchase",
      "random_num",
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
});
