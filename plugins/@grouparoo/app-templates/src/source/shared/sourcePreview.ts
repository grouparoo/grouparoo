import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  tableNameKey,
  sourceQueryKey,
} from "./pluginMethods";
import { SourcePreviewMethod } from "@grouparoo/core";
import { getExampleRows } from "./getExamples";

export interface GetSourcePreviewMethod {
  (argument: {
    getSampleRows: GetSampleRowsMethod;
    getColumns: GetColumnDefinitionsMethod;
  }): SourcePreviewMethod;
}

export const getSourcePreview: GetSourcePreviewMethod = ({
  getSampleRows,
  getColumns,
}) => {
  const sourcePreview: SourcePreviewMethod = async ({
    connection,
    appOptions,
    appId,
    sourceOptions,
  }) => {
    const sourceQuery = sourceOptions[sourceQueryKey]?.toString();
    const tableName = sourceOptions[tableNameKey]?.toString();
    return getExampleRows({
      connection,
      appOptions,
      sourceOptions,
      appId,
      tableName,
      sourceQuery,
      getSampleRows,
      getColumns,
    });
  };

  return sourcePreview;
};
