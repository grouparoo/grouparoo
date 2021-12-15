import {
  DataResponseRow,
  DataResponse,
  FilterOperation,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";

export function makeWhereClause(
  matchCondition: MatchCondition,
  params: Array<any>
) {
  const { columnName, filterOperation, value, values } = matchCondition;
  let op;
  let match = values || value;

  switch (filterOperation) {
    case FilterOperation.Exists:
      op = "IS NOT NULL";
      break;
    case FilterOperation.NotExists:
      op = "IS NULL";
      break;
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
      op = "<=";
      break;
    case FilterOperation.Contain:
      op = "ILIKE"; // case insensitive
      match = `%${match.toString().toLowerCase()}%`;
      break;
    case FilterOperation.NotContain:
      op = "NOT ILIKE"; // case insensitive
      match = `%${match.toString().toLowerCase()}%`;
      break;
    case FilterOperation.In:
      op = "IN";
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  const replacementString = Array.isArray(match)
    ? `(${match.map((_, idx) => `:${params.length + idx + 1}`).join(", ")})`
    : match
    ? `:${params.length + 1}`
    : "";

  if (match) {
    Array.isArray(match)
      ? match.forEach((m) => params.push(m))
      : params.push(match);
  }
  return ` "${columnName}" ${op} ${replacementString}`; // "profile_id" = :3 or "profile_id" = (:3, :4, :5)
}

export function castRow(row): DataResponseRow {
  const out = {};
  Object.keys(row).forEach((colName) => {
    out[colName] = castValue(row[colName]);
  });
  return out;
}

export function castRowWithHighWaterMark(
  row,
  tempHighWaterMarkKey: string,
  highWaterMarkKey: string
): DataResponseRow {
  const out = castRow(row);
  // switch key to expected one
  out[highWaterMarkKey] = out[tempHighWaterMarkKey];
  delete out[tempHighWaterMarkKey];
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
