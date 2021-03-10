import "@grouparoo/spec-helper";

import { getConfig, usersCollectionName } from "../utils/data";
import { getChangedRows } from "../../src/lib/table-import/getChangedRows";
import { connect } from "../../src/lib/connect";
import { FilterOperation } from "@grouparoo/app-templates/dist/source/table";

// these used and set by test
const { appId, appOptions } = getConfig();

async function callGetChangedRows() {
  const connection = await connect({ appOptions, app: null, appId: null });
  return await getChangedRows({
    connection,
    appOptions,
    appId,
    tableName: usersCollectionName,
    highWaterMarkCondition: {
      columnName: "date",
      filterOperation: FilterOperation.GreaterThan,
      value: new Date("2021-03-10T20:20:06.000Z"),
    },
    highWaterMarkAndSortColumnASC: "date",
    secondarySortColumnASC: "stamp",
    highWaterMarkKey: "highWaterMarkKey",
    limit: 2,
    sourceOffset: 0,
  });
}

describe("mongodb/column/getColumnsTest", () => {
  test("gets the list of columns", async () => {
    const propertyValue = await callGetChangedRows();
    expect(propertyValue.length).toBe(2);
  });
});
