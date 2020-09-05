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

export function userCreatedAgoMilli(userId: any) {
  // 1000 people in last 3 months, spaced out
  const numberOfUsers = 1000;
  const secondsBack = 60 * 60 * 24 * 30 * 3;
  const secondsEach = secondsBack / 1000; // for each user
  const ageNumber = numberOfUsers - parseInt(userId);
  let creationAgo = secondsEach * ageNumber * 1000;
  return creationAgo;
}
