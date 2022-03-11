import {
  columnNameKey,
  tableNameKey,
  sourceQueryKey,
  MatchCondition,
  GetRowsMethod,
} from "./pluginMethods";
import { getFilterOperation } from "./getFilterOperation";
import {
  RecordsPluginMethod,
  FilterOperation,
  plugin,
  Run,
  Source,
  HighWaterMark,
} from "@grouparoo/core";

export interface GetRecordsMethod {
  (argument: { getRows: GetRowsMethod }): RecordsPluginMethod;
}

export const getRecords: GetRecordsMethod = ({ getRows }) => {
  const records: RecordsPluginMethod = async ({
    connection,
    appOptions,
    appId,
    run,
    sourceMapping,
    sourceOptions,
    scheduleOptions,
    source,
    limit,
    highWaterMark,
    sourceOffset,
    scheduleFilters,
    schedule,
  }) => {
    const { highWaterMarkCondition } = await getChangeVariables({
      run,
      source,
      highWaterMark,
    });
    sourceOffset = parseInt(sourceOffset.toString()); // we use integers
    const highWaterMarkAndSortColumnASC =
      scheduleOptions[columnNameKey]?.toString();
    const secondarySortColumnASC = Object.keys(sourceMapping)[0];
    const highWaterMarkKey = "__hwm";

    const matchConditions: MatchCondition[] = [];

    for (const filter of scheduleFilters) {
      let { key, op, match } = filter;
      matchConditions.push({
        columnName: key,
        value: match,
        filterOperation: getFilterOperation(op),
      });
    }

    const tableName = sourceOptions[tableNameKey]?.toString();
    const sourceQuery = sourceOptions[sourceQueryKey]?.toString();

    const results = await getRows({
      connection,
      appOptions,
      appId,
      tableName,
      sourceQuery,
      highWaterMarkAndSortColumnASC,
      secondarySortColumnASC,
      limit,
      sourceOffset,
      highWaterMarkKey,
      highWaterMarkCondition,
      matchConditions,
      incremental: schedule.incremental,
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

      if (!schedule.incremental) {
        nextSourceOffset = sourceOffset + limit;
      } else if (currentValue && newValue === currentValue) {
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

  return records;
};

export interface ChangeVariablesMin {
  highWaterMarkCondition: MatchCondition;
}
export interface Get {
  (argument: { getRows: GetRowsMethod }): RecordsPluginMethod;
}
export interface GetChangeVariablesMethod {
  (argument: {
    run: Run;
    source: Source;
    highWaterMark: HighWaterMark;
  }): Promise<ChangeVariablesMin>;
}

export const getChangeVariables: GetChangeVariablesMethod = async ({
  highWaterMark,
}) => {
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
  return { highWaterMarkCondition };
};
