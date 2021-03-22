import {
  plugin,
  SimpleSourceOptions,
  SourcePreviewMethod,
  SourcePreviewMethodResponseRow,
} from "@grouparoo/core";
import { previewCSV } from "../shared/previewCSV";

export const sourcePreview: SourcePreviewMethod = async ({ sourceOptions }) => {
  return fileImportPreview(sourceOptions);
};

export async function fileImportPreview(
  sourceOptions: SimpleSourceOptions
): Promise<Array<SourcePreviewMethodResponseRow>> {
  if (!sourceOptions.fileId) return [];

  const localPath = await plugin.getLocalFilePath(
    sourceOptions.fileId.toString()
  );
  return previewCSV(localPath);
}
