import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import { getColumns } from "./columns";
import { BigQuery } from "@google-cloud/bigquery";

import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

/*
 * Returns what to add to query and appends to arrays
 */
function makeWhereClause(
  columnInfo: any,
  colName: string,
  transform: string | null,
  sqlOp: string,
  match: any,
  params: Array<any>,
  types: Array<string>
) {
  // find the column
  const column = columnInfo[colName];
  if (!column) {
    throw `column name not found: ${colName}`;
  }
  const dataType = column.data_type;
  console.log(column);

  // interesting code in BigQuery library: function convert(schemaField, value)
  let param;
  switch (dataType) {
    // TODO: do these work with js Date Objects?
    case "DATE":
      param = BigQuery.date(match);
      break;
    case "DATETIME":
      param = BigQuery.datetime(match);
      break;
    case "TIME":
      param = BigQuery.time(match);
      break;
    case "BOOL":
    case "NUMERIC":
    case "INT64":
    case "FLOAT64":
    case "STRING":
      // TODO: need stronger casting on any of these?
      param = match;
      break;
    case "TIMESTAMP":
    case "GEOGRAPHY":
    case "ARRAY":
    case "STRUCT":
    case "BYTES":
    default:
      throw `unsupported data type: ${dataType}`;
  }

  const key = transform ? `${transform}(\`${colName}\`)` : `\`${colName}\``;

  // put the values and types in the array
  params.push(param);
  types.push(dataType);
  return ` ${key} ${sqlOp} ?`;
}

function castResult(result) {
  console.log("castResult", result);
  if (result === null || result === undefined) {
    return null;
  }
  // might have to do by type or something here, but some have a "value"
  if (typeof result === "object") {
    // TODO: dates have values, should that return a Date Object if "BigQueryDate" or similar
    if (result.hasOwnProperty("value")) {
      return result.value;
    }
  }

  // otherwise, regular value
  return result;
}

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
  const profileData = await profile.properties();

  if (!profileData.hasOwnProperty(profilePropertyMatch)) {
    throw `unknown profile property: ${profilePropertyMatch}`;
  }
  const columnValue = profileData[profilePropertyMatch].value;

  console.log("columns", columns);
  console.log("columnValue", columnValue);

  let aggSelect = `\`${column}\``;
  switch (aggregationMethod) {
    case "exact":
      break;
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
    default:
      throw `unknown aggregation method: ${aggregationMethod}`;
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
        throw `unknown filter: ${op}`;
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

  validateQuery(query);

  const options = { query, params, types };
  console.log("query options", options);

  let response: ProfilePropertyPluginMethodResponse;
  try {
    const [rows] = await client.query(options);
    if (rows && rows.length > 0) {
      const row: { [key: string]: any } = rows[0];
      response = castResult(row.__result);
    }
  } catch (error) {
    throw new Error(
      `Error with BigQuery SQL Statement: Query - \`${options}\`, Error - ${error}`
    );
  }

  return response;
};
