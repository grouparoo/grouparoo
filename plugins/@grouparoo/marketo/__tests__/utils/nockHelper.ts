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
    endpoint: parsed.MARKETO_ENDPOINT,
    identity: parsed.MARKETO_IDENTITY,
    clientId: parsed.MARKETO_CLIENT_ID,
    clientSecret: parsed.MARKETO_CLIENT_SECRET,
  };
}

const host = function (url) {
  return new URL(url).host;
};
export const updater = {
  rewrite: function (nockCall) {
    const realEnv = readEnv(realPath);
    const nockEnv = readEnv(nockPath);

    nockCall = nockCall.replace(
      new RegExp(host(realEnv.MARKETO_ENDPOINT), "gi"),
      host(nockEnv.MARKETO_ENDPOINT)
    );
    nockCall = nockCall.replace(
      new RegExp(host(realEnv.MARKETO_IDENTITY), "gi"),
      host(nockEnv.MARKETO_IDENTITY)
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MARKETO_CLIENT_ID, "gi"),
      nockEnv.MARKETO_CLIENT_ID
    );
    nockCall = nockCall.replace(
      new RegExp(realEnv.MARKETO_CLIENT_SECRET, "gi"),
      nockEnv.MARKETO_CLIENT_SECRET
    );
    nockCall = nockCall.replace(
      new RegExp(/\"access_token\"\s*:\".+?\"/, "gi"),
      '"access_token":"my-access-token"'
    );
    nockCall = nockCall.replace(
      new RegExp(/\"scope\"\s*:\".+?\"/, "gi"),
      '"scope":"my-user@grouparoo.com"'
    );

    return nockCall;
  },
};
