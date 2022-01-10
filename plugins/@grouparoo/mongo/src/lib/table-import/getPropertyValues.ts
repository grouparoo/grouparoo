import {
  getMostTrendingType,
  makeFindQuery,
  MongoAggregationMethod,
} from "./util";
import {
  GetPropertyValuesMethod,
  DataResponse,
  AggregationMethod,
  FilterOperation,
} from "@grouparoo/app-templates/dist/source/table";

export const getPropertyValues: GetPropertyValuesMethod = async ({
  connection,
  appOptions,
  tableName,
  columnNames,
  sortColumn,
  tablePrimaryKeyCol,
  tableMappingCol,
  matchConditions,
  isArray,
  aggregationMethod,
  primaryKeys,
}) => {
  let groupByColumns = [tablePrimaryKeyCol];
  let aggSelect;
  let aggPipeline = [];
  let isUsingResultField = true;
  let customAggValue;
  let responses: { [key: string]: { [column: string]: DataResponse[] } } = {};

  if (primaryKeys.length === 0) return responses;

  let query = {};

  let fieldType: string = await getMostTrendingType(
    connection,
    appOptions.database as string,
    tableName,
    tablePrimaryKeyCol
  );

  if (fieldType === "int") {
    primaryKeys = primaryKeys.map((k) => parseInt(String(k)));
  }

  matchConditions.push({
    columnName: tablePrimaryKeyCol,
    filterOperation: FilterOperation.In,
    values: primaryKeys,
  });

  for (const condition of matchConditions) {
    if (!query["$and"]) {
      query["$and"] = [makeFindQuery(condition)];
    } else {
      query["$and"].push(makeFindQuery(condition));
    }
  }

  if (Object.keys(query).length > 0) {
    aggPipeline.push({
      $match: query,
    });
  }
  switch (aggregationMethod) {
    case AggregationMethod.Exact:
      isUsingResultField = false;
      if (columnNames.length === 1) groupByColumns.push(...columnNames);
      if (sortColumn) {
        aggPipeline.push({ $sort: { [sortColumn]: 1 } });
        groupByColumns.push(sortColumn);
      }
      break;
    case AggregationMethod.Average:
      aggSelect = MongoAggregationMethod.Average;
      break;
    case AggregationMethod.Count:
      aggSelect = MongoAggregationMethod.Sum;
      customAggValue = 1;
      break;
    case AggregationMethod.Sum:
      if (groupByColumns.length > 0) {
        for (const group of groupByColumns) {
          aggPipeline.push({
            $group: {
              _id: `$${group}`,
              __result: {
                $sum: {
                  $toDouble: `$${columnNames[0]}`,
                },
              },
              __pk: { $first: `$${tablePrimaryKeyCol}` },
            },
          });
        }
      }
      break;
    case AggregationMethod.Min:
      aggSelect = MongoAggregationMethod.Min;
      break;
    case AggregationMethod.Max:
      aggSelect = MongoAggregationMethod.Max;
      break;
    case AggregationMethod.MostRecentValue:
      isUsingResultField = false;
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      aggPipeline.push({ $sort: { [sortColumn]: -1 } });
      groupByColumns.push(columnNames[0]);
      groupByColumns.push(sortColumn);
      break;
    case AggregationMethod.LeastRecentValue:
      isUsingResultField = false;
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      aggPipeline.push({ $sort: { [sortColumn]: 1 } });
      groupByColumns.push(columnNames[0]);
      groupByColumns.push(sortColumn);
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  if (aggSelect) {
    if (groupByColumns.length > 0) {
      for (const group of groupByColumns) {
        aggPipeline.push({
          $group: {
            _id: `$${group}`,
            __result: { [aggSelect]: customAggValue || `$${columnNames[0]}` },
            __pk: { $first: `$${tablePrimaryKeyCol}` },
          },
        });
      }
    }
  } else if (!aggSelect && !isUsingResultField) {
    aggPipeline.push({
      $addFields: {
        __pk: `$${tablePrimaryKeyCol}`,
      },
    });
  }

  try {
    const rows: { [column: string]: DataResponse }[] = await connection
      .db(appOptions.database)
      .collection(tableName)
      .aggregate(aggPipeline)
      .toArray();

    if (rows && rows.length > 0) {
      for (const row of rows) {
        const pk = row.__pk.toString();
        responses[pk] ??= {};
        if (isUsingResultField) {
          responses[pk][columnNames[0]] = [row["__result"]];
        } else {
          for (const col in row) {
            responses[pk][col] ??= [];
            if (isArray || (responses[pk][col].length === 0 && !isArray)) {
              responses[pk][col].push(row[col]);
            }
          }
        }
      }
    }
  } catch (error) {
    throw new Error(`Error with MongoDB query Statement. Error - ${error}`);
  }

  return responses;
};
