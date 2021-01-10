import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { getRandomNumbers, loadAppOptions, updater } from "../utils/nockHelper";
import { setup } from "../utils/shared";

const nockFile = path.join(__dirname, "../", "fixtures", "lead-quirks.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/lead-quirks");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

let userId = null;
let userId2 = null;

const rand = getRandomNumbers(5); // has to be after requiring nock

const email = `testuser1.${rand[1]}@demo.com`;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

describe("intercom has weird things with leads - verify the behavior", () => {
  const { getUser, guidRegex, getClient } = setup(appOptions, {}, newNock);

  test("can create lead with email", async () => {
    const { body } = await getClient().contacts.create({
      role: "lead",
      email: email,
    });
    userId = body.id;
    expect(userId).toBeTruthy();

    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toMatch(guidRegex);
    expect(user.role).toBe("lead");
  });

  test("can create lead with external_id but it won't listen", async () => {
    const { body } = await getClient().contacts.create({
      role: "lead",
      email: email2,
      external_id: externalId2,
    });
    userId2 = body.id;
    expect(userId2).toBeTruthy();

    const user = await getUser(userId2);
    expect(user.external_id).not.toBe(externalId2);
    expect(user.external_id).toMatch(guidRegex);
    expect(user.email).toBe(email2);
    expect(user.role).toBe("lead");
  });

  test("can change an external_id while switching role to user", async () => {
    await getClient().contacts.update(userId2, {
      role: "user",
      email: email2,
      external_id: externalId2,
    });

    const user = await getUser(userId2);
    expect(user.external_id).toBe(externalId2);
    expect(user.email).toBe(email2);
    expect(user.role).toBe("user");
  });

  test("it can't go back to being a lead", async () => {
    let error = null;
    try {
      await getClient().contacts.update(userId2, {
        role: "lead",
        email: email2,
        external_id: externalId2,
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/user role can't be converted to a lead/);

    // same
    const user = await getUser(userId2);
    expect(user.external_id).toBe(externalId2);
    expect(user.email).toBe(email2);
    expect(user.role).toBe("user");
  });

  // TODO: deleting behavior
});
