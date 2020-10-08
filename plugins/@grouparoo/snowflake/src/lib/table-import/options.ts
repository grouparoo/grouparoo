import {
  getProfilePropertyRuleOptions,
  getSourcePreview,
  getScheduleOptions,
  getSourceOptions,
  getSourceFilters,
  getProfileProperty,
  getProfiles,
  getSourceRunPercentComplete,
  SourcePreviewMethod,
  PluginConnectionProfilePropertyRuleOption,
  PluginConnectionScheduleOption,
  SourceOptionsMethod,
  SourceFilterMethod,
  ProfilePropertyPluginMethod,
  ProfilesPluginMethod,
  SourceRunPercentCompleteMethod,
} from "@grouparoo/app-templates/src/source/table";

import { getSampleRows } from "./getSampleRows";
import { getColumns } from "./getColumns";
import { getTables } from "./getTables";
import { getPropertyValue } from "./getPropertyValue";
import { getChangedRows } from "./getChangedRows";
import { getChangedRowCount } from "./getChangedRowCount";

// these are already correct
export { uniqueProfilePropertyRuleBootstrapOptions } from "@grouparoo/app-templates/src/source/table";

// these get generated from our data
export const sourcePreview: SourcePreviewMethod = getSourcePreview({
  getSampleRows,
});

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = getProfilePropertyRuleOptions(
  {
    getSampleRows,
  }
);

export const scheduleOptions: PluginConnectionScheduleOption[] = getScheduleOptions(
  { getSampleRows, getColumns }
);

export const sourceOptions: SourceOptionsMethod = getSourceOptions({
  getTables,
});

export const sourceFilters: SourceFilterMethod = getSourceFilters({
  getColumns,
});

export const profileProperty: ProfilePropertyPluginMethod = getProfileProperty({
  getPropertyValue,
});

export const profiles: ProfilesPluginMethod = getProfiles({
  getChangedRows,
});

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = getSourceRunPercentComplete(
  {
    getChangedRowCount,
  }
);
