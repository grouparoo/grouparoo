import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  profile,
  appOptions,
  sourceOptions,
  sourceMapping,
  profilePropertyRule,
  profilePropertyRuleOptions,
  profilePropertyRuleFilters,
}) => {
  const table = sourceOptions.table;
  const tableCol = Object.keys(sourceMapping)[0];
  const profilePropertyMatch = Object.values(sourceMapping)[0];
  const aggregationMethod = profilePropertyRuleOptions["aggregation method"];
  const column = profilePropertyRuleOptions["column"];

  if (!aggregationMethod || !column) {
    return;
  }

  if (tableCol === column && aggregationMethod === "exact") {
    // don't return userId where userId = userId
    return;
  }

  let aggSelect = `\`${column}\``;
  switch (aggregationMethod) {
    case "average":
      aggSelect = `AVG(${aggSelect})`;
      break;
    case "count":
      aggSelect = `COUNT(${aggSelect})`;
      break;
    case "sum":
      aggSelect = `SUM(${aggSelect})`;
      break;
    case "min":
      aggSelect = `MIN(${aggSelect})`;
      break;
    case "max":
      aggSelect = `MAX(${aggSelect})`;
      break;
  }

  const baseQuery = `SELECT ${aggSelect} as __result FROM \`${table}\` WHERE \`${tableCol}\` = "{{ ${profilePropertyMatch} }}"`;

  let filteredQuery = baseQuery;
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
    }

    filteredQuery += ` AND ${key} ${sqlOp} '${match}'`;
  }

  let parameterizedQuery = "";
  try {
    parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
      profilePropertyRuleOptions.query,
      profile
    );
  } catch (error) {
    return undefined;
  }

  validateQuery(parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  const client = await connect(appOptions);
  try {
    const rows = await client.asyncQuery(parameterizedQuery);
    if (rows && rows.length > 0) {
      response = rows[0].__result;
    }
  } catch (error) {
    throw new Error(
      `Error with MySQL SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  } finally {
    await client.asyncEnd();
  }

  return response;
};
