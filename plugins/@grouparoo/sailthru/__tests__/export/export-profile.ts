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
let userSid = null;

async function getUser(): Promise<any> {
  const payload = {
    id: userSid,
    key: "sid",
    fields: { keys: 1, vars: 1, lists: 1 },
  };

  return client.get("user", payload);
}

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

    userSid = await client.findSid({ email });
    expect(userSid).toBeTruthy();
  });

  test("can add user variables", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      {}, // old Props
      { email: email, first_name: "Evan" },
      [], // old groups
      [], // new groups
      false
    );

    const user = await getUser();
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Evan");
  });

  test("can change user variables", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      { first_name: "Evan" }, // old Props
      { email: email, first_name: "Brian" },
      [], // old groups
      [], // new groups
      false
    );

    const user = await getUser();
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Brian");
  });

  test("can clear user variables", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      { first_name: "Brian" }, // old Props
      { email: email },
      [], // old groups
      [], // new groups
      false
    );

    const user = await getUser();
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBeFalsy();
  });
});
