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
  getSourceFilters,
  UniquePropertyBootstrapOptions,
  getUniquePropertyBootstrapOptions,
  ProfilesPluginMethod,
  getProfiles,
  GetChangedRowsMethod,
  ProfilePropertyPluginMethod,
  ProfilePropertiesPluginMethod,
  getProfileProperty,
  getProfileProperties,
  GetPropertyValueMethod,
  GetPropertyValuesMethod,
  SourceRunPercentCompleteMethod,
  getSourceRunPercentComplete,
  GetChangedRowCountMethod,
  SourceOptionsExtra,
  AggregationMethod,
} from "./options";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    description: string;
    app: string;
    tableOptionDescription?: string;
    tableOptionDisplayName?: string;
    sourceOptions?: SourceOptionsExtra;
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
    getTables: GetTablesMethod;
    getChangedRows: GetChangedRowsMethod;
    getPropertyValue: GetPropertyValueMethod;
    getPropertyValues?: GetPropertyValuesMethod;
    getChangedRowCount: GetChangedRowCountMethod;
  }): PluginConnection;
}

export const buildConnection: BuildConnectionMethod = ({
  name,
  description,
  app,
  tableOptionDescription = null,
  tableOptionDisplayName = null,
  sourceOptions: additionalOptions,
  getSampleRows,
  getColumns,
  getTables,
  getChangedRows,
  getPropertyValue,
  getPropertyValues,
  getChangedRowCount,
}) => {
  const propertyOptions: PropertyOptionsMethod = async (args) =>
    getPropertyOptions(args, {
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
    getUniquePropertyBootstrapOptions();
  const profiles: ProfilesPluginMethod = getProfiles({
    getChangedRows,
  });
  const profileProperty: ProfilePropertyPluginMethod = getPropertyValue
    ? getProfileProperty({
        getPropertyValue,
      })
    : null;
  const profileProperties: ProfilePropertiesPluginMethod = getPropertyValues
    ? getProfileProperties({
        getPropertyValues,
      })
    : null;
  const sourceRunPercentComplete: SourceRunPercentCompleteMethod =
    getSourceRunPercentComplete({
      getChangedRowCount,
    });

  const options = (additionalOptions?.options || []).concat({
    key: tableNameKey,
    displayName: tableOptionDisplayName || "Table",
    required: true,
    description: tableOptionDescription || "The table to scan",
  });

  const plugin: PluginConnection = {
    name,
    direction: "import",
    description,
    app,
    options,
    groupAggregations: [AggregationMethod.Exact],
    methods: {
      sourceOptions,
      sourcePreview,
      sourceFilters,
      propertyOptions,
      scheduleOptions,
      uniquePropertyBootstrapOptions,
      profiles,
      profileProperty,
      profileProperties,
      sourceRunPercentComplete,

      // @ts-ignore
      getColumns, // powers syncTable with the column types
    },
  };

  return plugin;
};
