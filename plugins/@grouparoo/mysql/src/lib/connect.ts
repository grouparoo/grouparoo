import mysql from "mysql";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export interface QueryResultObject {
  [key: string]: any;
}

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const { host, port, database, user, password } = appOptions;

  const config = {
    host,
    port: port ? parseInt(port) : null,
    database,
    user,
    password,
    timezone: "UTC", // Interpret all received timestamps as UTC. Otherwise local timezone is assumed.
    dateStrings: [
      "DATE", // DATE's are returned as strings (otherwise they would be interpreted as new Date)
    ],
  };
  // @ts-ignore datestrings supports array but it's not in the types
  const client = mysql.createConnection(config);

  const asyncQuery = function (
    query: string,
    replacementValues: { [key: string]: any } | Array<string | number> = []
  ): Promise<Array<QueryResultObject>> {
    return new Promise((resolve, reject) => {
      const q = this.query(
        query,
        replacementValues,
        (error: Error, rows: Array<QueryResultObject>) => {
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
  };

  const asyncEnd = async function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        client.end((error) => {
          if (error) return reject(error);
          return resolve();
        });
      }, 1000);
    });
  };

  // connect
  await new Promise((resolve, reject) => {
    client.connect((error) => {
      if (error) return reject(error);
      return resolve();
    });
  });

  return Object.assign(client, { asyncQuery, asyncEnd });
};
