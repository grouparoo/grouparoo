import { getSampleRows } from "./members";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  return getSampleRows({ appOptions, sourceOptions });
};
