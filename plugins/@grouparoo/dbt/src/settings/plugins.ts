import { dbtSettingsResponse } from "./types";
import fs from "fs";

export interface dbtOptionMethod {
  (
    dbtType: string,
    dbtConnection: { [key: string]: any }
  ): Promise<dbtSettingsResponse>;
}
interface TypeOptionMethod {
  (dbtConnection: { [key: string]: any }): Promise<dbtSettingsResponse>;
}

export const dbtConnectionToGrouparooOptions: dbtOptionMethod = async (
  dbtType,
  dbtConnection
) => {
  // all types here: https://docs.getdbt.com/reference/profiles.yml
  switch (dbtType) {
    case "bigquery":
      // https://docs.getdbt.com/reference/warehouse-profiles/bigquery-profile
      return bigquery(dbtConnection);
    case "postgres":
      // https://docs.getdbt.com/reference/warehouse-profiles/bigquery-profile
      return postgres(dbtConnection);
    case "redshift":
      // https://docs.getdbt.com/reference/warehouse-profiles/redshift-profile
      return redshift(dbtConnection);
    case "snowflake":
      // https://docs.getdbt.com/reference/warehouse-profiles/snowflake-profile
      return snowflake(dbtConnection);
    case "sqlserver":
    case "presto":
    case "spark":
    case "exasol":
    case "oracle":
    case "azuresynapse":
    case "dremio":
    case "clickhouse":
      // https://docs.getdbt.com/reference/warehouse-profiles/mssql-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/presto-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/spark-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/exasol-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/oracle-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/azuresynapse-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/dremio-profile
      // https://docs.getdbt.com/reference/warehouse-profiles/clickhouse-profile
      throw new Error(
        `Unsupported (by Grouparoo) dbt connection type: ${dbtType}`
      );
    default:
      throw new Error(`Unknown (to Grouparoo) dbt connection type: ${dbtType}`);
  }
};

const bigquery: TypeOptionMethod = async (dbtConnection) => {
  const type: string = "bigquery";
  const options: { [key: string]: any } = {};

  const method = dbtConnection.method;
  let keyfile_json = null;
  switch (method) {
    case "service-account":
      const filePath = dbtConnection.keyfile;
      if (!filePath) {
        throw new Error("no keyfile given for dbt bigquery service-account.");
      }
      if (!fs.existsSync(filePath)) {
        throw new Error(
          `unknown keyfile (${filePath}) given for dbt bigquery service-account.`
        );
      }
      const contents = fs.readFileSync(filePath).toString();
      if (!contents) {
        throw new Error(
          `no keyfile (${filePath}) contents for dbt bigquery service-account.`
        );
      }
      keyfile_json = JSON.parse(contents);
      break;
    case "service-account-json":
      keyfile_json = dbtConnection.keyfile_json;
      break;
    case "oauth-secrets":
    case "oauth":
      throw new Error(
        `Unsupported (by Grouparoo) bigquery connection method: ${method}`
      );
    default:
      throw new Error(
        `Unknown (to Grouparoo) bigquery connection method: ${method}`
      );
  }

  if (!keyfile_json) {
    throw new Error(`unable to determine keyfile contents for dbt bigquery.`);
  }

  options.project_id = dbtConnection.project || keyfile_json.project_id;
  options.dataset = dbtConnection.dataset;
  options.client_email = keyfile_json.client_email;
  options.private_key = keyfile_json.private_key;
  return { type, options };
};

const postgres: TypeOptionMethod = async (dbtConnection) => {
  const type: string = "postgres";
  const options: { [key: string]: any } = {};

  options.host = dbtConnection.host;
  options.port = dbtConnection.port;
  options.database = dbtConnection.dbname;
  options.schema = dbtConnection.schema || "public";
  options.user = dbtConnection.user;
  options.password = dbtConnection.pass;

  // unclear to how map dbtConnection.sslmode to these things
  // options.ssl = "";
  // options.ssl_cert = "";
  // options.ssl_key = "";
  // options.ssl_ca = "";
  return { type, options };
};

const redshift: TypeOptionMethod = async (dbtConnection) => {
  const type: string = "redshift";
  const options: { [key: string]: any } = {};

  const method = dbtConnection.method;
  switch (method) {
    case "password":
      break;
    case "iam":
      throw new Error(
        `Unsupported (by Grouparoo) redshift connection method: ${method}`
      );
    default:
      if (method) {
        throw new Error(
          `Unknown (to Grouparoo) redshift connection method: ${method}`
        );
      }
      // nothing is password
      break;
  }

  // handling password
  options.host = dbtConnection.host;
  options.port = dbtConnection.port;
  options.database = dbtConnection.dbname;
  options.schema = dbtConnection.schema || "public";
  options.user = dbtConnection.user;
  options.password = dbtConnection.pass;

  return { type, options };
};

const snowflake: TypeOptionMethod = async (dbtConnection) => {
  const type: string = "snowflake";
  const options: { [key: string]: any } = {};

  if (!dbtConnection.password) {
    throw new Error(
      "Grouparoo only supports password authentication for dbt snowflake."
    );
  }

  options.account = dbtConnection.account;
  options.username = dbtConnection.user;
  options.password = dbtConnection.password;
  options.warehouse = dbtConnection.warehouse;
  options.database = dbtConnection.database;
  options.schema = dbtConnection.schema;

  return { type, options };
};
