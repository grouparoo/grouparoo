import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";

export const exportProfile: ExportProfilePluginMethod = async ({
  appOptions,
  export: {
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  return { success: false };
};

function formatVar(value) {
  if (value === undefined) {
    return null;
  }

  // Dates are stored as unix timestamps (int)
  if (value instanceof Date) {
    return Math.floor(value.getTime() / 1000);
  }

  return value;
}
