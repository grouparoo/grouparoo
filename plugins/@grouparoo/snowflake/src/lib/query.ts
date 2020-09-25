// TODO: could use this in other like big query, postgres, etc

import {
  PluginConnectionProfilePropertyRuleOption,
  SourceOptionsMethod,
  ProfilePropertyPluginMethodResponse,
  plugin,
  ProfilePropertyRule,
  SimpleProfilePropertyRuleOptions,
  Profile,
} from "@grouparoo/core";

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "query",
    required: true,
    description: "The query to run, with mustache template variables",
    type: "textarea",
    options: async () => {
      return [];
    },
  },
];

export const sourceOptions: SourceOptionsMethod = async () => {
  return {}; // no options at the source level
};

// helper to run the query

export interface GetProfilePropertyHelperMethod {
  (argument: {
    profile: Profile;
    profilePropertyRule: ProfilePropertyRule;
    profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions;
    validateQuery?: { (query: string): void };
    executeQuery: {
      (query: string): Promise<
        { [key: string]: string | number | boolean | Date }[]
      >;
    };
  }): Promise<ProfilePropertyPluginMethodResponse>;
}

export function validateQuerySQL(sql: string) {
  const lowerCaseSQL = (sql || "").toLowerCase().trim();

  if (lowerCaseSQL.indexOf(";") >= 0) {
    throw new Error("Only provide a single query");
  }

  if (lowerCaseSQL.indexOf("--") >= 0) {
    throw new Error("Please remove any comments from the query");
  }

  if (lowerCaseSQL.indexOf("select") !== 0) {
    throw new Error("Property Query should start with SELECT");
  }
}

export const getProfileProperty: GetProfilePropertyHelperMethod = async ({
  profile,
  profilePropertyRule,
  profilePropertyRuleOptions,
  validateQuery,
  executeQuery,
}) => {
  const parameterizedQuery = await plugin.replaceTemplateProfileVariables(
    profilePropertyRuleOptions.query,
    profile
  );
  validateQuery = validateQuery || validateQuerySQL;
  validateQuery(parameterizedQuery);

  let response: ProfilePropertyPluginMethodResponse;
  try {
    // Run the query
    const rows = await executeQuery(parameterizedQuery);

    // Get the results
    if (rows && rows.length > 0) {
      if (!profilePropertyRule.isArray) {
        const row = rows[0];
        response = [Object.values(row)[0]];
      } else {
        response = rows.map((row) => Object.values(row)[0]);
      }
    }
  } catch (error) {
    throw new Error(
      `Error with Snowflake SQL Statement: Query - \`${parameterizedQuery}\`, Error - ${error}`
    );
  }

  return response;
};
