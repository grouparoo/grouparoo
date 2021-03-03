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
    businessUnitId: parsed.PARDOT_BUSINESS_UNIT_ID,
    username: parsed.SALESFORCE_USERNAME,
    password: parsed.SALESFORCE_PASSWORD,
    securityToken: parsed.SALESFORCE_SECURITY_TOKEN,
    salesforceDomain: parsed.SALESFORCE_DOMAIN,
    pardotDomain: parsed.PARDOT_DOMAIN,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replaceAll(
      realEnv.SALESFORCE_USERNAME,
      nockEnv.SALESFORCE_USERNAME
    );

    nockCall = nockCall.replaceAll(
      realEnv.SALESFORCE_PASSWORD,
      nockEnv.SALESFORCE_PASSWORD
    );

    nockCall = nockCall.replace(
      new RegExp(realEnv.SALESFORCE_SECURITY_TOKEN, "gi"),
      nockEnv.SALESFORCE_SECURITY_TOKEN
    );

    nockCall = nockCall.replace(
      new RegExp(realEnv.PARDOT_BUSINESS_UNIT_ID, "gi"),
      nockEnv.PARDOT_BUSINESS_UNIT_ID
    );

    return nockCall;
  },
};
