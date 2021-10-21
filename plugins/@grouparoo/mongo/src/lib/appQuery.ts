import { validateQuery } from "./query-import/validateQuery";
import { AppQueryMethod } from "@grouparoo/core";

export const appQuery: AppQueryMethod = async ({
  appOptions,
  connection,
  refreshQuery,
}) => {
  const jsonQuery = JSON.parse(refreshQuery);
  try {
    validateQuery(jsonQuery);
  } catch {}

  let pipeline = [];

  if (Array.isArray(jsonQuery)) {
    pipeline = jsonQuery;
  } else {
    pipeline.push({ $match: jsonQuery });
  }

  const result = await connection
    .db(appOptions.database)
    .aggregate(pipeline)
    .toArray();

  for (const entry of result) {
    if (Object.keys(entry).length > 1 && entry.hasOwnProperty("_id")) {
      delete entry["_id"];
    }
  }

  return result.length > 0 ? result[0] : [];
};
