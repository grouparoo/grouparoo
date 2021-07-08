import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { getDestinationMappingOptions } from "../../src/lib/shared/destinationMappingOptions";
import {
  loadAppOptions,
  loadDestinationOptions,
  updater,
} from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "destination-mapping-options.js"
);

// these comments to use nock
// const newNock = false;
// require("./../fixtures/destination-mapping-options");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const destinationOptions = loadDestinationOptions(newNock);
const appId = "app_ch1mp-dfsjklfdsklj90-01-3k";

async function runDestinationMappingOptions(options) {
  const destinationMappingOptions = getDestinationMappingOptions(
    options.mappingKey
  );

  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: appId,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: destinationOptions,
  });
}

describe("mixpanel/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions using ID", async () => {
    const client = await connect(appOptions);
  });
});
