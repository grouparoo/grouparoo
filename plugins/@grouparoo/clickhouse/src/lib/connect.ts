import { ConnectPluginAppMethod, SimpleAppOptions } from "@grouparoo/core";
import {
  MySQLConnection,
  QueryResultObject,
} from "@grouparoo/mysql/dist/lib/connect";
import { log } from "actionhero";
import { ClickHouse } from "clickhouse";
import mysql from "mysql";

class ClickHouseHTTPConnection implements MySQLConnection {
  private clickhouse: ClickHouse;

  public constructor(appOptions: SimpleAppOptions) {
    const { host, port, database, user, password } = appOptions;

    let url = host as String;
    if (url && !url.match(/^localhost/i) && !url.match(/^https?/)) {
      url = `https://${url}`;
    }

    this.clickhouse = new ClickHouse({
      url,
      port,
      basicAuth: {
        username: user,
        password,
      },
      config: {
        database,
      },
    });
  }

  public async asyncQuery(
    query: string,
    replacementValues: any[] = []
  ): Promise<QueryResultObject[]> {
    log(`[ clickhouse ] ${query}`, "debug", replacementValues);
    return this.clickhouse
      .query(mysql.format(query, replacementValues as any[]))
      .toPromise();
  }

  public async asyncEnd(): Promise<void> {
    // Nothing to do!
  }

  public async getMajorVersion(): Promise<number> {
    // Not used in plugin
    throw new Error("Not implemented!");
    return 0;
  }
}

export const connect: ConnectPluginAppMethod<MySQLConnection> = async ({
  appOptions,
}) => new ClickHouseHTTPConnection(appOptions);
