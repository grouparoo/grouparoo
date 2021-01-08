import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
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

const rand = getRandomNumbers(); // has to be after requiring nock

const email = `testuser${rand[1]}@demo.com`;
const externalId2 = `testuser${rand[2]}`;

describe("intercom has weird things with leads - verify the behavior", () => {
  const { getUser, guidRegex, getClient } = setup(appOptions, newNock);

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
  });

  test("can create lead with external_id but it won't listen", async () => {
    const { body } = await getClient().contacts.create({
      role: "lead",
      external_id: externalId2,
    });
    userId2 = body.id;
    expect(userId2).toBeTruthy();

    const user = await getUser(userId2);
    expect(user.external_id).not.toBe(externalId2);
    expect(user.external_id).toMatch(guidRegex);
    expect(user.email).toBe("");
  });
});
