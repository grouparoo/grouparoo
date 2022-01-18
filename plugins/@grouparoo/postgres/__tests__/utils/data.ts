import { connect, PostgresPoolClient } from "../../src/lib/connect";
import path from "path";
import fs from "fs";
import parse from "csv-parse/lib/sync";
import { config } from "actionhero";
import { userInfo } from "os";

export const usersTableName = `users_${process.env.JEST_WORKER_ID || 1}`;
export const purchasesTableName = `purchases_${
  process.env.JEST_WORKER_ID || 1
}`;
export const accountsTableName = `accounts_${process.env.JEST_WORKER_ID || 1}`;
export const recordsDestinationTableName = `output_users_${
  process.env.JEST_WORKER_ID || 1
}`;
export const groupsDestinationTableName = `output_groups_${
  process.env.JEST_WORKER_ID || 1
}`;

const allTables = {
  [usersTableName]: `
CREATE TABLE ${usersTableName} (
  "id" SERIAL PRIMARY KEY,
  "account_id" integer,
  "first_name" text,
  "last_name" text,
  "email" text,
  "gender" text,
  "ip_address" text,
  "ios_app" boolean,
  "android_app" boolean,
  "vip" boolean,
  "ltv" double precision,
  "date" date,
  "stamp" timestamp
)
`,
  [purchasesTableName]: `
CREATE TABLE ${purchasesTableName} (
  "id" integer PRIMARY KEY,
  "record_id" integer,
  "purchase" text,
  "amount" double precision,
  "date" date,
  "stamp" timestamp
)
`,
  [accountsTableName]: `
CREATE TABLE ${accountsTableName} (
  "id" integer PRIMARY KEY,
  "name" text,
  "plan" text
)
`,
  [recordsDestinationTableName]: `
CREATE TABLE ${recordsDestinationTableName} (
  "id" integer PRIMARY KEY,
  "customer_email" text,
  "fname" text,
  "lname" text,
  UNIQUE(customer_email)
)
`,
  [groupsDestinationTableName]: `
CREATE TABLE ${groupsDestinationTableName}(
  "id" SERIAL PRIMARY KEY,
  "userId" integer NOT NULL,
  "group" text NOT NULL,
  UNIQUE("userId", "group")
)
`,
};

export const appOptions = {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  user: config.sequelize.username || userInfo().username,
  password: config.sequelize.password || "password",
  host: config.sequelize.host,
  port: config.sequelize.port,
  database: config.sequelize.database,
};
const appId = "app_31bb06e8-0a4e-49c3-ad42-545f2e8662e1";

let client: PostgresPoolClient;
export async function getClient() {
  if (client) {
    return client;
  }
  client = await connect({
    appOptions,
    app: null,
    appId,
  });
  return client;
}

export async function endClient() {
  if (client) {
    await client.end();
    client = null;
  }
}
async function dropTables() {
  for (const tableName in allTables) {
    await client.query(`drop table if exists ${tableName}`);
  }
}
async function createTables() {
  await dropTables();
  for (const tableName in allTables) {
    const createSql = allTables[tableName];
    await client.query(createSql);
  }
}

async function fillTable(tableName: string, fileName: string) {
  const filePath = path.resolve(path.join(__dirname, "..", "data", fileName));
  const rows = parse(fs.readFileSync(filePath), { columns: true });
  for (const i in rows) {
    const row = rows[i];
    const values: string[] = Object.values(row);
    const cleanedValues = values.reduce((prev, curr, idx) => {
      return (
        prev +
        (curr.length === 0 ? "null" : `'${curr}'`) +
        (idx === values.length - 1 ? "" : ", ")
      );
    }, "");

    const q = `INSERT INTO ${tableName} (${Object.keys(row).join(
      ", "
    )}) VALUES (${cleanedValues})`;
    await client.query(q);
  }
}

export async function populate() {
  await getClient();
  await createTables();
  await fillTable(usersTableName, "records.csv");
  await fillTable(purchasesTableName, "purchases.csv");
  await fillTable(accountsTableName, "accounts.csv");
}

export function getConfig() {
  return {
    appOptions,
    appId,
    usersTableName,
    purchasesTableName,
    recordsDestinationTableName,
    groupsDestinationTableName,
  };
}
export async function beforeData(): Promise<{
  client: PostgresPoolClient;
}> {
  await populate();
  return { client };
}
export async function afterData() {
  await dropTables();
  await endClient();
}
