import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";
import { ApiHelper } from "../../src/lib/apiHelper";

const appId = "app_78189023490-dfsjklfdsklj90-90-3k";

let apiClient: ApiHelper;
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
// const newNock = false;
// require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

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
      console.log(user);
      if (user) {
        usersIdsToDelete.push(user["id"]);
      }
    }
    if (usersIdsToDelete.length > 0) {
      await apiClient.deleteUsers(usersIdsToDelete);
    }
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
      newProfileProperties: { email, first_name: name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock, 120 * 1000);

    user = await apiClient.getUser(email);

    expect(user).not.toBe(null);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(name);
  });
});
