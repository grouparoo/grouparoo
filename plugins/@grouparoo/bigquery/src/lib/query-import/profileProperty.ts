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
  const parameterizedQuery = await profilePropertyRule.parameterizedQueryFromProfile(
    profilePropertyRuleOptions.query,
    profile
  );
  validateQuery(parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  const bigqueryClient = await connect(appOptions);
  try {
    const options = {
      query: parameterizedQuery,
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    // Get the results
    if (rows && rows.length > 0) {
      const row: { [key: string]: any } = rows[0];
      response = Object.values(row)[0];
    }
  } catch (error) {
    throw new Error(
      `Error with BigQuery SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  }

  return response;
};
