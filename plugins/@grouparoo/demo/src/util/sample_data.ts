import {
  userCreatedAt,
  numberOfUsers,
  accountCreatedAt,
  numberOfAccounts,
} from "./shared";
import Connection from "./connection";
import parse from "csv-parse/lib/sync";
import fs from "fs";
import path from "path";
import { log } from "actionhero";
import { TYPES } from "./data";

interface DataOptions {
  scale?: number;
  junkPercent?: number;
}

export async function writeAll(db: Connection, options: DataOptions = {}) {
  await users(db, options);
  await purchases(db, options);
  await plans(db, {});
  await accounts(db, options);
  await payments(db, options);
}

export async function users(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "users", "id", "user", true, true, options);
}

export async function purchases(db: Connection, options: DataOptions = {}) {
  await createCsvTable(
    db,
    "purchases",
    "user_id",
    "user",
    true,
    false,
    options
  );
}

export async function accounts(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "accounts", "id", "account", true, true, options);
}
export async function payments(db: Connection, options: DataOptions = {}) {
  await createCsvTable(
    db,
    "payments",
    "account_id",
    "account",
    true,
    false,
    options
  );
}
export async function plans(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "plans", "id", null, false, false, options);
}

export function readCsvTable(tableName: string, junkPercent: number) {
  const filePath = path.resolve(
    path.join(__dirname, "..", "..", "data", "rows", `${tableName}.csv`)
  );
  const rows = junkifyData(
    tableName,
    parse(fs.readFileSync(filePath), { columns: true }),
    junkPercent
  );
  return rows;
}

async function createCsvTable(
  db: Connection,
  tableName: string,
  typeColumn: string,
  typeName: string,
  createdAt: boolean,
  updatedAt: boolean,
  options: DataOptions = {}
) {
  if (!db.isWriting()) {
    return;
  }
  log(`Adding Sample Data: ${tableName}`);

  await db.connect();
  await loadCsvTable(
    db,
    tableName,
    typeColumn,
    typeName,
    createdAt,
    updatedAt,
    options.scale,
    options.junkPercent
  );
  await db.disconnect();
}

async function loadCsvTable(
  db: Connection,
  tableName: string,
  typeColumn: string,
  typeName: string,
  createdAt: boolean,
  updatedAt: boolean,
  scale: number = 0,
  junkPercent: number = 0
) {
  if (!scale || scale < 1) scale = 1;
  if (!junkPercent || junkPercent < 1) junkPercent = 0;

  // read from data file
  const rows = readCsvTable(tableName, junkPercent);
  const keys = Object.keys(rows[0]);

  if (createdAt) {
    keys.push("created_at");
  }
  if (updatedAt) {
    keys.push("updated_at");
  }

  await db.createTable(tableName, typeColumn, keys);

  const fillTable = async function (page: number = 0) {
    log(`   Page ${page}`, "debug");
    const perPage = rows.length;

    for (const fileRow of rows) {
      const row = Object.assign({}, fileRow);
      row.id = parseInt(row.id);
      if (row.id <= 0) {
        throw new Error(`no id column on ${tableName}`);
      }
      row[typeColumn] = parseInt(row[typeColumn]);
      if (row[typeColumn] <= 0) {
        throw new Error(`no ${typeColumn} column on ${tableName}`);
      }
      for (const key in row) {
        row[key] = parseValue(tableName, key, row[key]);
      }

      if (createdAt || updatedAt) {
        // otherwise, not handling times or pagination
        const { created_at, updated_at, myId, typeId } = getRowData(
          tableName,
          row.id,
          row[typeColumn],
          typeName,
          page,
          perPage
        );

        row.id = myId;
        row[typeColumn] = typeId;

        if (page > 1) {
          if (row.email) {
            row.email = `${page}${row.email}`;
          }
        }

        if (createdAt) {
          row.created_at = created_at;
        }
        if (updatedAt) {
          row.updated_at = updated_at;
        }
      }

      await db.insertRow(tableName, keys, row);
    }
  };

  for (let page = 1; page <= scale; page++) {
    await fillTable(page);
  }
}

function getRowData(
  tableName: string,
  myId: number,
  typeId: number,
  typeName: string,
  page: number,
  perPage: number
): { created_at: Date; updated_at: Date; myId: number; typeId: number } {
  let rootCreatedAt;
  let isRoot;
  let numOfRoot;

  const now = new Date();
  switch (typeName) {
    case "user":
      rootCreatedAt = userCreatedAt(typeId);
      isRoot = tableName === "users";
      numOfRoot = numberOfUsers;
      break;
    case "account":
      rootCreatedAt = accountCreatedAt(typeId);
      isRoot = tableName === "accounts";
      numOfRoot = numberOfAccounts;
      break;
    default:
      throw new Error(`unknown typeName: ${typeName}`);
  }

  if (page > 1) {
    myId = perPage * page + myId;

    if (isRoot) {
      typeId = myId;
    } else {
      typeId = numOfRoot * page + typeId;
    }
  }

  let created_at;
  let updated_at;
  if (rootCreatedAt) {
    created_at = isRoot ? rootCreatedAt : getUpdatedAt(now, rootCreatedAt);
  } else if (tableName === "users") {
    created_at = userCreatedAt(myId);
  }

  if (created_at) {
    updated_at = getUpdatedAt(now, created_at); // updated sometime after that
  }

  return {
    created_at,
    updated_at,
    myId,
    typeId,
  };
}

function getUpdatedAt(now: Date, created_at: Date) {
  const creationAgo = now.getTime() - created_at.getTime();
  const updatedAgo = creationAgo * Math.random();
  const updatedMilli = now.getTime() - updatedAgo;
  return new Date(updatedMilli);
}

function parseValue(tableName: string, key: string, value: string) {
  const type = TYPES[tableName][key];
  if (!value) {
    return null;
  }
  if (key === "id" || key.indexOf("_id") >= 0) {
    return parseInt(value);
  }
  if (type.indexOf("INT") === 0) {
    return parseInt(value);
  }
  if (type.indexOf("DECIMAL") === 0) {
    return Math.round(parseFloat(value) * 100) / 100;
  }

  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return value;
}

function junkifyData(
  tableName: string,
  rows: Record<string, any>[],
  junkPercent: number
) {
  let junkCounter = 0;
  // skip the primary key (the first column)
  const keys = Object.keys(rows[0]).slice(1, Object.keys(rows[0]).length - 1);
  for (const row of rows) {
    const toJunk = Math.random() < junkPercent / 100;
    if (toJunk) {
      junkCounter++;
      const key = keys[Math.floor(Math.random() * keys.length)];
      row[key] = junkRow(key, row[key]);
    }
  }

  if (junkCounter > 0) {
    log(`    created junk data on ${junkCounter} ${tableName} records`);
  }

  return rows;
}

function junkRow(column: string, v: string) {
  // don't mess with primary keys
  if (column.match(/_id$/)) return v;

  if (v.includes(".") && !isNaN(parseFloat(v))) {
    v = Math.random() < 0.5 ? `-${v}` : "";
    v = v;
  }
  if (v.includes("@")) {
    v =
      Math.random() < 0.5
        ? ` ${v} `
        : Math.random() < 0.5
        ? v.replace("@", "-")
        : "";
  } else {
    v = Math.random() < 0.5 ? ` ${v} ` : "";
  }

  return v;
}
