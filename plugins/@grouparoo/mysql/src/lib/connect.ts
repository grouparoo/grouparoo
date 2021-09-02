import { ConnectPluginAppMethod } from "@grouparoo/core";
import { log } from "actionhero";
import mysql from "mysql";

export interface QueryResultObject {
  [key: string]: any;
}

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const { host, port, database, user, password } = appOptions;

  const config = {
    host,
    port: port ? parseInt(port?.toString()) : null,
    database,
    user,
    password,
    timezone: "UTC", // Interpret all received timestamps as UTC. Otherwise local timezone is assumed.
    dateStrings: [
      "DATE", // DATE's are returned as strings (otherwise they would be interpreted as new Date)
    ],
  };
  // @ts-ignore datestrings supports array but it's not in the types
  const pool = mysql.createPool(config);

  const asyncQuery = function (
    query: string,
    replacementValues: { [key: string]: any } | Array<string | number> = []
  ): Promise<Array<QueryResultObject>> {
    log(`[ mysql ] ${query}`, "debug", replacementValues);
    return new Promise((resolve, reject) => {
      this.getConnection(function (acquireError, connection) {
        if (acquireError) return reject(acquireError);

        const q = connection.query(
          query,
          replacementValues,
          (error: Error, rows: Array<QueryResultObject>) => {
            connection.release();

            if (error) {
              return reject(
                new Error(`error with mysql query: "${q.sql}" - ${error}`)
              );
            }

            const cleanedRows = [];
            for (const i in rows) {
              cleanedRows.push(Object.assign({}, rows[i]));
            }

            return resolve(cleanedRows);
          }
        );
      });
    });
  };

  const asyncEnd = async function () {
    return new Promise((resolve, reject) => {
      pool.end((error) => {
        if (error) return reject(error);
        return resolve(null);
      });
    });
  };

  return Object.assign(pool, { asyncQuery, asyncEnd });
};
