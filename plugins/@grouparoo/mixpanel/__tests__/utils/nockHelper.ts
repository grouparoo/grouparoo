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
    token: parsed.MIXPANEL_API_KEY,
    username: parsed.MIXPANEL_USERNAME,
    secret: parsed.MIXPANEL_SECRET,
    projectId: parsed.MIXPANEL_PROJECT_ID,
  };
}

export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(realEnv.MIXPANEL_API_KEY, "gi"),
      nockEnv.MIXPANEL_API_KEY
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MIXPANEL_USERNAME, "gi"),
      nockEnv.MIXPANEL_USERNAME
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MIXPANEL_SECRET, "gi"),
      nockEnv.MIXPANEL_SECRET
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MIXPANEL_PROJECT_ID, "gi"),
      nockEnv.MIXPANEL_PROJECT_ID
    );
    return nockCall;
  },
};
