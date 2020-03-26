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
  const parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
    profilePropertyRuleOptions.query,
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
