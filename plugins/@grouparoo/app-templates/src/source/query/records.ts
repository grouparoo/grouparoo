import {
  plugin,
  SimpleAppOptions,
  SimpleScheduleOptions,
  RecordsPluginMethod,
  SimpleSourceOptions,
} from "@grouparoo/core";
import { config } from "actionhero";
import { DataResponseRow } from "../shared/types";

export interface GetChangedRowsMethod<ConnectionType = any> {
  (argument: {
    connection: ConnectionType;
    appOptions: SimpleAppOptions;
    scheduleOptions: SimpleScheduleOptions;
    appId: string;
    limit: number;
    offset: number;
    sourceOptions?: SimpleSourceOptions;
  }): Promise<DataResponseRow[]>;
}

export const getRecordsMethod = (getChangedRows: GetChangedRowsMethod) => {
  const records: RecordsPluginMethod = async ({
    scheduleOptions,
    connection,
    highWaterMark,
    run,
    appId,
    appOptions,
    properties,
    sourceOptions,
  }) => {
    let offset = highWaterMark.offset
      ? parseInt(highWaterMark.offset.toString())
      : 0;
    const limit = highWaterMark.limit
      ? parseInt(highWaterMark.limit.toString())
      : config.batchSize.imports;

    const rows = await getChangedRows({
      appId,
      appOptions,
      sourceOptions,
      scheduleOptions,
      limit,
      offset,
      connection,
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
    } else {
      offset = 0;
    }

    return {
      importsCount: rows.length,
      highWaterMark: { offset: offset + rows.length, limit },
      sourceOffset: null,
    };
  };

  return records;
};
