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
    project_id: parsed.GOOGLE_SERVICE_PROJECT_ID,
    dataset: parsed.GOOGLE_SERVICE_DATASET,
    client_email: parsed.GOOGLE_SERVICE_CLIENT_EMAIL,
    private_key: parsed.GOOGLE_SERVICE_PRIVATE_KEY,
  };
}

export function rewriteNockEnv(nockCall) {
  const realEnv = readEnv(realPath);
  const nockEnv = readEnv(nockPath);

  return nockCall;
}
