import {
  getPropertyOptions,
  getScheduleOptions,
  PluginConnection,
  getProfilesMethod,
  PluginConnectionPropertyOption,
  SourceOptionsMethod,
  getSourceOptions,
  ProfilePropertyPluginMethod,
  getProfileProperty,
  ExecuteQueryMethod,
  ValidateQueryMethod,
  validateGenericQuery,
  GetChangedRowsMethod,
} from "./options";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    description: string;
    app: string;
    executeQuery: ExecuteQueryMethod;
    validateQuery?: ValidateQueryMethod;
    getChangedRows?: GetChangedRowsMethod;
  }): PluginConnection;
}

export const buildConnection: BuildConnectionMethod = ({
  name,
  description,
  app,
  executeQuery,
  getChangedRows,
  validateQuery = validateGenericQuery,
}) => {
  const propertyOptions: PluginConnectionPropertyOption[] = getPropertyOptions();
  const sourceOptions: SourceOptionsMethod = getSourceOptions();
  const profileProperty: ProfilePropertyPluginMethod = getProfileProperty({
    executeQuery,
    validateQuery,
  });
  const scheduleOptions = getChangedRows ? getScheduleOptions() : null;
  const profiles = getChangedRows ? getProfilesMethod(getChangedRows) : null;

  return {
    name,
    direction: "import",
    description,
    app,
    options: [],
    propertyOptions,
    scheduleOptions,
    skipSourceMapping: true,
    methods: {
      sourceOptions,
      profileProperty,
      profiles,
    },
  };
};
