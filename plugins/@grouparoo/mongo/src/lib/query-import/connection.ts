import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { getRows } from "./getRows";
import { getTables } from "../table-import/getTables";
import { validateQuery } from "./validateQuery";

export function getConnection() {
  return buildConnection({
    apps: ["mongo"],
    name: "mongo-import-query",
    displayName: "MongoDB Query Import",
    description:
      'Import or update records via a custom MongoDB query. Regular find queries or the entire aggregate pipelines are accepted. e.g.: {"name": "Michael"} or [{ "$match": { "name": "Michael" }}...]',
    options: [
      {
        key: "table",
        displayName: "Collection",
        required: true,
        description: "The collection to run the queries on",
      },
    ],
    executeQuery,
    getRows,
    validateQuery,
    getTables,
  });
}
