import Postgres, { readCsvTable } from "./util/postgres";
import { log } from "./util/shared";
import { SimpleAppOptions } from "@grouparoo/core";

export const SCHEMA_NAME = "demo";
export const USER_ID_PROPERTY_NAME = "userId";

const USERS = {
  id: "INT NOT NULL PRIMARY KEY",
  first_name: "VARCHAR(191) NOT NULL",
  last_name: "VARCHAR(191) NOT NULL",
  email: "VARCHAR(191) NOT NULL",
  gender: "VARCHAR(191)",
  ip_address: "VARCHAR(191)",
  avatar: "VARCHAR(191)",
  language: "VARCHAR(191)",
  deactivated: "BOOLEAN",
};

const PURCHASES = {
  id: "INT NOT NULL PRIMARY KEY",
  user_id: "INT NOT NULL",
  item: "VARCHAR(191) NOT NULL",
  category: "VARCHAR(191) NOT NULL",
  price: "DECIMAL",
  state: "VARCHAR(191)",
};

export function getAppOptions(): SimpleAppOptions {
  const db = new Postgres(SCHEMA_NAME);
  const { host, port, database, schema, user, password } = db.getConfig();
  const appOptions = { host, port, database, schema, user, password };
  for (const key in appOptions) {
    appOptions[key] = (appOptions[key] || "").toString();
  }
  return appOptions;
}

interface DataOptions {
  scale?: number;
}
export async function users(options: DataOptions = {}) {
  await createCsvTable("users", "id", USERS, true, true, options);
}

export async function purchases(options: DataOptions = {}) {
  await createCsvTable("purchases", "user_id", PURCHASES, true, false, options);
}

async function createCsvTable(
  tableName: string,
  userId: string,
  types: any,
  createdAt: boolean,
  updatedAt: boolean,
  options: DataOptions = {}
) {
  log(0, `Adding Sample Data: ${tableName}`);
  const db = new Postgres(SCHEMA_NAME);
  await db.connect();
  await db.createCsvTable(
    tableName,
    userId,
    types,
    createdAt,
    updatedAt,
    options.scale
  );
  await db.disconnect();
}

export async function getPurchases(limit = null) {
  const out = [];
  const db = new Postgres(SCHEMA_NAME);
  const tableName = "purchases";
  const sqlTable = `${db.config.schema}."${tableName}"`;
  let sql = `SELECT * FROM ${sqlTable} ORDER BY created_at DESC`;
  if (limit) {
    sql += ` LIMIT ${limit}`;
  }
  const results = await db.query(3, sql);
  for (const row of results.rows) {
    out.push(row);
  }
  return out;
}

export async function getPurchaseCategories() {
  try {
    return await dbPurchaseCategories();
  } catch (error) {
    log(0, "Purchases not available in database. Using CSV");
    return await csvPurchaseCategories();
  }
}

export async function dbPurchaseCategories() {
  const out = [];
  const db = new Postgres(SCHEMA_NAME);
  const tableName = "purchases";
  const sqlTable = `${db.config.schema}."${tableName}"`;
  const sql = `SELECT category FROM ${sqlTable} WHERE category IS NOT NULL GROUP BY category`;
  const results = await db.query(3, sql);
  for (const row of results.rows) {
    out.push(row.category);
  }
  return out;
}

export async function csvPurchaseCategories() {
  const rows = readCsvTable("purchases");
  const categories = {};
  for (const row of rows) {
    if (row.category) {
      categories[row.category] = true;
    }
  }
  const keys = Object.keys(categories);
  if (keys.length === 0) {
    throw new Error("no categories found!");
  }
  return keys;
}
