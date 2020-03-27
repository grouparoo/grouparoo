import path from "path";
import { App, plugin, SimpleAppOptions } from "@grouparoo/core";

export async function sourceOptions(app: App, appOptions: SimpleAppOptions) {
  const response = {
    fileGuid: { type: "list", options: [], descriptions: [] },
  };
  const { File } = plugin.models();
  const csvFiles = await File.findAll({ where: { type: ["csv", "CSV"] } });
  csvFiles.map((f) => {
    response.fileGuid.options.push(f.guid);
    response.fileGuid.descriptions.push(path.basename(f.path));
  });

  return response;
}
