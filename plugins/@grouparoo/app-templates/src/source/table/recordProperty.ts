import {
  AggregationMethod,
  FilterOperation,
  RecordPropertyPluginMethod,
} from "@grouparoo/core";
import { getFilterOperation } from "./getFilterOperation";
import {
  MatchCondition,
  GetPropertyValueMethod,
  columnNameKey,
  tableNameKey,
  aggregationMethodKey,
  sortColumnKey,
} from "./pluginMethods";

export interface GetRecordPropertyMethod {
  (argument: {
    getPropertyValue: GetPropertyValueMethod;
  }): RecordPropertyPluginMethod;
}

export const getRecordProperty: GetRecordPropertyMethod = ({
  getPropertyValue,
}) => {
  const recordProperty: RecordPropertyPluginMethod = async ({
    connection,
    appOptions,
    appId,
    record,
    sourceOptions,
    sourceMapping,
    property,
    propertyOptions,
    propertyFilters,
  }) => {
    const tableName = sourceOptions[tableNameKey]?.toString();
    const matchName = Object.keys(sourceMapping)[0]; // tableCol
    const recordPropertyMatch = Object.values(sourceMapping)[0];
    const columnName = propertyOptions[columnNameKey]?.toString();
    const aggregationMethod = <AggregationMethod>(
      propertyOptions[aggregationMethodKey]
    );
    const sortColumn = propertyOptions[sortColumnKey]?.toString();

    if (!aggregationMethod || !columnName) {
      return undefined;
    }

    // don't `select userId where userId = {userId}` if we don't know {userId}
    if (
      matchName === columnName &&
      aggregationMethod === AggregationMethod.Exact
    ) {
      const tableMappingCol: string = Object.values(sourceMapping)[0];
      const recordProperties = await record.getProperties();
      // if no property or no values, bail
      if (!recordProperties[tableMappingCol]?.values.length) {
        return undefined;
      }
    }

    const profileData = await record.getProperties();
    const isArray = !!property.isArray;

    if (!profileData.hasOwnProperty(recordPropertyMatch)) {
      return undefined;
    }
    const matchValue = profileData[recordPropertyMatch].values[0];
    if (!matchValue) {
      return undefined;
    }
    const foreignKeyMatch: MatchCondition = {
      columnName: matchName,
      value: matchValue,
      filterOperation: FilterOperation.Equal,
    };

    const matchConditions: MatchCondition[] = [];
    matchConditions.push(foreignKeyMatch); // this narrows it to the correct record

    for (const filter of propertyFilters) {
      let { key, op, match } = filter;
      matchConditions.push({
        columnName: key,
        value: match,
        filterOperation: getFilterOperation(op),
      });
    }

    return getPropertyValue({
      connection,
      appOptions,
      appId,
      tableName,
      columnName,
      sortColumn,
      matchConditions,
      aggregationMethod,
      isArray,
    });
  };

  return recordProperty;
};
