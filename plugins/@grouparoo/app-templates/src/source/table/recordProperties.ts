import {
  AggregationMethod,
  RecordPropertiesPluginMethod,
  RecordPropertiesPluginMethodResponse,
} from "@grouparoo/core";
import {
  MatchCondition,
  GetPropertyValuesMethod,
  columnNameKey,
  tableNameKey,
  sourceQueryKey,
  aggregationMethodKey,
  sortColumnKey,
} from "./pluginMethods";
import { getFilterOperation } from "./getFilterOperation";

export interface GetRecordPropertiesMethod {
  (argument: {
    getPropertyValues: GetPropertyValuesMethod;
  }): RecordPropertiesPluginMethod;
}

export const getRecordProperties: GetRecordPropertiesMethod = ({
  getPropertyValues,
}) => {
  const recordProperties: RecordPropertiesPluginMethod = async ({
    connection,
    appOptions,
    appId,
    records,
    sourceOptions,
    sourceMapping,
    properties,
    propertyOptions,
    propertyFilters,
  }) => {
    const responsesById: RecordPropertiesPluginMethodResponse = {};
    const tableName = sourceOptions[tableNameKey]?.toString();
    const sourceQuery = sourceOptions[sourceQueryKey]?.toString();
    const rawColumnNames = properties.map((p) =>
      propertyOptions[p.id][columnNameKey]?.toString()
    );
    const columnNames = [...new Set(rawColumnNames)];
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
    for (const record of records) {
      responsesById[record.id] = {};
      const recordProperties = await record.getProperties();
      for (const property of properties) {
        // prepare primaryKeysHash to assign results to properties
        if (
          recordProperties[tableMappingCol]?.values.length > 0 &&
          recordProperties[tableMappingCol].values[0] // not null or undefined
        ) {
          const k = recordProperties[tableMappingCol].values[0].toString();
          if (!primaryKeysHash[k]) primaryKeysHash[k] = [];
          primaryKeysHash[k].push(record.id);
        }

        // set default values to help with aggregation issues
        if (
          aggregationMethod === AggregationMethod.Sum ||
          aggregationMethod === AggregationMethod.Count
        ) {
          responsesById[record.id][property.id] = [0];
        } else {
          // leave undefined
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
      sourceQuery,
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
      primaryKeysHash[pk].forEach((recordId) => {
        for (const column of Object.keys(responsesByPrimaryKey[pk])) {
          const propertiesFound = properties.filter(
            (p) => propertyOptions[p.id][columnNameKey] === column
          );

          propertiesFound.forEach((property) => {
            responsesById[recordId][property.id] =
              responsesByPrimaryKey[pk][column];
          });
        }
      });
    }

    // remove records with no data from the response
    for (const recordId in responsesById) {
      if (Object.keys(responsesById[recordId]).length === 0) {
        delete responsesById[recordId];
      }
    }

    return responsesById;
  };

  return recordProperties;
};
