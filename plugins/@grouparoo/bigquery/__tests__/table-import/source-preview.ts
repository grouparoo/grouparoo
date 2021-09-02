import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

import { getConnection } from "../../src/lib/table-import/connection";
const sourcePreview = getConnection().methods.sourcePreview;

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "table-source-preview.js"
);

// these comments to use nock
const newNock = false;
require("./../fixtures/table-source-preview");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

// these used and set by test
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
      "profile_id",
      "purchase",
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
