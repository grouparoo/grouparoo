import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";
import FormData from "form-data";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

const FORM_BOUNDARY_STATIC = "NOCKBOUNDARY";

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(newNock: boolean = false): SimpleAppOptions {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
    const getBoundary = jest.fn(() => FORM_BOUNDARY_STATIC);
    FormData.prototype.getBoundary = getBoundary;
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

    nockCall = nockCall.replaceAll(
      realEnv.SALESFORCE_SECURITY_TOKEN,
      nockEnv.SALESFORCE_SECURITY_TOKEN
    );

    nockCall = nockCall.replaceAll(
      realEnv.PARDOT_BUSINESS_UNIT_ID,
      nockEnv.PARDOT_BUSINESS_UNIT_ID
    );

    nockCall = nockCall.replace(/(-{26})(\d{24})/g, FORM_BOUNDARY_STATIC);

    return nockCall;
  },
};
