import { validateQuery } from "../validateQuery";
import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  connection,
  profile,
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
  try {
    const { rows } = await connection.query(parameterizedQuery);
    if (rows && rows.length > 0) {
      if (!profilePropertyRule.isArray) {
        const row: { [key: string]: any } = rows[0];
        response = [Object.values(row)[0]];
      } else {
        response = rows.map((row) => Object.values(row)[0]);
      }
    }
  } catch (error) {
    throw new Error(
      `Error with Postgres SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  }

  return response;
};
