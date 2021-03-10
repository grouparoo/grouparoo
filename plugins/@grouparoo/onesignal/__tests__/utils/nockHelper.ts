import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(newNock: boolean = false): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }
  const parsed = readEnv(envFile);
  return {
    apiKey: parsed.ONESIGNAL_API_KEY,
    appId: parsed.ONESIGNAL_APP_ID,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replaceAll(
      realEnv.ONESIGNAL_API_KEY,
      nockEnv.ONESIGNAL_API_KEY
    );

    nockCall = nockCall.replaceAll(
      realEnv.ONESIGNAL_APP_ID,
      nockEnv.ONESIGNAL_APP_ID
    );

    return nockCall;
  },
};
