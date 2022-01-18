import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeFindQuery } from "./util";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  appOptions,
  tableName,
  matchConditions,
  highWaterMarkCondition,
  incremental,
}) => {
  let aggPipeline = [];

  if (incremental && highWaterMarkCondition) {
    const query = makeFindQuery(highWaterMarkCondition);
    if (Object.keys(query).length > 0) {
      aggPipeline.push({
        $match: query,
      });
    }
  }

  for (const condition of matchConditions) {
    const filterQuery = makeFindQuery(condition);
    if (Object.keys(filterQuery).length > 0) {
      aggPipeline.push({ $match: filterQuery });
    }
  }

  aggPipeline.push({
    $count: "__COUNT",
  });

  const rows = await connection
    .db(appOptions.database)
    .collection(tableName)
    .aggregate(aggPipeline)
    .toArray();
  if (rows.length > 0) {
    return parseInt(rows[0]["__COUNT"]);
  }
  return 0;
};
