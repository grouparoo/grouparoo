import { ExportRecordsPluginMethod } from "@grouparoo/core";
import fs from "fs";
import { getFilePath } from "../utils/getFilePath";
import { log } from "actionhero";

export const exportRecords: ExportRecordsPluginMethod = async ({
  appOptions,
  exports,
}) => {
  const filePath = getFilePath(appOptions.filename?.toString());
  let lines = [];

  exports.map((_export) => {
    const {
      recordId,
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      toDelete,
    } = _export;

    const line = JSON.stringify({
      time: new Date(),
      id: recordId,
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      toDelete,
    });

    lines.push(line);
  });

  if (appOptions.stdout?.toString() === "true") {
    log(
      `exporting ${lines.length} records:\r\n` +
        lines.map((line) => ` ----> ${line}`).join("\r\n"),
      "notice"
    );
  }

  await new Promise((resolve, reject) => {
    fs.appendFile(filePath, lines.join("\r\n"), (error) => {
      if (error) return reject(error);
      return resolve(null);
    });
  });

  return { success: true };
};
