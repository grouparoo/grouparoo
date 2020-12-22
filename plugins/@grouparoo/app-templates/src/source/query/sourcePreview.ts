import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreviewKey = "Response of Schedule Query";

export const sourcePreview: SourcePreviewMethod = async () => {
  return [{ [sourcePreviewKey]: "N/A" }];
};
