import "../utils/mock";
import "@grouparoo/spec-helper";

import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { sourcePreview } from "../../src/lib/table-import/options";
import { connect } from "../../src/lib/connect";

import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

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
const sourceOptions = { table: "PURCHASES" };

async function getPreview() {
  const connection = await connect({ appOptions, app: null });

  const response = await sourcePreview({
    connection,
    appOptions,
    sourceOptions,
    app: null,
    source: null,
  });
  return response;
}

describe("snowflake/table/sourcePreview", () => {
  test("gets list of columns that can handle highwatermark", async () => {
    const preview = await getPreview();
    const row = preview[0];

    const columnNames = Object.keys(row).sort();
    expect(columnNames).toEqual([
      "AMOUNT",
      "DATE",
      "ID",
      "PROFILE_ID",
      "PURCHASE",
      "STAMP",
    ]);

    expect(preview.length).toEqual(10);

    let value;
    value = row["ID"];
    expect(typeof value).toEqual("number");

    value = row["PURCHASE"];
    expect(typeof value).toEqual("string");

    value = row["DATE"];
    expect(value.constructor.name).toEqual("Date");
  });
});
