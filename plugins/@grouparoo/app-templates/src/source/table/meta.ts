import {
  tableNameKey,
  GetSampleRowsMethod,
  GetTablesMethod,
  GetColumnDefinitionsMethod,
  getScheduleOptions,
  getSourceOptions,
  SourceOptionsMethod,
  getPropertyOptions,
  PluginConnectionPropertyOption,
  PluginConnectionScheduleOption,
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
} from "./options";

export interface BuildConnectionMethod {
  (argument: {
    name: string;
    description: string;
    app: string;
    tableOptionDescription?: string;

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
  getSampleRows,
  getColumns,
  getTables,
  getChangedRows,
  getPropertyValue,
  getPropertyValues,
  getChangedRowCount,
}) => {
  const propertyOptions: PluginConnectionPropertyOption[] = getPropertyOptions({
    getSampleRows,
    getColumns,
  });
  const scheduleOptions: PluginConnectionScheduleOption[] = getScheduleOptions({
    getSampleRows,
    getColumns,
  });
  const sourceOptions: SourceOptionsMethod = getSourceOptions({
    getTables,
  });
  const sourcePreview: SourcePreviewMethod = getSourcePreview({
    getSampleRows,
    getColumns,
  });
  const sourceFilters: SourceFilterMethod = getSourceFilters({
    getColumns,
  });
  const uniquePropertyBootstrapOptions: UniquePropertyBootstrapOptions = getUniquePropertyBootstrapOptions();
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
  const sourceRunPercentComplete: SourceRunPercentCompleteMethod = getSourceRunPercentComplete(
    {
      getChangedRowCount,
    }
  );

  return {
    name,
    direction: "import",
    description,
    app,
    options: [
      {
        key: tableNameKey,
        displayName: "Table",
        required: true,
        description: tableOptionDescription || "The table to scan",
      },
    ],
    propertyOptions,
    scheduleOptions,
    methods: {
      sourceOptions,
      sourcePreview,
      sourceFilters,
      uniquePropertyBootstrapOptions,
      profiles,
      profileProperty,
      profileProperties,
      sourceRunPercentComplete,
    },
  };
};
