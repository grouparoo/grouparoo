import { validateQuery } from "../validateQuery";
import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  profile,
  connection,
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

  if (!aggregationMethod || !column) return;

  // don't `select userId where userId = {userId}` if we don't know {userId}
  if (tableCol === column && aggregationMethod === "exact") {
    const tableMappingCol: string = Object.values(sourceMapping)[0];
    const properties = await profile.properties();
    // if no property or no values, bail
    if (!properties[tableMappingCol]?.values.length) {
      return;
    }
  }

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

  let query = `SELECT ${aggSelect} as __result FROM \`${table}\` WHERE \`${tableCol}\` = "{{ ${profilePropertyMatch} }}"`;

  for (const i in profilePropertyRuleFilters) {
    let { key, op, match } = profilePropertyRuleFilters[i];

    let sqlOp = "";
    switch (op) {
      case "equals":
        key = `\`${key}\``;
        sqlOp = `=`;
        break;
      case "does not equal":
        key = `\`${key}\``;
        sqlOp = `!=`;
        break;
      case "contains":
        key = `LOWER(\`${key}\`)`;
        sqlOp = `like`;
        match = `%${match.toString().toLowerCase()}%`;
        break;
      case "does not contain":
        key = `LOWER(\`${key}\`)`;
        sqlOp = `NOT LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        break;
      case "greater than":
        key = `\`${key}\``;
        sqlOp = `>`;
        break;
      case "less than":
        key = `\`${key}\``;
        sqlOp = `<`;
        break;
      default:
        throw new Error(`${op} is not a known sql operation`);
    }

    query += ` AND ${key} ${sqlOp} '${match}'`;
  }

  if (orderBy.length > 0) query += ` ORDER BY ${orderBy}`;
  if (!profilePropertyRule.isArray) query += ` LIMIT 1`;

  let parameterizedQuery = "";
  try {
    parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
      query,
      profile
    );
  } catch (error) {
    return undefined;
  }

  validateQuery(parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  try {
    const rows = await connection.asyncQuery(parameterizedQuery);
    if (rows && rows.length > 0) {
      if (!profilePropertyRule.isArray) {
        response = [rows[0].__result];
      } else {
        response = rows.map((row) => row.__result);
      }
    }
  } catch (error) {
    throw new Error(
      `Error with MySQL SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  }

  return response;
};
