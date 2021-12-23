import {
  RecordPropertyPluginMethod,
  plugin,
  RecordPropertyPluginMethodResponse,
} from "@grouparoo/core";
import {
  ExecuteQueryMethod,
  ValidateQueryMethod,
  queryKey,
} from "./pluginMethods";

export interface GetRecordPropertyMethod {
  (argument: {
    executeQuery: ExecuteQueryMethod;
    validateQuery?: ValidateQueryMethod;
  }): RecordPropertyPluginMethod;
}

export const getRecordProperty: GetRecordPropertyMethod = ({
  executeQuery,
  validateQuery = validateGenericQuery,
}) => {
  const recordProperty: RecordPropertyPluginMethod = async ({
    connection,
    appOptions,
    sourceOptions,
    appId,
    record,
    property,
    propertyOptions,
  }) => {
    const ruleQuery = propertyOptions[queryKey];
    let query;

    try {
      query = await plugin.replaceTemplateRecordVariables(
        ruleQuery?.toString(),
        record
      );
    } catch (error) {
      // if we don't have the right properties to build the query, bail
      return undefined;
    }

    if (validateQuery) {
      validateQuery({ query });
    }

    let response: RecordPropertyPluginMethodResponse;
    try {
      // Run the query
      const rows = await executeQuery({
        connection,
        appOptions,
        sourceOptions,
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

  return recordProperty;
};

export const validateGenericQuery: ValidateQueryMethod = ({ query }) => {
  const lowerCaseSQL = (query || "").toLowerCase().trim();

  if (lowerCaseSQL.indexOf("--") >= 0) {
    throw new Error("Please remove any comments from the query");
  }

  if (lowerCaseSQL.indexOf("select") !== 0) {
    throw new Error("Property Query should start with SELECT");
  }
};
