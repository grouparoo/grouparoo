import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  profile,
  appOptions,
  profilePropertyRule,
  sourceOptions,
  sourceMapping,
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

  let aggSelect = `"${column}"`;
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

  const baseQuery = `SELECT ${aggSelect} as __result FROM "${table}" WHERE "${tableCol}" = '{{ ${profilePropertyMatch} }}'`;

  let filteredQuery = baseQuery;
  for (const i in profilePropertyRuleFilters) {
    let { key, op, match } = profilePropertyRuleFilters[i];

    let sqlOp = "";
    switch (op) {
      case "equals":
        key = `"${key}"`;
        sqlOp = `=`;
        break;
      case "does not equal":
        key = `"${key}"`;
        sqlOp = `!=`;
        break;
      case "contains":
        sqlOp = `like`;
        match = `%${match.toString().toLowerCase()}%`;
        key = `LOWER("${key}")`;
        break;
      case "does not contain":
        sqlOp = `NOT LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        key = `LOWER("${key}")`;
        break;
      case "greater than":
        key = `"${key}"`;
        sqlOp = `>`;
        break;
      case "less than":
        key = `"${key}"`;
        sqlOp = `<`;
        break;
    }

    filteredQuery += ` AND ${key} ${sqlOp} '${match}'`;
  }

  const parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
    filteredQuery,
    profile
  );

  validateQuery(parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  const client = await connect(appOptions);
  try {
    const { rows } = await client.query(parameterizedQuery);
    if (rows && rows.length > 0) {
      response = rows[0].__result;
    }
  } catch (error) {
    throw new Error(
      `Error with Postgres SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  } finally {
    await client.end();
  }

  return response;
};
