import sharedExecSync from "./exec";
import { api } from "actionhero";
import glob from "glob";
import fs from "fs";
import Prettier from "prettier";
import Database from "./database";
import { log } from "actionhero";

export async function execSync(command) {
  log("    Running: " + command, "debug");
  await sharedExecSync(command);
}

export async function prettier(fileOrDirPath: string) {
  const stats = fs.statSync(fileOrDirPath);
  if (stats.isDirectory) {
    const files = glob.sync(`${fileOrDirPath}/**/*.{json,js}`);
    for (const file of files) await prettier(file);
  } else {
    const text = fs.readFileSync(fileOrDirPath).toString();
    const pOptions = await Prettier.resolveConfig(process.cwd());
    const formatted = Prettier.format(text, pOptions);
    fs.writeFileSync(fileOrDirPath, formatted);
  }
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
