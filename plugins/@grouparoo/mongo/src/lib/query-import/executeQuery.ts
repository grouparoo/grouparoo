import { ExecuteQueryMethod } from "@grouparoo/app-templates/dist/source/query";

export const executeQuery: ExecuteQueryMethod = async ({
  connection,
  query,
  sourceOptions,
  appOptions,
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
  const result = await connection
    .db(appOptions.database)
    .collection(sourceOptions.table)
    .aggregate(pipeline)
    .toArray();
  for (const entry of result) {
    if (Object.keys(entry).length > 1 && entry.hasOwnProperty("_id")) {
      delete entry["_id"];
    }
  }
  return result;
};
