import { validateQuery } from "../validateQuery";
import { getColumns, makeWhereClause, castValue } from "../util";

import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  connection,
  profile,
  sourceOptions,
  sourceMapping,
  profilePropertyRule,
  profilePropertyRuleOptions,
  profilePropertyRuleFilters,
}) => {
  const table = sourceOptions.table;
  const tableCol = Object.keys(sourceMapping)[0];
  const profilePropertyMatch = Object.values(sourceMapping)[0];
  const column = profilePropertyRuleOptions["column"];
  const aggregationMethod = profilePropertyRuleOptions["aggregation method"];
  const sortColumn = profilePropertyRuleOptions["sort column"];

  if (!aggregationMethod || !column) {
    return;
  }

  if (tableCol === column && aggregationMethod === "exact") {
    // don't return userId where userId = userId
    return;
  }

  const columns = await getColumns(connection, table);
  const profileData = await profile.properties();

  if (!profileData.hasOwnProperty(profilePropertyMatch)) {
    throw `unknown profile property: ${profilePropertyMatch}`;
  }
  const columnValue = profileData[profilePropertyMatch].values[0];

  let aggSelect = `\`${column}\``;
  let orderBy = "";
  switch (aggregationMethod) {
    case "exact":
      if (sortColumn) orderBy = `"${sortColumn}" ASC`;
      break;
    case "average":
      aggSelect = `COALESCE(AVG(${aggSelect}), 0)`;
      break;
    case "count":
      aggSelect = `COUNT(${aggSelect})`;
      break;
    case "sum":
      aggSelect = `COALESCE(SUM(${aggSelect}), 0)`;
      break;
    case "min":
      aggSelect = `MIN(${aggSelect})`;
      break;
    case "max":
      aggSelect = `MAX(${aggSelect})`;
      break;
    case "most recent value":
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `\`${sortColumn}\` DESC`;
      break;
    case "least recent value":
      if (!sortColumn) throw new Error("Sort Column is needed");
      orderBy = `\`${sortColumn}\` ASC`;
      break;
    default:
      throw new Error(`${aggregationMethod} is not a known aggregation method`);
  }

  const params = [];
  const types = [];
  let query = `SELECT ${aggSelect} as __result FROM \`${table}\` WHERE`;
  query += makeWhereClause(
    columns,
    tableCol,
    null,
    "=",
    columnValue,
    params,
    types
  );

  for (const i in profilePropertyRuleFilters) {
    let { key, op, match } = profilePropertyRuleFilters[i];
    let sqlOp;
    let transform = null;
    switch (op) {
      case "equals":
        sqlOp = `=`;
        break;
      case "does not equal":
        sqlOp = `!=`;
        break;
      case "contains":
        sqlOp = `LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        transform = "LOWER";
        break;
      case "does not contain":
        sqlOp = `NOT LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        transform = "LOWER";
        break;
      case "greater than":
        sqlOp = `>`;
        break;
      case "less than":
        sqlOp = `<`;
        break;
      default:
        throw new Error(`${op} is not a known sql operation`);
    }

    const filterClause = makeWhereClause(
      columns,
      key,
      transform,
      sqlOp,
      match,
      params,
      types
    );
    query += ` AND ${filterClause}`;
  }

  if (orderBy.length > 0) query += ` ORDER BY ${orderBy}`;
  if (!profilePropertyRule.isArray) query += ` LIMIT 1`;

  validateQuery(query);

  const options = { query, params, types };

  let response: ProfilePropertyPluginMethodResponse;
  try {
    const [rows] = await connection.query(options);
    if (rows && rows.length > 0) {
      if (!profilePropertyRule.isArray) {
        response = [castValue(rows[0].__result)];
      } else {
        response = rows.map((row) => castValue(row.__result));
      }
    }
  } catch (error) {
    throw new Error(
      `Error with BigQuery SQL Statement: Query - \`${options}\`, Error - ${error}`
    );
  }

  return response;
};
