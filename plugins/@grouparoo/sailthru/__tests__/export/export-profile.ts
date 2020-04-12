// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { SimpleAppOptions } from "../../../../../core/api/dist/models/App";
import Sailthru from "../../src/lib/client";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import loadAppOptions from "../utils/loadAppOptions";

let client: Sailthru;
const email = "brian@bleonard.com";
let userSid = null;

const appOptions = loadAppOptions(false);
require("./../fixtures/export-profile");

// switch comments to record new nock file: have to change "assertion" afterwards for google auth
// const appOptions = loadAppOptions(true);
// const nockFile = path.resolve(
//   path.join(__dirname, "../", "fixtures", "export-profile.js")
// );
// helper.recordNock(nockFile);

let getUserCallNum = 0; // increment to change each time for nock
async function getUser(): Promise<any> {
  getUserCallNum++;

  const payload = {
    id: userSid,
    key: "sid",
    fields: { keys: getUserCallNum, vars: 1, lists: 1 },
  };

  try {
    return await client.get("user", payload);
  } catch (err) {
    return null;
  }
}

let findSidCallNum = 0; // increment to change each time for nock
async function findSid() {
  findSidCallNum++;

  const payload = {
    id: email,
    key: "email",
    fields: {
      keys: findSidCallNum,
    },
  };

  try {
    const response: any = await client.get("user", payload);
    return response?.keys?.sid;
  } catch (err) {
    return null;
  }
}

describe("sailthru/exportProfile", () => {
  beforeAll(async () => {
    client = new Sailthru(appOptions);

    // delete it if it's there
    const sid = await findSid();
    if (sid) {
      await client.deleteSid(sid);
    }
  }, 1000 * 30);

  afterAll(async () => {
    if (userSid) {
      try {
        await client.deleteSid(userSid);
      } catch (err) {
        // no big deal
      }
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

    userSid = await findSid();
    expect(userSid).toBeTruthy();
  });

  test("can add user variables", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      { email: email }, // old Props
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
      { email: email, first_name: "Evan" }, // old Props
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

  test("can add to a list", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      { email: email, first_name: null },
      { email: email, first_name: "Brian" },
      [], // old groups
      ["Test Group 1", "Test Group 2"], // new groups
      false
    );

    const user = await getUser();
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Brian");
    expect(user.lists["Test Group 1"]).toBeTruthy();
    expect(user.lists["Test Group 2"]).toBeTruthy();
  });

  test("can remove from a list", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      { email: email, first_name: "Brian" },
      { email: email, first_name: "Brian" },
      ["Test Group 1", "Test Group 2"], // old groups
      ["Test Group 1"], // new groups
      false
    );

    const user = await getUser();
    expect(user.keys.sid).toBe(userSid);
    expect(user.vars.first_name).toBe("Brian");
    expect(user.lists["Test Group 1"]).toBeTruthy(); // still have it
    expect(user.lists["Test Group 2"]).toBeFalsy(); // not have it any more
  });

  test("can delete a user", async () => {
    await exportProfile(
      null,
      appOptions,
      null,
      null,
      null,
      {},
      { email: email, first_name: "Brian" },
      ["Test Group 2", "Test Group 1"], // old groups
      [], // new groups
      true // delete!
    );

    const user = await getUser();
    expect(user).toBeNull();

    const sid = await findSid();
    expect(sid).toBeNull();
  });
});
