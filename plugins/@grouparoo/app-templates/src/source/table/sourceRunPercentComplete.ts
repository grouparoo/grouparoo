import { SourceRunPercentCompleteMethod } from "@grouparoo/core";
import { GetChangedRowCountMethod } from "./pluginMethods";
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
    source,
    highWaterMark,
    run,
  }) => {
    const { tableName, highWaterMarkCondition } = await getChangeVariables({
      run,
      source,
      highWaterMark,
    });

    const count = await getChangedRowCount({
      connection,
      appOptions,
      tableName,
      highWaterMarkCondition,
    });

    const percentComplete =
      count > 0 ? Math.floor((run.profilesImported / count) * 100) : 100;

    return percentComplete;
  };

  return sourceRunPercentComplete;
};
