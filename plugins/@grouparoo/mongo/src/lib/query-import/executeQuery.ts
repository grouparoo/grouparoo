import { ExecuteQueryMethod } from "@grouparoo/app-templates/dist/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
  sourceOptions,
}) => {
  if (!query) {
    throw new Error("query required");
  }
  const jsonQuery = JSON.parse(query);
  let pipeline = [];
  if (Array.isArray(jsonQuery)) {
    pipeline = jsonQuery;
  } else {
    pipeline.push({ $match: jsonQuery });
  }
  return connection.db
    .collection(sourceOptions.table)
    .aggregate(pipeline)
    .toArray();
};
