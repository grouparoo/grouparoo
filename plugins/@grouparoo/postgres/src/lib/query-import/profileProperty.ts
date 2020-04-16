import { connect } from "../connect";
import { validateQuery } from "../validateQuery";
import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  profile,
  appOptions,
  sourceMapping,
  profilePropertyRule,
  profilePropertyRuleOptions,
}) => {
  const parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
    profilePropertyRuleOptions.query,
    profile
  );
  validateQuery(parameterizedQuery);

  let row: ProfilePropertyPluginMethodResponse;
  const client = await connect(appOptions);
  try {
    const { rows } = await client.query(parameterizedQuery);
    if (rows && rows.length > 0) {
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
    await client.end();
  }

  return row;
};
