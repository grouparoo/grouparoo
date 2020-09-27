import { GetSampleRowsMethod, tableNameKey } from "./pluginMethods";
import { SourcePreviewMethod } from "@grouparoo/core";

export interface GetSourcePreviewMethod {
  (argument: { getSampleRows: GetSampleRowsMethod }): SourcePreviewMethod;
}

export const getSourcePreview: GetSourcePreviewMethod = ({ getSampleRows }) => {
  const sourcePreview: SourcePreviewMethod = async ({
    connection,
    sourceOptions,
  }) => {
    const tableName = sourceOptions[tableNameKey];
    return getSampleRows({ connection, tableName });
  };

  return sourcePreview;
};
