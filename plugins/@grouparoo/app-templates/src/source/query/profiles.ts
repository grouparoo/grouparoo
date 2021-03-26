import {
  plugin,
  SimpleAppOptions,
  SimpleScheduleOptions,
  ProfilesPluginMethod,
  SimpleSourceOptions,
} from "@grouparoo/core";
import { DataResponseRow } from "../shared/types";

export interface GetChangedRowsMethod {
  (argument: {
    connection: any;
    appOptions: SimpleAppOptions;
    scheduleOptions: SimpleScheduleOptions;
    appId: string;
    limit: number;
    offset: number;
    sourceOptions?: SimpleSourceOptions;
  }): Promise<DataResponseRow[]>;
}

export const getProfilesMethod = (getChangedRows: GetChangedRowsMethod) => {
  const profiles: ProfilesPluginMethod = async ({
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
      : parseInt(
          (await plugin.readSetting("core", "runs-profile-batch-size")).value
        );

    const rows = await getChangedRows({
      appId,
      appOptions,
      sourceOptions,
      scheduleOptions,
      limit,
      offset,
      connection,
    });

    let processed = 0;
    for (const row of rows) {
      const queryCol = Object.keys(row)[0];
      const property = properties.find(
        (p) => p.id === scheduleOptions.propertyId
      );

      if (!property) {
        throw new Error(`cannot find property ${scheduleOptions.propertyId}`);
      }

      const propertyMapping = { [queryCol]: property.key };

      await plugin.createImport(propertyMapping, run, row);
      processed++;
    }

    if (processed === 0) offset = 0;

    return {
      importsCount: rows.length,
      highWaterMark: { offset: offset + processed, limit },
      sourceOffset: null,
    };
  };

  return profiles;
};
