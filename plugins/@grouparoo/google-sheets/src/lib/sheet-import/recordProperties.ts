import { RecordPropertiesPluginMethod } from "@grouparoo/core";
import { parseProfileProperties } from "@grouparoo/csv/dist/lib/shared/parseProfileProperties";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";

export const recordProperties: RecordPropertiesPluginMethod = async ({
  records,
  propertyOptions,
  sourceMapping,
  sourceId,
  appOptions,
  sourceOptions,
}) => {
  const columnNameHash: { [columnName: string]: string } = {};
  for (const propertyId in propertyOptions) {
    const column = propertyOptions[propertyId].column;
    if (column) columnNameHash[column.toString()] = propertyId;
  }
  if (Object.keys(columnNameHash).length === 0) return;

  const localPath = await downloadAndRefreshFile(
    sourceId,
    appOptions,
    sourceOptions
  );
  const mappedCSVColumn: string = Object.keys(sourceMapping)[0];
  const tableMappingCol: string = Object.values(sourceMapping)[0];
  const primaryKeysHash: { [pk: string]: string } = {};

  for (const i in records) {
    const properties = await records[i].getProperties();
    if (
      properties[tableMappingCol]?.values.length > 0 &&
      properties[tableMappingCol].values[0] // not null or undefined
    ) {
      primaryKeysHash[properties[tableMappingCol].values[0].toString()] =
        records[i].id;
    }
  }

  return parseProfileProperties({
    localPath,
    columnNameHash,
    mappedCSVColumn,
    primaryKeysHash,
  });
};
