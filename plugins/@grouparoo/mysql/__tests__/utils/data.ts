import { connect } from "../../src/lib/connect";
import path from "path";
import fs from "fs";
import parse from "csv-parse/lib/sync";
import { SimpleAppOptions } from "@grouparoo/core";

const usersTableName = `users_${process.env.JEST_WORKER_ID || 1}`;
const purchasesTableName = `purchases_${process.env.JEST_WORKER_ID || 1}`;
const profilesDestinationTableName = `output_users_${
  process.env.JEST_WORKER_ID || 1
}`;
const groupsDestinationTableName = `output_groups_${
  process.env.JEST_WORKER_ID || 1
}`;
const allTables = {
  [usersTableName]: `
CREATE TABLE ${usersTableName} (
  id int(11) NOT NULL,
  first_name VARCHAR(191) DEFAULT NULL,
  last_name VARCHAR(191) DEFAULT NULL,
  email VARCHAR(191) DEFAULT NULL,
  gender VARCHAR(191) DEFAULT NULL,
  ip_address VARCHAR(191) DEFAULT NULL,
  ios_app VARCHAR(191) DEFAULT NULL,
  android_app VARCHAR(191) DEFAULT NULL,
  vip VARCHAR(191) DEFAULT NULL,
  ltv VARCHAR(191) DEFAULT NULL,
  date DATE DEFAULT NULL,
  stamp DATETIME DEFAULT NULL,
  PRIMARY KEY (id)
)
`,
  [purchasesTableName]: `
CREATE TABLE ${purchasesTableName} (
  id int(11) NOT NULL,
  profile_id INTEGER DEFAULT NULL,
  purchase VARCHAR(191) DEFAULT NULL,
  amount DECIMAL(6,2) DEFAULT NULL,
  date DATE DEFAULT NULL,
  stamp DATETIME DEFAULT NULL,
  PRIMARY KEY (id)
)
`,
  [profilesDestinationTableName]: `
CREATE TABLE ${profilesDestinationTableName} (
  id int(11) NOT NULL AUTO_INCREMENT,
  customer_email text,
  fname text,
  lname text,
  PRIMARY KEY (id)
)
`,
  [groupsDestinationTableName]: `
CREATE TABLE ${groupsDestinationTableName} (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`userId\` int(11) DEFAULT NULL,
  \`group\` varchar(191) DEFAULT '',
  PRIMARY KEY (\`id\`),
  UNIQUE KEY userId_group (\`userId\`, \`group\`)
)
`,
};

const appOptions = {
  user: "root",
  database: "grouparoo_test",
};
const appGuid = "app_31bb06e8-0a4e-49c3-ad42-545f2e8662e1";

let client;
export async function getClient() {
  if (client) {
    return client;
  }
  client = await connect({
    appOptions,
    app: null,
    appGuid,
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
}

export function getConfig() {
  return {
    appOptions,
    usersTableName,
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
