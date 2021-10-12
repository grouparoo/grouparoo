import sharedExecSync from "./exec";
import { api } from "actionhero";
import path from "path";
import Database from "./database";
import { Run } from "@grouparoo/core";
import { log } from "actionhero";

export async function execSync(command) {
  log("    Running: " + command, "debug");
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
  await execSync(`'${pCmd}' --config '${pConfig}' --write '${fileOrDirPath}'`);
}

const START_TIME = new Date();
export const numberOfUsers = 1000;
export function userCreatedAt(id: any) {
  // 1000 people in last 3 months, spaced out
  if (!id) {
    return null;
  }
  const secondsBack = 60 * 60 * 24 * 30 * 3;
  const secondsEach = secondsBack / 1000; // for each user
  const ageNumber = numberOfUsers - parseInt(id);
  const creationAgo = secondsEach * ageNumber * 1000;

  // use that from something specific.
  const epochMilli = START_TIME.getTime() - creationAgo;
  return new Date(epochMilli);
}

export const numberOfAccounts = 50;
export function accountCreatedAt(id: any) {
  // 50 people in last 3 months, spaced out
  if (!id) {
    return null;
  }
  const secondsBack = 60 * 60 * 24 * 30 * 3;
  const secondsEach = secondsBack / 1000; // for each user
  const ageNumber = numberOfAccounts - parseInt(id);
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

export async function finalize() {
  // nothing to do for now
}
