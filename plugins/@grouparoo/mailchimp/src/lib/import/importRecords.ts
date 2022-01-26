import { plugin, RecordsPluginMethod } from "@grouparoo/core";
import { getChangedMembers } from "./members";

export const importRecords: RecordsPluginMethod = async ({
  run,
  appOptions,
  source,
  sourceOptions,
  highWaterMark,
  sourceMapping,
  sourceOffset,
  limit,
}) => {
  let combinedMapping = sourceMapping;
  const properties = await source.$get("properties");
  for (const rule of properties) {
    const ruleOptions = await rule.getOptions();
    const ruleMapping = {};
    if (ruleOptions.field) {
      ruleMapping[ruleOptions.field?.toString()] = rule.key;
      combinedMapping = Object.assign(combinedMapping, ruleMapping);
    }
  }

  const offset = sourceOffset ? parseInt(sourceOffset.toString()) : 0;
  // TODO: how to handle this? what's the parent doing?
  if (limit > 1000) {
    // max per documentation: https://mailchimp.com/developer/api/marketing/list-members/list-members-info/
    limit = 1000;
  }
  const since_last_changed = highWaterMark["last_changed"];
  let nextSourceOffset = 0;
  let nextHighWaterMark = highWaterMark;
  const fieldKeys = Object.keys(combinedMapping);

  const members = await getChangedMembers({
    appOptions,
    sourceOptions,
    sourceOffset,
    limit,
    since_last_changed,
    fieldKeys,
  });

  const lastRow = members[members.length - 1];
  const rows = [];

  for (const member of members) rows.push(member.getAll(fieldKeys));
  await plugin.createImports(combinedMapping, run, rows);

  if (lastRow) {
    const last_changed = lastRow.get("last_changed");
    if (!last_changed) {
      throw new Error(`Result should have last_changed value`);
    }

    const currentValue = highWaterMark["last_changed"];
    const newValue = last_changed.toString();

    if (currentValue && newValue === currentValue) {
      nextSourceOffset = offset + rows.length;
    } else {
      nextHighWaterMark["last_changed"] = newValue;
    }
  }

  return {
    importsCount: rows.length,
    highWaterMark: nextHighWaterMark,
    sourceOffset: nextSourceOffset,
  };
};
