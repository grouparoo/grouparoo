import { connect } from "../../src/lib/connect";
import path from "path";
import fs from "fs";
import os from "os";
import { parse } from "csv-parse/lib/sync";
import { config } from "actionhero";
import { ConfigWriter } from "@grouparoo/core/dist/modules/configWriter";

const workerId = process.env.JEST_WORKER_ID || 1;
export const usersTableName = `USERS - '${workerId}'`;
export const usersTableSlug = ConfigWriter.generateId(usersTableName);
export const purchasesTableName = `Purchases - '${workerId}'`;
export const recordsDestinationTableName = `OUTPUT_USERS - '${workerId}'`;
export const groupsDestinationTableName = `output_groups - '${workerId}'`;

const allTables = {
  [usersTableName]: `
CREATE TABLE "${usersTableName}" (
  "id" integer PRIMARY KEY,
  "first_name" text,
  "last_name" text,
  "email" text,
  "gender" text,
  "ip_address" text,
  "ios_app" boolean,
  "android_app" boolean,
  "vip" boolean,
  "ltv" float,
  "date" date,
  "stamp" datetime
)
`,
  [purchasesTableName]: `
CREATE TABLE "${purchasesTableName}" (
  "id" integer PRIMARY KEY,
  "record_id" integer,
  "purchase" text,
  "amount" float,
  "date" date,
  "stamp" datetime
)
`,
  [recordsDestinationTableName]: `
CREATE TABLE "${recordsDestinationTableName}" (
  "id" integer PRIMARY KEY,
  "customer_email" text,
  "fname" text,
  "lname" text,
  UNIQUE(customer_email)
)
`,
  [groupsDestinationTableName]: `
CREATE TABLE "${groupsDestinationTableName}" (
  "id" integer PRIMARY KEY,
  "userId" integer NOT NULL,
  "group" text NOT NULL,
  UNIQUE("userId", "group")
)
`,
};

export const appOptions = {
  file: path.join(os.tmpdir(), `${config.sequelize.database}.sqlite`),
};

const appId = "sqlite_test_app";

let client;
export async function getClient() {
  if (client) {
    return client;
  }

  if (!fs.existsSync(appOptions.file)) fs.openSync(appOptions.file, "w");

  client = await connect({
    appOptions,
    app: null,
    appId,
  });

  return client;
}

export async function endClient() {
  if (client) {
    client = null;
  }
}
async function dropTables() {
  for (const tableName in allTables) {
    await client.asyncQuery(`DROP TABLE IF EXISTS "${tableName}"`);
  }
}

async function createTables() {
  await dropTables();
  for (const query of Object.values(allTables)) {
    await client.asyncQuery(query);
  }
}

async function fillTable(tableName, fileName) {
  const filePath = path.resolve(path.join(__dirname, "..", "data", fileName));
  const rows = parse(fs.readFileSync(filePath), { columns: true });
  for (const i in rows) {
    const row = rows[i];
    const q = `INSERT INTO "${tableName}" (${Object.keys(row).join(
      ", "
    )}) VALUES ('${Object.values(row).join("', '")}')`;

    await client.asyncQuery(q);
  }
}

export async function populate() {
  await getClient();
  await createTables();
  await fillTable(usersTableName, "records.csv");
  await fillTable(purchasesTableName, "purchases.csv");
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
