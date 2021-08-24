import Spreadsheet from "./spreadsheet";
import { plugin, RecordsPluginMethod } from "@grouparoo/core";

export const records: RecordsPluginMethod = async ({
  run,
  appOptions,
  source,
  sourceOptions,
  sourceMapping,
  sourceOffset,
  limit,
}) => {
  let combinedMapping = sourceMapping;
  const properties = await source.$get("properties");
  for (const rule of properties) {
    const ruleOptions = await rule.getOptions();
    const ruleMapping = {};
    if (ruleOptions.column) {
      ruleMapping[ruleOptions.column?.toString()] = rule.key;
      combinedMapping = Object.assign(combinedMapping, ruleMapping);
    }
  }

  const offset = sourceOffset ? parseInt(sourceOffset.toString()) : 0;
  const sheet = new Spreadsheet(
    appOptions,
    sourceOptions.sheet_url?.toString()
  );
  const rows = await sheet.read({ limit, offset });

  await plugin.createImports(combinedMapping, run, rows);

  return {
    importsCount: rows.length,
    highWaterMark: {},
    sourceOffset: offset + rows.length,
  };
};
