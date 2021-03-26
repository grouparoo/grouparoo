import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";

const appId = "app_7815696ecbf1c96e6894b779456d330e";

let apiClient: any;
let user: any;
const phoneNumber = "+5583999999999";
const newPhoneNumber = "+5583999999998";
const otherPhoneNumber = "+5583999999997";
const userId = "testuser123";
const alternativeUserId = "testuser345";
const email = "caio.silveira@mailinator.com";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const otherEmail = "sandro.arturo@mailinator.com";
const name = "Caio";
const alternativeName = "Evan";
const otherName = "Lucas";
const newEmail = "carlos.solimoes@mailinator.com";
const newName = "Carlos";
const newUserId = "testuser456";
const exampleDate = new Date(1597870204 * 1000);
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";
const customField = "testCustomField";
const brandNewEmail = "jake.jill@mailinator.com";
const brandNewUserId = "jake.jill";
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

async function getUser(userEmail): Promise<any> {
  const userResponse = await apiClient.users.get({ email: userEmail });
  if ("user" in userResponse) {
    return userResponse.user;
  }
  return null;
}

async function getListId(listName): Promise<any> {
  if (listName in listIds) {
    return listIds[listName];
  }
  const listsResponse = await apiClient.lists.get();
  const allLists = listsResponse.lists || [];
  const matchingList = allLists.filter((list) => list.name === listName)[0];
  if (matchingList) {
    listIds[listName] = matchingList.id;
    return matchingList.id;
  }
  return null;
}

async function deleteUsers(suppressErrors) {
  try {
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      newEmail,
      brandNewEmail,
    ]) {
      await apiClient.users.delete(emailToDelete);
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
        await apiClient.lists.delete({ listId });
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

describe("iterable/exportProfile", () => {
  beforeAll(() => {
    jest.setTimeout(helper.longTime);
  });
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("can create profile on Iterable", async () => {
    user = await getUser(email);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    user = await getUser(email);

    expect(user).not.toBe(null);
    expect(user.email).toBe(email);
    expect(user.dataFields.name).toBe(name);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, name },
      newProfileProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(name);
    expect(user.dataFields.phoneNumber).toBe(phoneNumber);
    expect(user.dataFields.customField).toBe(customField);
    expect(user.dataFields.signupDate).toBe("2020-08-19 20:50:04 +00:00");
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    const newPhoneNumber = "+5583999999998";

    await runExport({
      oldProfileProperties: {
        email,
        userId,
        name,
        phoneNumber,
        signupDate: exampleDate,
      },
      newProfileProperties: {
        email,
        userId,
        name: alternativeName,
        phoneNumber: newPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(alternativeName);
    expect(user.dataFields.phoneNumber).toBe(newPhoneNumber);
    expect(user.dataFields.signupDate).toBe(undefined);
    expect(user.dataFields.unknown_junk).toBeUndefined();
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
        name: alternativeName,
        phoneNumber: newPhoneNumber,
        signupDate: exampleDate,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(undefined);
    expect(user.dataFields.phoneNumber).toBe(undefined);
    expect(user.dataFields.signupDate).toBe(undefined);
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.dataFields.emailListIds.length).toBe(2);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);

    expect(user.dataFields.emailListIds).toContain(listOneId);
    expect(user.dataFields.emailListIds).toContain(listTwoId);
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.dataFields.emailListIds.length).toBe(1);

    const listOneId = await getListId(listOne);
    expect(listOneId).not.toBe(null);
    expect(user.dataFields.emailListIds).toContain(listOneId);
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    expect(user.dataFields.emailListIds).toContain(listTwoId);
    expect(user.dataFields.emailListIds).toContain(listThreeId);
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    const listFourId = await getListId(listFour);

    expect(listFourId).not.toBe(null);

    expect(user.dataFields.emailListIds).not.toContain(listFourId);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(alternativeEmail);
    expect(user.email).toBe(alternativeEmail);

    const oldUser = await getUser(email);
    expect(oldUser).toBe(null);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        userId,
        name: alternativeName,
        phoneNumber: newPhoneNumber,
      },
      newProfileProperties: {
        email: otherEmail,
        userId,
        name: otherName,
        phoneNumber: otherPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(otherEmail);
    expect(user.email).toBe(otherEmail);
    expect(user.dataFields.name).toBe(otherName);
    expect(user.dataFields.phoneNumber).toBe(otherPhoneNumber);

    const oldUser = await getUser(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("it can change the user id", async () => {
    await runExport({
      oldProfileProperties: {
        email: otherEmail,
        userId,
      },
      newProfileProperties: {
        email: otherEmail,
        userId: alternativeUserId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(otherEmail);
    expect(user.userId).toBe(alternativeUserId);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        email: otherEmail,
        userId,
      },
      newProfileProperties: {
        email: otherEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    const user = await getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await getUser(otherEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {
        email: otherEmail,
        userId,
      },
      newProfileProperties: {
        email: otherEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    user = await getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await getUser(newEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: newEmail,
        userId: newUserId,
        name: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    await indexContacts(newNock);

    user = await getUser(newEmail);
    expect(user).not.toBe(null);
    expect(user.userId).toBe(newUserId);
    expect(user.dataFields.name).toBe(newName);

    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user.dataFields.emailListIds).toContain(listFourId);
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await getUser(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUser(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { email: nonexistentEmail },
      newProfileProperties: {
        email: brandNewEmail,
        userId: brandNewUserId,
        name: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    brandNewUser = await getUser(brandNewEmail);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser.userId).toBe(brandNewUserId);
    expect(brandNewUser.dataFields.name).toBe(brandNewName);
  });

  test("can update the new user on email change if both emails exist", async () => {
    await runExport({
      oldProfileProperties: {
        email: brandNewEmail,
        userId: brandNewUserId,
        name: brandNewName,
      },
      newProfileProperties: {
        email: newEmail,
        userId: newUserId,
        name: otherName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts(newNock);

    // Leave the old one untouched
    let user = await getUser(brandNewEmail);
    expect(user.dataFields.name).toBe(brandNewName);
    expect(user.userId).toBe(brandNewUserId);

    // update the new one
    user = await getUser(newEmail);
    expect(user.dataFields.name).toBe(otherName);
    expect(user.userId).toBe(newUserId);
  });

  test("can delete the new user on email change if both emails exist", async () => {
    await runExport({
      oldProfileProperties: {
        email: brandNewEmail,
        userId: brandNewUserId,
        name: brandNewName,
      },
      newProfileProperties: {
        email: newEmail,
        userId: newUserId,
        name: otherName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexContacts(newNock);

    // Leave the old one untouched
    let user = await getUser(brandNewEmail);
    expect(user.dataFields.name).toBe(brandNewName);
    expect(user.userId).toBe(brandNewUserId);

    // Update the new one
    user = await getUser(newEmail);
    expect(user).toBe(null);
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
    ).rejects.toThrow("Request failed with status code 400");
  });

  test("can update a user passing a invalid properties", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: {
          email: brandNewEmail,
          signupDate: invalidDate,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow("Request failed with status code 400");
  });
});
