import {
  plugin,
  SimpleAppOptions,
  SimpleScheduleOptions,
} from "@grouparoo/core";
import { sourcePreviewKey } from "./sourcePreview";
import { DataResponseRow } from "../shared/types";

export interface GetChangedRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    scheduleOptions: SimpleScheduleOptions;
    appGuid: string;
    limit: number;
    offset: number;
  }): Promise<DataResponseRow[]>;
}

export const getProfilesMethod = (getChangedRows: GetChangedRowsMethod) => {
  return async ({
    sourceMapping,
    scheduleOptions,
    connection,
    highWaterMark,
    run,
    appGuid,
    appOptions,
  }) => {
    let offset = highWaterMark.offset
      ? parseInt(highWaterMark.offset.toString(), 10)
      : 0;
    const limit = highWaterMark.limit
      ? parseInt(highWaterMark.limit.toString(), 10)
      : 100;

    const rows = await getChangedRows({
      appGuid,
      appOptions,
      scheduleOptions,
      limit,
      offset,
      connection,
    });

    let processed = 0;
    for (const row of rows) {
      const queryCol = Object.keys(row)[0];
      const propertyMapping = { [queryCol]: sourceMapping[sourcePreviewKey] };

      await plugin.createImport(propertyMapping, run, row);
      processed++;
    }

    if (processed === 0) {
      offset = 0;
    }

    return {
      importsCount: rows.length,
      highWaterMark: { offset: offset + processed, limit },
      sourceOffset: null,
    };
  };
};
