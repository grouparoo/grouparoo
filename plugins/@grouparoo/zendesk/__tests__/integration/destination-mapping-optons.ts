// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
//import connect from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "destination-mapping-options.js"
);

// these comments to use nock
//const newNock = false;
//require("./../fixtures/destination-mapping-options");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

describe("sailthru/destinationMappingOptions", () => {
  beforeAll(async () => {}, 1000 * 30);

  afterAll(async () => {}, 1000 * 30);

  test("can test", async () => {
    expect(1 + 1).toBe(2);
  });
});
