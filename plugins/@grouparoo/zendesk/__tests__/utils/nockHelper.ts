import { SimpleAppOptions } from "@grouparoo/core";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs-extra";

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
    subdomain: parsed.ZENDESK_SUBDOMAIN,
    username: parsed.ZENDESK_USERNAME,
    token: parsed.ZENDESK_TOKEN,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    return nockCall;
  },
};
