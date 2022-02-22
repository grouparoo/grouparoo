import { connect } from "../../src/lib/connect";
import { disconnect } from "../../src/lib/disconnect";
import { Snowflake } from "snowflake-promise";

const appId = "app_31KR06e8-0a4e-493039-ad42-545f2e9992e1";

export const usersTableName = `PROFILES`;
export const purchasesTableName = `PURCHASES`;
export const accountsTableName = `ACCOUNTS`;
export const recordsDestinationTableName = `OUTPUT_USERS`;
export const groupsDestinationTableName = `OUTPUT_GROUPS`;

const allTables = {
  [usersTableName]: `
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC".${usersTableName} (
    "ID" INTEGER NOT NULL, 
    "ACCOUNT_ID" INTEGER NOT NULL, 
    "FIRST_NAME" STRING, 
    "LAST_NAME" STRING,
    "EMAIL" STRING, 
    "GENDER" STRING, 
    "IP_ADDRESS" STRING, 
    "IOS_APP" BOOLEAN, 
    "ANDROID_APP" BOOLEAN, 
    "VIP" BOOLEAN, 
    "LTV" DOUBLE, 
    "DATE" DATE, 
    "STAMP" TIMESTAMP
);`,

  [purchasesTableName]: `
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC".${purchasesTableName} (
    "ID" INTEGER NOT NULL, 
    "PROFILE_ID" INTEGER, 
    "PURCHASE" STRING, 
    "AMOUNT" DOUBLE, 
    "DATE" DATE, 
    "STAMP" TIMESTAMP
);

`,
  [accountsTableName]: `
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC".${accountsTableName} (
    "ID" INTEGER NOT NULL, 
    "NAME" STRING, 
    "PLAN" STRING
);

`,
  [recordsDestinationTableName]: `
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC".${recordsDestinationTableName} (
  "ID" INTEGER PRIMARY KEY,
  "EMAIL" STRING UNIQUE,
  "FIRST_NAME" STRING,
  "LAST_NAME" STRING
)

`,
  [groupsDestinationTableName]: `
CREATE TABLE "SAMPLE_SOURCES"."PUBLIC".${groupsDestinationTableName}(
  "ID" INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  "EMAIL" STRING NOT NULL UNIQUE,
  "GROUP_NAME" STRING NOT NULL UNIQUE
)
`,
};

let connection: Snowflake;

export async function getConnection(appOptions) {
  if (connection) {
    return connection;
  }
  connection = await connect({
    appOptions,
    app: null,
    appId,
  });
  return connection;
}

export async function endConnection(appOptions) {
  if (connection) {
    await disconnect({ appOptions, app: null, appId, connection });
    connection = null;
  }
}

async function dropTables() {
  for (const tableName in allTables) {
    await connection.execute(`drop table if exists ${tableName}`);
  }
}

async function createTables() {
  await dropTables();
  for (const tableName in allTables) {
    const createSql = allTables[tableName];
    await connection.execute(createSql);
  }
}

export async function populate(appOptions) {
  await getConnection(appOptions);
  await createTables();
}

export function getConfig() {
  return {
    usersTableName,
    purchasesTableName,
    recordsDestinationTableName,
    groupsDestinationTableName,
  };
}

export async function beforeData(appOptions): Promise<{
  connection: Snowflake;
}> {
  await populate(appOptions);
  return { connection };
}

export async function afterData(appOptions) {
  await dropTables();
  await endConnection(appOptions);
}
