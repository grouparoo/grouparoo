import { SimpleAppOptions } from "@grouparoo/core";
import dotenv from "dotenv";
import path from "path";
import fs from "fs-extra";
import { SailthruUtil } from "../../../../../node_modules/sailthru-client/lib/sailthru_util";

export default function loadAppOptions(
  newNock: boolean = false
): SimpleAppOptions {
  let fileName = ".env.example";
  if (newNock) {
    fileName = ".env";
  } else {
    const getSignatureHash = jest.fn(() => "NOCK");
    SailthruUtil.getSignatureHash = getSignatureHash;
  }
  const envFile = path.resolve(path.join(__dirname, "..", fileName));
  const parsed = dotenv.parse(fs.readFileSync(envFile));

  return {
    apiKey: parsed.SAILTHRU_API_KEY,
    apiSecret: parsed.SAILTHRU_API_SECRET,
  };
}
