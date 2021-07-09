import { SourceRunPercentCompleteMethod } from "@grouparoo/core";
import { getFilterOperation } from "./getFilterOperation";
import { GetChangedRowCountMethod, MatchCondition } from "./pluginMethods";
import { getChangeVariables } from "./profiles";

export interface GetSourceRunPercentCompleteMethod {
  (argument: {
    getChangedRowCount: GetChangedRowCountMethod;
  }): SourceRunPercentCompleteMethod;
}

export const getSourceRunPercentComplete: GetSourceRunPercentCompleteMethod = ({
  getChangedRowCount,
}) => {
  const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
    connection,
    appOptions,
    appId,
    source,
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

    const count = await getChangedRowCount({
      connection,
      appOptions,
      appId,
      tableName,
      matchConditions,
      highWaterMarkCondition,
    });

    const percentComplete =
      count > 0 ? Math.floor((run.importsCreated / count) * 100) : 100;

    return percentComplete;
  };

  return sourceRunPercentComplete;
};
