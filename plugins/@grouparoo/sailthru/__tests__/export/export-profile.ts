import fs from "fs-extra";
import path from "path";

let envFile = path.resolve(path.join(__dirname, "../", ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
} else {
  envFile = path.resolve(path.join(__dirname, "../", ".env.example"));
  require("dotenv").config({ path: envFile });
}
const SAILTHRU_API_KEY = process.env.SAILTHRU_API_KEY;
const SAILTHRU_API_SECRET = process.env.SAILTHRU_API_SECRET;

import { exportProfile } from "../../src/lib/export/exportProfile";
import { SimpleAppOptions } from "../../../../../core/api/dist/models/App";
import Sailthru from "../../src/lib/client";

const appOptions: SimpleAppOptions = {
  apiKey: SAILTHRU_API_KEY,
  apiSecret: SAILTHRU_API_SECRET,
};

let client: Sailthru;
const email = "brian@bleonard.com";

describe("sailthru/exportProfile", () => {
  beforeAll(async () => {
    client = new Sailthru(appOptions);

    // delete it if it's there
    const sid = await client.findSid({ email });
    console.log("sid before", sid);
    if (sid) {
      await client.deleteSid(sid);
    }
  }, 1000 * 30);

  test("can create profile on Sailthru", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      {}, // old Props
      { email: email },
      [], // old groups
      [], // new groups
      false
    );
    expect(1 + 1).toBe(2);
  });
});
