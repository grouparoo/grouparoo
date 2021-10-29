import sharedExecSync from "./exec";
import { api } from "actionhero";
import path from "path";
import Database from "./database";
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
