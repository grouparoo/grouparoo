import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import { getColumns, makeWhereClause } from "./columns";

import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
  plugin,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  profile,
  appOptions,
  sourceOptions,
  sourceMapping,
  profilePropertyRuleOptions,
  profilePropertyRuleFilters,
}) => {
  const table = sourceOptions.table; // TODO: how to escape?
  const tableCol = Object.keys(sourceMapping)[0]; // TODO: how to escape?
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

  const client = await connect(appOptions);
  const columns = await getColumns(client, table);
  console.log("columns", columns);

  const [tables] = await client.getTables();
  console.log("tables", tables);
  console.log(tables[0].metadata);

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

  const whereClause = makeWhereClause(
    columns,
    tableCol,
    tableCol,
    "=",
    `{{ ${profilePropertyMatch} }}`
  );
  const baseQuery = `SELECT ${aggSelect} as __result FROM \`${table}\` WHERE ${whereClause}`;

  let filteredQuery = baseQuery;
  for (const i in profilePropertyRuleFilters) {
    let { key, op, match } = profilePropertyRuleFilters[i];
    const colName = key;
    let sqlOp = "";
    switch (op) {
      case "equals":
        sqlOp = `=`;
        break;
      case "does not equal":
        sqlOp = `!=`;
        break;
      case "contains":
        sqlOp = `like`;
        match = `%${match.toString().toLowerCase()}%`;
        key = `LOWER(\`${key}\`)`;
        break;
      case "does not contain":
        sqlOp = `NOT LIKE`;
        match = `%${match.toString().toLowerCase()}%`;
        key = `LOWER(\`${key}\`)`;
        break;
      case "greater than":
        sqlOp = `>`;
        break;
      case "less than":
        sqlOp = `<`;
        break;
    }

    const filterClause = makeWhereClause(columns, colName, key, sqlOp, match);
    filteredQuery += ` AND ${filterClause}'`;
  }

  const parameterizedQuery = await plugin.replaceTemplateProfileVariables(
    filteredQuery,
    profile
  );

  validateQuery(parameterizedQuery);
  console.log("parameterizedQuery", parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  try {
    const options = {
      query: parameterizedQuery,
    };
    const [rows] = await client.query(options);
    if (rows && rows.length > 0) {
      const row: { [key: string]: any } = rows[0];
      console.log("row", row);
      response = row.__result;
    }
  } catch (error) {
    throw new Error(
      `Error with BigQuery SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  }

  return response;
};
