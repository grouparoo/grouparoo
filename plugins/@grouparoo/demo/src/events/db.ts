import Postgres from "../connections/postgres";
import { readCsvTable } from "../util/sample_data";
import { log } from "../util/shared";

export async function getPurchases(limit = null) {
  const out = [];
  const db = new Postgres();
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
  const db = new Postgres();
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
  const rows = readCsvTable("b2c", "purchases");
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
