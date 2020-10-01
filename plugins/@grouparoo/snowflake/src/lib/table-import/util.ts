import {
  DataResponseRow,
  DataResponse,
  FilterOperation,
  MatchCondition,
} from "../table";

export function makeWhereClause(
  matchCondition: MatchCondition,
  params: Array<any>
) {
  const { columnName, filterOperation, value } = matchCondition;
  let op;
  let match = value;

  switch (filterOperation) {
    case FilterOperation.Equal:
      op = "=";
      break;
    case FilterOperation.NotEqual:
      op = "!=";
      break;
    case FilterOperation.GreaterThan:
      op = ">";
      break;
    case FilterOperation.GreaterThanOrEqual:
      op = ">=";
      break;
    case FilterOperation.LessThan:
      op = "<";
      break;
    case FilterOperation.LessThanOrEqual:
      op = "<=>";
      break;
    case FilterOperation.Contain:
      op = "ILIKE"; // case insensitive
      match = `%${match.toString().toLowerCase()}%`;
      break;
    case FilterOperation.NotContain:
      op = "NOT ILIKE"; // case insensitive
      match = `%${match.toString().toLowerCase()}%`;
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  params.push(match);
  return ` "${columnName}" ${op} :${params.length}`; // "profile_id" = :3
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
