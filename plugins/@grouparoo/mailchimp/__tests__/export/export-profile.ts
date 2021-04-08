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
import fs from "fs";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "app_ch1mp-dfsjklfdsklj90-01-3k";

let apiClient: any;
let user: any;
let emails: any;
const phone_number = "+5583999999999";
const newPhoneNumber = "+5583999999998";
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
const invalidPhone = "000";
const invalidNumber = "AAAAA";
const invalidEmail = "AAAAA";
const otherInvalidEmail = "foo@example.com";

// comment this to generate new emails.
// const newEmails = true;
// or this to use the existing ones;
const newEmails = false;

const emailsFile = path.join(__dirname, "../", "data", "emails.txt");

if (fs.existsSync(emailsFile) && !newEmails) {
  emails = JSON.parse(fs.readFileSync(emailsFile, "utf-8"));
} else {
  generateEmails();
}

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
  const hash =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return `${hash}@grouparoo.com`;
}

function generateEmails() {
  emails = {
    email: generateRandomEmail(),
    alternativeEmail: generateRandomEmail(),
    otherEmail: generateRandomEmail(),
    newEmail: generateRandomEmail(),
    brandNewEmail: generateRandomEmail(),
    nonexistentEmail: generateRandomEmail(),
  };
  fs.writeFileSync(emailsFile, JSON.stringify(emails));
}

async function deleteUsers(suppressErrors) {
  const { listId } = destinationOptions;
  for (const key in emails) {
    try {
      const mailchimpId = generateMailchimpId(emails[key]);
      await apiClient.post(`/lists/${listId}/members/${mailchimpId}/tags`, {
        tags: [
          { name: listOne.toLowerCase(), status: "inactive" },
          { name: listTwo.toLowerCase(), status: "inactive" },
          { name: listThree.toLowerCase(), status: "inactive" },
          { name: listFour.toLowerCase(), status: "inactive" },
        ],
      });
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
    if (!response["unique_email_id"] || response.status === "archived") {
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
  syncOperations = DestinationSyncModeData.sync.operations,
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
    syncOperations,
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
    await apiClient.end();
  }, helper.setupTime);

  test("cannot create profile on Mailchimp if sync mode does not allow it", async () => {
    user = await getUser(emails["email"]);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldProfileProperties: {},
        newProfileProperties: {
          email_address: emails["email"],
          FNAME: first_name,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can create profile on Mailchimp", async () => {
    user = await getUser(emails["email"]);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email_address: emails["email"],
        FNAME: first_name,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(emails["email"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["email"]);
    expect(user["merge_fields"]["FNAME"]).toBe(first_name);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: emails["email"],
        FNAME: first_name,
      },
      newProfileProperties: {
        email_address: emails["email"],
        FNAME: first_name,
        LNAME: last_name,
        PHONE: phone_number,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(emails["email"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["email"]);
    expect(user["merge_fields"]["FNAME"]).toBe(first_name);
    expect(user["merge_fields"]["LNAME"]).toBe(last_name);
    expect(user["merge_fields"]["PHONE"]).toBe(phone_number);
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    await runExport({
      oldProfileProperties: {
        email_address: emails["email"],
        FNAME: first_name,
        LNAME: last_name,
        PHONE: phone_number,
      },
      newProfileProperties: {
        email_address: emails["email"],
        FNAME: alternativeName,
        LNAME: last_name,
        PHONE: newPhoneNumber,
        LTV: numberField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await getUser(emails["email"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["email"]);
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
          email_address: emails["email"],
          FNAME: alternativeName,
          LNAME: last_name,
          PHONE: newPhoneNumber,
          LTV: numberField,
        },
        newProfileProperties: {
          email_address: emails["email"],
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
        email_address: emails["email"],
        FNAME: alternativeName,
        LNAME: last_name,
        PHONE: newPhoneNumber,
        LTV: numberField,
      },
      newProfileProperties: {
        email_address: emails["email"],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(emails["email"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["email"]);
    expect(user["merge_fields"]["FNAME"]).toBe("");
    expect(user["merge_fields"]["LNAME"]).toBe("");
    expect(user["merge_fields"]["PHONE"]).toBe("");
    expect(user["merge_fields"]["LTV"]).toBe("");
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: emails["email"],
      },
      newProfileProperties: {
        email_address: emails["email"],
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });

    user = await getUser(emails["email"]);
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
        email_address: emails["email"],
      },
      newProfileProperties: {
        email_address: emails["email"],
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });

    user = await getUser(emails["email"]);
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
        email_address: emails["email"],
      },
      newProfileProperties: {
        email_address: emails["email"],
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });

    user = await getUser(emails["email"]);
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
        email_address: emails["email"],
      },
      newProfileProperties: {
        email_address: emails["email"],
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    user = await getUser(emails["email"]);
    expect(user["tags"].length).toEqual(3);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.not.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: emails["email"],
      },
      newProfileProperties: {
        email_address: emails["alternativeEmail"],
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne],
      toDelete: false,
    });

    user = await getUser(emails["alternativeEmail"]);
    expect(user).not.toBe(null);
    expect(user["tags"].length).toEqual(1);
    expect(user["email_address"]).toBe(emails["alternativeEmail"]);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
      ])
    );
    const oldUser = await getUser(emails["email"]);
    expect(oldUser).toBe(null);
  });

  test("cannot change email address if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldProfileProperties: {
          email_address: emails["alternativeEmail"],
        },
        newProfileProperties: {
          email_address: emails["email"],
        },
        oldGroups: [listOne],
        newGroups: [listOne],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow updating/);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: emails["alternativeEmail"],
      },
      newProfileProperties: {
        email_address: emails["otherEmail"],
        FNAME: alternativeName,
        PHONE: newPhoneNumber,
      },
      oldGroups: [listOne],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["otherEmail"]);
    expect(user["merge_fields"]["FNAME"]).toBe(alternativeName);
    expect(user["merge_fields"]["PHONE"]).toBe(newPhoneNumber);
    expect(user["tags"].length).toEqual(3);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.objectContaining({ name: listTwo.toLowerCase() }),
        expect.objectContaining({ name: listThree.toLowerCase() }),
      ])
    );

    const oldUser = await getUser(emails["alternativeEmail"]);
    expect(oldUser).toBe(null);
  });

  test("can not delete a user if sync mode does not allow it but should remove the tags", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: true, delete: false },
        oldProfileProperties: {
          email_address: emails["otherEmail"],
        },
        newProfileProperties: {
          email_address: emails["otherEmail"],
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);
    user = await getUser(emails["otherEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["otherEmail"]);
    expect(user["tags"].length).toEqual(0);
  });

  test("can delete and restore a user", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: emails["otherEmail"],
      },
      newProfileProperties: {
        email_address: emails["otherEmail"],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email_address: emails["otherEmail"],
        FNAME: first_name,
      },
      oldGroups: [],
      newGroups: [listThree],
      toDelete: false,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user["tags"].length).toEqual(1);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listThree.toLowerCase() }),
      ])
    );
    expect(user).not.toBe(null);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        email_address: emails["otherEmail"],
      },
      newProfileProperties: {
        email_address: emails["otherEmail"],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    user = await getUser(emails["otherEmail"]);
    expect(user).toBe(null);
    await runExport({
      oldProfileProperties: {
        email_address: emails["otherEmail"],
      },
      newProfileProperties: {
        email_address: emails["otherEmail"],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    user = await getUser(emails["otherEmail"]);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    user = await getUser(emails["newEmail"]);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email_address: emails["newEmail"],
        FNAME: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });

    user = await getUser(emails["newEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["newEmail"]);
    expect(user["merge_fields"]["FNAME"]).toBe(newName);

    expect(user["tags"].length).toEqual(1);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await getUser(emails["brandNewEmail"]);
    expect(brandNewUser).toBe(null);
    let nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { email_address: emails["nonexistentEmail"] },
      newProfileProperties: {
        email_address: emails["brandNewEmail"],
        FNAME: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(emails["brandNewEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["brandNewEmail"]);
    expect(user["merge_fields"]["FNAME"]).toBe(brandNewName);
    nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);
  });

  test("can't add a user passing a invalid email", async () => {
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

  test("can't use an email that looks like a fake email (should return an info level error)", async () => {
    try {
      await runExport({
        oldProfileProperties: {},
        newProfileProperties: {
          email_address: otherInvalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toMatch(/looks fake or invalid/i);
      expect(error.errorLevel).toBe("info");
    }
  });
});
