import { log } from "actionhero";
import { Database } from "sqlite3";

export type SQLiteQueryParamValue = string | number | boolean | null;

export class SQLite extends Database {
  private database: string;
  private connection: Database;

  constructor({ database }: { database: string }) {
    super(database);
    this.database = database;
  }

  async asyncConnect(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.connection = new Database(this.database, (err: Error) => {
        if (err) {
          return reject(
            new Error(
              `Error connecting to SQLite database: ${this.database}\n${err}`
            )
          );
        }
        return resolve(
          `Successfully connected to SQLite database: ${this.database}`
        );
      });
    });
  }

  async asyncQuery(
    query: string,
    params?: SQLiteQueryParamValue[] | Record<string, SQLiteQueryParamValue>
  ): Promise<Record<string, any>[]> {
    log(`[ sqlite ] ${query} ${params}`, "debug");
    return new Promise((resolve, reject) => {
      this.connection.all(
        query,
        params,
        (err: Error, res: Record<string, any>[]) => {
          if (err) {
            return reject(new Error(`${err.message}\nQuery: ${query}`));
          }
          return resolve(res);
        }
      );
    });
  }

  async asyncDisconnect(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.connection.close(() => {
        return resolve(
          `Connection to database SQLite closed: ${this.database}`
        );
      });
    });
  }
}
