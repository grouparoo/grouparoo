import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

function buildRandoms() {
  const out = [];
  for (let i = 0; i < 100; i++) {
    out.push(Math.floor(Math.random() * 9999999999));
  }
  return out;
}
const randomNumbers = JSON.stringify(buildRandoms());

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(newNock: boolean = false): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
    // process.env.INTERCOM_RANDOM_NUMBERS set by nock file
  }
  const parsed = readEnv(envFile);
  return {
    token: parsed.INTERCOM_TOKEN,
  };
}

export function getRandomNumbers(testNum: number): number[] {
  // each test gets 10 numbers
  const numbers: number[] = JSON.parse(
    process.env.INTERCOM_RANDOM_NUMBERS || randomNumbers
  );
  const first = (testNum - 1) * 10;
  return numbers.slice(first, first + 10);
}
export const updater = {
  prepend: function () {
    return `process.env.INTERCOM_RANDOM_NUMBERS = "${randomNumbers}"`;
  },
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.INTERCOM_TOKEN, "gi"),
      nockEnv.INTERCOM_TOKEN
    );

    return nockCall;
  },
};
