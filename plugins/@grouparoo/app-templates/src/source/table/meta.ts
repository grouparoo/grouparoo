import {
  tableNameKey,
  GetSampleRowsMethod,
  GetTablesMethod,
  GetColumnDefinitionsMethod,
  getScheduleOptions,
  getSourceOptions,
  SourceOptionsMethod,
  getProfilePropertyRuleOptions,
  PluginConnectionProfilePropertyRuleOption,
  PluginConnectionScheduleOption,
  PluginConnection,
  SourcePreviewMethod,
  getSourcePreview,
  SourceFilterMethod,
  getSourceFilters,
  UniqueProfilePropertyRuleBootstrapOptions,
  getUniqueProfilePropertyRuleBootstrapOptions,
  ProfilesPluginMethod,
  getProfiles,
  GetChangedRowsMethod,
  ProfilePropertyPluginMethod,
  getProfileProperty,
  GetPropertyValueMethod,
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
  getChangedRowCount,
}) => {
  const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = getProfilePropertyRuleOptions(
    {
      getSampleRows,
      getColumns,
    }
  );
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
  const uniqueProfilePropertyRuleBootstrapOptions: UniqueProfilePropertyRuleBootstrapOptions = getUniqueProfilePropertyRuleBootstrapOptions();
  const profiles: ProfilesPluginMethod = getProfiles({
    getChangedRows,
  });
  const profileProperty: ProfilePropertyPluginMethod = getProfileProperty({
    getPropertyValue,
  });
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
        required: true,
        description: tableOptionDescription || "The table to scan",
      },
    ],
    profilePropertyRuleOptions,
    scheduleOptions,
    methods: {
      sourceOptions,
      sourcePreview,
      sourceFilters,
      uniqueProfilePropertyRuleBootstrapOptions,
      profiles,
      profileProperty,
      sourceRunPercentComplete,
    },
  };
};
