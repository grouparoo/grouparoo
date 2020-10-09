import {
  GetSampleRowsMethod,
  GetColumnDefinitionsMethod,
  tableNameKey,
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
    sourceOptions,
  }) => {
    const tableName = sourceOptions[tableNameKey];
    return getExampleRows({
      connection,
      appOptions,
      tableName,
      getSampleRows,
      getColumns,
    });
  };

  return sourcePreview;
};
