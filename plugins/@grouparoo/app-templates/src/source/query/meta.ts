import {
  getPropertyOptions,
  getScheduleOptions,
  PluginConnection,
  getProfilesMethod,
  SourceOptionsMethod,
  PropertyOptionsMethod,
  ScheduleOptionsMethod,
  getSourceOptions,
  ProfilePropertyPluginMethod,
  getProfileProperty,
  ExecuteQueryMethod,
  ValidateQueryMethod,
  validateGenericQuery,
  GetChangedRowsMethod,
} from "./options";
import { GetTablesMethod } from "../table";
import { ConnectionOption } from "@grouparoo/core";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    description: string;
    app: string;
    tableOptionDescription?: string;
    tableOptionDisplayName?: string;
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
  const sourceOptions: SourceOptionsMethod = getSourceOptions({ getTables });
  const profileProperty: ProfilePropertyPluginMethod = getProfileProperty({
    executeQuery,
    validateQuery,
  });

  const propertyOptions: PropertyOptionsMethod = async (args) =>
    getPropertyOptions(args);
  const scheduleOptions: ScheduleOptionsMethod = async (args) =>
    getScheduleOptions(args);

  // const scheduleOptions = getChangedRows ? getScheduleOptions() : null;
  const profiles = getChangedRows ? getProfilesMethod(getChangedRows) : null;

  return {
    name,
    direction: "import",
    description,
    app,
    options,
    skipSourceMapping: true,
    methods: {
      sourceOptions,
      profileProperty,
      profiles,
      propertyOptions,
      scheduleOptions,
    },
  };
};
