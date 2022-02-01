import {
  FilterOperation,
  MatchCondition,
} from "@grouparoo/app-templates/dist/source/table";
import SQLiteQueryBuilder from "../queryBuilder";
import { toValuePlaceholders, toValuesArray } from "../util";

export function makeWhereClause(
  matchCondition: MatchCondition,
  queryBuilder: SQLiteQueryBuilder
) {
  const { columnName, filterOperation, value, values } = matchCondition;
  let op: string;
  let match = values || value;
  let transform: string;

  switch (filterOperation) {
    case FilterOperation.Exists:
      op = "IS NOT NULL";
      match = null;
      break;
    case FilterOperation.NotExists:
      op = "IS NULL";
      match = null;
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
    ? `${transform}(CAST("${columnName}" as TEXT))`
    : `"${columnName}"`;

  queryBuilder.push(`${key} ${op}`);

  if (match) {
    if (Array.isArray(match)) {
      const values = toValuesArray(match);
      queryBuilder.push(toValuePlaceholders(values), values);
    } else {
      queryBuilder.push(`?`, [match]);
    }
  }
}
