import {
  AggregationMethod,
  ProfilePropertiesPluginMethod,
  ProfilePropertiesPluginMethodResponse,
} from "@grouparoo/core";
import {
  MatchCondition,
  GetPropertyValuesMethod,
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
    properties,
    propertyOptions,
    propertyFilters,
  }) => {
    const responsesById: ProfilePropertiesPluginMethodResponse = {};
    const tableName = sourceOptions[tableNameKey]?.toString();
    const columnNames = properties.map((p) =>
      propertyOptions[p.id][columnNameKey]?.toString()
    );
    const aggregationMethod = <AggregationMethod>(
      propertyOptions[Object.keys(propertyOptions)[0]][aggregationMethodKey]
    );
    const sortColumn =
      propertyOptions[Object.keys(propertyOptions)[0]][
        sortColumnKey
      ]?.toString();

    if (!aggregationMethod || columnNames.length === 0) return responsesById;

    const tableMappingCol: string = Object.values(sourceMapping)[0];
    const tablePrimaryKeyCol: string = Object.keys(sourceMapping)[0];
    const primaryKeysHash: { [pk: string]: string[] } = {};

    for (const i in profiles) {
      for (const property of properties) {
        const properties = await profiles[i].getProperties();
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
          responsesById[profiles[i].id] = { [property.id]: [0] };
        }
      }
    }

    const isArray = !!properties[0].isArray;

    const matchConditions: MatchCondition[] = [];

    for (const filter of propertyFilters[Object.keys(propertyFilters)[0]]) {
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
      columnNames,
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
        responsesById[profileId] = {};
        for (const column of Object.keys(responsesByPrimaryKey[pk])) {
          const property = properties.find(
            (p) => propertyOptions[p.id][columnNameKey] === column
          );
          if (!property) continue;

          responsesById[profileId][property.id] =
            responsesByPrimaryKey[pk][column];
        }
      });
    }

    return responsesById;
  };

  return profileProperties;
};
