import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
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
const appId = "app_mix-panel-09012378476890123-123903547";

describe("mixpanel/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions using ID", async () => {
    const client = await connect(appOptions);

    client.track("caio.silveira@mailinator.com", function (err) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>", err);
      if (err) {
        throw err;
      }
    });

    client.people.set(
      "caio.silveira@mailinator.com",
      {
        first_name: "Caio",
        last_name: "Silveira",
        city: "Campina Grande",
        email: "caio.silveira@mailinator.com",
        points: 0,
      },
      function (err) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>", err);
        if (err) {
          throw err;
        }
      }
    );
  });
});
