import Postgres from "./connection";
import { log } from "../util/shared";
import { SimpleAppOptions } from "@grouparoo/core";

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
  const db = new Postgres();
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
  const db = new Postgres();
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
