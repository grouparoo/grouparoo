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
import { GetTablesMethod, tableNameKey } from "../table";
import { ConnectionOption } from "@grouparoo/core";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    description: string;
    app: string;
    tableOptionDescription?: string;
    options?: ConnectionOption[];
    executeQuery: ExecuteQueryMethod;
    validateQuery?: ValidateQueryMethod;
    getChangedRows?: GetChangedRowsMethod;
    getTables?: GetTablesMethod;
  }): PluginConnection;
}

export const buildConnection: BuildConnectionMethod = ({
  name,
  description,
  app,
  tableOptionDescription = null,
  options = [],
  executeQuery,
  getChangedRows,
  validateQuery = validateGenericQuery,
  getTables,
}) => {
  const propertyOptions: PluginConnectionPropertyOption[] = getPropertyOptions();
  const sourceOptions: SourceOptionsMethod = getSourceOptions({ getTables });
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
    options,
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
