import { ProfilePropertiesPluginMethod } from "@grouparoo/core";
import {
  MatchCondition,
  GetPropertyValuesMethod,
  AggregationMethod,
  columnNameKey,
  tableNameKey,
  aggregationMethodKey,
  sortColumnKey,
} from "./pluginMethods";
import { getFilterOperation } from "./getFilterOperation";

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
    const responsesById: { [id: string]: any[] } = {};
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
    const primaryKeysHash: { [pk: string]: string[] } = {};

    for (const i in profiles) {
      const properties = await profiles[i].properties();
      if (
        properties[tableMappingCol]?.values.length > 0 &&
        properties[tableMappingCol].values[0] // not null or undefined
      ) {
        const k = properties[tableMappingCol].values[0].toString();
        if (!primaryKeysHash[k]) primaryKeysHash[k] = [];
        primaryKeysHash[k].push(profiles[i].id);
      }
      if (
        aggregationMethod === AggregationMethod.Sum ||
        aggregationMethod === AggregationMethod.Count
      ) {
        //default all entries to 0 to start... will be replaced later if there is a response
        responsesById[profiles[i].id] = [0];
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

    for (const pk in responsesByPrimaryKey) {
      primaryKeysHash[pk].forEach((profileId) => {
        responsesById[profileId] = responsesByPrimaryKey[pk];
      });
    }

    return responsesById;
  };

  return profileProperties;
};
