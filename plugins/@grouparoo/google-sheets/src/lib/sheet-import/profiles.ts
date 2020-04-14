import Spreadsheet from "./spreadsheet";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";

export const profiles: ProfilesPluginMethod = async ({
  run,
  appOptions,
  source,
  sourceOptions,
  sourceMapping,
  highWaterMark,
  limit,
}) => {
  let combinedMapping = sourceMapping;
  const profilePropertyRules = await source.$get("profilePropertyRules");
  for (const rule of profilePropertyRules) {
    const ruleOptions = await rule.getOptions();
    const ruleMapping = {};
    if (ruleOptions.column) {
      ruleMapping[ruleOptions.column] = rule.key;
      combinedMapping = Object.assign(combinedMapping, ruleMapping);
    }
  }

  const offset = highWaterMark ? parseInt(highWaterMark.toString()) : 0;
  let importsCount = 0;
  const sheet = new Spreadsheet(appOptions, sourceOptions.sheet_url);
  const rows = await sheet.read({ limit, offset });

  for (const row of rows) {
    await plugin.createImport(combinedMapping, run, row);
    importsCount++;
  }

  const nextHighWaterMark = limit + offset;
  return { importsCount, nextHighWaterMark };
};
