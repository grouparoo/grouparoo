import "@grouparoo/spec-helper";
import { destinationOptions as methodToTest } from "../../src/lib/export/destinationOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "@grouparoo/spec-helper";
import { afterData, beforeData, getConnection } from "../utils/data";
import { Snowflake } from "snowflake-promise";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
let connection: Snowflake;

async function runDestinationOptions({ destinationOptions }) {
  return methodToTest({
    connection,
    destinationOptions,
    appOptions,
    app: null,
    appId: null,
  });
}

describe("salesforce/export-contact/destinationOptions", () => {
  beforeAll(async () => {
    connection = await getConnection(appOptions);
    await beforeData(appOptions);
  });
  afterAll(async () => await afterData(appOptions));

  test("can look up options", async () => {
    const destinationOptions = {};
    const result = await runDestinationOptions({ destinationOptions });
    const table = result.table;
    expect(table.type).toEqual("typeahead");
    expect(table.options).toEqual(
      expect.arrayContaining([
        "ACCOUNTS",
        "OUTPUT_GROUPS",
        "OUTPUT_USERS",
        "PROFILES",
        "PURCHASES",
      ])
    );
    const groups = result.groupsTable;
    expect(groups.type).toEqual("typeahead");
    expect(groups.options).toEqual(
      expect.arrayContaining([
        "ACCOUNTS",
        "OUTPUT_GROUPS",
        "OUTPUT_USERS",
        "PROFILES",
        "PURCHASES",
      ])
    );
  });

  test("can look up primaryKey options", async () => {
    const destinationOptions = { table: "ACCOUNTS" };
    const result = await runDestinationOptions({ destinationOptions });
    const primaryKey = result.primaryKey;
    expect(primaryKey.type).toEqual("typeahead");
    expect(primaryKey.options).toEqual(
      expect.arrayContaining(["ID", "NAME", "PLAN"])
    );
  });

  test("can look up group options", async () => {
    const destinationOptions = {
      table: "ACCOUNTS",
      groupsTable: "OUTPUT_GROUPS",
    };
    const result = await runDestinationOptions({ destinationOptions });

    const groupForeignKey = result.groupForeignKey;
    expect(groupForeignKey.type).toEqual("typeahead");
    expect(groupForeignKey.options).toEqual(
      expect.arrayContaining(["EMAIL", "GROUP_NAME", "ID"])
    );

    const groupColumnName = result.groupColumnName;
    expect(groupColumnName.type).toEqual("typeahead");
    expect(groupColumnName.options).toEqual(
      expect.arrayContaining(["EMAIL", "GROUP_NAME", "ID"])
    );
  });
});
