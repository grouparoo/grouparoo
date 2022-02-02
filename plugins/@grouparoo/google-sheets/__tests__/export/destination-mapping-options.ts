import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { destinationMappingOptions } from "../../src/lib/sheet-export/destinationMappingOptions";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

const url =
  "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0";

const destinationOptions = { sheet_url: url, primaryKey: "id" };
const appOptions = loadAppOptions();

let client;

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: null,
    connection: client,
    destination: null,
    destinationId: null,
    destinationOptions,
  });
}

describe("google-sheets/destinationMappingOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});

    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);
    const id = required.find((f) => f.key === "id");
    expect(id.key).toBe("id");
    expect(id.type).toBe("any");

    expect(known.length).toBe(9);
    // check if all are important and have the type any.
    for (const knownEntry of known) {
      expect(knownEntry.type).toBe("any");
      expect(knownEntry.important).toBe(true);
    }
  });
});
