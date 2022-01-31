import {
  plugin,
  SimpleAppOptions,
  SimpleScheduleOptions,
  RecordsPluginMethod,
  SimpleSourceOptions,
} from "@grouparoo/core";
import { DataResponseRow } from "../shared/types";

export interface GetRowsMethod<ConnectionType = any> {
  (argument: {
    connection: ConnectionType;
    appOptions: SimpleAppOptions;
    scheduleOptions: SimpleScheduleOptions;
    appId: string;
    limit: number;
    offset: number;
    sourceOptions?: SimpleSourceOptions;
    incremental: boolean;
  }): Promise<DataResponseRow[]>;
}

export const getRecordsMethod = (getRows: GetRowsMethod) => {
  const records: RecordsPluginMethod = async ({
    scheduleOptions,
    connection,
    run,
    appId,
    appOptions,
    properties,
    sourceOptions,
    schedule,
    sourceOffset,
    limit,
  }) => {
    const offset = parseInt(String(sourceOffset ?? 0));
    const rows = await getRows({
      appId,
      appOptions,
      sourceOptions,
      scheduleOptions,
      limit,
      offset,
      connection,
      incremental: schedule.incremental,
    });

    const property = properties.find(
      (p) => p.id === scheduleOptions.propertyId
    );

    if (!property) {
      throw new Error(`cannot find property ${scheduleOptions.propertyId}`);
    }

    if (rows.length > 0) {
      const queryCol = Object.keys(rows[0])[0];
      const propertyMapping = { [queryCol]: property.key };
      await plugin.createImports(propertyMapping, run, rows);
    }

    const nextOffset = rows.length > 0 ? offset + rows.length : 0;
    return {
      importsCount: rows.length,
      highWaterMark: { offset: nextOffset, limit },
      sourceOffset: nextOffset,
    };
  };

  return records;
};
