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
  profilePropertyRuleOptions,
}) => {
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
    const { rows } = await client.query(parameterizedQuery);
    if (rows && rows.length > 0) {
      const row: { [key: string]: any } = rows[0];
      response = Object.values(row)[0];
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
