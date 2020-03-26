import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import {
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  Profile,
  ProfilePropertyRule,
  SimpleProfilePropertyRuleOptions,
} from "@grouparoo/core";

export async function profileProperty(
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions,
  sourceMapping: SimpleSourceOptions,
  profilePropertyRule: ProfilePropertyRule,
  profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions,
  profile: Profile
) {
  const table = sourceOptions.table;
  const tableCol = Object.keys(sourceMapping)[0];
  const profilePropertyMatch = Object.values(sourceMapping)[0];
  const aggregationMethod = profilePropertyRuleOptions["aggregation method"];
  const column = profilePropertyRuleOptions["column"];

  if (!aggregationMethod || !column) {
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

  const baseQuery = `SELECT ${aggSelect} FROM \`${table}\` WHERE \`${tableCol}\` = "{{ ${profilePropertyMatch} }}"`;

  const parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
    baseQuery,
    profile
  );
  validateQuery(parameterizedQuery);

  let row;
  const client = await connect(appOptions);
  try {
    const rows = await client.asyncQuery(parameterizedQuery);
    if (rows) {
      row = rows[0];
      for (const remoteKey in sourceMapping) {
        const profileKey = sourceMapping[remoteKey];
        if (row[remoteKey] && !row[profileKey]) {
          row[profileKey] = row[remoteKey];
        }
      }
    }
  } catch (error) {
    throw new Error(
      `Error with MySQL SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  } finally {
    await client.asyncEnd();
  }

  return row;
}
