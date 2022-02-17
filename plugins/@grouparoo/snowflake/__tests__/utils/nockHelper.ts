import { SimpleAppOptions } from "@grouparoo/core";
import SnowflakeGlobalConfig from "snowflake-sdk/lib/global_config";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";
import zlib from "zlib";

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

  SnowflakeGlobalConfig.setInsecureConnect(true); // skip OCSP fetching

  const parsed = readEnv(envFile);
  return {
    account: parsed.SNOWFLAKE_ACCOUNT,
    username: parsed.SNOWFLAKE_USERNAME,
    password: parsed.SNOWFLAKE_PASSWORD,
    warehouse: parsed.SNOWFLAKE_WAREHOUSE,
    database: parsed.SNOWFLAKE_DATABASE,
    schema: parsed.SNOWFLAKE_SCHEMA,
  };
}

function cleanUp(nockCall) {
  const realEnv = readEnv(realPath);
  const nockEnv = readEnv(nockPath);

  const realPieces = realEnv.SNOWFLAKE_ACCOUNT.split(".");
  const nockPieces = nockEnv.SNOWFLAKE_ACCOUNT.split(".");

  nockCall = nockCall.replace(
    new RegExp(realEnv.SNOWFLAKE_ACCOUNT, "g"),
    nockEnv.SNOWFLAKE_ACCOUNT
  );
  nockCall = nockCall.replace(new RegExp(realPieces[0], "g"), nockPieces[0]);

  nockCall = nockCall.replace(
    new RegExp(realEnv.SNOWFLAKE_USERNAME, "g"),
    nockEnv.SNOWFLAKE_USERNAME
  );
  nockCall = nockCall.replace(
    new RegExp(realEnv.SNOWFLAKE_PASSWORD, "g"),
    nockEnv.SNOWFLAKE_PASSWORD
  );
  nockCall = nockCall.replace(
    new RegExp(realEnv.SNOWFLAKE_WAREHOUSE, "g"),
    nockEnv.SNOWFLAKE_WAREHOUSE
  );
  nockCall = nockCall.replace(
    new RegExp(realEnv.SNOWFLAKE_DATABASE, "g"),
    nockEnv.SNOWFLAKE_DATABASE
  );
  nockCall = nockCall.replace(
    new RegExp(realEnv.SNOWFLAKE_SCHEMA, "g"),
    nockEnv.SNOWFLAKE_SCHEMA
  );
  return nockCall;
}

export const updater = {
  rewrite: function (nockCall) {
    const matches = nockCall.matchAll(
      /\.post\s*\(\s*['"][\/\w\-]+['"]\s*,\s*\s['"](\w+)['"]\s*\)/g
    );
    for (const match of matches) {
      const body = match[1];
      const bufferCompressed = Buffer.from(body, "hex");
      let json = zlib.gunzipSync(bufferCompressed, null).toString();
      json = cleanUp(json);
      const bufferUncompressed = Buffer.from(json, "utf8");
      const zipped = zlib.gzipSync(bufferUncompressed, null);
      let newBytes = zipped.toString("hex");

      // somehow, these bytes are slightly different on mac/ci
      // mac: 1f8b0800000000000013558...
      //  ci: 1f8b0800000000000003558...

      const regexBytes = "/" + newBytes.slice(0, 18) + ".+" + "/";
      nockCall = nockCall.replace(
        new RegExp('"' + body + '"', "g"),
        regexBytes
      );
    }

    nockCall = cleanUp(nockCall);

    nockCall = nockCall.replace(
      /\"requestId\"\s*:\s*\".+?\"/,
      '"requestId": /.+/g'
    );
    nockCall = nockCall.replace(
      /\"masterToken\"\s*:\s*\".+?\"/,
      '"masterToken":"master_token_here"'
    );
    nockCall = nockCall.replace(
      /\"token\"\s*:\s*\".+?\"/,
      '"token":"token_here"'
    );
    return nockCall;
  },
};
