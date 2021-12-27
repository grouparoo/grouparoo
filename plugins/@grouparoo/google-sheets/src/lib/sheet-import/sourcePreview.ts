import {
  SourcePreviewMethod,
  SimpleSourceOptions,
  SimpleAppOptions,
} from "@grouparoo/core";
import { previewCSV } from "@grouparoo/csv/dist/lib/shared/previewCSV";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
  sourceId,
}: {
  appOptions: SimpleAppOptions;
  sourceOptions: SimpleSourceOptions;
  sourceId: string;
}) => {
  return remoteImportPreview(sourceId, appOptions, sourceOptions);
};

export async function remoteImportPreview(
  sourceId: string,
  appOptions: SimpleAppOptions,
  sourceOptions: SimpleSourceOptions
) {
  if (!sourceOptions.sheet_url) return [];

  const localPath = await downloadAndRefreshFile(
    sourceId,
    appOptions,
    sourceOptions
  );
  return previewCSV(localPath);
}
