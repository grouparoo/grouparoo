import {
  FilterOperation,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";

export function makeWhereClause(matchCondition: MatchCondition) {
  const { columnName, filterOperation, value, values } = matchCondition;
  let op;
  let match = values || value;
  let transform = null;

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
    ? `${transform}(CAST("${columnName}" as TEXT))`
    : `"${columnName}"`;
  match = Array.isArray(match) ? `(${match})` : `"${match}"`;

  return ` ${key} ${op} ${match}`;
}
