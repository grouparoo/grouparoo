import "@grouparoo/spec-helper";

import { getConfig, usersCollectionName } from "../utils/data";
import { getChangedRowCount } from "../../src/lib/table-import/getChangedRowCount";
import { connect } from "../../src/lib/connect";
import { FilterOperation } from "@grouparoo/app-templates/dist/source/table";

// these used and set by test
const { appId, appOptions } = getConfig();

async function callGetChangedRowsCount() {
  const connection = await connect({ appOptions, app: null, appId: null });
  return await getChangedRowCount({
    connection,
    appOptions,
    appId,
    tableName: usersCollectionName,
    highWaterMarkCondition: {
      columnName: "date",
      filterOperation: FilterOperation.GreaterThan,
      value: new Date("2021-03-10T20:20:06.000Z"),
    },
  });
}

describe("mongodb/column/getColumnsTest", () => {
  test("gets the list of columns", async () => {
    const propertyValue = await callGetChangedRowsCount();
    expect(propertyValue).toBe(2);
  });
});
