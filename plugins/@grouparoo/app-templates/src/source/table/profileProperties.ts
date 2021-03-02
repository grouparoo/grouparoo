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
    appId,
    profiles,
    sourceOptions,
    sourceMapping,
    property,
    propertyOptions,
    propertyFilters,
  }) => {
    const tableName = sourceOptions[tableNameKey]?.toString();
    const columnName = propertyOptions[columnNameKey]?.toString();
    const aggregationMethod = <AggregationMethod>(
      propertyOptions[aggregationMethodKey]
    );
    const sortColumn = propertyOptions[sortColumnKey]?.toString();

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
          profiles[i].id;
      }
    }

    const isArray = !!property.isArray;

    const matchConditions: MatchCondition[] = [];

    for (const filter of propertyFilters) {
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
      appId,
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

    const responsesById = {};
    for (const pk in responsesByPrimaryKey) {
      const profileId = primaryKeysHash[pk];
      responsesById[profileId] = responsesByPrimaryKey[pk];
    }

    return responsesById;
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
