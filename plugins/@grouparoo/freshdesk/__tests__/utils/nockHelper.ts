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
    domainName: parsed.FRESHDESK_DOMAIN_NAME,
    apiKey: parsed.FRESHDESK_API_KEY,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.FRESHDESK_DOMAIN_NAME, "gi"),
      nockEnv.FRESHDESK_DOMAIN_NAME
    );

    nockCall = nockCall.replace(
      new RegExp(realEnv.FRESHDESK_API_KEY, "gi"),
      nockEnv.FRESHDESK_API_KEY
    );

    return nockCall;
  },
};
