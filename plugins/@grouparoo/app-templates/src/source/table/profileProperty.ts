import {
  AggregationMethod,
  FilterOperation,
  ProfilePropertyPluginMethod,
} from "@grouparoo/core";
import {
  MatchCondition,
  GetPropertyValueMethod,
  columnNameKey,
  tableNameKey,
  aggregationMethodKey,
  sortColumnKey,
} from "./pluginMethods";

export interface GetProfilePropertyMethod {
  (argument: {
    getPropertyValue: GetPropertyValueMethod;
  }): ProfilePropertyPluginMethod;
}

export const getProfileProperty: GetProfilePropertyMethod = ({
  getPropertyValue,
}) => {
  const profileProperty: ProfilePropertyPluginMethod = async ({
    connection,
    appOptions,
    appId,
    profile,
    sourceOptions,
    sourceMapping,
    property,
    propertyOptions,
    propertyFilters,
  }) => {
    const tableName = sourceOptions[tableNameKey]?.toString();
    const matchName = Object.keys(sourceMapping)[0]; // tableCol
    const profilePropertyMatch = Object.values(sourceMapping)[0];
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
      const profileProperties = await profile.properties();
      // if no property or no values, bail
      if (!profileProperties[tableMappingCol]?.values.length) {
        return undefined;
      }
    }

    const profileData = await profile.properties();
    const isArray = !!property.isArray;

    if (!profileData.hasOwnProperty(profilePropertyMatch)) {
      return undefined;
    }
    const matchValue = profileData[profilePropertyMatch].values[0];
    if (!matchValue) {
      return undefined;
    }
    const foreignKeyMatch: MatchCondition = {
      columnName: matchName,
      value: matchValue,
      filterOperation: FilterOperation.Equal,
    };

    const matchConditions: MatchCondition[] = [];
    matchConditions.push(foreignKeyMatch); // this narrows it to the correct profile

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

  return profileProperty;
};

function getFilterOperation(op): FilterOperation {
  // op is one of the values
  const operations = Object.keys(FilterOperation);
  for (const key of operations) {
    const value = FilterOperation[key];
    if (value === op) {
      return value;
    }
  }
  throw `filter operation not found: ${op}`;
}
