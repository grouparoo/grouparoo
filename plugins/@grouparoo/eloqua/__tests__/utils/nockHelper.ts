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
    siteName: parsed.ELOQUA_SITE_NAME,
    userName: parsed.ELOQUA_USER_NAME,
    password: parsed.ELOQUA_PASSWORD,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.ELOQUA_SITE_NAME, "gi"),
      nockEnv.ELOQUA_SITE_NAME
    );

    nockCall = nockCall.replace(
      new RegExp(realEnv.ELOQUA_USER_NAME, "gi"),
      nockEnv.ELOQUA_USER_NAME
    );

    nockCall = nockCall.replace(
      new RegExp(realEnv.ELOQUA_PASSWORD, "gi"),
      nockEnv.ELOQUA_PASSWORD
    );

    return nockCall;
  },
};
