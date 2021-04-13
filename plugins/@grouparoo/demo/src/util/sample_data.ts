import Postgres from "../postgres/connection";
import { log, userCreatedAt, numberOfUsers } from "./shared";
import { SimpleAppOptions } from "@grouparoo/core";
import Connection from "./connection";
import parse from "csv-parse/lib/sync";
import fs from "fs";
import path from "path";

interface DataOptions {
  scale?: number;
}

export async function users(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "users", "id", true, true, options);
}

export async function purchases(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "purchases", "user_id", true, false, options);
}

export function readCsvTable(tableName) {
  const filePath = path.resolve(
    path.join(__dirname, "..", "..", "data", `${tableName}.csv`)
  );
  const rows = parse(fs.readFileSync(filePath), { columns: true });
  return rows;
}

async function createCsvTable(
  db: Connection,
  tableName: string,
  userId: string,
  createdAt: boolean,
  updatedAt: boolean,
  options: DataOptions = {}
) {
  log(0, `Adding Sample Data: ${tableName}`);
  await db.connect();
  await loadCsvTable(
    db,
    tableName,
    userId,
    createdAt,
    updatedAt,
    options.scale
  );
  await db.disconnect();
}

async function loadCsvTable(
  db: Connection,
  tableName: string,
  userId: string,
  createdAt: boolean,
  updatedAt: boolean,
  scale: number = 0
) {
  if (scale < 1) {
    scale = 1;
  }
  log(1, `Adding ${tableName}`);
  // read from data file
  const rows = readCsvTable(tableName);
  const keys = Object.keys(rows[0]);

  if (createdAt) {
    keys.push("created_at");
  }
  if (updatedAt) {
    keys.push("updated_at");
  }

  await db.createTable(tableName, userId, keys);

  const fillTable = async function (page: number = 0) {
    log(2, `   Page ${page}`);
    const perPage = rows.length;

    for (const fileRow of rows) {
      const row = Object.assign({}, fileRow);
      row.id = parseInt(row.id);
      if (row.id <= 0) {
        throw new Error(`no id column on ${tableName}`);
      }
      row[userId] = parseInt(row[userId]);
      if (row[userId] <= 0) {
        throw new Error(`no ${userId} column on ${tableName}`);
      }

      const now = new Date().getTime();
      let generatedCreateAt = userCreatedAt(row[userId]);
      let creationAgo = now - generatedCreateAt.getTime();
      if (tableName !== "users") {
        creationAgo = Math.random() * creationAgo;
        const updatedMilli = now - creationAgo;
        generatedCreateAt = new Date(updatedMilli);
      }

      if (createdAt) {
        row.created_at = new Date(generatedCreateAt);
      }
      if (updatedAt) {
        // sometime after that
        const updatedAgo = creationAgo * Math.random();
        const updatedMilli = now - updatedAgo;
        row.updated_at = new Date(updatedMilli);
      }

      if (page > 1) {
        row.id = perPage * page + row.id;
        if (tableName !== "users") {
          row[userId] = numberOfUsers * page + row[userId];
        }
        if (row.email) {
          row.email = `${page}${row.email}`;
        }
      }

      await db.insertRow(tableName, keys, row);
    }
  };

  for (let page = 1; page <= scale; page++) {
    await fillTable(page);
  }
}
