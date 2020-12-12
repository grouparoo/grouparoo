import {
  getPropertyOptions,
  PluginConnection,
  PluginConnectionPropertyOption,
  SourceOptionsMethod,
  getSourceOptions,
  ProfilePropertyPluginMethod,
  getProfileProperty,
  ExecuteQueryMethod,
  ValidateQueryMethod,
  validateGenericQuery,
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
  validateQuery = validateGenericQuery,
}) => {
  const propertyOptions: PluginConnectionPropertyOption[] = getPropertyOptions();
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
    propertyOptions,
    methods: {
      sourceOptions,
      profileProperty,
    },
  };
};
