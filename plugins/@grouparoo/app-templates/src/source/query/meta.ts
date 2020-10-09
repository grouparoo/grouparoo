import {
  getProfilePropertyRuleOptions,
  PluginConnection,
  PluginConnectionProfilePropertyRuleOption,
  SourceOptionsMethod,
  getSourceOptions,
  ProfilePropertyPluginMethod,
  getProfileProperty,
  ExecuteQueryMethod,
  ValidateQueryMethod,
} from "./options";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    description: string;
    app: string;
    executeQuery: ExecuteQueryMethod;
    validateQuery?: ValidateQueryMethod;
  }): PluginConnection;
}

export const buildConnection: BuildConnectionMethod = ({
  name,
  description,
  app,
  executeQuery,
  validateQuery,
}) => {
  const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = getProfilePropertyRuleOptions();
  const sourceOptions: SourceOptionsMethod = getSourceOptions();
  const profileProperty: ProfilePropertyPluginMethod = getProfileProperty({
    executeQuery,
    validateQuery,
  });

  return {
    name,
    direction: "import",
    description,
    app,
    options: [],
    profilePropertyRuleOptions,
    methods: {
      sourceOptions,
      profileProperty,
    },
  };
};
