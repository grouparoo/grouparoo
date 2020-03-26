import mysql from "mysql";
import { promisify } from "util";
import { SimpleAppOptions } from "@grouparoo/core";

interface QueryResultObject {
  [key: string]: any;
}

export async function connect(options: SimpleAppOptions) {
  const client = mysql.createConnection(options);
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
}
