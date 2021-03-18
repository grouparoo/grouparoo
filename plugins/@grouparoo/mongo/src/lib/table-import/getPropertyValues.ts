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
  tableName,
  columnName,
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
  let responses: { [key: string]: DataResponse[] } = {};

  if (primaryKeys.length === 0) return responses;

  let query = {};

  let fieldType: string = await getMostTrendingType(
    connection,
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

      groupByColumns.push(columnName);
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
      aggSelect = MongoAggregationMethod.Sum;
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
      groupByColumns.push(columnName);
      groupByColumns.push(sortColumn);
      break;
    case AggregationMethod.LeastRecentValue:
      isUsingResultField = false;
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      aggPipeline.push({ $sort: { [sortColumn]: 1 } });
      groupByColumns.push(columnName);
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
            __result: { [aggSelect]: customAggValue || `$${columnName}` },
            __pk: { $first: `$${tablePrimaryKeyCol}` },
          },
        });
      }
    }
  } else {
    aggPipeline.push({
      $addFields: {
        __pk: `$${tablePrimaryKeyCol}`,
      },
    });
  }

  try {
    const rows = await connection.db
      .collection(tableName)
      .aggregate(aggPipeline)
      .toArray();

    if (rows && rows.length > 0) {
      rows.forEach((row) => {
        if (!responses[row.__pk]) responses[row.__pk] = [];
        if (isArray || (responses[row.__pk].length === 0 && !isArray)) {
          if (isUsingResultField) {
            responses[row.__pk].push(row.__result);
          } else {
            responses[row.__pk].push(row[columnName]);
          }
        }
      });
    }
  } catch (error) {
    throw new Error(`Error with MongoDB query Statement. Error - ${error}`);
  }

  return responses;
};
