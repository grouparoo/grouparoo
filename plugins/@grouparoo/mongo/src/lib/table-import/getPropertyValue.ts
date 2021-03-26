import { castValue, makeFindQuery, MongoAggregationMethod } from "./util";
import {
  AggregationMethod,
  DataResponse,
  GetPropertyValueMethod,
} from "@grouparoo/app-templates/dist/source/table";

export const getPropertyValue: GetPropertyValueMethod = async ({
  connection,
  tableName,
  columnName,
  sortColumn,
  matchConditions,
  aggregationMethod,
  isArray,
}) => {
  let isUsingResultField = true;
  let aggSelect;
  let aggPipeline = [];

  let query = {};
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
      if (sortColumn) {
        aggPipeline.push({ $sort: { [sortColumn]: 1 } });
      }
      break;
    case AggregationMethod.Average:
      aggSelect = MongoAggregationMethod.Average;
      break;
    case AggregationMethod.Count:
      aggPipeline.push({
        $count: "__result",
      });
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
      break;
    case AggregationMethod.LeastRecentValue:
      isUsingResultField = false;
      if (!sortColumn) {
        throw new Error("Sort Column is needed");
      }
      aggPipeline.push({ $sort: { [sortColumn]: 1 } });
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  if (aggSelect) {
    aggPipeline.push({
      $group: {
        _id: null,
        ["__result"]: { [aggSelect]: `$${columnName}` },
      },
    });
  }

  if (!isArray) {
    aggPipeline.push({ $limit: 1 });
  }

  let response: DataResponse[];
  try {
    const rows = await connection.db
      .collection(tableName)
      .aggregate(aggPipeline)
      .toArray();

    if (rows && rows.length > 0) {
      if (!isArray) {
        if (isUsingResultField) {
          response = [castValue(rows[0].__result)];
        } else {
          response = [castValue(rows[0][columnName])];
        }
      } else {
        if (isUsingResultField) {
          response = rows.map((row) => castValue(row.__result));
        } else {
          response = rows.map((row) => castValue(row[columnName]));
        }
      }
    } else {
      if (aggregationMethod === AggregationMethod.Count) {
        response = [0];
      }
    }
  } catch (error) {
    throw new Error(`Error with MongoDB query Statement. Error - ${error}`);
  }

  return response;
};
