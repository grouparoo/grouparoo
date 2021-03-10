import { GetChangedRowCountMethod } from "@grouparoo/app-templates/dist/source/table";
import { makeFindQuery } from "./util";

export const getChangedRowCount: GetChangedRowCountMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
}) => {
  let query = {};
  let aggPipeline = [];
  if (highWaterMarkCondition) {
    query = makeFindQuery(highWaterMarkCondition);
  }
  if (Object.keys(query).length > 0) {
    aggPipeline.push({
      $match: query,
    });
  }
  aggPipeline.push({
    $count: "__COUNT",
  });

  const rows = await connection.db
    .collection(tableName)
    .aggregate(aggPipeline)
    .toArray();

  console.log(rows);

  return parseInt(rows[0]["__COUNT"]);
};
