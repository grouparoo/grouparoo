import {
  plugin,
  SimpleAppOptions,
  SimpleScheduleOptions,
  ProfilesPluginMethod,
} from "@grouparoo/core";
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
  const profiles: ProfilesPluginMethod = async ({
    scheduleOptions,
    connection,
    highWaterMark,
    run,
    appGuid,
    appOptions,
    properties,
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
      const property = properties.find(
        (p) => p.guid === scheduleOptions.propertyGuid
      );

      if (!property) {
        throw new Error(`cannot find property ${scheduleOptions.propertyGuid}`);
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
