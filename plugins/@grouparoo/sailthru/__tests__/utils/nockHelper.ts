import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";
import { SailthruUtil } from "../../../../../node_modules/sailthru-client/lib/sailthru_util";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

const SIGNATURE_STATIC = "NOCK";

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(newNock: boolean = false): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
    const getSignatureHash = jest.fn(() => SIGNATURE_STATIC);
    SailthruUtil.getSignatureHash = getSignatureHash;
  }
  const parsed = readEnv(envFile);
  return {
    apiKey: parsed.SAILTHRU_API_KEY,
    apiSecret: parsed.SAILTHRU_API_SECRET,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.SAILTHRU_API_KEY, "g"),
      nockEnv.SAILTHRU_API_KEY
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.SAILTHRU_API_SECRET, "g"),
      nockEnv.SAILTHRU_API_SECRET
    );

    nockCall = nockCall.replace(/sig=\w+/g, `sig=${SIGNATURE_STATIC}`);
    nockCall = nockCall.replace(
      /\"sig\"\s*:\s*\"\w+\"/g,
      `"sig":"${SIGNATURE_STATIC}"`
    );

    return nockCall;
  },
};
