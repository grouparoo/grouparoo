import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";
import { getConnection } from "../../src/lib/table-import/connection";

const sourcePreview = getConnection().methods.sourcePreview;

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const sourceOptions = { table: "purchases" };

async function getPreview() {
  const connection = await connect({ appOptions, app: null, appId: null });

  const response = await sourcePreview({
    connection,
    appOptions,
    sourceOptions,
    app: null,
    appId: null,
    source: null,
    sourceId: null,
  });
  return response;
}

describe("bigquery/table/sourcePreview", () => {
  test("gets list of columns that can handle highwatermark", async () => {
    const preview = await getPreview();
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
});
