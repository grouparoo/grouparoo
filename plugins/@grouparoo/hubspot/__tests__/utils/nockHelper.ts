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
export function loadAppOptions(
  newNock: boolean = false,
  options?: { useOAuth?: boolean }
): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }
  const parsed = readEnv(envFile);

  return options?.useOAuth
    ? { refreshToken: parsed.HUBSPOT_OAUTH_REFRESH_TOKEN }
    : { hapikey: parsed.HUBSPOT_API_KEY };
}

const host = function (url) {
  return new URL(url).host;
};

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall
      .replace(
        new RegExp(realEnv.HUBSPOT_API_KEY, "gi"),
        nockEnv.HUBSPOT_API_KEY
      )
      .replace(
        new RegExp(realEnv.HUBSPOT_OAUTH_REFRESH_TOKEN, "gi"),
        nockEnv.HUBSPOT_OAUTH_REFRESH_TOKEN
      );
    return nockCall;
  },
};
