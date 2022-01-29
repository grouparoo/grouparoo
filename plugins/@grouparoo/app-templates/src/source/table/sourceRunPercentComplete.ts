import { SourceRunPercentCompleteMethod } from "@grouparoo/core";
import { getFilterOperation } from "./getFilterOperation";
import { GetRowCountMethod, MatchCondition } from "./pluginMethods";
import { getChangeVariables } from "./records";

export interface GetSourceRunPercentCompleteMethod {
  (argument: {
    getRowCount: GetRowCountMethod;
  }): SourceRunPercentCompleteMethod;
}

export const getSourceRunPercentComplete: GetSourceRunPercentCompleteMethod = ({
  getRowCount,
}) => {
  const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
    connection,
    appOptions,
    appId,
    source,
    schedule,
    highWaterMark,
    run,
    scheduleFilters,
  }) => {
    const { tableName, highWaterMarkCondition } = await getChangeVariables({
      run,
      source,
      highWaterMark,
    });

    const matchConditions: MatchCondition[] = [];

    for (const filter of scheduleFilters) {
      let { key, op, match } = filter;
      matchConditions.push({
        columnName: key,
        value: match,
        filterOperation: getFilterOperation(op),
      });
    }

    const count = await getRowCount({
      connection,
      appOptions,
      appId,
      tableName,
      matchConditions,
      highWaterMarkCondition,
      incremental: schedule.incremental,
    });

    const percentComplete =
      count > 0 ? Math.floor((run.importsCreated / count) * 100) : 100;

    return percentComplete;
  };

  return sourceRunPercentComplete;
};
