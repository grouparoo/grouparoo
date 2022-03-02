import {
  tableNameKey,
  GetSampleRowsMethod,
  GetTablesMethod,
  GetColumnDefinitionsMethod,
  getScheduleOptions,
  getSourceOptions,
  SourceOptionsMethod,
  getPropertyOptions,
  PropertyOptionsMethod,
  ScheduleOptionsMethod,
  PluginConnection,
  SourcePreviewMethod,
  getSourcePreview,
  SourceFilterMethod,
  UniquePropertyBootstrapOptions,
  getUniquePropertyBootstrapOptions,
  RecordsPluginMethod,
  getRecords,
  GetRowsMethod,
  RecordPropertyPluginMethod,
  RecordPropertiesPluginMethod,
  getRecordProperty,
  getRecordProperties,
  GetPropertyValueMethod,
  GetPropertyValuesMethod,
  SourceRunPercentCompleteMethod,
  getSourceRunPercentComplete,
  GetRowCountMethod,
  SourceOptionsExtra,
  AggregationMethod,
} from "../shared/options";

import { getSourceFilters } from "./sourceFilters";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    displayName: string;
    description: string;
    apps: string[];
    tableOptionDescription?: string;
    tableOptionDisplayName?: string;
    sourceOptions?: SourceOptionsExtra;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
    getTables: GetTablesMethod;
    getRows: GetRowsMethod;
    getPropertyValue: GetPropertyValueMethod;
    getPropertyValues?: GetPropertyValuesMethod;
    getRowCount: GetRowCountMethod;
  }): PluginConnection;
}

export const buildConnection: BuildConnectionMethod = ({
  name,
  displayName,
  description,
  apps,
  tableOptionDescription = null,
  tableOptionDisplayName = null,
  sourceOptions: additionalOptions,
  getSampleRows,
  getColumns,
  getTables,
  getRows,
  getPropertyValue,
  getPropertyValues,
  getRowCount,
}) => {
  const useAggregations = true;
  const propertyOptions: PropertyOptionsMethod = async (args) =>
    getPropertyOptions(args, {
      useAggregations,
      getSampleRows,
      getColumns,
    });
  const scheduleOptions: ScheduleOptionsMethod = async (args) =>
    getScheduleOptions(args, {
      getSampleRows,
      getColumns,
    });
  const sourceOptions: SourceOptionsMethod = getSourceOptions({
    getTables,
    sourceOptions: additionalOptions,
  });
  const sourcePreview: SourcePreviewMethod = getSourcePreview({
    getSampleRows,
    getColumns,
  });
  const sourceFilters: SourceFilterMethod = getSourceFilters({
    getColumns,
  });
  const uniquePropertyBootstrapOptions: UniquePropertyBootstrapOptions =
    getUniquePropertyBootstrapOptions({ useAggregations });
  const importRecords: RecordsPluginMethod = getRecords({
    getRows,
  });
  const recordProperty: RecordPropertyPluginMethod = getPropertyValue
    ? getRecordProperty({
        useAggregations,
        getPropertyValue,
      })
    : null;
  const recordProperties: RecordPropertiesPluginMethod = getPropertyValues
    ? getRecordProperties({
        useAggregations,
        getPropertyValues,
      })
    : null;
  const sourceRunPercentComplete: SourceRunPercentCompleteMethod =
    getSourceRunPercentComplete({
      getRowCount,
    });

  const options = (additionalOptions?.options || []).concat({
    key: tableNameKey,
    displayName: tableOptionDisplayName || "Table",
    required: true,
    description: tableOptionDescription || "The table to scan",
  });

  const plugin: PluginConnection = {
    name,
    displayName,
    direction: "import",
    description,
    supportIncrementalSchedule: true,
    apps,
    options,
    groupAggregations: [AggregationMethod.Exact],
    methods: {
      sourceOptions,
      sourcePreview,
      sourceFilters,
      propertyOptions,
      scheduleOptions,
      uniquePropertyBootstrapOptions,
      importRecords,
      recordProperty,
      recordProperties,
      sourceRunPercentComplete,
    },
  };

  return plugin;
};
