import {
  columnNameKey,
  tableNameKey,
  FilterOperation,
  MatchCondition,
  GetChangedRowsMethod,
} from "./pluginMethods";

import {
  ProfilesPluginMethod,
  plugin,
  Run,
  Source,
  HighWaterMark,
} from "@grouparoo/core";

export interface GetProfilesMethod {
  (argument: { getChangedRows: GetChangedRowsMethod }): ProfilesPluginMethod;
}

export const getProfiles: GetProfilesMethod = ({ getChangedRows }) => {
  const profiles: ProfilesPluginMethod = async ({
    connection,
    appOptions,
    appId,
    run,
    sourceMapping,
    scheduleOptions,
    source,
    limit,
    highWaterMark,
    sourceOffset,
  }) => {
    const { tableName, highWaterMarkCondition } = await getChangeVariables({
      run,
      source,
      highWaterMark,
    });
    sourceOffset = parseInt(sourceOffset.toString()); // we use integers
    const highWaterMarkAndSortColumnASC =
      scheduleOptions[columnNameKey]?.toString();
    const secondarySortColumnASC = Object.keys(sourceMapping)[0];
    const highWaterMarkKey = "__hwm";

    const results = await getChangedRows({
      connection,
      appOptions,
      appId,
      tableName,
      highWaterMarkAndSortColumnASC,
      secondarySortColumnASC,
      limit,
      sourceOffset,
      highWaterMarkKey,
      highWaterMarkCondition,
    });

    let nextSourceOffset = 0;
    let nextHighWaterMark = highWaterMark;
    const lastRow = results[results.length - 1];

    if (lastRow) {
      if (!lastRow.hasOwnProperty(highWaterMarkKey)) {
        throw new Error(
          `Result should have highWaterMark column: ${highWaterMarkKey}`
        );
      }

      const currentValue = highWaterMark[highWaterMarkAndSortColumnASC];
      const newValue = lastRow[highWaterMarkKey].toString();

      if (currentValue && newValue === currentValue) {
        nextSourceOffset = sourceOffset + limit;
      } else {
        nextHighWaterMark[highWaterMarkAndSortColumnASC] = newValue;
      }
    }

    await plugin.createImports(sourceMapping, run, results);

    return {
      importsCount: results.length,
      highWaterMark: nextHighWaterMark,
      sourceOffset: nextSourceOffset,
    };
  };

  return profiles;
};

export interface ChangeVariablesMin {
  tableName: string;
  highWaterMarkCondition: MatchCondition;
}
export interface Get {
  (argument: { getChangedRows: GetChangedRowsMethod }): ProfilesPluginMethod;
}
export interface GetChangeVariablesMethod {
  (argument: {
    run: Run;
    source: Source;
    highWaterMark: HighWaterMark;
  }): Promise<ChangeVariablesMin>;
}

export const getChangeVariables: GetChangeVariablesMethod = async ({
  run,
  source,
  highWaterMark,
}) => {
  const runOptions = await source.parameterizedOptions(run);
  const tableName = runOptions[tableNameKey]?.toString();

  const hasHighWaterMark = Object.keys(highWaterMark).length === 1;
  let highWaterMarkCondition: MatchCondition = null;

  if (hasHighWaterMark) {
    const filterCol = Object.keys(highWaterMark)[0];
    const filterVal = Object.values(highWaterMark)[0];
    highWaterMarkCondition = {
      columnName: filterCol,
      value: filterVal,
      filterOperation: FilterOperation.GreaterThanOrEqual,
    };
  }
  return { tableName, highWaterMarkCondition };
};
