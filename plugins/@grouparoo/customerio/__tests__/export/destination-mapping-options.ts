import "@grouparoo/spec-helper";
import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import path from "path";

const nockFile = path.join(
  __dirname,
  "../",
  "fixtures",
  "destination-mapping-options.js"
);

// these comments to use nock
const newNock = false;
require(nockFile);
// or these to make it true
// const newNock = true;
// import { helper } from "@grouparoo/spec-helper";
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function runDestinationMappingOptions({}) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: null,
    connection: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
  });
}

describe("customer.io/destinationMappingOptions", () => {
  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions({});
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);

    const requiredFieldCustomerId = required.find(
      (f) => f.key === "customer_id"
    );
    expect(requiredFieldCustomerId.key).toBe("customer_id");
    expect(requiredFieldCustomerId.type).toBe("string");

    const knownFieldEmail = known.find((f) => f.key === "email");
    expect(knownFieldEmail.type).toBe("email");
    expect(knownFieldEmail.important).toBe(true);

    const knownFieldCreatedAt = known.find((f) => f.key === "created_at");
    expect(knownFieldCreatedAt.type).toBe("date");
    expect(knownFieldCreatedAt.important).toBe(true);

    const unknownField = known.find((f) => f.key === "some_unknown_field");
    expect(unknownField).toBe(undefined);
  });
});
