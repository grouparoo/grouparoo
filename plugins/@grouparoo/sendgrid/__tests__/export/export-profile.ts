import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";
import { SendgridClient } from "../../src/lib/client";

const appId = "app_78189023490-dfsjklfdsklj90-90-3k";

let apiClient: SendgridClient;
let user: any;
const phone_number = "+5583999999999";
const newPhoneNumber = "+5583999999998";
const otherPhoneNumber = "+5583999999997";
const email = "caio.silveira@mailinator.com";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const otherEmail = "sandro.arturo@mailinator.com";
const first_name = "Caio";
const last_name = "Silveira";
const company = "grouparoo";
const alternativeName = "Evan";
const otherName = "Lucas";
const city = "Campina Grande";
const newEmail = "carlos.solimoes@mailinator.com";
const newName = "Carlos";
const signup_date = new Date(1597870204 * 1000);
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewName = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";

const invalidEmail = "000";
const invalidDate = "GGG";

let listIds = {};

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getListId(listName): Promise<any> {
  if (listName in listIds) {
    return listIds[listName];
  }
  const allLists = await apiClient.getLists();
  const matchingList = allLists.filter((list) => list.name === listName)[0];
  if (matchingList) {
    listIds[listName] = matchingList.id;
    return matchingList.id;
  }
  return null;
}

async function deleteUsers(suppressErrors) {
  try {
    const usersIdsToDelete = [];
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      newEmail,
      brandNewEmail,
    ]) {
      const user = await apiClient.getUser(emailToDelete);
      if (user) {
        usersIdsToDelete.push(user["id"]);
      }
    }
    if (usersIdsToDelete.length > 0) {
      await apiClient.deleteUsers(usersIdsToDelete);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteLists(suppressErrors) {
  try {
    for (const groupToDelete of [listOne, listTwo, listThree, listFour]) {
      const listId = await getListId(groupToDelete);
      if (listId) {
        await apiClient.deleteList(listId);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await deleteLists(suppressErrors);
  await indexContacts(newNock, 30 * 1000);
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
    destinationOptions: null,
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

describe("sendgrid/exportProfile", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("can create profile on Sendgrid", async () => {
    user = await apiClient.getUser(email);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, first_name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    user = await apiClient.getUser(email);

    expect(user).not.toBe(null);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(first_name);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, first_name },
      newProfileProperties: {
        email,
        first_name,
        last_name,
        city,
        phone_number,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(email);
    expect(user.first_name).toBe(first_name);
    expect(user.last_name).toBe(last_name);
    expect(user.city).toBe(city);
    expect(user.phone_number).toBe(phone_number);
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    await runExport({
      oldProfileProperties: {
        email,
        first_name,
        phone_number,
      },
      newProfileProperties: {
        email,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);
    const user = await apiClient.getUser(email);

    expect(user.first_name).toBe(alternativeName);
    expect(user.phone_number).toBe(newPhoneNumber);
    expect(user.unknown_junk).toBeUndefined();
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);
    const user = await apiClient.getUser(email);
    expect(user.first_name).toBe("");
    expect(user.phone_number).toBe("");
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(email);
    expect(user["list_ids"].length).toBe(2);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);

    expect(user["list_ids"]).toContain(listOneId);
    expect(user["list_ids"]).toContain(listTwoId);
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(email);
    expect(user["list_ids"].length).toBe(1);
    const listOneId = await getListId(listOne);
    expect(listOneId).not.toBe(null);
    expect(user["list_ids"]).toContain(listOneId);
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(email);

    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    expect(user["list_ids"]).toContain(listTwoId);
    expect(user["list_ids"]).toContain(listThreeId);
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 5 * 1000);

    const user = await apiClient.getUser(email);
    const listFourId = await apiClient.createList(listFour);

    expect(listFourId).not.toBe(null);

    expect(user["list_ids"]).not.toContain(listFourId);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email: alternativeEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(alternativeEmail);
    expect(user).not.toBe(null);
    expect(user.email).toBe(alternativeEmail);

    const oldUser = await apiClient.getUser(email);
    expect(oldUser).toBe(null);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
      },
      newProfileProperties: {
        email: otherEmail,
        first_name: otherName,
        phone_number: otherPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(otherEmail);
    expect(user.email).toBe(otherEmail);
    expect(user.first_name).toBe(otherName);
    expect(user.phone_number).toBe(otherPhoneNumber);

    const oldUser = await apiClient.getUser(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        email: otherEmail,
      },
      newProfileProperties: {
        email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock, 60 * 1000);

    const user = await apiClient.getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await apiClient.getUser(otherEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {
        email: otherEmail,
      },
      newProfileProperties: {
        email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await apiClient.getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await apiClient.getUser(newEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: newEmail,
        first_name: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    user = await apiClient.getUser(newEmail);
    expect(user).not.toBe(null);
    expect(user.first_name).toBe(newName);

    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user["list_ids"]).toContain(listFourId);
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await apiClient.getUser(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await apiClient.getUser(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { email: nonexistentEmail },
      newProfileProperties: {
        email: brandNewEmail,
        first_name: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 60 * 1000);

    brandNewUser = await apiClient.getUser(brandNewEmail);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser.first_name).toBe(brandNewName);
  });

  test("can add a user passing a invalid email", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: {
          email: invalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow("");
  });
});
