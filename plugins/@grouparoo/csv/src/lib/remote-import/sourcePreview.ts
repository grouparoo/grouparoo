import { SourcePreviewMethod, SimpleSourceOptions } from "@grouparoo/core";
import { previewCSV } from "../shared/previewCSV";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";

export const sourcePreview: SourcePreviewMethod = async ({
  sourceOptions,
  sourceId,
}: {
  sourceOptions: SimpleSourceOptions;
  sourceId: string;
}) => {
  return remoteImportPreview(sourceId, sourceOptions);
};

export async function remoteImportPreview(
  sourceId: string,
  sourceOptions: SimpleSourceOptions
) {
  if (!sourceOptions.url) return [];
  if (!sourceOptions.fileAgeHours) return [];

  const localPath = await downloadAndRefreshFile(sourceId, sourceOptions);

  return previewCSV(localPath);
}
