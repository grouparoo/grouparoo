import { validateQuery } from "../validateQuery";
import {
  ProfilePropertyPluginMethod,
  ProfilePropertyPluginMethodResponse,
  plugin,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  connection,
  profile,
  profilePropertyRule,
  profilePropertyRuleOptions,
}) => {
  const parameterizedQuery = await plugin.replaceTemplateProfileVariables(
    profilePropertyRuleOptions.query,
    profile
  );
  validateQuery(parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  try {
    const options = {
      query: parameterizedQuery,
    };

    // Run the query
    const [rows] = await connection.query(options);

    // Get the results
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
      `Error with BigQuery SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  }

  return response;
};
