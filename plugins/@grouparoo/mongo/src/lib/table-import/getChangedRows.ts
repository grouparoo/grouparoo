import { makeFindQuery, castRow } from "./util";
import {
  GetChangedRowsMethod,
  DataResponseRow,
} from "@grouparoo/app-templates/dist/source/table";

export const getChangedRows: GetChangedRowsMethod = async ({
  connection,
  tableName,
  highWaterMarkCondition,
  limit,
  sourceOffset,
  highWaterMarkAndSortColumnASC,
  secondarySortColumnASC,
  matchConditions,
  highWaterMarkKey,
}) => {
  let aggPipeline = [];

  if (highWaterMarkCondition) {
    highWaterMarkCondition.value = new Date(
      String(highWaterMarkCondition.value)
    );
    const query = makeFindQuery(highWaterMarkCondition);
    if (Object.keys(query).length > 0) {
      aggPipeline.push({ $match: query });
    }
  }

  for (const condition of matchConditions) {
    const filterQuery = makeFindQuery(condition);
    if (Object.keys(filterQuery).length > 0) {
      aggPipeline.push({ $match: filterQuery });
    }
  }

  aggPipeline.push({
    $sort: {
      [highWaterMarkAndSortColumnASC]: 1,
      [secondarySortColumnASC]: 1,
    },
  });
  aggPipeline.push({
    $addFields: {
      [highWaterMarkKey]: `$${highWaterMarkAndSortColumnASC}`,
    },
  });
  aggPipeline.push({ $limit: limit });
  aggPipeline.push({ $skip: sourceOffset });

  const rows = await connection.db
    .collection(tableName)
    .aggregate(aggPipeline)
    .toArray();

  const results: DataResponseRow[] = rows.map((row) => castRow(row));
  return results;
};
