import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";

const dirPath = path.resolve(path.join(__dirname, ".."));
const nockPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

const uniqueTimestamp = new Date().getTime().toString();

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(): SimpleAppOptions {
  const newNock: boolean = !!process.env.NOCK;
  let envFile;
  if (newNock) {
    envFile = realPath;
    process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = uniqueTimestamp;
  } else {
    envFile = nockPath;
    // process.env.GOOGLE_SHEETS_JEST_TIMESTAMP set by nock file
  }

  const parsed = readEnv(envFile);
  return {
    client_email: parsed.GOOGLE_SERVICE_CLIENT_EMAIL,
    private_key: parsed.GOOGLE_SERVICE_PRIVATE_KEY,
  };
}

export const updater = {
  prepend: function () {
    return `process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "${uniqueTimestamp}"`;
  },
  rewrite: function (nockCall: string) {
    // manually stub out oAuth req/res
    nockCall = nockCall.replace(
      /, "grant_type=.+?\"/,
      ", { grant_type: /.+/g, assertion: /.+/g }"
    );

    return nockCall;
  },
};
