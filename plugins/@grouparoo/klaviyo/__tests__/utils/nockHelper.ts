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
    privateToken: parsed.KLAVIYO_PRIVATE_TOKEN,
    publicToken: parsed.KLAVIYO_PUBLIC_TOKEN,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replaceAll(
      realEnv.KLAVIYO_PRIVATE_TOKEN,
      nockEnv.KLAVIYO_PRIVATE_TOKEN
    );

    nockCall = nockCall.replaceAll(
      realEnv.KLAVIYO_PUBLIC_TOKEN,
      nockEnv.KLAVIYO_PUBLIC_TOKEN
    );

    return nockCall;
  },
};
