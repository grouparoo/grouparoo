import { Database } from "sqlite3";

export class SQLite extends Database {
  database: string;
  connection: Database;

  constructor({ database }) {
    super(database);
    this.database = database;
    this.connection = undefined;
  }

  async asyncConnect(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.connection = new Database(this.database, (err: Error) => {
        if (err) {
          return reject(
            new Error(`Error connecting to SQLite database: ${this.database}`)
          );
        }
        return resolve(
          `Successfully connected to SQLite database: ${this.database}`
        );
      });
    });
  }

  async asyncQuery(query: string): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.connection.all(query, (err: Error, res: any[]) => {
        if (err) {
          return reject(new Error(`Error running query: ${err}`));
        }
        return resolve(res);
      });
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
