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
