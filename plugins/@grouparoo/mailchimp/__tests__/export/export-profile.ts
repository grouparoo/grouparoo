import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import {
  loadAppOptions,
  updater,
  loadDestinationOptions,
} from "../utils/nockHelper";
import { generateMailchimpId } from "../../src/lib/shared/generateMailchimpId";
import crypto from "crypto";

const appId = "app_ch1mp-dfsjklfdsklj90-01-3k";

let apiClient: any;
let user: any;
const phone_number = "+5583999999999";
const newPhoneNumber = "+5583999999998";
const email = generateRandomEmail();
const alternativeEmail = generateRandomEmail();
const otherEmail = generateRandomEmail();
const newEmail = generateRandomEmail();
const brandNewEmail = generateRandomEmail();
const first_name = "Caio";
const last_name = "Silveira";
const alternativeName = "Evan";
const newName = "Carlos";
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";
const numberField = 15.5;
const brandNewName = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";
const invalidPhone = "000";
const invalidNumber = "AAAAA";
const invalidEmail = "AAAAA";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const destinationOptions = loadDestinationOptions(newNock);

function generateRandomEmail() {
  let hash = crypto
    .createHash("md5")
    .update(String(Math.random()))
    .digest("hex");
  return `${hash}@grouparoo.com`;
}

async function deleteUsers(suppressErrors) {
  const emails = [email, alternativeEmail, otherEmail, newEmail, brandNewEmail];
  const { listId } = destinationOptions;
  for (const email of emails) {
    try {
      const mailchimpId = generateMailchimpId(email);
      await apiClient.delete(`/lists/${listId}/members/${mailchimpId}`);
    } catch (err) {
      if (!suppressErrors) {
        throw err;
      }
    }
  }
}

async function getUser(email) {
  const { listId } = destinationOptions;
  const mailchimpId = generateMailchimpId(email);
  try {
    const response = await apiClient.get(
      `/lists/${listId}/members/${mailchimpId}`
    );
    if (!response.unique_email_id || response.status === "archived") {
      return null;
    }
    return response;
  } catch (err) {
    return null;
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
}

async function runExport({
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    appOptions,
    appId,
    connection: null,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions,
    export: {
      profile: null,
      profileId: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("mailchimp/exportProfile", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(true);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("can create profile on Mailchimp", async () => {
    user = await getUser(email);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email_address: email,
        FNAME: first_name,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(email);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(email);
    expect(user["merge_fields"]["FNAME"]).toBe(first_name);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email_address: email, FNAME: first_name },
      newProfileProperties: {
        email_address: email,
        FNAME: first_name,
        LNAME: last_name,
        PHONE: phone_number,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(email);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(email);
    expect(user["merge_fields"]["FNAME"]).toBe(first_name);
    expect(user["merge_fields"]["LNAME"]).toBe(last_name);
    expect(user["merge_fields"]["PHONE"]).toBe(phone_number);
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    await runExport({
      oldProfileProperties: {
        email_address: email,
        FNAME: first_name,
        LNAME: last_name,
        PHONE: phone_number,
      },
      newProfileProperties: {
        email_address: email,
        FNAME: alternativeName,
        LNAME: last_name,
        PHONE: newPhoneNumber,
        LTV: numberField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await getUser(email);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(email);
    expect(user["merge_fields"]["FNAME"]).toBe(alternativeName);
    expect(user["merge_fields"]["LNAME"]).toBe(last_name);
    expect(user["merge_fields"]["PHONE"]).toBe(newPhoneNumber);
    expect(user["merge_fields"]["LTV"]).toBe(numberField);
  });

  test("can try to change user variables using invalid data", async () => {
    // LTV and PHONE must be valid.
    await expect(
      runExport({
        oldProfileProperties: {
          email_address: email,
          FNAME: alternativeName,
          LNAME: last_name,
          PHONE: newPhoneNumber,
          LTV: numberField,
        },
        newProfileProperties: {
          email_address: email,
          FNAME: alternativeName,
          LNAME: last_name,
          PHONE: invalidPhone,
          LTV: invalidNumber,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/your merge fields were invalid/i);
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: email,
        FNAME: alternativeName,
        LNAME: last_name,
        PHONE: newPhoneNumber,
        LTV: numberField,
      },
      newProfileProperties: {
        email_address: email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(email);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(email);
    expect(user["merge_fields"]["FNAME"]).toBe("");
    expect(user["merge_fields"]["LNAME"]).toBe("");
    expect(user["merge_fields"]["PHONE"]).toBe("");
    expect(user["merge_fields"]["LTV"]).toBe("");
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: email,
      },
      newProfileProperties: {
        email_address: email,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });

    user = await getUser(email);
    expect(user["tags"].length).toEqual(2);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.objectContaining({ name: listTwo.toLowerCase() }),
      ])
    );
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: email,
      },
      newProfileProperties: {
        email_address: email,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });

    user = await getUser(email);
    expect(user["tags"].length).toEqual(1);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.not.objectContaining({ name: listTwo.toLowerCase() }),
      ])
    );
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: email,
      },
      newProfileProperties: {
        email_address: email,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });

    user = await getUser(email);
    expect(user["tags"].length).toEqual(3);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.objectContaining({ name: listTwo.toLowerCase() }),
        expect.objectContaining({ name: listThree.toLowerCase() }),
      ])
    );
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: email,
      },
      newProfileProperties: {
        email_address: email,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    user = await getUser(email);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.not.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: email,
      },
      newProfileProperties: {
        email_address: alternativeEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(alternativeEmail);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(alternativeEmail);
    const oldUser = await getUser(email);
    expect(oldUser).toBe(null);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: alternativeEmail,
      },
      newProfileProperties: {
        email_address: otherEmail,
        FNAME: alternativeName,
        PHONE: newPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(otherEmail);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(otherEmail);
    expect(user["merge_fields"]["FNAME"]).toBe(alternativeName);
    expect(user["merge_fields"]["PHONE"]).toBe(newPhoneNumber);

    const oldUser = await getUser(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: otherEmail,
      },
      newProfileProperties: {
        email_address: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    user = await getUser(otherEmail);
    expect(user).toBe(null);

    await expect(
      runExport({
        oldProfileProperties: {
          email_address: otherEmail,
        },
        newProfileProperties: {
          email_address: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/this list member cannot be removed./i);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    user = await getUser(newEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email_address: newEmail,
        FNAME: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });

    user = await getUser(newEmail);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(newEmail);
    expect(user["merge_fields"]["FNAME"]).toBe(newName);

    expect(user["tags"].length).toEqual(1);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await getUser(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUser(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { email_address: nonexistentEmail },
      newProfileProperties: {
        email_address: brandNewEmail,
        FNAME: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(brandNewEmail);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(brandNewEmail);
    expect(user["merge_fields"]["FNAME"]).toBe(brandNewName);
  });

  test("can add a user passing a invalid email", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: {
          email_address: invalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow();
  });
});
