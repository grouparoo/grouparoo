import sharedExecSync from "./exec";
import { api } from "actionhero";
import path from "path";
import Database from "./database";

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

export async function prettier(fileOrDirPath) {
  // prettier format
  const pCmd = path.resolve(
    path.join(__dirname, "..", "..", "node_modules", ".bin", "prettier")
  );
  const pConfig = path.resolve(
    path.join(__dirname, "..", "..", "..", "..", "..", ".prettierrc")
  );
  await execSync(
    2,
    `'${pCmd}' --config '${pConfig}' --write '${fileOrDirPath}'`
  );
}

export async function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const START_TIME = new Date();
export const numberOfUsers = 1000;
export function userCreatedAt(userId: any) {
  // 1000 people in last 3 months, spaced out
  const secondsBack = 60 * 60 * 24 * 30 * 3;
  const secondsEach = secondsBack / 1000; // for each user
  const ageNumber = numberOfUsers - parseInt(userId);
  const creationAgo = secondsEach * ageNumber * 1000;

  // use that from something specific.
  const epochMilli = START_TIME.getTime() - creationAgo;
  return new Date(epochMilli);
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

  if (options.reset) {
    await reset();
  }
}

export async function reset() {
  // Database
  const db = new Database();
  await db.reset();

  // Redis
  await await api.resque.queue.connection.redis.flushdb();
}
