import mysql from "mysql";
import { promisify } from "util";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export interface QueryResultObject {
  [key: string]: any;
}

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const client = mysql.createConnection(appOptions);
  await promisify(client.connect).bind(client)();

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
            return reject(`error with mysql query: "${q.sql}" - ${error}`);
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

  const asyncEnd = promisify(client.end).bind(client);

  return Object.assign(client, { asyncQuery, asyncEnd });
};
