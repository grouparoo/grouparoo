import {
  DataResponseRow,
  DataResponse,
  FilterOperation,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";

export enum MongoAggregationMethod {
  Exact = "$eq",
  Average = "$avg",
  Count = "$count",
  Sum = "$sum",
  Min = "$min",
  Max = "$max",
}

export enum MongoFilterOperation {
  Equal = "$eq",
  NotEqual = "$ne",
  GreaterThan = "$gt",
  GreaterThanOrEqual = "$gte",
  LessThan = "$lt",
  LessThanOrEqual = "$lte",
  contains = "$regex",
  NotContain = "$not",
  In = "$in",
}

export function makeFindQuery(matchCondition: MatchCondition) {
  const { columnName, filterOperation, value, values } = matchCondition;
  let op;
  let regexOptions;
  let match = values || value;

  switch (filterOperation) {
    case FilterOperation.Equal:
      op = MongoFilterOperation.Equal;
      break;
    case FilterOperation.NotEqual:
      op = MongoFilterOperation.NotEqual;
      break;
    case FilterOperation.GreaterThan:
      op = MongoFilterOperation.GreaterThan;
      break;
    case FilterOperation.GreaterThanOrEqual:
      op = MongoFilterOperation.GreaterThanOrEqual;
      break;
    case FilterOperation.LessThan:
      op = MongoFilterOperation.LessThan;
      break;
    case FilterOperation.LessThanOrEqual:
      op = MongoFilterOperation.LessThanOrEqual;
      break;
    case FilterOperation.Contain:
      op = MongoFilterOperation.contains;
      regexOptions = "i";
      break;
    case FilterOperation.NotContain:
      op = MongoFilterOperation.NotContain;
      regexOptions = "i";
      break;
    case FilterOperation.In:
      op = MongoFilterOperation.In;
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  const findQuery = {};
  if (Array.isArray(match)) {
    if (FilterOperation.In) {
      findQuery[columnName] = { [op]: match };
    } else {
      findQuery["$or"] = match.map((val) => ({
        [columnName]: { [op]: val },
      }));
    }
  } else {
    if (regexOptions) {
      findQuery[columnName] = { [op]: new RegExp(String(match), regexOptions) };
    } else {
      findQuery[columnName] = { [op]: match };
    }
  }

  return findQuery;
}

export function castRow(row): DataResponseRow {
  const out = {};
  Object.keys(row).forEach((colName) => {
    out[colName] = castValue(row[colName]);
  });
  return out;
}

export function castValue(value): DataResponse {
  if (value === null || value === undefined) {
    return null;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof value === "object") {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (value.hasOwnProperty("value")) {
      return value.value;
    }
  }

  // otherwise, regular value
  return value;
}

export async function getFieldSampleTypes(
  connection: any,
  tableName: string,
  fieldName: string
) {
  return connection.db
    .collection(tableName)
    .aggregate([
      { $sample: { size: 10 } },
      {
        $match: {
          $and: [
            { [fieldName]: { $exists: true } },
            { [fieldName]: { $ne: null } },
          ],
        },
      },
      {
        $project: {
          [fieldName]: { $type: `$${fieldName}` },
        },
      },
    ])
    .toArray();
}

export async function getMostTrendingType(
  connection: any,
  tableName: string,
  fieldName: string
): Promise<string> {
  const types = await getFieldSampleTypes(connection, tableName, fieldName);
  const trendingTypes = {};
  for (const entry of types) {
    const currentCount = trendingTypes[entry[fieldName]];
    trendingTypes[entry[fieldName]] = currentCount ? currentCount + 1 : 1;
  }
  return Object.keys(trendingTypes).reduce((a, b) =>
    trendingTypes[a] > trendingTypes[b] ? a : b
  );
}
