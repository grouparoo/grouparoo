import {
  ProfilePropertyPluginMethod,
  plugin,
  ProfilePropertyPluginMethodResponse,
} from "@grouparoo/core";
import {
  ExecuteQueryMethod,
  ValidateQueryMethod,
  queryKey,
} from "./pluginMethods";

export interface GetProfilePropertyMethod {
  (argument: {
    executeQuery: ExecuteQueryMethod;
    validateQuery?: ValidateQueryMethod;
  }): ProfilePropertyPluginMethod;
}

export const getProfileProperty: GetProfilePropertyMethod = ({
  executeQuery,
  validateQuery = validateGenericQuery,
}) => {
  const profileProperty: ProfilePropertyPluginMethod = async ({
    connection,
    appOptions,
    appId,
    profile,
    property,
    propertyOptions,
  }) => {
    const ruleQuery = propertyOptions[queryKey];
    let query;

    try {
      query = await plugin.replaceTemplateProfileVariables(
        ruleQuery?.toString(),
        profile
      );
    } catch (error) {
      // if we don't have the right properties to build the query, bail
      return undefined;
    }

    if (validateQuery) {
      validateQuery({ query });
    }

    let response: ProfilePropertyPluginMethodResponse;
    try {
      // Run the query
      const rows = await executeQuery({
        connection,
        appOptions,
        appId,
        query,
      });

      // Get the results
      if (rows && rows.length > 0) {
        if (!property.isArray) {
          const row = rows[0];
          response = [Object.values(row)[0]];
        } else {
          response = rows.map((row) => Object.values(row)[0]);
        }
      }
    } catch (error) {
      throw new Error(
        `Error with Query (${appId}): - \`${query}\`, Error - ${error}`
      );
    }
    return response;
  };

  return profileProperty;
};

export const validateGenericQuery: ValidateQueryMethod = ({ query }) => {
  const lowerCaseSQL = (query || "").toLowerCase().trim();

  if (lowerCaseSQL.indexOf(";") >= 0) {
    throw new Error("Only provide a single query");
  }

  if (lowerCaseSQL.indexOf("--") >= 0) {
    throw new Error("Please remove any comments from the query");
  }

  if (lowerCaseSQL.indexOf("select") !== 0) {
    throw new Error("Property Query should start with SELECT");
  }
};
