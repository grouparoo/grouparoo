import { ConnectPluginAppMethod } from "@grouparoo/core";
import { log } from "actionhero";
import mysql from "mysql";

export type QueryResultObject = Record<string, any>;

export type ColumnValue = string | number;

export interface MySQLConnection extends mysql.Pool {
  asyncQuery: (
    query: string,
    replacementValues?: Record<string, any> | (ColumnValue | ColumnValue[])[]
  ) => Promise<QueryResultObject[]>;
  asyncEnd: () => Promise<void>;
}

export const connect: ConnectPluginAppMethod<MySQLConnection> = async ({
  appOptions,
}) => {
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

  const asyncQuery: MySQLConnection["asyncQuery"] = function (
    query,
    replacementValues = []
  ) {
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

  const asyncEnd: MySQLConnection["asyncEnd"] = async function () {
    return new Promise((resolve, reject) => {
      pool.end((error) => {
        if (error) return reject(error);
        return resolve(null);
      });
    });
  };

  const getMajorVersion = async function () {
    return new Promise((resolve, reject) => {
      if (pool["cachedMajorVersion"]) {
        resolve(pool["cachedMajorVersion"]);
      } else {
        this.asyncQuery("SELECT VERSION() AS version")
          .then((rows) => {
            const row = rows[0];
            if (row && row.version) {
              // just the major version number
              const version = parseInt(row.version);
              pool["cachedMajorVersion"] = version;
              resolve(version);
            } else {
              resolve(0);
            }
          })
          .catch((err) => {
            resolve(0);
          });
      }
    });
  };

  return Object.assign(pool, { asyncQuery, asyncEnd, getMajorVersion });
};
