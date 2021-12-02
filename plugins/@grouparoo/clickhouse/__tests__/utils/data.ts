import { SimpleAppOptions } from "@grouparoo/core";
import path from "path";
import fs from "fs";
import { CastingFunction } from "csv-parse";
import { parse } from "csv-parse/lib/sync";

import { connect } from "../../src/lib/connect";

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
  id Int32 NOT NULL,
  account_id Nullable(Int32) DEFAULT NULL,
  first_name Nullable(String) DEFAULT NULL,
  last_name Nullable(String) DEFAULT NULL,
  email Nullable(String) DEFAULT NULL,
  gender Nullable(String) DEFAULT NULL,
  ip_address Nullable(String) DEFAULT NULL,
  ios_app UInt8,
  android_app UInt8,
  vip UInt8,
  ltv Float,
  date Date,
  stamp DateTime64
)
ENGINE = MergeTree()
PRIMARY KEY (id)
`,
  [purchasesTableName]: `
CREATE TABLE ${purchasesTableName} (
  id Int32 NOT NULL,
  record_id Int32,
  purchase Nullable(String) DEFAULT NULL,
  amount Float,
  date Date,
  stamp DateTime64
)
ENGINE = MergeTree()
PRIMARY KEY (id)
`,
  [accountsTableName]: `
CREATE TABLE ${accountsTableName} (
  id Int32 NOT NULL,
  name Nullable(String) DEFAULT NULL,
  plan Nullable(String) DEFAULT NULL
)
ENGINE = MergeTree()
PRIMARY KEY (id)
`,
  [recordsDestinationTableName]: `
CREATE TABLE ${recordsDestinationTableName} (
  id Int32 NOT NULL,
  customer_email String,
  fname String,
  lname String
)
ENGINE = MergeTree()
PRIMARY KEY (id)
`,
  [groupsDestinationTableName]: `
CREATE TABLE ${groupsDestinationTableName} (
  \`id\` Int32 NOT NULL,
  \`userId\` Nullable(int) DEFAULT NULL,
  \`group\` Nullable(String) DEFAULT ''
)
ENGINE = MergeTree()
PRIMARY KEY (\`id\`)
`,
};

// UNIQUE KEY userId_group (\`userId\`, \`group\`)

export const appOptions: SimpleAppOptions = {
  database: "grouparoo_test",
  user: "default",
};
const appId = "app_31bb06e8-0a4e-49c3-ad42-545f2e8662e1";

let client;
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
    await client.asyncEnd();
    client = null;
  }
}
async function dropTables() {
  for (const tableName in allTables) {
    await client.asyncQuery(`drop table if exists ${tableName}`);
  }
}
async function createTables() {
  await dropTables();
  for (const tableName in allTables) {
    const createSql = allTables[tableName];
    await client.asyncQuery(createSql);
  }
}

const castCSVValue: CastingFunction = (value) =>
  value === "true"
    ? 1
    : value === "false"
    ? 0
    : !isNaN(Number(value))
    ? Number(value)
    : value;

async function fillTable(tableName: string, fileName: string) {
  const filePath = path.resolve(path.join(__dirname, "..", "data", fileName));
  const rows = parse(fs.readFileSync(filePath), {
    columns: true,
    trim: true,
    cast: castCSVValue,
  });
  for (const i in rows) {
    const row = rows[i];
    const columns = Object.keys(row).join(", ");
    const values = Object.values(row)
      .map((value) => (typeof value === "string" ? `'${value}'` : value))
      .join(", ");
    const q = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;

    await client.asyncQuery(q);
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
  client: any;
}> {
  await populate();
  return { client };
}
export async function afterData() {
  await dropTables();
  await endClient();
}
