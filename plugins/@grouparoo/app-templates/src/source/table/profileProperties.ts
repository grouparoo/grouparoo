import { ProfilePropertiesPluginMethod } from "@grouparoo/core";
import {
  MatchCondition,
  FilterOperation,
  GetPropertyValuesMethod,
  AggregationMethod,
  columnNameKey,
  tableNameKey,
  aggregationMethodKey,
  sortColumnKey,
} from "./pluginMethods";

export interface GetProfilePropertiesMethod {
  (argument: {
    getPropertyValues: GetPropertyValuesMethod;
  }): ProfilePropertiesPluginMethod;
}

export const getProfileProperties: GetProfilePropertiesMethod = ({
  getPropertyValues,
}) => {
  const profileProperties: ProfilePropertiesPluginMethod = async ({
    connection,
    appOptions,
    appGuid,
    profiles,
    sourceOptions,
    sourceMapping,
    profilePropertyRule,
    profilePropertyRuleOptions,
    profilePropertyRuleFilters,
  }) => {
    const tableName = sourceOptions[tableNameKey];
    // const matchName = Object.keys(sourceMapping)[0]; // tableCol
    // const profilePropertyMatch = Object.values(sourceMapping)[0];
    const columnName = profilePropertyRuleOptions[columnNameKey];
    const aggregationMethod = <AggregationMethod>(
      profilePropertyRuleOptions[aggregationMethodKey]
    );
    const sortColumn = profilePropertyRuleOptions[sortColumnKey];

    if (!aggregationMethod || !columnName) {
      return undefined;
    }

    const tableMappingCol: string = Object.values(sourceMapping)[0];
    const tablePrimaryKeyCol: string = Object.keys(sourceMapping)[0];
    const primaryKeysHash: { [pk: string]: string } = {};

    for (const i in profiles) {
      const properties = await profiles[i].properties();
      if (
        properties[tableMappingCol]?.values.length > 0 &&
        properties[tableMappingCol].values[0] // not null or undefined
      ) {
        primaryKeysHash[properties[tableMappingCol].values[0].toString()] =
          profiles[i].guid;
      }
    }

    const isArray = !!profilePropertyRule.isArray;

    const matchConditions: MatchCondition[] = [];
    // matchConditions.push(foreignKeyMatch); // this narrows it to the correct profile

    for (const filter of profilePropertyRuleFilters) {
      let { key, op, match } = filter;
      matchConditions.push({
        columnName: key,
        value: match,
        filterOperation: getFilterOperation(op),
      });
    }

    const responsesByPrimaryKey = await getPropertyValues({
      connection,
      appOptions,
      appGuid,
      tableName,
      columnName,
      tablePrimaryKeyCol,
      tableMappingCol,
      sortColumn,
      matchConditions,
      aggregationMethod,
      isArray,
      primaryKeys: Object.keys(primaryKeysHash),
    });

    const responsesByGuid = {};
    for (const pk in responsesByPrimaryKey) {
      const profileGuid = primaryKeysHash[pk];
      responsesByGuid[profileGuid] = responsesByPrimaryKey[pk];
    }

    return responsesByGuid;
  };

  return profileProperties;
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
