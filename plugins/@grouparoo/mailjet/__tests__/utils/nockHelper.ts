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
    apiKey: parsed.MJ_APIKEY_PUBLIC,
    apiSecret: parsed.MJ_APIKEY_PRIVATE,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.MJ_APIKEY_PUBLIC, "gi"),
      nockEnv.MJ_APIKEY_PUBLIC
    );

    nockCall = nockCall.replace(
      new RegExp(realEnv.MJ_APIKEY_PRIVATE, "gi"),
      nockEnv.MJ_APIKEY_PRIVATE
    );
    return nockCall;
  },
};
