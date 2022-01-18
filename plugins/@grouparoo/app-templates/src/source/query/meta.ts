import {
  getPropertyOptions,
  getScheduleOptions,
  PluginConnection,
  getRecordsMethod,
  SourceOptionsMethod,
  PropertyOptionsMethod,
  ScheduleOptionsMethod,
  getSourceOptions,
  RecordPropertyPluginMethod,
  getRecordProperty,
  ExecuteQueryMethod,
  ValidateQueryMethod,
  validateGenericQuery,
  GetChangedRowsMethod,
} from "./options";
import { GetTablesMethod } from "../table";
import { ConnectionOptionsOption } from "@grouparoo/core";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    displayName: string;
    description: string;
    apps: string[];
    tableOptionDescription?: string;
    tableOptionDisplayName?: string;
    options?: ConnectionOptionsOption[];
    executeQuery: ExecuteQueryMethod;
    validateQuery?: ValidateQueryMethod;
    getChangedRows?: GetChangedRowsMethod;
    getTables?: GetTablesMethod;
  }): PluginConnection;
}

export const buildConnection: BuildConnectionMethod = ({
  name,
  displayName,
  description,
  apps,
  tableOptionDescription = null,
  options = [],
  executeQuery,
  getChangedRows,
  validateQuery = validateGenericQuery,
  getTables,
}) => {
  const sourceOptions: SourceOptionsMethod = getSourceOptions({ getTables });
  const recordProperty: RecordPropertyPluginMethod = getRecordProperty({
    executeQuery,
    validateQuery,
  });

  const propertyOptions: PropertyOptionsMethod = async (args) =>
    getPropertyOptions(args);
  const scheduleOptions: ScheduleOptionsMethod = async (args) =>
    getScheduleOptions(args);

  // const scheduleOptions = getChangedRows ? getScheduleOptions() : null;
  const records = getChangedRows ? getRecordsMethod(getChangedRows) : null;

  const plugin: PluginConnection = {
    name,
    displayName,
    direction: "import",
    description,
    supportIncrementalSchedule: true,
    apps,
    options,
    skipSourceMapping: true,
    groupAggregations: [],
    methods: {
      sourceOptions,
      recordProperty,
      records,
      propertyOptions,
      scheduleOptions,
    },
  };

  return plugin;
};
