import path from "path";
import { File, SourceOptionsMethod } from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async () => {
  const response = {
    fileGuid: { type: "list", options: [], descriptions: [] },
  };
  const csvFiles = await File.findAll({ where: { type: ["csv", "CSV"] } });
  csvFiles.map((f) => {
    response.fileGuid.options.push(f.guid);
    response.fileGuid.descriptions.push(path.basename(f.path));
  });

  return response;
};
