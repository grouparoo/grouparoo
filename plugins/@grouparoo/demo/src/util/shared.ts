import sharedExecSync from "./exec";

const LOG_LEVEL = 4;

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
