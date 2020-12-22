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
    adAccountId: parsed.FACEBOOK_AD_ACCOUNT,
    accessToken: parsed.FACEBOOK_ACCESS_TOKEN,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.FACEBOOK_AD_ACCOUNT, "gi"),
      nockEnv.FACEBOOK_AD_ACCOUNT
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.FACEBOOK_ACCESS_TOKEN, "gi"),
      nockEnv.FACEBOOK_ACCESS_TOKEN
    );

    return nockCall;
  },
};
