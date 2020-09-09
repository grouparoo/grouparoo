import sharedExecSync from "./exec";
import { api, config } from "actionhero";
import Database from "./postgres";

const LOG_LEVEL = 1;

export function log(level: number, ...toLog) {
  if (LOG_LEVEL >= level) {
    console.log(...toLog);
    // TODO, use actionhero LOG
  }
}

export async function execSync(level: number, command) {
  log(level, "    Running:", command);
  await sharedExecSync(command);
}

export async function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function userCreatedAgoMilli(userId: any) {
  // 1000 people in last 3 months, spaced out
  const numberOfUsers = 1000;
  const secondsBack = 60 * 60 * 24 * 30 * 3;
  const secondsEach = secondsBack / 1000; // for each user
  const ageNumber = numberOfUsers - parseInt(userId);
  let creationAgo = secondsEach * ageNumber * 1000;
  return creationAgo;
}

interface InitOptions {
  reset?: boolean;
}
let envInit = false;
export async function init(options: InitOptions = {}) {
  if (envInit) {
    return;
  }
  envInit = true;
  await api.resque.startQueue();

  if (options.reset) {
    await reset();
  }
}

export async function reset() {
  // Database
  const db = new Database("public");
  await db.connect();
  const skipTables = ["sequelizemeta"];
  const sql =
    "SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = $1 AND table_schema = $2";
  const result = await db.query(1, sql, [db.config.database, db.config.schema]);
  for (const row of result.rows) {
    if (skipTables.includes(row.table_name.toLowerCase())) {
      continue;
    }
    const sqlTable = `${db.config.schema}."${row.table_name}"`;
    await db.query(2, `TRUNCATE TABLE ${sqlTable};`);
  }
  await db.disconnect();

  // Redis
  await await api.resque.queue.connection.redis.flushdb();
}
