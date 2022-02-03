import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { PostgresPoolClient } from "../../src/lib/connect";

import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
import { afterData, beforeData, getConfig } from "../utils/data";

const { appOptions, usersTableName } = getConfig();

let client: PostgresPoolClient;

async function runDestinationMappingOptions() {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: null,
    connection: client,
    destination: null,
    destinationId: null,
    destinationOptions: { table: usersTableName, primaryKey: "id" },
  });
}

describe("postgres/destinationMappingOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    const setupResp = await beforeData();
    client = setupResp.client;
  });
  afterAll(async () => await afterData());

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions();

    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(1);
    const id = required.find((f) => f.key === "id");
    expect(id.key).toBe("id");
    expect(id.type).toBe("any");

    expect(known.length).toBe(12);
    // check if all are important and have the type any.
    for (const knownEntry of known) {
      expect(knownEntry.type).toBe("any");
      expect(knownEntry.important).toBe(true);
    }
  });
});
