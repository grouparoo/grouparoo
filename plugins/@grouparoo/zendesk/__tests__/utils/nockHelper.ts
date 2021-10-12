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
    subdomain: parsed.ZENDESK_SUBDOMAIN,
    username: parsed.ZENDESK_USERNAME,
    token: parsed.ZENDESK_TOKEN,
  };
}

export const updater = {
  recordRequestHeaders: true,
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);
    const realToken = Buffer.from(
      `${realEnv.ZENDESK_USERNAME}/token:${realEnv.ZENDESK_TOKEN}`
    ).toString("base64");
    const nockToken = Buffer.from(
      `${nockEnv.ZENDESK_USERNAME}/token:${nockEnv.ZENDESK_TOKEN}`
    ).toString("base64");
    nockCall = nockCall.replace(new RegExp(realToken, "gi"), nockToken);
    return nockCall;
  },
};
