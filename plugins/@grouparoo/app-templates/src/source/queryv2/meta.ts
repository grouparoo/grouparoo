import {
  GetSampleRowsMethod,
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
  sourceQueryKey,
} from "../shared/options";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    displayName: string;
    description: string;
    apps: string[];
    queryOptionDescription?: string;
    queryOptionDisplayName?: string;
    sourceOptions?: SourceOptionsExtra;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
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
  queryOptionDescription = null,
  queryOptionDisplayName = null,
  sourceOptions: additionalOptions,
  getSampleRows,
  getColumns,
  getRows,
  getPropertyValue,
  getPropertyValues,
  getRowCount,
}) => {
  const useAggregations = false;
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
    sourceOptions: additionalOptions,
  });
  const sourcePreview: SourcePreviewMethod = getSourcePreview({
    getSampleRows,
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
    key: sourceQueryKey,
    type: "textarea",
    required: true,
    displayName: queryOptionDisplayName || "Query",
    description: queryOptionDescription || "The query to run",
    placeholder: "SELECT statement returning property values",
  });

  const plugin: PluginConnection = {
    name,
    displayName,
    direction: "import",
    description,
    supportIncrementalSchedule: true,
    groupAggregations: [AggregationMethod.Exact],
    apps,
    options,
    methods: {
      sourceOptions,
      sourcePreview,
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
