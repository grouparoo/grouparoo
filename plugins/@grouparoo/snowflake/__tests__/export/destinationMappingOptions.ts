import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import { Snowflake } from "snowflake-promise";

import { destinationMappingOptions } from "../../src/lib/export/destinationMappingOptions";
import { afterData, beforeData, getConfig, getConnection } from "../utils/data";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

const { usersTableName, recordsDestinationTableName } = getConfig();

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);

let connection: Snowflake;

async function runDestinationMappingOptions(
  destinationOptions = {
    table: usersTableName,
    primaryKey: "ID",
  }
) {
  return destinationMappingOptions({
    appOptions,
    app: null,
    appId: null,
    connection,
    destination: null,
    destinationId: null,
    destinationOptions,
  });
}

describe("snowflake/destinationMappingOptions", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    connection = await getConnection(appOptions);
    await beforeData(appOptions);
  });
  afterAll(async () => await afterData(appOptions));

  test("can load all destinationMappingOptions", async () => {
    const options = await runDestinationMappingOptions();

    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);
    const id = required.find((f) => f.key === "ID");
    expect(id.key).toBe("ID");
    expect(id.type).toBe("integer");
    const accountId = required.find((f) => f.key === "ACCOUNT_ID");
    expect(accountId.key).toBe("ACCOUNT_ID");
    expect(accountId.type).toBe("integer");

    expect(known.length).toBe(11);
    // check if all are important and have the type any.
    for (const knownEntry of known) {
      expect(knownEntry.important).toBe(true);
    }
  });

  test("can load all destinationMappingOptions picking a different primaryKey", async () => {
    const options = await runDestinationMappingOptions({
      table: recordsDestinationTableName,
      primaryKey: "EMAIL",
    });
    const { properties } = options;
    const { required, known } = properties;

    expect(required.length).toBe(2);

    const id = required.find((f) => f.key === "ID");
    expect(id.key).toBe("ID");
    expect(id.type).toBe("integer");

    const email = required.find((f) => f.key === "EMAIL");
    expect(email.key).toBe("EMAIL");
    expect(email.type).toBe("string");

    expect(known.length).toBe(2);
    // check if all are important and have the type any.
    for (const knownEntry of known) {
      expect(knownEntry.important).toBe(true);
    }
  });
});
