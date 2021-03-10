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
  In = "$in",
}

export function makeFindQuery(matchCondition: MatchCondition) {
  const { columnName, filterOperation, value, values } = matchCondition;
  let op;
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
    findQuery[columnName] = { [op]: match };
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
    // TODO: should that return a Date Object?
    if (value.hasOwnProperty("value")) {
      return value.value;
    }
  }

  // otherwise, regular value
  return value;
}
