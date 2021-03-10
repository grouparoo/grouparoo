import "@grouparoo/spec-helper";

import { getConfig, populate, usersCollectionName } from "../utils/data";
import { getPropertyValues } from "../../src/lib/table-import/getPropertyValues";
import { connect } from "../../src/lib/connect";
import {
  AggregationMethod,
  FilterOperation,
  MatchCondition,
  SimpleAppOptions,
} from "@grouparoo/app-templates/dist/source/table";
import { SimpleSourceOptions } from "@grouparoo/core";

// these used and set by test
const { appId, appOptions } = getConfig();

async function callGetPropertyValues() {
  await populate();

  const connection = await connect({ appOptions, app: null, appId: null });
  return await getPropertyValues({
    appOptions,
    appId,
    connection,
    tableName: usersCollectionName,
    columnName: "ltv",
    sortColumn: "ltv",
    tablePrimaryKeyCol: "id",
    tableMappingCol: "userId",
    matchConditions: [
      {
        columnName: "gender",
        filterOperation: FilterOperation.Equal,
        value: "Female",
      },
    ],
    aggregationMethod: AggregationMethod.Max,
    isArray: true,
    primaryKeys: ["1", "2", "3"],
  });
}

describe("mongodb/column/getColumnsTest", () => {
  test("gets the list of columns", async () => {
    const propertyValue = await callGetPropertyValues();
    expect(propertyValue).toBe(2);
  });
});
