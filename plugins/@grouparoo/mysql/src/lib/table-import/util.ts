import {
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
  let transform = null;

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
      op = "LIKE";
      transform = "LOWER";
      match = `%${match.toString().toLowerCase()}%`;
      break;
    case FilterOperation.NotContain:
      op = "NOT LIKE";
      transform = "LOWER";
      match = `%${match.toString().toLowerCase()}%`;
      break;
    case FilterOperation.In:
      op = "IN";
      break;
    default:
      throw new Error(`Unknown filterOperation: ${filterOperation}`);
  }

  const key = transform
    ? `${transform}(\`${columnName}\`)`
    : `\`${columnName}\``;

  // put the values in the array
  if (match) params.push(match);
  return ` ${key} ${op} ${Array.isArray(match) ? "(" : ""}${match ? "?" : ""}${
    Array.isArray(match) ? ")" : ""
  }`;
}
