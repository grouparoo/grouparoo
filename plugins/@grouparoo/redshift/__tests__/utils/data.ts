import { connect } from "@grouparoo/postgres/dist/lib/connect";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

const dirPath = path.resolve(path.join(__dirname, ".."));
const realPath = path.join(dirPath, ".env");
let parsed: Record<string, string>;
if (fs.existsSync(realPath)) parsed = dotenv.parse(fs.readFileSync(realPath));
if (!process.env.REDSHIFT_URL && !parsed.REDSHIFT_URL) {
  throw new Error(`process.env.REDSHIFT_URL is required`);
}
const conf = new URL(process.env.REDSHIFT_URL ?? parsed.REDSHIFT_URL);

export const schema = "test";
export const usersTableName = `users`;
export const purchasesTableName = `purchases`;
export const accountsTableName = `accounts`;
export const appId = "app_31bb06e8-0a4e-49c3-ad42-545f2e8662e1";

export const appOptions = {
  user: conf.username,
  password: conf.password,
  host: conf.hostname,
  port: conf.port,
  database: conf.pathname.replace(/^\//, ""),
  schema,
};

let client;

export async function getClient() {
  if (client) return client;

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

export function getConfig() {
  return {
    appOptions,
    appId,
    usersTableName,
    purchasesTableName,
  };
}
