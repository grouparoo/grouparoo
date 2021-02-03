import path from "path";
import {
  File,
  SourceOptionsMethod,
  SourceOptionsMethodResponse,
} from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async () => {
  const response: SourceOptionsMethodResponse = {
    fileId: { type: "list", options: [], descriptions: [] },
  };
  const csvFiles = await File.findAll({ where: { type: ["csv", "CSV"] } });
  csvFiles.map((f) => {
    response.fileId.options.push(f.id);
    response.fileId.descriptions.push(path.basename(f.path));
  });

  return response;
};
