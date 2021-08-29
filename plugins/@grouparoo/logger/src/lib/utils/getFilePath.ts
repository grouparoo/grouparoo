import { getParentPath } from "@grouparoo/core/dist/modules/pluginDetails";
import path from "path";

export function getFilePath(filename: string) {
  let filePath: string;
  if (path.isAbsolute(filename)) {
    filePath = filename;
  } else {
    filePath = path.join(getParentPath(), filename);
  }

  return filePath;
}
