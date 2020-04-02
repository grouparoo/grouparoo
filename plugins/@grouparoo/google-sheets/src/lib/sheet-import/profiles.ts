import Spreadsheet from "./spreadsheet";
import {
  plugin,
  Schedule,
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  SourceMapping,
  Run,
} from "@grouparoo/core";

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1);
  });
}

export async function profiles(
  schedule: Schedule,
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions,
  sourceMapping: SourceMapping,
  run: Run,
  limit: number,
  filter: { [key: string]: any },
  highWaterMark: number
) {
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

  const offset = highWaterMark || 0;
  let importsCount = 0;
  const sheet = new Spreadsheet(appOptions, sourceOptions.sheet_url);
  const rows = await sheet.read({ limit, offset });

  for (const row of rows) {
    await plugin.createImport(combinedMapping, run, row);
    importsCount++;
  }

  const nextHighWaterMark = limit + offset;
  return { importsCount, nextHighWaterMark };
}
