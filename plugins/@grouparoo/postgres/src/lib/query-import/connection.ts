import { buildConnection } from "@grouparoo/app-templates/dist/source/query";
import { executeQuery } from "./executeQuery";
import { ProfilePropertyPluginMethodResponse, plugin } from "@grouparoo/core";
import { validateQuery } from "../validateQuery";
import format from "pg-format";
// import { getChangedRows } from "./getChangedRows";
// import { getChangedRowCount } from "./getChangedRowCount";

const key = "Response of Schedule Query";

export function getConnection() {
  const QueryModeConnection = buildConnection({
    app: "postgres",
    name: "postgres-query-import",
    description: "Import or update Profiles via a custom Postgres query.",
    executeQuery,
    // getChangedRows,
    // getChangedRowCount,
  });

  console.log(QueryModeConnection);

  // TODO:
  QueryModeConnection.scheduleOptions = [
    {
      key: "query",
      required: true,
      description: "what query should I run?",
      type: "textarea",
      options: async () => {
        return [];
      },
    },
  ];

  QueryModeConnection.methods.profiles = async ({
    scheduleOptions,
    sourceMapping,
    connection,
    highWaterMark,
    run,
  }) => {
    const offset = highWaterMark.offset
      ? parseInt(highWaterMark.offset.toString(), 10)
      : 0;
    const limit = highWaterMark.limit
      ? parseInt(highWaterMark.limit.toString(), 10)
      : 100;

    const queryWithLimitAndOffset = format(
      `${scheduleOptions.query} LIMIT %L OFFSET %L`,
      limit,
      offset
    );

    validateQuery(scheduleOptions.query);
    const { rows } = await connection.query(queryWithLimitAndOffset); // [{id: 1}]

    for (const row of rows) {
      const queryCol = Object.keys(row)[0];
      const propertyMapping = { [queryCol]: sourceMapping[key] };

      await plugin.createImport(propertyMapping, run, row);
    }

    return {
      importsCount: rows.length,
      highWaterMark: { offset: offset + limit, limit },
      sourceOffset: null,
    };
  };

  QueryModeConnection.methods.sourcePreview = async () => {
    return [{ [key]: "N/A" }];
  };

  return QueryModeConnection;
}
