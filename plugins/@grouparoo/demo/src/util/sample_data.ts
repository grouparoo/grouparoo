import Connection from "./connection";
import parse from "csv-parse/lib/sync";
import fs from "fs";
import path from "path";
import { log } from "actionhero";
import { TYPES, COUNTS, JUNK } from "./data";

interface DataOptions {
  scale?: number;
  junkPercent?: number;
}

export async function writeAll(db: Connection, options: DataOptions = {}) {
  await users(db, options);
  await admins(db, options);
  await purchases(db, options);
  await plans(db, {});
  await accounts(db, options);
  await payments(db, options);
}

async function users(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "users", "id", "users", true, true, options);
}

async function admins(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "admins", "id", "admins", true, true, options);
}

async function purchases(db: Connection, options: DataOptions = {}) {
  await createCsvTable(
    db,
    "purchases",
    "user_id",
    "users",
    true,
    false,
    options
  );
}

async function accounts(db: Connection, options: DataOptions = {}) {
  await createCsvTable(db, "accounts", "id", "accounts", true, true, options);
}

async function payments(db: Connection, options: DataOptions = {}) {
  await createCsvTable(
    db,
    "payments",
    "account_id",
    "accounts",
    true,
    false,
    options
  );
}
async function plans(db: Connection, options: DataOptions = {}) {
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
  typeTableName: string,
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
    typeTableName,
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
  typeTableName: string,
  createdAt: boolean,
  updatedAt: boolean,
  scale: number = 0,
  junkPercent: number = 0
) {
  if (!scale || scale < 0) scale = 1;
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

  const fillTable = async function (page: number = 0, maxId: number) {
    log(`   Page ${page}`, "debug");
    const perPage = rows.length;

    for (const fileRow of rows) {
      const row = { ...fileRow };
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

      const origTypeId = row[typeColumn];
      if (createdAt || updatedAt) {
        // otherwise, not handling times or pagination
        const { created_at, updated_at, myId, typeId } = getRowData(
          tableName,
          row.id,
          origTypeId,
          typeTableName,
          page,
          perPage
        );

        if (maxId) {
          if (!origTypeId || origTypeId > maxId) {
            // console.log({ no: "", origTypeId, maxId });
            continue;
          }
          // console.log({ yes: "", origTypeId, maxId });
        }

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

  const pages = Math.floor(scale);
  const remainder = Math.round((scale - pages + Number.EPSILON) * 100) / 100;

  for (let page = 1; page <= pages; page++) {
    await fillTable(page, null);
  }

  if (remainder > 0) {
    const tableCount = COUNTS[typeTableName];
    if (!tableCount) {
      throw new Error(`Table count unknown: ${tableName}`);
    }
    let maxRootId = Math.floor(tableCount * remainder);
    if (maxRootId < 1) maxRootId = 1;
    await fillTable(pages + 1, maxRootId);
  }
}

function getRowData(
  tableName: string,
  myId: number,
  typeId: number,
  typeTableName: string,
  page: number,
  perPage: number
): { created_at: Date; updated_at: Date; myId: number; typeId: number } {
  const rootCreatedAt = getCreatedAt(typeId, typeTableName);
  const numOfRoot = COUNTS[typeTableName];
  const isRoot = tableName === typeTableName;

  const created_at = isRoot
    ? rootCreatedAt
    : getUpdatedAt(myId, tableName, rootCreatedAt);
  const updated_at = getUpdatedAt(myId, tableName, created_at); // updated sometime after that

  if (page > 1) {
    myId = perPage * (page - 1) + myId;

    if (isRoot) {
      typeId = myId;
    } else {
      typeId = numOfRoot * (page - 1) + typeId;
    }
  }

  return {
    created_at,
    updated_at,
    myId,
    typeId,
  };
}

function getScaledDate(id: any, typeTableName: string, msStart: number) {
  // e.g. 1000 records in last 3 months, spaced out
  if (!id) {
    return null;
  }
  const count = COUNTS[typeTableName];
  if (!count) {
    throw new Error(`unknown typeTableName: ${typeTableName}`);
  }
  const now = Date.now();
  const msBack = now - msStart;
  const msEach = msBack / count; // for each record
  const ageNumber = count - parseInt(id);
  const creationAgo = msEach * ageNumber;

  // use that from something specific.
  const msEpoch = now - creationAgo;
  return new Date(msEpoch);
}

function getCreatedAt(id: any, typeTableName: string) {
  const msMinAge = Date.now() - 60 * 60 * 24 * 30 * 3 * 1000; // 30 days ago
  return getScaledDate(id, typeTableName, msMinAge);
}

function getUpdatedAt(myId: number, tableName: string, created_at: Date) {
  const msDiff = Date.now() - created_at.getTime();
  const msAgo = Math.round(msDiff * 0.9); // just a bit after
  const msMinAge = Date.now() - msAgo;
  return getScaledDate(myId, tableName, msMinAge);
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
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const bucket = i % 100; // from 0 to 100
    const toJunk = bucket < junkPercent;
    if (toJunk) {
      junkCounter++;
      junkifyRow(tableName, row, junkCounter);
    }
  }

  if (junkCounter > 0) {
    log(`    created junk data on ${junkCounter} ${tableName} records`);
  }

  return rows;
}

function junkifyRow(tableName: string, row: any, num: number) {
  const columns = JUNK[tableName];
  if (columns === undefined) {
    throw new Error(`Junkify unknown table: ${tableName}`);
  }
  if (columns.length === 0) {
    return;
  }
  const keys = Object.keys(columns);
  const key = keys[num % keys.length];

  const empty = num % 3 === 0;
  const current = row[key];
  if (empty) {
    row[key] = "";
  } else {
    const gen = columns[key];
    row[key] = gen(current, num);
  }
}
