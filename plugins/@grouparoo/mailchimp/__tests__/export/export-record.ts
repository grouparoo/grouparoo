import path from "path";
import { helper } from "@grouparoo/spec-helper";
import { exportRecord } from "../../src/lib/export/exportRecord";
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
const intermediateName = "Samba";
const alternativeName = "Evan";
const newName = "Carlos";
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";
const numberField = 15.5;
const brandNewName = "Jake";
const otherBrandNewName = "Carl";
const invalidPhone = "000";
const invalidNumber = "AAAAA";
const invalidEmail = "AAAAA";
const otherInvalidEmail = "foo@example.com";

// comment this to generate new emails.
// const newEmails = true;
// or this to use the existing ones;
const newEmails = false;

const emailsFile = path.join(__dirname, "../", "data", "emails.json");

if (fs.existsSync(emailsFile) && !newEmails) {
  emails = JSON.parse(fs.readFileSync(emailsFile, "utf-8"));
} else {
  generateEmails();
}

const { newNock } = helper.useNock(__filename, updater);
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

async function unsubscribeUser(email) {
  const { listId } = destinationOptions;
  const mailchimpId = generateMailchimpId(email);
  try {
    await apiClient.put(`/lists/${listId}/members/${mailchimpId}`, {
      status: "unsubscribed",
    });
  } catch (err) {
    return null;
  }
}

async function subscribeUser(email) {
  const { listId } = destinationOptions;
  const mailchimpId = generateMailchimpId(email);
  try {
    await apiClient.put(`/lists/${listId}/members/${mailchimpId}`, {
      status: "subscribed",
    });
  } catch (err) {
    return null;
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
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportRecord({
    appOptions,
    appId,
    connection: null,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions,
    syncOperations,
    export: {
      record: null,
      recordId: null,
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("mailchimp/exportRecord", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(true);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("cannot create record on Mailchimp if sync mode does not allow it", async () => {
    user = await getUser(emails["email"]);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldRecordProperties: {},
        newRecordProperties: {
          email_address: emails["email"],
          FNAME: first_name,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can create record on Mailchimp", async () => {
    user = await getUser(emails["email"]);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
        FNAME: first_name,
      },
      newRecordProperties: {
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

  test("can unsubscribe a user and after change user variables the status is still unsubscribed", async () => {
    // Phone must be valid.
    await unsubscribeUser(emails["email"]);
    user = await getUser(emails["email"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["email"]);
    expect(user["status"]).toBe("unsubscribed");

    await runExport({
      oldRecordProperties: {
        email_address: emails["email"],
        FNAME: first_name,
      },
      newRecordProperties: {
        email_address: emails["email"],
        FNAME: intermediateName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await getUser(emails["email"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["email"]);
    expect(user["merge_fields"]["FNAME"]).toBe(intermediateName);
    expect(user["status"]).toBe("unsubscribed");

    //subscribe the user back to avoid interference on other tests.
    await subscribeUser(emails["email"]);
    user = await getUser(emails["email"]);
    expect(user["status"]).toBe("subscribed");
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    await runExport({
      oldRecordProperties: {
        email_address: emails["email"],
        FNAME: first_name,
        LNAME: last_name,
        PHONE: phone_number,
      },
      newRecordProperties: {
        email_address: emails["email"],
        FNAME: alternativeName,
        LNAME: last_name,
        PHONE: newPhoneNumber,
        LTV: numberField,
        JOINED_AT: new Date("1980-12-21"),
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
    expect(user["merge_fields"]["JOINED_AT"]).toBe("1980-12-21");
  });

  test("can try to change user variables using invalid data", async () => {
    // LTV and PHONE must be valid.
    await expect(
      runExport({
        oldRecordProperties: {
          email_address: emails["email"],
          FNAME: alternativeName,
          LNAME: last_name,
          PHONE: newPhoneNumber,
          LTV: numberField,
        },
        newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
        FNAME: alternativeName,
        LNAME: last_name,
        PHONE: newPhoneNumber,
        LTV: numberField,
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["email"],
      },
      newRecordProperties: {
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
  });

  test("cannot change email address if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldRecordProperties: {
          email_address: emails["alternativeEmail"],
        },
        newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["alternativeEmail"],
      },
      newRecordProperties: {
        email_address: emails["otherEmail"],
        FNAME: alternativeName,
        PHONE: newPhoneNumber,
      },
      oldGroups: [listOne],
      newGroups: [listOne, listTwo, listThree, listFour],
      toDelete: false,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["otherEmail"]);
    expect(user["merge_fields"]["FNAME"]).toBe(alternativeName);
    expect(user["merge_fields"]["PHONE"]).toBe(newPhoneNumber);
    expect(user["tags"].length).toEqual(4);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.objectContaining({ name: listTwo.toLowerCase() }),
        expect.objectContaining({ name: listThree.toLowerCase() }),
        expect.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
  });

  test("cannot delete a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: true, delete: false },
        oldRecordProperties: {
          email_address: emails["otherEmail"],
        },
        newRecordProperties: {
          email_address: emails["otherEmail"],
        },
        oldGroups: [listOne, listTwo, listThree], // missing listFour to make sure that we're only removing the tags we know about;
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);
    user = await getUser(emails["otherEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["otherEmail"]);
    expect(user["tags"].length).toEqual(4);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.objectContaining({ name: listTwo.toLowerCase() }),
        expect.objectContaining({ name: listThree.toLowerCase() }),
        expect.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
  });

  test("can delete and restore a user", async () => {
    await runExport({
      oldRecordProperties: {
        email_address: emails["otherEmail"],
      },
      newRecordProperties: {
        email_address: emails["otherEmail"],
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email_address: emails["otherEmail"],
        FNAME: first_name,
      },
      oldGroups: [],
      newGroups: [listThree],
      toDelete: false,
    });

    user = await getUser(emails["otherEmail"]);
    expect(user["tags"].length).toEqual(4);
    expect(user["tags"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: listOne.toLowerCase() }),
        expect.objectContaining({ name: listTwo.toLowerCase() }),
        expect.objectContaining({ name: listThree.toLowerCase() }),
        expect.objectContaining({ name: listFour.toLowerCase() }),
      ])
    );
    expect(user).not.toBe(null);
  });

  test("can delete a user", async () => {
    await runExport({
      oldRecordProperties: {
        email_address: emails["otherEmail"],
      },
      newRecordProperties: {
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
      oldRecordProperties: {
        email_address: emails["otherEmail"],
      },
      newRecordProperties: {
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
      oldRecordProperties: {},
      newRecordProperties: {
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

  test("try to delete a user passing nonexistent email on the newRecordProperties and oldRecordProperties", async () => {
    let brandNewUser = await getUser(emails["brandNewEmail"]);
    expect(brandNewUser).toBe(null);
    let nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email_address: emails["nonexistentEmail"] },
      newRecordProperties: {
        email_address: emails["brandNewEmail"],
        FNAME: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(emails["brandNewEmail"]);
    expect(user).toBe(null);
    nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);
  });

  test("can add a user passing a nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await getUser(emails["brandNewEmail"]);
    expect(brandNewUser).toBe(null);
    let nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email_address: emails["nonexistentEmail"] },
      newRecordProperties: {
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

  test("can change a user email and other variables passing a existing email on the newRecordProperties and nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await getUser(emails["brandNewEmail"]);
    expect(brandNewUser).not.toBe(null);
    let nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email_address: emails["nonexistentEmail"] },
      newRecordProperties: {
        email_address: emails["brandNewEmail"],
        FNAME: otherBrandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    user = await getUser(emails["brandNewEmail"]);
    expect(user).not.toBe(null);
    expect(user["email_address"]).toBe(emails["brandNewEmail"]);
    expect(user["merge_fields"]["FNAME"]).toBe(otherBrandNewName);
    nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);
  });

  test("can change a user email and delete it passing a existing email on the newRecordProperties and nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await getUser(emails["brandNewEmail"]);
    expect(brandNewUser).not.toBe(null);
    let nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email_address: emails["nonexistentEmail"] },
      newRecordProperties: {
        email_address: emails["brandNewEmail"],
        FNAME: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await getUser(emails["brandNewEmail"]);
    expect(user).toBe(null);
    nonexistentUser = await getUser(emails["nonexistentEmail"]);
    expect(nonexistentUser).toBe(null);
  });

  test("can't add a user passing a invalid email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
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
        oldRecordProperties: {},
        newRecordProperties: {
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
