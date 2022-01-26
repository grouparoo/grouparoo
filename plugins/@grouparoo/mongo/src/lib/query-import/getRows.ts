import { GetRowsMethod } from "@grouparoo/app-templates/dist/source/query";

export const getRows: GetRowsMethod = async ({
  scheduleOptions,
  limit,
  offset,
  connection,
  sourceOptions,
  appOptions,
}) => {
  if (!scheduleOptions?.query) {
    throw new Error("query required");
  }
  const query = JSON.parse(String(scheduleOptions?.query));
  let pipeline = [];
  if (Array.isArray(query)) {
    pipeline = query;
  } else {
    pipeline.push({ $match: query });
  }
  if (offset) {
    pipeline.push({ $skip: offset });
  }
  if (limit) {
    pipeline.push({ $limit: limit });
  }
  return connection
    .db(appOptions.database)
    .collection(sourceOptions.table)
    .aggregate(pipeline)
    .toArray();
};
