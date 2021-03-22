import { ProfilePropertiesPluginMethod, plugin } from "@grouparoo/core";
import { parseProfileProperties } from "../shared/parseProfileProperties";

export const profileProperties: ProfilePropertiesPluginMethod = async ({
  profiles,
  propertyOptions,
  sourceMapping,
  sourceOptions,
}) => {
  const columnName = propertyOptions["column"]?.toString();
  if (!columnName) return;

  const fileId = sourceOptions.fileId?.toString();
  const localPath = await plugin.getLocalFilePath(fileId);
  const mappedCSVColumn: string = Object.keys(sourceMapping)[0];
  const tableMappingCol: string = Object.values(sourceMapping)[0];
  const primaryKeysHash: { [pk: string]: string } = {};

  for (const i in profiles) {
    const properties = await profiles[i].properties();
    if (
      properties[tableMappingCol]?.values.length > 0 &&
      properties[tableMappingCol].values[0] // not null or undefined
    ) {
      primaryKeysHash[properties[tableMappingCol].values[0].toString()] =
        profiles[i].id;
    }
  }

  return parseProfileProperties({
    localPath,
    columnName,
    mappedCSVColumn,
    primaryKeysHash,
  });
};
