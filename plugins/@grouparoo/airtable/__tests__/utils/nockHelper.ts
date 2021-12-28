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
    apiKey: parsed.AIRTABLE_API_KEY,
    baseId: parsed.AIRTABLE_BASE_ID,
  };
}

export function loadTableData(newNock: boolean = false): {
  campaignsId: string;
  campaignsName: string;
  resultsId: string;
  resultsName: string;
  emptyId: string;
  emptyName: string;
} {
  let envFile;
  if (newNock) {
    envFile = realPath;
  } else {
    envFile = nockPath;
  }
  const parsed = readEnv(envFile);
  return {
    campaignsId: parsed.AIRTABLE_CAMPAIGNS_TABLE_ID,
    campaignsName: parsed.AIRTABLE_CAMPAIGNS_TABLE_NAME,
    resultsId: parsed.AIRTABLE_RESULTS_TABLE_ID,
    resultsName: parsed.AIRTABLE_RESULTS_TABLE_NAME,
    emptyId: parsed.AIRTABLE_EMPTY_TABLE_ID,
    emptyName: parsed.AIRTABLE_EMPTY_TABLE_NAME,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    const keys = Object.keys(realEnv);
    for (const key of keys) {
      nockCall = nockCall.replace(new RegExp(realEnv[key], "gi"), nockEnv[key]);
    }

    return nockCall;
  },
};
