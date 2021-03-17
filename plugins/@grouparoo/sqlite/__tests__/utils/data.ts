import { connect } from "../../src/lib/connect";
import path from "path";
import fs from "fs";
import os from "os";
import parse from "csv-parse/lib/sync";
import { config } from "actionhero";

const workerId = process.env.JEST_WORKER_ID || 1;
export const usersTableName = `users_${workerId}`;
export const purchasesTableName = `purchases_${workerId}`;
export const profilesDestinationTableName = `output_users_${workerId}`;
export const groupsDestinationTableName = `output_groups_${workerId}`;

const allTables = {
  [usersTableName]: `
CREATE TABLE ${usersTableName} (
  "id" SERIAL PRIMARY KEY,
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
  "profile_id" integer,
  "purchase" text,
  "amount" double precision,
  "date" date,
  "stamp" timestamp
)
`,
  [profilesDestinationTableName]: `
CREATE TABLE ${profilesDestinationTableName} (
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
  file: path.join(os.tmpdir(), `${config.sequelize.database}.sqlite`),
};

const appId = "app_31bb06e8-0a4e-49c3-ad42-545f2e8662e1";

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
    await client.end();
    client = null;
  }
}
async function dropTables() {
  for (const tableName in allTables) {
    await client.asyncQuery(`DROP TABLE IF EXISTS ${tableName}`);
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
    const q = `INSERT INTO ${tableName} (${Object.keys(row).join(
      ", "
    )}) VALUES ('${Object.values(row).join("', '")}')`;

    await client.asyncQuery(q);
  }
}

export async function populate() {
  await getClient();
  await createTables();
  await fillTable(usersTableName, "profiles.csv");
  await fillTable(purchasesTableName, "purchases.csv");
}

export function getConfig() {
  return {
    appOptions,
    appId,
    usersTableName,
    purchasesTableName,
    profilesDestinationTableName,
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
