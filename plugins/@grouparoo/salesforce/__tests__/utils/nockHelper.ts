import { SimpleAppOptions, SimpleDestinationOptions } from "@grouparoo/core";
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
    username: parsed.SALESFORCE_USERNAME,
    password: parsed.SALESFORCE_PASSWORD,
    securityToken: parsed.SALESFORCE_SECURITY_TOKEN,
    salesforceDomain: parsed.SALESFORCE_DOMAIN,
  };
}

// const host = function (url) {
//   return new URL(url).host;
// };
export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.SALESFORCE_USERNAME, "gi"),
      nockEnv.SALESFORCE_USERNAME
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.SALESFORCE_PASSWORD, "gi"),
      nockEnv.SALESFORCE_PASSWORD
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.SALESFORCE_SECURITY_TOKEN, "gi"),
      nockEnv.SALESFORCE_SECURITY_TOKEN
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.SALESFORCE_DOMAIN, "gi"),
      nockEnv.SALESFORCE_DOMAIN
    );
    // nockCall = nockCall.replace(
    //   new RegExp(/\"access_token\"\s*:\".+?\"/, "gi"),
    //   '"access_token":"my-access-token"'
    // );
    // nockCall = nockCall.replace(
    //   new RegExp(/\"scope\"\s*:\".+?\"/, "gi"),
    //   '"scope":"my-user@grouparoo.com"'
    // );

    return nockCall;
  },
};
