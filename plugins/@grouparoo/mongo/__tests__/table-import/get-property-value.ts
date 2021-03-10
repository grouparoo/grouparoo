import "@grouparoo/spec-helper";

import { getConfig } from "../utils/data";
import { getPropertyValue } from "../../src/lib/table-import/getPropertyValue";
import { connect } from "../../src/lib/connect";
import {
  AggregationMethod,
  FilterOperation,
  MatchCondition,
  SimpleAppOptions,
} from "@grouparoo/app-templates/dist/source/table";
import { SimpleSourceOptions } from "@grouparoo/core";

// these used and set by test
const { appId, appOptions, tableName } = getConfig();

async function callGetPropertyValue() {
  const connection = await connect({ appOptions, app: null, appId: null });
  return await getPropertyValue({
    appOptions,
    appId,
    connection,
    tableName,
    columnName: "volume",
    sortColumn: "volume",
    matchConditions: [
      {
        columnName: "performers",
        filterOperation: FilterOperation.Equal,
        value: "ourixilva@gmail.com",
      },
    ],
    aggregationMethod: AggregationMethod.Exact,
    isArray: false,
  });
}

describe("mongodb/column/getColumnsTest", () => {
  test("gets the list of columns", async () => {
    const propertyValue = await callGetPropertyValue();
    expect(propertyValue).toBe(2);
  });
});
