import { ProfilePropertyPluginMethod } from "@grouparoo/core";
import {
  MatchCondition,
  FilterOperation,
  GetPropertyValueMethod,
  AggregationMethod,
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
    appGuid,
    profile,
    sourceOptions,
    sourceMapping,
    profilePropertyRule,
    profilePropertyRuleOptions,
    profilePropertyRuleFilters,
  }) => {
    const tableName = sourceOptions[tableNameKey];
    const matchName = Object.keys(sourceMapping)[0]; // tableCol
    const profilePropertyMatch = Object.values(sourceMapping)[0];
    const columnName = profilePropertyRuleOptions[columnNameKey];
    const aggregationMethod = <AggregationMethod>(
      profilePropertyRuleOptions[aggregationMethodKey]
    );
    const sortColumn = profilePropertyRuleOptions[sortColumnKey];

    if (!aggregationMethod || !columnName) {
      return undefined;
    }

    // don't `select userId where userId = {userId}` if we don't know {userId}
    if (
      matchName === columnName &&
      aggregationMethod === AggregationMethod.Exact
    ) {
      const tableMappingCol: string = Object.values(sourceMapping)[0];
      const properties = await profile.properties();
      // if no property or no values, bail
      if (!properties[tableMappingCol]?.values.length) {
        return undefined;
      }
    }

    const profileData = await profile.properties();
    const isArray = !!profilePropertyRule.isArray;

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

    for (const filter of profilePropertyRuleFilters) {
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
      appGuid,
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
